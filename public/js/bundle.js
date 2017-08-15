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
	
	    required.every(testData) ? validation.errors === false : validation.errors === true;
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
	
	var handleGET = {
	  init: function init() {
	    this.cacheDOM();
	    this.bindEvents();
	  },
	  cacheDOM: function cacheDOM() {
	    this.getData = document.querySelector('.get-data');
	    this.catData = document.getElementById('cat-data');
	    this.dogData = document.getElementById('dog-data');
	  },
	  bindEvents: function bindEvents() {
	    this.getData.addEventListener('click', this.handleCall.bind(this));
	  },
	  handleCall: function handleCall() {
	    var request = new XMLHttpRequest();
	    var method = 'GET';
	    var url = prodURL;
	    request.onreadystatechange = function () {
	      if (this.readyState == 4 && this.status == 200) {
	        var obj = JSON.parse(this.responseText);
	        handleGET.handleRender(obj);
	      }
	    };
	    request.open(method, url, true);
	    request.send();
	  },
	  handleRender: function handleRender(data) {
	    var catData = this.catData;
	    var dogData = this.dogData;
	
	    if (data) {
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
	    if (_validation2.default.errors === false) {
	      this.handleData();
	      var data = this.data;
	
	      var request = new XMLHttpRequest();
	      var method = 'POST';
	      var url = prodURL;
	
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgZWY5ZDQ3NjdhYzhmYTEyNjY0NTQiLCJ3ZWJwYWNrOi8vLy4vanMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vanMvZm9ybUNvbXBvbmVudC5qcyIsIndlYnBhY2s6Ly8vLi9qcy9oYW5kbGVycy9wbGFjZWhvbGRlcnMuanMiLCJ3ZWJwYWNrOi8vLy4vanMvZGF0YS9mb3JtLWRhdGEuanMiLCJ3ZWJwYWNrOi8vLy4vanMvaGFuZGxlcnMvdGVzdC1mb3ItZWxlbWVudC5qcyIsIndlYnBhY2s6Ly8vLi9qcy9oYW5kbGVycy92YWxpZGF0aW9uLmpzIiwid2VicGFjazovLy8uL2pzL2hhbmRsZVJlcXVlc3RzLmpzIl0sIm5hbWVzIjpbImZvcm1Db21wb25lbnQiLCJpbml0IiwiY2FjaGVET00iLCJiaW5kRXZlbnRzIiwicmVxdWlyZWQiLCJmb3JtIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwibmFtZSIsImVtYWlsIiwicGhvbmUiLCJhZGRyZXNzIiwibGl2ZVZhbGlkYXRpb24iLCJiaW5kIiwicGxhY2Vob2xkZXJzVG9nZ2xlIiwiZSIsInRhcmdldCIsInR5cGUiLCJwbGFjZWhvbGRlcnMiLCJtb2R1bGUiLCJleHBvcnRzIiwibWFwIiwiaW5wdXQiLCJpbmRleCIsInBsYWNlaG9sZGVyIiwiZGF0YSIsInRvZ2dsZSIsImV2ZW50IiwiZm9ybURhdGEiLCJyZWdleCIsImVycm9yIiwidGVzdCIsInRlc3RGb3JFbGVtZW50IiwiZWwiLCJldmVudFR5cGUiLCJtZXRob2QiLCJhZGRFdmVudExpc3RlbmVyIiwidmFsaWRhdGlvbiIsImVycm9ycyIsInZhbGlkYXRlIiwiYWZ0ZXIiLCJuZXh0U2libGluZyIsImVycm9yTWVzc2FnZSIsInZhbHVlIiwibWF0Y2giLCJ0ZXh0Q29udGVudCIsImNsYXNzTGlzdCIsInJlbW92ZSIsImFkZCIsImRhdGFzZXQiLCJwcmV2ZW50RGVmYXVsdCIsInRlc3REYXRhIiwiZXZlcnkiLCJkZXZVUkwiLCJwcm9kVVJMIiwiaGFuZGxlR0VUIiwiZ2V0RGF0YSIsImNhdERhdGEiLCJnZXRFbGVtZW50QnlJZCIsImRvZ0RhdGEiLCJoYW5kbGVDYWxsIiwicmVxdWVzdCIsIlhNTEh0dHBSZXF1ZXN0IiwidXJsIiwib25yZWFkeXN0YXRlY2hhbmdlIiwicmVhZHlTdGF0ZSIsInN0YXR1cyIsIm9iaiIsIkpTT04iLCJwYXJzZSIsInJlc3BvbnNlVGV4dCIsImhhbmRsZVJlbmRlciIsIm9wZW4iLCJzZW5kIiwiY2F0SXRlbSIsImNyZWF0ZUVsZW1lbnQiLCJkb2dJdGVtIiwiaW5uZXJIVE1MIiwiZCIsImNhdCIsImRvZyIsImFwcGVuZENoaWxkIiwiY29uc29sZSIsImxvZyIsImhhbmRsZVBPU1QiLCJwb3N0RGF0YSIsInllc0NhdCIsInllc0RvZyIsImhhbmRsZVNlbmQiLCJoYW5kbGVEYXRhIiwic2V0UmVxdWVzdEhlYWRlciIsInN0cmluZ2lmeSIsImNoZWNrZWQiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1QkFBZTtBQUNmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDbENBOztBQUNBLHdCOzs7Ozs7OztBQ0RBOztBQUNBOztBQUNBOztBQUVBLEtBQU1BLGdCQUFnQjtBQUNwQkMsT0FEb0Isa0JBQ1o7QUFDTixVQUFLQyxRQUFMO0FBQ0EsVUFBS0MsVUFBTDtBQUNBLDZCQUFLLEtBQUtDLFFBQVY7QUFDRCxJQUxtQjtBQU1wQkYsV0FOb0Isc0JBTVI7QUFDVixVQUFLRyxJQUFMLEdBQVlDLFNBQVNDLGFBQVQsQ0FBdUIsT0FBdkIsQ0FBWjtBQUNBLFNBQU1DLE9BQU9GLFNBQVNDLGFBQVQsQ0FBdUIsT0FBdkIsQ0FBYjtBQUNBLFNBQU1FLFFBQVFILFNB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LEtBQUtRLE1BQUwsQ0FBWUssT0FBaEIsRUFBeUI7QUFDdkIsWUFBS25FLElBQUwsQ0FBVXVELEdBQVYsR0FBZ0IsS0FBaEI7QUFDRDtBQUNGO0FBOUNnQixFQUFuQjtBQWdEQUksWUFBV25GLElBQVgsRyIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0ZXhwb3J0czoge30sXG4gXHRcdFx0aWQ6IG1vZHVsZUlkLFxuIFx0XHRcdGxvYWRlZDogZmFsc2VcbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCBlZjlkNDc2N2FjOGZhMTI2NjQ1NCIsIi8qXG4gIFdlYnBhY2sgZW50cnkgcG9pbnRcbiovXG5cbmltcG9ydCAnLi9mb3JtQ29tcG9uZW50JztcbmltcG9ydCAnLi9oYW5kbGVSZXF1ZXN0cyc7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9qcy9pbmRleC5qcyIsIi8qXG4gIGZvcm0gY29tcG9uZW50XG4qL1xuXG5pbXBvcnQgeyBpbml0LCB0b2dnbGUgfSBmcm9tICcuL2hhbmRsZXJzL3BsYWNlaG9sZGVycyc7XG5pbXBvcnQgeyB0ZXN0Rm9yRWxlbWVudCB9IGZyb20gJy4vaGFuZGxlcnMvdGVzdC1mb3ItZWxlbWVudCc7XG5pbXBvcnQgeyB2YWxpZGF0ZSB9IGZyb20gJy4vaGFuZGxlcnMvdmFsaWRhdGlvbic7XG5cbmNvbnN0IGZvcm1Db21wb25lbnQgPSB7XG4gIGluaXQgKCkge1xuICAgIHRoaXMuY2FjaGVET00oKTtcbiAgICB0aGlzLmJpbmRFdmVudHMoKTtcbiAgICBpbml0KHRoaXMucmVxdWlyZWQpO1xuICB9LFxuICBjYWNoZURPTSAoKSB7XG4gICAgdGhpcy5mb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZvcm0nKTtcbiAgICBjb25zdCBuYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI25hbWUnKTtcbiAgICBjb25zdCBlbWFpbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNlbWFpbCcpO1xuICAgIGNvbnN0IHBob25lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Bob25lJyk7XG4gICAgY29uc3QgYWRkcmVzcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNhZGRyZXNzJyk7XG4gICAgdGhpcy5yZXF1aXJlZCA9IFtcbiAgICAgIG5hbWUsIGVtYWlsLCBwaG9uZSwgYWRkcmVzc1xuICAgIF07XG4gIH0sXG4gIGJpbmRFdmVudHMgKCkge1xuICAgIC8vIHRlc3RGb3JFbGVtZW50IGZvdW5kIGluIGhhbmRsZXJzIGZvbGRlclxuICAgIHRlc3RGb3JFbGVtZW50KHRoaXMuZm9ybSwgJ2NsaWNrJywgdGhpcy5saXZlVmFsaWRhdGlvbi5iaW5kKHRoaXMpKTtcbiAgICB0ZXN0Rm9yRWxlbWVudCh0aGlzLmZvcm0sICdjbGljaycsIHRoaXMucGxhY2Vob2xkZXJzVG9nZ2xlLmJpbmQodGhpcykpO1xuICB9LFxuICBsaXZlVmFsaWRhdGlvbiAoZSkge1xuICAgIGlmIChlLnRhcmdldC50eXBlID09PSAncmFkaW8nKSB7XG4gICAgICByZXR1cm47XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhbGlkYXRlKHRoaXMucmVxdWlyZWQpO1xuICAgIH1cbiAgfSxcbiAgcGxhY2Vob2xkZXJzVG9nZ2xlIChlKSB7XG4gICAgdG9nZ2xlKHRoaXMucmVxdWlyZWQpO1xuICB9XG59XG5mb3JtQ29tcG9uZW50LmluaXQoKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2pzL2Zvcm1Db21wb25lbnQuanMiLCIvKlxuICBTZXQgaW5pdGlhbCBwbGFjZWhvbGRlcnMgZm9yIGlucHV0c1xuKi9cblxuaW1wb3J0IGZvcm1EYXRhIGZyb20gJy4uL2RhdGEvZm9ybS1kYXRhJztcblxudmFyIHBsYWNlaG9sZGVycyA9IG1vZHVsZS5leHBvcnRzID0ge1xuICAvLyBzZXQgaW5pdGlhbCBpbnB1dCBwbGFjZWhvbGRlciB2YWx1ZXNcbiAgaW5pdCAocmVxdWlyZWQpIHtcbiAgICByZXF1aXJlZC5tYXAoKGlucHV0LCBpbmRleCkgPT4ge1xuICAgICAgaWYgKGlucHV0KSB7XG4gICAgICAgIGlucHV0LnBsYWNlaG9sZGVyID0gZm9ybURhdGEuZGF0YVtpbmRleF0ucGxhY2Vob2xkZXI7XG4gICAgICB9XG4gICAgfSwgdGhpcyk7XG4gIH0sXG4gIHRvZ2dsZSAocmVxdWlyZWQpIHtcbiAgICByZXF1aXJlZC5tYXAoKGlucHV0LCBpbmRleCkgPT4ge1xuICAgICAgaWYgKGV2ZW50LnRhcmdldCAhPSBpbnB1dCkge1xuICAgICAgICBpbnB1dC5wbGFjZWhvbGRlciA9IGZvcm1EYXRhLmRhdGFbaW5kZXhdLnBsYWNlaG9sZGVyO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gdG9nZ2xlIGlucHV0IHBsYWNlaG9sZGVyIHZhbHVlIHRvIGJsYW5rIG9ubHkgd2hlbiB1c2VyIHNlbGVjdHMgaW5wdXRcbiAgICAgICAgaW5wdXQucGxhY2Vob2xkZXIgPSAnJztcbiAgICAgIH1cbiAgICB9LCB0aGlzKTtcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vanMvaGFuZGxlcnMvcGxhY2Vob2xkZXJzLmpzIiwiLypcbiAgRm9ybSBkYXRhXG4qL1xuXG52YXIgZm9ybURhdGEgPSBtb2R1bGUuZXhwb3J0cyA9IHtcbiAgZGF0YTogW1xuICAgIHtcbiAgICAgIHBsYWNlaG9sZGVyOiAnTmFtZScsXG4gICAgICByZWdleDogJ1thLXpBLVpdKygoW1xcJywuIC1dW2EtekEtWiBdKT9bYS16QS1aXSopKiQnLFxuICAgICAgZXJyb3I6ICdQbGVhc2UgZW50ZXIgbGV0dGVycyBvbmx5J1xuICAgIH0sXG4gICAge1xuICAgICAgcGxhY2Vob2xkZXI6ICdFbWFpbCcsXG4gICAgICByZWdleDogJ15bYS16QS1aMC05XStAW2EtekEtWjAtOS1dKyg/OlxcLlthLXpBLVowLTktXSspKiQnLFxuICAgICAgZXJyb3I6ICdQbGVhc2UgZW50ZXIgYSB2YWxpZCBlbWFpbCdcbiAgICB9LFxuICAgIHtcbiAgICAgIHBsYWNlaG9sZGVyOiAnUGhvbmUnLFxuICAgICAgcmVnZXg6ICdeWzItOV17Mn1bMC05XXs4fSQnLFxuICAgICAgZXJyb3I6ICdQbGVhc2UgZW50ZXIgYSAxMCBkaWdpdCBwaG9uZSBudW1iZXInXG4gICAgfSxcbiAgICB7XG4gICAgICBwbGFjZWhvbGRlcjogJ0FkZHJlc3MnLFxuICAgICAgcmVnZXg6ICdeKD8hXFxzKiQpLisnLFxuICAgICAgZXJyb3I6ICdQbGVhc2UgZW50ZXIgeW91ciBhZGRyZXNzJ1xuICAgIH1cbiAgXVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vanMvZGF0YS9mb3JtLWRhdGEuanMiLCIvKlxuICBDcmVhdGVkIHRvIGF2b2lkIGVycm9ycyBpZiB0aGUgZWxlbWVudCBpcyBub3QgcHJlc2VudCBpbiB0aGUgRE9NXG4qL1xuXG52YXIgdGVzdCA9IG1vZHVsZS5leHBvcnRzID0ge1xuICB0ZXN0Rm9yRWxlbWVudCAoZWwsIGV2ZW50VHlwZSwgbWV0aG9kKSB7XG4gICAgaWYgKGVsKSB7XG4gICAgICBlbC5hZGRFdmVudExpc3RlbmVyKGV2ZW50VHlwZSwgbWV0aG9kKTtcbiAgICB9XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2pzL2hhbmRsZXJzL3Rlc3QtZm9yLWVsZW1lbnQuanMiLCIvKlxuICBmb3JtRGF0YSB1c2VkIHRvIG1hdGNoIHVzZXIgaW5wdXQgZm9yIHZhbGlkYXRpb25cbiovXG5cblxuaW1wb3J0IGZvcm1EYXRhIGZyb20gJy4uL2RhdGEvZm9ybS1kYXRhJztcblxudmFyIHZhbGlkYXRpb24gPSBtb2R1bGUuZXhwb3J0cyA9IHtcbiAgZXJyb3JzOiBudWxsLFxuICB2YWxpZGF0ZSAocmVxdWlyZWQpIHtcbiAgICByZXF1aXJlZC5tYXAgKChpbnB1dCwgaW5kZXgpID0+IHtcbiAgICAgIHZhciBhZnRlciA9IGlucHV0Lm5leHRTaWJsaW5nO1xuICAgICAgdmFyIGVycm9yTWVzc2FnZSA9IGFmdGVyLm5leHRTaWJsaW5nO1xuXG4gICAgICBpZiAoaW5wdXQudmFsdWUubWF0Y2goZm9ybURhdGEuZGF0YVtpbmRleF0ucmVnZXgpKSB7XG4gICAgICAgIGVycm9yTWVzc2FnZS50ZXh0Q29udGVudCA9ICfinIUnO1xuICAgICAgICBlcnJvck1lc3NhZ2UuY2xhc3NMaXN0LnJlbW92ZSgnaW5wdXQtZmFpbCcpO1xuICAgICAgICBlcnJvck1lc3NhZ2UuY2xhc3NMaXN0LmFkZCgnaW5wdXQtc3VjY2VzcycpO1xuICAgICAgICBpbnB1dC5kYXRhc2V0LmVycm9yID0gJ2ZhbHNlJztcbiAgICAgIH0gZWxzZSBpZiAoaW5wdXQudmFsdWUgPT09ICcnKSB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBlcnJvck1lc3NhZ2UudGV4dENvbnRlbnQgPSBmb3JtRGF0YS5kYXRhW2luZGV4XS5lcnJvcjtcbiAgICAgICAgZXJyb3JNZXNzYWdlLmNsYXNzTGlzdC5yZW1vdmUoJ2lucHV0LXN1Y2Nlc3MnKTtcbiAgICAgICAgZXJyb3JNZXNzYWdlLmNsYXNzTGlzdC5hZGQoJ2lucHV0LWZhaWwnKTtcbiAgICAgICAgaW5wdXQuZGF0YXNldC5lcnJvciA9ICd0cnVlJztcbiAgICAgIH1cblxuICAgICAgaWYgKHZhbGlkYXRpb24uZXJyb3JzICE9IGZhbHNlKSB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICB9XG4gICAgfSwgdGhpcyk7XG5cbiAgICBjb25zdCB0ZXN0RGF0YSA9IChpbnB1dCkgPT4ge1xuICAgICAgcmV0dXJuIGlucHV0LmRhdGFzZXQuZXJyb3IgPT09ICdmYWxzZSc7XG4gICAgfVxuXG4gICAgcmVxdWlyZWQuZXZlcnkodGVzdERhdGEpID8gdmFsaWRhdGlvbi5lcnJvcnMgPT09IGZhbHNlIDogdmFsaWRhdGlvbi5lcnJvcnMgPT09IHRydWU7XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2pzL2hhbmRsZXJzL3ZhbGlkYXRpb24uanMiLCIvKlxuICBSZXF1ZXN0IGRhdGEgZnJvbSBBUElcbiovXG5cbmltcG9ydCB2YWxpZGF0aW9uIGZyb20gJy4vaGFuZGxlcnMvdmFsaWRhdGlvbic7XG5cbmNvbnN0IGRldlVSTCA9ICdodHRwOi8vbG9jYWxob3N0OjMwMDAvYXBpL3YxL3N1Ym1pc3Npb25zJztcbmNvbnN0IHByb2RVUkwgPSAnaHR0cHM6Ly9mb3JtLWNvbXBvbmVudC1hcGkuaGVyb2t1YXBwLmNvbS9hcGkvdjEvc3VibWlzc2lvbnMnO1xuXG5jb25zdCBoYW5kbGVHRVQgPSB7XG4gIGluaXQgKCkge1xuICAgIHRoaXMuY2FjaGVET00oKTtcbiAgICB0aGlzLmJpbmRFdmVudHMoKTtcbiAgfSxcbiAgY2FjaGVET00gKCkge1xuICAgIHRoaXMuZ2V0RGF0YSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5nZXQtZGF0YScpO1xuICAgIHRoaXMuY2F0RGF0YSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjYXQtZGF0YScpO1xuICAgIHRoaXMuZG9nRGF0YSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkb2ctZGF0YScpO1xuICB9LFxuICBiaW5kRXZlbnRzICgpIHtcbiAgICB0aGlzLmdldERhdGEuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmhhbmRsZUNhbGwuYmluZCh0aGlzKSk7XG4gIH0sXG4gIGhhbmRsZUNhbGwgKCkge1xuICAgIGNvbnN0IHJlcXVlc3QgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcbiAgICBjb25zdCBtZXRob2QgPSAnR0VUJztcbiAgICBjb25zdCB1cmwgPSBwcm9kVVJMO1xuICAgIHJlcXVlc3Qub25yZWFkeXN0YXRlY2hhbmdlID0gZnVuY3Rpb24gKCkge1xuICAgICAgaWYgKHRoaXMucmVhZHlTdGF0ZSA9PSA0ICYmIHRoaXMuc3RhdHVzID09IDIwMCkge1xuICAgICAgICBjb25zdCBvYmogPSBKU09OLnBhcnNlKHRoaXMucmVzcG9uc2VUZXh0KTtcbiAgICAgICAgaGFuZGxlR0VULmhhbmRsZVJlbmRlcihvYmopO1xuICAgICAgfVxuICAgIH1cbiAgICByZXF1ZXN0Lm9wZW4obWV0aG9kLCB1cmwsIHRydWUpO1xuICAgIHJlcXVlc3Quc2VuZCgpO1xuICB9LFxuICBoYW5kbGVSZW5kZXIgKGRhdGEpIHtcbiAgICBjb25zdCBjYXREYXRhID0gdGhpcy5jYXREYXRhO1xuICAgIGNvbnN0IGRvZ0RhdGEgPSB0aGlzLmRvZ0RhdGE7XG5cbiAgICBpZiAoZGF0YSkge1xuICAgICAgZGF0YS5tYXAoZCA9PiB7XG4gICAgICAgIGNvbnN0IGNhdEl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgICAgICBjb25zdCBkb2dJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcblxuICAgICAgICBjYXRJdGVtLmlubmVySFRNTCA9IGBcbiAgICAgICAgICAke2QubmFtZX0gYW5zd2VyZWQgJHtkLmNhdH0hYDtcblxuICAgICAgICBkb2dJdGVtLmlubmVySFRNTCA9IGBcbiAgICAgICAgICAke2QubmFtZX0gYW5zd2VyZWQgJHtkLmRvZ30hYDtcblxuICAgICAgICBjYXREYXRhLmFwcGVuZENoaWxkKGNhdEl0ZW0pO1xuICAgICAgICBkb2dEYXRhLmFwcGVuZENoaWxkKGRvZ0l0ZW0pO1xuICAgICAgfSk7XG4gICAgICBjb25zb2xlLmxvZyhkYXRhKTtcbiAgICB9XG4gIH1cbn1cbmhhbmRsZUdFVC5pbml0KCk7XG5cbmNvbnN0IGhhbmRsZVBPU1QgPSB7XG4gIGluaXQgKCkge1xuICAgIHRoaXMuY2FjaGVET00oKTtcbiAgICB0aGlzLmJpbmRFdmVudHMoKTtcbiAgfSxcbiAgY2FjaGVET00gKCkge1xuICAgIHRoaXMucG9zdERhdGEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucG9zdC1kYXRhJyk7XG4gICAgdGhpcy5uYW1lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25hbWUnKTtcbiAgICB0aGlzLmVtYWlsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2VtYWlsJyk7XG4gICAgdGhpcy5waG9uZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwaG9uZScpO1xuICAgIHRoaXMuYWRkcmVzcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhZGRyZXNzJyk7XG4gICAgdGhpcy55ZXNDYXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgneWVzLWNhdCcpO1xuICAgIHRoaXMueWVzRG9nID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3llcy1kb2cnKTtcbiAgfSxcbiAgYmluZEV2ZW50cyAoKSB7XG4gICAgdGhpcy5wb3N0RGF0YS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuaGFuZGxlU2VuZC5iaW5kKHRoaXMpKTtcbiAgfSxcbiAgaGFuZGxlU2VuZCAoKSB7XG4gICAgaWYgKHZhbGlkYXRpb24uZXJyb3JzID09PSBmYWxzZSkge1xuICAgICAgdGhpcy5oYW5kbGVEYXRhKCk7XG4gICAgICBjb25zdCBkYXRhID0gdGhpcy5kYXRhO1xuXG4gICAgICBjb25zdCByZXF1ZXN0ID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XG4gICAgICBjb25zdCBtZXRob2QgPSAnUE9TVCc7XG4gICAgICBjb25zdCB1cmwgPSBwcm9kVVJMO1xuXG4gICAgICByZXF1ZXN0Lm9wZW4obWV0aG9kLCB1cmwsIHRydWUpO1xuICAgICAgcmVxdWVzdC5zZXRSZXF1ZXN0SGVhZGVyKCdDb250ZW50LVR5cGUnLCAnYXBwbGljYXRpb24vanNvbjsgY2hhcnNldD1VVEYtOCcpO1xuICAgICAgcmVxdWVzdC5zZW5kKEpTT04uc3RyaW5naWZ5KGRhdGEpKTtcbiAgICB9XG4gIH0sXG4gIGhhbmRsZURhdGEgKCkge1xuICAgIHRoaXMuZGF0YSA9IHtcbiAgICAgIG5hbWU6IHRoaXMubmFtZS52YWx1ZSxcbiAgICAgIGVtYWlsOiB0aGlzLmVtYWlsLnZhbHVlLFxuICAgICAgcGhvbmU6IHRoaXMucGhvbmUudmFsdWUsXG4gICAgICBhZGRyZXNzOiB0aGlzLmFkZHJlc3MudmFsdWUsXG4gICAgICBjYXQ6ICdubycsXG4gICAgICBkb2c6ICdubydcbiAgICB9XG4gICAgaWYgKHRoaXMueWVzQ2F0LmNoZWNrZWQpIHtcbiAgICAgIHRoaXMuZGF0YS5jYXQgPSAneWVzJztcbiAgICB9XG4gICAgaWYgKHRoaXMueWVzRG9nLmNoZWNrZWQpIHtcbiAgICAgIHRoaXMuZGF0YS5kb2cgPSAneWVzJztcbiAgICB9XG4gIH1cbn1cbmhhbmRsZVBPU1QuaW5pdCgpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vanMvaGFuZGxlUmVxdWVzdHMuanMiXSwic291cmNlUm9vdCI6IiJ9