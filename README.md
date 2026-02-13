# Discord Lite

<p align="center">
  <strong>Lightweight • Self-Hosted • Privacy-First</strong>
</p>

<p align="center">
  A minimal real-time chat and voice server inspired by Discord.
</p>

<p align="center">
  <img src="https://img.shields.io/github/stars/m0nte1ro/discord-lite?style=flat-square" />
  <img src="https://img.shields.io/github/issues/m0nte1ro/discord-lite?style=flat-square" />
  <img src="https://img.shields.io/badge/license-BUSL%201.1-blue?style=flat-square" />
  <img src="https://img.shields.io/badge/status-WIP-orange?style=flat-square" />
</p>

---

## ✨ What is this?

**Discord Lite** is a **lightweight, self-hosted real-time communication server**
focused on **privacy**, **data ownership**, and **simplicity**.

There is:
- ❌ no central service  
- ❌ no cloud dependency  
- ❌ no forced accounts  
- ❌ no tracking  

You run the server.  
You own the data.

---

## 🎯 Project Goals

- 🪶 Lightweight and minimal
- 🏠 Fully self-hosted
- 🔒 Privacy-first by design
- 💬 Real-time text chat
- 🔊 Voice channels
- 🧠 Simple permission system
- 🧩 Modular and hackable

This is **not** a Discord clone.  
It is a pragmatic alternative for **small communities, LANs, and private servers**.

---

## 🧱 Tech Stack

### Backend
- **Runtime:** Node.js
- **Web Framework:** Fastify
- **ORM:** Prisma
- **Database:** PostgreSQL
- **Real-time Transport:** WebSockets
- **Authentication:** JWT

### Frontend (planned)
- **Framework:** Nuxt
- **Real-time Transport:** WebSockets
- Minimal UI, no bloat

---

## 🔐 Authentication Model

- Guest users supported
- Optional username claiming via password
- Token-based sessions
- No email required
- No central identity provider

Usernames are global, human-readable, and visually distinct.

---

## 🏠 Self-Hosting Philosophy

Discord Lite is designed to:
- run on local machines or private servers
- avoid vendor lock-in
- keep **all data under your control**

No external services are required.

---

## 🚧 Project Status

This project is **actively under development**.

Planned features:
- [x] Core data model
- [x] Authentication & sessions
- [ ] Server & channel management
- [ ] Real-time chat
- [ ] File sharing
- [ ] Voice channels
- [ ] Minimal frontend

Expect breaking changes until v1.0.

---

## 📜 License

This project is licensed under the **Business Source License (BUSL 1.1)**.

You may:
- use
- self-host
- modify for personal or educational purposes

You may **NOT**:
- commercialize
- offer as a hosted service
- redistribute for profit

For commercial licensing, contact the author.

---

<p align="center">
  Built with ❤️ for people who want control over their software.
</p>
