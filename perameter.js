function pen(taka){
    console.log('i have',taka,'tk')
    var penPrize = 5;
    var getPenn = taka / penPrize;
    return getPenn
}
var money =100;

var getPen =pen(money);

console.log('i got',getPen,"pen")



function examMarks(marks){
    console.log('i got total',marks ,"in 6 subjects")
    var subject = 6;
    var avarese = marks /subject;
    return  avarese
}

var totalIn6Subject = 580;
var marksInAvarese = parseFloat(examMarks(totalIn6Subject).toFixed(1));

console.log('i got total',marksInAvarese ,"in avarese")

