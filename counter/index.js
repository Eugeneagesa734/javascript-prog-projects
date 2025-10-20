/**const PI = 3.14159;
let radius;
let circumference;


circumference = 2 * PI * radius;

document.getElementById("mySubmit").onclick = function() {
    document.getElementById("myText").value
    radius = Number(radius);
    circumference = 2 * PI * radius;
    document.getElementById("myH3").textContent = circumference + "cm";
}**/

const PI = 3.14159;  // correct constant
let radius;
let circumference;

document.getElementById("mySubmit").onclick = function() {
    radius = Number(document.getElementById("myText").value); // get user input
    circumference = 2 * PI * radius;                          // calculate circumference
    document.getElementById("myH3").textContent = circumference + " cm"; // display result
};
