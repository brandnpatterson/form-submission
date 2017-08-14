/*
  formData used to match user input for validation
*/

import formData from '../data/form-data';

var validation = module.exports = {
  validate: function (required) {
    required.map(function (input, index) {
      var after = input.nextSibling;
      var errorMessage = after.nextSibling;

      if (input.value === '') {
        event.preventDefault();
        return;
      } else if (input.value.match(formData.data[index].regex)) {
        errorMessage.textContent = '✅';
        errorMessage.classList.remove('input-fail');
        errorMessage.classList.add('input-success');

        window.addEventListener('keydown', checkKey);

        function checkKey(e) {
          if (e.keyCode === 13) {
            var e = new Event('keydown');
            pressBtn.key = 9;
            document.dispatchEvent(pressBtn);
          }
        }
      } else {
        errorMessage.textContent = formData.data[index].error;
        errorMessage.classList.remove('input-success');
        errorMessage.classList.add('input-fail');
      }
    }, this);
  }
}
