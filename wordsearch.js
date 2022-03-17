const wordSearch = (letters, word) => { 
    // let letter = [];
    // for (let indivLetters of letters[0]) {
    //     letter.push([]);
    // } 
    // for (let y = 0; 0 < letters.length; y++) {
    //     for (let x = 0; letters[y]; x++) {
    //         letter[y].push(letters[x][y]);
    //     }
    // } This code is for looping individually for diagonal search
    
    const horizontalJoin = letters.map(ls => ls.join('')) // joins the letters together to create a word
    for (l of horizontalJoin) {
        if (l.includes(word)) return true //if l includes word, return true
    } 

    vertLetters = transpose(letters);//transposes the y-axis[0] values
    const verticalJoin = vertLetters.map(ls =>ls.join('')) // joins transposed vertical letters to a word
    for (l of verticalJoin) {
        if (l.includes(word)) return true //if l includes word, return true
    }
    return false
   
}

const transpose = function(matrix) { //transpose code
    let res = new Array(matrix[0].length).fill(0).map(() => new Array(matrix.length).fill(0)) 
  
    for (row = 0; row < matrix.length; row ++) {
      for (column = 0; column < matrix[0].length; column ++) {
        res[column][row] = matrix[row][column]
      }
    } 
    return res
  };

module.exports = wordSearch

// ['A', 'W', 'F', 'F', 'Q', 'U', 'A', 'L'], [asyhwbyoe]
// ['S', 'E', 'R', 'N', 'F', 'E', 'L', 'D'],
// ['Y', 'F', 'A', 'F', 'Q', 'U', 'A', 'L'],
// ['H', 'M', 'N', 'T', 'E', 'V', 'R', 'G'],
// ['W', 'H', 'T', 'S', 'Y', 'E', 'R', 'L'],
// ['B', 'F', 'R', 'E', 'N', 'E', 'Y', 'B'],
// ['U', 'B', 'T', 'W', 'A', 'P', 'A', 'I'],
// ['O', 'D', 'C', 'A', 'K', 'U', 'A', 'S'],
// ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
// ], 'FRANK')