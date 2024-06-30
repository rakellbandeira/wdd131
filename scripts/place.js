
/* Footer settings */
let currentYear = document.getElementById('currentYear');
currentYear.innerHTML = '2024';

let dateMod = new Date(document.lastModified);
let date = dateMod.getDate();
let month = dateMod.getMonth();
let year = dateMod.getFullYear();
let hour = dateMod.getHours();
let min = dateMod.getMinutes();

let lastModified = document.getElementById('lastModified');
lastModified.innerHTML = `Last Modified: ${date}/${month}/${year} ${hour}:${min}`;

/* Windchill Factor */
let temperature = document.getElementById('temperature');
let wind = document.getElementById('wind');
let windChill = document.getElementById('windChill');

function calculateWindChill (temperature, wind) {
    let windCh = 35.74 + 0.6215*temperature - 35.75(wind**0.16) + 0.4275*temperature(wind**0.16);

    return windCh;
}

if (temperature >= 10 & temperature <= 50 & wind < 4.8 & wind > 3) {
    windChill.textContent = calculateWindChill;
} 
else {
    windChill.textContent = "N/A";
}