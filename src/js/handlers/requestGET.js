/*
  Request data from API
*/

const devURL = 'http://localhost:3000/api/v1/submissions';
const prodURL = 'https://form-component-api.herokuapp.com/api/v1/submissions';

const currentURL = prodURL;

const handleGET = module.exports = {
  data: [],
  init () {
    this.cacheDOM();
    this.handleCall();
  },
  cacheDOM () {
    this.catData = document.getElementById('cat-data');
    this.dogData = document.getElementById('dog-data');
  },
  handleCall () {
    const request = new XMLHttpRequest();
    const method = 'GET';
    const url = currentURL;

    request.onreadystatechange = function () {
      if (this.readyState == 4 && this.status == 200) {
        const obj = JSON.parse(this.responseText);
        handleGET.data = obj;
        console.log(obj);
      }
    }
    request.open(method, url, true);
    request.send();
  },
  render () {
    const data = this.data;
    const catData = this.catData;
    const dogData = this.dogData;

    if (data.length > 0) {
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
