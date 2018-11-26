// const devURL = 'http://localhost:3000/api/v1/submissions';
// const prodURL = 'https://form-component-api.herokuapp.com/api/v1/submissions';

import validate from './validate';

const form = {
  init() {
    this.cacheDOM();
    this.bindEvents();
  },
  cacheDOM() {
    this.$form = document.querySelector('.form');
  },
  bindEvents() {
    this.submitForm();
  },
  submitForm() {
    validate(this.$form);
  }
};

form.init();
