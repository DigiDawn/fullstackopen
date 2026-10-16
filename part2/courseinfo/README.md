# Full Stack Open — Course Information (Exercises 2.1–2.5)

React + Vite implementation of the University of Helsinki Full Stack Open course information exercises.

## Run locally

```bash
npm install
npm run dev
```

Open the local URL printed by Vite.

## Build

```bash
npm run build
```

## Structure

- `src/App.jsx`: courses data and list rendering
- `src/Course.jsx`: Course, Header, Content, Part and Total components
- `src/main.jsx`: React entry point

Each course and part is rendered with `map()` and stable React keys. Exercise totals use `reduce()`.
