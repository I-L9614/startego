import { computer, player } from "./soldiers.js";

function createBoard(size) {
    const matrix = [];
    for (let i = 0; i<size; i++) matrix.push(new Array(10).fill('_'));
        
    return matrix
    }

const board = createBoard(10)

function arrPrint(arr) {
    console.log(JSON.stringify(arr).replaceAll(',[', ',\n['))
}

function putInBoard(board, player, computer) {
    board[0][4] = player.rank
    for (let i = 0; i < board[9].length; i++) {
        board[9][i] = ` ${computer[i].rank}`
    }
    return board
}

function switchToOX(board) {
    const boardShow = board.map(number => number)
    boardShow[0][4] = 'O'
    for (let i = 0; i<board.length;i++) {
        boardShow[board.length-1][i] = 'X'
    }
    return boardShow
}
arrPrint(switchToOX(board))