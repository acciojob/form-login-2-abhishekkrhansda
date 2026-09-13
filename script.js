//your JS code here. If required.
let fname = document.querySelector("#FirstName");
let lname = document.querySelector("#LastName");
let pnumber = document.querySelector("#PhoneNumber");
let email = document.querySelector("#EmailID");

let btn = document.querySelector("#btn");

btn.addEventListener("click",() =>{
	alert(
    "First Name :" + fname.value + " " +
    "\n Last Name :" + lname.value + " " +
    "\n Phone Number :" + pnumber.value + " " +
    "\n Email :" + email.value
);
})
