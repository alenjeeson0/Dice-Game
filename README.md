# 🎲 Dice Roll

A simple, playful dice-rolling web app — enter how many dice you want to roll, hit the button, and get instant randomized results with matching dice-face graphics.

Built as part of my JavaScript learning journey while transitioning into frontend development.

## 🚀 Live Demo

[View Live Site](https://alenjeeson0.github.io/Dice-Game/) <!-- replace with your Netlify link -->

## 📸 Preview

<!-- Add a screenshot here once deployed -->
![Dice Roll Preview](<img width="1870" height="955" alt="Screenshot 2026-07-11 135557" src="https://github.com/user-attachments/assets/bcee97ca-4d37-4f06-a7af-cc2afad6b225" />
)

## ✨ Features

- Roll any number of dice at once
- Each roll generates a random value from 1–6 per die
- Matching dice-face SVG images displayed alongside the numeric results
- Clean, responsive layout that adapts to mobile screens
- Custom logo, favicon, and a playful color palette (`#34a99d`, `#e5cb90`, `#ffb6a6`)

## 🛠️ Built With

- **HTML5** — semantic structure
- **CSS3** — custom styling, flexbox layout, media queries for responsiveness
- **JavaScript (Vanilla)** — DOM manipulation and randomization logic
- **Google Fonts** — [Yuyu](https://fonts.google.com/specimen/Yuyu)

## ⚙️ How It Works

1. The user enters the number of dice to roll in the input field.
2. Clicking **"Let's Roll"** triggers the `rollDice()` function.
3. For each die, a random number between 1 and 6 is generated using `Math.random()`.
4. The results are displayed both as text and as corresponding dice-face images.

```javascript
for (let i = 0; i < input.value; i++) {
  const value = Math.floor(Math.random() * 6) + 1;
  values.push(value);
  images.push(`<img src="assets/images/${value}.svg">`);
}
```

## 📁 Project Structure

```
dice-roll/
├── assets/
│   └── images/
│       ├── f-icon.svg
│       ├── 1.svg ... 6.svg
├── index.html
├── style.css
├── index.js
└── README.md
```

## 🎯 What I Learned

- Using `Math.random()` and `Math.floor()` together to generate values within a specific range
- Dynamically building and injecting HTML via `innerHTML` and template literals
- Structuring conditional/looped output based on user input
- Responsive design with media queries for smaller screens

## 📌 Future Improvements

- Add input validation (currently accepts any numeric-ish input without bounds checking)
- Animate the dice roll for a more satisfying interaction
- Add a "reset" button to clear results
- Support keyboard submission (Enter key)

## 👤 Author

**Alen Jeeson**
Design-first Frontend Developer | [GitHub](https://github.com/alenjeeson0) <!-- add your GitHub profile link -->

## 📄 License

© 2025 Alen Jeeson. All rights reserved.
