# Full Stack Open — Exercises

My exercise projects for the University of Helsinki's [Full Stack Open](https://fullstackopen.com/en/) course.

## Repository structure

```text
fullstackopen/
├── README.md
├── part1/
│   ├── courseinfo/
│   ├── unicafe/
│   └── anecdotes/
├── part2/
│   ├── courseinfo/
│   ├── phonebook/
│   └── countries/
└── part3/
    ├── README.md
    ├── phonebook-frontend/
    └── phonebook-backend/
```

## Part 1 — React basics (Exercises 1.1–1.14)

- `part1/courseinfo` — exercises 1.1–1.5 (final version)
- `part1/unicafe` — exercises 1.6–1.11 (final version)
- `part1/anecdotes` — exercises 1.12–1.14 (final version)

Each folder is an independent Vite React application. To run one:

```bash
cd part1/unicafe
npm install
npm run dev
```

Run the same commands in `courseinfo` and `anecdotes` to test them.

## Part 2 — Communicating with a server (Exercises 2.1–2.20)

- `part2/courseinfo` — exercises 2.1–2.5: rendering course information
- `part2/phonebook` — exercises 2.6–2.17: forms, filtering, server communication, and notifications
- `part2/countries` — exercises 2.18–2.20: country data and weather information

These are independent React/Vite applications. Install dependencies and run `npm run dev` inside the application you want to start. The Phonebook uses a JSON Server during Part 2; the Countries project needs a configured weather API key. See each project's configuration for details. Do not commit `.env` files containing keys.

## Part 3 — Node.js, Express, and MongoDB (Exercises 3.1–3.22)

Part 3 continues the Phonebook application with a database-backed API and a React frontend. **Only the Phonebook frontend and backend belong in `part3/`.**

- `part3/phonebook-frontend` — React/Vite interface for the Phonebook
- `part3/phonebook-backend` — Express REST API, Mongoose model, `mongo.js` command-line database tool, validation, logging, error handling, and ESLint

### Requirements

- Node.js 22.3.0 or newer and npm
- MongoDB Atlas cluster, database user, and network access configuration
- A `MONGODB_URI` environment variable for the backend (keep credentials private)

### Run Part 3 locally

In one terminal:

```bash
cd part3/phonebook-backend
npm install
npm run dev
```

In a second terminal:

```bash
cd part3/phonebook-frontend
npm install
npm run dev
```

The frontend uses Vite's proxy to reach the Express API at `http://localhost:3001/api/persons`. The backend also exposes `http://localhost:3001/info`.

### Build and serve the full application

Install dependencies in both folders first. Then, from `part3/phonebook-backend`:

```bash
npm run build:ui
npm start
```

Visit `http://localhost:3001` to use the production frontend served by Express.

### Database command-line tool (Exercise 3.12)

See `part3/phonebook-backend/.env.example` and its README for the MongoDB URI template needed by `mongo.js`.

```bash
cd part3/phonebook-backend
node mongo.js yourpassword "Anna" "040-1234556"
node mongo.js yourpassword
```

Never commit database passwords, `.env` files, or other secrets.

### Linting

```bash
cd part3/phonebook-backend
npm run lint
```

### Deployment (Exercises 3.10, 3.11, 3.21)

Deploy the **backend** to a service such as Render or Fly.io and configure the MongoDB connection string as a secret. Build the React frontend and have Express serve its production files; do not deploy the frontend as a separate service for these exercises.

**Live application URL:** _Add after deployment and verification._

The Part 3 source is prepared for exercises 3.1–3.22; database connectivity, full builds, lint execution, and live deployment must still be verified.

## Notes

Do not commit `node_modules/`, credentials, or local `.env` files. Review, test, and understand your work before marking exercises completed in the course submission system.
