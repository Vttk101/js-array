//Моё решение
А у меня ни чё не получилось. Глаза пучил, пучил, аж голова заболела. 

//Решение учителя
const getRangeOfSequence = (sequence) => {
  const first = sequence[0]
  const last = sequence[sequence.length - 1]
  return `${first}->${last}`
}

const summaryRanges = (numbers) => {
  const ranges = []
  let sequence = []

  for (let index = 0; index < numbers.length; index += 1) {
    const current = numbers[index]
    const next = numbers[index + 1]
    sequence.push(current)
    if (current + 1 !== next) {
      if (sequence.length > 1) {
        const range = getRangeOfSequence(sequence)
        ranges.push(range)
      }
      sequence = []
    }
  }
  return ranges
}

export default summaryRanges

//Решение от GPT
const summaryRanges = (numbers) => {
    const result = [];
    let start = 0;

    for (let i = 1; i <= numbers.length; i++) {
        if (i < numbers.length && numbers[i] === numbers[i - 1] + 1) {
          continue;
        }

        if (i - start >= 2) {
          result.push(`${numbers[start]}->${numbers[i - 1]}`);
        }

    start = i;
    }

    return result;
}

console.log(summaryRanges([])) // []
console.log(summaryRanges([1])) // []
console.log(summaryRanges([1, 2, 3])) // ['1->3']
console.log(summaryRanges([0, 1, 2, 4, 5, 7])) // ['0->2', '4->5']
console.log(summaryRanges([110, 111, 112, 111, -5, -4, -2, -3, -4, -5])) 
// ['110->112', '-5->-4']