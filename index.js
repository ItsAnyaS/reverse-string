
function reverseString(str){

    if (!str || typeof str !== 'string' || str.length < 1){
        console.log(`Invalid argument ${str}`)
        return `Invalid argument ${str}`
    }
    let reversedString = ''

    // Array.from(str).forEach((letter)=> {
    //     reversedString = letter + reversedString
    // })

    for (let i = 0; i< str.length; i++){
        reversedString = str[i] + reversedString
    }
    console.log(reversedString)
    return reverseString
}

reverseString(2)

