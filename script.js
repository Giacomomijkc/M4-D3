// fetch bottone search, mi da errore

const apiKey = '53rv5qOO7IHrQaTSul3nyB1ICO3Vvj25IMDu0FubMmERbZd3k9bTIHk6';

let form = document.querySelector('form');
form.addEventListener('submit', (event) => {
    event.preventDefault(); // Impedisce il ricaricamento della pagina
    let queryInput = document.getElementById("searchInput");
    let query = queryInput.value; 
    fetch("https://api.pexels.com/v1/search?query=" + query,{
  headers: {
    Authorization: apiKey
  }
})
   .then(response => response.json()) 
   .then(data => {
    console.log(data);
    let myArray = data.photos;
    let cardSection = document.getElementById("card-section");
    cardSection.innerHTML = ""; 
    myArray.forEach((item) => {
        let myId = item.id;
        let myUrl = item.src.original;
        let card = document.createElement("div");
        card.classList.add("card");
        card.style.width = "18rem";
        card.style.marginTop = "20px";
        card.style.marginBottom = "20px";
        let image = document.createElement("img");
        image.classList.add("card-img-top");
        image.src = myUrl;
        image.alt = "Card image cap";
        card.appendChild(image);
        let cardBody = document.createElement("div");
        cardBody.classList.add("card-body");
        let cardTitle = document.createElement("h5");
        cardTitle.classList.add("card-title");
        cardTitle.textContent = myId;
        cardBody.appendChild(cardTitle);
        card.appendChild(cardBody);
        cardSection.appendChild(card);
    });
   })
   .catch(error => {
    console.error("si è verificato un errore", error)
   })
})

// fetch bottone PEOPLE


let peopleButton = document.getElementById("buttonPeople");
peopleButton.addEventListener('click', () => {
    fetch("https://api.pexels.com/v1/search?query=people",{
  headers: {
    Authorization: apiKey
  }
})
   .then(response => response.json()) 
   .then(data => {
    console.log(data);
    let myArray = data.photos;
    let cardSection = document.getElementById("card-section");
    cardSection.innerHTML = ""; 
    myArray.forEach((item) => {
        let myId = item.id;
        let myUrl = item.src.original;
        let card = document.createElement("div");
        card.classList.add("card");
        card.style.width = "18rem";
        card.style.marginTop = "20px";
        card.style.marginBottom = "20px";
        let image = document.createElement("img");
        image.classList.add("card-img-top");
        image.src = myUrl;
        image.alt = "Card image cap";
        card.appendChild(image);
        let cardBody = document.createElement("div");
        cardBody.classList.add("card-body");
        let cardTitle = document.createElement("h5");
        cardTitle.classList.add("card-title");
        cardTitle.textContent = myId;
        cardBody.appendChild(cardTitle);
        card.appendChild(cardBody);
        cardSection.appendChild(card);
    });
   })
   .catch(error => {
    console.error("si è verificato un errore", error)
   })
})

// fetch bottone CARS


let carsButton = document.getElementById("buttonCars");
carsButton.addEventListener('click', () => {
    fetch("https://api.pexels.com/v1/search?query=cars",{
  headers: {
    Authorization: apiKey
  }
})
   .then(response => response.json()) 
   .then(data => {
    console.log(data);
    let myArray = data.photos;
    let cardSection = document.getElementById("card-section");
    cardSection.innerHTML = ""; 
    myArray.forEach((item) => {
        let myId = item.id;
        let myUrl = item.src.original;
        let card = document.createElement("div");
        card.classList.add("card");
        card.style.width = "18rem";
        card.style.marginTop = "20px";
        card.style.marginBottom = "20px";
        let image = document.createElement("img");
        image.classList.add("card-img-top");
        image.src = myUrl;
        image.alt = "Card image cap";
        card.appendChild(image);
        let cardBody = document.createElement("div");
        cardBody.classList.add("card-body");
        let cardTitle = document.createElement("h5");
        cardTitle.classList.add("card-title");
        cardTitle.textContent = myId;
        cardBody.appendChild(cardTitle);
        card.appendChild(cardBody);
        cardSection.appendChild(card);
    });
   })
   .catch(error => {
    console.error("si è verificato un errore", error)
   })
})

// fetch test
/*
const apiKey = '53rv5qOO7IHrQaTSul3nyB1ICO3Vvj25IMDu0FubMmERbZd3k9bTIHk6';
fetch('https://api.pexels.com/v1/search?query=paesaggio', {
  headers: {
    Authorization: apiKey
  }
})
  .then(response => response.json())
  .then(data => {
    // Gestisci la risposta della chiamata API qui
    console.log(data);
  })
  .catch(error => {
    // Gestisci eventuali errori qui
    console.error('Si è verificato un errore:', error);
  });*/