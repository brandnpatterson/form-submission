/*
  Set initial placeholders for inputs
*/

import formData from '../data/form-data';

var placeholders = module.exports = {
  // set initial input placeholder values
  init: function (required) {
    required.map(function (input, index) {
      if (input) {
        input.placeholder = formData.data[index].placeholder;
      }
    }, this);
  },
  toggle: function (required) {
    required.map(function (input, index) {
      if (event.target != input) {
        input.placeholder = formData.data[index].placeholder;
      } else {
        // toggle input placeholder value to blank only when user selects input
        input.placeholder = '';
      }
    }, this);
  }
}
