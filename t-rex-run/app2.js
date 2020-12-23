
var width = 7;
var height = 7;
var playerX = 4;
var playerY = 2;
quit = false;
while (quit == false){
    var map = ""
    for (var y=0; y<width; y++){
        for (var x=0; x<height; x++) {
            if(playerX === x && playerY === y){
                map += " x ";
            }
            else {
                map += " * ";
            }
        }
        map += "\n";
    }
    map = map + "Which direction would you like to go? Enter n, s, e, or w:"

    dir = prompt(map);

    switch(dir) {
        case 'n':
            playerY--;
            break;
        case 'e':
            playerX++;
            break;
        case 's':
            playerY++;
            break;
        case 'w':
            playerX--;
            break;
        case 'q':
            quit = true
            break
    }

}