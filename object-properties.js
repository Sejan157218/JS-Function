var laptop = {
    name : 'HP',
    prize : 28000,
    storage : '1tb',
    Ram : '8GB',
}

// console.log(laptop);

// laptop.prize = 25000;
// laptop['prize'] = 24000;
var newPrize = 'prize';
laptop[newPrize] = 20000;

// console.log(laptop);


var mobile = {
    name : 'poco M2',
    prize : 15500 +' '+'tk',
}
console.log(mobile)
mobile.prize = 14500;
mobile['prize'] = 13000 +' '+ 'tk';

var newPrize = 'prize';
mobile[newPrize] = 12000 +' '+ 'tk';
console.log(mobile)
