      // Create an object to store the colors
      const colors = {
        red: [],
        green: [],
        blue: [],
        brown: [],
        white: [],
        green: [],
        beige: [],
        other: [],
      };

      //Create an object to store types
      const types = {
        pants: [],
        shirts: [],
        jackets: [],
        headwear: [],
        shorts: [],
        socks: [],
        tees: [],
        shoes: [],
      }

      // Get the form and catalogue elements
      const form = document.querySelector("#form");
      const catalogue = document.querySelector("#catalogue");

      // Add a submit event listener to the form
      form.addEventListener("submit", (event) => {
        // Prevent the form from submitting
        event.preventDefault();

        // Get the type and color input values
        const type = document.querySelector("#type").value;
        const color = document.querySelector("#color").value;

        // Add the clothing to the appropriate category
        var colorArray = {};
        var form = document.getElementById('form');
        form.addEventListener('submit', function(event) {
    event.preventDefault();
    const colors = document.getElementById('color').value;
    const type = document.getElementById('type').value;
    if (colorArray[colors]) {colorArray[colors] = []; 
    colorArray[colors].push(type);
    }  else {
            colors.other.push(type);
          }
    
});

        // Clear the form input values
        document.querySelector("#type").value = "";
        document.querySelector("#color").value = "";

        // Update the catalogue
        catalogue.innerHTML = `
          <p>Red clothing: ${colors.red.join(", ")}</p>
          <p>Green clothing: ${colors.green.join(", ")}</p>
          <p>Blue clothing: ${colors.blue.join(", ")}</p>
          <p>Brown clothing: ${colors.brown.join(", ")}</p>
          <p>White clothing: ${colors.white.join(", ")}</p>
          <p>Green clothing: ${colors.green.join(", ")}</p>
          <p>Beige clothing: ${colors.beige.join(", ")}</p>
          <p>Other clothing: ${colors.other.join(", ")}</p>
        `;
      });