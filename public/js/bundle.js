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
	    required.forEach(function (input, index) {
	      if (input) {
	        input.placeholder = _formData2.default.data[index].placeholder;
	      }
	    }, this);
	  },
	  toggle: function toggle(required) {
	    required.forEach(function (input, index) {
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
	    required.forEach(function (input, index) {
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
	    this.getDataButton = document.querySelector('.get-data');
	  },
	  handleCall: function handleCall() {
	    var request = new XMLHttpRequest();
	    var method = 'GET';
	    var url = currentURL;
	
	    request.onreadystatechange = function () {
	      if (this.readyState == 4 && this.status == 200) {
	        var obj = JSON.parse(this.responseText);
	        // assign request data to local array
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
	
	    if (data.length !== 0) {
	      data.forEach(function (d) {
	        var catItem = document.createElement('li');
	        var dogItem = document.createElement('li');
	
	        catItem.innerHTML = '\n          ' + d.name + ' answered ' + d.cat + '!';
	
	        dogItem.innerHTML = '\n          ' + d.name + ' answered ' + d.dog + '!';
	
	        catData.appendChild(catItem);
	        dogData.appendChild(dogItem);
	      });
	
	      this.getDataButton.style.display = 'none';
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
	      // use local object to store request data
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgN2VlMDY2MzUyZTk1NWZhMTkxNzEiLCJ3ZWJwYWNrOi8vLy4vanMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vanMvZm9ybUNvbXBvbmVudC5qcyIsIndlYnBhY2s6Ly8vLi9qcy9oYW5kbGVycy9wbGFjZWhvbGRlcnMuanMiLCJ3ZWJwYWNrOi8vLy4vanMvZGF0YS9mb3JtLWRhdGEuanMiLCJ3ZWJwYWNrOi8vLy4vanMvaGFuZGxlcnMvdGVzdEZvckVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vanMvaGFuZGxlcnMvdmFsaWRhdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9qcy9oYW5kbGVycy9yZXF1ZXN0R0VULmpzIiwid2VicGFjazovLy8uL2pzL2hhbmRsZXJzL3JlcXVlc3RQT1NULmpzIl0sIm5hbWVzIjpbImZvcm1Db21wb25lbnQiLCJpbml0IiwiY2FjaGVET00iLCJiaW5kRXZlbnRzIiwicmVxdWlyZWQiLCJmb3JtIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiZ2V0RGF0YSIsInBvc3REYXRhIiwibmFtZSIsImVtYWlsIiwicGhvbmUiLCJhZGRyZXNzIiwic2VuZERhdGEiLCJiaW5kIiwiaGFuZGxlUmVuZGVyIiwibGl2ZVZhbGlkYXRpb24iLCJwbGFjZWhvbGRlcnNUb2dnbGUiLCJyZW5kZXIiLCJzZW5kIiwiZSIsInRhcmdldCIsInR5cGUiLCJwbGFjZWhvbGRlcnMiLCJtb2R1bGUiLCJleHBvcnRzIiwiZm9yRWFjaCIsImlucHV0IiwiaW5kZXgiLCJwbGFjZWhvbGRlciIsImRhdGEiLCJ0b2dnbGUiLCJldmVudCIsImZvcm1EYXRhIiwicmVnZXgiLCJlcnJvciIsInRlc3QiLCJ0ZXN0Rm9yRWxlbWVudCIsImVsIiwiZXZlbnRUeXBlIiwibWV0aG9kIiwiYWRkRXZlbnRMaXN0ZW5lciIsInZhbGlkYXRpb24iLCJlcnJvcnMiLCJ2YWxpZGF0ZSIsImFmdGVyIiwibmV4dFNpYmxpbmciLCJlcnJvck1lc3NhZ2UiLCJ2YWx1ZSIsIm1hdGNoIiwidGV4dENvbnRlbnQiLCJjbGFzc0xpc3QiLCJyZW1vdmUiLCJhZGQiLCJkYXRhc2V0IiwicHJldmVudERlZmF1bHQiLCJ0ZXN0RGF0YSIsImV2ZXJ5IiwiZGV2VVJMIiwicHJvZFVSTCIsImN1cnJlbnRVUkwiLCJoYW5kbGVHRVQiLCJoYW5kbGVDYWxsIiwiY2F0RGF0YSIsImdldEVsZW1lbnRCeUlkIiwiZG9nRGF0YSIsImdldERhdGFCdXR0b24iLCJyZXF1ZXN0IiwiWE1MSHR0cFJlcXVlc3QiLCJ1cmwiLCJvbnJlYWR5c3RhdGVjaGFuZ2UiLCJyZWFkeVN0YXRlIiwic3RhdHVzIiwib2JqIiwiSlNPTiIsInBhcnNlIiwicmVzcG9uc2VUZXh0IiwiY29uc29sZSIsImxvZyIsIm9wZW4iLCJsZW5ndGgiLCJjYXRJdGVtIiwiY3JlYXRlRWxlbWVudCIsImRvZ0l0ZW0iLCJpbm5lckhUTUwiLCJkIiwiY2F0IiwiZG9nIiwiYXBwZW5kQ2hpbGQiLCJzdHlsZSIsImRpc3BsYXkiLCJoYW5kbGVQT1NUIiwieWVzQ2F0IiwieWVzRG9nIiwiaGFuZGxlRGF0YSIsInNldFJlcXVlc3RIZWFkZXIiLCJzdHJpbmdpZnkiLCJjaGVja2VkIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdUJBQWU7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ2xDQTs7QUFDQTs7QUFDQSx3Qjs7Ozs7Ozs7QUNGQTs7QUFDQTs7QUFDQTs7QUFDQTs7OztBQUNBOzs7Ozs7QUFFQSxLQUFNQSxnQkFBZ0I7QUFDcEJDLE9BRG9CLGtCQUNaO0FBQ04sVUFBS0MsUUFBTDtBQUNBLFVBQUtDLFVBQUw7QUFDQSw2QkFBSyxLQUFLQyxRQUFWO0FBQ0QsSUFM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O0FBQ0EsV0FBTTVCLFNBQVMsTUFBZjtBQUNBLFdBQU02QixNQUFNVCxVQUFaOztBQUVBTyxlQUFRWSxJQUFSLENBQWF2QyxNQUFiLEVBQXFCNkIsR0FBckIsRUFBMEIsSUFBMUI7QUFDQUYsZUFBUTRCLGdCQUFSLENBQXlCLGNBQXpCLEVBQXlDLGlDQUF6QztBQUNBNUIsZUFBUWhELElBQVIsQ0FBYXVELEtBQUtzQixTQUFMLENBQWVsRSxJQUFmLENBQWI7QUFDRDtBQUNGLElBNUJpQztBQTZCbENnRSxhQTdCa0Msd0JBNkJwQjtBQUNaLFVBQUtoRSxJQUFMLEdBQVk7QUFDVnJCLGFBQU0sS0FBS0EsSUFBTCxDQUFVdUMsS0FETjtBQUVWdEMsY0FBTyxLQUFLQSxLQUFMLENBQVdzQyxLQUZSO0FBR1ZyQyxjQUFPLEtBQUtBLEtBQUwsQ0FBV3FDLEtBSFI7QUFJVnBDLGdCQUFTLEtBQUtBLE9BQUwsQ0FBYW9DLEtBSlo7QUFLVnNDLFlBQUssSUFMSztBQU1WQyxZQUFLO0FBTkssTUFBWjtBQVFBLFNBQUksS0FBS0ssTUFBTCxDQUFZSyxPQUFoQixFQUF5QjtBQUN2QixZQUFLbkUsSUFBTCxDQUFVd0QsR0FBVixHQUFnQixLQUFoQjtBQUNEO0FBQ0QsU0FBSSxLQUFLTyxNQUFMLENBQVlJLE9BQWhCLEVBQXlCO0FBQ3ZCLFlBQUtuRSxJQUFMLENBQVV5RCxHQUFWLEdBQWdCLEtBQWhCO0FBQ0Q7QUFDRjtBQTVDaUMsRUFBcEM7QUE4Q0FJLFlBQVczRixJQUFYLEciLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG5cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGV4cG9ydHM6IHt9LFxuIFx0XHRcdGlkOiBtb2R1bGVJZCxcbiBcdFx0XHRsb2FkZWQ6IGZhbHNlXG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmxvYWRlZCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oMCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgN2VlMDY2MzUyZTk1NWZhMTkxNzEiLCIvKlxuICBXZWJwYWNrIGVudHJ5IHBvaW50XG4qL1xuXG5pbXBvcnQgJy4vZm9ybUNvbXBvbmVudCc7XG5pbXBvcnQgJy4vaGFuZGxlcnMvcmVxdWVzdEdFVCc7XG5pbXBvcnQgJy4vaGFuZGxlcnMvcmVxdWVzdFBPU1QnO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vanMvaW5kZXguanMiLCIvKlxuICBmb3JtIGNvbXBvbmVudFxuKi9cblxuaW1wb3J0IHsgaW5pdCwgdG9nZ2xlIH0gZnJvbSAnLi9oYW5kbGVycy9wbGFjZWhvbGRlcnMnO1xuaW1wb3J0IHsgdGVzdEZvckVsZW1lbnQgfSBmcm9tICcuL2hhbmRsZXJzL3Rlc3RGb3JFbGVtZW50JztcbmltcG9ydCB7IHZhbGlkYXRlIH0gZnJvbSAnLi9oYW5kbGVycy92YWxpZGF0aW9uJztcbmltcG9ydCBoYW5kbGVHRVQgZnJvbSAnLi9oYW5kbGVycy9yZXF1ZXN0R0VUJztcbmltcG9ydCBoYW5kbGVQT1NUIGZyb20gJy4vaGFuZGxlcnMvcmVxdWVzdFBPU1QnO1xuXG5jb25zdCBmb3JtQ29tcG9uZW50ID0ge1xuICBpbml0ICgpIHtcbiAgICB0aGlzLmNhY2hlRE9NKCk7XG4gICAgdGhpcy5iaW5kRXZlbnRzKCk7XG4gICAgaW5pdCh0aGlzLnJlcXVpcmVkKTtcbiAgfSxcbiAgY2FjaGVET00gKCkge1xuICAgIHRoaXMuZm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mb3JtJyk7XG4gICAgdGhpcy5nZXREYXRhID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmdldC1kYXRhJyk7XG4gICAgdGhpcy5wb3N0RGF0YSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wb3N0LWRhdGEnKTtcbiAgICBjb25zdCBuYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI25hbWUnKTtcbiAgICBjb25zdCBlbWFpbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNlbWFpbCcpO1xuICAgIGNvbnN0IHBob25lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Bob25lJyk7XG4gICAgY29uc3QgYWRkcmVzcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNhZGRyZXNzJyk7XG4gICAgdGhpcy5yZXF1aXJlZCA9IFtcbiAgICAgIG5hbWUsIGVtYWlsLCBwaG9uZSwgYWRkcmVzc1xuICAgIF07XG4gIH0sXG4gIGJpbmRFdmVudHMgKCkge1xuICAgIC8vIHRlc3RGb3JFbGVtZW50IGZvdW5kIGluIGhhbmRsZXJzIGZvbGRlclxuICAgIHRlc3RGb3JFbGVtZW50KHRoaXMucG9zdERhdGEsICdjbGljaycsIHRoaXMuc2VuZERhdGEuYmluZCh0aGlzKSk7XG4gICAgdGVzdEZvckVsZW1lbnQodGhpcy5nZXREYXRhLCAnY2xpY2snLCB0aGlzLmhhbmRsZVJlbmRlci5iaW5kKHRoaXMpKTtcbiAgICB0ZXN0Rm9yRWxlbWVudCh0aGlzLmZvcm0sICdtb3VzZW92ZXInLCB0aGlzLmxpdmVWYWxpZGF0aW9uLmJpbmQodGhpcykpO1xuICAgIHRlc3RGb3JFbGVtZW50KHRoaXMuZm9ybSwgJ21vdXNlb3ZlcicsIHRoaXMucGxhY2Vob2xkZXJzVG9nZ2xlLmJpbmQodGhpcykpO1xuICB9LFxuICBoYW5kbGVSZW5kZXIgKCkge1xuICAgIGhhbmRsZUdFVC5yZW5kZXIoKTtcbiAgfSxcbiAgc2VuZERhdGEgKCkge1xuICAgIGhhbmRsZVBPU1Quc2VuZCgpO1xuICB9LFxuICBsaXZlVmFsaWRhdGlvbiAoZSkge1xuICAgIGlmIChlLnRhcmdldC50eXBlID09PSAncmFkaW8nKSB7XG4gICAgICByZXR1cm47XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhbGlkYXRlKHRoaXMucmVxdWlyZWQpO1xuICAgIH1cbiAgfSxcbiAgcGxhY2Vob2xkZXJzVG9nZ2xlIChlKSB7XG4gICAgdG9nZ2xlKHRoaXMucmVxdWlyZWQpO1xuICB9XG59XG5mb3JtQ29tcG9uZW50LmluaXQoKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2pzL2Zvcm1Db21wb25lbnQuanMiLCIvKlxuICBTZXQgaW5pdGlhbCBwbGFjZWhvbGRlcnMgZm9yIGlucHV0c1xuKi9cblxuaW1wb3J0IGZvcm1EYXRhIGZyb20gJy4uL2RhdGEvZm9ybS1kYXRhJztcblxuY29uc3QgcGxhY2Vob2xkZXJzID0gbW9kdWxlLmV4cG9ydHMgPSB7XG4gIC8vIHNldCBpbml0aWFsIGlucHV0IHBsYWNlaG9sZGVyIHZhbHVlc1xuICBpbml0IChyZXF1aXJlZCkge1xuICAgIHJlcXVpcmVkLmZvckVhY2goKGlucHV0LCBpbmRleCkgPT4ge1xuICAgICAgaWYgKGlucHV0KSB7XG4gICAgICAgIGlucHV0LnBsYWNlaG9sZGVyID0gZm9ybURhdGEuZGF0YVtpbmRleF0ucGxhY2Vob2xkZXI7XG4gICAgICB9XG4gICAgfSwgdGhpcyk7XG4gIH0sXG4gIHRvZ2dsZSAocmVxdWlyZWQpIHtcbiAgICByZXF1aXJlZC5mb3JFYWNoKChpbnB1dCwgaW5kZXgpID0+IHtcbiAgICAgIGlmIChldmVudC50YXJnZXQgIT0gaW5wdXQpIHtcbiAgICAgICAgaW5wdXQucGxhY2Vob2xkZXIgPSBmb3JtRGF0YS5kYXRhW2luZGV4XS5wbGFjZWhvbGRlcjtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIHRvZ2dsZSBpbnB1dCBwbGFjZWhvbGRlciB2YWx1ZSB0byBibGFuayBvbmx5IHdoZW4gdXNlciBzZWxlY3RzIGlucHV0XG4gICAgICAgIGlucHV0LnBsYWNlaG9sZGVyID0gJyc7XG4gICAgICB9XG4gICAgfSwgdGhpcyk7XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2pzL2hhbmRsZXJzL3BsYWNlaG9sZGVycy5qcyIsIi8qXG4gIEZvcm0gZGF0YVxuKi9cblxudmFyIGZvcm1EYXRhID0gbW9kdWxlLmV4cG9ydHMgPSB7XG4gIGRhdGE6IFtcbiAgICB7XG4gICAgICBwbGFjZWhvbGRlcjogJ05hbWUnLFxuICAgICAgcmVnZXg6ICdbYS16QS1aXSsoKFtcXCcsLiAtXVthLXpBLVogXSk/W2EtekEtWl0qKSokJyxcbiAgICAgIGVycm9yOiAnUGxlYXNlIGVudGVyIGxldHRlcnMgb25seSdcbiAgICB9LFxuICAgIHtcbiAgICAgIHBsYWNlaG9sZGVyOiAnRW1haWwnLFxuICAgICAgcmVnZXg6ICdeW2EtekEtWjAtOV0rQFthLXpBLVowLTktXSsoPzpcXC5bYS16QS1aMC05LV0rKSokJyxcbiAgICAgIGVycm9yOiAnUGxlYXNlIGVudGVyIGEgdmFsaWQgZW1haWwnXG4gICAgfSxcbiAgICB7XG4gICAgICBwbGFjZWhvbGRlcjogJ1Bob25lJyxcbiAgICAgIHJlZ2V4OiAnXlsyLTldezJ9WzAtOV17OH0kJyxcbiAgICAgIGVycm9yOiAnUGxlYXNlIGVudGVyIGEgMTAgZGlnaXQgcGhvbmUgbnVtYmVyJ1xuICAgIH0sXG4gICAge1xuICAgICAgcGxhY2Vob2xkZXI6ICdBZGRyZXNzJyxcbiAgICAgIHJlZ2V4OiAnXig/IVxccyokKS4rJyxcbiAgICAgIGVycm9yOiAnUGxlYXNlIGVudGVyIHlvdXIgYWRkcmVzcydcbiAgICB9XG4gIF1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2pzL2RhdGEvZm9ybS1kYXRhLmpzIiwiLypcbiAgQ3JlYXRlZCB0byBhdm9pZCBlcnJvcnMgaWYgdGhlIGVsZW1lbnQgaXMgbm90IHByZXNlbnQgaW4gdGhlIERPTVxuKi9cblxuY29uc3QgdGVzdCA9IG1vZHVsZS5leHBvcnRzID0ge1xuICB0ZXN0Rm9yRWxlbWVudCAoZWwsIGV2ZW50VHlwZSwgbWV0aG9kKSB7XG4gICAgaWYgKGVsKSB7XG4gICAgICBlbC5hZGRFdmVudExpc3RlbmVyKGV2ZW50VHlwZSwgbWV0aG9kKTtcbiAgICB9XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2pzL2hhbmRsZXJzL3Rlc3RGb3JFbGVtZW50LmpzIiwiLypcbiAgZm9ybURhdGEgdXNlZCB0byBtYXRjaCB1c2VyIGlucHV0IGZvciB2YWxpZGF0aW9uXG4qL1xuXG5pbXBvcnQgZm9ybURhdGEgZnJvbSAnLi4vZGF0YS9mb3JtLWRhdGEnO1xuXG5jb25zdCB2YWxpZGF0aW9uID0gbW9kdWxlLmV4cG9ydHMgPSB7XG4gIGVycm9yczogbnVsbCxcbiAgdmFsaWRhdGUgKHJlcXVpcmVkKSB7XG4gICAgcmVxdWlyZWQuZm9yRWFjaCAoKGlucHV0LCBpbmRleCkgPT4ge1xuICAgICAgdmFyIGFmdGVyID0gaW5wdXQubmV4dFNpYmxpbmc7XG4gICAgICB2YXIgZXJyb3JNZXNzYWdlID0gYWZ0ZXIubmV4dFNpYmxpbmc7XG5cbiAgICAgIGlmIChpbnB1dC52YWx1ZS5tYXRjaChmb3JtRGF0YS5kYXRhW2luZGV4XS5yZWdleCkpIHtcbiAgICAgICAgZXJyb3JNZXNzYWdlLnRleHRDb250ZW50ID0gJ+KchSc7XG4gICAgICAgIGVycm9yTWVzc2FnZS5jbGFzc0xpc3QucmVtb3ZlKCdpbnB1dC1mYWlsJyk7XG4gICAgICAgIGVycm9yTWVzc2FnZS5jbGFzc0xpc3QuYWRkKCdpbnB1dC1zdWNjZXNzJyk7XG4gICAgICAgIGlucHV0LmRhdGFzZXQuZXJyb3IgPSAnZmFsc2UnO1xuICAgICAgfSBlbHNlIGlmIChpbnB1dC52YWx1ZSA9PT0gJycpIHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGVycm9yTWVzc2FnZS50ZXh0Q29udGVudCA9IGZvcm1EYXRhLmRhdGFbaW5kZXhdLmVycm9yO1xuICAgICAgICBlcnJvck1lc3NhZ2UuY2xhc3NMaXN0LnJlbW92ZSgnaW5wdXQtc3VjY2VzcycpO1xuICAgICAgICBlcnJvck1lc3NhZ2UuY2xhc3NMaXN0LmFkZCgnaW5wdXQtZmFpbCcpO1xuICAgICAgICBpbnB1dC5kYXRhc2V0LmVycm9yID0gJ3RydWUnO1xuICAgICAgfVxuXG4gICAgICBpZiAodmFsaWRhdGlvbi5lcnJvcnMgIT0gZmFsc2UpIHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgIH1cbiAgICB9LCB0aGlzKTtcblxuICAgIGNvbnN0IHRlc3REYXRhID0gKGlucHV0KSA9PiB7XG4gICAgICByZXR1cm4gaW5wdXQuZGF0YXNldC5lcnJvciA9PT0gJ2ZhbHNlJztcbiAgICB9XG5cbiAgICByZXF1aXJlZC5ldmVyeSh0ZXN0RGF0YSkgPyB2YWxpZGF0aW9uLmVycm9ycyA9IGZhbHNlIDogdmFsaWRhdGlvbi5lcnJvcnMgPSB0cnVlO1xuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9qcy9oYW5kbGVycy92YWxpZGF0aW9uLmpzIiwiLypcbiAgUmVxdWVzdCBkYXRhIGZyb20gQVBJXG4qL1xuXG5jb25zdCBkZXZVUkwgPSAnaHR0cDovL2xvY2FsaG9zdDozMDAwL2FwaS92MS9zdWJtaXNzaW9ucyc7XG5jb25zdCBwcm9kVVJMID0gJ2h0dHBzOi8vZm9ybS1jb21wb25lbnQtYXBpLmhlcm9rdWFwcC5jb20vYXBpL3YxL3N1Ym1pc3Npb25zJztcblxuY29uc3QgY3VycmVudFVSTCA9IHByb2RVUkw7XG5cbmNvbnN0IGhhbmRsZUdFVCA9IG1vZHVsZS5leHBvcnRzID0ge1xuICBkYXRhOiBbXSxcbiAgaW5pdCAoKSB7XG4gICAgdGhpcy5jYWNoZURPTSgpO1xuICAgIHRoaXMuaGFuZGxlQ2FsbCgpO1xuICB9LFxuICBjYWNoZURPTSAoKSB7XG4gICAgdGhpcy5jYXREYXRhID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NhdC1kYXRhJyk7XG4gICAgdGhpcy5kb2dEYXRhID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RvZy1kYXRhJyk7XG4gICAgdGhpcy5nZXREYXRhQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmdldC1kYXRhJyk7XG4gIH0sXG4gIGhhbmRsZUNhbGwgKCkge1xuICAgIGNvbnN0IHJlcXVlc3QgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcbiAgICBjb25zdCBtZXRob2QgPSAnR0VUJztcbiAgICBjb25zdCB1cmwgPSBjdXJyZW50VVJMO1xuXG4gICAgcmVxdWVzdC5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgICBpZiAodGhpcy5yZWFkeVN0YXRlID09IDQgJiYgdGhpcy5zdGF0dXMgPT0gMjAwKSB7XG4gICAgICAgIGNvbnN0IG9iaiA9IEpTT04ucGFyc2UodGhpcy5yZXNwb25zZVRleHQpO1xuICAgICAgICAvLyBhc3NpZ24gcmVxdWVzdCBkYXRhIHRvIGxvY2FsIGFycmF5XG4gICAgICAgIGhhbmRsZUdFVC5kYXRhID0gb2JqO1xuICAgICAgICBjb25zb2xlLmxvZyhvYmopO1xuICAgICAgfVxuICAgIH1cbiAgICByZXF1ZXN0Lm9wZW4obWV0aG9kLCB1cmwsIHRydWUpO1xuICAgIHJlcXVlc3Quc2VuZCgpO1xuICB9LFxuICByZW5kZXIgKCkge1xuICAgIGNvbnN0IGRhdGEgPSB0aGlzLmRhdGE7XG4gICAgY29uc3QgY2F0RGF0YSA9IHRoaXMuY2F0RGF0YTtcbiAgICBjb25zdCBkb2dEYXRhID0gdGhpcy5kb2dEYXRhO1xuXG4gICAgaWYgKGRhdGEubGVuZ3RoICE9PSAwKSB7XG4gICAgICBkYXRhLmZvckVhY2goZCA9PiB7XG4gICAgICAgIGNvbnN0IGNhdEl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgICAgICBjb25zdCBkb2dJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcblxuICAgICAgICBjYXRJdGVtLmlubmVySFRNTCA9IGBcbiAgICAgICAgICAke2QubmFtZX0gYW5zd2VyZWQgJHtkLmNhdH0hYDtcblxuICAgICAgICBkb2dJdGVtLmlubmVySFRNTCA9IGBcbiAgICAgICAgICAke2QubmFtZX0gYW5zd2VyZWQgJHtkLmRvZ30hYDtcblxuICAgICAgICBjYXREYXRhLmFwcGVuZENoaWxkKGNhdEl0ZW0pO1xuICAgICAgICBkb2dEYXRhLmFwcGVuZENoaWxkKGRvZ0l0ZW0pO1xuICAgICAgfSk7XG5cbiAgICAgIHRoaXMuZ2V0RGF0YUJ1dHRvbi5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgIH1cbiAgfVxufVxuaGFuZGxlR0VULmluaXQoKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2pzL2hhbmRsZXJzL3JlcXVlc3RHRVQuanMiLCIvKlxuICBSZXF1ZXN0IGRhdGEgZnJvbSBBUElcbiovXG5cbmltcG9ydCB2YWxpZGF0aW9uIGZyb20gJy4vdmFsaWRhdGlvbic7XG5cbmNvbnN0IGRldlVSTCA9ICdodHRwOi8vbG9jYWxob3N0OjMwMDAvYXBpL3YxL3N1Ym1pc3Npb25zJztcbmNvbnN0IHByb2RVUkwgPSAnaHR0cHM6Ly9mb3JtLWNvbXBvbmVudC1hcGkuaGVyb2t1YXBwLmNvbS9hcGkvdjEvc3VibWlzc2lvbnMnO1xuXG5jb25zdCBjdXJyZW50VVJMID0gcHJvZFVSTDtcblxuY29uc3QgaGFuZGxlUE9TVCA9IG1vZHVsZS5leHBvcnRzID0ge1xuICBkYXRhOiB7fSxcbiAgaW5pdCAoKSB7XG4gICAgdGhpcy5jYWNoZURPTSgpO1xuICB9LFxuICBjYWNoZURPTSAoKSB7XG4gICAgdGhpcy5uYW1lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25hbWUnKTtcbiAgICB0aGlzLmVtYWlsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2VtYWlsJyk7XG4gICAgdGhpcy5waG9uZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwaG9uZScpO1xuICAgIHRoaXMuYWRkcmVzcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhZGRyZXNzJyk7XG4gICAgdGhpcy55ZXNDYXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgneWVzLWNhdCcpO1xuICAgIHRoaXMueWVzRG9nID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3llcy1kb2cnKTtcbiAgfSxcbiAgc2VuZCAoKSB7XG4gICAgaWYgKHZhbGlkYXRpb24uZXJyb3JzID09PSBmYWxzZSkge1xuICAgICAgY29uc29sZS5sb2codmFsaWRhdGlvbi5lcnJvcnMpO1xuICAgICAgdGhpcy5oYW5kbGVEYXRhKCk7XG4gICAgICAvLyB1c2UgbG9jYWwgb2JqZWN0IHRvIHN0b3JlIHJlcXVlc3QgZGF0YVxuICAgICAgY29uc3QgZGF0YSA9IHRoaXMuZGF0YTtcblxuICAgICAgY29uc3QgcmVxdWVzdCA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xuICAgICAgY29uc3QgbWV0aG9kID0gJ1BPU1QnO1xuICAgICAgY29uc3QgdXJsID0gY3VycmVudFVSTDtcblxuICAgICAgcmVxdWVzdC5vcGVuKG1ldGhvZCwgdXJsLCB0cnVlKTtcbiAgICAgIHJlcXVlc3Quc2V0UmVxdWVzdEhlYWRlcignQ29udGVudC1UeXBlJywgJ2FwcGxpY2F0aW9uL2pzb247IGNoYXJzZXQ9VVRGLTgnKTtcbiAgICAgIHJlcXVlc3Quc2VuZChKU09OLnN0cmluZ2lmeShkYXRhKSk7XG4gICAgfVxuICB9LFxuICBoYW5kbGVEYXRhICgpIHtcbiAgICB0aGlzLmRhdGEgPSB7XG4gICAgICBuYW1lOiB0aGlzLm5hbWUudmFsdWUsXG4gICAgICBlbWFpbDogdGhpcy5lbWFpbC52YWx1ZSxcbiAgICAgIHBob25lOiB0aGlzLnBob25lLnZhbHVlLFxuICAgICAgYWRkcmVzczogdGhpcy5hZGRyZXNzLnZhbHVlLFxuICAgICAgY2F0OiAnbm8nLFxuICAgICAgZG9nOiAnbm8nXG4gICAgfVxuICAgIGlmICh0aGlzLnllc0NhdC5jaGVja2VkKSB7XG4gICAgICB0aGlzLmRhdGEuY2F0ID0gJ3llcyc7XG4gICAgfVxuICAgIGlmICh0aGlzLnllc0RvZy5jaGVja2VkKSB7XG4gICAgICB0aGlzLmRhdGEuZG9nID0gJ3llcyc7XG4gICAgfVxuICB9XG59XG5oYW5kbGVQT1NULmluaXQoKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2pzL2hhbmRsZXJzL3JlcXVlc3RQT1NULmpzIl0sInNvdXJjZVJvb3QiOiIifQ==