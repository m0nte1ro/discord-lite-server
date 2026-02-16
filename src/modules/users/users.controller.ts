import type { FastifyRequest, FastifyReply } from "fastify";
import * as usersService from "./users.service.js";
import type { CreateUserInput } from "./users.types.js";

export async function createUserHandler(
  request: FastifyRequest,
  reply: FastifyReply
) {
    const body = request.body as CreateUserInput;

    const user = await usersService.createUser(body);

    return reply.code(201).send(user);
}
