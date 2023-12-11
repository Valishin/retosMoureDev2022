const fizzBuzz = () => {
    for(let i = 1; i < 101; i++){
        if(i % 5 === 0 && i % 3 === 0) console.log('fizzbuzz\n')
        else if(i % 3 === 0) console.log('fizz\n')
        else if(i % 5 === 0) console.log('buzz\n')
        else console.log(`${i}\n`)
    }
}

primeNumbers()