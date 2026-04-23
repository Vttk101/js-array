const getDistance = ([x1, y1], [x2, y2]) => {
  const xs = x2 - x1
  const ys = y2 - y1

  return Math.sqrt(xs ** 2 + ys ** 2)
}

const locations = [
  ['Park', [10, 5]],
  ['Sea', [1, 3]],
  ['Museum', [8, 4]],
]

const currentPoint = [5, 5]

const getTheNearestLocation = (locations, currentPoint) => {
    
}

console.log(getDistance(currentPoint, [10, 5]))
console.log(getDistance(currentPoint, [1, 3]))
console.log(getDistance(currentPoint, [8, 4]))