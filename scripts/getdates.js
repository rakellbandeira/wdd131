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