# Full Stack Open — Exercise Solutions

My exercise solutions for [Full Stack Open](https://fullstackopen.com/en/), the University of Helsinki's course on modern web development.

This repository is organized by course part. Each application lives in its own folder and can be run independently.

## Repository structure

```text
fullstackopen/
├── part0/
│   ├── 0.4-new-note.md
│   ├── 0.5-spa.md
│   └── 0.6-new-note-spa.md
├── part1/
│   ├── courseinfo/
│   ├── unicafe/
│   └── anecdotes/
├── part2/
├── part3/
└── part4/
    └── bloglist/
        ├── controllers/
        ├── models/
        ├── tests/
        ├── utils/
        ├── app.js
        ├── index.js
        └── package.json
```

> This is the intended repository layout. The availability and completion status of Parts 2 and 3 are not verified here. Part 4 is supplied as a separate backend project.

## Part 0 — Fundamentals of Web Apps

Sequence diagrams showing browser–server communication:

| Exercise | Description |
|---|---|
| 0.4 | Creating a new note in the traditional web app |
| 0.5 | Loading the single-page app (SPA) |
| 0.6 | Creating a new note in the SPA |

The diagrams are written in Mermaid inside Markdown files. They can be previewed in GitHub.

## Part 1 — Introduction to React

Three independent React applications:

| Folder | Exercises | Description |
|---|---|---|
| `courseinfo` | 1.1–1.5 | Course information, reusable components, and exercise totals |
| `unicafe` | 1.6–1.11 | Feedback buttons and statistics, including average and positive percentage |
| `anecdotes` | 1.12–1.14 | Random anecdotes, voting, and most-voted anecdote |

To run an application, open its folder and use:

```bash
npm install
npm run dev
```

Open the local URL shown by Vite in the terminal. Run the commands separately in each application folder.

## Part 2 — Communicating with Server

Part 2 covers rendering collections, forms, server communication, and styling React applications. Add each exercise application's folder here as you complete it. This README does not claim any Part 2 exercises are finished.

## Part 3 — Programming a Server with Node.js and Express

Part 3 covers Express APIs, MongoDB, validation, deployment, and linting. Add the actual Part 3 project folder and any deployment link when available. This README does not claim a verified Part 3 deployment.

## Part 4 — Testing Express Servers, User Administration

**Application:** `part4/bloglist`  
**Exercises:** 4.1–4.23 (including starred exercises in the supplied project)

A REST API for blog posts, built with Node.js, Express, MongoDB/Mongoose, and automated tests. It includes blog creation and editing, user accounts, login, JWT authentication, and restrictions on deleting other users' blogs.

### Part 4 setup

Requirements: Node.js 22+, npm, and a MongoDB connection (local or MongoDB Atlas).

```bash
cd part4/bloglist
npm install
```

Copy `.env.example` to `.env` and configure the values:

```dotenv
PORT=3003
MONGODB_URI=mongodb://127.0.0.1:27017/bloglist
TEST_MONGODB_URI=mongodb://127.0.0.1:27017/bloglist_test
SECRET=replace-with-a-long-random-secret
```

The MongoDB URLs above are examples. If using Atlas, substitute your actual connection strings. Keep `.env` out of version control. **Never point the test connection to your development or production database:** tests reset collections.

Start the backend:

```bash
npm run dev
```

Run checks:

```bash
npm run check
npm run test:unit
npm test
npm run lint
```

The full test suite requires MongoDB and installed dependencies. Passing syntax or unit tests alone does not prove the integration tests pass.

### Part 4 API endpoints

| Method | Endpoint | Description | Authorization |
|---|---|---|---|
| GET | `/api/blogs` | List blogs | Public |
| GET | `/api/blogs/:id` | Get a blog | Public |
| POST | `/api/blogs` | Create a blog | Bearer token |
| PUT | `/api/blogs/:id` | Update a blog | Public in this exercise implementation |
| DELETE | `/api/blogs/:id` | Delete a blog | Creator's Bearer token |
| GET | `/api/users` | List users | Public |
| POST | `/api/users` | Register a user | Public |
| POST | `/api/login` | Log in and receive token | Public |

Example registration request:

```bash
curl -X POST http://localhost:3003/api/users \
  -H 'Content-Type: application/json' \
  -d '{"username":"alice","name":"Alice","password":"secret123"}'
```

Example login request:

```bash
curl -X POST http://localhost:3003/api/login \
  -H 'Content-Type: application/json' \
  -d '{"username":"alice","password":"secret123"}'
```

For authenticated endpoints, send `Authorization: Bearer YOUR_TOKEN`.

### Part 4 exercise map

| Exercises | Implementation |
|---|---|
| 4.1–4.2 | Blog API and modular Express project structure |
| 4.3–4.7 | Blog helper functions and unit tests |
| 4.8–4.12 | SuperTest API tests, JSON IDs, defaults, and validation |
| 4.13–4.14 | Delete and update operations with tests |
| 4.15–4.17 | User registration, validation, and blog ownership |
| 4.18–4.19 | JWT login and authenticated blog creation |
| 4.20–4.22 | Token/user middleware and creator-only deletion |
| 4.23 | Authentication-aware API tests |

The Part 4 application is **backend-only**; it does not need React or JSX.

## Technologies

- **Frontend:** React, JavaScript, Vite, HTML, CSS (Part 1)
- **Backend:** Node.js, Express (Part 4)
- **Database:** MongoDB, Mongoose (Part 4)
- **Authentication:** JSON Web Tokens, password hashing (Part 4)
- **Testing:** Node.js test runner, SuperTest (Part 4)

## Exercise submission

Submit exercise counts through the [Full Stack Open submission system](https://studies.cs.helsinki.fi/stats/courses/fullstackopen). Review the [official course instructions](https://fullstackopen.com/en/) for current requirements. This repository README does not indicate that exercises have been submitted or accepted.

## Notes

- Each application should have its own `package.json` where applicable.
- Do not commit `.env`, API secrets, database passwords, or `node_modules`.
- Run backend integration tests against a dedicated test database.
- Update this README as new parts are completed and verified.

## Course

[Full Stack Open — University of Helsinki](https://fullstackopen.com/en/)
