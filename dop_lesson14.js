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

const append = (arr1, arr2) => {
    for (const item of arr2) {
        arr1.push(item);
    }
}

const flatten = (coll) => {
    const result = [];
    for (const item of coll) {
        if (Array.isArray(item)) {
            
            append(result, item);
            
            //for (const subitem of item) { -это выносим в отдельную функцию
            //    result.push(subitem)       append()
            
        } else {
            result.push(item)
        }
    }
    return result
}

const coll = [[3, 2], 5, 3, [3, 4, 2], 10]

console.log(flatten(coll))