var denominators = [20,10,5,1]



function vending(change,deno) {
    var money = change
    if (money/deno[0]>=1){
        var bill1 = Math.floor(money/deno[0])
        money = money - deno[0]*Math.floor(money/deno[0])
        console.log("0money is",money)
    }

    if (money/deno[1]>=1){
        var bill2 = Math.floor(money/deno[1])
        money = money - deno[1]*Math.floor(money/deno[1])
        console.log("1money is",money)
    }
    if (money/deno[2]>=1){
        var bill3 = Math.floor(money/deno[2])
        money = money - deno[2]*Math.floor(money/deno[2])
        console.log("2money is",money)
    }
    if (money/deno[3]>=1){
        var bill4 = Math.floor(money/deno[3])
        money = money - deno[3]*Math.floor(money/deno[3])
        console.log("3money is",money)
    }
    if (money > 0) {
        console.log("estimations are not exact for these denominators")
    }

    console.log("there are",bill1,deno[0],"bills")
    console.log("there are",bill2,deno[1],"bills")
    console.log("there are",bill3,deno[2],"bills")
    console.log("there are",bill4,deno[3],"bills")
}

vending(226,denominators)

/*undefined means zero, for some reason i cant get it to say 0*/