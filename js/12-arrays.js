'use strict';

var tablicaImion = ['Kasia', 'Artur', 'Robert'];

console.log(tablicaImion[2]);
console.log(tablicaImion);

tablicaImion[2] = 'Piotr';

console.log(tablicaImion[2]);

tablicaImion.push('Konrad');

console.log(tablicaImion);

tablicaImion.pop();

console.log(tablicaImion);



tablicaImion.unshift('Andrzej', 'Tomek');

console.log(tablicaImion);

tablicaImion.shift();

console.log(tablicaImion);

console.log(tablicaImion.length);

for (var i = 0; i<tablicaImion.length; i++) {
    console.log("Imie studenta to " + tablicaImion[i]);
}

console.log(tablicaImion.join('#'));


console.log(tablicaImion.reverse());

console.log(tablicaImion.sort());

console.log(tablicaImion.sort().reverse());




var noweImiona = ['Lukasz', 'Kamil'];

console.log(tablicaImion.concat(noweImiona));

console.log(tablicaImion.indexOf('Kasia'));

console.log(tablicaImion.slice(0,2));


tablicaImion.splice(2,0, 'TEST', 'test2');

console.log(tablicaImion);