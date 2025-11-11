# Kaboom.js Platformer Game

A simple 2D platformer game built with [Kaboom.js](https://kaboomjs.com/) using basic geometric shapes instead of sprites.

## 🎮 Game Description

Navigate your square character across platforms to reach the green goal square! The game features simple physics-based movement, jumping mechanics, and a minimalist design using only colored rectangles.

## 🚀 How to Run

1. **Simple Method (Local File):**
   - Open `index.html` directly in your web browser
   - The game should load automatically

2. **Using a Local Server (Recommended):**
   - If you encounter CORS issues, use a local server:
   ```bash
   # Using Python 3
   python -m http.server 8000
   
   # Using Node.js (http-server)
   npx http-server
   
   # Using PHP
   php -S localhost:8000
   ```
   - Then open `http://localhost:8000` in your browser

## 🎯 Controls

- **Move Left:** `Left Arrow` or `A`
- **Move Right:** `Right Arrow` or `D`
- **Jump:** `Space`, `W`, or `Up Arrow`
- **Reset/Restart:** `R`

## ✨ Features

- **Physics-based movement** with gravity and collision detection
- **Simple square-based graphics** - no sprites required
- **Multiple platforms** arranged in a challenging pattern
- **Goal system** - reach the green square to win
- **Auto-reset** - player resets if they fall off the screen
- **Responsive design** - adapts to your browser window size

## 📁 File Structure

```
.
├── index.html    # Main HTML file with game container
├── main.js       # Game logic and Kaboom.js code
└── README.md     # This file
```

## 🛠️ Technical Details

- **Framework:** Kaboom.js v3
- **Physics:** Built-in Kaboom physics engine with gravity
- **Graphics:** Simple rectangles using Kaboom's `rect()` component
- **Colors:**
  - Player: Light blue `rgb(80, 180, 255)`
  - Platforms: Dark grey `rgb(80, 80, 80)`
  - Goal: Green `rgb(80, 200, 120)`

## 🎨 Customization

You can easily customize the game by modifying constants in `main.js`:

- `SPEED` (default: 320) - Horizontal movement speed
- `JUMP_FORCE` (default: 1000) - Jump strength
- `COLORS` - Change the color scheme
- Platform positions and sizes in the `game` scene

## 📝 Notes

- Make sure to click on the game area to focus it before using keyboard controls
- The game uses Kaboom's built-in physics system for realistic movement
- Debug mode is enabled by default (can be disabled in the `kaboom()` config)

## 🔗 Resources

- [Kaboom.js Documentation](https://kaboomjs.com/doc/intro)
- [Kaboom.js GitHub](https://github.com/replit/kaboom)

---

Enjoy playing! 🎮

