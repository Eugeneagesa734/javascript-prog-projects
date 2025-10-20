console.log(`Hello`);
console.log(`World`);

//window.alert(`This is an alert`);

/*let a = 5;
let b = 30;

c = a + b;

window.alert(`The sum of a and b is: ${c}`);*/

let fullName =  "Eugene Smith";
let age = 25;
let isStudent = true;

document.getElementById("p1").textContent = `Your Name is, ${fullName}`;
document.getElementById("p2").textContent = `Your Age is, ${age}`;
document.getElementById("p3").textContent = `Are you a student? ${isStudent}`;

let username;

document.getElementById("mySubmit").onclick = function() {
    username = document.getElementById("myTest").value;
    document.getElementById("myH1").textContent = `Welcome, ${username}`;
    }