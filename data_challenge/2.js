var person1 = {
    name:"test1",
    age:30,
    email:"test1@gmail.com"
}
var person2 = {
    name:"test2",
    age:22,
    email:"test2@gmail.com"
}
var person3 = {
    name:"test3",
    age:55,
    email:"test3@gmail.com"
}

var list= {person1,person2,person3}

function ageCheck(array) {
    testArray=array
    for (let i = 0 ; i < testArray.length+1; i++) {
        if (testArray[i].age < 30) {
            testArray.splice(i,1)
        }
    }
    return testArray
}

console.log (ageCheck(list))