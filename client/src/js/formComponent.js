/*
  form component
*/

import { init, toggle } from './handlers/placeholders';
import { testForElement } from './handlers/test-for-element';
import { validate } from './handlers/validation';

const formComponent = {
  init () {
    this.cacheDOM();
    this.bindEvents();
    init(this.required);
  },
  cacheDOM () {
    this.form = document.querySelector('.form');
    const name = document.querySelector('#name');
    const email = document.querySelector('#email');
    const phone = document.querySelector('#phone');
    const address = document.querySelector('#address');
    this.required = [
      name, email, phone, address
    ];
  },
  bindEvents () {
    // testForElement found in handlers folder
    testForElement(this.form, 'click', this.liveValidation.bind(this));
    testForElement(this.form, 'click', this.placeholdersToggle.bind(this));
  },
  liveValidation (e) {
    if (e.target.type === 'radio') {
      return;
    } else {
      validate(this.required);
    }
  },
  placeholdersToggle (e) {
    toggle(this.required);
  }
}
formComponent.init();
