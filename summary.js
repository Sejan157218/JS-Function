// var mobile = ['samsumg','vivo','poco']
// mobile.push('relmi');
// mobile.push(5);
// mobile.pop(5);
// console.log(mobile)
// var mobiles = mobile.indexOf("oppo");
// if (mobiles == -1){
//     console.log('oppo is not in list')
// }
// else{
//     console.log('oppo is in list')
// }

// var moiles = mobile.lenth;
// var mobile = ['samsumg','vivo','poco'];
// var i =0;
// while (i<mobile.length){
//     console.log(mobile[i]);
//     i++;
// }
 

// function
// function number(num1,num2,num3){
//     console.log("It is number1"+' '+num1)
//     console.log("It is number2"+' '+num2)
//     console.log("It is number3"+' '+num3)
//     var total = num1 +num2 + num3;
//     return total;
// }

// var total = number(24,25,51);
// console.log("Total" +" "+ total)


var mobile={
    name: 'poco M2',
    prize: 15500 + "tk"
}
mobile.prize = 14500+"tk";
mobile['prize'] = 14000+"tk";
var discountPrize = 'prize';
mobile[discountPrize] = 13500+"tk";
console.log(mobile);


// switch
var color= 'rebd';
switch (color){
    case "green":
        console.log("It is green color");
        break;
    case "blue":
        console.log("It is blue color");
        break;
    case "red":
        console.log("It is green red");
    break;case "skyblue":
        console.log("It is green skyblue");
    break;
    default:
        console.log("It is green black");
}
