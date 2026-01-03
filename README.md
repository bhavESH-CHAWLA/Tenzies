# Tenzies

A fun and addictive dice game built with React. Roll the dice, hold the ones you want to keep, and try to get all ten dice showing the same number!

## 🎮 How to Play

1. **Roll the Dice**: Click the "Roll Dice" button to roll all 10 dice.
2. **Hold Dice**: Click on individual dice to freeze them at their current value.
3. **Win Condition**: Keep rolling and holding until all dice show the same number.
4. **New Game**: Once you win, click "New Game" to start over.

## ✨ Features

- **Interactive Dice**: Click any die to hold or unhold it
- **Confetti Celebration**: Enjoy a confetti animation when you win!
- **Keyboard Accessible**: The roll button automatically focuses after winning
- **Responsive Design**: Works on different screen sizes
- **Fast Gameplay**: Quick rolls and instant feedback

## 🛠️ Technologies Used

- **React 19**: Modern React with hooks
- **Vite**: Fast build tool and development server
- **nanoid**: For generating unique IDs for dice
- **react-confetti**: Celebration effects
- **react-use**: Utility hooks (window size detection)
- **ESLint**: Code linting

## 🚀 Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd tenzies
```

2. Install dependencies:
```bash
npm install
```

### Running the Development Server

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser to play the game.

### Building for Production

```bash
npm run build
```

The built files will be in the `dist` folder.

### Preview Production Build

```bash
npm run preview
```

### Linting

```bash
npm run lint
```

## 📁 Project Structure

```
tenzies/
├── public/
├── src/
│   ├── components/
│   │   └── Die.jsx
│   ├── App.jsx
│   ├── index.css
│   └── index.jsx
├── package.json
├── vite.config.js
├── eslint.config.js
└── README.md
```

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

**Enjoy playing Tenzies! 🎲**