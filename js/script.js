// script.js
console.log("Le script est chargé !");

document.addEventListener("DOMContentLoaded", () => {
  const houseImages = document.querySelectorAll(".houses img");
  const allFigures = Array.from(document.querySelectorAll(".characters figure"));


  function showCharactersByHouse(houseClass) {

    allFigures.forEach(figure => figure.style.display = "none");


    const filtered = allFigures
      .filter(figure => figure.classList.contains(houseClass))
      .sort((a, b) => {
        const nameA = a.querySelector("p").textContent.toLowerCase();
        const nameB = b.querySelector("p").textContent.toLowerCase();
        return nameA.localeCompare(nameB);
      });


    const firstContainer = document.querySelector(".characters");
    firstContainer.innerHTML = ""; 
    filtered.forEach(figure => {
      figure.style.display = "block"; 
      firstContainer.appendChild(figure);
    });
  }


  houseImages.forEach(img => {
    img.addEventListener("click", () => {
      const src = img.getAttribute("src");
      let houseClass = "";

      if (src.includes("Gryffindor")) houseClass = "house-red";
      else if (src.includes("Hufflepuff")) houseClass = "house-gold";
      else if (src.includes("Ravenclaw")) houseClass = "house-blue";
      else if (src.includes("Slytherin")) houseClass = "house-green";

      if (houseClass) showCharactersByHouse(houseClass);
    });
  });
});

