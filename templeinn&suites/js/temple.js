const requestURL = "https://wildflowerlemon.github.io/wdd230/templeinn&suites/data/temples.json";
const cards = document.querySelector(".cards");

fetch(requestURL)
    .then(function(response) {
        return response.json();
    })
    .then(function(jsonObject) {
        console.table(jsonObject);
        const temples = jsonObject["temples"];
        temples.forEach(displayTemples);
    });

function displayTemples(temple) {
    let card = document.createElement("section");
    let name = document.createElement("h2");
    let picture = document.createElement("img");
    let address = document.createElement("p");
    let telephone = document.createElement("p");
    let email = document.createElement("p");
    let services = document.createElement("p");
    let history = document.createElement("p");
    let ordinanceschedule = document.createElement("p");
    let sessionschedule = document.createElement("p");
    let templeclosureschedule = document.createElement("p");

    name.textContent = `${temple.name}`;
    picture.innerHTML = `${temple.picture}`;
    address.innerHTML = `${temple.address}`;
    telephone.innerHTML = `${temple.telephone}`;
    email.innerHTML = `${temple.email}`;
    services.innerHTML = `${temple.services}`;
    history.innerHTML = `${temple.history}`;
    ordinanceschedule.innerHTML = `${temple.ordinance-schedule}`
    sessionschedule.innerHTML =`${temple.session-schedule}`;
    templeclosureschedule = `${temple.temple-closure-schedule}`;

    picture.setAttribute("src, temple.imageurl");
    picture.setAttribute("alt", `Picture of the ${temple.name}`);
    picture.setAttribute("loading", "lazy");

    card.appendChild(name);
    card.appendChild(picture);
    card.appendChild(address);
    card.appendChild(telephone);
    card.appendChild(email);
    card.appendChild(servuces);
    card.appendChild(history);
    card.appendChild(ordinanceschedule);
    card.appendChild(sessionschedule);
    card.appendChild(templeclosureschedule);

    document.querySelector("div.cards").appendChild(card);


}