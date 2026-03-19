const definitions = [
  ['definition1', 'description1'],
  ['definition2', 'description2'],
]

const definitions1 = [
  ['Блямба', 'Выпуклость, утолщения на поверхности чего-либо'],
  ['Бобр', 'Животное из отряда грызунов'],
]

const buildDefinitionList = (coll) => {
  const parts = []
  for (const item of coll) {
    parts.push(`<dt>${item[0]}</dt><dd>${item[1]}</dd>`)
  }
  
  const innerValue = parts.join( )
  
  const result = `<dl>${innerValue}</dl>`
  return result
}

console.log(buildDefinitionList(definitions1))