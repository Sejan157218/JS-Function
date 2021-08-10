var i = 3;
while(i <10){
    console.log(i);
    if(i<=5){
        break
    }
    i +=1;  
}


var number = [100,150,200,250,300]
for (var i=0;i<number.length;i++){
    var numbers = number[i];
    if(numbers ==250){
        continue
    }
    console.log(numbers);
}