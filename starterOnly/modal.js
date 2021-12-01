function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalBg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalBg.style.display = "block";
}


/////////////////////// CODE AJOUTE //////////////////////////////////////////


// close modal form
function closeModal() {
  modalBg.style.display = "none";
}

const closeSpan = document.querySelector(".content .close");
closeSpan.addEventListener("click", closeModal);




///////// VALIDATION DU FORMULAIRE //////////



let formDataValidity = 0; //variable qui compte le nombre de champs valides

 

// Validation sur firstName

const firstName = document.getElementById("first");
firstName.parentElement.setAttribute("data-error", "Veuillez entrer " + firstName.minLength + " caractères ou plus pour le champ du prénom");
//firstName.minLength = 2; //déjà pécisé dans le HTML, en propriété de l'input

let isRegNameValid = function (value) {
  return /\b([A-ZÀ-ÿ][-,a-z. ']+[ ]*)+/gm.test(value); //la première lettre doit être une majuscule
};
/*
let isLengthTextValid = function (length, minLength) {
  return length >= minLength;
};
*/

let checkValidityText = function (element) {
  if (element.value.length >= element.minLength && (isRegNameValid(element.value) === true)) {
    element.parentElement.setAttribute("data-error-visible", "false");
    return 1;
  } else {
    element.parentElement.setAttribute("data-error-visible", "true");
    return 0;
  };
};



let validityFirstName = 0;

firstName.addEventListener("change", function(e) {
  console.log(isRegNameValid(firstName.value));
  validityFirstName = checkValidityText(firstName);
  console.log("validityFirstName " + validityFirstName);
  console.log("message "+ e.target.parentElement.getAttribute("data-error-visible"));
});




//Validation sur lastName

const lastName = document.getElementById("last");
lastName.minLength = 2;
lastName.parentElement.setAttribute("data-error", "Veuillez entrer " + lastName.minLength + " caractères ou plus pour le champ du nom de famille");

let validityLastName = 0;

lastName.addEventListener("change", function(e) {
  validityLastName = checkValidityText(lastName);
  console.log("validityLastName " + validityLastName);
  console.log("message "+ e.target.parentElement.getAttribute("data-error-visible"));
});





//Validation de email

const email = document.getElementById("email");
email.parentElement.setAttribute("data-error", "Veuillez entrer une adresse e-mail valide");
//email.parentElement.setAttribute("data-error-visible", "false");
//console.log(email.parentElement.attributes);


let isRegEmailValid = function (value) {
  return /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(value); //regex W3C
};


let checkValidityEmail = function(element) {
  if (!(element.validity.typeMismatch) && (isRegEmailValid(element.value) === true)) {
    element.parentElement.setAttribute("data-error-visible", "false");
    return 1;
  } else {
    element.parentElement.setAttribute("data-error-visible", "true");
    return 0;
  };
};

let validityEmail = 0;

email.addEventListener("change", function(e) {
  validityEmail = checkValidityEmail(email);
  console.log("validityEmail " + validityEmail);
  console.log("message " + e.target.parentElement.getAttribute("data-error-visible"));
});




// Validation de birthdate

const birthdate = document.getElementById("birthdate");
birthdate.parentElement.setAttribute("data-error", "Veuillez entrer votre date de naissance");


let isRegDateValid = function (value) {
  return /(19|20)\d\d[- /.](0[1-9]|1[012])[- /.](0[1-9]|[12][0-9]|3[01])/.test(value); // la valeur saisie est DD/MM/AAAA mais la valeur obtenue est AAAA/MM/DD. D'où l'inversion dans la Regex
};


let checkValidityValue = function (element) {
  console.log(element.value);
  if (isRegDateValid(element.value) === true) {
    element.parentElement.setAttribute("data-error-visible", "false");
    return 1;
  } else {
    element.parentElement.setAttribute("data-error-visible", "true");
    return 0;
  };
};
  
let validityBirthdate = 0;

birthdate.addEventListener("change", function (e) {
  validityBirthdate = checkValidityValue(birthdate);
  console.log("validityBirthdate " + validityBirthdate);
  console.log("message " + e.target.parentElement.getAttribute("data-error-visible"));
});




// Validation de quantity

const quantity = document.getElementById("quantity");
quantity.parentElement.setAttribute("data-error", "Veuillez entrer un nombre entre " + quantity.min + " et " + quantity.max);

let checkValidityRange = function (element) {
  if (element.value >= element.min && element.value <= element.max)
  {
    element.parentElement.setAttribute("data-error-visible", "false");
    return 1;
  } else {
    element.parentElement.setAttribute("data-error-visible", "true");
    return 0;
  };
};

let validityQuantity = 0;

quantity.addEventListener("change", function (e) {
  validityQuantity = checkValidityRange(quantity);
  console.log("validityQuantity " + validityQuantity);
  console.log("message " + e.target.parentElement.getAttribute("data-error-visible"));
});




// Validation pour bouton radio

const locationsAll = document.querySelectorAll("input[name='location']");
const locations = locationsAll[0];
locations.parentElement.setAttribute("data-error","Veuillez choisir une option parmi les villes proposées");

let checkValidityRadio = function (element){
  if (element.checked === false) {
    element.parentElement.setAttribute("data-error-visible", "true");
    return 0;
  } else {
    element.parentElement.setAttribute("data-error-visible", "false");
    return 1;
  };
};

let validityRadio = 0;

for (let city of locationsAll) {
  city.addEventListener("change", function (e) {
    checkValidityRadio(city);
    console.log("message " + e.target.parentElement.getAttribute("data-error-visible"));
    console.log(checkValidityRadio(city));
    if (checkValidityRadio(city) == 1){
      validityRadio = 1;
      console.log("validityRadio " + validityRadio);
    };
  });
};





// Checkbox1

const checkbox1 = document.getElementById("checkbox1");
checkbox1.parentElement.setAttribute("data-error", "Vous devez vérifier que vous acceptez les termes et conditions");
checkbox1.parentElement.setAttribute("data-error-visible", "false");




let checkValidityCheckbox = function (element) {
  if (element.checked === true) {
    element.parentElement.setAttribute("data-error-visible", "false");
    return 1;
  } else {
    element.parentElement.setAttribute("data-error-visible", "true");
    return 0;
  };
};

let validityCheckbox1 = 1;

checkbox1.addEventListener("change", function(e) {
  validityCheckbox1 = checkValidityCheckbox(checkbox1);
  console.log("validityCheckbox1 " + validityCheckbox1);
  console.log("message " + e.target.parentElement.getAttribute("data-error-visible"));
});




//Validation globale du formulaire

let validate = function () {
return formDataValidity = 
    validityFirstName +
    validityLastName +
    validityEmail +
    validityBirthdate +
    validityQuantity +
    validityRadio +
    validityCheckbox1;
};

const formDataAll = document.getElementsByClassName("formData"); //Attention, il y a une variable formData déclarée en début de script, qui ne sert pas
function displayConfirm() {
  for (let formData of formDataAll) {
    formData.style.opacity = "0";
  };
  document.querySelector(".text-label").style.opacity = "0";
  let confirmationMessage = document.createElement("p")
  confirmationMessage.innerHTML = "Merci !<br />Votre réservation<br />a été reçue.";
  confirmationMessage.classList.add("confirm");
  let modalBody = document.querySelector(".modal-body");
  modalBody.prepend(confirmationMessage);
  document.querySelector("input.btn-submit").setAttribute("type", "button");
  document.querySelector("input.btn-submit").setAttribute("value", "Fermer");
  document.querySelector("input.btn-submit").classList.add("closeBouton");
  console.log(document.querySelector("input.btn-submit").getAttribute("class"));
  const closeBtn = document.querySelector(".closeBouton");
  console.log(closeBtn);
  closeBtn.addEventListener("click", closeModal);
};


document.querySelector("form").addEventListener("submit", function(e) {
  e.preventDefault();
  console.log ("validityFirstName = " + validityFirstName);
  console.log ("validityLastName = " + validityLastName);
  console.log ("validityEmail = " + validityEmail);
  console.log ("validityBirthdate = " + validityBirthdate);
  console.log ("validityQuantity = " + validityQuantity);
  console.log ("validityRadio = " + validityRadio);
  console.log ("validityCheckbox1 = " + validityCheckbox1);
  validate();
  let formDataAll = document.getElementsByClassName("formData");
  if (validate() === formDataAll.length){
    console.log("BRAVO!");
    displayConfirm();
  } else {
    console.log("Au moins un champ n'est pas valide !");
      for (let formData of formDataAll) {
        if (formData.getAttribute("data-error-visible") === null) {
          formData.setAttribute("data-error-visible", "true");
        };
      };
    };
});