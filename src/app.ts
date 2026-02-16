import Fastify, { type FastifyInstance } from "fastify";
import websocket from "@fastify/websocket";
import { usersRoutes } from "./modules/users/users.routes.js";
import { AppError } from "./lib/errors.js";

export async function buildApp(): Promise<FastifyInstance> {
    const app = Fastify({ logger: true });

    app.register(websocket);

    app.setErrorHandler((error, request, reply) => {
      if (error instanceof AppError) {
        return reply.code(error.statusCode).send({
          error: error.errorCode,
          message: error.message
        });
      }

      request.log.error(error);

      return reply.code(500).send({
        error: "INTERNAL_SERVER_ERROR"
      });
    });
    
    app.get("/health", async () => {
      return { status: "ok" };
    });

    app.register(usersRoutes);

    return app;
}