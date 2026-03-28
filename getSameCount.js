//Реализуйте и экспортируйте по умолчанию функцию, 
//принимающую на вход два массива и возвращающую количество общих уникальных значений в обоих массивах.

//моё решение
const getSameCount = (arr1, arr2) => {
    
    const arrt1 = _.uniq(arr1)
    const arrt2 = _.uniq(arr2)
    
    let result = 0
    
    for (const item2 of arrt2) {
        
        if (arrt1.includes(item2) === true){
            result += 1
        }    
    }
    return result
}
export default getSameCount

//Моё решение вариант2
const getSameCount = (arr1, arr2) => {
    
    const arrt1 = [...new Set(arr1)] 
    const arrt2 = [...new Set(arr2)]
    
    let result = 0
    
    for (const item2 of arrt2) {
        
        if (arrt1.includes(item2) === true){
            result += 1
        }    
    }
    return result
}
export default getSameCount

//Решение учителя
const getSameCount = (coll1, coll2) => {
  let count = 0
  const uniqColl1 = _.uniq(coll1)
  const uniqColl2 = _.uniq(coll2)

  for (const item1 of uniqColl1) {
    for (const item2 of uniqColl2) {
      if (item1 === item2) {
        count += 1
        break
      }
    }
  }

  return count
}

export default getSameCount