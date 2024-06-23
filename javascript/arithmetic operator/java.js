document.getElementById('operator-heading').textContent = 'Arithmetic Operators'
// some basic operators
//*
let people = 30;
//sum
people = people +1;
//minus
people =people -1;
//production
people = people *2;
//division
people =people/2;
//exponent
people = people**2;
//mod
let extraStudents = people %8;

people +=1;
people -=1;
people *=2;
people /=2;
people **=2;
extraStudents %=8;
console.log(people);

console.log(extraStudents);
//*/
// operator precedent
/*
    1. parenthesis ()
    2.exponents
    3.multiplication, divison, modulo
    4 addition, subtraction
*/

let result = 1 + 2*3 + 4**(4/2);// 1+6+16 = 23
console.log(result);

