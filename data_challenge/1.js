var testArray= 1
function even(array) {
    testArray=array
    for (let i = 0 ; i < testArray.length+1; i++) {
        if ((testArray[i] % 2) !=0) {
            testArray.splice(i,1)
        }
    }
    return testArray
}
arrayAttempt = [1,2,3,4,5,6,7,8,9]
console.log(even(arrayAttempt))