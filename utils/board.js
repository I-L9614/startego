function createBoard() {
    const size = 10;
    const matrix = [];

    for (let i = 0; i < size; i++) {
        matrix[i] = [];
        for (let j = 0; j < size; j++) {
            matrix[i][j] = '_';
        }
    }
    return matrix
}

const board = createBoard()

function arrPrint(arr) {
    console.log(JSON.stringify(arr).replaceAll(',[', ',\n['))
}

