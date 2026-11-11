const isContinuousSequence = (arr) => {
    
    for (let i = 0; i < arr.length; i += 1) {
        let x = arr[i]
        let y = arr[0] + i
        
        console.log(y)
        if (x !== y){
             return false
        }
    }
    return true
}

//console.log(isContinuousSequence([10, 11, 12, 13]))
//console.log(isContinuousSequence([-5, -4, -3]))
//console.log(isContinuousSequence([10, 11, 12, 14, 15]))
//console.log(isContinuousSequence([1, 2, 2, 3]))
console.log(isContinuousSequence([7]))
console.log(isContinuousSequence([]))