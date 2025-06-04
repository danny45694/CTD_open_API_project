# CTD_open_API_project
Open API Project for Code The Dream
# CTD_API

A simple web app that fetches and displays coffee recipes from two endpoints:
- **Iced Coffee** (`/coffee/iced`)
- **Hot Coffee** (`/coffee/hot`)

Click “Iced Coffee” or “Hot Coffee” to load and show cards for each category. Each click issues a fresh GET request, and duplicate titles (“Latte Choco” or “CofCof”) are automatically removed.

---

## Repository Contents

- **index.html**  
  The main HTML page. Contains two navigation buttons (Iced/Hot) and a `<div id="cardsContainer">` where cards are inserted.

- **index.css**  
  Styles for layout, buttons, card grid, fixed background, and uniform card images.

- **index.js**  
  Fetch logic and DOM manipulation. Defines:
  1. `fetchIcedCoffee()` – GETs `/coffee/iced`, renders cards, removes duplicates.
  2. `fetchHotCoffee()` – GETs `/coffee/hot`, renders cards, removes duplicates.
  3. `removeUnwantedCards()` – removes any card titled “CofCof” or “Latte Choco”.

- **README.md**  
  This file. Explains what the project does and how to run it locally.

---

## How to Run Locally

1. **Clone or download this repository**  
