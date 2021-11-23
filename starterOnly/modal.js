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


//Validation des champs du formulaire

// Création de l'élément content le message d'erreur

let errorMessage = document.createElement("p");
errorMessage.style.color = "#FFF000";
errorMessage.style.fontSize = "1rem";
 

//Validation sur lastName

let lastName = document.getElementById("last");
let lastNameParent = lastName.parentElement;
const lastNameMinLength = 2;
lastName.addEventListener("change", function(e) {
  if (lastName.value.length < lastNameMinLength) {
    errorMessage.textContent = "Veuillez entrer 2 caractères ou plus pour le champ du prénom";
    lastNameParent.appendChild(errorMessage);
  } else if (lastName.value.length >= lastNameMinLength && lastNameParent.lastElementChild == errorMessage) {
    lastNameParent.removeChild(errorMessage);
  };
});

/*
let lastName = document.getElementById("last");
const lastNameMinLength = 2;
let condition = lastName.value.length < lastNameMinLength;
let condition2 = "lastName.value.length >= lastNameMinLength";
let checkVal = function () {
  if (condition) {
    errorMessage.textContent = "Veuillez entrer 2 caractères ou plus pour le champ du prénom";
    lastName.parentElement.appendChild(errorMessage);
  } else if (condition2 && lastName.parentElement.lastElementChild == errorMessage) {
    lastName.parentElement.removeChild(errorMessage);
  };
};

lastName.addEventListener("change", function(e) {
  checkVal();
});
*/



//Validation de email

let email = document.getElementById("email");
let emailParent = email.parentElement;
email.addEventListener("change", function(e) {
  if (email.validity.typeMismatch) {
    errorMessage.textContent = "Veuillez entrer une adresse e-mail valide";
    emailParent.appendChild(errorMessage);
  } else if (!email.validity.typeMismatch && emailParent.lastElementChild == errorMessage) {
    emailParent.removeChild(errorMessage);
  };
});



// Validation de quantity

let quantity = document.getElementById("quantity");
let quantityParent = quantity.parentElement;
document.querySelector("form").addEventListener("submit", function (e) {
    if (quantity.value === "") {
      errorMessage.textContent = "Veuillez un nombre entre 0 et 99";
      quantityParent.appendChild(errorMessage);
      e.preventDefault();
    }
});


/*
let quantity = {
  identifiant: document.getElementById("quantity"),
  condition: 'quantity.value === ""',
  errorText: "Veuillez un nombre entre 0 et 99",
  valid: false
};


  let checkValidity = function (field) {
    let fieldParent = field.identifiant.parentElement;
    if (field.condition) {
      errorMessage.textContent = field.errorText;
      fieldParent.appendChild(errorMessage);
    }
  };

  
document.querySelector("form").addEventListener("submit", function (e) {
  checkValidity (quantity);
  if (quantity.valid === false) {
    console.log(quantity.valid);
    e.preventDefault;
  }
});
*/


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