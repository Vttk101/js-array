//Реализуйте функцию buildDefinitionList(), которая генерирует HTML список определений 
//(теги <dl>, <dt> и <dd>) и возвращает получившуюся строку. 
//При отсутствии элементов в массиве функция возвращает пустую строку. Экспортируйте функцию по умолчанию.

// Моё решение
const buildDefinitionList = (coll) => {
  if (coll.length === 0)
   return ''
  const parts = []
  for (const item of coll) {
    parts.push(`<dt>${item[0]}</dt><dd>${item[1]}</dd>`)
  }
  
  const innerValue = parts.join('')
  
  const result = `<dl>${innerValue}</dl>`
  return result
}
export default buildDefinitionList

// Решение учителя
const buildDefinitionList = (definitions) => {
  if (definitions.length === 0) {
    return ''
  }

  const parts = []

  for (const definition of definitions) {
    const name = definition[0]
    const description = definition[1]
    parts.push(`<dt>${name}</dt><dd>${description}</dd>`)
  }

  const innerValue = parts.join('')
  const result = `<dl>${innerValue}</dl>`

  return result
}

export default buildDefinitionList