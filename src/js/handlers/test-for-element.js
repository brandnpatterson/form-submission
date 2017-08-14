/*
  Created to avoid errors if the element is not present in the DOM
*/

var test = module.exports = {
  testForElement: function (el, eventType, method) {
    if (el) {
      el.addEventListener(eventType, method);
    }
  }
}
