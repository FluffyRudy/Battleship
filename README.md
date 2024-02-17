# Odin Project Battleship

This is a simple implementation of the classic Battleship game for the Odin Project curriculum. The game is played in the console, where players take turns to guess the locations of their opponent's ships and sink them.

## Features

- **Grid Display**: The game displays a grid for each player to place their ships and another grid to track their guesses.
- **Ship Placement**: Players can place their ships horizontally or vertically on their grid.
- **AI Opponent**: The game includes an AI opponent that uses a basic attack strategy to target ships.
- **Turn-Based Gameplay**: Players take turns guessing the coordinates to sink their opponent's ships.
- **Winning Condition**: The game ends when one player successfully sinks all of their opponent's ships.

## How to Play

1. Clone or download the repository to your local machine.
2. Navigate to the project directory in your terminal.
3. Run the `battleship.js` file with Node.js: `node battleship.js`.
4. Follow the prompts in the console to place your ships and guess your opponent's ship locations.
5. Alternate turns with your opponent until one player wins the game.

## Files Structure

- `index.js`: The main JavaScript file containing the game logic and interface.
- `player.js`: JavaScript file defining the Player class responsible for managing player actions.
- `board.js`: JavaScript file defining the Board class for managing the game board and ship placements.
- `ship.js`: JavaScript file defining the Ship class for creating ship objects with specific sizes.
- `README.md`: Documentation file providing instructions and information about the project.

## Dependencies

- Node.js: This project requires Node.js to be installed on your machine. You can download it from [here](https://nodejs.org/).

## Acknowledgments

- This project is inspired by the Battleship game and the curriculum provided by the Odin Project.
