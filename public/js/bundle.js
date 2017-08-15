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
	    regex: '^[a-zA-Z0-9.!#$%&\'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$',
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
	  errors: false,
	  validate: function validate(required) {
	    required.map(function (input, index) {
	      var after = input.nextSibling;
	      var errorMessage = after.nextSibling;
	
	      if (input.value === '' || validation.errors === true) {
	        event.preventDefault();
	        return;
	      } else if (input.value.match(_formData2.default.data[index].regex)) {
	        errorMessage.textContent = '✅';
	        errorMessage.classList.remove('input-fail');
	        errorMessage.classList.add('input-success');
	        validation.errors = false;
	      } else {
	        errorMessage.textContent = _formData2.default.data[index].error;
	        errorMessage.classList.remove('input-success');
	        errorMessage.classList.add('input-fail');
	        validation.errors = true;
	      }
	    }, this);
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
	    var url = 'http://form-component-api.herokuapp.com/api/v1/submissions';
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
	}; /*
	     Request data from API
	   */
	
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
	    this.handleData();
	    var data = this.data;
	
	    var request = new XMLHttpRequest();
	    var method = 'POST';
	    var url = 'http://form-component-api.herokuapp.com/api/v1/submissions';
	
	    request.open(method, url, true);
	    request.setRequestHeader('Content-Type', 'application/json; charset=UTF-8');
	    if (_validation2.default.errors === false) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgYWFkNGVkYzJlYWU5ZDlmNmE2NDciLCJ3ZWJwYWNrOi8vLy4vanMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vanMvZm9ybUNvbXBvbmVudC5qcyIsIndlYnBhY2s6Ly8vLi9qcy9oYW5kbGVycy9wbGFjZWhvbGRlcnMuanMiLCJ3ZWJwYWNrOi8vLy4vanMvZGF0YS9mb3JtLWRhdGEuanMiLCJ3ZWJwYWNrOi8vLy4vanMvaGFuZGxlcnMvdGVzdC1mb3ItZWxlbWVudC5qcyIsIndlYnBhY2s6Ly8vLi9qcy9oYW5kbGVycy92YWxpZGF0aW9uLmpzIiwid2VicGFjazovLy8uL2pzL2hhbmRsZVJlcXVlc3RzLmpzIl0sIm5hbWVzIjpbImZvcm1Db21wb25lbnQiLCJpbml0IiwiY2FjaGVET00iLCJiaW5kRXZlbnRzIiwicmVxdWlyZWQiLCJmb3JtIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwibmFtZSIsImVtYWlsIiwicGhvbmUiLCJhZGRyZXNzIiwibGl2ZVZhbGlkYXRpb24iLCJiaW5kIiwicGxhY2Vob2xkZXJzVG9nZ2xlIiwiZSIsInRhcmdldCIsInR5cGUiLCJwbGFjZWhvbGRlcnMiLCJtb2R1bGUiLCJleHBvcnRzIiwibWFwIiwiaW5wdXQiLCJpbmRleCIsInBsYWNlaG9sZGVyIiwiZGF0YSIsInRvZ2dsZSIsImV2ZW50IiwiZm9ybURhdGEiLCJyZWdleCIsImVycm9yIiwidGVzdCIsInRlc3RGb3JFbGVtZW50IiwiZWwiLCJldmVudFR5cGUiLCJtZXRob2QiLCJhZGRFdmVudExpc3RlbmVyIiwidmFsaWRhdGlvbiIsImVycm9ycyIsInZhbGlkYXRlIiwiYWZ0ZXIiLCJuZXh0U2libGluZyIsImVycm9yTWVzc2FnZSIsInZhbHVlIiwicHJldmVudERlZmF1bHQiLCJtYXRjaCIsInRleHRDb250ZW50IiwiY2xhc3NMaXN0IiwicmVtb3ZlIiwiYWRkIiwiaGFuZGxlR0VUIiwiZ2V0RGF0YSIsImNhdERhdGEiLCJnZXRFbGVtZW50QnlJZCIsImRvZ0RhdGEiLCJoYW5kbGVDYWxsIiwicmVxdWVzdCIsIlhNTEh0dHBSZXF1ZXN0IiwidXJsIiwib25yZWFkeXN0YXRlY2hhbmdlIiwicmVhZHlTdGF0ZSIsInN0YXR1cyIsIm9iaiIsIkpTT04iLCJwYXJzZSIsInJlc3BvbnNlVGV4dCIsImhhbmRsZVJlbmRlciIsIm9wZW4iLCJzZW5kIiwiY2F0SXRlbSIsImNyZWF0ZUVsZW1lbnQiLCJkb2dJdGVtIiwiaW5uZXJIVE1MIiwiZCIsImNhdCIsImRvZyIsImFwcGVuZENoaWxkIiwiY29uc29sZSIsImxvZyIsImhhbmRsZVBPU1QiLCJwb3N0RGF0YSIsInllc0NhdCIsInllc0RvZyIsImhhbmRsZVNlbmQiLCJoYW5kbGVEYXRhIiwic2V0UmVxdWVzdEhlYWRlciIsInN0cmluZ2lmeSIsImNoZWNrZWQiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1QkFBZTtBQUNmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDbENBOztBQUNBLHdCOzs7Ozs7OztBQ0RBOztBQUNBOztBQUNBOztBQUVBLEtBQU1BLGdCQUFnQjtBQUNwQkMsT0FEb0Isa0JBQ1o7QUFDTixVQUFLQyxRQUFMO0FBQ0EsVUFBS0MsVUFBTDtBQUNBLDZCQUFLLEtBQUtDLFFBQVY7QUFDRCxJQUxtQjtBQU1wQkYsV0FOb0Isc0JBTVI7QUFDVixVQUFLRyxJQUFMLEdBQVlDLFNBQVNDLGFBQVQsQ0FBdUIsT0FBdkIsQ0FBWjtBQUNBLFNBQU1DLE9BQU9GLFNBQVNDLGFBQVQsQ0FBdUIsT0FBdkIsQ0FBYjtBQUNBLFNBQU1FLFFBQVFILFNBQVNDLGFBQVQsQ0FBdUIsUUFBdkIsQ0FBZDtBQUNBLFNBQU1HLFFBQVFKLFNBQVND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O0FBQ0EsU0FBTXVCLE1BQU0sNERBQVo7O0FBRUFGLGFBQVFXLElBQVIsQ0FBYWhDLE1BQWIsRUFBcUJ1QixHQUFyQixFQUEwQixJQUExQjtBQUNBRixhQUFRNkIsZ0JBQVIsQ0FBeUIsY0FBekIsRUFBeUMsaUNBQXpDO0FBQ0EsU0FBSSxxQkFBVy9DLE1BQVgsS0FBc0IsS0FBMUIsRUFBaUM7QUFDL0JrQixlQUFRWSxJQUFSLENBQWFMLEtBQUt1QixTQUFMLENBQWU3RCxJQUFmLENBQWI7QUFDRDtBQUNGLElBOUJnQjtBQStCakIyRCxhQS9CaUIsd0JBK0JIO0FBQ1osVUFBSzNELElBQUwsR0FBWTtBQUNWakIsYUFBTSxLQUFLQSxJQUFMLENBQVVtQyxLQUROO0FBRVZsQyxjQUFPLEtBQUtBLEtBQUwsQ0FBV2tDLEtBRlI7QUFHVmpDLGNBQU8sS0FBS0EsS0FBTCxDQUFXaUMsS0FIUjtBQUlWaEMsZ0JBQVMsS0FBS0EsT0FBTCxDQUFhZ0MsS0FKWjtBQUtWK0IsWUFBSyxJQUxLO0FBTVZDLFlBQUs7QUFOSyxNQUFaO0FBUUEsU0FBSSxLQUFLTSxNQUFMLENBQVlNLE9BQWhCLEVBQXlCO0FBQ3ZCLFlBQUs5RCxJQUFMLENBQVVpRCxHQUFWLEdBQWdCLEtBQWhCO0FBQ0Q7QUFDRCxTQUFJLEtBQUtRLE1BQUwsQ0FBWUssT0FBaEIsRUFBeUI7QUFDdkIsWUFBSzlELElBQUwsQ0FBVWtELEdBQVYsR0FBZ0IsS0FBaEI7QUFDRDtBQUNGO0FBOUNnQixFQUFuQjtBQWdEQUksWUFBVzlFLElBQVgsRyIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0ZXhwb3J0czoge30sXG4gXHRcdFx0aWQ6IG1vZHVsZUlkLFxuIFx0XHRcdGxvYWRlZDogZmFsc2VcbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCBhYWQ0ZWRjMmVhZTlkOWY2YTY0NyIsIi8qXG4gIFdlYnBhY2sgZW50cnkgcG9pbnRcbiovXG5cbmltcG9ydCAnLi9mb3JtQ29tcG9uZW50JztcbmltcG9ydCAnLi9oYW5kbGVSZXF1ZXN0cyc7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9qcy9pbmRleC5qcyIsIi8qXG4gIGZvcm0gY29tcG9uZW50XG4qL1xuXG5pbXBvcnQgeyBpbml0LCB0b2dnbGUgfSBmcm9tICcuL2hhbmRsZXJzL3BsYWNlaG9sZGVycyc7XG5pbXBvcnQgeyB0ZXN0Rm9yRWxlbWVudCB9IGZyb20gJy4vaGFuZGxlcnMvdGVzdC1mb3ItZWxlbWVudCc7XG5pbXBvcnQgeyB2YWxpZGF0ZSB9IGZyb20gJy4vaGFuZGxlcnMvdmFsaWRhdGlvbic7XG5cbmNvbnN0IGZvcm1Db21wb25lbnQgPSB7XG4gIGluaXQgKCkge1xuICAgIHRoaXMuY2FjaGVET00oKTtcbiAgICB0aGlzLmJpbmRFdmVudHMoKTtcbiAgICBpbml0KHRoaXMucmVxdWlyZWQpO1xuICB9LFxuICBjYWNoZURPTSAoKSB7XG4gICAgdGhpcy5mb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZvcm0nKTtcbiAgICBjb25zdCBuYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI25hbWUnKTtcbiAgICBjb25zdCBlbWFpbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNlbWFpbCcpO1xuICAgIGNvbnN0IHBob25lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Bob25lJyk7XG4gICAgY29uc3QgYWRkcmVzcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNhZGRyZXNzJyk7XG4gICAgdGhpcy5yZXF1aXJlZCA9IFtcbiAgICAgIG5hbWUsIGVtYWlsLCBwaG9uZSwgYWRkcmVzc1xuICAgIF07XG4gIH0sXG4gIGJpbmRFdmVudHMgKCkge1xuICAgIC8vIHRlc3RGb3JFbGVtZW50IGZvdW5kIGluIGhhbmRsZXJzIGZvbGRlclxuICAgIHRlc3RGb3JFbGVtZW50KHRoaXMuZm9ybSwgJ2NsaWNrJywgdGhpcy5saXZlVmFsaWRhdGlvbi5iaW5kKHRoaXMpKTtcbiAgICB0ZXN0Rm9yRWxlbWVudCh0aGlzLmZvcm0sICdjbGljaycsIHRoaXMucGxhY2Vob2xkZXJzVG9nZ2xlLmJpbmQodGhpcykpO1xuICB9LFxuICBsaXZlVmFsaWRhdGlvbiAoZSkge1xuICAgIGlmIChlLnRhcmdldC50eXBlID09PSAncmFkaW8nKSB7XG4gICAgICByZXR1cm47XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhbGlkYXRlKHRoaXMucmVxdWlyZWQpO1xuICAgIH1cbiAgfSxcbiAgcGxhY2Vob2xkZXJzVG9nZ2xlIChlKSB7XG4gICAgdG9nZ2xlKHRoaXMucmVxdWlyZWQpO1xuICB9XG59XG5mb3JtQ29tcG9uZW50LmluaXQoKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2pzL2Zvcm1Db21wb25lbnQuanMiLCIvKlxuICBTZXQgaW5pdGlhbCBwbGFjZWhvbGRlcnMgZm9yIGlucHV0c1xuKi9cblxuaW1wb3J0IGZvcm1EYXRhIGZyb20gJy4uL2RhdGEvZm9ybS1kYXRhJztcblxudmFyIHBsYWNlaG9sZGVycyA9IG1vZHVsZS5leHBvcnRzID0ge1xuICAvLyBzZXQgaW5pdGlhbCBpbnB1dCBwbGFjZWhvbGRlciB2YWx1ZXNcbiAgaW5pdDogZnVuY3Rpb24gKHJlcXVpcmVkKSB7XG4gICAgcmVxdWlyZWQubWFwKGZ1bmN0aW9uIChpbnB1dCwgaW5kZXgpIHtcbiAgICAgIGlmIChpbnB1dCkge1xuICAgICAgICBpbnB1dC5wbGFjZWhvbGRlciA9IGZvcm1EYXRhLmRhdGFbaW5kZXhdLnBsYWNlaG9sZGVyO1xuICAgICAgfVxuICAgIH0sIHRoaXMpO1xuICB9LFxuICB0b2dnbGU6IGZ1bmN0aW9uIChyZXF1aXJlZCkge1xuICAgIHJlcXVpcmVkLm1hcChmdW5jdGlvbiAoaW5wdXQsIGluZGV4KSB7XG4gICAgICBpZiAoZXZlbnQudGFyZ2V0ICE9IGlucHV0KSB7XG4gICAgICAgIGlucHV0LnBsYWNlaG9sZGVyID0gZm9ybURhdGEuZGF0YVtpbmRleF0ucGxhY2Vob2xkZXI7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyB0b2dnbGUgaW5wdXQgcGxhY2Vob2xkZXIgdmFsdWUgdG8gYmxhbmsgb25seSB3aGVuIHVzZXIgc2VsZWN0cyBpbnB1dFxuICAgICAgICBpbnB1dC5wbGFjZWhvbGRlciA9ICcnO1xuICAgICAgfVxuICAgIH0sIHRoaXMpO1xuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9qcy9oYW5kbGVycy9wbGFjZWhvbGRlcnMuanMiLCIvKlxuICBGb3JtIGRhdGFcbiovXG5cbnZhciBmb3JtRGF0YSA9IG1vZHVsZS5leHBvcnRzID0ge1xuICBkYXRhOiBbXG4gICAge1xuICAgICAgcGxhY2Vob2xkZXI6ICdOYW1lJyxcbiAgICAgIHJlZ2V4OiAnW2EtekEtWl0rKChbXFwnLC4gLV1bYS16QS1aIF0pP1thLXpBLVpdKikqJCcsXG4gICAgICBlcnJvcjogJ1BsZWFzZSBlbnRlciBsZXR0ZXJzIG9ubHknXG4gICAgfSxcbiAgICB7XG4gICAgICBwbGFjZWhvbGRlcjogJ0VtYWlsJyxcbiAgICAgIHJlZ2V4OiAnXlthLXpBLVowLTkuISMkJSZcXCcqKy89P15fYHt8fX4tXStAW2EtekEtWjAtOV0oPzpbYS16QS1aMC05LV17MCw2MX1bYS16QS1aMC05XSk/KD86XFwuW2EtekEtWjAtOV0oPzpbYS16QS1aMC05LV17MCw2MX1bYS16QS1aMC05XSk/KSokJyxcbiAgICAgIGVycm9yOiAnUGxlYXNlIGVudGVyIGEgdmFsaWQgZW1haWwnXG4gICAgfSxcbiAgICB7XG4gICAgICBwbGFjZWhvbGRlcjogJ1Bob25lJyxcbiAgICAgIHJlZ2V4OiAnXlsyLTldezJ9WzAtOV17OH0kJyxcbiAgICAgIGVycm9yOiAnUGxlYXNlIGVudGVyIGEgMTAgZGlnaXQgcGhvbmUgbnVtYmVyJ1xuICAgIH0sXG4gICAge1xuICAgICAgcGxhY2Vob2xkZXI6ICdBZGRyZXNzJyxcbiAgICAgIHJlZ2V4OiAnXig/IVxccyokKS4rJyxcbiAgICAgIGVycm9yOiAnUGxlYXNlIGVudGVyIHlvdXIgYWRkcmVzcydcbiAgICB9XG4gIF1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2pzL2RhdGEvZm9ybS1kYXRhLmpzIiwiLypcbiAgQ3JlYXRlZCB0byBhdm9pZCBlcnJvcnMgaWYgdGhlIGVsZW1lbnQgaXMgbm90IHByZXNlbnQgaW4gdGhlIERPTVxuKi9cblxudmFyIHRlc3QgPSBtb2R1bGUuZXhwb3J0cyA9IHtcbiAgdGVzdEZvckVsZW1lbnQ6IGZ1bmN0aW9uIChlbCwgZXZlbnRUeXBlLCBtZXRob2QpIHtcbiAgICBpZiAoZWwpIHtcbiAgICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIoZXZlbnRUeXBlLCBtZXRob2QpO1xuICAgIH1cbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vanMvaGFuZGxlcnMvdGVzdC1mb3ItZWxlbWVudC5qcyIsIi8qXG4gIGZvcm1EYXRhIHVzZWQgdG8gbWF0Y2ggdXNlciBpbnB1dCBmb3IgdmFsaWRhdGlvblxuKi9cblxuaW1wb3J0IGZvcm1EYXRhIGZyb20gJy4uL2RhdGEvZm9ybS1kYXRhJztcblxudmFyIHZhbGlkYXRpb24gPSBtb2R1bGUuZXhwb3J0cyA9IHtcbiAgZXJyb3JzOiBmYWxzZSxcbiAgdmFsaWRhdGUgKHJlcXVpcmVkKSB7XG4gICAgcmVxdWlyZWQubWFwICgoaW5wdXQsIGluZGV4KSA9PiB7XG4gICAgICB2YXIgYWZ0ZXIgPSBpbnB1dC5uZXh0U2libGluZztcbiAgICAgIHZhciBlcnJvck1lc3NhZ2UgPSBhZnRlci5uZXh0U2libGluZztcblxuICAgICAgaWYgKGlucHV0LnZhbHVlID09PSAnJyB8fCB2YWxpZGF0aW9uLmVycm9ycyA9PT0gdHJ1ZSkge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9IGVsc2UgaWYgKGlucHV0LnZhbHVlLm1hdGNoKGZvcm1EYXRhLmRhdGFbaW5kZXhdLnJlZ2V4KSkge1xuICAgICAgICBlcnJvck1lc3NhZ2UudGV4dENvbnRlbnQgPSAn4pyFJztcbiAgICAgICAgZXJyb3JNZXNzYWdlLmNsYXNzTGlzdC5yZW1vdmUoJ2lucHV0LWZhaWwnKTtcbiAgICAgICAgZXJyb3JNZXNzYWdlLmNsYXNzTGlzdC5hZGQoJ2lucHV0LXN1Y2Nlc3MnKTtcbiAgICAgICAgdmFsaWRhdGlvbi5lcnJvcnMgPSBmYWxzZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGVycm9yTWVzc2FnZS50ZXh0Q29udGVudCA9IGZvcm1EYXRhLmRhdGFbaW5kZXhdLmVycm9yO1xuICAgICAgICBlcnJvck1lc3NhZ2UuY2xhc3NMaXN0LnJlbW92ZSgnaW5wdXQtc3VjY2VzcycpO1xuICAgICAgICBlcnJvck1lc3NhZ2UuY2xhc3NMaXN0LmFkZCgnaW5wdXQtZmFpbCcpO1xuICAgICAgICB2YWxpZGF0aW9uLmVycm9ycyA9IHRydWU7XG4gICAgICB9XG4gICAgfSwgdGhpcyk7XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2pzL2hhbmRsZXJzL3ZhbGlkYXRpb24uanMiLCIvKlxuICBSZXF1ZXN0IGRhdGEgZnJvbSBBUElcbiovXG5cbmltcG9ydCB2YWxpZGF0aW9uIGZyb20gJy4vaGFuZGxlcnMvdmFsaWRhdGlvbic7XG5cbmNvbnN0IGhhbmRsZUdFVCA9IHtcbiAgaW5pdCAoKSB7XG4gICAgdGhpcy5jYWNoZURPTSgpO1xuICAgIHRoaXMuYmluZEV2ZW50cygpO1xuICB9LFxuICBjYWNoZURPTSAoKSB7XG4gICAgdGhpcy5nZXREYXRhID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmdldC1kYXRhJyk7XG4gICAgdGhpcy5jYXREYXRhID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NhdC1kYXRhJyk7XG4gICAgdGhpcy5kb2dEYXRhID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RvZy1kYXRhJyk7XG4gIH0sXG4gIGJpbmRFdmVudHMgKCkge1xuICAgIHRoaXMuZ2V0RGF0YS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuaGFuZGxlQ2FsbC5iaW5kKHRoaXMpKTtcbiAgfSxcbiAgaGFuZGxlQ2FsbCAoKSB7XG4gICAgY29uc3QgcmVxdWVzdCA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xuICAgIGNvbnN0IG1ldGhvZCA9ICdHRVQnO1xuICAgIGNvbnN0IHVybCA9ICdodHRwOi8vZm9ybS1jb21wb25lbnQtYXBpLmhlcm9rdWFwcC5jb20vYXBpL3YxL3N1Ym1pc3Npb25zJztcbiAgICByZXF1ZXN0Lm9ucmVhZHlzdGF0ZWNoYW5nZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmICh0aGlzLnJlYWR5U3RhdGUgPT0gNCAmJiB0aGlzLnN0YXR1cyA9PSAyMDApIHtcbiAgICAgICAgY29uc3Qgb2JqID0gSlNPTi5wYXJzZSh0aGlzLnJlc3BvbnNlVGV4dCk7XG4gICAgICAgIGhhbmRsZUdFVC5oYW5kbGVSZW5kZXIob2JqKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmVxdWVzdC5vcGVuKG1ldGhvZCwgdXJsLCB0cnVlKTtcbiAgICByZXF1ZXN0LnNlbmQoKTtcbiAgfSxcbiAgaGFuZGxlUmVuZGVyIChkYXRhKSB7XG4gICAgY29uc3QgY2F0RGF0YSA9IHRoaXMuY2F0RGF0YTtcbiAgICBjb25zdCBkb2dEYXRhID0gdGhpcy5kb2dEYXRhO1xuXG4gICAgaWYgKGRhdGEpIHtcbiAgICAgIGRhdGEubWFwKGQgPT4ge1xuICAgICAgICBjb25zdCBjYXRJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICAgICAgY29uc3QgZG9nSXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG5cbiAgICAgICAgY2F0SXRlbS5pbm5lckhUTUwgPSBgXG4gICAgICAgICAgJHtkLm5hbWV9IGFuc3dlcmVkICR7ZC5jYXR9IWA7XG5cbiAgICAgICAgZG9nSXRlbS5pbm5lckhUTUwgPSBgXG4gICAgICAgICAgJHtkLm5hbWV9IGFuc3dlcmVkICR7ZC5kb2d9IWA7XG5cbiAgICAgICAgY2F0RGF0YS5hcHBlbmRDaGlsZChjYXRJdGVtKTtcbiAgICAgICAgZG9nRGF0YS5hcHBlbmRDaGlsZChkb2dJdGVtKTtcbiAgICAgIH0pO1xuICAgICAgY29uc29sZS5sb2coZGF0YSk7XG4gICAgfVxuICB9XG59XG5oYW5kbGVHRVQuaW5pdCgpO1xuXG5jb25zdCBoYW5kbGVQT1NUID0ge1xuICBpbml0ICgpIHtcbiAgICB0aGlzLmNhY2hlRE9NKCk7XG4gICAgdGhpcy5iaW5kRXZlbnRzKCk7XG4gIH0sXG4gIGNhY2hlRE9NICgpIHtcbiAgICB0aGlzLnBvc3REYXRhID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBvc3QtZGF0YScpO1xuICAgIHRoaXMubmFtZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduYW1lJyk7XG4gICAgdGhpcy5lbWFpbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdlbWFpbCcpO1xuICAgIHRoaXMucGhvbmUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGhvbmUnKTtcbiAgICB0aGlzLmFkZHJlc3MgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWRkcmVzcycpO1xuICAgIHRoaXMueWVzQ2F0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3llcy1jYXQnKTtcbiAgICB0aGlzLnllc0RvZyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd5ZXMtZG9nJyk7XG4gIH0sXG4gIGJpbmRFdmVudHMgKCkge1xuICAgIHRoaXMucG9zdERhdGEuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmhhbmRsZVNlbmQuYmluZCh0aGlzKSk7XG4gIH0sXG4gIGhhbmRsZVNlbmQgKCkge1xuICAgIHRoaXMuaGFuZGxlRGF0YSgpO1xuICAgIGNvbnN0IGRhdGEgPSB0aGlzLmRhdGE7XG5cbiAgICBjb25zdCByZXF1ZXN0ID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XG4gICAgY29uc3QgbWV0aG9kID0gJ1BPU1QnO1xuICAgIGNvbnN0IHVybCA9ICdodHRwOi8vZm9ybS1jb21wb25lbnQtYXBpLmhlcm9rdWFwcC5jb20vYXBpL3YxL3N1Ym1pc3Npb25zJztcblxuICAgIHJlcXVlc3Qub3BlbihtZXRob2QsIHVybCwgdHJ1ZSk7XG4gICAgcmVxdWVzdC5zZXRSZXF1ZXN0SGVhZGVyKCdDb250ZW50LVR5cGUnLCAnYXBwbGljYXRpb24vanNvbjsgY2hhcnNldD1VVEYtOCcpO1xuICAgIGlmICh2YWxpZGF0aW9uLmVycm9ycyA9PT0gZmFsc2UpIHtcbiAgICAgIHJlcXVlc3Quc2VuZChKU09OLnN0cmluZ2lmeShkYXRhKSk7XG4gICAgfVxuICB9LFxuICBoYW5kbGVEYXRhICgpIHtcbiAgICB0aGlzLmRhdGEgPSB7XG4gICAgICBuYW1lOiB0aGlzLm5hbWUudmFsdWUsXG4gICAgICBlbWFpbDogdGhpcy5lbWFpbC52YWx1ZSxcbiAgICAgIHBob25lOiB0aGlzLnBob25lLnZhbHVlLFxuICAgICAgYWRkcmVzczogdGhpcy5hZGRyZXNzLnZhbHVlLFxuICAgICAgY2F0OiAnbm8nLFxuICAgICAgZG9nOiAnbm8nXG4gICAgfVxuICAgIGlmICh0aGlzLnllc0NhdC5jaGVja2VkKSB7XG4gICAgICB0aGlzLmRhdGEuY2F0ID0gJ3llcyc7XG4gICAgfVxuICAgIGlmICh0aGlzLnllc0RvZy5jaGVja2VkKSB7XG4gICAgICB0aGlzLmRhdGEuZG9nID0gJ3llcyc7XG4gICAgfVxuICB9XG59XG5oYW5kbGVQT1NULmluaXQoKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2pzL2hhbmRsZVJlcXVlc3RzLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==