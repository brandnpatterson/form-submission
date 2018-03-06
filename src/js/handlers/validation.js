/*
  formData used to match user input for validation
*/

import formData from '../data/form-data';

const validation = {
  errors: null,
  validate (required) {
    required.forEach ((input, index) => {
      var after = input.nextSibling;
      var errorMessage = after.nextSibling;

      if (input.value.match(formData[index].regex)) {
        errorMessage.textContent = '✅';
        errorMessage.classList.remove('input-fail');
        errorMessage.classList.add('input-success');
        input.dataset.error = 'false';
      } else if (input.value === '') {
        event.preventDefault();
      } else {
        errorMessage.textContent = formData[index].error;
        errorMessage.classList.remove('input-success');
        errorMessage.classList.add('input-fail');
        input.dataset.error = 'true';
      }

      if (validation.errors != false) {
        event.preventDefault();
      }
    }, this);

    const testData = (input) => {
      return input.dataset.error === 'false';
    }

    required.every(testData) ? validation.errors = false : validation.errors = true;
  }
};

export default validation;
