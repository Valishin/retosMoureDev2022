const primeNumbers = (number1, number2) => {   
    for(let i = number1; i <= number2; i++){
        if(isPrime(i)) console.log(i) 
    }
}

const isPrime = (number) => {
    if(number < 2) return false

    for(let e = number - 1; e > 0; e--){
        if(number % e === 0 && e !== 1){
            return false            
        }
    }
    return true
}

primeNumbers(24, 82)