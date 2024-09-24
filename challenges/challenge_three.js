function getRandomInt(max) {
    var number = Math.floor(Math.random() * max);
    console.log(number)
    if (number == 0) {
        console.log ("A certain victory")
    }
    if (number == 1) {
        console.log ("not so certain victory")
    }
    if (number == 2) {
        console.log ("an uneasy victory")
    }
    if (number !=0 && number !=1 && number !=2) {
        console.log ("Your fate is unclear, ô chosen undead")
    }
  }

