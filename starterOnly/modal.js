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






/////////////////////// CODE AJOUTE //////////////////////////////////////////


// close modal form
const close = document.querySelector(".content .close");
close.addEventListener("click", function() {
   document.querySelector(".bground").style.display = "none";
})


// Création de l'élément contenant le message d'erreur

let errorMessage = document.createElement("p");
errorMessage.style.color = "#FFF000";
errorMessage.style.fontSize = "0.875rem";
 

// Fonctions associées au mesage d'erreur

let addErrorMessage = function (field) {
  let fieldParent = field.parentElement;
  errorMessage.textContent = field.errorText;
  fieldParent.appendChild(errorMessage);
};

let removeErrorMessage = function (field) {
  let fieldParent = field.parentElement;
  fieldParent.removeChild(errorMessage);
};

// On ajoute par défaut une classe notValid à chaque formData
/*
const formDataAll = document.getElementsByClassName("formData");
for (let formData of formDataAll){
  formData.classList.add("notValid");
}
*/

// Validation sur firstName

const firstName = document.getElementById("first");
firstName.parentElement.setAttribute("data-error", "Veuillez entrer " + firstName.minLength + " caractères ou plus pour le champ du prénom");
//firstName.minLength = 2; //déjà pécisé dans le HTML, en propriété de l'input


let checkValidityText = function (element) {
  if (element.value.length < element.minLength) {
    element.parentElement.setAttribute("data-error-visible", "true");
  } else {
    element.parentElement.setAttribute("data-error-visible", "false");
  };
};


firstName.addEventListener("change", function(e) {
  checkValidityText(firstName);
  console.log("message "+ e.target.parentElement.getAttribute("data-error-visible"));
});


//Validation sur lastName

const lastName = document.getElementById("last");
lastName.minLength = 2;
lastName.parentElement.setAttribute("data-error", "Veuillez entrer " + lastName.minLength + " caractères ou plus pour le champ du nom de famille");


lastName.addEventListener("change", function(e) {
  checkValidityText(lastName);
  console.log("message "+ e.target.parentElement.getAttribute("data-error-visible"));
});

let formDataValidity = 0;

//Validation de email

const email = document.getElementById("email");
email.parentElement.setAttribute("data-error", "Veuillez entrer une adresse e-mail valide");
//email.parentElement.setAttribute("data-error-visible", "false");
console.log(email.parentElement.attributes);

let checkValidityEmail = function(element) {
  let count;
  if (element.validity.typeMismatch || element.value == "") {
    element.parentElement.setAttribute("data-error-visible", "true");
    count = 0;
  } else {
    element.parentElement.setAttribute("data-error-visible", "false");
    count = 1;
  };
  formDataValidity = formDataValidity + count;
  console.log("fdValidity " + formDataValidity);
};


email.addEventListener("change", function(e) {
  checkValidityEmail(email);
  console.log("message " + e.target.parentElement.getAttribute("data-error-visible"));
});



// Validation de birthdate

const birthdate = document.getElementById("birthdate");
birthdate.parentElement.setAttribute("data-error", "Veuillez entrer votre date de naissance");


let checkValidityValue = function (element) {
  if (element.value === "") {
    element.parentElement.setAttribute("data-error-visible", "true");
  } else {
    element.parentElement.setAttribute("data-error-visible", "false");
  };
};
  

birthdate.addEventListener("change", function (e) {
  checkValidityValue(birthdate);
  console.log("message " + e.target.parentElement.getAttribute("data-error-visible"));
});



// Validation de quantity

const quantity = document.getElementById("quantity");
quantity.parentElement.setAttribute("data-error", "Veuillez entrer un nombre entre " + quantity.min + " et " + quantity.max);

let checkValidityRange = function (element) {
  if (element.value < element.min || element.value > 99) // 99 correspond à element.max mais la condition ne fonctionne pas en utilisant element.max (??!)
  {
    element.parentElement.setAttribute("data-error-visible", "true");
  } else {
    element.parentElement.setAttribute("data-error-visible", "false");
  };
};

console.log(quantity.value);

quantity.addEventListener("change", function (e) {
  checkValidityRange(quantity);
  console.log(quantity.value);
  console.log("message " + e.target.parentElement.getAttribute("data-error-visible"));
});



// Validation pour bouton radio

const locationsAll = document.querySelectorAll("input[name='location']");
const locations = locationsAll[0];
locations.parentElement.setAttribute("data-error","Veuillez choisir une option parmi les villes proposées");

let checkValidityRadio = function (element){
  if (element.checked === false) {
    element.parentElement.setAttribute("data-error-visible", "true");
  } else {
    element.parentElement.setAttribute("data-error-visible", "false");
  };
};

for (let city of locationsAll) {
  city.addEventListener("change", function (e) {
    checkValidityRadio(city);
    console.log("message " + e.target.parentElement.getAttribute("data-error-visible"));
  }
)};



// Checkbox1

const checkbox1 = document.getElementById("checkbox1");
checkbox1.parentElement.setAttribute("data-error", "Vous devez vérifier que vous acceptez les termes et conditions");
checkbox1.parentElement.setAttribute("data-error-visible", "false");


let validity = true;

let checkValidityCheckbox = function (element) {
  if (element.checked === false) {
    element.parentElement.setAttribute("data-error-visible", "true");
    validity = false;
  } else {
    element.parentElement.setAttribute("data-error-visible", "false");
    validity = true;
  };
};



checkbox1.addEventListener("change", function(e) {
  checkValidityCheckbox(checkbox1);
 //console.log("checkbox1Message " + checkbox1.parentElement.getAttribute("data-error-visible"));
  console.log ("validity" + validity);
});


document.querySelector("form").addEventListener("submit", function(e) {
  checkValidityCheckbox(checkbox1);
  if (validity === false) {
    e.preventDefault(); 
  };
  console.log(checkbox1.parentElement.getAttribute("data-error-visible"));
});



//Validation du formulaire
/*
let validity;
let validate = function () {
  let compteurSubmit = 0;
  for (let formData of formDataAll) {
    if (formData.classList.contains("notValid")) {
      compteurSubmit++;
    };
  };
  console.log(formDataAll);
  console.log(compteurSubmit);
  if (compteurSubmit !== 0) {
    checkValidityText(firstName);
    checkValidityText(lastName);
    checkValidityEmail(email);
    checkValidityValue(birthdate);
    checkValidityValue(quantity);
    checkValidityRadio();
    checkValidityCheckbox();
    return validity = false;
  };
};
*/

/*
document.querySelector("form").addEventListener("submit", function(e) {
  validate ();
  console.log(validity);
  if (validity = false) {
    e.preventDefault();
    validate();
  } else {
    alert ("Merci ! Votre réservation a été reçue.");
  };
  console.log(formDataAll);
});*/