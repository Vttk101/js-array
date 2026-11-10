//Моё решение
сonst hammingWeight = (num) => {
    const twoNum = num.toString(2)
    let result = 0
    for(const item of twoNum) {
        if(item === "1") {
            result = result + 1;
        }
    }
    return result
}
export default hammingWeight

//Решение учителя
const hammingWeight = (num) => {
  let weight = 0
  const digits = num.toString(2)

  for (let i = 0; i < digits.length; i += 1) {
    if (digits[i] === '1') {
      weight += 1
    }
  }
  return weight
}
export default hammingWeight
