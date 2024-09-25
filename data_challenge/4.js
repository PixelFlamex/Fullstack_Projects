var nameList =["first","second","third","fourth","fifth","sixth","seventh","eigth"]

function queue(list){
    var shifted = list.shift()
    console.log(shifted)
    console.log(list)
}

queue(nameList)