'use strict'

var liczbaPierwsza = 5;
var liczbaDruga = 2;

console.log(liczbaPierwsza % liczbaDruga);


/* Inkrementacja */
/*
while(liczbaPierwsza > liczbaDruga) {
    console.log(liczbaPierwsza);
    --liczbaPierwsza;
}*/


/* Operatory przypisania */

var liczbaTrzecia = 6;

console.log(liczbaTrzecia);

liczbaTrzecia += 3;
liczbaTrzecia -= 1;
liczbaTrzecia *=2;
liczbaTrzecia /= 4;
liczbaTrzecia %= 4;

console.log(liczbaTrzecia);



/* Operatory porównania */

if(2 === 2) {
    console.log('To jest prawda');
} else {
    console.log('To jest fałsz');
}



/* Operatory logiczne */

if(2 <= 2 && 8 > 9) {
    console.log('To jest prawda');
} else {
    console.log('To jest fałsz');
}




if(!(2<2)) {
    console.log('To jest prawda');
} else {
    console.log('To jest fałsz');
}




/* Operator warunkowy */


var zmienna = (2<3)?'Dwa jest mniejsze do trzy':'To jest nieprawda';

console.log(zmienna);





























