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
	  validate: function validate(required) {
	    required.map(function (input, index) {
	      var after = input.nextSibling;
	      var errorMessage = after.nextSibling;
	
	      if (input.value === '') {
	        event.preventDefault();
	        return;
	      } else if (input.value.match(_formData2.default.data[index].regex)) {
	        var checkKey = function checkKey(e) {
	          if (e.keyCode === 13) {
	            var e = new Event('keydown');
	            pressBtn.key = 9;
	            document.dispatchEvent(pressBtn);
	          }
	        };
	
	        errorMessage.textContent = '✅';
	        errorMessage.classList.remove('input-fail');
	        errorMessage.classList.add('input-success');
	
	        window.addEventListener('keydown', checkKey);
	      } else {
	        errorMessage.textContent = _formData2.default.data[index].error;
	        errorMessage.classList.remove('input-success');
	        errorMessage.classList.add('input-fail');
	      }
	    }, this);
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
	    var url = 'https://form-component.herokuapp.com/api/v1/submissions';
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
	    this.postData.addEventListener('click', this.handlePOST.bind(this));
	  },
	  handlePOST: function handlePOST() {
	    this.handleData();
	    var data = this.data;
	
	    var request = new XMLHttpRequest();
	    var method = 'POST';
	    var url = 'https://form-component.herokuapp.com/api/v1/submissions';
	
	    request.open(method, url, true);
	    request.setRequestHeader('Content-Type', 'application/json; charset=UTF-8');
	    request.send(JSON.stringify(data));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgZjA0YTdhNTZiZmNlZDk5MTAyOGIiLCJ3ZWJwYWNrOi8vLy4vanMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vanMvZm9ybUNvbXBvbmVudC5qcyIsIndlYnBhY2s6Ly8vLi9qcy9oYW5kbGVycy9wbGFjZWhvbGRlcnMuanMiLCJ3ZWJwYWNrOi8vLy4vanMvZGF0YS9mb3JtLWRhdGEuanMiLCJ3ZWJwYWNrOi8vLy4vanMvaGFuZGxlcnMvdGVzdC1mb3ItZWxlbWVudC5qcyIsIndlYnBhY2s6Ly8vLi9qcy9oYW5kbGVycy92YWxpZGF0aW9uLmpzIiwid2VicGFjazovLy8uL2pzL2hhbmRsZVJlcXVlc3RzLmpzIl0sIm5hbWVzIjpbImZvcm1Db21wb25lbnQiLCJpbml0IiwiY2FjaGVET00iLCJiaW5kRXZlbnRzIiwicmVxdWlyZWQiLCJmb3JtIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwibmFtZSIsImVtYWlsIiwicGhvbmUiLCJhZGRyZXNzIiwibGl2ZVZhbGlkYXRpb24iLCJiaW5kIiwicGxhY2Vob2xkZXJzVG9nZ2xlIiwiZSIsInRhcmdldCIsInR5cGUiLCJwbGFjZWhvbGRlcnMiLCJtb2R1bGUiLCJleHBvcnRzIiwibWFwIiwiaW5wdXQiLCJpbmRleCIsInBsYWNlaG9sZGVyIiwiZGF0YSIsInRvZ2dsZSIsImV2ZW50IiwiZm9ybURhdGEiLCJyZWdleCIsImVycm9yIiwidGVzdCIsInRlc3RGb3JFbGVtZW50IiwiZWwiLCJldmVudFR5cGUiLCJtZXRob2QiLCJhZGRFdmVudExpc3RlbmVyIiwidmFsaWRhdGlvbiIsInZhbGlkYXRlIiwiYWZ0ZXIiLCJuZXh0U2libGluZyIsImVycm9yTWVzc2FnZSIsInZhbHVlIiwicHJldmVudERlZmF1bHQiLCJtYXRjaCIsImNoZWNrS2V5Iiwia2V5Q29kZSIsIkV2ZW50IiwicHJlc3NCdG4iLCJrZXkiLCJkaXNwYXRjaEV2ZW50IiwidGV4dENvbnRlbnQiLCJjbGFzc0xpc3QiLCJyZW1vdmUiLCJhZGQiLCJ3aW5kb3ciLCJoYW5kbGVHRVQiLCJnZXREYXRhIiwiY2F0RGF0YSIsImdldEVsZW1lbnRCeUlkIiwiZG9nRGF0YSIsImhhbmRsZUNhbGwiLCJyZXF1ZXN0IiwiWE1MSHR0cFJlcXVlc3QiLCJ1cmwiLCJvbnJlYWR5c3RhdGVjaGFuZ2UiLCJyZWFkeVN0YXRlIiwic3RhdHVzIiwib2JqIiwiSlNPTiIsInBhcnNlIiwicmVzcG9uc2VUZXh0IiwiaGFuZGxlUmVuZGVyIiwib3BlbiIsInNlbmQiLCJjYXRJdGVtIiwiY3JlYXRlRWxlbWVudCIsImRvZ0l0ZW0iLCJpbm5lckhUTUwiLCJkIiwiY2F0IiwiZG9nIiwiYXBwZW5kQ2hpbGQiLCJjb25zb2xlIiwibG9nIiwiaGFuZGxlUE9TVCIsInBvc3REYXRhIiwieWVzQ2F0IiwieWVzRG9nIiwiaGFuZGxlRGF0YSIsInNldFJlcXVlc3RIZWFkZXIiLCJzdHJpbmdpZnkiLCJjaGVja2VkIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdUJBQWU7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ2xDQTs7QUFDQSx3Qjs7Ozs7Ozs7QUNEQTs7QUFDQTs7QUFDQTs7QUFFQSxLQUFNQSxnQkFBZ0I7QUFDcEJDLE9BRG9CLGtCQUNaO0FBQ04sVUFBS0MsUUFBTDtBQUNBLFVBQUtDLFVBQUw7QUFDQSw2QkFBSyxLQUFLQyxRQUFWO0FBQ0QsSUFMbUI7QUFNcEJGLFdBTm9CLHNCQU1SO0FBQ1YsVUFBS0csSUFBTCxHQUFZQyxTQUFTQyxhQUFULENBQXVCLE9BQXZCLENBQVo7QUFDQSxTQUFNQyxPQUFPRixTQUFTQyxhQUFULENBQXVCLE9BQXZCLENBQWI7QUFDQSxTQUFNRSxRQUFRSCxT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QStCLE9BQS9CLEVBQXdDLEtBQUtpRCxVQUFMLENBQWdCeEUsSUFBaEIsQ0FBcUIsSUFBckIsQ0FBeEM7QUFDRCxJQWhCZ0I7QUFpQmpCd0UsYUFqQmlCLHdCQWlCSDtBQUNaLFVBQUtJLFVBQUw7QUFDQSxTQUFNaEUsT0FBTyxLQUFLQSxJQUFsQjs7QUFFQSxTQUFNcUMsVUFBVSxJQUFJQyxjQUFKLEVBQWhCO0FBQ0EsU0FBTTVCLFNBQVMsTUFBZjtBQUNBLFNBQU02QixNQUFNLHlEQUFaOztBQUVBRixhQUFRVyxJQUFSLENBQWF0QyxNQUFiLEVBQXFCNkIsR0FBckIsRUFBMEIsSUFBMUI7QUFDQUYsYUFBUTRCLGdCQUFSLENBQXlCLGNBQXpCLEVBQXlDLGlDQUF6QztBQUNBNUIsYUFBUVksSUFBUixDQUFhTCxLQUFLc0IsU0FBTCxDQUFlbEUsSUFBZixDQUFiO0FBQ0QsSUE1QmdCO0FBNkJqQmdFLGFBN0JpQix3QkE2Qkg7QUFDWixVQUFLaEUsSUFBTCxHQUFZO0FBQ1ZqQixhQUFNLEtBQUtBLElBQUwsQ0FBVWtDLEtBRE47QUFFVmpDLGNBQU8sS0FBS0EsS0FBTCxDQUFXaUMsS0FGUjtBQUdWaEMsY0FBTyxLQUFLQSxLQUFMLENBQVdnQyxLQUhSO0FBSVYvQixnQkFBUyxLQUFLQSxPQUFMLENBQWErQixLQUpaO0FBS1ZzQyxZQUFLLElBTEs7QUFNVkMsWUFBSztBQU5LLE1BQVo7QUFRQSxTQUFJLEtBQUtNLE1BQUwsQ0FBWUssT0FBaEIsRUFBeUI7QUFDdkIsWUFBS25FLElBQUwsQ0FBVXVELEdBQVYsR0FBZ0IsS0FBaEI7QUFDRDtBQUNELFNBQUksS0FBS1EsTUFBTCxDQUFZSSxPQUFoQixFQUF5QjtBQUN2QixZQUFLbkUsSUFBTCxDQUFVd0QsR0FBVixHQUFnQixLQUFoQjtBQUNEO0FBQ0Y7QUE1Q2dCLEVBQW5CO0FBOENBSSxZQUFXcEYsSUFBWCxHIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKVxuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuXG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRleHBvcnRzOiB7fSxcbiBcdFx0XHRpZDogbW9kdWxlSWQsXG4gXHRcdFx0bG9hZGVkOiBmYWxzZVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sb2FkZWQgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIGYwNGE3YTU2YmZjZWQ5OTEwMjhiIiwiLypcbiAgV2VicGFjayBlbnRyeSBwb2ludFxuKi9cblxuaW1wb3J0ICcuL2Zvcm1Db21wb25lbnQnO1xuaW1wb3J0ICcuL2hhbmRsZVJlcXVlc3RzJztcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2pzL2luZGV4LmpzIiwiLypcbiAgZm9ybSBjb21wb25lbnRcbiovXG5cbmltcG9ydCB7IGluaXQsIHRvZ2dsZSB9IGZyb20gJy4vaGFuZGxlcnMvcGxhY2Vob2xkZXJzJztcbmltcG9ydCB7IHRlc3RGb3JFbGVtZW50IH0gZnJvbSAnLi9oYW5kbGVycy90ZXN0LWZvci1lbGVtZW50JztcbmltcG9ydCB7IHZhbGlkYXRlIH0gZnJvbSAnLi9oYW5kbGVycy92YWxpZGF0aW9uJztcblxuY29uc3QgZm9ybUNvbXBvbmVudCA9IHtcbiAgaW5pdCAoKSB7XG4gICAgdGhpcy5jYWNoZURPTSgpO1xuICAgIHRoaXMuYmluZEV2ZW50cygpO1xuICAgIGluaXQodGhpcy5yZXF1aXJlZCk7XG4gIH0sXG4gIGNhY2hlRE9NICgpIHtcbiAgICB0aGlzLmZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZm9ybScpO1xuICAgIGNvbnN0IG5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbmFtZScpO1xuICAgIGNvbnN0IGVtYWlsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2VtYWlsJyk7XG4gICAgY29uc3QgcGhvbmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcGhvbmUnKTtcbiAgICBjb25zdCBhZGRyZXNzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2FkZHJlc3MnKTtcbiAgICB0aGlzLnJlcXVpcmVkID0gW1xuICAgICAgbmFtZSwgZW1haWwsIHBob25lLCBhZGRyZXNzXG4gICAgXTtcbiAgfSxcbiAgYmluZEV2ZW50cyAoKSB7XG4gICAgLy8gdGVzdEZvckVsZW1lbnQgZm91bmQgaW4gaGFuZGxlcnMgZm9sZGVyXG4gICAgdGVzdEZvckVsZW1lbnQodGhpcy5mb3JtLCAnY2xpY2snLCB0aGlzLmxpdmVWYWxpZGF0aW9uLmJpbmQodGhpcykpO1xuICAgIHRlc3RGb3JFbGVtZW50KHRoaXMuZm9ybSwgJ2NsaWNrJywgdGhpcy5wbGFjZWhvbGRlcnNUb2dnbGUuYmluZCh0aGlzKSk7XG4gIH0sXG4gIGxpdmVWYWxpZGF0aW9uIChlKSB7XG4gICAgaWYgKGUudGFyZ2V0LnR5cGUgPT09ICdyYWRpbycpIHtcbiAgICAgIHJldHVybjtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFsaWRhdGUodGhpcy5yZXF1aXJlZCk7XG4gICAgfVxuICB9LFxuICBwbGFjZWhvbGRlcnNUb2dnbGUgKGUpIHtcbiAgICB0b2dnbGUodGhpcy5yZXF1aXJlZCk7XG4gIH1cbn1cbmZvcm1Db21wb25lbnQuaW5pdCgpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vanMvZm9ybUNvbXBvbmVudC5qcyIsIi8qXG4gIFNldCBpbml0aWFsIHBsYWNlaG9sZGVycyBmb3IgaW5wdXRzXG4qL1xuXG5pbXBvcnQgZm9ybURhdGEgZnJvbSAnLi4vZGF0YS9mb3JtLWRhdGEnO1xuXG52YXIgcGxhY2Vob2xkZXJzID0gbW9kdWxlLmV4cG9ydHMgPSB7XG4gIC8vIHNldCBpbml0aWFsIGlucHV0IHBsYWNlaG9sZGVyIHZhbHVlc1xuICBpbml0OiBmdW5jdGlvbiAocmVxdWlyZWQpIHtcbiAgICByZXF1aXJlZC5tYXAoZnVuY3Rpb24gKGlucHV0LCBpbmRleCkge1xuICAgICAgaWYgKGlucHV0KSB7XG4gICAgICAgIGlucHV0LnBsYWNlaG9sZGVyID0gZm9ybURhdGEuZGF0YVtpbmRleF0ucGxhY2Vob2xkZXI7XG4gICAgICB9XG4gICAgfSwgdGhpcyk7XG4gIH0sXG4gIHRvZ2dsZTogZnVuY3Rpb24gKHJlcXVpcmVkKSB7XG4gICAgcmVxdWlyZWQubWFwKGZ1bmN0aW9uIChpbnB1dCwgaW5kZXgpIHtcbiAgICAgIGlmIChldmVudC50YXJnZXQgIT0gaW5wdXQpIHtcbiAgICAgICAgaW5wdXQucGxhY2Vob2xkZXIgPSBmb3JtRGF0YS5kYXRhW2luZGV4XS5wbGFjZWhvbGRlcjtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIHRvZ2dsZSBpbnB1dCBwbGFjZWhvbGRlciB2YWx1ZSB0byBibGFuayBvbmx5IHdoZW4gdXNlciBzZWxlY3RzIGlucHV0XG4gICAgICAgIGlucHV0LnBsYWNlaG9sZGVyID0gJyc7XG4gICAgICB9XG4gICAgfSwgdGhpcyk7XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2pzL2hhbmRsZXJzL3BsYWNlaG9sZGVycy5qcyIsIi8qXG4gIEZvcm0gZGF0YVxuKi9cblxudmFyIGZvcm1EYXRhID0gbW9kdWxlLmV4cG9ydHMgPSB7XG4gIGRhdGE6IFtcbiAgICB7XG4gICAgICBwbGFjZWhvbGRlcjogJ05hbWUnLFxuICAgICAgcmVnZXg6ICdbYS16QS1aXSsoKFtcXCcsLiAtXVthLXpBLVogXSk/W2EtekEtWl0qKSokJyxcbiAgICAgIGVycm9yOiAnUGxlYXNlIGVudGVyIGxldHRlcnMgb25seSdcbiAgICB9LFxuICAgIHtcbiAgICAgIHBsYWNlaG9sZGVyOiAnRW1haWwnLFxuICAgICAgcmVnZXg6ICdeW2EtekEtWjAtOS4hIyQlJlxcJyorLz0/Xl9ge3x9fi1dK0BbYS16QS1aMC05XSg/OlthLXpBLVowLTktXXswLDYxfVthLXpBLVowLTldKT8oPzpcXC5bYS16QS1aMC05XSg/OlthLXpBLVowLTktXXswLDYxfVthLXpBLVowLTldKT8pKiQnLFxuICAgICAgZXJyb3I6ICdQbGVhc2UgZW50ZXIgYSB2YWxpZCBlbWFpbCdcbiAgICB9LFxuICAgIHtcbiAgICAgIHBsYWNlaG9sZGVyOiAnUGhvbmUnLFxuICAgICAgcmVnZXg6ICdeWzItOV17Mn1bMC05XXs4fSQnLFxuICAgICAgZXJyb3I6ICdQbGVhc2UgZW50ZXIgYSAxMCBkaWdpdCBwaG9uZSBudW1iZXInXG4gICAgfSxcbiAgICB7XG4gICAgICBwbGFjZWhvbGRlcjogJ0FkZHJlc3MnLFxuICAgICAgcmVnZXg6ICdeKD8hXFxzKiQpLisnLFxuICAgICAgZXJyb3I6ICdQbGVhc2UgZW50ZXIgeW91ciBhZGRyZXNzJ1xuICAgIH1cbiAgXVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vanMvZGF0YS9mb3JtLWRhdGEuanMiLCIvKlxuICBDcmVhdGVkIHRvIGF2b2lkIGVycm9ycyBpZiB0aGUgZWxlbWVudCBpcyBub3QgcHJlc2VudCBpbiB0aGUgRE9NXG4qL1xuXG52YXIgdGVzdCA9IG1vZHVsZS5leHBvcnRzID0ge1xuICB0ZXN0Rm9yRWxlbWVudDogZnVuY3Rpb24gKGVsLCBldmVudFR5cGUsIG1ldGhvZCkge1xuICAgIGlmIChlbCkge1xuICAgICAgZWwuYWRkRXZlbnRMaXN0ZW5lcihldmVudFR5cGUsIG1ldGhvZCk7XG4gICAgfVxuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9qcy9oYW5kbGVycy90ZXN0LWZvci1lbGVtZW50LmpzIiwiLypcbiAgZm9ybURhdGEgdXNlZCB0byBtYXRjaCB1c2VyIGlucHV0IGZvciB2YWxpZGF0aW9uXG4qL1xuXG5pbXBvcnQgZm9ybURhdGEgZnJvbSAnLi4vZGF0YS9mb3JtLWRhdGEnO1xuXG52YXIgdmFsaWRhdGlvbiA9IG1vZHVsZS5leHBvcnRzID0ge1xuICB2YWxpZGF0ZTogZnVuY3Rpb24gKHJlcXVpcmVkKSB7XG4gICAgcmVxdWlyZWQubWFwKGZ1bmN0aW9uIChpbnB1dCwgaW5kZXgpIHtcbiAgICAgIHZhciBhZnRlciA9IGlucHV0Lm5leHRTaWJsaW5nO1xuICAgICAgdmFyIGVycm9yTWVzc2FnZSA9IGFmdGVyLm5leHRTaWJsaW5nO1xuXG4gICAgICBpZiAoaW5wdXQudmFsdWUgPT09ICcnKSB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH0gZWxzZSBpZiAoaW5wdXQudmFsdWUubWF0Y2goZm9ybURhdGEuZGF0YVtpbmRleF0ucmVnZXgpKSB7XG4gICAgICAgIGVycm9yTWVzc2FnZS50ZXh0Q29udGVudCA9ICfinIUnO1xuICAgICAgICBlcnJvck1lc3NhZ2UuY2xhc3NMaXN0LnJlbW92ZSgnaW5wdXQtZmFpbCcpO1xuICAgICAgICBlcnJvck1lc3NhZ2UuY2xhc3NMaXN0LmFkZCgnaW5wdXQtc3VjY2VzcycpO1xuXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgY2hlY2tLZXkpO1xuXG4gICAgICAgIGZ1bmN0aW9uIGNoZWNrS2V5KGUpIHtcbiAgICAgICAgICBpZiAoZS5rZXlDb2RlID09PSAxMykge1xuICAgICAgICAgICAgdmFyIGUgPSBuZXcgRXZlbnQoJ2tleWRvd24nKTtcbiAgICAgICAgICAgIHByZXNzQnRuLmtleSA9IDk7XG4gICAgICAgICAgICBkb2N1bWVudC5kaXNwYXRjaEV2ZW50KHByZXNzQnRuKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGVycm9yTWVzc2FnZS50ZXh0Q29udGVudCA9IGZvcm1EYXRhLmRhdGFbaW5kZXhdLmVycm9yO1xuICAgICAgICBlcnJvck1lc3NhZ2UuY2xhc3NMaXN0LnJlbW92ZSgnaW5wdXQtc3VjY2VzcycpO1xuICAgICAgICBlcnJvck1lc3NhZ2UuY2xhc3NMaXN0LmFkZCgnaW5wdXQtZmFpbCcpO1xuICAgICAgfVxuICAgIH0sIHRoaXMpO1xuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9qcy9oYW5kbGVycy92YWxpZGF0aW9uLmpzIiwiLypcbiAgUmVxdWVzdCBkYXRhIGZyb20gQVBJXG4qL1xuY29uc3QgaGFuZGxlR0VUID0ge1xuICBpbml0ICgpIHtcbiAgICB0aGlzLmNhY2hlRE9NKCk7XG4gICAgdGhpcy5iaW5kRXZlbnRzKCk7XG4gIH0sXG4gIGNhY2hlRE9NICgpIHtcbiAgICB0aGlzLmdldERhdGEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZ2V0LWRhdGEnKTtcbiAgICB0aGlzLmNhdERhdGEgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2F0LWRhdGEnKTtcbiAgICB0aGlzLmRvZ0RhdGEgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZG9nLWRhdGEnKTtcbiAgfSxcbiAgYmluZEV2ZW50cyAoKSB7XG4gICAgdGhpcy5nZXREYXRhLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5oYW5kbGVDYWxsLmJpbmQodGhpcykpO1xuICB9LFxuICBoYW5kbGVDYWxsICgpIHtcbiAgICBjb25zdCByZXF1ZXN0ID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XG4gICAgY29uc3QgbWV0aG9kID0gJ0dFVCc7XG4gICAgY29uc3QgdXJsID0gJ2h0dHBzOi8vZm9ybS1jb21wb25lbnQuaGVyb2t1YXBwLmNvbS9hcGkvdjEvc3VibWlzc2lvbnMnO1xuICAgIHJlcXVlc3Qub25yZWFkeXN0YXRlY2hhbmdlID0gZnVuY3Rpb24gKCkge1xuICAgICAgaWYgKHRoaXMucmVhZHlTdGF0ZSA9PSA0ICYmIHRoaXMuc3RhdHVzID09IDIwMCkge1xuICAgICAgICBjb25zdCBvYmogPSBKU09OLnBhcnNlKHRoaXMucmVzcG9uc2VUZXh0KTtcbiAgICAgICAgaGFuZGxlR0VULmhhbmRsZVJlbmRlcihvYmopO1xuICAgICAgfVxuICAgIH1cbiAgICByZXF1ZXN0Lm9wZW4obWV0aG9kLCB1cmwsIHRydWUpO1xuICAgIHJlcXVlc3Quc2VuZCgpO1xuICB9LFxuICBoYW5kbGVSZW5kZXIgKGRhdGEpIHtcbiAgICBjb25zdCBjYXREYXRhID0gdGhpcy5jYXREYXRhO1xuICAgIGNvbnN0IGRvZ0RhdGEgPSB0aGlzLmRvZ0RhdGE7XG5cbiAgICBpZiAoZGF0YSkge1xuICAgICAgZGF0YS5tYXAoZCA9PiB7XG4gICAgICAgIGNvbnN0IGNhdEl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgICAgICBjb25zdCBkb2dJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcblxuICAgICAgICBjYXRJdGVtLmlubmVySFRNTCA9IGBcbiAgICAgICAgICAke2QubmFtZX0gYW5zd2VyZWQgJHtkLmNhdH0hYDtcblxuICAgICAgICBkb2dJdGVtLmlubmVySFRNTCA9IGBcbiAgICAgICAgICAke2QubmFtZX0gYW5zd2VyZWQgJHtkLmRvZ30hYDtcblxuICAgICAgICBjYXREYXRhLmFwcGVuZENoaWxkKGNhdEl0ZW0pO1xuICAgICAgICBkb2dEYXRhLmFwcGVuZENoaWxkKGRvZ0l0ZW0pO1xuICAgICAgfSk7XG4gICAgICBjb25zb2xlLmxvZyhkYXRhKTtcbiAgICB9XG4gIH1cbn1cbmhhbmRsZUdFVC5pbml0KCk7XG5cbmNvbnN0IGhhbmRsZVBPU1QgPSB7XG4gIGluaXQgKCkge1xuICAgIHRoaXMuY2FjaGVET00oKTtcbiAgICB0aGlzLmJpbmRFdmVudHMoKTtcbiAgfSxcbiAgY2FjaGVET00gKCkge1xuICAgIHRoaXMucG9zdERhdGEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucG9zdC1kYXRhJyk7XG4gICAgdGhpcy5uYW1lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25hbWUnKTtcbiAgICB0aGlzLmVtYWlsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2VtYWlsJyk7XG4gICAgdGhpcy5waG9uZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwaG9uZScpO1xuICAgIHRoaXMuYWRkcmVzcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhZGRyZXNzJyk7XG4gICAgdGhpcy55ZXNDYXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgneWVzLWNhdCcpO1xuICAgIHRoaXMueWVzRG9nID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3llcy1kb2cnKTtcbiAgfSxcbiAgYmluZEV2ZW50cyAoKSB7XG4gICAgdGhpcy5wb3N0RGF0YS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuaGFuZGxlUE9TVC5iaW5kKHRoaXMpKTtcbiAgfSxcbiAgaGFuZGxlUE9TVCAoKSB7XG4gICAgdGhpcy5oYW5kbGVEYXRhKCk7XG4gICAgY29uc3QgZGF0YSA9IHRoaXMuZGF0YTtcblxuICAgIGNvbnN0IHJlcXVlc3QgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcbiAgICBjb25zdCBtZXRob2QgPSAnUE9TVCc7XG4gICAgY29uc3QgdXJsID0gJ2h0dHBzOi8vZm9ybS1jb21wb25lbnQuaGVyb2t1YXBwLmNvbS9hcGkvdjEvc3VibWlzc2lvbnMnO1xuXG4gICAgcmVxdWVzdC5vcGVuKG1ldGhvZCwgdXJsLCB0cnVlKTtcbiAgICByZXF1ZXN0LnNldFJlcXVlc3RIZWFkZXIoJ0NvbnRlbnQtVHlwZScsICdhcHBsaWNhdGlvbi9qc29uOyBjaGFyc2V0PVVURi04Jyk7XG4gICAgcmVxdWVzdC5zZW5kKEpTT04uc3RyaW5naWZ5KGRhdGEpKTtcbiAgfSxcbiAgaGFuZGxlRGF0YSAoKSB7XG4gICAgdGhpcy5kYXRhID0ge1xuICAgICAgbmFtZTogdGhpcy5uYW1lLnZhbHVlLFxuICAgICAgZW1haWw6IHRoaXMuZW1haWwudmFsdWUsXG4gICAgICBwaG9uZTogdGhpcy5waG9uZS52YWx1ZSxcbiAgICAgIGFkZHJlc3M6IHRoaXMuYWRkcmVzcy52YWx1ZSxcbiAgICAgIGNhdDogJ25vJyxcbiAgICAgIGRvZzogJ25vJ1xuICAgIH1cbiAgICBpZiAodGhpcy55ZXNDYXQuY2hlY2tlZCkge1xuICAgICAgdGhpcy5kYXRhLmNhdCA9ICd5ZXMnO1xuICAgIH1cbiAgICBpZiAodGhpcy55ZXNEb2cuY2hlY2tlZCkge1xuICAgICAgdGhpcy5kYXRhLmRvZyA9ICd5ZXMnO1xuICAgIH1cbiAgfVxufVxuaGFuZGxlUE9TVC5pbml0KCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9qcy9oYW5kbGVSZXF1ZXN0cy5qcyJdLCJzb3VyY2VSb290IjoiIn0=