let x;
let s = " "
for(x=1;x<=100;x++){
    if (x%3===0){
        if(x%5===0){
            s +=  "FizzBuzz" + ", "
        }else{
            s += "Fizz" + ", "
        }
    }else if (x%5===0){
        s += "Buzz" + ", "
    }else{
        s += x + ", "
    }
}
document.write(s)