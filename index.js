

fetch("https://api.sampleapis.com/coffee/iced")
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error(error));