// const devURL = 'http://localhost:3000/api/v1/submissions';
// const prodURL = 'https://form-component-api.herokuapp.com/api/v1/submissions';

import './oregano';

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
    this.$form.oregano();
  }
};

form.init();
