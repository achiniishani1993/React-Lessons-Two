# React-Lessons-Two
Practice UseEffect & Api

# Nationality Guessing Game (React)

A simple React-based game where users guess the most likely country based on a given name using the Nationalize API. The game includes a scoring system and feedback on each guess.

# Features
* Fetches nationality prediction from API
* User guesses the top country code
* Score starts at 10
* Score decreases by 1 for each wrong guess
* Displays correct answer after each attempt
* Shows probability of top predicted countries
* Simple and responsive Bootstrap UI

# How It Works
1. Click Get Name button to fetch the name prediction.
2. The app shows a name and asks you to guess the country code (e.g., US, IN, NG).
3. Each wrong guess reduces your score by 1.
4. When you guess correctly, the result is shown and game stops.

# Tech Stack
* React (useState)
* Bootstrap 5
* Fetch API
* Nationalize.io API

🔗 API Used

https://api.nationalize.io?name=nathaniel