document.getElementById('input-heading').textContent = "Accept user input"
// Easy Way = window prompt
/*
let name = window.prompt("What's your name?")
console.log(name);
*/
// PRO way = html box
let user
document.getElementById("sub-btt").onclick = ()=>{
    user = document.getElementById("myInput").value ;
    console.log(user);
    document.getElementById('myInput').value = null;
}