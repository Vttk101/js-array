// Реализуйте и экспортируйте по умолчанию функцию, которая получает на вход строку и считает, 
// сколько символов (без учёта повторяющихся символов) использовано в этой строке. 
// Например, в строке yy используется всего один символ — y. 
// А в строке 111yya! — используется четыре символа: 1, y, a и !

// Моё решение
const countUniqChars = (text) => {
    let result1 = []
    let result2 = []
    for (let i = 0; i <= text.length; i += 1) {
        result1.push(text[i - 1])
        result1.includes(text[i]) === true ? result2.push() : result2.push(text[i])
        console.log(result2)
    }
    return result2.length
}

export default countUniqChars

//Решение учителя
const countUniqChars = (text) => {
  const uniqChars = []

  for (const char of text) {
    if (!uniqChars.includes(char)) { //что означает ! перед константой -? (м.б. что счетчик начинается с -1 значения)
      uniqChars.push(char)
    }
  }

  return uniqChars.length
}

export default countUniqChars