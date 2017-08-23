/*
  Request data from API
*/

import validation from './validation';

const devURL = 'http://localhost:3000/api/v1/submissions';
const prodURL = 'https://form-component-api.herokuapp.com/api/v1/submissions';

const currentURL = prodURL;

const handlePOST = module.exports = {
  data: {},
  init () {
    this.cacheDOM();
  },
  cacheDOM () {
    this.name = document.getElementById('name');
    this.email = document.getElementById('email');
    this.phone = document.getElementById('phone');
    this.address = document.getElementById('address');
    this.yesCat = document.getElementById('yes-cat');
    this.yesDog = document.getElementById('yes-dog');
  },
  send () {
    if (validation.errors === false) {
      console.log(validation.errors);
      this.handleData();
      // use local object to store request data
      const data = this.data;

      const request = new XMLHttpRequest();
      const method = 'POST';
      const url = currentURL;

      request.open(method, url, true);
      request.setRequestHeader('Content-Type', 'application/json; charset=UTF-8');
      request.send(JSON.stringify(data));
    }
  },
  handleData () {
    this.data = {
      name: this.name.value,
      email: this.email.value,
      phone: this.phone.value,
      address: this.address.value,
      cat: 'no',
      dog: 'no'
    }
    if (this.yesCat.checked) {
      this.data.cat = 'yes';
    }
    if (this.yesDog.checked) {
      this.data.dog = 'yes';
    }
  }
}
handlePOST.init();
