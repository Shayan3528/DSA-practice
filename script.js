
/// sieve  of Eratosthenes for  prime number 

function isPrime(n){
    let primes = new Array(n+1).fill(true);

    primes[0]= primes[1]=false;

    for(let i = 2;i*i<=n;i++){

        if(primes[i]){
            for(let j = i*i;j<=n;j+=i){
                primes[j] = false;
            }
        }
    }

    let result = [];
    for(let i = 2;i<=n;i++){
        if(primes[i]){
            result.push(i);
        }
    }

    return result;

}

isPrime(100);

console.log(result);