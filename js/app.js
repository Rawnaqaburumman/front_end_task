'use strict'


let cites = {
    "jordan": ["Amman", "Zarqa", "Madaba"],
    "saudi": ["Riyadh", "Jeddah", " Medina"],
    "turkey": ["Istanbul", "Antalya", "Ankara"]
}


document.getElementById("submit").onclick = function () {
    location.href = "www.google.com";
};


function getDropListData() {
    alert("Hello")
    let selectedValue = document.getElementById('state').value;
    // console.log(selectedValue);
    if (selectedValue == "jordan") {
        for (let i = 0; i < cites.jordan.length; i++) {
            document.getElementById("city").options[i] = new Option(cites.jordan[i])
        }

    }

    if (selectedValue == "saudi") {
        for (let i = 0; i < cites.saudi.length; i++) {
            document.getElementById("city").options[i] = new Option(cites.saudi[i])
        }

    }

    if (selectedValue == "turkey") {
        for (let i = 0; i < cites.turkey.length; i++) {
            document.getElementById("city").options[i] = new Option(cites.turkey[i])
        }

    }


}







let subbutton = document.getElementById('formFill');
subbutton.addEventListener('submit', handleSubmit);
function handleSubmit(event) {
    // event.preventDefault();
    let DataObj = {
        firstName: event.target.fname.value,
        secondName: event.target.sname.value,
        adress: event.target.adress.value,
        gender: event.target.gender.value,
        pinCode: event.target.pincode.value,
        course: event.target.course.value,
        email: event.target.email.value
    }
  localStorage.setItem("DataObj", JSON.stringify(DataObj));



    // console.log(` Hello ${firstName}`)
}


