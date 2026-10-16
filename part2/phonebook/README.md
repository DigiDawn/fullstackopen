# Full Stack Open — Phonebook (Exercises 2.6–2.11)

React + Vite Phonebook, with initial contacts fetched from `db.json` using axios and `useEffect`. Previous features (adding contacts locally, duplicate-name warnings, case-insensitive filtering, reusable components) remain.

## Run

```bash
npm install
```

Start the JSON server in terminal 1:

```bash
npm run server
```

Verify http://localhost:3001/persons returns JSON.

Start Vite in terminal 2:

```bash
npm run dev
```

Open the Vite URL (usually http://localhost:5173).

**Note:** Exercise 2.11 only requires fetching initial data from the server. New contacts are stored in React state and will disappear on refresh until the later server-write exercises are implemented.
