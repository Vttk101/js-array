const flatten = (coll) => {
    const result = []
    for (const item of coll) {
        if (Array.isArray(item)) {
            for (const subitem of item) {
                result.push(subitem)
            }
        } 
        else {
            result.push(item)
        }
    }
    return result
}

const coll = [[3, 2], 5, 3, [3, 4, 2], 10]

console.log(flatten(coll))

const sizes = ['X', 'M']
const colores = ['red', 'blue']

for (const size of sizes) {
    for (const color of colores) {
        console.log(`${size} ${color}`)
    }
}