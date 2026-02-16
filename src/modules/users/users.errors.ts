import { AppError } from "../../lib/errors.js";

export class UsernameClaimedError extends AppError {
  constructor(username: string) {
    super(
        `Username "${username}" is already claimed`,
        409,
        "USERNAME_CLAIMED"
    );
  }
}

export class FailedToCreateUserError extends AppError {
  constructor() {
    super(
      "Failed to create user after multiple attempts",
      500,
      "USER_CREATION_FAILED"
    );
  }
}
