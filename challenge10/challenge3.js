var bookslist = [book1 = {pages:30,author:"test",title:"name"},
                 book2 = {pages:458,author:"test",title:"name"},
                 book3 = {pages:2093,author:"test",title:"name"},
]

function average(list) {
    var total=0
    list.map((book) => total = total+book.pages)
    console.log(Math.floor(total/list.length))
}

average(bookslist)