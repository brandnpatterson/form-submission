/*
  form component
*/

import { init, toggle } from './handlers/placeholders';
import { testForElement } from './handlers/testForElement';
import { validate } from './handlers/validation';
import handleGET from './handlers/requestGET';
import handlePOST from './handlers/requestPOST';

const formComponent = {
  init () {
    this.cacheDOM();
    this.bindEvents();
    init(this.required);
  },
  cacheDOM () {
    this.form = document.querySelector('.form');
    this.getData = document.querySelector('.get-data');
    this.postData = document.querySelector('.post-data');
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
    testForElement(this.postData, 'click', this.sendData.bind(this));
    testForElement(this.getData, 'click', this.handleRender.bind(this));
    testForElement(this.form, 'mouseover', this.liveValidation.bind(this));
    testForElement(this.form, 'mouseover', this.placeholdersToggle.bind(this));
  },
  handleRender () {
    handleGET.render();
  },
  sendData () {
    handlePOST.send();
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
