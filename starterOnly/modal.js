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
//const formData = document.querySelectorAll(".formData"); //fournie mais non utilisée telle quelle lors des modifications

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalBg.style.display = "block";
}



/////////////////////// ///////// CODE AJOUTE //////////////////////////////////////////


//////// FERMETURE DE LA MODALE AVEC LE BOUTON X ////////

// close modal form
function closeModal() {
  modalBg.style.display = "none";
}

// on récupère l'élément X de la modale
const closeSpan = document.querySelector(".content .close");
// on écoute l'évènement "click" sur le bouton:  celui-ci déclenche la fermeture de la modale
closeSpan.addEventListener("click", closeModal);




///////// VALIDATION DU FORMULAIRE //////////

// Principe de validation du formulaire :
// On crée un compteur global "formValidity"
// puis on valide / invalide champ par champ => chaque champ possède sa propre variable de validité " validityNomDuChamp" (un message d'erreur s'affiche si non valide) 
// puis on somme toutes les variables de validité, somme affichée dans le compteur global.
// Si la valeur du compteur global est égale aux nombres de champs présents dans le formulaire, le formulaire est valide et pourra être soumis. Un message de confirmation d'envoi s'affichera alors. (NB: N'ayant pas de support backend pour le moment, le formulaire ne peut pas fonctionnellement être soumis)
// Sinon, le formulaire ne peut pas être soumis et on vérifie la validité de chaque champ afin d'afficher les messages d'erreur sur les champs qui n'auraient pas été mofifiés (et qui sont donc retournés comme non valides)


// compteur global du nombre de champs valides
let formValidity = 0;


// -------- Validation sur firstName --------- //

// on récupère l'input du champs concerné, ici "first", et on le stocke dans une variable
const firstName = document.getElementById("first");

// on ajoute à la division qui contient l'input (donc l'élément parent ".formData") l'attribut "data-error" qui contient le message à afficher en cas d'erreur
firstName.parentElement.setAttribute("data-error", "Veuillez entrer au minimum " + firstName.minLength + " caractères ou plus"); 
//firstName.minLength = 2; //déjà pécisé dans le HTML, en propriété de l'input


// Expression régulière qui contient une conditon de validation du champ :
//la chaîne de caractère peut contenir des accents/un tiret/un espace/un point
let isRegNameValid = function (value) {
  return /^\b([A-zÀ-ÿ][-,a-zà-ÿ. ']+[ ]*)+$/gm.test(value); 
};

// fonction de vérification de la validité du champ :
// Si (condition) respectée,
  // on ajoute à la division ".formData" qui contient l'input l'attribut "data-error-visible" avec pour valeur "false" (le CSS en cas d'erreur ne sera alors pas affiché),
  // et la fonction retoune 1,
// Sinon,
  // on ajoute à la division ".formData" qui contient l'input l'attribut "data-error-visible" avec pour valeur "true" (le CSS en cas d'erreur sera alors affiché),
  // et la fonction retoune 0.
let checkValidityText = function (element) {
  if (element.value.length >= element.minLength && (isRegNameValid(element.value) === true)) {
    element.parentElement.setAttribute("data-error-visible", "false");
    return 1;
  } else {
    element.parentElement.setAttribute("data-error-visible", "true");
    return 0;
  };
};

// variable de validité du champ du firstName ayant pour valeur 0 au chargement du formulaire
let validityFirstName = 0;

// Sur le champ firstName, on écoute l'évènement "change" et on applique la fonction qui vérifie la validité du champ et qui affiche le résultat dans la variable de validité correspondante à ce champ
firstName.addEventListener("change", function(e) {
  //console.log(isRegNameValid(firstName.value));
  validityFirstName = checkValidityText(firstName);
  //console.log("validityFirstName " + validityFirstName);
  //console.log("message "+ e.target.parentElement.getAttribute("data-error-visible"));
});




// -------- Validation sur lastName -------- //

// fonctionne sur le même principe que la validation de firstName
// avec la même Regex que firstName

const lastName = document.getElementById("last");
lastName.minLength = 2;
lastName.parentElement.setAttribute("data-error", "Veuillez entrer au minimum " + lastName.minLength + " caractères ou plus");

let validityLastName = 0;

lastName.addEventListener("change", function(e) {
  validityLastName = checkValidityText(lastName);
});




// -------- Validation de email -------- //

// fonctionne sur le même principe que la validation de firstName

const email = document.getElementById("email");
email.parentElement.setAttribute("data-error", "Veuillez entrer une adresse e-mail valide");

// Expression régulière qui contient une conditon de validation du champ :
// Regex W3C pour les emails
let isRegEmailValid = function (value) {
  return /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(value);
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
});




// -------- Validation de birthdate -------- //

// fonctionne sur le même principe que la validation de firstName

const birthdate = document.getElementById("birthdate");
birthdate.parentElement.setAttribute("data-error", "Veuillez entrer votre date de naissance");

// Expression régulière qui contient une conditon de validation du champ :
// la valeur saisie est DD/MM/AAAA mais la valeur obtenue est AAAA/MM/DD. D'où l'inversion dans la Regex
let isRegDateValid = function (value) {
  return /(19|20)\d\d[- /.](0[1-9]|1[012])[- /.](0[1-9]|[12][0-9]|3[01])/.test(value);
};


let checkValidityValue = function (element) {
  //console.log(element.value);
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
});




