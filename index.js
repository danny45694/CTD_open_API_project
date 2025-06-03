
let cards = document.querySelectorAll(".card")

const requestURL = "https://api.sampleapis.com/coffee/";
const btnIced = document.getElementById("btnIced");
const btnHot = document.getElementById("btnHot");

const cardsContainer = document.getElementById("cardsContainer");

function clearUI() {
    cardsContainer.innerHTML = "";
}

function createCoffeeCard(object) {
    const card = document.createElement("div");
    card.classList.add("card"); // Add class to card

    const img = document.createElement("img");
    img.src = object.image;

    const title = document.createElement("p");
    title.classList.add("cardTitle");
    title.textContent = object.title;

    card.appendChild(img);
    card.appendChild(title);

    return card;
}

async function fetchIcedCoffee() {
  clearUI();
  btnIced.classList.add("active");
  btnHot.classList.remove("active");

  try {
    const response = await fetch(requestURL + "iced");
    if (!response.ok) {
      throw new Error(`Server returned ${response.status}`);
    }

    const coffees = await response.json();

    const seenTitles = [];

    coffees.forEach(coffeeItem => {
      if(coffeeItem.title === "CofCof") {
        return;
      }
    
    if (seenTitles.includes(coffeeItem.title)) {
      return;
    }

    seenTitles.push(coffeeItem.title);
    const oneCard = createCoffeeCard(coffeeItem);
    cardsContainer.appendChild(oneCard);
    });
  } catch (err) {
    showMessage(`Error fetching iced coffee: ${err.message}`, true);
  }
}


async function fetchHotCoffee() {
  clearUI();
  btnHot.classList.add("active");
  btnIced.classList.remove("active");

  try {
    const response = await fetch(requestURL + "hot");
    if (!response.ok) {
      throw new Error(`Server returned ${response.status}`);
    }

    const coffees = await response.json();

    coffees.forEach(coffeeItem => {
      const oneCard = createCoffeeCard(coffeeItem);
      cardsContainer.appendChild(oneCard);
    });
  } catch (err) {
    showMessage(`Error fetching hot coffee: ${err.message}`, true);
  }
}

window.addEventListener("DOMContentLoaded", () => {
    fetchIcedCoffee();

    btnIced.addEventListener("click", () => {
        fetchIcedCoffee();
    });

    btnHot.addEventListener("click", () => {
        fetchHotCoffee();
    });
});