//  Find Sum of Natural Numbers Using Recursion
//The positive integers 1, 2, 3, ... are known as natural numbers.

// sum(5) returns 5 + sum(4)
// sum(4) returns 5 + 4 + sum(3)
// sum(3) returns 5 + 4 + 3 + sum(2)
// sum(2) returns 5 + 4 + 3 + 2 + sum(1)
// sum(1) returns 5 + 4 + 3 + 2 + 1 + sum(0)
// sum(0) returns 5 + 4 + 3 + 2 + 1 + 0



function sum(num){
    if(num<=0){
        return num;
    }
    return num + sum(num-1);
}
console.log(sum(5));


//while loop for sum of natural number

let number=6,addall=0;
while(number>=0){
    addall+=number;
    number--;
}
console.log(addall);
