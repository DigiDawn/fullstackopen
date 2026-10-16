# Full Stack Open — Phonebook (Exercises 2.6–2.17)

React/Vite phonebook with a JSON Server backend.

## Start

```sh
npm install
npm run server
```

Keep the backend running. In another terminal:

```sh
npm run dev
```

The backend is at http://localhost:3001/persons and the frontend is typically http://localhost:5173.

## Exercises 2.16–2.17

- Success notifications appear for five seconds after adding a person or updating a number.
- Error notifications have distinct red styling.
- If a person was deleted in another browser, updating their number catches HTTP 404, removes the stale entry from the local list, and shows an error notification.
- Errors are handled so no unhandled promise rejection is thrown.
- Existing CRUD and search features are preserved.

## Test the concurrent-edit scenario

Open the app in two browsers. Delete a contact in browser A, then attempt to change its number in browser B. Browser B should show a red notification and remove the stale contact.

Do not commit node_modules.
