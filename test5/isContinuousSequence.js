//Мщё решение
const isContinuousSequence = (arr) => {
    if (arr.length <= 1) {
        return false
    }
    for (let i = 0; i < arr.length; i += 1) {
        let x = arr[i]
        let y = arr[0] + i
       
        if (x !== y){
             return false
        }
    }
    return true
}
export default isContinuousSequence

//Решение учителя
const isContinuousSequence = (coll) => {
  const size = coll.length
  if (size <= 1) {
    return false
  }

  const start = coll[0]
  for (let index = 1; index < size; index += 1) {
    if (start + index !== coll[index]) {
      return false
    }
  }
  return true
}
export default isContinuousSequence