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
	      data.map(function (d) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgN2U3NDg4MzI5YzkzYjU1MDM1YmMiLCJ3ZWJwYWNrOi8vLy4vanMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vanMvZm9ybUNvbXBvbmVudC5qcyIsIndlYnBhY2s6Ly8vLi9qcy9oYW5kbGVycy9wbGFjZWhvbGRlcnMuanMiLCJ3ZWJwYWNrOi8vLy4vanMvZGF0YS9mb3JtLWRhdGEuanMiLCJ3ZWJwYWNrOi8vLy4vanMvaGFuZGxlcnMvdGVzdEZvckVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vanMvaGFuZGxlcnMvdmFsaWRhdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9qcy9oYW5kbGVycy9yZXF1ZXN0R0VULmpzIiwid2VicGFjazovLy8uL2pzL2hhbmRsZXJzL3JlcXVlc3RQT1NULmpzIl0sIm5hbWVzIjpbImZvcm1Db21wb25lbnQiLCJpbml0IiwiY2FjaGVET00iLCJiaW5kRXZlbnRzIiwicmVxdWlyZWQiLCJmb3JtIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiZ2V0RGF0YSIsInBvc3REYXRhIiwibmFtZSIsImVtYWlsIiwicGhvbmUiLCJhZGRyZXNzIiwic2VuZERhdGEiLCJiaW5kIiwiaGFuZGxlUmVuZGVyIiwibGl2ZVZhbGlkYXRpb24iLCJwbGFjZWhvbGRlcnNUb2dnbGUiLCJyZW5kZXIiLCJzZW5kIiwiZSIsInRhcmdldCIsInR5cGUiLCJwbGFjZWhvbGRlcnMiLCJtb2R1bGUiLCJleHBvcnRzIiwibWFwIiwiaW5wdXQiLCJpbmRleCIsInBsYWNlaG9sZGVyIiwiZGF0YSIsInRvZ2dsZSIsImV2ZW50IiwiZm9ybURhdGEiLCJyZWdleCIsImVycm9yIiwidGVzdCIsInRlc3RGb3JFbGVtZW50IiwiZWwiLCJldmVudFR5cGUiLCJtZXRob2QiLCJhZGRFdmVudExpc3RlbmVyIiwidmFsaWRhdGlvbiIsImVycm9ycyIsInZhbGlkYXRlIiwiYWZ0ZXIiLCJuZXh0U2libGluZyIsImVycm9yTWVzc2FnZSIsInZhbHVlIiwibWF0Y2giLCJ0ZXh0Q29udGVudCIsImNsYXNzTGlzdCIsInJlbW92ZSIsImFkZCIsImRhdGFzZXQiLCJwcmV2ZW50RGVmYXVsdCIsInRlc3REYXRhIiwiZXZlcnkiLCJkZXZVUkwiLCJwcm9kVVJMIiwiY3VycmVudFVSTCIsImhhbmRsZUdFVCIsImhhbmRsZUNhbGwiLCJjYXREYXRhIiwiZ2V0RWxlbWVudEJ5SWQiLCJkb2dEYXRhIiwiZ2V0RGF0YUJ1dHRvbiIsInJlcXVlc3QiLCJYTUxIdHRwUmVxdWVzdCIsInVybCIsIm9ucmVhZHlzdGF0ZWNoYW5nZSIsInJlYWR5U3RhdGUiLCJzdGF0dXMiLCJvYmoiLCJKU09OIiwicGFyc2UiLCJyZXNwb25zZVRleHQiLCJjb25zb2xlIiwibG9nIiwib3BlbiIsImxlbmd0aCIsImNhdEl0ZW0iLCJjcmVhdGVFbGVtZW50IiwiZG9nSXRlbSIsImlubmVySFRNTCIsImQiLCJjYXQiLCJkb2ciLCJhcHBlbmRDaGlsZCIsInN0eWxlIiwiZGlzcGxheSIsImhhbmRsZVBPU1QiLCJ5ZXNDYXQiLCJ5ZXNEb2ciLCJoYW5kbGVEYXRhIiwic2V0UmVxdWVzdEhlYWRlciIsInN0cmluZ2lmeSIsImNoZWNrZWQiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1QkFBZTtBQUNmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDbENBOztBQUNBOztBQUNBLHdCOzs7Ozs7OztBQ0ZBOztBQUNBOztBQUNBOztBQUNBOzs7O0FBQ0E7Ozs7OztBQUVBLEtBQU1BLGdCQUFnQjtBQUNwQkMsT0FEb0Isa0JBQ1o7QUFDTixVQUFLQyxRQUFMO0FBQ0EsVUFBS0MsVUFBTDtBQUNBLDZCQUFLLEtBQUtDLFFBQVY7QUFDRCxJQUxtQjtB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QU01QixTQUFTLE1BQWY7QUFDQSxXQUFNNkIsTUFBTVQsVUFBWjs7QUFFQU8sZUFBUVksSUFBUixDQUFhdkMsTUFBYixFQUFxQjZCLEdBQXJCLEVBQTBCLElBQTFCO0FBQ0FGLGVBQVE0QixnQkFBUixDQUF5QixjQUF6QixFQUF5QyxpQ0FBekM7QUFDQTVCLGVBQVFoRCxJQUFSLENBQWF1RCxLQUFLc0IsU0FBTCxDQUFlbEUsSUFBZixDQUFiO0FBQ0Q7QUFDRixJQTVCaUM7QUE2QmxDZ0UsYUE3QmtDLHdCQTZCcEI7QUFDWixVQUFLaEUsSUFBTCxHQUFZO0FBQ1ZyQixhQUFNLEtBQUtBLElBQUwsQ0FBVXVDLEtBRE47QUFFVnRDLGNBQU8sS0FBS0EsS0FBTCxDQUFXc0MsS0FGUjtBQUdWckMsY0FBTyxLQUFLQSxLQUFMLENBQVdxQyxLQUhSO0FBSVZwQyxnQkFBUyxLQUFLQSxPQUFMLENBQWFvQyxLQUpaO0FBS1ZzQyxZQUFLLElBTEs7QUFNVkMsWUFBSztBQU5LLE1BQVo7QUFRQSxTQUFJLEtBQUtLLE1BQUwsQ0FBWUssT0FBaEIsRUFBeUI7QUFDdkIsWUFBS25FLElBQUwsQ0FBVXdELEdBQVYsR0FBZ0IsS0FBaEI7QUFDRDtBQUNELFNBQUksS0FBS08sTUFBTCxDQUFZSSxPQUFoQixFQUF5QjtBQUN2QixZQUFLbkUsSUFBTCxDQUFVeUQsR0FBVixHQUFnQixLQUFoQjtBQUNEO0FBQ0Y7QUE1Q2lDLEVBQXBDO0FBOENBSSxZQUFXM0YsSUFBWCxHIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKVxuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuXG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRleHBvcnRzOiB7fSxcbiBcdFx0XHRpZDogbW9kdWxlSWQsXG4gXHRcdFx0bG9hZGVkOiBmYWxzZVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sb2FkZWQgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIDdlNzQ4ODMyOWM5M2I1NTAzNWJjIiwiLypcbiAgV2VicGFjayBlbnRyeSBwb2ludFxuKi9cblxuaW1wb3J0ICcuL2Zvcm1Db21wb25lbnQnO1xuaW1wb3J0ICcuL2hhbmRsZXJzL3JlcXVlc3RHRVQnO1xuaW1wb3J0ICcuL2hhbmRsZXJzL3JlcXVlc3RQT1NUJztcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2pzL2luZGV4LmpzIiwiLypcbiAgZm9ybSBjb21wb25lbnRcbiovXG5cbmltcG9ydCB7IGluaXQsIHRvZ2dsZSB9IGZyb20gJy4vaGFuZGxlcnMvcGxhY2Vob2xkZXJzJztcbmltcG9ydCB7IHRlc3RGb3JFbGVtZW50IH0gZnJvbSAnLi9oYW5kbGVycy90ZXN0Rm9yRWxlbWVudCc7XG5pbXBvcnQgeyB2YWxpZGF0ZSB9IGZyb20gJy4vaGFuZGxlcnMvdmFsaWRhdGlvbic7XG5pbXBvcnQgaGFuZGxlR0VUIGZyb20gJy4vaGFuZGxlcnMvcmVxdWVzdEdFVCc7XG5pbXBvcnQgaGFuZGxlUE9TVCBmcm9tICcuL2hhbmRsZXJzL3JlcXVlc3RQT1NUJztcblxuY29uc3QgZm9ybUNvbXBvbmVudCA9IHtcbiAgaW5pdCAoKSB7XG4gICAgdGhpcy5jYWNoZURPTSgpO1xuICAgIHRoaXMuYmluZEV2ZW50cygpO1xuICAgIGluaXQodGhpcy5yZXF1aXJlZCk7XG4gIH0sXG4gIGNhY2hlRE9NICgpIHtcbiAgICB0aGlzLmZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZm9ybScpO1xuICAgIHRoaXMuZ2V0RGF0YSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5nZXQtZGF0YScpO1xuICAgIHRoaXMucG9zdERhdGEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucG9zdC1kYXRhJyk7XG4gICAgY29uc3QgbmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNuYW1lJyk7XG4gICAgY29uc3QgZW1haWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZW1haWwnKTtcbiAgICBjb25zdCBwaG9uZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwaG9uZScpO1xuICAgIGNvbnN0IGFkZHJlc3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYWRkcmVzcycpO1xuICAgIHRoaXMucmVxdWlyZWQgPSBbXG4gICAgICBuYW1lLCBlbWFpbCwgcGhvbmUsIGFkZHJlc3NcbiAgICBdO1xuICB9LFxuICBiaW5kRXZlbnRzICgpIHtcbiAgICAvLyB0ZXN0Rm9yRWxlbWVudCBmb3VuZCBpbiBoYW5kbGVycyBmb2xkZXJcbiAgICB0ZXN0Rm9yRWxlbWVudCh0aGlzLnBvc3REYXRhLCAnY2xpY2snLCB0aGlzLnNlbmREYXRhLmJpbmQodGhpcykpO1xuICAgIHRlc3RGb3JFbGVtZW50KHRoaXMuZ2V0RGF0YSwgJ2NsaWNrJywgdGhpcy5oYW5kbGVSZW5kZXIuYmluZCh0aGlzKSk7XG4gICAgdGVzdEZvckVsZW1lbnQodGhpcy5mb3JtLCAnbW91c2VvdmVyJywgdGhpcy5saXZlVmFsaWRhdGlvbi5iaW5kKHRoaXMpKTtcbiAgICB0ZXN0Rm9yRWxlbWVudCh0aGlzLmZvcm0sICdtb3VzZW92ZXInLCB0aGlzLnBsYWNlaG9sZGVyc1RvZ2dsZS5iaW5kKHRoaXMpKTtcbiAgfSxcbiAgaGFuZGxlUmVuZGVyICgpIHtcbiAgICBoYW5kbGVHRVQucmVuZGVyKCk7XG4gIH0sXG4gIHNlbmREYXRhICgpIHtcbiAgICBoYW5kbGVQT1NULnNlbmQoKTtcbiAgfSxcbiAgbGl2ZVZhbGlkYXRpb24gKGUpIHtcbiAgICBpZiAoZS50YXJnZXQudHlwZSA9PT0gJ3JhZGlvJykge1xuICAgICAgcmV0dXJuO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YWxpZGF0ZSh0aGlzLnJlcXVpcmVkKTtcbiAgICB9XG4gIH0sXG4gIHBsYWNlaG9sZGVyc1RvZ2dsZSAoZSkge1xuICAgIHRvZ2dsZSh0aGlzLnJlcXVpcmVkKTtcbiAgfVxufVxuZm9ybUNvbXBvbmVudC5pbml0KCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9qcy9mb3JtQ29tcG9uZW50LmpzIiwiLypcbiAgU2V0IGluaXRpYWwgcGxhY2Vob2xkZXJzIGZvciBpbnB1dHNcbiovXG5cbmltcG9ydCBmb3JtRGF0YSBmcm9tICcuLi9kYXRhL2Zvcm0tZGF0YSc7XG5cbmNvbnN0IHBsYWNlaG9sZGVycyA9IG1vZHVsZS5leHBvcnRzID0ge1xuICAvLyBzZXQgaW5pdGlhbCBpbnB1dCBwbGFjZWhvbGRlciB2YWx1ZXNcbiAgaW5pdCAocmVxdWlyZWQpIHtcbiAgICByZXF1aXJlZC5tYXAoKGlucHV0LCBpbmRleCkgPT4ge1xuICAgICAgaWYgKGlucHV0KSB7XG4gICAgICAgIGlucHV0LnBsYWNlaG9sZGVyID0gZm9ybURhdGEuZGF0YVtpbmRleF0ucGxhY2Vob2xkZXI7XG4gICAgICB9XG4gICAgfSwgdGhpcyk7XG4gIH0sXG4gIHRvZ2dsZSAocmVxdWlyZWQpIHtcbiAgICByZXF1aXJlZC5tYXAoKGlucHV0LCBpbmRleCkgPT4ge1xuICAgICAgaWYgKGV2ZW50LnRhcmdldCAhPSBpbnB1dCkge1xuICAgICAgICBpbnB1dC5wbGFjZWhvbGRlciA9IGZvcm1EYXRhLmRhdGFbaW5kZXhdLnBsYWNlaG9sZGVyO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gdG9nZ2xlIGlucHV0IHBsYWNlaG9sZGVyIHZhbHVlIHRvIGJsYW5rIG9ubHkgd2hlbiB1c2VyIHNlbGVjdHMgaW5wdXRcbiAgICAgICAgaW5wdXQucGxhY2Vob2xkZXIgPSAnJztcbiAgICAgIH1cbiAgICB9LCB0aGlzKTtcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vanMvaGFuZGxlcnMvcGxhY2Vob2xkZXJzLmpzIiwiLypcbiAgRm9ybSBkYXRhXG4qL1xuXG52YXIgZm9ybURhdGEgPSBtb2R1bGUuZXhwb3J0cyA9IHtcbiAgZGF0YTogW1xuICAgIHtcbiAgICAgIHBsYWNlaG9sZGVyOiAnTmFtZScsXG4gICAgICByZWdleDogJ1thLXpBLVpdKygoW1xcJywuIC1dW2EtekEtWiBdKT9bYS16QS1aXSopKiQnLFxuICAgICAgZXJyb3I6ICdQbGVhc2UgZW50ZXIgbGV0dGVycyBvbmx5J1xuICAgIH0sXG4gICAge1xuICAgICAgcGxhY2Vob2xkZXI6ICdFbWFpbCcsXG4gICAgICByZWdleDogJ15bYS16QS1aMC05XStAW2EtekEtWjAtOS1dKyg/OlxcLlthLXpBLVowLTktXSspKiQnLFxuICAgICAgZXJyb3I6ICdQbGVhc2UgZW50ZXIgYSB2YWxpZCBlbWFpbCdcbiAgICB9LFxuICAgIHtcbiAgICAgIHBsYWNlaG9sZGVyOiAnUGhvbmUnLFxuICAgICAgcmVnZXg6ICdeWzItOV17Mn1bMC05XXs4fSQnLFxuICAgICAgZXJyb3I6ICdQbGVhc2UgZW50ZXIgYSAxMCBkaWdpdCBwaG9uZSBudW1iZXInXG4gICAgfSxcbiAgICB7XG4gICAgICBwbGFjZWhvbGRlcjogJ0FkZHJlc3MnLFxuICAgICAgcmVnZXg6ICdeKD8hXFxzKiQpLisnLFxuICAgICAgZXJyb3I6ICdQbGVhc2UgZW50ZXIgeW91ciBhZGRyZXNzJ1xuICAgIH1cbiAgXVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vanMvZGF0YS9mb3JtLWRhdGEuanMiLCIvKlxuICBDcmVhdGVkIHRvIGF2b2lkIGVycm9ycyBpZiB0aGUgZWxlbWVudCBpcyBub3QgcHJlc2VudCBpbiB0aGUgRE9NXG4qL1xuXG5jb25zdCB0ZXN0ID0gbW9kdWxlLmV4cG9ydHMgPSB7XG4gIHRlc3RGb3JFbGVtZW50IChlbCwgZXZlbnRUeXBlLCBtZXRob2QpIHtcbiAgICBpZiAoZWwpIHtcbiAgICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIoZXZlbnRUeXBlLCBtZXRob2QpO1xuICAgIH1cbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vanMvaGFuZGxlcnMvdGVzdEZvckVsZW1lbnQuanMiLCIvKlxuICBmb3JtRGF0YSB1c2VkIHRvIG1hdGNoIHVzZXIgaW5wdXQgZm9yIHZhbGlkYXRpb25cbiovXG5cbmltcG9ydCBmb3JtRGF0YSBmcm9tICcuLi9kYXRhL2Zvcm0tZGF0YSc7XG5cbmNvbnN0IHZhbGlkYXRpb24gPSBtb2R1bGUuZXhwb3J0cyA9IHtcbiAgZXJyb3JzOiBudWxsLFxuICB2YWxpZGF0ZSAocmVxdWlyZWQpIHtcbiAgICByZXF1aXJlZC5tYXAgKChpbnB1dCwgaW5kZXgpID0+IHtcbiAgICAgIHZhciBhZnRlciA9IGlucHV0Lm5leHRTaWJsaW5nO1xuICAgICAgdmFyIGVycm9yTWVzc2FnZSA9IGFmdGVyLm5leHRTaWJsaW5nO1xuXG4gICAgICBpZiAoaW5wdXQudmFsdWUubWF0Y2goZm9ybURhdGEuZGF0YVtpbmRleF0ucmVnZXgpKSB7XG4gICAgICAgIGVycm9yTWVzc2FnZS50ZXh0Q29udGVudCA9ICfinIUnO1xuICAgICAgICBlcnJvck1lc3NhZ2UuY2xhc3NMaXN0LnJlbW92ZSgnaW5wdXQtZmFpbCcpO1xuICAgICAgICBlcnJvck1lc3NhZ2UuY2xhc3NMaXN0LmFkZCgnaW5wdXQtc3VjY2VzcycpO1xuICAgICAgICBpbnB1dC5kYXRhc2V0LmVycm9yID0gJ2ZhbHNlJztcbiAgICAgIH0gZWxzZSBpZiAoaW5wdXQudmFsdWUgPT09ICcnKSB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBlcnJvck1lc3NhZ2UudGV4dENvbnRlbnQgPSBmb3JtRGF0YS5kYXRhW2luZGV4XS5lcnJvcjtcbiAgICAgICAgZXJyb3JNZXNzYWdlLmNsYXNzTGlzdC5yZW1vdmUoJ2lucHV0LXN1Y2Nlc3MnKTtcbiAgICAgICAgZXJyb3JNZXNzYWdlLmNsYXNzTGlzdC5hZGQoJ2lucHV0LWZhaWwnKTtcbiAgICAgICAgaW5wdXQuZGF0YXNldC5lcnJvciA9ICd0cnVlJztcbiAgICAgIH1cblxuICAgICAgaWYgKHZhbGlkYXRpb24uZXJyb3JzICE9IGZhbHNlKSB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICB9XG4gICAgfSwgdGhpcyk7XG5cbiAgICBjb25zdCB0ZXN0RGF0YSA9IChpbnB1dCkgPT4ge1xuICAgICAgcmV0dXJuIGlucHV0LmRhdGFzZXQuZXJyb3IgPT09ICdmYWxzZSc7XG4gICAgfVxuXG4gICAgcmVxdWlyZWQuZXZlcnkodGVzdERhdGEpID8gdmFsaWRhdGlvbi5lcnJvcnMgPSBmYWxzZSA6IHZhbGlkYXRpb24uZXJyb3JzID0gdHJ1ZTtcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vanMvaGFuZGxlcnMvdmFsaWRhdGlvbi5qcyIsIi8qXG4gIFJlcXVlc3QgZGF0YSBmcm9tIEFQSVxuKi9cblxuY29uc3QgZGV2VVJMID0gJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9hcGkvdjEvc3VibWlzc2lvbnMnO1xuY29uc3QgcHJvZFVSTCA9ICdodHRwczovL2Zvcm0tY29tcG9uZW50LWFwaS5oZXJva3VhcHAuY29tL2FwaS92MS9zdWJtaXNzaW9ucyc7XG5cbmNvbnN0IGN1cnJlbnRVUkwgPSBwcm9kVVJMO1xuXG5jb25zdCBoYW5kbGVHRVQgPSBtb2R1bGUuZXhwb3J0cyA9IHtcbiAgZGF0YTogW10sXG4gIGluaXQgKCkge1xuICAgIHRoaXMuY2FjaGVET00oKTtcbiAgICB0aGlzLmhhbmRsZUNhbGwoKTtcbiAgfSxcbiAgY2FjaGVET00gKCkge1xuICAgIHRoaXMuY2F0RGF0YSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjYXQtZGF0YScpO1xuICAgIHRoaXMuZG9nRGF0YSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkb2ctZGF0YScpO1xuICAgIHRoaXMuZ2V0RGF0YUJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5nZXQtZGF0YScpO1xuICB9LFxuICBoYW5kbGVDYWxsICgpIHtcbiAgICBjb25zdCByZXF1ZXN0ID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XG4gICAgY29uc3QgbWV0aG9kID0gJ0dFVCc7XG4gICAgY29uc3QgdXJsID0gY3VycmVudFVSTDtcblxuICAgIHJlcXVlc3Qub25yZWFkeXN0YXRlY2hhbmdlID0gZnVuY3Rpb24gKCkge1xuICAgICAgaWYgKHRoaXMucmVhZHlTdGF0ZSA9PSA0ICYmIHRoaXMuc3RhdHVzID09IDIwMCkge1xuICAgICAgICBjb25zdCBvYmogPSBKU09OLnBhcnNlKHRoaXMucmVzcG9uc2VUZXh0KTtcbiAgICAgICAgLy8gYXNzaWduIHJlcXVlc3QgZGF0YSB0byBsb2NhbCBhcnJheVxuICAgICAgICBoYW5kbGVHRVQuZGF0YSA9IG9iajtcbiAgICAgICAgY29uc29sZS5sb2cob2JqKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmVxdWVzdC5vcGVuKG1ldGhvZCwgdXJsLCB0cnVlKTtcbiAgICByZXF1ZXN0LnNlbmQoKTtcbiAgfSxcbiAgcmVuZGVyICgpIHtcbiAgICBjb25zdCBkYXRhID0gdGhpcy5kYXRhO1xuICAgIGNvbnN0IGNhdERhdGEgPSB0aGlzLmNhdERhdGE7XG4gICAgY29uc3QgZG9nRGF0YSA9IHRoaXMuZG9nRGF0YTtcblxuICAgIGlmIChkYXRhLmxlbmd0aCAhPT0gMCkge1xuICAgICAgZGF0YS5tYXAoZCA9PiB7XG4gICAgICAgIGNvbnN0IGNhdEl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgICAgICBjb25zdCBkb2dJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcblxuICAgICAgICBjYXRJdGVtLmlubmVySFRNTCA9IGBcbiAgICAgICAgICAke2QubmFtZX0gYW5zd2VyZWQgJHtkLmNhdH0hYDtcblxuICAgICAgICBkb2dJdGVtLmlubmVySFRNTCA9IGBcbiAgICAgICAgICAke2QubmFtZX0gYW5zd2VyZWQgJHtkLmRvZ30hYDtcblxuICAgICAgICBjYXREYXRhLmFwcGVuZENoaWxkKGNhdEl0ZW0pO1xuICAgICAgICBkb2dEYXRhLmFwcGVuZENoaWxkKGRvZ0l0ZW0pO1xuICAgICAgfSk7XG5cbiAgICAgIHRoaXMuZ2V0RGF0YUJ1dHRvbi5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgIH1cbiAgfVxufVxuaGFuZGxlR0VULmluaXQoKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2pzL2hhbmRsZXJzL3JlcXVlc3RHRVQuanMiLCIvKlxuICBSZXF1ZXN0IGRhdGEgZnJvbSBBUElcbiovXG5cbmltcG9ydCB2YWxpZGF0aW9uIGZyb20gJy4vdmFsaWRhdGlvbic7XG5cbmNvbnN0IGRldlVSTCA9ICdodHRwOi8vbG9jYWxob3N0OjMwMDAvYXBpL3YxL3N1Ym1pc3Npb25zJztcbmNvbnN0IHByb2RVUkwgPSAnaHR0cHM6Ly9mb3JtLWNvbXBvbmVudC1hcGkuaGVyb2t1YXBwLmNvbS9hcGkvdjEvc3VibWlzc2lvbnMnO1xuXG5jb25zdCBjdXJyZW50VVJMID0gcHJvZFVSTDtcblxuY29uc3QgaGFuZGxlUE9TVCA9IG1vZHVsZS5leHBvcnRzID0ge1xuICBkYXRhOiB7fSxcbiAgaW5pdCAoKSB7XG4gICAgdGhpcy5jYWNoZURPTSgpO1xuICB9LFxuICBjYWNoZURPTSAoKSB7XG4gICAgdGhpcy5uYW1lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25hbWUnKTtcbiAgICB0aGlzLmVtYWlsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2VtYWlsJyk7XG4gICAgdGhpcy5waG9uZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwaG9uZScpO1xuICAgIHRoaXMuYWRkcmVzcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhZGRyZXNzJyk7XG4gICAgdGhpcy55ZXNDYXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgneWVzLWNhdCcpO1xuICAgIHRoaXMueWVzRG9nID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3llcy1kb2cnKTtcbiAgfSxcbiAgc2VuZCAoKSB7XG4gICAgaWYgKHZhbGlkYXRpb24uZXJyb3JzID09PSBmYWxzZSkge1xuICAgICAgY29uc29sZS5sb2codmFsaWRhdGlvbi5lcnJvcnMpO1xuICAgICAgdGhpcy5oYW5kbGVEYXRhKCk7XG4gICAgICAvLyB1c2UgbG9jYWwgb2JqZWN0IHRvIHN0b3JlIHJlcXVlc3QgZGF0YVxuICAgICAgY29uc3QgZGF0YSA9IHRoaXMuZGF0YTtcblxuICAgICAgY29uc3QgcmVxdWVzdCA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xuICAgICAgY29uc3QgbWV0aG9kID0gJ1BPU1QnO1xuICAgICAgY29uc3QgdXJsID0gY3VycmVudFVSTDtcblxuICAgICAgcmVxdWVzdC5vcGVuKG1ldGhvZCwgdXJsLCB0cnVlKTtcbiAgICAgIHJlcXVlc3Quc2V0UmVxdWVzdEhlYWRlcignQ29udGVudC1UeXBlJywgJ2FwcGxpY2F0aW9uL2pzb247IGNoYXJzZXQ9VVRGLTgnKTtcbiAgICAgIHJlcXVlc3Quc2VuZChKU09OLnN0cmluZ2lmeShkYXRhKSk7XG4gICAgfVxuICB9LFxuICBoYW5kbGVEYXRhICgpIHtcbiAgICB0aGlzLmRhdGEgPSB7XG4gICAgICBuYW1lOiB0aGlzLm5hbWUudmFsdWUsXG4gICAgICBlbWFpbDogdGhpcy5lbWFpbC52YWx1ZSxcbiAgICAgIHBob25lOiB0aGlzLnBob25lLnZhbHVlLFxuICAgICAgYWRkcmVzczogdGhpcy5hZGRyZXNzLnZhbHVlLFxuICAgICAgY2F0OiAnbm8nLFxuICAgICAgZG9nOiAnbm8nXG4gICAgfVxuICAgIGlmICh0aGlzLnllc0NhdC5jaGVja2VkKSB7XG4gICAgICB0aGlzLmRhdGEuY2F0ID0gJ3llcyc7XG4gICAgfVxuICAgIGlmICh0aGlzLnllc0RvZy5jaGVja2VkKSB7XG4gICAgICB0aGlzLmRhdGEuZG9nID0gJ3llcyc7XG4gICAgfVxuICB9XG59XG5oYW5kbGVQT1NULmluaXQoKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2pzL2hhbmRsZXJzL3JlcXVlc3RQT1NULmpzIl0sInNvdXJjZVJvb3QiOiIifQ==