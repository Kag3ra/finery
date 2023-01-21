const catalogue = document.getElementById("catalogue");
const selections = [];
const allTypes = [
  "pants",
  "shirts",
  "jackets",
  "headwear",
  "shorts",
  "socks",
  "tees",
  "shoes",
];
const allColors = ["red", "green", "blue", "brown", "white", "beige", "other"];

document.getElementById("colorSelect").innerHTML += allColors
  .map((col) => `<option>${col}</option>`)
  .join(" ");
document.getElementById("typeSelect").innerHTML += allTypes
  .map((typ) => `<option>${typ}</option>`)
  .join(" ");

UpdateCatalogue();

function AddCloth(event) {
  event.preventDefault();
  const typ = event.target["type"].value;
  const col = event.target["color"].value;
  selections.push({ type: typ, color: col });
  UpdateCatalogue()
}

function UpdateCatalogue() {
  catalogue.innerHTML = "";
  allColors.forEach((color) => {
    catalogue.innerHTML += `<b class="catalogueColor">${color} Clothing:</b> ${selections
      .filter((cloth) => cloth.color == color)
      .map((cloth) => `<span class="catalogueType">${cloth.type}</span>`)
      .join(", ")}<br/>`;
  });
}
