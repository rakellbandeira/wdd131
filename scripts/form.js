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


/* populate the Product Name options where the array's name field is used 
for the select option display and the array's id is used for the value field. */

const products = [
    {
      id: "fc1888",
      name: "Flux Capacitor",
      averagerating: 4.5
    },
    {
      id: "fc2050",
      name: "Power Laces",
      averagerating: 4.7
    },
    {
      id: "fs1987",
      name: "Time Circuits",
      averagerating: 3.5
    },
    {
      id: "ac2000",
      name: "Low Voltage Reactor",
      averagerating: 3.9
    },
    {
      id: "jj1969",
      name: "Warp Equalizer",
      averagerating: 5.0
    }
  ];

  
  document.addEventListener("DOMContentLoaded", () => {
    const selectElement = document.getElementById("produName");
    

    products.forEach(product =>{
        const option = document.createElement("option");
        option.value = product.id;
        option.textContent = product.name;
        option.className = "selectOption";
        selectElement.appendChild(option);

        console.log(option);
    })

  })


  