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
	        console.log('errors exist in form');
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
	    console.log(_validation2.default.errors);
	    if (_validation2.default.errors === true) {
	      event.preventDefault();
	    } else if (_validation2.default.errors === false && data) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgZWMzZjU5MzMxZmEzZDVkYzEwMGUiLCJ3ZWJwYWNrOi8vLy4vanMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vanMvZm9ybUNvbXBvbmVudC5qcyIsIndlYnBhY2s6Ly8vLi9qcy9oYW5kbGVycy9wbGFjZWhvbGRlcnMuanMiLCJ3ZWJwYWNrOi8vLy4vanMvZGF0YS9mb3JtLWRhdGEuanMiLCJ3ZWJwYWNrOi8vLy4vanMvaGFuZGxlcnMvdGVzdC1mb3ItZWxlbWVudC5qcyIsIndlYnBhY2s6Ly8vLi9qcy9oYW5kbGVycy92YWxpZGF0aW9uLmpzIiwid2VicGFjazovLy8uL2pzL2hhbmRsZVJlcXVlc3RzLmpzIl0sIm5hbWVzIjpbImZvcm1Db21wb25lbnQiLCJpbml0IiwiY2FjaGVET00iLCJiaW5kRXZlbnRzIiwicmVxdWlyZWQiLCJmb3JtIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwibmFtZSIsImVtYWlsIiwicGhvbmUiLCJhZGRyZXNzIiwibGl2ZVZhbGlkYXRpb24iLCJiaW5kIiwicGxhY2Vob2xkZXJzVG9nZ2xlIiwiZSIsInRhcmdldCIsInR5cGUiLCJwbGFjZWhvbGRlcnMiLCJtb2R1bGUiLCJleHBvcnRzIiwibWFwIiwiaW5wdXQiLCJpbmRleCIsInBsYWNlaG9sZGVyIiwiZGF0YSIsInRvZ2dsZSIsImV2ZW50IiwiZm9ybURhdGEiLCJyZWdleCIsImVycm9yIiwidGVzdCIsInRlc3RGb3JFbGVtZW50IiwiZWwiLCJldmVudFR5cGUiLCJtZXRob2QiLCJhZGRFdmVudExpc3RlbmVyIiwidmFsaWRhdGlvbiIsImVycm9ycyIsInZhbGlkYXRlIiwiYWZ0ZXIiLCJuZXh0U2libGluZyIsImVycm9yTWVzc2FnZSIsInZhbHVlIiwiY29uc29sZSIsImxvZyIsInByZXZlbnREZWZhdWx0IiwibWF0Y2giLCJ0ZXh0Q29udGVudCIsImNsYXNzTGlzdCIsInJlbW92ZSIsImFkZCIsImhhbmRsZUdFVCIsImdldERhdGEiLCJjYXREYXRhIiwiZ2V0RWxlbWVudEJ5SWQiLCJkb2dEYXRhIiwiaGFuZGxlQ2FsbCIsInJlcXVlc3QiLCJYTUxIdHRwUmVxdWVzdCIsInVybCIsIm9ucmVhZHlzdGF0ZWNoYW5nZSIsInJlYWR5U3RhdGUiLCJzdGF0dXMiLCJvYmoiLCJKU09OIiwicGFyc2UiLCJyZXNwb25zZVRleHQiLCJoYW5kbGVSZW5kZXIiLCJvcGVuIiwic2VuZCIsImNhdEl0ZW0iLCJjcmVhdGVFbGVtZW50IiwiZG9nSXRlbSIsImlubmVySFRNTCIsImQiLCJjYXQiLCJkb2ciLCJhcHBlbmRDaGlsZCIsImhhbmRsZVBPU1QiLCJwb3N0RGF0YSIsInllc0NhdCIsInllc0RvZyIsImhhbmRsZVNlbmQiLCJoYW5kbGVEYXRhIiwic2V0UmVxdWVzdEhlYWRlciIsInN0cmluZ2lmeSIsImNoZWNrZWQiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1QkFBZTtBQUNmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDbENBOztBQUNBLHdCOzs7Ozs7OztBQ0RBOztBQUNBOztBQUNBOztBQUVBLEtBQU1BLGdCQUFnQjtBQUNwQkMsT0FEb0Isa0JBQ1o7QUFDTixVQUFLQyxRQUFMO0FBQ0EsVUFBS0MsVUFBTDtBQUNBLDZCQUFLLEtBQUtDLFFBQVY7QUFDRCxJQUxtQjtBQU1wQkYsV0FOb0Isc0JBTVI7QUFDVixVQUFLRyxJQUFMLEdBQVlDLFNBQVNDLGFBQVQsQ0FBdUIsT0FBdkIsQ0FBWjtBQUNBLFNBQU1DLE9BQU9GLFNBQVNDLGFBQVQsQ0FBdUIsT0FBdkIsQ0FBYjtBQUNBLFNBQU1FLFFBQVFILFNBQVNDLGFBQVQsQ0FBdUIsUUFBdkIsQ0FBZDtBQUNBLFNBQU1HLFFBQVFKLFNBQVND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biBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKVxuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuXG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRleHBvcnRzOiB7fSxcbiBcdFx0XHRpZDogbW9kdWxlSWQsXG4gXHRcdFx0bG9hZGVkOiBmYWxzZVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sb2FkZWQgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIGVjM2Y1OTMzMWZhM2Q1ZGMxMDBlIiwiLypcbiAgV2VicGFjayBlbnRyeSBwb2ludFxuKi9cblxuaW1wb3J0ICcuL2Zvcm1Db21wb25lbnQnO1xuaW1wb3J0ICcuL2hhbmRsZVJlcXVlc3RzJztcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2pzL2luZGV4LmpzIiwiLypcbiAgZm9ybSBjb21wb25lbnRcbiovXG5cbmltcG9ydCB7IGluaXQsIHRvZ2dsZSB9IGZyb20gJy4vaGFuZGxlcnMvcGxhY2Vob2xkZXJzJztcbmltcG9ydCB7IHRlc3RGb3JFbGVtZW50IH0gZnJvbSAnLi9oYW5kbGVycy90ZXN0LWZvci1lbGVtZW50JztcbmltcG9ydCB7IHZhbGlkYXRlIH0gZnJvbSAnLi9oYW5kbGVycy92YWxpZGF0aW9uJztcblxuY29uc3QgZm9ybUNvbXBvbmVudCA9IHtcbiAgaW5pdCAoKSB7XG4gICAgdGhpcy5jYWNoZURPTSgpO1xuICAgIHRoaXMuYmluZEV2ZW50cygpO1xuICAgIGluaXQodGhpcy5yZXF1aXJlZCk7XG4gIH0sXG4gIGNhY2hlRE9NICgpIHtcbiAgICB0aGlzLmZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZm9ybScpO1xuICAgIGNvbnN0IG5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbmFtZScpO1xuICAgIGNvbnN0IGVtYWlsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2VtYWlsJyk7XG4gICAgY29uc3QgcGhvbmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcGhvbmUnKTtcbiAgICBjb25zdCBhZGRyZXNzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2FkZHJlc3MnKTtcbiAgICB0aGlzLnJlcXVpcmVkID0gW1xuICAgICAgbmFtZSwgZW1haWwsIHBob25lLCBhZGRyZXNzXG4gICAgXTtcbiAgfSxcbiAgYmluZEV2ZW50cyAoKSB7XG4gICAgLy8gdGVzdEZvckVsZW1lbnQgZm91bmQgaW4gaGFuZGxlcnMgZm9sZGVyXG4gICAgdGVzdEZvckVsZW1lbnQodGhpcy5mb3JtLCAnY2xpY2snLCB0aGlzLmxpdmVWYWxpZGF0aW9uLmJpbmQodGhpcykpO1xuICAgIHRlc3RGb3JFbGVtZW50KHRoaXMuZm9ybSwgJ2NsaWNrJywgdGhpcy5wbGFjZWhvbGRlcnNUb2dnbGUuYmluZCh0aGlzKSk7XG4gIH0sXG4gIGxpdmVWYWxpZGF0aW9uIChlKSB7XG4gICAgaWYgKGUudGFyZ2V0LnR5cGUgPT09ICdyYWRpbycpIHtcbiAgICAgIHJldHVybjtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFsaWRhdGUodGhpcy5yZXF1aXJlZCk7XG4gICAgfVxuICB9LFxuICBwbGFjZWhvbGRlcnNUb2dnbGUgKGUpIHtcbiAgICB0b2dnbGUodGhpcy5yZXF1aXJlZCk7XG4gIH1cbn1cbmZvcm1Db21wb25lbnQuaW5pdCgpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vanMvZm9ybUNvbXBvbmVudC5qcyIsIi8qXG4gIFNldCBpbml0aWFsIHBsYWNlaG9sZGVycyBmb3IgaW5wdXRzXG4qL1xuXG5pbXBvcnQgZm9ybURhdGEgZnJvbSAnLi4vZGF0YS9mb3JtLWRhdGEnO1xuXG52YXIgcGxhY2Vob2xkZXJzID0gbW9kdWxlLmV4cG9ydHMgPSB7XG4gIC8vIHNldCBpbml0aWFsIGlucHV0IHBsYWNlaG9sZGVyIHZhbHVlc1xuICBpbml0OiBmdW5jdGlvbiAocmVxdWlyZWQpIHtcbiAgICByZXF1aXJlZC5tYXAoZnVuY3Rpb24gKGlucHV0LCBpbmRleCkge1xuICAgICAgaWYgKGlucHV0KSB7XG4gICAgICAgIGlucHV0LnBsYWNlaG9sZGVyID0gZm9ybURhdGEuZGF0YVtpbmRleF0ucGxhY2Vob2xkZXI7XG4gICAgICB9XG4gICAgfSwgdGhpcyk7XG4gIH0sXG4gIHRvZ2dsZTogZnVuY3Rpb24gKHJlcXVpcmVkKSB7XG4gICAgcmVxdWlyZWQubWFwKGZ1bmN0aW9uIChpbnB1dCwgaW5kZXgpIHtcbiAgICAgIGlmIChldmVudC50YXJnZXQgIT0gaW5wdXQpIHtcbiAgICAgICAgaW5wdXQucGxhY2Vob2xkZXIgPSBmb3JtRGF0YS5kYXRhW2luZGV4XS5wbGFjZWhvbGRlcjtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIHRvZ2dsZSBpbnB1dCBwbGFjZWhvbGRlciB2YWx1ZSB0byBibGFuayBvbmx5IHdoZW4gdXNlciBzZWxlY3RzIGlucHV0XG4gICAgICAgIGlucHV0LnBsYWNlaG9sZGVyID0gJyc7XG4gICAgICB9XG4gICAgfSwgdGhpcyk7XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2pzL2hhbmRsZXJzL3BsYWNlaG9sZGVycy5qcyIsIi8qXG4gIEZvcm0gZGF0YVxuKi9cblxudmFyIGZvcm1EYXRhID0gbW9kdWxlLmV4cG9ydHMgPSB7XG4gIGRhdGE6IFtcbiAgICB7XG4gICAgICBwbGFjZWhvbGRlcjogJ05hbWUnLFxuICAgICAgcmVnZXg6ICdbYS16QS1aXSsoKFtcXCcsLiAtXVthLXpBLVogXSk/W2EtekEtWl0qKSokJyxcbiAgICAgIGVycm9yOiAnUGxlYXNlIGVudGVyIGxldHRlcnMgb25seSdcbiAgICB9LFxuICAgIHtcbiAgICAgIHBsYWNlaG9sZGVyOiAnRW1haWwnLFxuICAgICAgcmVnZXg6ICdeW2EtekEtWjAtOS4hIyQlJlxcJyorLz0/Xl9ge3x9fi1dK0BbYS16QS1aMC05XSg/OlthLXpBLVowLTktXXswLDYxfVthLXpBLVowLTldKT8oPzpcXC5bYS16QS1aMC05XSg/OlthLXpBLVowLTktXXswLDYxfVthLXpBLVowLTldKT8pKiQnLFxuICAgICAgZXJyb3I6ICdQbGVhc2UgZW50ZXIgYSB2YWxpZCBlbWFpbCdcbiAgICB9LFxuICAgIHtcbiAgICAgIHBsYWNlaG9sZGVyOiAnUGhvbmUnLFxuICAgICAgcmVnZXg6ICdeWzItOV17Mn1bMC05XXs4fSQnLFxuICAgICAgZXJyb3I6ICdQbGVhc2UgZW50ZXIgYSAxMCBkaWdpdCBwaG9uZSBudW1iZXInXG4gICAgfSxcbiAgICB7XG4gICAgICBwbGFjZWhvbGRlcjogJ0FkZHJlc3MnLFxuICAgICAgcmVnZXg6ICdeKD8hXFxzKiQpLisnLFxuICAgICAgZXJyb3I6ICdQbGVhc2UgZW50ZXIgeW91ciBhZGRyZXNzJ1xuICAgIH1cbiAgXVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vanMvZGF0YS9mb3JtLWRhdGEuanMiLCIvKlxuICBDcmVhdGVkIHRvIGF2b2lkIGVycm9ycyBpZiB0aGUgZWxlbWVudCBpcyBub3QgcHJlc2VudCBpbiB0aGUgRE9NXG4qL1xuXG52YXIgdGVzdCA9IG1vZHVsZS5leHBvcnRzID0ge1xuICB0ZXN0Rm9yRWxlbWVudDogZnVuY3Rpb24gKGVsLCBldmVudFR5cGUsIG1ldGhvZCkge1xuICAgIGlmIChlbCkge1xuICAgICAgZWwuYWRkRXZlbnRMaXN0ZW5lcihldmVudFR5cGUsIG1ldGhvZCk7XG4gICAgfVxuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9qcy9oYW5kbGVycy90ZXN0LWZvci1lbGVtZW50LmpzIiwiLypcbiAgZm9ybURhdGEgdXNlZCB0byBtYXRjaCB1c2VyIGlucHV0IGZvciB2YWxpZGF0aW9uXG4qL1xuXG5pbXBvcnQgZm9ybURhdGEgZnJvbSAnLi4vZGF0YS9mb3JtLWRhdGEnO1xuXG52YXIgdmFsaWRhdGlvbiA9IG1vZHVsZS5leHBvcnRzID0ge1xuICBlcnJvcnM6IGZhbHNlLFxuICB2YWxpZGF0ZSAocmVxdWlyZWQpIHtcbiAgICByZXF1aXJlZC5tYXAgKChpbnB1dCwgaW5kZXgpID0+IHtcbiAgICAgIHZhciBhZnRlciA9IGlucHV0Lm5leHRTaWJsaW5nO1xuICAgICAgdmFyIGVycm9yTWVzc2FnZSA9IGFmdGVyLm5leHRTaWJsaW5nO1xuXG4gICAgICBpZiAoaW5wdXQudmFsdWUgPT09ICcnIHx8IHZhbGlkYXRpb24uZXJyb3JzID09PSB0cnVlKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdlcnJvcnMgZXhpc3QgaW4gZm9ybScpO1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9IGVsc2UgaWYgKGlucHV0LnZhbHVlLm1hdGNoKGZvcm1EYXRhLmRhdGFbaW5kZXhdLnJlZ2V4KSkge1xuICAgICAgICBlcnJvck1lc3NhZ2UudGV4dENvbnRlbnQgPSAn4pyFJztcbiAgICAgICAgZXJyb3JNZXNzYWdlLmNsYXNzTGlzdC5yZW1vdmUoJ2lucHV0LWZhaWwnKTtcbiAgICAgICAgZXJyb3JNZXNzYWdlLmNsYXNzTGlzdC5hZGQoJ2lucHV0LXN1Y2Nlc3MnKTtcbiAgICAgICAgdmFsaWRhdGlvbi5lcnJvcnMgPSBmYWxzZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGVycm9yTWVzc2FnZS50ZXh0Q29udGVudCA9IGZvcm1EYXRhLmRhdGFbaW5kZXhdLmVycm9yO1xuICAgICAgICBlcnJvck1lc3NhZ2UuY2xhc3NMaXN0LnJlbW92ZSgnaW5wdXQtc3VjY2VzcycpO1xuICAgICAgICBlcnJvck1lc3NhZ2UuY2xhc3NMaXN0LmFkZCgnaW5wdXQtZmFpbCcpO1xuICAgICAgICB2YWxpZGF0aW9uLmVycm9ycyA9IHRydWU7XG4gICAgICB9XG4gICAgfSwgdGhpcyk7XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2pzL2hhbmRsZXJzL3ZhbGlkYXRpb24uanMiLCIvKlxuICBSZXF1ZXN0IGRhdGEgZnJvbSBBUElcbiovXG5cbmltcG9ydCB2YWxpZGF0aW9uIGZyb20gJy4vaGFuZGxlcnMvdmFsaWRhdGlvbic7XG5cbmNvbnN0IGhhbmRsZUdFVCA9IHtcbiAgaW5pdCAoKSB7XG4gICAgdGhpcy5jYWNoZURPTSgpO1xuICAgIHRoaXMuYmluZEV2ZW50cygpO1xuICB9LFxuICBjYWNoZURPTSAoKSB7XG4gICAgdGhpcy5nZXREYXRhID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmdldC1kYXRhJyk7XG4gICAgdGhpcy5jYXREYXRhID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NhdC1kYXRhJyk7XG4gICAgdGhpcy5kb2dEYXRhID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RvZy1kYXRhJyk7XG4gIH0sXG4gIGJpbmRFdmVudHMgKCkge1xuICAgIHRoaXMuZ2V0RGF0YS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuaGFuZGxlQ2FsbC5iaW5kKHRoaXMpKTtcbiAgfSxcbiAgaGFuZGxlQ2FsbCAoKSB7XG4gICAgY29uc3QgcmVxdWVzdCA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xuICAgIGNvbnN0IG1ldGhvZCA9ICdHRVQnO1xuICAgIGNvbnN0IHVybCA9ICdodHRwOi8vZm9ybS1jb21wb25lbnQtYXBpLmhlcm9rdWFwcC5jb20vYXBpL3YxL3N1Ym1pc3Npb25zJztcbiAgICByZXF1ZXN0Lm9ucmVhZHlzdGF0ZWNoYW5nZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmICh0aGlzLnJlYWR5U3RhdGUgPT0gNCAmJiB0aGlzLnN0YXR1cyA9PSAyMDApIHtcbiAgICAgICAgY29uc3Qgb2JqID0gSlNPTi5wYXJzZSh0aGlzLnJlc3BvbnNlVGV4dCk7XG4gICAgICAgIGhhbmRsZUdFVC5oYW5kbGVSZW5kZXIob2JqKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmVxdWVzdC5vcGVuKG1ldGhvZCwgdXJsLCB0cnVlKTtcbiAgICByZXF1ZXN0LnNlbmQoKTtcbiAgfSxcbiAgaGFuZGxlUmVuZGVyIChkYXRhKSB7XG4gICAgY29uc3QgY2F0RGF0YSA9IHRoaXMuY2F0RGF0YTtcbiAgICBjb25zdCBkb2dEYXRhID0gdGhpcy5kb2dEYXRhO1xuICAgIGNvbnNvbGUubG9nKHZhbGlkYXRpb24uZXJyb3JzKTtcbiAgICBpZiAodmFsaWRhdGlvbi5lcnJvcnMgPT09IHRydWUpIHtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgfSBlbHNlIGlmICh2YWxpZGF0aW9uLmVycm9ycyA9PT0gZmFsc2UgJiYgZGF0YSkge1xuICAgICAgZGF0YS5tYXAoZCA9PiB7XG4gICAgICAgIGNvbnN0IGNhdEl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgICAgICBjb25zdCBkb2dJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcblxuICAgICAgICBjYXRJdGVtLmlubmVySFRNTCA9IGBcbiAgICAgICAgICAke2QubmFtZX0gYW5zd2VyZWQgJHtkLmNhdH0hYDtcblxuICAgICAgICBkb2dJdGVtLmlubmVySFRNTCA9IGBcbiAgICAgICAgICAke2QubmFtZX0gYW5zd2VyZWQgJHtkLmRvZ30hYDtcblxuICAgICAgICBjYXREYXRhLmFwcGVuZENoaWxkKGNhdEl0ZW0pO1xuICAgICAgICBkb2dEYXRhLmFwcGVuZENoaWxkKGRvZ0l0ZW0pO1xuICAgICAgfSk7XG4gICAgICBjb25zb2xlLmxvZyhkYXRhKTtcbiAgICB9XG4gIH1cbn1cbmhhbmRsZUdFVC5pbml0KCk7XG5cbmNvbnN0IGhhbmRsZVBPU1QgPSB7XG4gIGluaXQgKCkge1xuICAgIHRoaXMuY2FjaGVET00oKTtcbiAgICB0aGlzLmJpbmRFdmVudHMoKTtcbiAgfSxcbiAgY2FjaGVET00gKCkge1xuICAgIHRoaXMucG9zdERhdGEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucG9zdC1kYXRhJyk7XG4gICAgdGhpcy5uYW1lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25hbWUnKTtcbiAgICB0aGlzLmVtYWlsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2VtYWlsJyk7XG4gICAgdGhpcy5waG9uZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwaG9uZScpO1xuICAgIHRoaXMuYWRkcmVzcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhZGRyZXNzJyk7XG4gICAgdGhpcy55ZXNDYXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgneWVzLWNhdCcpO1xuICAgIHRoaXMueWVzRG9nID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3llcy1kb2cnKTtcbiAgfSxcbiAgYmluZEV2ZW50cyAoKSB7XG4gICAgdGhpcy5wb3N0RGF0YS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuaGFuZGxlU2VuZC5iaW5kKHRoaXMpKTtcbiAgfSxcbiAgaGFuZGxlU2VuZCAoKSB7XG4gICAgdGhpcy5oYW5kbGVEYXRhKCk7XG4gICAgY29uc3QgZGF0YSA9IHRoaXMuZGF0YTtcblxuICAgIGNvbnN0IHJlcXVlc3QgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcbiAgICBjb25zdCBtZXRob2QgPSAnUE9TVCc7XG4gICAgY29uc3QgdXJsID0gJ2h0dHA6Ly9mb3JtLWNvbXBvbmVudC1hcGkuaGVyb2t1YXBwLmNvbS9hcGkvdjEvc3VibWlzc2lvbnMnO1xuXG4gICAgcmVxdWVzdC5vcGVuKG1ldGhvZCwgdXJsLCB0cnVlKTtcbiAgICByZXF1ZXN0LnNldFJlcXVlc3RIZWFkZXIoJ0NvbnRlbnQtVHlwZScsICdhcHBsaWNhdGlvbi9qc29uOyBjaGFyc2V0PVVURi04Jyk7XG4gICAgaWYgKHZhbGlkYXRpb24uZXJyb3JzID09PSBmYWxzZSkge1xuICAgICAgcmVxdWVzdC5zZW5kKEpTT04uc3RyaW5naWZ5KGRhdGEpKTtcbiAgICB9XG4gIH0sXG4gIGhhbmRsZURhdGEgKCkge1xuICAgIHRoaXMuZGF0YSA9IHtcbiAgICAgIG5hbWU6IHRoaXMubmFtZS52YWx1ZSxcbiAgICAgIGVtYWlsOiB0aGlzLmVtYWlsLnZhbHVlLFxuICAgICAgcGhvbmU6IHRoaXMucGhvbmUudmFsdWUsXG4gICAgICBhZGRyZXNzOiB0aGlzLmFkZHJlc3MudmFsdWUsXG4gICAgICBjYXQ6ICdubycsXG4gICAgICBkb2c6ICdubydcbiAgICB9XG4gICAgaWYgKHRoaXMueWVzQ2F0LmNoZWNrZWQpIHtcbiAgICAgIHRoaXMuZGF0YS5jYXQgPSAneWVzJztcbiAgICB9XG4gICAgaWYgKHRoaXMueWVzRG9nLmNoZWNrZWQpIHtcbiAgICAgIHRoaXMuZGF0YS5kb2cgPSAneWVzJztcbiAgICB9XG4gIH1cbn1cbmhhbmRsZVBPU1QuaW5pdCgpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vanMvaGFuZGxlUmVxdWVzdHMuanMiXSwic291cmNlUm9vdCI6IiJ9