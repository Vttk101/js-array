// Реализуйте функцию getSameParity(), которая принимает на вход массив чисел и возвращает новый,
//состоящий из элементов, у которых такая же чётность, как и у первого элемента входного массива.
//Экспортируйте функцию по умолчанию.

// Моё решение 1
const getSameParity = (arr) => {
    if (arr.lenght === 0) {
        return []
    }
    const result1 = []
    const result2 = []
    for (const item of arr) {
        if (item % 2 !== 0) {
            result1.push(item)
        } else if (item % 2 === 0){
            result2.push(item)
        }
    }
    return (arr[0] % 2 !== 0) ? result1 : result2
}

export default getSameParity

//Моё решение 2
const getSameParity = (coll) => {
    if (coll.length === 0) {
        return []
    }
    const result = []
    
    if (coll[0] % 2 === 0) {
        for(const num of coll) {
            if (num % 2 === 0) {
                result.push(num)
            }
        }
    } 
    else { 
        for(const num of coll) {
            if (num % 2 !== 0) {
                result.push(num)
            }
        }
    }
    
    return result
}
export default getSameParity

//Решение учителя
const getSameParity = (coll) => {
  if (coll.length === 0) {
    return []
  }

  const result = []
  const remainder = Math.abs(coll[0] % 2)

  for (const item of coll) {
    if (Math.abs(item % 2) === remainder) {
      result.push(item)
    }
  }

  return result
}

export default getSameParity