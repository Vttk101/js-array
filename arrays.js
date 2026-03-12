//Реализуйте и экспортируйте функцию swap(), которая меняет местами первый и последний элемент массива. Если массив содержит меньше двух элементов, то он возвращается как есть

// Моё решение
export const swap = (arra) => {
    let alfa = arra[0]
    let omega = arra.at(-1)
    if (arra.length === 0) {
        return []
    }
    else {
    arra[0] = omega
    arra[arra.length -1] = alfa
    }
    return arra
}

//Решение учителя
export const swap = (items) => {
  if (items.length < 2) {
    return items
  }
  const lastIndex = items.length - 1
  const last = items[lastIndex]
  items[lastIndex] = items[0]
  items[0] = last

  return items
}