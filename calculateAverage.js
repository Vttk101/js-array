//Реализуйте и экспортируйте по умолчанию функцию, которая высчитывает среднее арифметическое элементов 
//переданного массива. 
//Благодаря этой функции мы наконец-то посчитаем среднюю температуру по больнице

// Моё решение
const calculateAverage = (temp) => {
    if (temp.length === 0) {
        return null
    }
    let sum = 0
    let result
    for (const nom of temp) {
        sum += nom
        result = sum /(temp.length)
    }
    return result
}

export default calculateAverage

// Решение учителя
export default (coll) => {
  const itemsCount = coll.length

  if (itemsCount === 0) {
    return null
  }

  let sum = 0
  for (const item of coll) {
    sum += item
  }

  return sum / itemsCount
}