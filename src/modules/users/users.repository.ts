import { prisma } from "../../lib/prisma.js";

export async function findClaimedUser(username: string) {
  return prisma.user.findFirst({
    where: {
      username,
      claimed: true
    }
  });
}

export async function createGuestUser(username: string, displaySuffix: string) {
  return prisma.user.create({
    data: {
      username,
      displaySuffix,
      claimed: false
    }
  });
}
