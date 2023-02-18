function unroll(squareArray) {
    const length = squareArray.length;
    const result = [];

    let rowStart = 0;
    let rowEnd = length - 1;
    let colStart = 0;
    let colEnd = length - 1;

    while(rowStart <= rowEnd && colStart <= colEnd) {
        
        //Traversing from left to right
        for (let i = colStart; i <= colEnd; i++) {
            result.push(squareArray[rowStart][i]);
        }
        rowStart++;

        //Traversing from top to bottom
        for (let i = rowStart; i <= rowEnd; i++) {
            result.push(squareArray[i][colEnd])
        }
        colEnd--;

        //Traversing from right to left
        if (rowStart <= rowEnd) {
            for (let i = colEnd; i >= colStart; i--) {
                result.push(squareArray[rowEnd][i]);
            }
            rowEnd--;
        }

        //Traversing from bottom to top
        if (colStart <= colEnd) {
            for (let i = rowEnd; i >= rowStart; i--) {
                result.push(squareArray[i][colStart]);
            }
            colStart++;
        }
    }
    return result;
}

module.exports = unroll;
