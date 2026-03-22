const sentence = 'When you play the game of thrones, you win or you die'
const stoparr = ['die', 'play']

const makeCensored = (sentence, stoparr) => {
    
    const separator = ' '
    const sentenceArr = sentence.split(separator)
    
    let result = []
    const krakozybra = '$#%!'
    
    for (const word of sentenceArr) {
        (word === includes(stoparr)) ? result = `${result}${word}`: result = `${result}${krakozybra}`
    }
    return result.join(separator)
}

console.log(makeCensored(sentence, stoparr))