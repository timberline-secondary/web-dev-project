let map = "";
let playerX = 2;
let playerY = 4;
let position = "";
while (position.toLowerCase() != "q") {

  let map = "";
  for (var y = 0; y < 20; y = y + 1) {
    for (var x = 0; x < 20; x++) {
      if (playerX === x && playerY === y) {
        map += "x";
      } else {
        map = map + "*";
      }
    }
    map += "\n";
  }


  drawTextMapAsHTML(map);

  position = drawButtonsAndGetInput(["West", "East", "North", "South"])

  switch (position.toLowerCase()) {
    case "n":
      playerY = playerY - 1;
      break;

    case "e":
      playerX = playerX + 1;
      break;

    case "s":
      playerY = playerY + 1;
      break;

    case "w":
      playerX = playerX - 1;
      break;
  }

  switch (playerX) {
    case 7:
      playerX = 0;
      break;

    case -1:
      playerX = 6;
      break;
  }
  switch (playerY) {
    case 7:
      playerY = 0;
      break;

    case -1:
      playerY = 6;
      break;
  }

}
