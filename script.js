'use strict';

const form = document.querySelector('#sign-up-form');
const errorMessage = document.querySelector('#error-message');
const emailInput = document.querySelector('#email');
const successButton = document.querySelector('#success-button');
const showEmail = document.querySelector('#user-email');
const successSection = document.querySelector('#success');

//Regex for email validation

const emailRegex =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z]{2,})+$/;

//function to validate email

const isValid = email => {
  const validity = emailRegex.test(email);
  return validity;
};

//function to add or remove message

const updateError = isValid => {
  if (isValid) {
    errorMessage.classList.add('hide-error-message');
    emailInput.classList.remove('invalid');
    document.querySelector('dialog').showModal();
    successSection.classList.remove('hidden');
  } else {
    errorMessage.classList.remove('hide-error-message');
    emailInput.classList.add('invalid');
  }
};

//function to handle form submission

const handleSubmit = event => {
  event.preventDefault();

  const formDataObject = Object.fromEntries(new FormData(event.target));

  const emailInput = isValid(formDataObject.email);

  updateError(emailInput);
  showEmail.textContent = formDataObject.email;
};

//function to handle success button click

successButton.addEventListener('click', () => {
  document.querySelector('dialog').close();
  successSection.classList.add('hidden');
});

form.addEventListener('submit', handleSubmit);
