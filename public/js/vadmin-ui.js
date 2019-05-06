/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 74);
/******/ })
/************************************************************************/
/******/ ({

/***/ 74:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(75);


/***/ }),

/***/ 75:
/***/ (function(module, exports) {

$('.btnClose').click(function () {
    // $(this).parent().addClass('Hidden');
    $(this).parent().hide();
});

var searchFilters = $('#SearchFilters');
searchFilters.hide();

$('#SearchFiltersBtn').on('click', function () {
    searchFilters.toggle(100);
});

$(window).scroll(function (event) {
    var scroll = $(window).scrollTop();
    if (scroll > 80) {
        $('.fixed-if-scroll').addClass('true');
        $('.fixed-if-scroll').removeClass('false');
    } else {
        $('.fixed-if-scroll').removeClass('true');
        $('.fixed-if-scroll').addClass('false');
    }
});

// Prevent ENTER key on forms
// $(document).ready(function() {
//     $(window).keydown(function(event){
//         if(event.keyCode == 13) {
//         event.preventDefault();
//             return false;
//         }
//     });
// });

// Remap Enter as Tab Key

$(document).ready(function () {
    if (!allowEnterOnForms) {
        $(document).keydown(function (e) {

            // Set self as the current item in focus
            var self = $(':focus'),

            // Set the form by the current item in focus
            form = self.parents('form:eq(0)'),
                focusable;

            // Array of Indexable/Tab-able items
            focusable = form.find('input,a,select,button,textarea').filter(':visible');

            function enterKey() {
                if (e.which === 13 && !self.is('textarea')) {
                    // [Enter] key

                    // If not a regular hyperlink/button/textarea
                    if ($.inArray(self, focusable) && !self.is('a') && !self.is('button')) {
                        // Then prevent the default [Enter] key behaviour from submitting the form
                        e.preventDefault();
                    } // Otherwise follow the link/button as by design, or put new line in textarea

                    // Focus on the next item (either previous or next depending on shift)
                    focusable.eq(focusable.index(self) + (e.shiftKey ? -1 : 1)).focus();

                    return false;
                }
            }
            // We need to capture the [Shift] key and check the [Enter] key either way.
            if (e.shiftKey) {
                enterKey();
            } else {
                enterKey();
            }
        });
    } else {
        console.log("Enter Key on Forms Enabled");
    }
});

// Coupon select option

window.couponSetOption = function (option) {
    var quantityContainer = $('#CouponQuantityOption');
    var percentContainer = $('#CouponPercentOption');

    if (option == 'percent') {
        percentContainer.removeClass("Hidden");
        quantityContainer.addClass("Hidden");
        quantityContainer.children('input').val('');
        return;
    }

    if (option == 'quantity') {
        percentContainer.addClass("Hidden");
        quantityContainer.removeClass("Hidden");
        percentContainer.children('input').val('');
        return;
    }
};

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMjQxZjBjMzI3MTE1MGQ5YTUyMWMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy92YWRtaW4tdWkuanMiXSwibmFtZXMiOlsiJCIsImNsaWNrIiwicGFyZW50IiwiaGlkZSIsInNlYXJjaEZpbHRlcnMiLCJvbiIsInRvZ2dsZSIsIndpbmRvdyIsInNjcm9sbCIsImV2ZW50Iiwic2Nyb2xsVG9wIiwiYWRkQ2xhc3MiLCJyZW1vdmVDbGFzcyIsImRvY3VtZW50IiwicmVhZHkiLCJhbGxvd0VudGVyT25Gb3JtcyIsImtleWRvd24iLCJlIiwic2VsZiIsImZvcm0iLCJwYXJlbnRzIiwiZm9jdXNhYmxlIiwiZmluZCIsImZpbHRlciIsImVudGVyS2V5Iiwid2hpY2giLCJpcyIsImluQXJyYXkiLCJwcmV2ZW50RGVmYXVsdCIsImVxIiwiaW5kZXgiLCJzaGlmdEtleSIsImZvY3VzIiwiY29uc29sZSIsImxvZyIsImNvdXBvblNldE9wdGlvbiIsIm9wdGlvbiIsInF1YW50aXR5Q29udGFpbmVyIiwicGVyY2VudENvbnRhaW5lciIsImNoaWxkcmVuIiwidmFsIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUM3REFBLEVBQUUsV0FBRixF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UUFBakIsQ0FBMEIsUUFBMUI7QUFDQTBCLDBCQUFrQnpCLFdBQWxCLENBQThCLFFBQTlCO0FBQ0EwQix5QkFBaUJDLFFBQWpCLENBQTBCLE9BQTFCLEVBQW1DQyxHQUFuQyxDQUF1QyxFQUF2QztBQUNBO0FBQ0g7QUFDSixDQXBCRCxDIiwiZmlsZSI6Ii9qcy92YWRtaW4tdWkuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gNzQpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIDI0MWYwYzMyNzExNTBkOWE1MjFjIiwiJCgnLmJ0bkNsb3NlJykuY2xpY2soZnVuY3Rpb24oKXtcclxuICAgIC8vICQodGhpcykucGFyZW50KCkuYWRkQ2xhc3MoJ0hpZGRlbicpO1xyXG4gICAgJCh0aGlzKS5wYXJlbnQoKS5oaWRlKCk7XHJcbn0pO1xyXG5cclxudmFyIHNlYXJjaEZpbHRlcnMgPSAkKCcjU2VhcmNoRmlsdGVycycpO1xyXG5zZWFyY2hGaWx0ZXJzLmhpZGUoKTtcclxuXHJcbiQoJyNTZWFyY2hGaWx0ZXJzQnRuJykub24oJ2NsaWNrJywgZnVuY3Rpb24oKXtcclxuICAgIHNlYXJjaEZpbHRlcnMudG9nZ2xlKDEwMCk7XHJcbn0pO1xyXG5cclxuJCh3aW5kb3cpLnNjcm9sbChmdW5jdGlvbiAoZXZlbnQpIHtcclxuICAgIGxldCBzY3JvbGwgPSAkKHdpbmRvdykuc2Nyb2xsVG9wKCk7XHJcbiAgICBpZiAoc2Nyb2xsID4gODApIHtcclxuICAgICAgICAkKCcuZml4ZWQtaWYtc2Nyb2xsJykuYWRkQ2xhc3MoJ3RydWUnKTtcclxuICAgICAgICAkKCcuZml4ZWQtaWYtc2Nyb2xsJykucmVtb3ZlQ2xhc3MoJ2ZhbHNlJyk7XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgICAkKCcuZml4ZWQtaWYtc2Nyb2xsJykucmVtb3ZlQ2xhc3MoJ3RydWUnKTtcclxuICAgICAgICAkKCcuZml4ZWQtaWYtc2Nyb2xsJykuYWRkQ2xhc3MoJ2ZhbHNlJyk7XHJcbiAgICB9XHJcbn0pO1xyXG5cclxuLy8gUHJldmVudCBFTlRFUiBrZXkgb24gZm9ybXNcclxuLy8gJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKSB7XHJcbi8vICAgICAkKHdpbmRvdykua2V5ZG93bihmdW5jdGlvbihldmVudCl7XHJcbi8vICAgICAgICAgaWYoZXZlbnQua2V5Q29kZSA9PSAxMykge1xyXG4vLyAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbi8vICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuLy8gICAgICAgICB9XHJcbi8vICAgICB9KTtcclxuLy8gfSk7XHJcblxyXG4vLyBSZW1hcCBFbnRlciBhcyBUYWIgS2V5XHJcblxyXG4kKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpIHtcclxuICAgIGlmKCFhbGxvd0VudGVyT25Gb3JtcylcclxuICAgIHtcclxuICAgICAgICAkKGRvY3VtZW50KS5rZXlkb3duKGZ1bmN0aW9uKGUpIHtcclxuXHJcbiAgICAgICAgICAgIC8vIFNldCBzZWxmIGFzIHRoZSBjdXJyZW50IGl0ZW0gaW4gZm9jdXNcclxuICAgICAgICAgICAgdmFyIHNlbGYgPSAkKCc6Zm9jdXMnKSxcclxuICAgICAgICAgICAgICAgIC8vIFNldCB0aGUgZm9ybSBieSB0aGUgY3VycmVudCBpdGVtIGluIGZvY3VzXHJcbiAgICAgICAgICAgICAgICBmb3JtID0gc2VsZi5wYXJlbnRzKCdmb3JtOmVxKDApJyksXHJcbiAgICAgICAgICAgICAgICBmb2N1c2FibGU7XHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgIC8vIEFycmF5IG9mIEluZGV4YWJsZS9UYWItYWJsZSBpdGVtc1xyXG4gICAgICAgICAgICBmb2N1c2FibGUgPSBmb3JtLmZpbmQoJ2lucHV0LGEsc2VsZWN0LGJ1dHRvbix0ZXh0YXJlYScpLmZpbHRlcignOnZpc2libGUnKTtcclxuICAgICAgICBcclxuICAgICAgICAgICAgZnVuY3Rpb24gZW50ZXJLZXkoKXtcclxuICAgICAgICAgICAgaWYgKGUud2hpY2ggPT09IDEzICYmICFzZWxmLmlzKCd0ZXh0YXJlYScpKSB7IC8vIFtFbnRlcl0ga2V5XHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAvLyBJZiBub3QgYSByZWd1bGFyIGh5cGVybGluay9idXR0b24vdGV4dGFyZWFcclxuICAgICAgICAgICAgICAgIGlmICgkLmluQXJyYXkoc2VsZiwgZm9jdXNhYmxlKSAmJiAoIXNlbGYuaXMoJ2EnKSkgJiYgKCFzZWxmLmlzKCdidXR0b24nKSkpe1xyXG4gICAgICAgICAgICAgICAgLy8gVGhlbiBwcmV2ZW50IHRoZSBkZWZhdWx0IFtFbnRlcl0ga2V5IGJlaGF2aW91ciBmcm9tIHN1Ym1pdHRpbmcgdGhlIGZvcm1cclxuICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgICAgIH0gLy8gT3RoZXJ3aXNlIGZvbGxvdyB0aGUgbGluay9idXR0b24gYXMgYnkgZGVzaWduLCBvciBwdXQgbmV3IGxpbmUgaW4gdGV4dGFyZWFcclxuICAgICAgICBcclxuICAgICAgICAgICAgICAgIC8vIEZvY3VzIG9uIHRoZSBuZXh0IGl0ZW0gKGVpdGhlciBwcmV2aW91cyBvciBuZXh0IGRlcGVuZGluZyBvbiBzaGlmdClcclxuICAgICAgICAgICAgICAgIGZvY3VzYWJsZS5lcShmb2N1c2FibGUuaW5kZXgoc2VsZikgKyAoZS5zaGlmdEtleSA/IC0xIDogMSkpLmZvY3VzKCk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvLyBXZSBuZWVkIHRvIGNhcHR1cmUgdGhlIFtTaGlmdF0ga2V5IGFuZCBjaGVjayB0aGUgW0VudGVyXSBrZXkgZWl0aGVyIHdheS5cclxuICAgICAgICAgICAgaWYgKGUuc2hpZnRLZXkpIHsgZW50ZXJLZXkoKSB9IGVsc2UgeyBlbnRlcktleSgpIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIGVsc2VcclxuICAgIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIkVudGVyIEtleSBvbiBGb3JtcyBFbmFibGVkXCIpO1xyXG4gICAgfVxyXG59KTtcclxuXHJcbi8vIENvdXBvbiBzZWxlY3Qgb3B0aW9uXHJcblxyXG53aW5kb3cuY291cG9uU2V0T3B0aW9uID0gZnVuY3Rpb24ob3B0aW9uKVxyXG57XHJcbiAgICBjb25zdCBxdWFudGl0eUNvbnRhaW5lciA9ICQoJyNDb3Vwb25RdWFudGl0eU9wdGlvbicpO1xyXG4gICAgY29uc3QgcGVyY2VudENvbnRhaW5lciA9ICQoJyNDb3Vwb25QZXJjZW50T3B0aW9uJyk7XHJcblxyXG4gICAgaWYob3B0aW9uID09ICdwZXJjZW50JylcclxuICAgIHtcclxuICAgICAgICBwZXJjZW50Q29udGFpbmVyLnJlbW92ZUNsYXNzKFwiSGlkZGVuXCIpO1xyXG4gICAgICAgIHF1YW50aXR5Q29udGFpbmVyLmFkZENsYXNzKFwiSGlkZGVuXCIpO1xyXG4gICAgICAgIHF1YW50aXR5Q29udGFpbmVyLmNoaWxkcmVuKCdpbnB1dCcpLnZhbCgnJyk7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGlmKG9wdGlvbiA9PSAncXVhbnRpdHknKVxyXG4gICAge1xyXG4gICAgICAgIHBlcmNlbnRDb250YWluZXIuYWRkQ2xhc3MoXCJIaWRkZW5cIik7XHJcbiAgICAgICAgcXVhbnRpdHlDb250YWluZXIucmVtb3ZlQ2xhc3MoXCJIaWRkZW5cIik7XHJcbiAgICAgICAgcGVyY2VudENvbnRhaW5lci5jaGlsZHJlbignaW5wdXQnKS52YWwoJycpO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3ZhZG1pbi11aS5qcyJdLCJzb3VyY2VSb290IjoiIn0=