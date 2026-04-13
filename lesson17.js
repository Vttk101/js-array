//Решение ИИ
const checkIsBalanced = (expression) => {
    const pairs = {
        '(': ')',
        '[': ']',
        '{': '}',
        '<': '>'
    };
    const stack = [];
    
    for (const symbol of expression) {
        if (pairs[symbol]) {
            stack.push(symbol);
        } else if (Object.values(pairs).includes(symbol)) {
            const last = stack.pop();
            if (pairs[last] !== symbol) {
                return false;
            }
        }
    }
    return stack.length === 0;
}
const expression = '{}';
console.log(checkIsBalanced(expression));


// Решение из урок с одним видом скобок
onst checkIsBalanced = (expression) => {
  const stack = []
  for (const symbol of expression) {
    
    if (symbol === '(') {
      stack.push(symbol)
    }
    else if (symbol === ')') {
      if (!stack.pop()) {
        return false
      }
    }
  }
  return stack.length === 0
}
const expression = '(>)>'
console.log(checkIsBalanced(expression))


//Решение учителя
const openingSymbols = ['(', '[', '{', '<']  //вводятся массив открывающих скобок
const closingSymbols = [')', ']', '}', '>']  //массив закрывающих скобок

// 1-я вспом. f-ия будет находить, есть ли проверяемый symbol в массиве - открывающихся скобок 
const isOpeningSymbol = symbol => openingSymbols.includes(symbol)

// 2-я вспом. f-ия будет перебирать массив закрывающих скобок
const getClosingSymbolFor = (symbol) => {
  for (let i = 0; i < closingSymbols.length; i += 1) {
    if (openingSymbols[i] === symbol) {   // если i-элемент массива === проверяемому symbol
      return closingSymbols[i]            // возвращается этот i
    }
  }
  return null                              //в противном случае возвращается null
}

// осн. f-ия 
export default (str) => {           // названия f-ии нет, на вход поступает строка-str
  const stack = []                  // инициализируем пустой массив
  for (const symbol of str) {       // перебираем строку циклом for, где symbol - проверяемый элемент
    
    if (isOpeningSymbol(symbol)) {  //если symbol есть в массиве - открывающихся скобок (задейст.1-ю вспом.f-ию)
      
      // вводим константу ЗакрытыйСимвол = скобку либо null 
      // (2-я f-я переберёт массив закрывающих скобок и выдаст: скобку или null)
      const closingSymbol = getClosingSymbolFor(symbol)
      stack.push(closingSymbol)       // вложим в Cтек этот ЗакрытыйСимвол
    }
    else {                    // иначе вводится новая константа = стек с удалением последнего эл-та
      const lastSavedSymbol = stack.pop()
      if (symbol !== lastSavedSymbol) {  //???? - если символ не равен stack.pop() 
        return false
      }
    }
  }
  return stack.length === 0
}

// Моё недоделанное решение через idexOF
const open = ['(', '[', '{', '<']
const close = [')', ']', '}', '>']

const closePerebor = (symbol) => {
    let XXX = open[close.indexOf(symbol)] // определяем сответствие закрытой и открытой скобки по индексу
    for (const obratSymbol of close){
        if (stack.incudes(XXX) === true)
    }
}

const checkIsBalanced = (expression) => {
    
    
    const stack = []
    
    for (const symbol of expression) {
        
        let openKuku = open.includes(symbol)
        let closeTut = close[open.indexOf(symbol)]
        
        if (openKuku === true) {
            let pushik = stack.push(symbol)
        } 
        else if (symbol === closeTut) {
            stack.pop()
        }
        console.log(closeTut)
        console.log(stack)
    }
    return stack.length === 0
}

const expression = '{<>}'
console.log(checkIsBalanced(expression))