/*
  formData used to match user input for validation
*/

import formData from '../data/form-data';

var validation = module.exports = {
  errors: false,
  validate (required) {
    required.map ((input, index) => {
      var after = input.nextSibling;
      var errorMessage = after.nextSibling;

      if (input.value.match(formData.data[index].regex)) {
        errorMessage.textContent = '✅';
        errorMessage.classList.remove('input-fail');
        errorMessage.classList.add('input-success');
        validation.errors = false;
        console.log(validation.errors);
      } else if (input.value === '' || validation.errors === true) {
        event.preventDefault();
      } else {
        errorMessage.textContent = formData.data[index].error;
        errorMessage.classList.remove('input-success');
        errorMessage.classList.add('input-fail');
        validation.errors = true;
        console.log(validation.errors);
      }
    }, this);
  }
}
