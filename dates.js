// Моё решение
export const getWeekends = (str) => {
    const longs = ['saturday', 'sunday']
    const shorts = ['sat', 'sun']
    if (str === 'long') {
        return longs
    } 
    else if (str === 'short'){
        return shorts
    }
    else {
        return longs
    }
}

// Решение учителя
export const getWeekends = (format = 'long') => {
  const longFormat = ['saturday', 'sunday']
  const shortFormat = ['sat', 'sun']

  switch (format) {
    case 'long':
      return longFormat
    case 'short':
      return shortFormat
    default:
      // тут нужно выбрасывать ошибку,
      // что данный формат не поддерживается.
      // будем проходить позже, как это делать, поэтому
      // пока достаточно просто сделать break;
      console.log('This format is not supported')
      break
  }
}