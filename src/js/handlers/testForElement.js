/*
  Created to avoid errors if the element is not present in the DOM
*/

const test = module.exports = {
  testForElement (el, eventType, method) {
    if (el) {
      el.addEventListener(eventType, method);
    }
  }
}
