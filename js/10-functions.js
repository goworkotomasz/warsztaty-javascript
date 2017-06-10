'use strict'

function addNumbers(par1, par2) {
    
    var num1 = par1;
    var num2 = par2;
    
    var wynik = num1 + num2;
    
    console.log('Wynik dodawania to ' + wynik);
    
    return wynik;
}

    
    
addNumbers(2,2);
addNumbers(7,5);
addNumbers('cześć',' kolego');


var wynikFunkcji = addNumbers(6,9);

console.log(wynikFunkcji);




function evenNumersCount(par1, par2) {
    var evenNumbers = 0;
    
    for (var i = 1; i<=par1; i++) {
        if(i%par2 == 0) {
            evenNumbers++;
        }
    }
    return evenNumbers;
}

console.log(evenNumersCount(100, 5));