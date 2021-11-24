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
const formDataAll = document.getElementsByClassName("formData");
for (let formData of formDataAll){
  formData.classList.add("notValid");
}


// Validation sur firstName

const firstName = document.getElementById("first");
firstName.errorText = "Veuillez entrer 2 caractères ou plus pour le champ du prénom";
firstName.minLength = 2;


let checkValidityText = function (element) {
  if (element.value.length < element.minLength) {
    addErrorMessage(element);
    element.parentElement.classList.add('notValid');
  } else if (element.parentElement.lastElementChild == errorMessage) {
    removeErrorMessage (element);
    element.parentElement.classList.remove('notValid');
  } else {
    element.parentElement.classList.remove('notValid');
  };
};


firstName.addEventListener("change", function(e) {
  e.stopPropagation();
  checkValidityText(firstName);
  console.log(e.target.parentElement.classList);
});


//Validation sur lastName

const lastName = document.getElementById("last");
lastName.errorText = "Veuillez entrer 2 caractères ou plus pour le champ du prénom";
lastName.minLength = 2;


lastName.addEventListener("change", function(e) {
  e.stopPropagation();
  checkValidityText(lastName);
  console.log(e.target.parentElement.classList);
});



//Validation de email

const email = document.getElementById("email");
email.errorText = "Veuillez entrer une adresse e-mail valide";

let checkValidityEmail = function(element) {
  if (element.validity.typeMismatch || element.value == "") {
    addErrorMessage (element);
    element.parentElement.classList.add('notValid');
  } else if (element.parentElement.lastElementChild == errorMessage) {
    removeErrorMessage (element);
    element.parentElement.classList.remove('notValid');
  } else {
    element.parentElement.classList.remove('notValid');
  };
};


email.addEventListener("change", function(e) {
  e.stopPropagation();
  checkValidityEmail(email);
  console.log(e.target.parentElement.classList);
});



// Validation de birthdate

const birthdate = document.getElementById("birthdate");
birthdate.errorText = "Veuillez entrer votre date de naissance";

let checkValidityValue = function (element) {
  if (element.value === "") {
      addErrorMessage (element);
      element.parentElement.classList.add('notValid');  
  } else {
    element.parentElement.classList.remove('notValid');
  };
};
//console.log("birthdate " + birthdate.parentElement.classList);
  

document.querySelector("form").addEventListener("submit", function (e) {
  if (birthdate.parentElement.classList.contains("notValid")) {
      e.preventDefault();
      checkValidityValue(birthdate);
  };
  console.log("birthdate " + birthdate.parentElement.classList);
});



// Validation de quantity

const quantity = document.getElementById("quantity");
quantity.errorText = "Veuillez entrer un nombre entre 0 et 99";


document.querySelector("form").addEventListener("submit", function (e) {
  if (quantity.parentElement.classList.contains("notValid")) {
    e.preventDefault();
    checkValidityValue(quantity);
  };
    console.log(quantity.parentElement.classList);
});



// Validation pour bouton radio

const locationsAll = document.querySelectorAll("input[name='location']");
const locations = locationsAll[0];
locations.errorText = "Veuillez choisir une option parmi les villes proposées"

let checkValidityRadio = function (){
  let compteur = 0;
  for (let city of locationsAll) {
    if (city.checked) {
      compteur++;
    };
  };
 // console.log("compteur1 "+ compteur);
  if (compteur == 0) {
   // console.log("compteur2 "+ compteur);
    addErrorMessage (locations);
    locations.parentElement.classList.add('notValid');
  } else {
    locations.parentElement.classList.remove('notValid');
  };
};


document.querySelector("form").addEventListener("submit", function (e) {
  if (locations.parentElement.classList.contains("notValid")) {
    e.preventDefault();
    checkValidityRadio();
  };
    console.log("locations " + locations.parentElement.classList);
});



// Checkbox1

const checkbox1 = document.getElementById("checkbox1");
checkbox1.errorText = "Vous devez vérifier que vous acceptez les termes et conditions";

let checkValidityCheckbox = function () {
  if (checkbox1.checked === false) {
    addErrorMessage (checkbox1);
    checkbox1.parentElement.classList.add('notValid');
  } else {
    checkbox1.parentElement.classList.remove('notValid');
  };
};


document.querySelector("form").addEventListener("submit", function(e) {
  if (checkbox1.parentElement.classList.contains("notValid")) {
    e.preventDefault();
    checkValidityCheckbox();
  };
  console.log(checkbox1.parentElement.classList);
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