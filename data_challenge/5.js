function vowels(string) {
    let  newString = string.replace(/[aeiou]/gi, '')
    console.log(newString)
}

vowels("testing")