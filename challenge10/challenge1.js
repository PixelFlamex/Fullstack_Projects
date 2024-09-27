var numbers = [1,2,3,4,5,6,7,8,9,10] 

const result = numbers.filter((number) => number % 2 == 0)

console.log(result)


sum = result.reduce(addUp)

function addUp(total,num) {
    return total + num
}
console.log(sum)
console.log(sum/result.length)

