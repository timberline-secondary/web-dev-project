function drawTextMapAsHTML(mapString, emptyChar='*') {

    // Create a 2D array - the rows are actual array elements, the columns are strings, 
    // resulting in something like this:
    /* [ 
         "*****",
         "*****",
         "***x*",
         "*****",
       ]
    */
    var mapArray = mapString.split('\n');

    var height = mapArray.length;
    var width = mapArray[0].length; // The number of characters in the string for the first row, e.g. "****" = 4

    // The last row might be a empty, if it is, don't count it
    if( mapArray[height-1] == "") {
        height -= 1;
    }

    // Sanity checks
    console.log("The map you privided:\n", mapString)  
    console.log("The mapArray I generated:\n", mapArray)
    
    // Get the map div from the webpage
    const map = document.querySelector('#map');
    map.innerHTML = ""; // empty the map div so we can redraw it
    map.style.width = `${width*40}px` // set the size based on how big the map is going to be

    
    for(var y=0; y<height; y++) {
      for(var x=0; x<width; x++) {
        // create a gridsquare div and add it to the map
        const gridsquare = document.createElement('div');
        gridsquare.setAttribute('class', 'grid-square');
        map.appendChild(gridsquare); // add it to the map div

        // check if there is an object in this grid square, if so, add it to the gridsquare
        if (mapArray[y][x] != emptyChar) {
            // set the text of the gridsquare to equal whatever character the text map uses.
            gridsquare.textContent = mapArray[y][x];  
        }

      }
      // at the end of the row, so add a <br>
      map.appendChild(document.createElement('br')); 
    }
}

async function drawButtonsAndGetInput(buttonArray = ['west']) {
    buttonArray.forEach(function(btnText) {
        const button = document.createElement('button');
        button.textContent = btnText;

        document.body.appendChild(button);
        
    });

    const btnText = await btnClicked();

    return btnText

}
