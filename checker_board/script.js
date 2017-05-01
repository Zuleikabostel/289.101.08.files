/*
to place/spawn a piece using JavaScript:
*/
var piece_num = 1

while (piece_num <= 36) {
var piece = document.createElement('div');            // create an empty div
piece.setAttribute('class', 'piece');                 // assign the div class="piece"
document.getElementById('board').appendChild(piece);  // add the div to the id="board"
piece.style.top = (piece_num * 100)'px';                              // assign the top/y position
piece.style.left = '0px';                             // assign the left/x position

piece_num +=1;
}
