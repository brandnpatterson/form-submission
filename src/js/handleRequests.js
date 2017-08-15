/*
  Request data from API
*/

import validation from './handlers/validation';

const handleGET = {
  init () {
    this.cacheDOM();
    this.bindEvents();
  },
  cacheDOM () {
    this.getData = document.querySelector('.get-data');
    this.catData = document.getElementById('cat-data');
    this.dogData = document.getElementById('dog-data');
  },
  bindEvents () {
    this.getData.addEventListener('click', this.handleCall.bind(this));
  },
  handleCall () {
    const request = new XMLHttpRequest();
    const method = 'GET';
    const url = 'http://form-component-api.herokuapp.com/api/v1/submissions';
    request.onreadystatechange = function () {
      if (this.readyState == 4 && this.status == 200) {
        const obj = JSON.parse(this.responseText);
        handleGET.handleRender(obj);
      }
    }
    request.open(method, url, true);
    request.send();
  },
  handleRender (data) {
    const catData = this.catData;
    const dogData = this.dogData;
    console.log(validation.errors);
    if (validation.errors === true) {
      event.preventDefault();
    } else if (validation.errors === false && data) {
      data.map(d => {
        const catItem = document.createElement('li');
        const dogItem = document.createElement('li');

        catItem.innerHTML = `
          ${d.name} answered ${d.cat}!`;

        dogItem.innerHTML = `
          ${d.name} answered ${d.dog}!`;

        catData.appendChild(catItem);
        dogData.appendChild(dogItem);
      });
      console.log(data);
    }
  }
}
handleGET.init();

const handlePOST = {
  init () {
    this.cacheDOM();
    this.bindEvents();
  },
  cacheDOM () {
    this.postData = document.querySelector('.post-data');
    this.name = document.getElementById('name');
    this.email = document.getElementById('email');
    this.phone = document.getElementById('phone');
    this.address = document.getElementById('address');
    this.yesCat = document.getElementById('yes-cat');
    this.yesDog = document.getElementById('yes-dog');
  },
  bindEvents () {
    this.postData.addEventListener('click', this.handleSend.bind(this));
  },
  handleSend () {
    this.handleData();
    const data = this.data;

    const request = new XMLHttpRequest();
    const method = 'POST';
    const url = 'http://form-component-api.herokuapp.com/api/v1/submissions';

    request.open(method, url, true);
    request.setRequestHeader('Content-Type', 'application/json; charset=UTF-8');
    if (validation.errors === false) {
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
