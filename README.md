# 2048 Game (React)

A modular React implementation of the classic 2048 game. Play on board sizes from 3x3 up to 8x8, with keyboard and on-screen keypad controls.

---

## Features

- Adjustable board size (3x3 to 8x8)
- Keyboard arrow key controls
- On-screen keypad arrow buttons
- Dynamic restart and board resizing
- Responsive beige-themed design
- Pure functional game logic for easy testing and extension

---

## Installation

1. Clone the repository:
git clone https://github.com/v-v-sumanth-kumar/2048_Game.git
cd 2048_Game


2. Install dependencies:
npm install


---

## Running the Game

Start the development server:
npm start

Open your browser and visit: [http://localhost:3000](http://localhost:3000)

---

## Gameplay Instructions

- The objective is to combine tiles with the same number until you form a tile with the number 2048.
- Use keyboard arrow keys or click on the on-screen keypad arrow buttons to slide tiles in the chosen direction.
- Matching tiles merge into one with their summed value.
- After every valid move, a new tile (2 or 4) will appear on the board at a random empty spot.
- Change the board size anytime from the dropdown menu. Changing the size resets the current game.
- The game ends when no moves are possible or you reach a tile with value 2048.

---

## Implementation Details

- **React** framework with modular structure:
src/
components/
Board.js # Board rendering
Controls.js # On-screen keypad arrow buttons
Controls.css # Styles for controls
Tile.js # Individual tile display
utils/
utils.js # Functional game logic (slide, merge, game over detection)
App.js # Main component managing state and layout
App.css # Global styles and layout
index.js # React app entry point
index.css # Base CSS

- Uses React hooks (`useState`, `useEffect`) for state management.
- CSS grid is used for flexible board size rendering.
- Beige background for a warm, clean UI.
- Keyboard and GUI controls work seamlessly together.

---

## Deployment

You can deploy this app easily on hosting platforms such as:

- **Vercel:** Connect your GitHub repo and click "Deploy"; a public URL will be provided.

