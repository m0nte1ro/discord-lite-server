import { buildApp } from "../../app.js";
import { prisma } from "../../lib/prisma.js";

export async function registerAuthRoutes() {
    const app = await buildApp();

    app.post("/users", async (req, reply) => {
        const { username } = req.body as { username: string };

        const user = await prisma.user.create({
            data: {
                username,
                displaySuffix: Math.random().toString(36).slice(2, 8).toUpperCase(),
                claimed: false
            }
        });

        return user;
    });
}