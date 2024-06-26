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
    document.getElementById(id_code).innerHTML = code;
}
let Code1 = `
let x = 234; <br>
<br>
console.log(x); <br>
<br>
let age = 17; <br>
let price = 99.09; <br>
<br>
console.log("I'm \${age} years old"); <br>
console.log('The product costs \${price} \$');<br>
` 
let Code2 =`
let firstname = 'Dang';<br>
let myName = 'Truong Phat';<br>
<br>
console.log(typeof firstname);<br>
console.log("My name is \${firstname} \${myName}");<br>
`
let Code3 =`
let online = false;<br>
let isStudent =true;<br>
<br>
console.log(typeof online);<br>
console.log("Online: \${online});<br>
`
let sumary = `
let fullName ="Dang Truong Phat";<br>
let age = 17;<br>
let isStudent = true;<br>
<br>
document.getElementsByName("p1").textContent = "My name is \${fullName}";<br>
document.getElementById("p2").textContent = "Your are \${age} years old";<br>
document.getElementById('p3').textContent= "Enrolled: \${isStudent}";<br>
`
add_inform(Code1,"num");
add_inform(Code2,"str");
add_inform(Code3,"bool");
add_inform(sumary,"sumary");