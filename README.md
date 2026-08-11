# Real-timeCollaborative

Built with XOVA AI Engine

## Overview
A chat app application with realtime, messaging

## Features
- realtime
- messaging

## Quick Start

### Prerequisites
- Node.js 18+
- PostgreSQL 14+
- Docker (optional)

### Installation

```bash
npm install
cp .env.example .env
npm run db:migrate
npm run dev
```

### Running with Docker

```bash
docker-compose up --build
```

## API Endpoints

### GET /api/users/me
Get current user profile

### PUT /api/users/me
Update user profile

### GET /api/users/:id
Get user public profile

### POST /api/notifications/subscribe
Subscribe to notifications (WebSocket)

### GET /api/notifications
Get notification history

### GET /api/health
API health check endpoint

## Database Schema

### users
  - id
  - email
  - password_hash
  - name
  - avatar_url
  - bio
  - created_at
  - updated_at

### sessions
  - id
  - user_id
  - token
  - expires_at
  - ip_address

### messages
  - id
  - sender_id
  - receiver_id
  - content
  - is_read
  - created_at

### conversations
  - id
  - user1_id
  - user2_id
  - last_message_at

## Tech Stack

**Frontend:** React 18, TypeScript, Tailwind CSS, Framer Motion
**Backend:** Node.js, Express.js, Socket.io, JWT Auth
**Database:** PostgreSQL, Redis
**DevOps:** Docker, GitHub Actions

## Deployment

Production deployment configured for AWS ECS / Kubernetes.

```bash
npm run deploy
```

## License

MIT
