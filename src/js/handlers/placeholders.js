/*
  Set initial placeholders for inputs
*/

import formData from '../data/form-data';

const placeholders = module.exports = {
  // set initial input placeholder values
  init (required) {
    required.forEach((input, index) => {
      if (input) {
        input.placeholder = formData.data[index].placeholder;
      }
    }, this);
  },
  toggle (required) {
    required.forEach((input, index) => {
      if (event.target != input) {
        input.placeholder = formData.data[index].placeholder;
      } else {
        // toggle input placeholder value to blank only when user selects input
        input.placeholder = '';
      }
    }, this);
  }
}
