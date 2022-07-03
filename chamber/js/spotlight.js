const requestURL = "https://wildflowerlemon.github.io/wdd230/chamber/data/data.json"
const cards = document.querySelector(".spot");

async function getCompanies() {
    let response = await fetch(URL);
    if (response.ok) {
        let data = await response.json();
        buildspotlight(data);
    } else {
        throw Error(response.statusText);
    }
}
/*fetch(requestURL)
    .then(function(response) {
        return response.json();
    })
    .then(function(jsonObject) {
        const companies = jsonObject["companies"];
        //companies.forEach(displayGoldSilv);
        const filteredCompanies = companies.filter((company) => {
            return ((company["membership"] == "Gold Member" || company["membership"] == "Silver Member"))
            //return company.membership == ("Gold Member" && "Silver Member");
        });
        console.log(filteredCompanies)
    });*/
    

function buildspotlight(data) {
    let filteredCompanies = data.companies.filter((company) => company.membership == "Gold Member" || company.membership == "Silver Member");
    filteredCompanies.forEach(company => {
        let h3 = document.createElement("h3");

        h3.innerHTML = company.membership;

        spot.append(h3);
    })}



    //function displayCompanies(filteredCompanies) {
        //let h3 = document.querySelector("spot1 h3");

    //    document.getElementById("1h3") = `${filteredCompanies.name}`;
    //    picture.innerHTML = `${filteredCompanies.picture}`
    //    address.innerHTML = `${company.address}`;
    //    phonenumber.innerHTML = `${company.phonenumber}`;
    //    website.innerHTML = `${company.website}`;
    //    membership.innerHTML = `${company.membership}`;

    //    spot.appendChild(h3);
    //}



    