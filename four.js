//JavaScript Program to remove all spaces in String

let string="            i like this program very much             ", addstr='';

for(let i=0;i<string.length;i++){
    if(string[i]==' '){
         addstr+='';
    }else{
        addstr+=string[i];
    }
}
console.log(addstr);