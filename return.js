function add (num1, num2, num3){
    var sum = num1+num2+num3;
    return sum;
}
var total = add(10,30,659);
//console.log('Sum is :', total);




//another example
function bringSingara(money){
   var singaraPrice = 15;
   var quantity = money / singaraPrice; 
   //var quantitys = quantity.toFixed(2) ;
   return quantity;
   
}
var singara = bringSingara(150);
console.log('Eating singara :',singara);