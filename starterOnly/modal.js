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




let formDataValidity = 0;
 
// Validation sur firstName

const firstName = document.getElementById("first");
firstName.parentElement.setAttribute("data-error", "Veuillez entrer " + firstName.minLength + " caractères ou plus pour le champ du prénom");
//firstName.minLength = 2; //déjà pécisé dans le HTML, en propriété de l'input

let isRegNameValid = function (value) {
  return /[^0-9\.\,\"\?\!\;\:\#\$\%\&\(\)\*\+\-\/\<\>\=\@\[\]\\\^\_\{\}\|\~]+/.test(value);
};

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
  return /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g.test(value);
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


//Regex format Dat=> Ne fonctionne pas
/*
let isRegDateValid = function (value) {
  return /^(0[1-9]|[12][0-9]|3[01])[- /.](0[1-9]|1[012])[- /.](19|20)\d\d$/.test(value);
};
*/

let checkValidityValue = function (element) {
  if (!(element.value === "" )) {
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
  if (element.value < element.min || element.value > 99) // 99 correspond à element.max mais la condition ne fonctionne pas en utilisant element.max (??!)
  {
    element.parentElement.setAttribute("data-error-visible", "true");
    return 0;
  } else {
    element.parentElement.setAttribute("data-error-visible", "false");
    return 1;
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
  if (element.checked === false) {
    element.parentElement.setAttribute("data-error-visible", "true");
    return 0;
  } else {
    element.parentElement.setAttribute("data-error-visible", "false");
    return 1;
  };
};

let validityCheckbox1 = 1;

checkbox1.addEventListener("change", function(e) {
  validityCheckbox1 = checkValidityCheckbox(checkbox1);
  console.log("validityCheckbox1 " + validityCheckbox1);
  console.log("message " + e.target.parentElement.getAttribute("data-error-visible"));
});


//Validation du formulaire

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

    document.querySelector("form").addEventListener("submit", function(e) {
     // e.preventDefault();
      console.log (validityFirstName);
      console.log (validityLastName);
      console.log (validityEmail);
      console.log (validityBirthdate);
      console.log (validityQuantity);
      console.log (validityRadio);
      console.log (validityCheckbox1);
      validate();
      let formDataAll = document.getElementsByClassName("formData")
      if (validate() === formDataAll.length){
        console.log("BRAVO!");
      } else {
        console.log("Au moins un champ n'est pas valide !");
        e.preventDefault();
          for (let formData of formDataAll) {
            if (formData.getAttribute("data-error-visible") === null) {
              formData.setAttribute("data-error-visible", "true");
            };
          };
        };
    });