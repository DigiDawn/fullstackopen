# Full Stack Open Part 2 — Data for Countries (2.18–2.20)

This is a **separate app** from the Phonebook and Course Info exercises.

## Setup
```bash
npm install
cp .env.example .env
npm run dev
```
On Windows, copy `.env.example` to `.env` manually if `cp` isn't available.

To enable weather, obtain an API key from https://openweathermap.org/api and set:
```
VITE_OPENWEATHER_API_KEY=your_actual_key
```
Restart Vite after changing `.env`. Do not commit `.env` or your real key.
Vite `VITE_` variables are exposed to browser users, so this is suitable only for the exercise, not for production secrets.

## Features
- 2.18: Fetch countries from Helsinki's REST Countries API; display match count guidance, list or details
- 2.19: Show button for any country in the matching list
- 2.20: Weather in the capital via OpenWeatherMap (when a valid key is supplied)

## Submission structure
part2/courseinfo, part2/phonebook, part2/countries
