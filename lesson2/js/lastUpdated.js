const date = new Date();

let month = date.getUTCMonth() + 1;
let day = date.getDate();
let year = date.getUTCFullYear();
let hour = date.getHours();
let minutes = date.getMinutes();
let seconds = date.getSeconds();
newdate = `${month}/${day}/${year} ${hour}:${minutes}:${seconds}`;

Date(document.lastModified);
document.getElementById("lastUpdated").innerHTML = newdate;
document.getElementById("year").innerHTML = year;