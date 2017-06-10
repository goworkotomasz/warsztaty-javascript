'use strict'

var uczen = {
    name: 'Piotr',
    suranme: 'Kowalski'
};

console.log(uczen.name);

uczen.wzrost = 178;

console.log(uczen);


uczen.printDetails = function() {
    return 'Ten uczen ma na imię ' + this.name + ' i ma ' + this.wzrost + ' cm wzrostu';
}

console.log(uczen.printDetails());


/* Klasa */

function Student(imie, nazwisko) {
    this.imie = imie;
    this.nazwisko = nazwisko || 'Nieznane';
    this.wyswietlInfo = function() {
        return "Imię: " + this.imie + ", " + "Nazwisko: " + this.nazwisko;
    }
}


var Kasia = new Student('Katarzyna');

console.log(Kasia);

console.log(Kasia.wyswietlInfo());