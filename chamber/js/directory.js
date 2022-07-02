const requestURL = "data.json"
const cards = document.querySelector(".cards");

fetch(requestURL)
    .then(function(response) {
        return response.json();
    })
    .then(function(jsonObject) {
        console.table(jsonObject);
        const companies = jsonObject["companies"];
        companies.forEach(displayCompanies);
    });

function displayCompanies(company) {
    //Create elements to add to the document
    let card = document.createElement("section");
    let h2 = document.createElement("h2");
    let picture = document.createElement("img");
    let address = document.createElement("p");
    let phonenumber = document.createElement("p");
    let website = documemnt.createElement("p");

    h2.textContent = `${company.name}`;
    address.innerHTML = `${company.address}`;
    phonenumber.innerHTML = `${company.phonenumber}`
    website.innerHTML = `${company.website}`;


    //Build the image attributes by using the setAttribute method for the src, alt, and loading attribute values. (Fill in the blank with the appropriate variable).
    picture.setAttribute("src", company.imageurl);
    picture.setAttribute("alt",`Portrait of ${company.name}`);
    
    picture.setAttribute("loading", "lazy");

    card.appendChild(h2);
    card.appendChild();
    card.appendChild(place);
    card.appendChild(picture);

    // Add/apend the existing HTML div with the cards class with the section(card)
    document.querySelector("div.cards").appendChild(card);
}

