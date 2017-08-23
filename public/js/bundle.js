/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	__webpack_require__(2);
	
	__webpack_require__(7);
	
	__webpack_require__(8);

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var _placeholders = __webpack_require__(3);
	
	var _testForElement = __webpack_require__(5);
	
	var _validation = __webpack_require__(6);
	
	var _requestGET = __webpack_require__(7);
	
	var _requestGET2 = _interopRequireDefault(_requestGET);
	
	var _requestPOST = __webpack_require__(8);
	
	var _requestPOST2 = _interopRequireDefault(_requestPOST);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var formComponent = {
	  init: function init() {
	    this.cacheDOM();
	    this.bindEvents();
	    (0, _placeholders.init)(this.required);
	  },
	  cacheDOM: function cacheDOM() {
	    this.form = document.querySelector('.form');
	    this.getData = document.querySelector('.get-data');
	    this.postData = document.querySelector('.post-data');
	    var name = document.querySelector('#name');
	    var email = document.querySelector('#email');
	    var phone = document.querySelector('#phone');
	    var address = document.querySelector('#address');
	    this.required = [name, email, phone, address];
	  },
	  bindEvents: function bindEvents() {
	    // testForElement found in handlers folder
	    (0, _testForElement.testForElement)(this.postData, 'click', this.sendData.bind(this));
	    (0, _testForElement.testForElement)(this.getData, 'click', this.handleRender.bind(this));
	    (0, _testForElement.testForElement)(this.form, 'mouseover', this.liveValidation.bind(this));
	    (0, _testForElement.testForElement)(this.form, 'mouseover', this.placeholdersToggle.bind(this));
	  },
	  handleRender: function handleRender() {
	    _requestGET2.default.render();
	  },
	  sendData: function sendData() {
	    _requestPOST2.default.send();
	  },
	  liveValidation: function liveValidation(e) {
	    if (e.target.type === 'radio') {
	      return;
	    } else {
	      (0, _validation.validate)(this.required);
	    }
	  },
	  placeholdersToggle: function placeholdersToggle(e) {
	    (0, _placeholders.toggle)(this.required);
	  }
	}; /*
	     form component
	   */
	
	formComponent.init();

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var _formData = __webpack_require__(4);
	
	var _formData2 = _interopRequireDefault(_formData);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var placeholders = module.exports = {
	  // set initial input placeholder values
	  init: function init(required) {
	    required.map(function (input, index) {
	      if (input) {
	        input.placeholder = _formData2.default.data[index].placeholder;
	      }
	    }, this);
	  },
	  toggle: function toggle(required) {
	    required.map(function (input, index) {
	      if (event.target != input) {
	        input.placeholder = _formData2.default.data[index].placeholder;
	      } else {
	        // toggle input placeholder value to blank only when user selects input
	        input.placeholder = '';
	      }
	    }, this);
	  }
	}; /*
	     Set initial placeholders for inputs
	   */

