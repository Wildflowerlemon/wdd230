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
        listenForLikes();
    });



function displayTemples(temple) {
    let card = document.createElement("section");
    let name = document.createElement("h2");
    let picture = document.createElement("img");
    let likebutton = document.createElement("button")

    const addressh3 = document.createElement("h3")
    addressh3.innerHTML = `Temple Address:`;

    let address = document.createElement("p");

    const telephoneh3 = document.createElement("h3");
    telephoneh3.innerHTML = `Telephone:`;

    let telephone = document.createElement("p");

    const emailh3 = document.createElement("h3");
    emailh3.innerHTML = `Email:`;
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

    address.innerHTML = `${temple.address}`;
    telephone.innerHTML = `${temple.telephone}`;
    email.innerHTML = `${temple.email}`;
    ordinanceschedule.innerHTML = `${temple.ordinanceschedule}`;
    sessionschedule.innerHTML =`${temple.sessionschedule}`;
    

    picture.setAttribute("src", temple.imageurl);
    picture.setAttribute("alt", `Picture of the ${temple.name}`);
    picture.setAttribute("loading", "lazy");

    //button.setAttribute("src", temple.likebutton);

    card.appendChild(picture);
    card.appendChild(name);
    card.appendChild(likebutton);
    card.appendChild(addressh3);
    card.appendChild(address);
    card.appendChild(telephoneh3);
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