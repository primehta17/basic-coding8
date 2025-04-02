// Find Factorial of Number Using Recursion

function factrec(num){
    if(num<=1){
        return num;
    }
     return num * factrec(num-1);

}

console.log(factrec(5))