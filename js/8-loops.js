'use strict'

/* Pętla for */

for (var i = 0; i<5; i++) {
    console.log('Wykonanie pętli' + i);
}

var studenci = ['Konrad', 'Andrzej', 'Artur', 'Kasia', 'Piotr'];


for (var i= 1; i<=studenci.length; i++) {
    console.log('Student ' + i + ' ma na imię ' + studenci[i - 1]);
}



/* Pętla while */

var it = Math.floor(Math.random() * 10)

/*
while (it < 10) {
    console.log(it);
    it++;
}
*/




/* Pętla do..while */

do {
    console.log(it);
    it = Math.floor(Math.random() * 10);
} while (it !=5);





/* Instrukcja break */


for (var i = 0; i<5; i++) {
    if(i == 3) {
        break;
    }
    
    console.log(i);
}






/* Instrukcja contiune */

for (var i = 0; i<50; i++) {
    
    if (i%2 == 0) {
        continue;
    }
    console.log(i);
}



























