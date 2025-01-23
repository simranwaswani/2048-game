# 2048 Game

This is a simple 2048 game built using HTML, CSS, and JavaScript. The goal of the game is to combine tiles with the same number to create a tile with the value of 2048.

## Table of Contents

- [Game Overview](#game-overview)
- [How to Play](#how-to-play)
- [Features](#features)
- [Installation](#installation)
- [Technologies Used](#technologies-used)
- [Contributing](#contributing)
- [License](#license)

## Game Overview

The game starts with two tiles on a 4x4 grid, each with the value of 2 or 4. The player can move tiles in any of the four directions (up, down, left, right). When two tiles with the same value collide, they merge into a new tile with double the value.

Your objective is to keep merging tiles until you create a tile with the value of 2048, but beware, the game ends if the grid becomes full and no moves can be made.

## How to Play

1. **Move Tiles**: Use the arrow keys (`↑`, `↓`, `←`, `→`) to move the tiles.
2. **Combine Tiles**: When two tiles with the same number collide, they combine into a new tile with double the value.
3. **Objective**: Reach the tile with the value of 2048 to win the game.
4. **Restart**: Click the "Restart" button to start a new game.

## Features

- **Score Tracking**: Displays the current score and highest score.
- **Responsive Design**: The game board adjusts automatically to different screen sizes.
- **Game Over**: When there are no available moves left, the game ends.
- **Persistent High Score**: The highest score is saved locally in the browser and persists across sessions.
- **User Interface**: Simple, clean design with clear instructions.

## Installation

To run this game locally:

1. Clone the repository:
    ```bash
    git clone https://github.com/simranwaswani/2048-game.git
    ```

2. Open the `index.html` file in your browser.

3. Start playing!

## Technologies Used

- **HTML5**: Structure of the game board and user interface.
- **CSS3**: Styling the game elements, including grid layout and tile colors.
- **JavaScript**: Game logic, tile movement, merging tiles, and score tracking.
- **LocalStorage**: Saving the highest score between sessions.

## Contributing

Contributions are welcome! If you would like to improve the game or fix bugs, feel free to fork the repository and submit a pull request.

1. Fork the repository
2. Create a new branch (`git checkout -b feature-name`)
3. Make your changes
4. Commit your changes (`git commit -am 'Add new feature'`)
5. Push to the branch (`git push origin feature-name`)
6. Create a new pull request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
