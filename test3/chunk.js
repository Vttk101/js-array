//Моё решение
const chunk = (array, number) => {
    if (!Array.isArray(array) || number <= 0) {
        return []
    }
    const result = []
    for (let i = 0; i < array.length; i += number) {
        result.push(array.slice(i, i + number))
    }
    return result
}
export default chunk

// Решение учителя
export default (arr, size) => {
  const nArr = []
  for (let i = 0; i < arr.length; i += size) {
    nArr.push(arr.slice(i, i + size))
  }
  return nArr
}
