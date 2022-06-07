const lastModDate = new Date(document.lastModified);

let lastModMonth = lastModDate.getUTCMonth() + 1;
let lastModDay = lastModDate.getUTCDate() - 1;
let lastModYear = lastModDate.getUTCFullYear();
let lastModHour = lastModDate.getHours();
let lastModMinutes = lastModDate.getMinutes();
let lastModSeconds = lastModDate.getSeconds();
let lastModNewdate = `${lastModMonth}/${lastModDay}/${lastModYear} ${lastModHour}:${lastModMinutes}:${lastModSeconds}`;

Date(document.lastModified);
document.getElementById("lastUpdated").innerHTML = lastModNewdate;
document.getElementById("year").innerHTML = lastModYear;