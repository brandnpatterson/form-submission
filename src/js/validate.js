import { arrFrom } from './util';

const validate = form => {
  const inputs = arrFrom(form.querySelectorAll('.js-validate'));
  const radioInputs = {};

  inputs.forEach(input => {
    if (input.type === 'radio') {
      radioInputs[input.name] = input.name;
    }
  });

  Object.keys(radioInputs).forEach(input => {
    const firstByName = arrFrom(form[input])[0];
    const error = document.createElement('p');

    error.classList.add('js-validate-error');
    firstByName.parentNode.parentNode.appendChild(error);
  });

  form.addEventListener('submit', e => {
    e.preventDefault();

    inputs.forEach(input => {
      if (input.type !== 'radio') {
        if (!input.value.match(input.dataset.regex)) {
          input.value = '';
          input.placeholder = input.dataset.error;
          input.dataset.invalid = true;
        } else {
          delete input.dataset.invalid;
        }
      }
    });

    const validateByName = radios => {
      for (let i = 0; i < radios.length; ++i) {
        if (radios[i].checked) return true;
      }
      return false;
    };

    Object.keys(radioInputs).forEach(input => {
      const radioByName = arrFrom(form[input]);
      const grandparent = radioByName[0].parentNode.parentNode;
      const error = grandparent.querySelector('.js-validate-error');

      if (!validateByName(radioByName)) {
        error.textContent = radioByName[0].dataset.error;
      } else {
        error.textContent = '';
        console.log(error);
      }
    });
  });
};

export default validate;
