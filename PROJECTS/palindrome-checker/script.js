const cleanString = input => {
    const nonAlphaNumeric = /[\W_]/g; 
    return input.replace(nonAlphaNumeric, "").toLowerCase(); 
}

const reverseString = cleanInput => cleanInput.split("").reverse().join("")

const isPalindrome = (input) => {
    const cleanInput = cleanString(input); 
    const reversedInput = reverseString(cleanInput); 
    return reversedInput === cleanInput; 
}
