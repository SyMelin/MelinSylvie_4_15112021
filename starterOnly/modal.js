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

/////////////////////////////////////////////////////////////////////////////////////////////

// close modal form
const close = document.querySelector(".content .close");
close.addEventListener("click", function() {
   document.querySelector(".bground").style.display = "none";
})


//Validation des champs du formulaire

// Création de l'élément content le message d'erreur

let errorMessage = document.createElement("p");
errorMessage.style.color = "#FFF000";
errorMessage.style.fontSize = "0.875rem";
 
let addErrorMessage = function (field) {
  let fieldParent = field.parentElement;
  errorMessage.textContent = field.errorText;
  fieldParent.appendChild(errorMessage);
}

let removeErrorMessage = function (field) {
  let fieldParent = field.parentElement;
  fieldParent.removeChild(errorMessage);
}


//Validation sur lastName
/*
const lastName = document.getElementById("last");
const lastNameParent = lastName.parentElement;
const lastNameMinLength = 2;
lastName.addEventListener("change", function(e) {
  if (lastName.value.length < lastNameMinLength) {
    errorMessage.textContent = "Veuillez entrer 2 caractères ou plus pour le champ du prénom";
    lastNameParent.appendChild(errorMessage);
  } else if (lastName.value.length >= lastNameMinLength && lastNameParent.lastElementChild == errorMessage) {
    lastNameParent.removeChild(errorMessage);
  };
});
*/

const lastName = document.getElementById("last");
lastName.errorText = "Veuillez entrer 2 caractères ou plus pour le champ du prénom";
const lastNameMinLength = 2;

lastName.addEventListener("change", function(e) {
  if (lastName.value.length < lastNameMinLength) {
    addErrorMessage(lastName);
  } else if (lastName.value.length >= lastNameMinLength && lastName.parentElement.lastElementChild == errorMessage) {
    removeErrorMessage (lastName);
  };
});





/*
const lastName = document.getElementById("last");
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

const email = document.getElementById("email");
email.errorText = "Veuillez entrer une adresse e-mail valide";

email.addEventListener("change", function(e) {
  if (email.validity.typeMismatch) {
    addErrorMessage (email);
  } else if (!email.validity.typeMismatch && email.parentElement.lastElementChild == errorMessage) {
    removeErrorMessage (email);
  };
});



// Validation de quantity

const quantity = document.getElementById("quantity");
quantity.errorText = "Veuillez un nombre entre 0 et 99";

document.querySelector("form").addEventListener("submit", function (e) {
    if (quantity.value === "") {
      addErrorMessage (quantity);
      e.preventDefault();
    }
});

// Validation pour bouton radio

const locationsLabels = document.getElementsByClassName("checkbox-label");
const locations = locationsLabels[0];
locations.errorText = "Veuillez choisir une option parmi les villes proposées"

document.querySelector("form").addEventListener("submit", function (e) {
  let compteur = 0;
  for (let city of locationsLabels) {
    if (city.previousElementSibling.checked) {
      compteur++;
    };
  };
  if (compteur == 0) {
    console.log("compteur "+ compteur);
    addErrorMessage (locations);
      e.preventDefault();
  };
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

const checkbox1 = document.getElementById("checkbox1");
checkbox1.errorText = "Vous devez vérifier que vous acceptez les termes et conditions";
  
document.querySelector("form").addEventListener("submit", function(e) {
  if (checkbox1.checked === false) {
    addErrorMessage (checkbox1);
    e.preventDefault();
  }
});