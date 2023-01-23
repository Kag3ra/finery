const catalogue = document.getElementById("catalogue");

var selections = [];
var outfit = [];

const allTypes = [
  "pants",
  "shirt",
  "jacket",
  "headwear",
  "shorts",
  "socks",
  "tee",
  "shoes",
];

const allColors = ["red", "green", "blue", "brown", "white", "beige", "other"];

const colorList = allColors.map((col) => `<option>${col}</option>`).join(" ");
document.getElementById("colorSelect").innerHTML += colorList;
document.getElementById("colorOutfitSelect").innerHTML += colorList;

document.getElementById("typeSelect").innerHTML += allTypes
  .map((typ) => `<option>${typ}</option>`)
  .join(" ");

UpdateCatalogue();

function AddCloth(event) {
  event.preventDefault();
  // const typ = event.target["typeSelect"].value;
  // const col = event.target["colorSelect"].value;
  const name = event.target["clothName"].value;
  const cuts = name.split(" ");
  if (
    allTypes.includes(cuts[2]) &&
    !selections.some((cloth) => cloth.name == name)
  ) {
    selections.push({
      type: cuts[2],
      color: allColors.includes(cuts[0]) ? cuts[0] : "other",
      name: name,
    });
  }
  UpdateCatalogue();
}

function UpdateCatalogue() {
  catalogue.innerHTML = "";
  allColors.forEach((color) => {
    catalogue.innerHTML += `<b class="catalogueColor">${color} Clothing:</b> ${selections
      .filter((cloth) => cloth.color == color)
      .map((cloth) => `<span>${cloth.name}</span>`)
      .join(", ")}<br/>`;
  });
}

const pairs = [
  ["red", "black", "white"],
  ["blue", "white"],
  ["red", "green"],
  ["green", "black"],
  ["brown", "beige"],
  ["brown", "green"],
];

function FixOutfit(event) {
  event.preventDefault();
  const fixColor = event.target["colorOutfitSelect"].value;
  console.log(fixColor);
  var fix_assoc = [];
  pairs.forEach((pair) => {
    if (pair.some((col) => col == fixColor)) {
      fix_assoc = new Array(...new Set([...fix_assoc, ...pair]));
    }
  });

  console.log(fix_assoc);

  var fixedOutFit = {
    pants: [],
    shirt: [],
    jacket: [],
    headwear: [],
    shorts: [],
    socks: [],
    tee: [],
    shoes: [],
  };

  selections.forEach((cloth) => {
    if (fix_assoc.includes(cloth.color)) {
      console.log(cloth);
      fixedOutFit[cloth.type].push(cloth.name);
    }
  });

  
  console.log(fixedOutFit);
}
