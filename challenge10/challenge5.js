people = [person1 = {name:"bobert",age:"-1",city:"new york"},
    person2 = {name:"john",age:"92",city:"new york"},
    person3 = {name:"oog",age:"348561",city:"ancient york"},
]

function number(list){
    result = list.reduce(function (num,word) {
        return num[word.city] ? ++num[word.city] : num[word.city] = 1, num
    },{})
    console.log(result)
}
number(people)