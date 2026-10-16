# Full Stack Open — Phonebook (Exercises 2.6–2.15)

A React + Vite phonebook using Axios and JSON Server.

## Run locally

Install dependencies:

```bash
npm install
```

In **terminal 1**, start the JSON Server backend:

```bash
npm run server
```

The contacts endpoint is http://localhost:3001/persons.

In **terminal 2**, start Vite:

```bash
npm run dev
```

Visit the local address displayed by Vite (typically http://localhost:5173).

## Implemented exercises

- **2.6:** Add contacts with controlled React inputs.
- **2.7:** Detect duplicate names (extended in 2.15 to offer number replacement).
- **2.8:** Record phone numbers.
- **2.9:** Case-insensitive search.
- **2.10:** Split filter, contact form, and contact list into components.
- **2.11:** Load initial contacts from JSON Server using Axios and an effect hook.
- **2.12:** Save new contacts to JSON Server with POST.
- **2.13:** Move network requests to `src/services/persons.js`.
- **2.14:** Delete contacts with confirmation and DELETE.
- **2.15:** Replace an existing contact's phone number with confirmation and PUT.

Changes are saved in `db.json` by JSON Server. Both processes must be running for the app to work. The phonebook keeps client state in the root `App` component.
