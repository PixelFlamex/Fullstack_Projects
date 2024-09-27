var words=["book","product","cup","water","extraordinary","correct","falsify","intergovernmentalization"]

function long() {
    return words.reduce(function (a,b) {
        return a.length > b.length ? a : b;
    })
}

console.log(long())