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

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var _placeholders = __webpack_require__(3);
	
	var _testForElement = __webpack_require__(5);
	
	var _validation = __webpack_require__(6);
	
	var formComponent = {
	  init: function init() {
	    this.cacheDOM();
	    this.bindEvents();
	    (0, _placeholders.init)(this.required);
	  },
	  cacheDOM: function cacheDOM() {
	    this.form = document.querySelector('.form');
	    var name = document.querySelector('#name');
	    var email = document.querySelector('#email');
	    var phone = document.querySelector('#phone');
	    var address = document.querySelector('#address');
	    this.required = [name, email, phone, address];
	  },
	  bindEvents: function bindEvents() {
	    // testForElement found in handlers folder
	    (0, _testForElement.testForElement)(this.form, 'click', this.liveValidation.bind(this));
	    (0, _testForElement.testForElement)(this.form, 'click', this.placeholdersToggle.bind(this));
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
	
	var handleGET = {
	  data: [],
	  init: function init() {
	    this.cacheDOM();
	    this.bindEvents();
	    this.handleCall();
	  },
	  cacheDOM: function cacheDOM() {
	    this.getData = document.querySelector('.get-data');
	    this.catData = document.getElementById('cat-data');
	    this.dogData = document.getElementById('dog-data');
	  },
	  bindEvents: function bindEvents() {
	    this.getData.addEventListener('click', this.handleRender.bind(this));
	  },
	  handleCall: function handleCall() {
	    var request = new XMLHttpRequest();
	    var method = 'GET';
	    var url = currentURL;
	    request.onreadystatechange = function () {
	      if (this.readyState == 4 && this.status == 200) {
	        var obj = JSON.parse(this.responseText);
	        handleGET.data = obj;
	        console.log(handleGET.data);
	      }
	    };
	    request.open(method, url, true);
	    request.send();
	  },
	  handleRender: function handleRender() {
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
	
	var handlePOST = {
	  init: function init() {
	    this.cacheDOM();
	    this.bindEvents();
	  },
	  cacheDOM: function cacheDOM() {
	    this.postData = document.querySelector('.post-data');
	    this.name = document.getElementById('name');
	    this.email = document.getElementById('email');
	    this.phone = document.getElementById('phone');
	    this.address = document.getElementById('address');
	    this.yesCat = document.getElementById('yes-cat');
	    this.yesDog = document.getElementById('yes-dog');
	  },
	  bindEvents: function bindEvents() {
	    this.postData.addEventListener('click', this.handleSend.bind(this));
	  },
	  handleSend: function handleSend() {
	    console.log(_validation2.default.errors);
	    if (_validation2.default.errors === false) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgYThjMmYzNTRlMjQ4YTA0ODk3ZDkiLCJ3ZWJwYWNrOi8vLy4vanMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vanMvZm9ybUNvbXBvbmVudC5qcyIsIndlYnBhY2s6Ly8vLi9qcy9oYW5kbGVycy9wbGFjZWhvbGRlcnMuanMiLCJ3ZWJwYWNrOi8vLy4vanMvZGF0YS9mb3JtLWRhdGEuanMiLCJ3ZWJwYWNrOi8vLy4vanMvaGFuZGxlcnMvdGVzdC1mb3ItZWxlbWVudC5qcyIsIndlYnBhY2s6Ly8vLi9qcy9oYW5kbGVycy92YWxpZGF0aW9uLmpzIiwid2VicGFjazovLy8uL2pzL2hhbmRsZVJlcXVlc3RzLmpzIl0sIm5hbWVzIjpbImZvcm1Db21wb25lbnQiLCJpbml0IiwiY2FjaGVET00iLCJiaW5kRXZlbnRzIiwicmVxdWlyZWQiLCJmb3JtIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwibmFtZSIsImVtYWlsIiwicGhvbmUiLCJhZGRyZXNzIiwibGl2ZVZhbGlkYXRpb24iLCJiaW5kIiwicGxhY2Vob2xkZXJzVG9nZ2xlIiwiZSIsInRhcmdldCIsInR5cGUiLCJwbGFjZWhvbGRlcnMiLCJtb2R1bGUiLCJleHBvcnRzIiwibWFwIiwiaW5wdXQiLCJpbmRleCIsInBsYWNlaG9sZGVyIiwiZGF0YSIsInRvZ2dsZSIsImV2ZW50IiwiZm9ybURhdGEiLCJyZWdleCIsImVycm9yIiwidGVzdCIsInRlc3RGb3JFbGVtZW50IiwiZWwiLCJldmVudFR5cGUiLCJtZXRob2QiLCJhZGRFdmVudExpc3RlbmVyIiwidmFsaWRhdGlvbiIsImVycm9ycyIsInZhbGlkYXRlIiwiYWZ0ZXIiLCJuZXh0U2libGluZyIsImVycm9yTWVzc2FnZSIsInZhbHVlIiwibWF0Y2giLCJ0ZXh0Q29udGVudCIsImNsYXNzTGlzdCIsInJlbW92ZSIsImFkZCIsImRhdGFzZXQiLCJwcmV2ZW50RGVmYXVsdCIsInRlc3REYXRhIiwiZXZlcnkiLCJkZXZVUkwiLCJwcm9kVVJMIiwiY3VycmVudFVSTCIsImhhbmRsZUdFVCIsImhhbmRsZUNhbGwiLCJnZXREYXRhIiwiY2F0RGF0YSIsImdldEVsZW1lbnRCeUlkIiwiZG9nRGF0YSIsImhhbmRsZVJlbmRlciIsInJlcXVlc3QiLCJYTUxIdHRwUmVxdWVzdCIsInVybCIsIm9ucmVhZHlzdGF0ZWNoYW5nZSIsInJlYWR5U3RhdGUiLCJzdGF0dXMiLCJvYmoiLCJKU09OIiwicGFyc2UiLCJyZXNwb25zZVRleHQiLCJjb25zb2xlIiwibG9nIiwib3BlbiIsInNlbmQiLCJsZW5ndGgiLCJjYXRJdGVtIiwiY3JlYXRlRWxlbWVudCIsImRvZ0l0ZW0iLCJpbm5lckhUTUwiLCJkIiwiY2F0IiwiZG9nIiwiYXBwZW5kQ2hpbGQiLCJoYW5kbGVQT1NUIiwicG9zdERhdGEiLCJ5ZXNDYXQiLCJ5ZXNEb2ciLCJoYW5kbGVTZW5kIiwiaGFuZGxlRGF0YSIsInNldFJlcXVlc3RIZWFkZXIiLCJzdHJpbmdpZnkiLCJjaGVja2VkIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdUJBQWU7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ2xDQTs7QUFDQSx3Qjs7Ozs7Ozs7QUNEQTs7QUFDQTs7QUFDQTs7QUFFQSxLQUFNQSxnQkFBZ0I7QUFDcEJDLE9BRG9CLGtCQUNaO0FBQ04sVUFBS0MsUUFBTDtBQUNBLFVBQUtDLFVBQUw7QUFDQSw2QkFBSyxLQUFLQyxRQUFWO0FBQ0QsSUFMbUI7QUFNcEJGLFdBTm9CLHNCQU1SO0FBQ1YsVUFBS0csSUFBTCxHQUFZQyxTQUFTQyxhQUFULENBQXVCLE9BQXZCLENBQVo7QUFDQSxTQUFNQyxPQUFPRixTQUFTQyxhQUFULENBQXVCLE9BQXZCLENB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QU8sS0FBS0EsS0FBTCxDQUFXaUMsS0FIUjtBQUlWaEMsZ0JBQVMsS0FBS0EsT0FBTCxDQUFhZ0MsS0FKWjtBQUtWd0MsWUFBSyxJQUxLO0FBTVZDLFlBQUs7QUFOSyxNQUFaO0FBUUEsU0FBSSxLQUFLSSxNQUFMLENBQVlNLE9BQWhCLEVBQXlCO0FBQ3ZCLFlBQUtyRSxJQUFMLENBQVUwRCxHQUFWLEdBQWdCLEtBQWhCO0FBQ0Q7QUFDRCxTQUFJLEtBQUtNLE1BQUwsQ0FBWUssT0FBaEIsRUFBeUI7QUFDdkIsWUFBS3JFLElBQUwsQ0FBVTJELEdBQVYsR0FBZ0IsS0FBaEI7QUFDRDtBQUNGO0FBL0NnQixFQUFuQjtBQWlEQUUsWUFBV3JGLElBQVgsRyIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0ZXhwb3J0czoge30sXG4gXHRcdFx0aWQ6IG1vZHVsZUlkLFxuIFx0XHRcdGxvYWRlZDogZmFsc2VcbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCBhOGMyZjM1NGUyNDhhMDQ4OTdkOSIsIi8qXG4gIFdlYnBhY2sgZW50cnkgcG9pbnRcbiovXG5cbmltcG9ydCAnLi9mb3JtQ29tcG9uZW50JztcbmltcG9ydCAnLi9oYW5kbGVSZXF1ZXN0cyc7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9qcy9pbmRleC5qcyIsIi8qXG4gIGZvcm0gY29tcG9uZW50XG4qL1xuXG5pbXBvcnQgeyBpbml0LCB0b2dnbGUgfSBmcm9tICcuL2hhbmRsZXJzL3BsYWNlaG9sZGVycyc7XG5pbXBvcnQgeyB0ZXN0Rm9yRWxlbWVudCB9IGZyb20gJy4vaGFuZGxlcnMvdGVzdC1mb3ItZWxlbWVudCc7XG5pbXBvcnQgeyB2YWxpZGF0ZSB9IGZyb20gJy4vaGFuZGxlcnMvdmFsaWRhdGlvbic7XG5cbmNvbnN0IGZvcm1Db21wb25lbnQgPSB7XG4gIGluaXQgKCkge1xuICAgIHRoaXMuY2FjaGVET00oKTtcbiAgICB0aGlzLmJpbmRFdmVudHMoKTtcbiAgICBpbml0KHRoaXMucmVxdWlyZWQpO1xuICB9LFxuICBjYWNoZURPTSAoKSB7XG4gICAgdGhpcy5mb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZvcm0nKTtcbiAgICBjb25zdCBuYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI25hbWUnKTtcbiAgICBjb25zdCBlbWFpbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNlbWFpbCcpO1xuICAgIGNvbnN0IHBob25lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Bob25lJyk7XG4gICAgY29uc3QgYWRkcmVzcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNhZGRyZXNzJyk7XG4gICAgdGhpcy5yZXF1aXJlZCA9IFtcbiAgICAgIG5hbWUsIGVtYWlsLCBwaG9uZSwgYWRkcmVzc1xuICAgIF07XG4gIH0sXG4gIGJpbmRFdmVudHMgKCkge1xuICAgIC8vIHRlc3RGb3JFbGVtZW50IGZvdW5kIGluIGhhbmRsZXJzIGZvbGRlclxuICAgIHRlc3RGb3JFbGVtZW50KHRoaXMuZm9ybSwgJ2NsaWNrJywgdGhpcy5saXZlVmFsaWRhdGlvbi5iaW5kKHRoaXMpKTtcbiAgICB0ZXN0Rm9yRWxlbWVudCh0aGlzLmZvcm0sICdjbGljaycsIHRoaXMucGxhY2Vob2xkZXJzVG9nZ2xlLmJpbmQodGhpcykpO1xuICB9LFxuICBsaXZlVmFsaWRhdGlvbiAoZSkge1xuICAgIGlmIChlLnRhcmdldC50eXBlID09PSAncmFkaW8nKSB7XG4gICAgICByZXR1cm47XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhbGlkYXRlKHRoaXMucmVxdWlyZWQpO1xuICAgIH1cbiAgfSxcbiAgcGxhY2Vob2xkZXJzVG9nZ2xlIChlKSB7XG4gICAgdG9nZ2xlKHRoaXMucmVxdWlyZWQpO1xuICB9XG59XG5mb3JtQ29tcG9uZW50LmluaXQoKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2pzL2Zvcm1Db21wb25lbnQuanMiLCIvKlxuICBTZXQgaW5pdGlhbCBwbGFjZWhvbGRlcnMgZm9yIGlucHV0c1xuKi9cblxuaW1wb3J0IGZvcm1EYXRhIGZyb20gJy4uL2RhdGEvZm9ybS1kYXRhJztcblxudmFyIHBsYWNlaG9sZGVycyA9IG1vZHVsZS5leHBvcnRzID0ge1xuICAvLyBzZXQgaW5pdGlhbCBpbnB1dCBwbGFjZWhvbGRlciB2YWx1ZXNcbiAgaW5pdCAocmVxdWlyZWQpIHtcbiAgICByZXF1aXJlZC5tYXAoKGlucHV0LCBpbmRleCkgPT4ge1xuICAgICAgaWYgKGlucHV0KSB7XG4gICAgICAgIGlucHV0LnBsYWNlaG9sZGVyID0gZm9ybURhdGEuZGF0YVtpbmRleF0ucGxhY2Vob2xkZXI7XG4gICAgICB9XG4gICAgfSwgdGhpcyk7XG4gIH0sXG4gIHRvZ2dsZSAocmVxdWlyZWQpIHtcbiAgICByZXF1aXJlZC5tYXAoKGlucHV0LCBpbmRleCkgPT4ge1xuICAgICAgaWYgKGV2ZW50LnRhcmdldCAhPSBpbnB1dCkge1xuICAgICAgICBpbnB1dC5wbGFjZWhvbGRlciA9IGZvcm1EYXRhLmRhdGFbaW5kZXhdLnBsYWNlaG9sZGVyO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gdG9nZ2xlIGlucHV0IHBsYWNlaG9sZGVyIHZhbHVlIHRvIGJsYW5rIG9ubHkgd2hlbiB1c2VyIHNlbGVjdHMgaW5wdXRcbiAgICAgICAgaW5wdXQucGxhY2Vob2xkZXIgPSAnJztcbiAgICAgIH1cbiAgICB9LCB0aGlzKTtcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vanMvaGFuZGxlcnMvcGxhY2Vob2xkZXJzLmpzIiwiLypcbiAgRm9ybSBkYXRhXG4qL1xuXG52YXIgZm9ybURhdGEgPSBtb2R1bGUuZXhwb3J0cyA9IHtcbiAgZGF0YTogW1xuICAgIHtcbiAgICAgIHBsYWNlaG9sZGVyOiAnTmFtZScsXG4gICAgICByZWdleDogJ1thLXpBLVpdKygoW1xcJywuIC1dW2EtekEtWiBdKT9bYS16QS1aXSopKiQnLFxuICAgICAgZXJyb3I6ICdQbGVhc2UgZW50ZXIgbGV0dGVycyBvbmx5J1xuICAgIH0sXG4gICAge1xuICAgICAgcGxhY2Vob2xkZXI6ICdFbWFpbCcsXG4gICAgICByZWdleDogJ15bYS16QS1aMC05XStAW2EtekEtWjAtOS1dKyg/OlxcLlthLXpBLVowLTktXSspKiQnLFxuICAgICAgZXJyb3I6ICdQbGVhc2UgZW50ZXIgYSB2YWxpZCBlbWFpbCdcbiAgICB9LFxuICAgIHtcbiAgICAgIHBsYWNlaG9sZGVyOiAnUGhvbmUnLFxuICAgICAgcmVnZXg6ICdeWzItOV17Mn1bMC05XXs4fSQnLFxuICAgICAgZXJyb3I6ICdQbGVhc2UgZW50ZXIgYSAxMCBkaWdpdCBwaG9uZSBudW1iZXInXG4gICAgfSxcbiAgICB7XG4gICAgICBwbGFjZWhvbGRlcjogJ0FkZHJlc3MnLFxuICAgICAgcmVnZXg6ICdeKD8hXFxzKiQpLisnLFxuICAgICAgZXJyb3I6ICdQbGVhc2UgZW50ZXIgeW91ciBhZGRyZXNzJ1xuICAgIH1cbiAgXVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vanMvZGF0YS9mb3JtLWRhdGEuanMiLCIvKlxuICBDcmVhdGVkIHRvIGF2b2lkIGVycm9ycyBpZiB0aGUgZWxlbWVudCBpcyBub3QgcHJlc2VudCBpbiB0aGUgRE9NXG4qL1xuXG52YXIgdGVzdCA9IG1vZHVsZS5leHBvcnRzID0ge1xuICB0ZXN0Rm9yRWxlbWVudCAoZWwsIGV2ZW50VHlwZSwgbWV0aG9kKSB7XG4gICAgaWYgKGVsKSB7XG4gICAgICBlbC5hZGRFdmVudExpc3RlbmVyKGV2ZW50VHlwZSwgbWV0aG9kKTtcbiAgICB9XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2pzL2hhbmRsZXJzL3Rlc3QtZm9yLWVsZW1lbnQuanMiLCIvKlxuICBmb3JtRGF0YSB1c2VkIHRvIG1hdGNoIHVzZXIgaW5wdXQgZm9yIHZhbGlkYXRpb25cbiovXG5cblxuaW1wb3J0IGZvcm1EYXRhIGZyb20gJy4uL2RhdGEvZm9ybS1kYXRhJztcblxudmFyIHZhbGlkYXRpb24gPSBtb2R1bGUuZXhwb3J0cyA9IHtcbiAgZXJyb3JzOiBudWxsLFxuICB2YWxpZGF0ZSAocmVxdWlyZWQpIHtcbiAgICByZXF1aXJlZC5tYXAgKChpbnB1dCwgaW5kZXgpID0+IHtcbiAgICAgIHZhciBhZnRlciA9IGlucHV0Lm5leHRTaWJsaW5nO1xuICAgICAgdmFyIGVycm9yTWVzc2FnZSA9IGFmdGVyLm5leHRTaWJsaW5nO1xuXG4gICAgICBpZiAoaW5wdXQudmFsdWUubWF0Y2goZm9ybURhdGEuZGF0YVtpbmRleF0ucmVnZXgpKSB7XG4gICAgICAgIGVycm9yTWVzc2FnZS50ZXh0Q29udGVudCA9ICfinIUnO1xuICAgICAgICBlcnJvck1lc3NhZ2UuY2xhc3NMaXN0LnJlbW92ZSgnaW5wdXQtZmFpbCcpO1xuICAgICAgICBlcnJvck1lc3NhZ2UuY2xhc3NMaXN0LmFkZCgnaW5wdXQtc3VjY2VzcycpO1xuICAgICAgICBpbnB1dC5kYXRhc2V0LmVycm9yID0gJ2ZhbHNlJztcbiAgICAgIH0gZWxzZSBpZiAoaW5wdXQudmFsdWUgPT09ICcnKSB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBlcnJvck1lc3NhZ2UudGV4dENvbnRlbnQgPSBmb3JtRGF0YS5kYXRhW2luZGV4XS5lcnJvcjtcbiAgICAgICAgZXJyb3JNZXNzYWdlLmNsYXNzTGlzdC5yZW1vdmUoJ2lucHV0LXN1Y2Nlc3MnKTtcbiAgICAgICAgZXJyb3JNZXNzYWdlLmNsYXNzTGlzdC5hZGQoJ2lucHV0LWZhaWwnKTtcbiAgICAgICAgaW5wdXQuZGF0YXNldC5lcnJvciA9ICd0cnVlJztcbiAgICAgIH1cblxuICAgICAgaWYgKHZhbGlkYXRpb24uZXJyb3JzICE9IGZhbHNlKSB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICB9XG4gICAgfSwgdGhpcyk7XG5cbiAgICBjb25zdCB0ZXN0RGF0YSA9IChpbnB1dCkgPT4ge1xuICAgICAgcmV0dXJuIGlucHV0LmRhdGFzZXQuZXJyb3IgPT09ICdmYWxzZSc7XG4gICAgfVxuXG4gICAgcmVxdWlyZWQuZXZlcnkodGVzdERhdGEpID8gdmFsaWRhdGlvbi5lcnJvcnMgPSBmYWxzZSA6IHZhbGlkYXRpb24uZXJyb3JzID0gdHJ1ZTtcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vanMvaGFuZGxlcnMvdmFsaWRhdGlvbi5qcyIsIi8qXG4gIFJlcXVlc3QgZGF0YSBmcm9tIEFQSVxuKi9cblxuaW1wb3J0IHZhbGlkYXRpb24gZnJvbSAnLi9oYW5kbGVycy92YWxpZGF0aW9uJztcblxuY29uc3QgZGV2VVJMID0gJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9hcGkvdjEvc3VibWlzc2lvbnMnO1xuY29uc3QgcHJvZFVSTCA9ICdodHRwczovL2Zvcm0tY29tcG9uZW50LWFwaS5oZXJva3VhcHAuY29tL2FwaS92MS9zdWJtaXNzaW9ucyc7XG5cbmNvbnN0IGN1cnJlbnRVUkwgPSBwcm9kVVJMO1xuXG5jb25zdCBoYW5kbGVHRVQgPSB7XG4gIGRhdGE6IFtdLFxuICBpbml0ICgpIHtcbiAgICB0aGlzLmNhY2hlRE9NKCk7XG4gICAgdGhpcy5iaW5kRXZlbnRzKCk7XG4gICAgdGhpcy5oYW5kbGVDYWxsKCk7XG4gIH0sXG4gIGNhY2hlRE9NICgpIHtcbiAgICB0aGlzLmdldERhdGEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZ2V0LWRhdGEnKTtcbiAgICB0aGlzLmNhdERhdGEgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2F0LWRhdGEnKTtcbiAgICB0aGlzLmRvZ0RhdGEgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZG9nLWRhdGEnKTtcbiAgfSxcbiAgYmluZEV2ZW50cyAoKSB7XG4gICAgdGhpcy5nZXREYXRhLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5oYW5kbGVSZW5kZXIuYmluZCh0aGlzKSk7XG4gIH0sXG4gIGhhbmRsZUNhbGwgKCkge1xuICAgIGNvbnN0IHJlcXVlc3QgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcbiAgICBjb25zdCBtZXRob2QgPSAnR0VUJztcbiAgICBjb25zdCB1cmwgPSBjdXJyZW50VVJMO1xuICAgIHJlcXVlc3Qub25yZWFkeXN0YXRlY2hhbmdlID0gZnVuY3Rpb24gKCkge1xuICAgICAgaWYgKHRoaXMucmVhZHlTdGF0ZSA9PSA0ICYmIHRoaXMuc3RhdHVzID09IDIwMCkge1xuICAgICAgICBjb25zdCBvYmogPSBKU09OLnBhcnNlKHRoaXMucmVzcG9uc2VUZXh0KTtcbiAgICAgICAgaGFuZGxlR0VULmRhdGEgPSBvYmo7XG4gICAgICAgIGNvbnNvbGUubG9nKGhhbmRsZUdFVC5kYXRhKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmVxdWVzdC5vcGVuKG1ldGhvZCwgdXJsLCB0cnVlKTtcbiAgICByZXF1ZXN0LnNlbmQoKTtcbiAgfSxcbiAgaGFuZGxlUmVuZGVyICgpIHtcbiAgICBjb25zdCBkYXRhID0gdGhpcy5kYXRhO1xuICAgIGNvbnN0IGNhdERhdGEgPSB0aGlzLmNhdERhdGE7XG4gICAgY29uc3QgZG9nRGF0YSA9IHRoaXMuZG9nRGF0YTtcblxuICAgIGlmIChkYXRhLmxlbmd0aCA+IDApIHtcbiAgICAgIGRhdGEubWFwKGQgPT4ge1xuICAgICAgICBjb25zdCBjYXRJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICAgICAgY29uc3QgZG9nSXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG5cbiAgICAgICAgY2F0SXRlbS5pbm5lckhUTUwgPSBgXG4gICAgICAgICAgJHtkLm5hbWV9IGFuc3dlcmVkICR7ZC5jYXR9IWA7XG5cbiAgICAgICAgZG9nSXRlbS5pbm5lckhUTUwgPSBgXG4gICAgICAgICAgJHtkLm5hbWV9IGFuc3dlcmVkICR7ZC5kb2d9IWA7XG5cbiAgICAgICAgY2F0RGF0YS5hcHBlbmRDaGlsZChjYXRJdGVtKTtcbiAgICAgICAgZG9nRGF0YS5hcHBlbmRDaGlsZChkb2dJdGVtKTtcbiAgICAgIH0pO1xuICAgICAgY29uc29sZS5sb2coZGF0YSk7XG4gICAgfVxuICB9XG59XG5oYW5kbGVHRVQuaW5pdCgpO1xuXG5jb25zdCBoYW5kbGVQT1NUID0ge1xuICBpbml0ICgpIHtcbiAgICB0aGlzLmNhY2hlRE9NKCk7XG4gICAgdGhpcy5iaW5kRXZlbnRzKCk7XG4gIH0sXG4gIGNhY2hlRE9NICgpIHtcbiAgICB0aGlzLnBvc3REYXRhID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBvc3QtZGF0YScpO1xuICAgIHRoaXMubmFtZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduYW1lJyk7XG4gICAgdGhpcy5lbWFpbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdlbWFpbCcpO1xuICAgIHRoaXMucGhvbmUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGhvbmUnKTtcbiAgICB0aGlzLmFkZHJlc3MgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWRkcmVzcycpO1xuICAgIHRoaXMueWVzQ2F0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3llcy1jYXQnKTtcbiAgICB0aGlzLnllc0RvZyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd5ZXMtZG9nJyk7XG4gIH0sXG4gIGJpbmRFdmVudHMgKCkge1xuICAgIHRoaXMucG9zdERhdGEuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmhhbmRsZVNlbmQuYmluZCh0aGlzKSk7XG4gIH0sXG4gIGhhbmRsZVNlbmQgKCkge1xuICAgIGNvbnNvbGUubG9nKHZhbGlkYXRpb24uZXJyb3JzKTtcbiAgICBpZiAodmFsaWRhdGlvbi5lcnJvcnMgPT09IGZhbHNlKSB7XG4gICAgICB0aGlzLmhhbmRsZURhdGEoKTtcbiAgICAgIGNvbnN0IGRhdGEgPSB0aGlzLmRhdGE7XG5cbiAgICAgIGNvbnN0IHJlcXVlc3QgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcbiAgICAgIGNvbnN0IG1ldGhvZCA9ICdQT1NUJztcbiAgICAgIGNvbnN0IHVybCA9IGN1cnJlbnRVUkw7XG5cbiAgICAgIHJlcXVlc3Qub3BlbihtZXRob2QsIHVybCwgdHJ1ZSk7XG4gICAgICByZXF1ZXN0LnNldFJlcXVlc3RIZWFkZXIoJ0NvbnRlbnQtVHlwZScsICdhcHBsaWNhdGlvbi9qc29uOyBjaGFyc2V0PVVURi04Jyk7XG4gICAgICByZXF1ZXN0LnNlbmQoSlNPTi5zdHJpbmdpZnkoZGF0YSkpO1xuICAgIH1cbiAgfSxcbiAgaGFuZGxlRGF0YSAoKSB7XG4gICAgdGhpcy5kYXRhID0ge1xuICAgICAgbmFtZTogdGhpcy5uYW1lLnZhbHVlLFxuICAgICAgZW1haWw6IHRoaXMuZW1haWwudmFsdWUsXG4gICAgICBwaG9uZTogdGhpcy5waG9uZS52YWx1ZSxcbiAgICAgIGFkZHJlc3M6IHRoaXMuYWRkcmVzcy52YWx1ZSxcbiAgICAgIGNhdDogJ25vJyxcbiAgICAgIGRvZzogJ25vJ1xuICAgIH1cbiAgICBpZiAodGhpcy55ZXNDYXQuY2hlY2tlZCkge1xuICAgICAgdGhpcy5kYXRhLmNhdCA9ICd5ZXMnO1xuICAgIH1cbiAgICBpZiAodGhpcy55ZXNEb2cuY2hlY2tlZCkge1xuICAgICAgdGhpcy5kYXRhLmRvZyA9ICd5ZXMnO1xuICAgIH1cbiAgfVxufVxuaGFuZGxlUE9TVC5pbml0KCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9qcy9oYW5kbGVSZXF1ZXN0cy5qcyJdLCJzb3VyY2VSb290IjoiIn0=