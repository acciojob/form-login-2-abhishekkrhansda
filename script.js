//your JS code here. If required.
let fname = document.querySelector("#fname");
let lname = document.querySelector("#lname");
let pnumber = document.querySelector("#pnumber");
let email = document.querySelector("#email");

let btn = document.querySelector("#btn");

btn.addEventListener("click",() =>{
	alert(
    "First Name :" + fname.value + " " +
    "\n Last Name :" + lname.value + " " +
    "\n Phone Number :" + pnumber.value + " " +
    "\n Email :" + email.value
);
})
