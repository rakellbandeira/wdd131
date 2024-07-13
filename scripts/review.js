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



document.addEventListener("DOMContentLoaded", () => {
    const reviewCountElement = document.getElementById("reviewCount");
    let textReview = document.getElementById("textreview");
    let reviewCount = Number(window.localStorage.getItem("reviewCount")) || 0;

    if (reviewCount !== 0) {
        reviewCountElement.textContent = reviewCount;
        
    } 
    else {
        textReview.innerHTML = `<h3>This is your first review. Thank you!<h3>`;
    }

    reviewCount++;

    localStorage.setItem("reviewCount", reviewCount);
});