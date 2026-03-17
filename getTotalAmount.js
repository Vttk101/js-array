//Реализуйте и экспортируйте по умолчанию функцию, которая принимает на вход в виде массива 
//кошелек с деньгами и название валюты и возвращает сумму денег указанной валюты.

//Моё решение
const getTotalAmount = (money, str) => {
    let result = 0
    for (const nombill of money) {
        
        const nom = nombill.slice(4)
        const bill = nombill.slice(0, 3)
        
        if (bill === str) {
            result += Number(nom)
        }
    }
    return result
}
export default getTotalAmount

// Решение учителя
const getTotalAmount = (money, currency) => {
  let sum = 0

  for (const bill of money) {
    const currentCurrency = bill.slice(0, 3)
    if (currentCurrency !== currency) {
      continue
    }
    const denomination = Number(bill.slice(4))
    sum += denomination
  }

  return sum
}

export default getTotalAmount