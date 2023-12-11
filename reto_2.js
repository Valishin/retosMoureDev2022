const isAnagram = (string1, string2) => {    
    if(string1.toLowerCase() === string2.toLowerCase()) return false
    if(
        JSON.stringify(string1.toLowerCase().split('').sort()) === 
        JSON.stringify(string2.toLowerCase().split('').sort())) return true
    else return false
}

console.log(primeNumbers('roma', 'AMOrs'))