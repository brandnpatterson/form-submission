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
	
	      if (input.value.match(_formData2.default.data[index].regex)) {
	        errorMessage.textContent = '✅';
	        errorMessage.classList.remove('input-fail');
	        errorMessage.classList.add('input-success');
	        validation.errors = false;
	        console.log(validation.errors);
	      } else if (input.value === '' || validation.errors === true) {
	        event.preventDefault();
	      } else {
	        errorMessage.textContent = _formData2.default.data[index].error;
	        errorMessage.classList.remove('input-success');
	        errorMessage.classList.add('input-fail');
	        validation.errors = true;
	        console.log(validation.errors);
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
	    var url = 'http://localhost:3000/api/v1/submissions';
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
	    if (_validation2.default.errors === false) {
	      this.handleData();
	      var data = this.data;
	
	      var request = new XMLHttpRequest();
	      var method = 'POST';
	      var url = 'http://localhost:3000/api/v1/submissions';
	
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgY2E2NTliZjg4ZTdjODQ4ZDFjZTIiLCJ3ZWJwYWNrOi8vLy4vanMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vanMvZm9ybUNvbXBvbmVudC5qcyIsIndlYnBhY2s6Ly8vLi9qcy9oYW5kbGVycy9wbGFjZWhvbGRlcnMuanMiLCJ3ZWJwYWNrOi8vLy4vanMvZGF0YS9mb3JtLWRhdGEuanMiLCJ3ZWJwYWNrOi8vLy4vanMvaGFuZGxlcnMvdGVzdC1mb3ItZWxlbWVudC5qcyIsIndlYnBhY2s6Ly8vLi9qcy9oYW5kbGVycy92YWxpZGF0aW9uLmpzIiwid2VicGFjazovLy8uL2pzL2hhbmRsZVJlcXVlc3RzLmpzIl0sIm5hbWVzIjpbImZvcm1Db21wb25lbnQiLCJpbml0IiwiY2FjaGVET00iLCJiaW5kRXZlbnRzIiwicmVxdWlyZWQiLCJmb3JtIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwibmFtZSIsImVtYWlsIiwicGhvbmUiLCJhZGRyZXNzIiwibGl2ZVZhbGlkYXRpb24iLCJiaW5kIiwicGxhY2Vob2xkZXJzVG9nZ2xlIiwiZSIsInRhcmdldCIsInR5cGUiLCJwbGFjZWhvbGRlcnMiLCJtb2R1bGUiLCJleHBvcnRzIiwibWFwIiwiaW5wdXQiLCJpbmRleCIsInBsYWNlaG9sZGVyIiwiZGF0YSIsInRvZ2dsZSIsImV2ZW50IiwiZm9ybURhdGEiLCJyZWdleCIsImVycm9yIiwidGVzdCIsInRlc3RGb3JFbGVtZW50IiwiZWwiLCJldmVudFR5cGUiLCJtZXRob2QiLCJhZGRFdmVudExpc3RlbmVyIiwidmFsaWRhdGlvbiIsImVycm9ycyIsInZhbGlkYXRlIiwiYWZ0ZXIiLCJuZXh0U2libGluZyIsImVycm9yTWVzc2FnZSIsInZhbHVlIiwibWF0Y2giLCJ0ZXh0Q29udGVudCIsImNsYXNzTGlzdCIsInJlbW92ZSIsImFkZCIsImNvbnNvbGUiLCJsb2ciLCJwcmV2ZW50RGVmYXVsdCIsImhhbmRsZUdFVCIsImdldERhdGEiLCJjYXREYXRhIiwiZ2V0RWxlbWVudEJ5SWQiLCJkb2dEYXRhIiwiaGFuZGxlQ2FsbCIsInJlcXVlc3QiLCJYTUxIdHRwUmVxdWVzdCIsInVybCIsIm9ucmVhZHlzdGF0ZWNoYW5nZSIsInJlYWR5U3RhdGUiLCJzdGF0dXMiLCJvYmoiLCJKU09OIiwicGFyc2UiLCJyZXNwb25zZVRleHQiLCJoYW5kbGVSZW5kZXIiLCJvcGVuIiwic2VuZCIsImNhdEl0ZW0iLCJjcmVhdGVFbGVtZW50IiwiZG9nSXRlbSIsImlubmVySFRNTCIsImQiLCJjYXQiLCJkb2ciLCJhcHBlbmRDaGlsZCIsImhhbmRsZVBPU1QiLCJwb3N0RGF0YSIsInllc0NhdCIsInllc0RvZyIsImhhbmRsZVNlbmQiLCJoYW5kbGVEYXRhIiwic2V0UmVxdWVzdEhlYWRlciIsInN0cmluZ2lmeSIsImNoZWNrZWQiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1QkFBZTtBQUNmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDbENBOztBQUNBLHdCOzs7Ozs7OztBQ0RBOztBQUNBOztBQUNBOztBQUVBLEtBQU1BLGdCQUFnQjtBQUNwQkMsT0FEb0Isa0JBQ1o7QUFDTixVQUFLQyxRQUFMO0FBQ0EsVUFBS0MsVUFBTDtBQUNBLDZCQUFLLEtBQUtDLFFBQVY7QUFDRCxJQUxtQjtBQU1wQkYsV0FOb0Isc0JBTVI7QUFDVixVQUFLRyxJQUFMLEdBQVlDLFNBQVNDLGFBQVQsQ0FBdUIsT0FBdkIsQ0FBWjtBQUNBLFNBQU1DLE9BQU9GLFNBQVNDLGFBQVQsQ0FBdUIsT0FBdkIsQ0FBYjtBQUNBLFNBQU1FLFFBQVFILFNBQVNDLGFBQVQsQ0FBdUIsUUFBdkIsQ0FBZDtBQUNBLFNBQU1HLFFBQVFKLFNBQVND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MUIsRUFBaUM7QUFDL0IsWUFBSzhDLFVBQUw7QUFDQSxXQUFNM0QsT0FBTyxLQUFLQSxJQUFsQjs7QUFFQSxXQUFNaUMsVUFBVSxJQUFJQyxjQUFKLEVBQWhCO0FBQ0EsV0FBTXhCLFNBQVMsTUFBZjtBQUNBLFdBQU15QixNQUFNLDBDQUFaOztBQUVBRixlQUFRVyxJQUFSLENBQWFsQyxNQUFiLEVBQXFCeUIsR0FBckIsRUFBMEIsSUFBMUI7QUFDQUYsZUFBUTJCLGdCQUFSLENBQXlCLGNBQXpCLEVBQXlDLGlDQUF6QztBQUNBM0IsZUFBUVksSUFBUixDQUFhTCxLQUFLcUIsU0FBTCxDQUFlN0QsSUFBZixDQUFiO0FBQ0Q7QUFDRixJQTlCZ0I7QUErQmpCMkQsYUEvQmlCLHdCQStCSDtBQUNaLFVBQUszRCxJQUFMLEdBQVk7QUFDVmpCLGFBQU0sS0FBS0EsSUFBTCxDQUFVbUMsS0FETjtBQUVWbEMsY0FBTyxLQUFLQSxLQUFMLENBQVdrQyxLQUZSO0FBR1ZqQyxjQUFPLEtBQUtBLEtBQUwsQ0FBV2lDLEtBSFI7QUFJVmhDLGdCQUFTLEtBQUtBLE9BQUwsQ0FBYWdDLEtBSlo7QUFLVmlDLFlBQUssSUFMSztBQU1WQyxZQUFLO0FBTkssTUFBWjtBQVFBLFNBQUksS0FBS0ksTUFBTCxDQUFZTSxPQUFoQixFQUF5QjtBQUN2QixZQUFLOUQsSUFBTCxDQUFVbUQsR0FBVixHQUFnQixLQUFoQjtBQUNEO0FBQ0QsU0FBSSxLQUFLTSxNQUFMLENBQVlLLE9BQWhCLEVBQXlCO0FBQ3ZCLFlBQUs5RCxJQUFMLENBQVVvRCxHQUFWLEdBQWdCLEtBQWhCO0FBQ0Q7QUFDRjtBQTlDZ0IsRUFBbkI7QUFnREFFLFlBQVc5RSxJQUFYLEciLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG5cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGV4cG9ydHM6IHt9LFxuIFx0XHRcdGlkOiBtb2R1bGVJZCxcbiBcdFx0XHRsb2FkZWQ6IGZhbHNlXG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmxvYWRlZCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oMCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgY2E2NTliZjg4ZTdjODQ4ZDFjZTIiLCIvKlxuICBXZWJwYWNrIGVudHJ5IHBvaW50XG4qL1xuXG5pbXBvcnQgJy4vZm9ybUNvbXBvbmVudCc7XG5pbXBvcnQgJy4vaGFuZGxlUmVxdWVzdHMnO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vanMvaW5kZXguanMiLCIvKlxuICBmb3JtIGNvbXBvbmVudFxuKi9cblxuaW1wb3J0IHsgaW5pdCwgdG9nZ2xlIH0gZnJvbSAnLi9oYW5kbGVycy9wbGFjZWhvbGRlcnMnO1xuaW1wb3J0IHsgdGVzdEZvckVsZW1lbnQgfSBmcm9tICcuL2hhbmRsZXJzL3Rlc3QtZm9yLWVsZW1lbnQnO1xuaW1wb3J0IHsgdmFsaWRhdGUgfSBmcm9tICcuL2hhbmRsZXJzL3ZhbGlkYXRpb24nO1xuXG5jb25zdCBmb3JtQ29tcG9uZW50ID0ge1xuICBpbml0ICgpIHtcbiAgICB0aGlzLmNhY2hlRE9NKCk7XG4gICAgdGhpcy5iaW5kRXZlbnRzKCk7XG4gICAgaW5pdCh0aGlzLnJlcXVpcmVkKTtcbiAgfSxcbiAgY2FjaGVET00gKCkge1xuICAgIHRoaXMuZm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mb3JtJyk7XG4gICAgY29uc3QgbmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNuYW1lJyk7XG4gICAgY29uc3QgZW1haWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZW1haWwnKTtcbiAgICBjb25zdCBwaG9uZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwaG9uZScpO1xuICAgIGNvbnN0IGFkZHJlc3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYWRkcmVzcycpO1xuICAgIHRoaXMucmVxdWlyZWQgPSBbXG4gICAgICBuYW1lLCBlbWFpbCwgcGhvbmUsIGFkZHJlc3NcbiAgICBdO1xuICB9LFxuICBiaW5kRXZlbnRzICgpIHtcbiAgICAvLyB0ZXN0Rm9yRWxlbWVudCBmb3VuZCBpbiBoYW5kbGVycyBmb2xkZXJcbiAgICB0ZXN0Rm9yRWxlbWVudCh0aGlzLmZvcm0sICdjbGljaycsIHRoaXMubGl2ZVZhbGlkYXRpb24uYmluZCh0aGlzKSk7XG4gICAgdGVzdEZvckVsZW1lbnQodGhpcy5mb3JtLCAnY2xpY2snLCB0aGlzLnBsYWNlaG9sZGVyc1RvZ2dsZS5iaW5kKHRoaXMpKTtcbiAgfSxcbiAgbGl2ZVZhbGlkYXRpb24gKGUpIHtcbiAgICBpZiAoZS50YXJnZXQudHlwZSA9PT0gJ3JhZGlvJykge1xuICAgICAgcmV0dXJuO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YWxpZGF0ZSh0aGlzLnJlcXVpcmVkKTtcbiAgICB9XG4gIH0sXG4gIHBsYWNlaG9sZGVyc1RvZ2dsZSAoZSkge1xuICAgIHRvZ2dsZSh0aGlzLnJlcXVpcmVkKTtcbiAgfVxufVxuZm9ybUNvbXBvbmVudC5pbml0KCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9qcy9mb3JtQ29tcG9uZW50LmpzIiwiLypcbiAgU2V0IGluaXRpYWwgcGxhY2Vob2xkZXJzIGZvciBpbnB1dHNcbiovXG5cbmltcG9ydCBmb3JtRGF0YSBmcm9tICcuLi9kYXRhL2Zvcm0tZGF0YSc7XG5cbnZhciBwbGFjZWhvbGRlcnMgPSBtb2R1bGUuZXhwb3J0cyA9IHtcbiAgLy8gc2V0IGluaXRpYWwgaW5wdXQgcGxhY2Vob2xkZXIgdmFsdWVzXG4gIGluaXQ6IGZ1bmN0aW9uIChyZXF1aXJlZCkge1xuICAgIHJlcXVpcmVkLm1hcChmdW5jdGlvbiAoaW5wdXQsIGluZGV4KSB7XG4gICAgICBpZiAoaW5wdXQpIHtcbiAgICAgICAgaW5wdXQucGxhY2Vob2xkZXIgPSBmb3JtRGF0YS5kYXRhW2luZGV4XS5wbGFjZWhvbGRlcjtcbiAgICAgIH1cbiAgICB9LCB0aGlzKTtcbiAgfSxcbiAgdG9nZ2xlOiBmdW5jdGlvbiAocmVxdWlyZWQpIHtcbiAgICByZXF1aXJlZC5tYXAoZnVuY3Rpb24gKGlucHV0LCBpbmRleCkge1xuICAgICAgaWYgKGV2ZW50LnRhcmdldCAhPSBpbnB1dCkge1xuICAgICAgICBpbnB1dC5wbGFjZWhvbGRlciA9IGZvcm1EYXRhLmRhdGFbaW5kZXhdLnBsYWNlaG9sZGVyO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gdG9nZ2xlIGlucHV0IHBsYWNlaG9sZGVyIHZhbHVlIHRvIGJsYW5rIG9ubHkgd2hlbiB1c2VyIHNlbGVjdHMgaW5wdXRcbiAgICAgICAgaW5wdXQucGxhY2Vob2xkZXIgPSAnJztcbiAgICAgIH1cbiAgICB9LCB0aGlzKTtcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vanMvaGFuZGxlcnMvcGxhY2Vob2xkZXJzLmpzIiwiLypcbiAgRm9ybSBkYXRhXG4qL1xuXG52YXIgZm9ybURhdGEgPSBtb2R1bGUuZXhwb3J0cyA9IHtcbiAgZGF0YTogW1xuICAgIHtcbiAgICAgIHBsYWNlaG9sZGVyOiAnTmFtZScsXG4gICAgICByZWdleDogJ1thLXpBLVpdKygoW1xcJywuIC1dW2EtekEtWiBdKT9bYS16QS1aXSopKiQnLFxuICAgICAgZXJyb3I6ICdQbGVhc2UgZW50ZXIgbGV0dGVycyBvbmx5J1xuICAgIH0sXG4gICAge1xuICAgICAgcGxhY2Vob2xkZXI6ICdFbWFpbCcsXG4gICAgICByZWdleDogJ15bYS16QS1aMC05LiEjJCUmXFwnKisvPT9eX2B7fH1+LV0rQFthLXpBLVowLTldKD86W2EtekEtWjAtOS1dezAsNjF9W2EtekEtWjAtOV0pPyg/OlxcLlthLXpBLVowLTldKD86W2EtekEtWjAtOS1dezAsNjF9W2EtekEtWjAtOV0pPykqJCcsXG4gICAgICBlcnJvcjogJ1BsZWFzZSBlbnRlciBhIHZhbGlkIGVtYWlsJ1xuICAgIH0sXG4gICAge1xuICAgICAgcGxhY2Vob2xkZXI6ICdQaG9uZScsXG4gICAgICByZWdleDogJ15bMi05XXsyfVswLTldezh9JCcsXG4gICAgICBlcnJvcjogJ1BsZWFzZSBlbnRlciBhIDEwIGRpZ2l0IHBob25lIG51bWJlcidcbiAgICB9LFxuICAgIHtcbiAgICAgIHBsYWNlaG9sZGVyOiAnQWRkcmVzcycsXG4gICAgICByZWdleDogJ14oPyFcXHMqJCkuKycsXG4gICAgICBlcnJvcjogJ1BsZWFzZSBlbnRlciB5b3VyIGFkZHJlc3MnXG4gICAgfVxuICBdXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9qcy9kYXRhL2Zvcm0tZGF0YS5qcyIsIi8qXG4gIENyZWF0ZWQgdG8gYXZvaWQgZXJyb3JzIGlmIHRoZSBlbGVtZW50IGlzIG5vdCBwcmVzZW50IGluIHRoZSBET01cbiovXG5cbnZhciB0ZXN0ID0gbW9kdWxlLmV4cG9ydHMgPSB7XG4gIHRlc3RGb3JFbGVtZW50OiBmdW5jdGlvbiAoZWwsIGV2ZW50VHlwZSwgbWV0aG9kKSB7XG4gICAgaWYgKGVsKSB7XG4gICAgICBlbC5hZGRFdmVudExpc3RlbmVyKGV2ZW50VHlwZSwgbWV0aG9kKTtcbiAgICB9XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2pzL2hhbmRsZXJzL3Rlc3QtZm9yLWVsZW1lbnQuanMiLCIvKlxuICBmb3JtRGF0YSB1c2VkIHRvIG1hdGNoIHVzZXIgaW5wdXQgZm9yIHZhbGlkYXRpb25cbiovXG5cbmltcG9ydCBmb3JtRGF0YSBmcm9tICcuLi9kYXRhL2Zvcm0tZGF0YSc7XG5cbnZhciB2YWxpZGF0aW9uID0gbW9kdWxlLmV4cG9ydHMgPSB7XG4gIGVycm9yczogZmFsc2UsXG4gIHZhbGlkYXRlIChyZXF1aXJlZCkge1xuICAgIHJlcXVpcmVkLm1hcCAoKGlucHV0LCBpbmRleCkgPT4ge1xuICAgICAgdmFyIGFmdGVyID0gaW5wdXQubmV4dFNpYmxpbmc7XG4gICAgICB2YXIgZXJyb3JNZXNzYWdlID0gYWZ0ZXIubmV4dFNpYmxpbmc7XG5cbiAgICAgIGlmIChpbnB1dC52YWx1ZS5tYXRjaChmb3JtRGF0YS5kYXRhW2luZGV4XS5yZWdleCkpIHtcbiAgICAgICAgZXJyb3JNZXNzYWdlLnRleHRDb250ZW50ID0gJ+KchSc7XG4gICAgICAgIGVycm9yTWVzc2FnZS5jbGFzc0xpc3QucmVtb3ZlKCdpbnB1dC1mYWlsJyk7XG4gICAgICAgIGVycm9yTWVzc2FnZS5jbGFzc0xpc3QuYWRkKCdpbnB1dC1zdWNjZXNzJyk7XG4gICAgICAgIHZhbGlkYXRpb24uZXJyb3JzID0gZmFsc2U7XG4gICAgICAgIGNvbnNvbGUubG9nKHZhbGlkYXRpb24uZXJyb3JzKTtcbiAgICAgIH0gZWxzZSBpZiAoaW5wdXQudmFsdWUgPT09ICcnIHx8IHZhbGlkYXRpb24uZXJyb3JzID09PSB0cnVlKSB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBlcnJvck1lc3NhZ2UudGV4dENvbnRlbnQgPSBmb3JtRGF0YS5kYXRhW2luZGV4XS5lcnJvcjtcbiAgICAgICAgZXJyb3JNZXNzYWdlLmNsYXNzTGlzdC5yZW1vdmUoJ2lucHV0LXN1Y2Nlc3MnKTtcbiAgICAgICAgZXJyb3JNZXNzYWdlLmNsYXNzTGlzdC5hZGQoJ2lucHV0LWZhaWwnKTtcbiAgICAgICAgdmFsaWRhdGlvbi5lcnJvcnMgPSB0cnVlO1xuICAgICAgICBjb25zb2xlLmxvZyh2YWxpZGF0aW9uLmVycm9ycyk7XG4gICAgICB9XG4gICAgfSwgdGhpcyk7XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2pzL2hhbmRsZXJzL3ZhbGlkYXRpb24uanMiLCIvKlxuICBSZXF1ZXN0IGRhdGEgZnJvbSBBUElcbiovXG5cbmltcG9ydCB2YWxpZGF0aW9uIGZyb20gJy4vaGFuZGxlcnMvdmFsaWRhdGlvbic7XG5cbmNvbnN0IGhhbmRsZUdFVCA9IHtcbiAgaW5pdCAoKSB7XG4gICAgdGhpcy5jYWNoZURPTSgpO1xuICAgIHRoaXMuYmluZEV2ZW50cygpO1xuICB9LFxuICBjYWNoZURPTSAoKSB7XG4gICAgdGhpcy5nZXREYXRhID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmdldC1kYXRhJyk7XG4gICAgdGhpcy5jYXREYXRhID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NhdC1kYXRhJyk7XG4gICAgdGhpcy5kb2dEYXRhID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RvZy1kYXRhJyk7XG4gIH0sXG4gIGJpbmRFdmVudHMgKCkge1xuICAgIHRoaXMuZ2V0RGF0YS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuaGFuZGxlQ2FsbC5iaW5kKHRoaXMpKTtcbiAgfSxcbiAgaGFuZGxlQ2FsbCAoKSB7XG4gICAgY29uc3QgcmVxdWVzdCA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xuICAgIGNvbnN0IG1ldGhvZCA9ICdHRVQnO1xuICAgIGNvbnN0IHVybCA9ICdodHRwOi8vbG9jYWxob3N0OjMwMDAvYXBpL3YxL3N1Ym1pc3Npb25zJztcbiAgICByZXF1ZXN0Lm9ucmVhZHlzdGF0ZWNoYW5nZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmICh0aGlzLnJlYWR5U3RhdGUgPT0gNCAmJiB0aGlzLnN0YXR1cyA9PSAyMDApIHtcbiAgICAgICAgY29uc3Qgb2JqID0gSlNPTi5wYXJzZSh0aGlzLnJlc3BvbnNlVGV4dCk7XG4gICAgICAgIGhhbmRsZUdFVC5oYW5kbGVSZW5kZXIob2JqKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmVxdWVzdC5vcGVuKG1ldGhvZCwgdXJsLCB0cnVlKTtcbiAgICByZXF1ZXN0LnNlbmQoKTtcbiAgfSxcbiAgaGFuZGxlUmVuZGVyIChkYXRhKSB7XG4gICAgY29uc3QgY2F0RGF0YSA9IHRoaXMuY2F0RGF0YTtcbiAgICBjb25zdCBkb2dEYXRhID0gdGhpcy5kb2dEYXRhO1xuXG4gICAgaWYgKGRhdGEpIHtcbiAgICAgIGRhdGEubWFwKGQgPT4ge1xuICAgICAgICBjb25zdCBjYXRJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICAgICAgY29uc3QgZG9nSXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG5cbiAgICAgICAgY2F0SXRlbS5pbm5lckhUTUwgPSBgXG4gICAgICAgICAgJHtkLm5hbWV9IGFuc3dlcmVkICR7ZC5jYXR9IWA7XG5cbiAgICAgICAgZG9nSXRlbS5pbm5lckhUTUwgPSBgXG4gICAgICAgICAgJHtkLm5hbWV9IGFuc3dlcmVkICR7ZC5kb2d9IWA7XG5cbiAgICAgICAgY2F0RGF0YS5hcHBlbmRDaGlsZChjYXRJdGVtKTtcbiAgICAgICAgZG9nRGF0YS5hcHBlbmRDaGlsZChkb2dJdGVtKTtcbiAgICAgIH0pO1xuICAgICAgY29uc29sZS5sb2coZGF0YSk7XG4gICAgfVxuICB9XG59XG5oYW5kbGVHRVQuaW5pdCgpO1xuXG5jb25zdCBoYW5kbGVQT1NUID0ge1xuICBpbml0ICgpIHtcbiAgICB0aGlzLmNhY2hlRE9NKCk7XG4gICAgdGhpcy5iaW5kRXZlbnRzKCk7XG4gIH0sXG4gIGNhY2hlRE9NICgpIHtcbiAgICB0aGlzLnBvc3REYXRhID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBvc3QtZGF0YScpO1xuICAgIHRoaXMubmFtZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduYW1lJyk7XG4gICAgdGhpcy5lbWFpbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdlbWFpbCcpO1xuICAgIHRoaXMucGhvbmUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGhvbmUnKTtcbiAgICB0aGlzLmFkZHJlc3MgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWRkcmVzcycpO1xuICAgIHRoaXMueWVzQ2F0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3llcy1jYXQnKTtcbiAgICB0aGlzLnllc0RvZyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd5ZXMtZG9nJyk7XG4gIH0sXG4gIGJpbmRFdmVudHMgKCkge1xuICAgIHRoaXMucG9zdERhdGEuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmhhbmRsZVNlbmQuYmluZCh0aGlzKSk7XG4gIH0sXG4gIGhhbmRsZVNlbmQgKCkge1xuICAgIGlmICh2YWxpZGF0aW9uLmVycm9ycyA9PT0gZmFsc2UpIHtcbiAgICAgIHRoaXMuaGFuZGxlRGF0YSgpO1xuICAgICAgY29uc3QgZGF0YSA9IHRoaXMuZGF0YTtcblxuICAgICAgY29uc3QgcmVxdWVzdCA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xuICAgICAgY29uc3QgbWV0aG9kID0gJ1BPU1QnO1xuICAgICAgY29uc3QgdXJsID0gJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9hcGkvdjEvc3VibWlzc2lvbnMnO1xuXG4gICAgICByZXF1ZXN0Lm9wZW4obWV0aG9kLCB1cmwsIHRydWUpO1xuICAgICAgcmVxdWVzdC5zZXRSZXF1ZXN0SGVhZGVyKCdDb250ZW50LVR5cGUnLCAnYXBwbGljYXRpb24vanNvbjsgY2hhcnNldD1VVEYtOCcpO1xuICAgICAgcmVxdWVzdC5zZW5kKEpTT04uc3RyaW5naWZ5KGRhdGEpKTtcbiAgICB9XG4gIH0sXG4gIGhhbmRsZURhdGEgKCkge1xuICAgIHRoaXMuZGF0YSA9IHtcbiAgICAgIG5hbWU6IHRoaXMubmFtZS52YWx1ZSxcbiAgICAgIGVtYWlsOiB0aGlzLmVtYWlsLnZhbHVlLFxuICAgICAgcGhvbmU6IHRoaXMucGhvbmUudmFsdWUsXG4gICAgICBhZGRyZXNzOiB0aGlzLmFkZHJlc3MudmFsdWUsXG4gICAgICBjYXQ6ICdubycsXG4gICAgICBkb2c6ICdubydcbiAgICB9XG4gICAgaWYgKHRoaXMueWVzQ2F0LmNoZWNrZWQpIHtcbiAgICAgIHRoaXMuZGF0YS5jYXQgPSAneWVzJztcbiAgICB9XG4gICAgaWYgKHRoaXMueWVzRG9nLmNoZWNrZWQpIHtcbiAgICAgIHRoaXMuZGF0YS5kb2cgPSAneWVzJztcbiAgICB9XG4gIH1cbn1cbmhhbmRsZVBPU1QuaW5pdCgpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vanMvaGFuZGxlUmVxdWVzdHMuanMiXSwic291cmNlUm9vdCI6IiJ9