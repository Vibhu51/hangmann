//alert('are u there')
const Hangman = function(word,remainingGuess){
    this.original = word
    this.word = word.toLowerCase().split('')
    this.gword = []
    this.remainingGuess = remainingGuess
    this.gameStatus = 'playing'
}

Hangman.prototype.getPuzzle = function() {
    let quiz = ''
    
    this.word.forEach((w)=>{
        if(this.gword.includes(w) || w==' '){
            quiz = quiz + w
        }
        else{
            quiz = quiz + "*"
        }
    })
    return quiz
    
}

Hangman.prototype.status = function(){
    let finished = true
    this.word.forEach((w)=>{
        if(this.gword.includes(w) || w==' '){

        }
        else{
            finished=false
        }
    })

    if(this.remainingGuess <=0){
        this.gameStatus = `failed, the word is ${this.original}`
        this.remainingGuess = 0
    }
    else if(finished){
        this.gameStatus = "finished"
    }else{
        this.gameStatus = `Playing`
    }

}
Hangman.prototype.makeGuess = function(guess) {
    guess = guess.toLowerCase()
    const notUnique = !this.gword.includes(guess)
    const badGuess = !this.word.includes(guess)
    if(notUnique){
        this.gword.push(guess)
    }
    if(notUnique && badGuess){
        this.remainingGuess--
    }

    this.status()
    return this.remainingGuess
}




