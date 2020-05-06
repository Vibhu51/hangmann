const word = document.querySelector('#puzzle')
const attempt = document.querySelector('#guesses')
const status = document.querySelector('#status')
let game1

const render = ()=>{
    //word.textContent = game1.getPuzzle()
    word.innerHTML=""
    status.textContent = game1.gameStatus
    //console.log(game1.getPuzzle().split(''))
    game1.getPuzzle().split('').forEach((key)=>{
        const key1 = document.createElement('span')
        key1.textContent = key
        word.appendChild(key1)
    })
    }

window.addEventListener('keypress',(e)=>{
    attempt.textContent = `Remaining guesses: ${game1.makeGuess(e.key)}`
    render()
})

const startGame = async ()=>{
    const puzzle = await getRequest('2')
    console.log(puzzle)
    game1 = new Hangman(puzzle, 5)
    attempt.textContent = `Remaining guesses: 5`
    render()
}
document.querySelector('#reset').addEventListener('click', startGame)

startGame()

render()



// getLocation().then((data)=>{
//     return getCountry(data.country)
// }).then((details)=>{
//     console.log(details.name)
// }).catch((err)=>{
//     console.log(err)
// })


// getRequest("3").then((word)=>{
//     console.log(word)
// },(error)=>{
//     console.log(`Error : ${error}`)
// })