// -------- Validation de quantity -------- //

// fonctionne sur le même principe que la validation de firstName

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
});




// -------- Validation pour le champ contenant les boutons radio -------- //

// On récupère la liste contenant tous les boutons radio
const locationsAll = document.querySelectorAll("input[name='location']");

// On récupère un élément de la liste, peu importe son index (j'ai choisi 0 ici), pour pouvoir ensuite récupérer son élément parent ".formData"
const locations = locationsAll[0];
locations.parentElement.setAttribute("data-error","Veuillez choisir une option parmi les villes proposées");

// fonction qui vérifie la sélection sur un seul bouton radio
let checkValidityRadio = function (element){
  if (element.checked === true) {
    element.parentElement.setAttribute("data-error-visible", "false");
    return 1;
  } else {
    element.parentElement.setAttribute("data-error-visible", "true");
    return 0;
  };
};

// Cette variable correspond à la validité du champ complet ".formData" contenant TOUS les boutons radio
let validityRadio = 0;

// On vérifie qu'un bouton a bien été sélectionné pour que le champ complet soit valide. Dans ce cas, validityRadio = 1, à la fin de la boucle.
// Sinon, cela signifie que le champ n'a pas été modifié (aucun bouton n'a été sélectionné). Dans ce cas, validityRadio restera à 0.
for (let city of locationsAll) {
  city.addEventListener("change", function (e) {
    checkValidityRadio(city);
    //console.log("message " + e.target.parentElement.getAttribute("data-error-visible"));
    //console.log(checkValidityRadio(city));
    if (checkValidityRadio(city) == 1){
      validityRadio = 1;
     //console.log("validityRadio " + validityRadio);
    };
  });
};




// -------- Checkbox1 (conditions d'utilisation) -------- //

//fonctionne sur le même principe que la validation de firstName

const checkbox1 = document.getElementById("checkbox1");
checkbox1.parentElement.setAttribute("data-error", "Vous devez vérifier que vous acceptez les termes et conditions");

// l'input de Checkbox1 ayant l'attribut "checked" par défaut, on ajoute également, par défaut, l'attribut "data-error-visible" avec la valeur "false" sur son élément parent ".formData"
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
});




// -------- Validation finale du formulaire -------- //


// fonction qui somme toutes les variables de validité de chaque champ du formulaire
let calculateValidity = function () {
return formValidity = 
    validityFirstName +
    validityLastName +
    validityEmail +
    validityBirthdate +
    validityQuantity +
    validityRadio +
    validityCheckbox1;
};


const formDataAll = document.getElementsByClassName("formData");
//le nom "formDataAll" me permet de faire la différence entre la liste regroupant tous les formData et un élément "formData"


//fonction qui affiche le message de confirmation suite à la bonne réception du formulaire :
let displayConfirm = function () {

  //on rend invisible les éléments du formulaire SAUF le bouton Submit
  for (let formData of formDataAll) {
    formData.style.opacity = "0";
  };
  document.querySelector(".text-label").style.opacity = "0";

  //on créer élément paragraphe contenant le message de confirmation et on l'ajoute avant le premier enfant de l'élement ".modal-body"
  //le style de ce paragraphe a été ajouté au CSS. Voir sélecteur ".confirm"
  const confirmationMessage = document.createElement("p")
  confirmationMessage.innerHTML = "Merci !<br />Votre réservation<br />a été reçue.";
  confirmationMessage.classList.add("confirm");
  const modalBody = document.querySelector(".modal-body");
  modalBody.prepend(confirmationMessage);

  //on modifie les attributs "type" et "value" du bouton Submit pour en faire un bouton de fermeture de modale
  document.querySelector("input.btn-submit").setAttribute("type", "button");
  document.querySelector("input.btn-submit").setAttribute("value", "Fermer");
  document.querySelector("input.btn-submit").classList.add("closeBouton");
  const closeBtn = document.querySelector(".closeBouton");
  //console.log(closeBtn);
  closeBtn.addEventListener("click", closeModal);
};


// fonction de validation du formulaire
let validate = function () {
  calculateValidity();
  if (formValidity === formDataAll.length){
    //console.log("formulaire valide!");
    displayConfirm();
  } else {
    //console.log("Au moins un champ n'est pas valide !");
    for (let formData of formDataAll) {
      if (formData.getAttribute("data-error-visible") === null) {
        formData.setAttribute("data-error-visible", "true");
      };
    };
  };
};

//Sur le formulaire, on écoute l'évènement "submit"
document.querySelector("form").addEventListener("submit", function(e) {
  e.preventDefault();
  validate();
  //console.log ("validityFirstName = " + validityFirstName);
  //console.log ("validityLastName = " + validityLastName);
  //console.log ("validityEmail = " + validityEmail);
  //console.log ("validityBirthdate = " + validityBirthdate);
  //console.log ("validityQuantity = " + validityQuantity);
  //console.log ("validityRadio = " + validityRadio);
  //console.log ("validityCheckbox1 = " + validityCheckbox1);
});