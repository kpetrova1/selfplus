/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 426:
/***/ (() => {

(function (a) {
  function b() {
    f = (window.pageYOffset || c.scrollTop) - (c.clientTop || 0);
    var b = a(window).height(),
        g = [];
    a.each(d, function (a, e) {
      if ('undefined' !== typeof e) {
        var c = e.offset().top,
            d = e.offset().top + e.height();
        c > f && c < f + b || d > f && d < f + b ? (e.addClass('is-in-view'), e.trigger('in-view')) : g.push(e);
      }
    });
    d = g;
  }

  var d = [],
      c = document.documentElement,
      f = (window.pageYOffset || c.scrollTop) - (c.clientTop || 0);
  a('.in-view-watcher').each(function (c, b) {
    d.push(a(b));
  });
  a.fn.extend({
    inViewWatcher: function inViewWatcher() {
      d.push(this);
      return this;
    }
  });
  a(window).on('scroll', b);
  a(window).on('load', b);
  b();
})(jQuery);

/***/ }),

/***/ 828:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony import */ var _inView_jquery_min__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(426);
/* harmony import */ var _inView_jquery_min__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_inView_jquery_min__WEBPACK_IMPORTED_MODULE_0__);



$(document).ready(function () {
  $('.tab__btn').on('click', function () {
    if ($(this).parent().hasClass('tab--active')) {
      $(this).parent().removeClass('tab--active');
      $(this).siblings('.tab__body').slideUp(400);
    } else {
      $('.tab__btn').parent().removeClass('tab--active');
      $('.tab-img').removeClass('tab-img--active');
      $(this).parent().addClass('tab--active');
      var tabNum = $(this).parent().attr('data-tab');
      $('.tab-img[data-tab="' + tabNum + '"]').addClass('tab-img--active');
      $('.tab__body').slideUp(400);
      $(this).siblings('.tab__body').slideDown(400);
    }
  });
  $('.open-popup-btn').on('click', function () {
    $('.popup').removeAttr('hidden');
    $('body').addClass('locked');
  });
  $('.close-popup').on('click', function () {
    $('.popup').attr('hidden', true);
    $('body').removeClass('locked');
  });
  $("input[name='join-type']").change(function (e) {
    var btn = e.currentTarget;

    if ($(btn).attr('id') === 'email') {
      $("#username").attr('placeholder', 'me@example.com');
    } else {
      $("#username").attr('placeholder', '@username');
    }
  });
  var contentSections = $('section'),
      navigationItems = $('.nav-dots a');
  updateNavigation();
  $(window).on('scroll', function () {
    updateNavigation();
  });
  navigationItems.on('click', function (event) {
    event.preventDefault();
    smoothScroll($(this.hash));
  });

  function updateNavigation() {
    contentSections.each(function () {
      var activeSection = $('.nav-dots a[href="#' + $(this).attr('id') + '"]').data('number') - 1;

      if ($(this).offset().top - $(window).height() / 4 < $(window).scrollTop() && $(this).offset().top + $(this).height() - $(window).height() / 4 > $(window).scrollTop()) {
        navigationItems.eq(activeSection).addClass('nav-dots__item--selected');
      } else {
        navigationItems.eq(activeSection).removeClass('nav-dots__item--selected');
      }
    });
  }

  function smoothScroll(target) {
    $('body,html').animate({
      scrollTop: target.offset().top
    }, 600);
  }
});

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	__webpack_require__(426);
/******/ 	var __webpack_exports__ = __webpack_require__(828);
/******/ 	
/******/ })()
;