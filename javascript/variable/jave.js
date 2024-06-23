document.getElementById('variable-heading').textContent= `Variable`;
// variable is a container that store value

//1 Declaration let,var,const
//2 Assignment x = ...
/* Code1
let x = 234;

console.log(x);

let age = 17;
let price = 99.09;

console.log(`I'm ${age} years old`);
console.log(`The product costs ${price} \$`);
*/
//string
/*
let firstname = 'Dang';
let myName = 'Truong Phat';

console.log(typeof firstname);
console.log(`My name is ${firstname} ${myName}`);
*/
//bool
/*
let online = false;
let isStudent =true;

console.log(typeof online);
console.log(`Online: ${online}`);
*/
//sumary
/*
let fullName ="Dang Truong Phat";
let age = 17;
let isStudent = true;

document.getElementsByName("p1").textContent = `My name is ${fullName}`;
document.getElementById("p2").textContent = `Your are ${age} years old`;
document.getElementById('p3').textContent= `Enrolled: ${isStudent}`;
*/


function add_inform(code,id){
    let id_code = id + "-code";
    let id_heading;
    switch (id){
        case 'num':
            id_heading='Number';
            break;
        case 'str':
            id_heading = 'String';
            break;
        case 'bool':
            id_heading = 'Booleans';
            break;
        default:
            id_heading = 'Sumary';
    }
    document.getElementById(id).textContent= id_heading;
    document.getElementById(id_code).textContent = code;
}
let Code1 = `
let x = 234;

console.log(x);

let age = 17;
let price = 99.09;

console.log("I'm \${age} years old");
console.log('The product costs \${price} \$');
` 
let Code2 =`
let firstname = 'Dang';
let myName = 'Truong Phat';

console.log(typeof firstname);
console.log("My name is \${firstname} \${myName}");
`
let Code3 =`
let online = false;
let isStudent =true;

console.log(typeof online);
console.log("Online: \${online});
`
let sumary = `
let fullName ="Dang Truong Phat";
let age = 17;
let isStudent = true;

document.getElementsByName("p1").textContent = "My name is \${fullName}";
document.getElementById("p2").textContent = "Your are \${age} years old";
document.getElementById('p3').textContent= "Enrolled: \${isStudent}";
`
add_inform(Code1,"num");
add_inform(Code2,"str");
add_inform(Code3,"bool");
add_inform(sumary,"sumary");