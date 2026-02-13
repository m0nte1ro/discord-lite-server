# Discord Lite (working title)

A lightweight, self-hosted real-time chat and voice server inspired by Discord.

This project focuses on **simplicity**, **privacy**, and **data ownership**.
There is no central server, no tracking, and no cloud dependency — you run it,
you own the data.

---

## ✨ Goals

- Lightweight and minimal
- Fully self-hosted
- Real-time text and voice communication
- No central authority
- Privacy-first by design
- User-controlled data

This is **not** a Discord clone.
It is a pragmatic alternative for small communities and private servers.

---

## 🧱 Tech Stack

### Backend
- **Node.js**
- **Fastify**
- **Prisma ORM**
- **PostgreSQL**
- **WebSockets**
- **JWT authentication**
- **Argon2** for password hashing

### Frontend (planned)
- **Nuxt**
- **WebSockets**
- Minimal UI, no bloat

---

## 🔐 Authentication Model

- Guest users supported
- Optional username claiming via password
- Token-based sessions
- No forced registration
- No email required

---

## 🏠 Self Hosting

The server is designed to be:
- easy to deploy
- runnable on local networks
- suitable for private infrastructure

No external services are required.

---

## 📜 License

This project is licensed under the **Business Source License (BUSL 1.1)**.

You may:
- use
- self-host
- modify for personal use

You may NOT:
- commercialize
- offer as a hosted service
- redistribute for profit

For commercial licensing, contact the author.
