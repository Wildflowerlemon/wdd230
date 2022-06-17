const requestURL = "https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json"
const cards = document.querySelector(".cards");

fetch(requestURL)
    .then(function(response) {
        return response.json();
    })
    .then(function(jsonObject) {
        console.table(jsonObject);
        const prophets = jsonObject["prophets"];
        prophets.forEach(displayProphets);
    });

function displayProphets(prophet) {
    //Create elements to add to the document
    let card = document.createElement("section");
    let h2 = document.createElement("h2");
    let portrait = document.createElement("img");
    let birthday = document.createElement("p");
    let place = document.createElement("p");


    //Change the textContent property of the h2 element to contain the prophet's full name
    
    h2.textContent = `${prophet.name} ${prophet.lastname}`;
    birthday.innerHTML = `Date of Birth: ${prophet.birthdate}`;
    place.innerHTML = `Place of Birth: ${prophet.birthplace}`;


    //Build the image attributes by using the setAttribute method for the src, alt, and loading attribute values. (Fill in the blank with the appropriate variable).
    portrait.setAttribute("src", prophet.imageurl);
    portrait.setAttribute("alt",`Portrait of ${prophet.name} ${prophet.lastname} - ${prophet.order} Latter-day President`);
    
    portrait.setAttribute("loading", "lazy");

    card.appendChild(h2);
    card.appendChild(birthday);
    card.appendChild(place);
    card.appendChild(portrait);

    // Add/apend the existing HTML div with the cards class with the section(card)
    document.querySelector("div.cards").appendChild(card);
}
