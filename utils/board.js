import { computer, player } from "./soldiers.js";

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

function putInBoard(board,player,computer) {
    board[0][4]=player.rank
    for (let i = 0; i<board[9].length;i++) {
        board[9][i] = ` ${computer[i].rank}`
    }
    return board
} 

