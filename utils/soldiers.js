function createSoldiers() {
    const player = {
        owner:"player",
        rank:1
    }
    
    const computer = []
    for (let i = 1; i <= 10; i++) {
        const computerPlayer = {
        owner:"computer",
        rank:""
    } 
        if (i===9) {
            computerPlayer.rank = 'flag'
            computer.push(computerPlayer)
        } 
        else {
            computerPlayer.rank = i
            computer.push(computerPlayer)
        }
    } 
    return [player,computer]
}
export const [player , computer] = createSoldiers()
console.log(player, computer)

