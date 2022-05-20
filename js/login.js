'use strict'

let newObject = window.localStorage.getItem("DataObj");
let Object = JSON.parse(newObject);
console.log(Object)

// let form = document.getElementById('login_form');


//  let nameF=  document.getElementById("name");
//  nameF.value=Object.firstName

//  let emailF= document.getElementById("email")
//  emailF.value=Object.email


let subbutton = document.getElementById('login_form');
subbutton.addEventListener('submit', handleSubmit);
function handleSubmit(event) {
    event.preventDefault();
    let userName = event.target.name.value;
    let email = event.target.email.value;
    console.log(userName)

    if (Object.firstName == userName && Object.email==email ){
        alert("Logins was successful")
    }

        

}
