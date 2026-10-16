# Full Stack Open — Exercises and Projects

React and full-stack development exercises from the University of Helsinki's [Full Stack Open](https://fullstackopen.com/en/) course.

This repository contains separate applications for **Part 1 (Exercises 1.1–1.14)** and **Part 2 (Exercises 2.1–2.20)**.

## Project structure

```text
fullstackopen/
├── README.md
├── part1/
│   ├── courseinfo/   # 1.1–1.5
│   ├── unicafe/      # 1.6–1.11
│   └── anecdotes/    # 1.12–1.14
└── part2/
    ├── courseinfo/   # 2.1–2.5
    ├── phonebook/    # 2.6–2.17
    └── countries/    # 2.18–2.20
```

Each folder is an independent Vite + React application.

## Part 1 — React fundamentals (1.1–1.14)

| Project | Exercises | Description |
| --- | --- | --- |
| `part1/courseinfo` | 1.1–1.5 | Render course information using React components and props. |
| `part1/unicafe` | 1.6–1.11 | Collect feedback and display statistics. |
| `part1/anecdotes` | 1.12–1.14 | Display anecdotes, vote, and show the most-voted anecdote. |

## Part 2 — Communicating with the server (2.1–2.20)

| Project | Exercises | Description |
| --- | --- | --- |
| `part2/courseinfo` | 2.1–2.5 | Render multiple courses and calculate exercise totals with `map()` and `reduce()`. |
| `part2/phonebook` | 2.6–2.17 | Add, search, update, and delete contacts; persist data with JSON Server; show success and error notifications. |
| `part2/countries` | 2.18–2.20 | Search countries, view country details and flags, and display weather for a capital city. |

### Technologies used

- React, JavaScript, JSX, and Vite
- React hooks (`useState`, `useEffect`)
- Axios and REST APIs
- JSON Server for the Phonebook's local backend
- Helsinki REST Countries API and OpenWeatherMap for the Countries application
- CSS for basic styling and notifications

## Run a project locally

Make sure [Node.js](https://nodejs.org/) and npm are installed. From the repository root, choose an application:

```bash
cd part1/unicafe
npm install
npm run dev
```

For another project, change into its directory and run the same installation and development commands. For example:

```bash
cd part2/courseinfo
npm install
npm run dev
```

### Phonebook: start the backend too

In the `part2/phonebook` directory, run the backend in one terminal:

```bash
npm install
npm run server
```

Keep that terminal open. Start the React frontend in a second terminal:

```bash
npm run dev
```

The JSON Server API should be available at <http://localhost:3001/persons>. The frontend normally runs at <http://localhost:5173> (or the URL Vite prints).

### Countries: optional weather API key

The Countries app fetches country information from the University of Helsinki's REST Countries API. To display weather, obtain an API key from [OpenWeatherMap](https://openweathermap.org/api).

Create `part2/countries/.env` with:

```env
VITE_OPENWEATHER_API_KEY=your_api_key_here
```

Restart the Vite server after editing `.env`. Do **not** commit `.env` or real API keys. Note that `VITE_` variables are visible in the browser, so this setup is appropriate for the course exercise, not for protecting production secrets.

## Notes

- Do not commit `node_modules/`, build output, or local `.env` files.
- Review, test, and understand each application before marking its exercises completed in the [Full Stack Open submission system](https://studies.cs.helsinki.fi/stats/courses/fullstackopen).
- Part 2 is submitted **one part at a time**, so check all exercises you intend to complete before submitting the part.
