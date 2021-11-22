function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// close modal form
const close = document.querySelector(".content .close");
close.addEventListener("click", function() {
   document.querySelector(".bground").style.display = "none";
})

let errorMessage = document.createElement("p");
//errorMessage.textContent = "";
errorMessage.style.color = "#FFF000";
errorMessage.style.fontSize = "1rem";
//document.querySelector(".formData").appendChild(errorMessage);
 

/*
let lastName = document.querySelector("#last");
let lastNameParent = lastName.parentElement;
lastName.addEventListener("change", function(e) {
  console.log(lastName.value);
  if (lastName.value.length < 2) {
    errorMessage.textContent = "Veuillez entrer 2 caractères ou plus pour le champ du prénom";
    lastNameParent.appendChild(errorMessage);
  } else if (lastName.value.length >= 2 && lastNameParent.lastElementChild == errorMessage) {
    lastNameParent.removeChild(errorMessage);
  };
})
*/

let lastName = document.querySelector("#last");
let lastNameParent = lastName.parentElement;
const lastNameMinLength = 2;
lastName.addEventListener("change", function(e) {
  console.log(lastName.value);
  if (lastName.value.length < lastNameMinLength) {
    errorMessage.textContent = "Veuillez entrer 2 caractères ou plus pour le champ du prénom";
    lastNameParent.appendChild(errorMessage);
  } else if (lastName.value.length >= 2 && lastNameParent.lastElementChild == errorMessage) {
    lastNameParent.removeChild(errorMessage);
  };
})



let email = document.querySelector("#email");
let emailParent = email.parentElement;
email.addEventListener("change", function(e) {
  if (email.validity.typeMismatch) {
    errorMessage.textContent = "Veuillez entrer une adresse e-mail valide";
    emailParent.appendChild(errorMessage);
  } else if (!email.validity.typeMismatch && emailParent.lastElementChild == errorMessage) {
    emailParent.removeChild(errorMessage);
  };
})

// Checkbox1
document.querySelector("form").addEventListener("submit", function(e) {
  let checkbox1 = document.querySelector("#checkbox1");
  let checkbox1Parent = checkbox1.parentElement;
  if (checkbox1.checked === false) {
    errorMessage.textContent = "Vous devez vérifier que vous acceptez les termes et conditions";
    checkbox1Parent.appendChild(errorMessage);
  e.preventDefault();
  }
});