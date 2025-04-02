
// Merge Two Arrays and Remove Duplicate Items

let arr1=[1,2,3,4];
let arr2=[4,5,6,7];

for(let j=0;j<arr2.length;j++){
    arr1.push(arr2[j]);
}

let distinct=[];let seen={};
for(let i=0;i<arr1.length;i++){
    // console.log(arr1[i]);
    let abc=arr1[i];
     console.log(seen)
    if(seen[abc] == undefined){
           seen[abc]=1;
    }
}
console.log(distinct)