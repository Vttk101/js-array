// Мой вариант --- РАБОТАЕТ
/* eslint no-restricted-syntax: ["off", "ForOfStatement"] */

const getDistance = ([x1, y1], [x2, y2]) => {
  const xs = x2 - x1
  const ys = y2 - y1

  return Math.sqrt(xs ** 2 + ys ** 2)
}

// BEGIN (write your solution here)
export const getTheNearestLocation = (locations, currentPoint) => {
    if (locations.length === 0) {
        return null
    }
    
    let result = []
    
    for(const item of locations) {
        const kuk = getDistance(currentPoint, item[1])
        
        result.push(kuk)
        
    }
    
    const min = Math.min(...result)
    const index = result.indexOf(min)
    return locations[index]
}
// END

console.log(getTheNearestLocation (locations, currentPoint)) 


// Решение учителя
/* eslint no-restricted-syntax: ["off", "ForOfStatement"] */

const getDistance = ([x1, y1], [x2, y2]) => {
  const xs = x2 - x1
  const ys = y2 - y1

  return Math.sqrt(xs ** 2 + ys ** 2)
}

// BEGIN
export const getTheNearestLocation = (locations, currentPoint) => {
  if (locations.length === 0) {
    return null
  }

  let [nearestLocation] = locations
  const [, nearestPoint] = nearestLocation
  let lowestDistance = getDistance(currentPoint, nearestPoint)

  for (const location of locations) {
    const [, point] = location
    const distance = getDistance(currentPoint, point)
    if (distance < lowestDistance) {
      lowestDistance = distance
      nearestLocation = location
    }
  }

  return nearestLocation
}
// END