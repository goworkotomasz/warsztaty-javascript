'use strict'

var student = {
    imie: 'Tomasz',
    wzrost: 184,
    przedstawSie: function() {
        console.log('Cześć, mam na imię ' + this.imie + ' i mam ' + this.wzrost + ' cm wzrostu');
    }
}


student.przedstawSie();

console.log(student);