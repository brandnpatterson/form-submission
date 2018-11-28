const forEach = require('./util');

(function() {
  'use strict';

  HTMLElement.prototype.oregano = function() {
    var form = this;

    var oregano = {
      init: function() {
        this.cacheDOM();
        this.bindEvents();
        this.setup();
      },
      cacheDOM: function() {
        this.$inputs = form.querySelectorAll('input:not([type="radio"])');
        this.$radioInputs = form.querySelectorAll('input[type="radio"]');
      },
      bindEvents: function() {
        var _this = this;

        form.addEventListener('submit', function(e) {
          e.preventDefault();
          _this.validate();
        });

        form.addEventListener('change', function() {
          _this.validate();
        });
      },
      setup: function() {
        var radiosByName = {};

        forEach(this.$inputs, function(input) {
          if (!input.dataset.placeholder) {
            var error = document.createElement('p');

            error.classList.add('oregano-error');
            input.parentNode.appendChild(error);
          }
        });

        forEach(this.$radioInputs, function(input) {
          if (!radiosByName[input.name]) {
            radiosByName[input.name] = input;
          }
        });

        var input;
        for (input in radiosByName) {
          var error = document.createElement('p');

          error.classList.add('oregano-error');
          radiosByName[input].parentNode.appendChild(error);
        }
      },
      validate: function() {
        forEach(this.$inputs, function(input) {
          var error = input.parentNode.querySelector('.oregano-error');
          var match = input.value.match(input.dataset.regex);

          if (input.dataset.placeholder) {
            if (match) {
              delete input.parentNode.dataset.invalid;
            } else {
              input.value = '';
              input.placeholder = input.dataset.error;
              input.parentNode.dataset.invalid = true;
            }
          } else if (error) {
            if (match) {
              error.textContent = '';
              delete input.parentNode.dataset.invalid;
            } else {
              error.textContent = input.dataset.error;
              input.parentNode.dataset.invalid = true;
            }
          }
        });

        forEach(this.$radioInputs, function(input) {
          var error = input.parentNode.querySelector('.oregano-error');

          if (input.checked) {
            error.textContent = '';

            delete input.parentNode.dataset.invalid;
          } else if (error) {
            error.textContent = input.dataset.error;
            input.parentNode.dataset.invalid = true;
          }
        });
      }
    };

    oregano.init();
  };
})();
