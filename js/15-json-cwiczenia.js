'use strict'


var pracownicy = {
     "pracownicy":[
         {"firstName": "Krystian", "lastName": "Dziopa"},
         {"firstName": "Anna", "lastName": "Szapiel"},
         {"firstName": "Piotr", "lastName": "Żmuda"}
     ]
}

pracownicy.pracownicy.forEach(function(element, index) {
    console.log('Pracownik ' + (index+1) + ' ma na imię ' + element.firstName + ' i na nazwisko ' + element.lastName);
});



