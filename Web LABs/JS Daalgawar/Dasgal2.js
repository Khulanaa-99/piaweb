function isPrime(n) {
    if (n < 2) {
        return false;
    }
    for (let i = 2; i < n; i++){
        if ( n % i === 0) {
            return false;
        }
    }
    return true;
}
 
let result = "";
let count = 0;
    for (let i = 1; i <=30 ; i++) {
        if (isPrime(i)) {
            result += i + " ";
            count++;
        }
    }
    return true;

console.log("", result);
console.log("Niit: ", count);