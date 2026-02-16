import type { CreateUserInput, UserResponse } from "./users.types.js";
import * as usersRepository from "./users.repository.js";
import { generateSuffix } from "../../utils/generateSuffix.js";
import { UsernameClaimedError, FailedToCreateUserError } from "./users.errors.js";

export async function createUser(
  input: CreateUserInput
): Promise<UserResponse> {
  const { username } = input;

  // Business rule:
  // If username is already claimed, do not allow new users
  const usernameIsClaimed = await usersRepository.findClaimedUser(username);

  if (usernameIsClaimed) {
    throw new UsernameClaimedError(username);
  }

  // Try until we get a unique suffix
  let user;
  let attempts = 0;
  while (!user) {
    try {
      const suffix = generateSuffix();

      user = await usersRepository.createGuestUser(username, suffix);
    } catch (err: any) {
      // Prisma unique constraint error
      if (err.code !== "P2002") {
        throw err;
      }
    }

    attempts++;
    
    if (attempts > 5) {
      throw new FailedToCreateUserError();
    }
  }

  return {
    id: user.id,
    username: user.username,
    displaySuffix: user.displaySuffix,
    createdAt: user.createdAt,
    lastSeenAt: user.lastSeenAt
  };
}
