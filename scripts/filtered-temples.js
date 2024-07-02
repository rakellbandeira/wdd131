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

const hamButton = document.querySelector('#buttonMenu');
const navigation = document.querySelector('.navigation');

hamButton.addEventListener('click', () => {
    navigation.classList.toggle('open');
    hamButton.classList.toggle('open');
});

//Filtered Temple version

const temples = [
    {
      templeName: "Aba Nigeria",
      location: "Aba, Nigeria",
      dedicated: "2005, August, 7",
      area: 11500,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
      templeName: "Manti Utah",
      location: "Manti, Utah, United States",
      dedicated: "1888, May, 21",
      area: 74792,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
      templeName: "Payson Utah",
      location: "Payson, Utah, United States",
      dedicated: "2015, June, 7",
      area: 96630,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
      templeName: "Yigo Guam",
      location: "Yigo, Guam",
      dedicated: "2020, May, 2",
      area: 6861,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
      templeName: "Washington D.C.",
      location: "Kensington, Maryland, United States",
      dedicated: "1974, November, 19",
      area: 156558,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
      templeName: "Lima Perú",
      location: "Lima, Perú",
      dedicated: "1986, January, 10",
      area: 9600,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
      templeName: "Mexico City Mexico",
      location: "Mexico City, Mexico",
      dedicated: "1983, December, 2",
      area: 116642,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    // Add more temple objects here...

    {
        templeName: "Manaus Brazil",
        location: "Manaus, Amazonas, Brazil",
        dedicated: "2012, Junho, 15",
        area: 9000,
        imageUrl:
        "images/templesImg/boise_idaho_temple_lds.jpeg"
      },
      {
        templeName: "Sao Paulo Brazil",
        location: "Sao Paulo, Sao Paulo, Brazil",
        dedicated: "1985, January, 10",
        area: 115784,
        imageUrl:
        "images/templesImg/bogota_colombia_temple_lds.jpeg"
      },
      {
        templeName: "Campinas Brazil",
        location: "Campinas, Sao Paulo, Brazil",
        dedicated: "1983, December, 2",
        area: 104562,
        imageUrl:
        "images/templesImg/billings_temple_lds.jpeg"
      }
  ];


  // Loop through the array and create "temple cards" for each temple by displaying
  // name, location, date,  total area, image, native lazy loading 

  document.querySelector(".home").innerHTML = "<h2>Home | All Temples</h2>";
  createTempleCards(temples);

/* let oldTemples = temples => {
    return temples.filter(temple => {
        const year = parseInt(temple.dedicated.split(",")[0], 10);
        return year < 2000;
    });
}; */

  const homeLink = document.getElementById("home");
  const oldLink = document.getElementById("old");
  const newLink = document.getElementById("new");
  const largeLink = document.getElementById("large");
  const smallLink = document.getElementById("small");

  /* EventListener to Home Button */
  homeLink.addEventListener("click", () => {

    document.querySelector(".home").innerHTML = "<h2>Home | All Temples</h2>";
    createTempleCards(temples);
  })

 
  /* EventListener to Old Button */
  oldLink.addEventListener("click", () => {
    let oldTemples = temples.filter(temple => {
        const year = parseInt(temple.dedicated.split(",")[0], 10);
        return year < 1900;
    });

    document.querySelector(".home").innerHTML = "<h2>Old Temples</h2>";
    createTempleCards(oldTemples);
    /* console.log(oldTemples); */
  });


  /* EventListener to New Button */
  newLink.addEventListener("click", () => {
    let newTemples = temples.filter(temple => {
        const year = parseInt(temple.dedicated.split(",")[0], 10);
        return year > 2000;
    });

    document.querySelector(".home").innerHTML = "<h2>New Temples</h2>";
    createTempleCards(newTemples);
/*     console.log(newTemples);
 */  });


  /* EventListener to Large Button */
  largeLink.addEventListener("click", () => {
    let largeTemples = temples.filter(temple => temple.area > 90000);
    
    document.querySelector(".home").innerHTML = "<h2>Large Temples</h2>";
    createTempleCards(largeTemples);
/*     console.log(largeTemples);
 */  });


  /* EventListener to Large Button */
  smallLink.addEventListener("click", () => {
    let smallTemples = temples.filter(temple => temple.area < 10000);
    
    document.querySelector(".home").innerHTML = "<h2>Small Temples</h2>";
    createTempleCards(smallTemples);
    console.log(smallTemples);
  });


  function createTempleCards(templearray) {
    

    templearray.forEach(temple => {
        let card = document.createElement("section");
        let name = document.createElement("h3");
        let location = document.createElement("p");
        let dedication = document.createElement("p");
        let area = document.createElement("p");
        let img = document.createElement("img");

        name.textContent = temple.templeName;
        location.innerHTML = `<span class="infoLabel">Location:</span> ${temple.location}`;
        dedication.innerHTML = `<span>Dedicated:</span> ${temple.dedicated}`;
        area.innerHTML = `<span>Size:</span> ${temple.area} sq ft`;
        card.className = 'imgBox';
        img.setAttribute("src", temple.imageUrl);
        img.setAttribute("alt", `${temple.templeName} Temple`);
        img.setAttribute("loading", "lazy");

        card.appendChild(name);
        card.appendChild(location);
        card.appendChild(dedication);
        card.appendChild(area);
        card.appendChild(img);

        document.querySelector(".home").appendChild(card);

    });
  }