/***/ }),
/* 4 */
/***/ (function(module, exports) {

	'use strict';
	
	/*
	  Form data
	*/
	
	var formData = module.exports = {
	  data: [{
	    placeholder: 'Name',
	    regex: '[a-zA-Z]+(([\',. -][a-zA-Z ])?[a-zA-Z]*)*$',
	    error: 'Please enter letters only'
	  }, {
	    placeholder: 'Email',
	    regex: '^[a-zA-Z0-9]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$',
	    error: 'Please enter a valid email'
	  }, {
	    placeholder: 'Phone',
	    regex: '^[2-9]{2}[0-9]{8}$',
	    error: 'Please enter a 10 digit phone number'
	  }, {
	    placeholder: 'Address',
	    regex: '^(?!\s*$).+',
	    error: 'Please enter your address'
	  }]
	};

/***/ }),
/* 5 */
/***/ (function(module, exports) {

	"use strict";
	
	/*
	  Created to avoid errors if the element is not present in the DOM
	*/
	
	var test = module.exports = {
	  testForElement: function testForElement(el, eventType, method) {
	    if (el) {
	      el.addEventListener(eventType, method);
	    }
	  }
	};

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var _formData = __webpack_require__(4);
	
	var _formData2 = _interopRequireDefault(_formData);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var validation = module.exports = {
	  errors: null,
	  validate: function validate(required) {
	    required.map(function (input, index) {
	      var after = input.nextSibling;
	      var errorMessage = after.nextSibling;
	
	      if (input.value.match(_formData2.default.data[index].regex)) {
	        errorMessage.textContent = '✅';
	        errorMessage.classList.remove('input-fail');
	        errorMessage.classList.add('input-success');
	        input.dataset.error = 'false';
	      } else if (input.value === '') {
	        event.preventDefault();
	      } else {
	        errorMessage.textContent = _formData2.default.data[index].error;
	        errorMessage.classList.remove('input-success');
	        errorMessage.classList.add('input-fail');
	        input.dataset.error = 'true';
	      }
	
	      if (validation.errors != false) {
	        event.preventDefault();
	      }
	    }, this);
	
	    var testData = function testData(input) {
	      return input.dataset.error === 'false';
	    };
	
	    required.every(testData) ? validation.errors = false : validation.errors = true;
	  }
	}; /*
	     formData used to match user input for validation
	   */

/***/ }),
/* 7 */
/***/ (function(module, exports) {

	'use strict';
	
	/*
	  Request data from API
	*/
	
	var devURL = 'http://localhost:3000/api/v1/submissions';
	var prodURL = 'https://form-component-api.herokuapp.com/api/v1/submissions';
	
	var currentURL = prodURL;
	
	var handleGET = module.exports = {
	  data: [],
	  init: function init() {
	    this.cacheDOM();
	    this.handleCall();
	  },
	  cacheDOM: function cacheDOM() {
	    this.catData = document.getElementById('cat-data');
	    this.dogData = document.getElementById('dog-data');
	  },
	  handleCall: function handleCall() {
	    var request = new XMLHttpRequest();
	    var method = 'GET';
	    var url = currentURL;
	
	    request.onreadystatechange = function () {
	      if (this.readyState == 4 && this.status == 200) {
	        var obj = JSON.parse(this.responseText);
	        handleGET.data = obj;
	        console.log(obj);
	      }
	    };
	    request.open(method, url, true);
	    request.send();
	  },
	  render: function render() {
	    var data = this.data;
	    var catData = this.catData;
	    var dogData = this.dogData;
	
	    if (data.length > 0) {
	      data.map(function (d) {
	        var catItem = document.createElement('li');
	        var dogItem = document.createElement('li');
	
	        catItem.innerHTML = '\n          ' + d.name + ' answered ' + d.cat + '!';
	
	        dogItem.innerHTML = '\n          ' + d.name + ' answered ' + d.dog + '!';
	
	        catData.appendChild(catItem);
	        dogData.appendChild(dogItem);
	      });
	      console.log(data);
	    }
	  }
	};
	handleGET.init();

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var _validation = __webpack_require__(6);
	
	var _validation2 = _interopRequireDefault(_validation);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var devURL = 'http://localhost:3000/api/v1/submissions'; /*
	                                                           Request data from API
	                                                         */
	
	var prodURL = 'https://form-component-api.herokuapp.com/api/v1/submissions';
	
	var currentURL = prodURL;
	
	var handlePOST = module.exports = {
	  data: {},
	  init: function init() {
	    this.cacheDOM();
	  },
	  cacheDOM: function cacheDOM() {
	    this.name = document.getElementById('name');
	    this.email = document.getElementById('email');
	    this.phone = document.getElementById('phone');
	    this.address = document.getElementById('address');
	    this.yesCat = document.getElementById('yes-cat');
	    this.yesDog = document.getElementById('yes-dog');
	  },
	  send: function send() {
	    if (_validation2.default.errors === false) {
	      console.log(_validation2.default.errors);
	      this.handleData();
	      var data = this.data;
	
	      var request = new XMLHttpRequest();
	      var method = 'POST';
	      var url = currentURL;
	
	      request.open(method, url, true);
	      request.setRequestHeader('Content-Type', 'application/json; charset=UTF-8');
	      request.send(JSON.stringify(data));
	    }
	  },
	  handleData: function handleData() {
	    this.data = {
	      name: this.name.value,
	      email: this.email.value,
	      phone: this.phone.value,
	      address: this.address.value,
	      cat: 'no',
	      dog: 'no'
	    };
	    if (this.yesCat.checked) {
	      this.data.cat = 'yes';
	    }
	    if (this.yesDog.checked) {
	      this.data.dog = 'yes';
	    }
	  }
	};
	handlePOST.init();

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgNjMwMjdhMmNlOTUwZGIyOTlhYmEiLCJ3ZWJwYWNrOi8vLy4vanMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vanMvZm9ybUNvbXBvbmVudC5qcyIsIndlYnBhY2s6Ly8vLi9qcy9oYW5kbGVycy9wbGFjZWhvbGRlcnMuanMiLCJ3ZWJwYWNrOi8vLy4vanMvZGF0YS9mb3JtLWRhdGEuanMiLCJ3ZWJwYWNrOi8vLy4vanMvaGFuZGxlcnMvdGVzdEZvckVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vanMvaGFuZGxlcnMvdmFsaWRhdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9qcy9oYW5kbGVycy9yZXF1ZXN0R0VULmpzIiwid2VicGFjazovLy8uL2pzL2hhbmRsZXJzL3JlcXVlc3RQT1NULmpzIl0sIm5hbWVzIjpbImZvcm1Db21wb25lbnQiLCJpbml0IiwiY2FjaGVET00iLCJiaW5kRXZlbnRzIiwicmVxdWlyZWQiLCJmb3JtIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiZ2V0RGF0YSIsInBvc3REYXRhIiwibmFtZSIsImVtYWlsIiwicGhvbmUiLCJhZGRyZXNzIiwic2VuZERhdGEiLCJiaW5kIiwiaGFuZGxlUmVuZGVyIiwibGl2ZVZhbGlkYXRpb24iLCJwbGFjZWhvbGRlcnNUb2dnbGUiLCJyZW5kZXIiLCJzZW5kIiwiZSIsInRhcmdldCIsInR5cGUiLCJwbGFjZWhvbGRlcnMiLCJtb2R1bGUiLCJleHBvcnRzIiwibWFwIiwiaW5wdXQiLCJpbmRleCIsInBsYWNlaG9sZGVyIiwiZGF0YSIsInRvZ2dsZSIsImV2ZW50IiwiZm9ybURhdGEiLCJyZWdleCIsImVycm9yIiwidGVzdCIsInRlc3RGb3JFbGVtZW50IiwiZWwiLCJldmVudFR5cGUiLCJtZXRob2QiLCJhZGRFdmVudExpc3RlbmVyIiwidmFsaWRhdGlvbiIsImVycm9ycyIsInZhbGlkYXRlIiwiYWZ0ZXIiLCJuZXh0U2libGluZyIsImVycm9yTWVzc2FnZSIsInZhbHVlIiwibWF0Y2giLCJ0ZXh0Q29udGVudCIsImNsYXNzTGlzdCIsInJlbW92ZSIsImFkZCIsImRhdGFzZXQiLCJwcmV2ZW50RGVmYXVsdCIsInRlc3REYXRhIiwiZXZlcnkiLCJkZXZVUkwiLCJwcm9kVVJMIiwiY3VycmVudFVSTCIsImhhbmRsZUdFVCIsImhhbmRsZUNhbGwiLCJjYXREYXRhIiwiZ2V0RWxlbWVudEJ5SWQiLCJkb2dEYXRhIiwicmVxdWVzdCIsIlhNTEh0dHBSZXF1ZXN0IiwidXJsIiwib25yZWFkeXN0YXRlY2hhbmdlIiwicmVhZHlTdGF0ZSIsInN0YXR1cyIsIm9iaiIsIkpTT04iLCJwYXJzZSIsInJlc3BvbnNlVGV4dCIsImNvbnNvbGUiLCJsb2ciLCJvcGVuIiwibGVuZ3RoIiwiY2F0SXRlbSIsImNyZWF0ZUVsZW1lbnQiLCJkb2dJdGVtIiwiaW5uZXJIVE1MIiwiZCIsImNhdCIsImRvZyIsImFwcGVuZENoaWxkIiwiaGFuZGxlUE9TVCIsInllc0NhdCIsInllc0RvZyIsImhhbmRsZURhdGEiLCJzZXRSZXF1ZXN0SGVhZGVyIiwic3RyaW5naWZ5IiwiY2hlY2tlZCJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVCQUFlO0FBQ2Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsQ0E7O0FBQ0E7O0FBQ0Esd0I7Ozs7Ozs7O0FDRkE7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7QUFDQTs7Ozs7O0FBRUEsS0FBTUEsZ0JBQWdCO0FBQ3BCQyxPQURvQixrQkFDWjtBQUNOLFVBQUtDLFFBQUw7QUFDQSxVQUFLQyxVQUFMO0FBQ0EsNkJBQUssS0FBS0MsUUFBVjtBQUNELElBTG1CO0FBTXBCRixXQU5vQixzQkFNUjtBQUNWLFVBQUtHLElBQUws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eUMsaUNBQXpDO0FBQ0ExQixlQUFRL0MsSUFBUixDQUFhc0QsS0FBS29CLFNBQUwsQ0FBZS9ELElBQWYsQ0FBYjtBQUNEO0FBQ0YsSUEzQmlDO0FBNEJsQzZELGFBNUJrQyx3QkE0QnBCO0FBQ1osVUFBSzdELElBQUwsR0FBWTtBQUNWckIsYUFBTSxLQUFLQSxJQUFMLENBQVV1QyxLQUROO0FBRVZ0QyxjQUFPLEtBQUtBLEtBQUwsQ0FBV3NDLEtBRlI7QUFHVnJDLGNBQU8sS0FBS0EsS0FBTCxDQUFXcUMsS0FIUjtBQUlWcEMsZ0JBQVMsS0FBS0EsT0FBTCxDQUFhb0MsS0FKWjtBQUtWcUMsWUFBSyxJQUxLO0FBTVZDLFlBQUs7QUFOSyxNQUFaO0FBUUEsU0FBSSxLQUFLRyxNQUFMLENBQVlLLE9BQWhCLEVBQXlCO0FBQ3ZCLFlBQUtoRSxJQUFMLENBQVV1RCxHQUFWLEdBQWdCLEtBQWhCO0FBQ0Q7QUFDRCxTQUFJLEtBQUtLLE1BQUwsQ0FBWUksT0FBaEIsRUFBeUI7QUFDdkIsWUFBS2hFLElBQUwsQ0FBVXdELEdBQVYsR0FBZ0IsS0FBaEI7QUFDRDtBQUNGO0FBM0NpQyxFQUFwQztBQTZDQUUsWUFBV3hGLElBQVgsRyIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0ZXhwb3J0czoge30sXG4gXHRcdFx0aWQ6IG1vZHVsZUlkLFxuIFx0XHRcdGxvYWRlZDogZmFsc2VcbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCA2MzAyN2EyY2U5NTBkYjI5OWFiYSIsIi8qXG4gIFdlYnBhY2sgZW50cnkgcG9pbnRcbiovXG5cbmltcG9ydCAnLi9mb3JtQ29tcG9uZW50JztcbmltcG9ydCAnLi9oYW5kbGVycy9yZXF1ZXN0R0VUJztcbmltcG9ydCAnLi9oYW5kbGVycy9yZXF1ZXN0UE9TVCc7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9qcy9pbmRleC5qcyIsIi8qXG4gIGZvcm0gY29tcG9uZW50XG4qL1xuXG5pbXBvcnQgeyBpbml0LCB0b2dnbGUgfSBmcm9tICcuL2hhbmRsZXJzL3BsYWNlaG9sZGVycyc7XG5pbXBvcnQgeyB0ZXN0Rm9yRWxlbWVudCB9IGZyb20gJy4vaGFuZGxlcnMvdGVzdEZvckVsZW1lbnQnO1xuaW1wb3J0IHsgdmFsaWRhdGUgfSBmcm9tICcuL2hhbmRsZXJzL3ZhbGlkYXRpb24nO1xuaW1wb3J0IGhhbmRsZUdFVCBmcm9tICcuL2hhbmRsZXJzL3JlcXVlc3RHRVQnO1xuaW1wb3J0IGhhbmRsZVBPU1QgZnJvbSAnLi9oYW5kbGVycy9yZXF1ZXN0UE9TVCc7XG5cbmNvbnN0IGZvcm1Db21wb25lbnQgPSB7XG4gIGluaXQgKCkge1xuICAgIHRoaXMuY2FjaGVET00oKTtcbiAgICB0aGlzLmJpbmRFdmVudHMoKTtcbiAgICBpbml0KHRoaXMucmVxdWlyZWQpO1xuICB9LFxuICBjYWNoZURPTSAoKSB7XG4gICAgdGhpcy5mb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZvcm0nKTtcbiAgICB0aGlzLmdldERhdGEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZ2V0LWRhdGEnKTtcbiAgICB0aGlzLnBvc3REYXRhID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBvc3QtZGF0YScpO1xuICAgIGNvbnN0IG5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbmFtZScpO1xuICAgIGNvbnN0IGVtYWlsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2VtYWlsJyk7XG4gICAgY29uc3QgcGhvbmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcGhvbmUnKTtcbiAgICBjb25zdCBhZGRyZXNzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2FkZHJlc3MnKTtcbiAgICB0aGlzLnJlcXVpcmVkID0gW1xuICAgICAgbmFtZSwgZW1haWwsIHBob25lLCBhZGRyZXNzXG4gICAgXTtcbiAgfSxcbiAgYmluZEV2ZW50cyAoKSB7XG4gICAgLy8gdGVzdEZvckVsZW1lbnQgZm91bmQgaW4gaGFuZGxlcnMgZm9sZGVyXG4gICAgdGVzdEZvckVsZW1lbnQodGhpcy5wb3N0RGF0YSwgJ2NsaWNrJywgdGhpcy5zZW5kRGF0YS5iaW5kKHRoaXMpKTtcbiAgICB0ZXN0Rm9yRWxlbWVudCh0aGlzLmdldERhdGEsICdjbGljaycsIHRoaXMuaGFuZGxlUmVuZGVyLmJpbmQodGhpcykpO1xuICAgIHRlc3RGb3JFbGVtZW50KHRoaXMuZm9ybSwgJ21vdXNlb3ZlcicsIHRoaXMubGl2ZVZhbGlkYXRpb24uYmluZCh0aGlzKSk7XG4gICAgdGVzdEZvckVsZW1lbnQodGhpcy5mb3JtLCAnbW91c2VvdmVyJywgdGhpcy5wbGFjZWhvbGRlcnNUb2dnbGUuYmluZCh0aGlzKSk7XG4gIH0sXG4gIGhhbmRsZVJlbmRlciAoKSB7XG4gICAgaGFuZGxlR0VULnJlbmRlcigpO1xuICB9LFxuICBzZW5kRGF0YSAoKSB7XG4gICAgaGFuZGxlUE9TVC5zZW5kKCk7XG4gIH0sXG4gIGxpdmVWYWxpZGF0aW9uIChlKSB7XG4gICAgaWYgKGUudGFyZ2V0LnR5cGUgPT09ICdyYWRpbycpIHtcbiAgICAgIHJldHVybjtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFsaWRhdGUodGhpcy5yZXF1aXJlZCk7XG4gICAgfVxuICB9LFxuICBwbGFjZWhvbGRlcnNUb2dnbGUgKGUpIHtcbiAgICB0b2dnbGUodGhpcy5yZXF1aXJlZCk7XG4gIH1cbn1cbmZvcm1Db21wb25lbnQuaW5pdCgpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vanMvZm9ybUNvbXBvbmVudC5qcyIsIi8qXG4gIFNldCBpbml0aWFsIHBsYWNlaG9sZGVycyBmb3IgaW5wdXRzXG4qL1xuXG5pbXBvcnQgZm9ybURhdGEgZnJvbSAnLi4vZGF0YS9mb3JtLWRhdGEnO1xuXG5jb25zdCBwbGFjZWhvbGRlcnMgPSBtb2R1bGUuZXhwb3J0cyA9IHtcbiAgLy8gc2V0IGluaXRpYWwgaW5wdXQgcGxhY2Vob2xkZXIgdmFsdWVzXG4gIGluaXQgKHJlcXVpcmVkKSB7XG4gICAgcmVxdWlyZWQubWFwKChpbnB1dCwgaW5kZXgpID0+IHtcbiAgICAgIGlmIChpbnB1dCkge1xuICAgICAgICBpbnB1dC5wbGFjZWhvbGRlciA9IGZvcm1EYXRhLmRhdGFbaW5kZXhdLnBsYWNlaG9sZGVyO1xuICAgICAgfVxuICAgIH0sIHRoaXMpO1xuICB9LFxuICB0b2dnbGUgKHJlcXVpcmVkKSB7XG4gICAgcmVxdWlyZWQubWFwKChpbnB1dCwgaW5kZXgpID0+IHtcbiAgICAgIGlmIChldmVudC50YXJnZXQgIT0gaW5wdXQpIHtcbiAgICAgICAgaW5wdXQucGxhY2Vob2xkZXIgPSBmb3JtRGF0YS5kYXRhW2luZGV4XS5wbGFjZWhvbGRlcjtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIHRvZ2dsZSBpbnB1dCBwbGFjZWhvbGRlciB2YWx1ZSB0byBibGFuayBvbmx5IHdoZW4gdXNlciBzZWxlY3RzIGlucHV0XG4gICAgICAgIGlucHV0LnBsYWNlaG9sZGVyID0gJyc7XG4gICAgICB9XG4gICAgfSwgdGhpcyk7XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2pzL2hhbmRsZXJzL3BsYWNlaG9sZGVycy5qcyIsIi8qXG4gIEZvcm0gZGF0YVxuKi9cblxudmFyIGZvcm1EYXRhID0gbW9kdWxlLmV4cG9ydHMgPSB7XG4gIGRhdGE6IFtcbiAgICB7XG4gICAgICBwbGFjZWhvbGRlcjogJ05hbWUnLFxuICAgICAgcmVnZXg6ICdbYS16QS1aXSsoKFtcXCcsLiAtXVthLXpBLVogXSk/W2EtekEtWl0qKSokJyxcbiAgICAgIGVycm9yOiAnUGxlYXNlIGVudGVyIGxldHRlcnMgb25seSdcbiAgICB9LFxuICAgIHtcbiAgICAgIHBsYWNlaG9sZGVyOiAnRW1haWwnLFxuICAgICAgcmVnZXg6ICdeW2EtekEtWjAtOV0rQFthLXpBLVowLTktXSsoPzpcXC5bYS16QS1aMC05LV0rKSokJyxcbiAgICAgIGVycm9yOiAnUGxlYXNlIGVudGVyIGEgdmFsaWQgZW1haWwnXG4gICAgfSxcbiAgICB7XG4gICAgICBwbGFjZWhvbGRlcjogJ1Bob25lJyxcbiAgICAgIHJlZ2V4OiAnXlsyLTldezJ9WzAtOV17OH0kJyxcbiAgICAgIGVycm9yOiAnUGxlYXNlIGVudGVyIGEgMTAgZGlnaXQgcGhvbmUgbnVtYmVyJ1xuICAgIH0sXG4gICAge1xuICAgICAgcGxhY2Vob2xkZXI6ICdBZGRyZXNzJyxcbiAgICAgIHJlZ2V4OiAnXig/IVxccyokKS4rJyxcbiAgICAgIGVycm9yOiAnUGxlYXNlIGVudGVyIHlvdXIgYWRkcmVzcydcbiAgICB9XG4gIF1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2pzL2RhdGEvZm9ybS1kYXRhLmpzIiwiLypcbiAgQ3JlYXRlZCB0byBhdm9pZCBlcnJvcnMgaWYgdGhlIGVsZW1lbnQgaXMgbm90IHByZXNlbnQgaW4gdGhlIERPTVxuKi9cblxuY29uc3QgdGVzdCA9IG1vZHVsZS5leHBvcnRzID0ge1xuICB0ZXN0Rm9yRWxlbWVudCAoZWwsIGV2ZW50VHlwZSwgbWV0aG9kKSB7XG4gICAgaWYgKGVsKSB7XG4gICAgICBlbC5hZGRFdmVudExpc3RlbmVyKGV2ZW50VHlwZSwgbWV0aG9kKTtcbiAgICB9XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2pzL2hhbmRsZXJzL3Rlc3RGb3JFbGVtZW50LmpzIiwiLypcbiAgZm9ybURhdGEgdXNlZCB0byBtYXRjaCB1c2VyIGlucHV0IGZvciB2YWxpZGF0aW9uXG4qL1xuXG5pbXBvcnQgZm9ybURhdGEgZnJvbSAnLi4vZGF0YS9mb3JtLWRhdGEnO1xuXG5jb25zdCB2YWxpZGF0aW9uID0gbW9kdWxlLmV4cG9ydHMgPSB7XG4gIGVycm9yczogbnVsbCxcbiAgdmFsaWRhdGUgKHJlcXVpcmVkKSB7XG4gICAgcmVxdWlyZWQubWFwICgoaW5wdXQsIGluZGV4KSA9PiB7XG4gICAgICB2YXIgYWZ0ZXIgPSBpbnB1dC5uZXh0U2libGluZztcbiAgICAgIHZhciBlcnJvck1lc3NhZ2UgPSBhZnRlci5uZXh0U2libGluZztcblxuICAgICAgaWYgKGlucHV0LnZhbHVlLm1hdGNoKGZvcm1EYXRhLmRhdGFbaW5kZXhdLnJlZ2V4KSkge1xuICAgICAgICBlcnJvck1lc3NhZ2UudGV4dENvbnRlbnQgPSAn4pyFJztcbiAgICAgICAgZXJyb3JNZXNzYWdlLmNsYXNzTGlzdC5yZW1vdmUoJ2lucHV0LWZhaWwnKTtcbiAgICAgICAgZXJyb3JNZXNzYWdlLmNsYXNzTGlzdC5hZGQoJ2lucHV0LXN1Y2Nlc3MnKTtcbiAgICAgICAgaW5wdXQuZGF0YXNldC5lcnJvciA9ICdmYWxzZSc7XG4gICAgICB9IGVsc2UgaWYgKGlucHV0LnZhbHVlID09PSAnJykge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZXJyb3JNZXNzYWdlLnRleHRDb250ZW50ID0gZm9ybURhdGEuZGF0YVtpbmRleF0uZXJyb3I7XG4gICAgICAgIGVycm9yTWVzc2FnZS5jbGFzc0xpc3QucmVtb3ZlKCdpbnB1dC1zdWNjZXNzJyk7XG4gICAgICAgIGVycm9yTWVzc2FnZS5jbGFzc0xpc3QuYWRkKCdpbnB1dC1mYWlsJyk7XG4gICAgICAgIGlucHV0LmRhdGFzZXQuZXJyb3IgPSAndHJ1ZSc7XG4gICAgICB9XG5cbiAgICAgIGlmICh2YWxpZGF0aW9uLmVycm9ycyAhPSBmYWxzZSkge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgfVxuICAgIH0sIHRoaXMpO1xuXG4gICAgY29uc3QgdGVzdERhdGEgPSAoaW5wdXQpID0+IHtcbiAgICAgIHJldHVybiBpbnB1dC5kYXRhc2V0LmVycm9yID09PSAnZmFsc2UnO1xuICAgIH1cblxuICAgIHJlcXVpcmVkLmV2ZXJ5KHRlc3REYXRhKSA/IHZhbGlkYXRpb24uZXJyb3JzID0gZmFsc2UgOiB2YWxpZGF0aW9uLmVycm9ycyA9IHRydWU7XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2pzL2hhbmRsZXJzL3ZhbGlkYXRpb24uanMiLCIvKlxuICBSZXF1ZXN0IGRhdGEgZnJvbSBBUElcbiovXG5cbmNvbnN0IGRldlVSTCA9ICdodHRwOi8vbG9jYWxob3N0OjMwMDAvYXBpL3YxL3N1Ym1pc3Npb25zJztcbmNvbnN0IHByb2RVUkwgPSAnaHR0cHM6Ly9mb3JtLWNvbXBvbmVudC1hcGkuaGVyb2t1YXBwLmNvbS9hcGkvdjEvc3VibWlzc2lvbnMnO1xuXG5jb25zdCBjdXJyZW50VVJMID0gcHJvZFVSTDtcblxuY29uc3QgaGFuZGxlR0VUID0gbW9kdWxlLmV4cG9ydHMgPSB7XG4gIGRhdGE6IFtdLFxuICBpbml0ICgpIHtcbiAgICB0aGlzLmNhY2hlRE9NKCk7XG4gICAgdGhpcy5oYW5kbGVDYWxsKCk7XG4gIH0sXG4gIGNhY2hlRE9NICgpIHtcbiAgICB0aGlzLmNhdERhdGEgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2F0LWRhdGEnKTtcbiAgICB0aGlzLmRvZ0RhdGEgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZG9nLWRhdGEnKTtcbiAgfSxcbiAgaGFuZGxlQ2FsbCAoKSB7XG4gICAgY29uc3QgcmVxdWVzdCA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xuICAgIGNvbnN0IG1ldGhvZCA9ICdHRVQnO1xuICAgIGNvbnN0IHVybCA9IGN1cnJlbnRVUkw7XG5cbiAgICByZXF1ZXN0Lm9ucmVhZHlzdGF0ZWNoYW5nZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmICh0aGlzLnJlYWR5U3RhdGUgPT0gNCAmJiB0aGlzLnN0YXR1cyA9PSAyMDApIHtcbiAgICAgICAgY29uc3Qgb2JqID0gSlNPTi5wYXJzZSh0aGlzLnJlc3BvbnNlVGV4dCk7XG4gICAgICAgIGhhbmRsZUdFVC5kYXRhID0gb2JqO1xuICAgICAgICBjb25zb2xlLmxvZyhvYmopO1xuICAgICAgfVxuICAgIH1cbiAgICByZXF1ZXN0Lm9wZW4obWV0aG9kLCB1cmwsIHRydWUpO1xuICAgIHJlcXVlc3Quc2VuZCgpO1xuICB9LFxuICByZW5kZXIgKCkge1xuICAgIGNvbnN0IGRhdGEgPSB0aGlzLmRhdGE7XG4gICAgY29uc3QgY2F0RGF0YSA9IHRoaXMuY2F0RGF0YTtcbiAgICBjb25zdCBkb2dEYXRhID0gdGhpcy5kb2dEYXRhO1xuXG4gICAgaWYgKGRhdGEubGVuZ3RoID4gMCkge1xuICAgICAgZGF0YS5tYXAoZCA9PiB7XG4gICAgICAgIGNvbnN0IGNhdEl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgICAgICBjb25zdCBkb2dJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcblxuICAgICAgICBjYXRJdGVtLmlubmVySFRNTCA9IGBcbiAgICAgICAgICAke2QubmFtZX0gYW5zd2VyZWQgJHtkLmNhdH0hYDtcblxuICAgICAgICBkb2dJdGVtLmlubmVySFRNTCA9IGBcbiAgICAgICAgICAke2QubmFtZX0gYW5zd2VyZWQgJHtkLmRvZ30hYDtcblxuICAgICAgICBjYXREYXRhLmFwcGVuZENoaWxkKGNhdEl0ZW0pO1xuICAgICAgICBkb2dEYXRhLmFwcGVuZENoaWxkKGRvZ0l0ZW0pO1xuICAgICAgfSk7XG4gICAgICBjb25zb2xlLmxvZyhkYXRhKTtcbiAgICB9XG4gIH1cbn1cbmhhbmRsZUdFVC5pbml0KCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9qcy9oYW5kbGVycy9yZXF1ZXN0R0VULmpzIiwiLypcbiAgUmVxdWVzdCBkYXRhIGZyb20gQVBJXG4qL1xuXG5pbXBvcnQgdmFsaWRhdGlvbiBmcm9tICcuL3ZhbGlkYXRpb24nO1xuXG5jb25zdCBkZXZVUkwgPSAnaHR0cDovL2xvY2FsaG9zdDozMDAwL2FwaS92MS9zdWJtaXNzaW9ucyc7XG5jb25zdCBwcm9kVVJMID0gJ2h0dHBzOi8vZm9ybS1jb21wb25lbnQtYXBpLmhlcm9rdWFwcC5jb20vYXBpL3YxL3N1Ym1pc3Npb25zJztcblxuY29uc3QgY3VycmVudFVSTCA9IHByb2RVUkw7XG5cbmNvbnN0IGhhbmRsZVBPU1QgPSBtb2R1bGUuZXhwb3J0cyA9IHtcbiAgZGF0YToge30sXG4gIGluaXQgKCkge1xuICAgIHRoaXMuY2FjaGVET00oKTtcbiAgfSxcbiAgY2FjaGVET00gKCkge1xuICAgIHRoaXMubmFtZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduYW1lJyk7XG4gICAgdGhpcy5lbWFpbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdlbWFpbCcpO1xuICAgIHRoaXMucGhvbmUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGhvbmUnKTtcbiAgICB0aGlzLmFkZHJlc3MgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWRkcmVzcycpO1xuICAgIHRoaXMueWVzQ2F0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3llcy1jYXQnKTtcbiAgICB0aGlzLnllc0RvZyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd5ZXMtZG9nJyk7XG4gIH0sXG4gIHNlbmQgKCkge1xuICAgIGlmICh2YWxpZGF0aW9uLmVycm9ycyA9PT0gZmFsc2UpIHtcbiAgICAgIGNvbnNvbGUubG9nKHZhbGlkYXRpb24uZXJyb3JzKTtcbiAgICAgIHRoaXMuaGFuZGxlRGF0YSgpO1xuICAgICAgY29uc3QgZGF0YSA9IHRoaXMuZGF0YTtcblxuICAgICAgY29uc3QgcmVxdWVzdCA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xuICAgICAgY29uc3QgbWV0aG9kID0gJ1BPU1QnO1xuICAgICAgY29uc3QgdXJsID0gY3VycmVudFVSTDtcblxuICAgICAgcmVxdWVzdC5vcGVuKG1ldGhvZCwgdXJsLCB0cnVlKTtcbiAgICAgIHJlcXVlc3Quc2V0UmVxdWVzdEhlYWRlcignQ29udGVudC1UeXBlJywgJ2FwcGxpY2F0aW9uL2pzb247IGNoYXJzZXQ9VVRGLTgnKTtcbiAgICAgIHJlcXVlc3Quc2VuZChKU09OLnN0cmluZ2lmeShkYXRhKSk7XG4gICAgfVxuICB9LFxuICBoYW5kbGVEYXRhICgpIHtcbiAgICB0aGlzLmRhdGEgPSB7XG4gICAgICBuYW1lOiB0aGlzLm5hbWUudmFsdWUsXG4gICAgICBlbWFpbDogdGhpcy5lbWFpbC52YWx1ZSxcbiAgICAgIHBob25lOiB0aGlzLnBob25lLnZhbHVlLFxuICAgICAgYWRkcmVzczogdGhpcy5hZGRyZXNzLnZhbHVlLFxuICAgICAgY2F0OiAnbm8nLFxuICAgICAgZG9nOiAnbm8nXG4gICAgfVxuICAgIGlmICh0aGlzLnllc0NhdC5jaGVja2VkKSB7XG4gICAgICB0aGlzLmRhdGEuY2F0ID0gJ3llcyc7XG4gICAgfVxuICAgIGlmICh0aGlzLnllc0RvZy5jaGVja2VkKSB7XG4gICAgICB0aGlzLmRhdGEuZG9nID0gJ3llcyc7XG4gICAgfVxuICB9XG59XG5oYW5kbGVQT1NULmluaXQoKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2pzL2hhbmRsZXJzL3JlcXVlc3RQT1NULmpzIl0sInNvdXJjZVJvb3QiOiIifQ==