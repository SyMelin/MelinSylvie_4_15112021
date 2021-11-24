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

/////////////////////// CODE AJOUTE /////////////////////////

// close modal form
const close = document.querySelector(".content .close");
close.addEventListener("click", function() {
   document.querySelector(".bground").style.display = "none";
})

//Chaque formDatareçoit une class .notValid par défaut
const formDataAll = document.getElementsByClassName("formData");
for (let formData of formDataAll) {
  formData.classList.add('notValid');
}
//console.log(formDataAll[2].classList);




//Validation de chaque champ du formulaire

// Création de l'élément content le message d'erreur

let errorMessage = document.createElement("p");
errorMessage.style.color = "#FFF000";
errorMessage.style.fontSize = "0.875rem";
 
let addErrorMessage = function (field) {
  let fieldParent = field.parentElement;
  errorMessage.textContent = field.errorText;
  fieldParent.appendChild(errorMessage);
};

let removeErrorMessage = function (field) {
  let fieldParent = field.parentElement;
  fieldParent.removeChild(errorMessage);
};


const firstName = document.getElementById("first");
first.errorText = "Veuillez entrer 2 caractères ou plus pour le champ du prénom";
first.minLength = 2;

firstName.addEventListener("change", function(e) {
  e.stopPropagation();
  if (e.target.value.length < firstName.minLength) {
    addErrorMessage(e.target);
  } else if (e.target.parentElement.lastElementChild == errorMessage) {
    removeErrorMessage (e.target);
    e.target.parentElement.classList.remove('notValid');
  } else {
    e.target.parentElement.classList.remove('notValid');
  };
  console.log(e.target.parentElement.classList);
});





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
lastName.minLength = 2;

lastName.addEventListener("change", function(e) {
  e.stopPropagation();
  if (e.target.value.length < lastName.minLength) {
    addErrorMessage(e.target);
  } else if (e.target.parentElement.lastElementChild == errorMessage) {
    removeErrorMessage (e.target);
    e.target.parentElement.classList.remove('notValid');
  } else {
    e.target.parentElement.classList.remove('notValid');
  };
  console.log(e.target.parentElement.classList);
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
  e.stopPropagation();
  if (email.validity.typeMismatch) {
    addErrorMessage (email);
  } else if (email.parentElement.lastElementChild == errorMessage) {
    removeErrorMessage (email);
    e.target.parentElement.classList.remove('notValid');
  } else {
    e.target.parentElement.classList.remove('notValid');
  }
  console.log(e.target.parentElement.classList);
});


// Validation de birthdate

const birthdate = document.getElementById("birthdate");
birthdate.errorText = "Veuillez entrer votre date de naissance";

document.querySelector("form").addEventListener("submit", function (e) {
    if (birthdate.value === "") {
      addErrorMessage (birthdate);
      e.preventDefault();
    } else {
      birthdate.parentElement.classList.remove('notValid');
    };
    console.log(birthdate.parentElement.classList);
}); 



// Validation de quantity

const quantity = document.getElementById("quantity");
quantity.errorText = "Veuillez un nombre entre 0 et 99";

document.querySelector("form").addEventListener("submit", function (e) {
    if (quantity.value === "") {
      addErrorMessage (quantity);
      e.preventDefault();
    } else {
      quantity.parentElement.classList.remove('notValid');
    };
    console.log(quantity.parentElement.classList);
});

// Validation pour bouton radio

const locationsAll = document.querySelectorAll("input[name='location']");
const locations = locationsAll[0];
locations.errorText = "Veuillez choisir une option parmi les villes proposées"

document.querySelector("form").addEventListener("submit", function (e) {
  let compteur = 0;
  for (let city of locationsAll) {
    if (city.checked) {
      compteur++;
    };
  };
  console.log("compteur1 "+ compteur);
  if (compteur == 0) {
    console.log("compteur2 "+ compteur);
    addErrorMessage (locations);
      e.preventDefault();
  } else {
    locations.parentElement.classList.remove('notValid');
  };
  console.log(locations.parentElement.classList);
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
  } else {
    checkbox1.parentElement.classList.remove('notValid');
  };
  console.log(checkbox1.parentElement.classList);
});

//Validation du formulaire
document.querySelector("form").addEventListener("submit", function(e) {
  e.preventDefault();
  let compteurSubmit = 0;
  for (let formData of formDataAll) {
    if (formData.classList.contains("notValid")) {
      compteurSubmit++;
    };
  };
  console.log(compteurSubmit);
  if (compteurSubmit !== 0) {
     e.preventDefault();
  } else {
    alert ("Merci ! Votre réservation a été reçue.");
  };
  console.log(formDataAll);
});