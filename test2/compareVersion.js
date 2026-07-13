//Мой кривой вариант
const compareVersion = (str1, str2) => {
    
    const separator = '.'
    const version1 = str1.split(separator)
    const version2 = str2.split(separator)
    
    
    let result
    
    if (version1[0] > version2[0]) {
        return 1
    } 
    else if (version1[0] < version2[0]) {
        return -1
    }
    else if (version1[0] === version2[0]) {
        
        if (version1[1] > version2[1]) {
            return 1
        }
        
        else if (version1[1] < version2[1]) {
            console.log(version1[1])
            console.log(version2[1])
            return -1
        }
        else if (version1[1] === version2[1]) {
            return 0
        }
    }
}

//console.log(compareVersion('0.1', '0.2'))   // -1
//console.log(compareVersion('0.2', '0.1'))   // 1
//console.log(compareVersion('4.2', '4.2'))   // 0
//console.log(compareVersion('0.2', '0.12'))  // -1 д.б. так но моя версия врет
//console.log(compareVersion('3.2', '4.12'))  // -1
//console.log(compareVersion('3.2', '2.12'))  // 1
//console.log(compareVersion('10.2', '2.12')) // 1


//рабочий вариан, который я подсмотрел
function compareVersion(v1, v2) {
  v1 = v1.split('.')
  v2 = v2.split('.')
  var len = Math.max(v1.length, v2.length)

  while (v1.length < len) {
    v1.push('0')
  }
  while (v2.length < len) {
    v2.push('0')
  }

  for (var i = 0; i < len; i++) {
    var num1 = parseInt(v1[i])
    var num2 = parseInt(v2[i])

    if (num1 > num2) {
      return 1
    } else if (num1 < num2) {
      return -1
    }
  }

  return 0
}
console.log(compareVersion('0.1', '0.2'))   // -1
console.log(compareVersion('0.2', '0.1'))   // 1
console.log(compareVersion('4.2', '4.2'))   // 0
console.log(compareVersion('0.2', '0.12'))  // -1
console.log(compareVersion('3.2', '4.12'))  // -1
console.log(compareVersion('3.2', '2.12'))  // 1
console.log(compareVersion('10.2', '2.12')) // 1


//решение учителя
const compareVersion = (first, second) => {
  const [a1, b1] = first.split('.')
  const [a2, b2] = second.split('.')

  const major = Math.sign(a1 - a2)
  const minor = Math.sign(b1 - b2)

  return major === 0 ? minor : major
}

export default compareVersion