
let cards = document.querySelectorAll(".card")


async function fetchData() {
    const requestURL = "https://api.sampleapis.com/coffee/iced"
    const request = new Request(requestURL);
    const response = await fetch(request);
    const coffees = await response.json();

    console.log(coffees)

   /*  .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error(error));

    const data = response.json();
    */

    const card1 = document.getElementById("card1");
    const card2 = document.getElementById("card2");
    const card3 = document.getElementById("card3");
    const card4 = document.getElementById("card4");
    const card5 = document.getElementById("card5");
    const card6 = document.getElementById("card6");
    
    const coffee1 = coffees[0].image;
    const coffee2 = coffees[1].image;
    const coffee3 = coffees[2].image;
    const coffee4 = coffees[3].image;
    const coffee5 = coffees[4].image;
    const coffee6 = coffees[5].image;


    card1.src = coffee1;
    card2.src = coffee2;
    card3.src = coffee3;
    card4.src = coffee4;
    card5.src = coffee5;
    card6.src = coffee6;

    card1.style.display = "block"
    card2.style.display = "block"
    card3.style.display = "block"
    card4.style.display = "block"
    card5.style.display = "block"
    card6.style.display = "block"


    //Append object image element from API to
    // created image element

    //img.innerHTML = coffees[0].image

    //add image element to card

    card1.appendChild(img);

    const title = coffees[0].title;
    console.log(title)
}

console.log(typeof cards);
console.log(cards)
console.log(cards.length);

fetchData();


//let card1 = cards.querySelector("#card1");
//console.log(card1);