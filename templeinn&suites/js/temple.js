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

    const servicesh3 = document.createElement("h3");
    servicesh3.textContent = `Services:`;

    let servicesList = document.createElement("ul");
    const templeservices = temple.services;
    for (const service of templeservices) {
        const listservice = document.createElement("li");
        listservice.textContent = service;
        servicesList.appendChild(listservice);
    }

    const historyh3 = document.createElement("h3");
    historyh3.textContent = `History:`; 
    let historyList = document.createElement("ul");
    const templehistory = temple.history;
    for (const history of templehistory) {
        const listItem = document.createElement("li");
        listItem.textContent = history;
        historyList.appendChild(listItem);
    }

    let ordinanceschedule = document.createElement("p");
    let sessionschedule = document.createElement("p");

    const closureListh3 = document.createElement("h3");
    closureListh3.innerHTML = `Temple Closure:`; 
    let closureList = document.createElement("ul");
    const closureSchedule = temple.templeClosureSchedule;
    for (const schedule of closureSchedule) {
        const listTime = document.createElement("li");
        listTime.textContent = schedule;
        closureList.appendChild(listTime);
    }

    name.textContent = `${temple.name}`;
    picture.innerHTML = `${temple.picture}`;

    address.innerHTML = `Temple Address: ${temple.address}`;
    telephone.innerHTML = `Telephone: ${temple.telephone}`;
    email.innerHTML = `Email: ${temple.email}`;
    ordinanceschedule.innerHTML = `${temple.ordinanceschedule}`;
    sessionschedule.innerHTML =`${temple.sessionschedule}`;
    

    picture.setAttribute("src", temple.imageurl);
    picture.setAttribute("alt", `Picture of the ${temple.name}`);
    picture.setAttribute("loading", "lazy");

    card.appendChild(picture);
    card.appendChild(name);
    card.appendChild(address);
    card.appendChild(telephone);
    card.appendChild(email);
    card.appendChild(servicesh3);
    card.appendChild(servicesList);
    card.appendChild(historyh3);
    card.appendChild(historyList);
    card.appendChild(ordinanceschedule);
    card.appendChild(sessionschedule);
    card.appendChild(closureListh3);
    card.appendChild(closureList);

    document.querySelector("div.cards").appendChild(card);


}