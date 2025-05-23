



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

    const title = coffees[0].title;
    console.log(title)
}

