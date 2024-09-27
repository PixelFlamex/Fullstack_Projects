wordlist=["book","book","book","try","try","test"]

function number(list){
    result = list.reduce(function (num,word) {
        return num[word] ? ++num[word] : num[word] = 1, num
    },{})
    console.log(result)
}
number(wordlist)