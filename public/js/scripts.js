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
/******/ 	return __webpack_require__(__webpack_require__.s = 72);
/******/ })
/************************************************************************/
/******/ ({

/***/ 72:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(73);


/***/ }),

/***/ 73:
/***/ (function(module, exports) {

// Loaders
// -------------------------------------------
$(".loader-on-change").on('change', function () {
    $('#full-loader').removeClass('Hidden');
    return true;
});

$(".loader-on-submit").on('submit', function () {
    $('#full-loader').removeClass('Hidden');
    return true;
});

$('.dont-submit-on-enter, .dson').keypress(function (e) {
    console.log("ENTER");
    if (e.which == 13) return false;
    if (e.which == 13) e.preventDefault();
});

// Modify cart item quantity 
// -------------------------------------------
$('.InputBtnQ').on('change keyup', function () {
    //  Original Article Price
    var value = $(this).siblings('.ArticlePrice').val();
    // Quantity
    var quantity = $(this).val();
    // Ner Value
    var newValue = value * quantity;
    // New Price Target
    var newPriceTarget = $(this).parent().parent().parent().siblings('.TotalItemPrice');

    console.log(value, quantity, newValue);
    modifyCartItemQ($(this), newPriceTarget, newValue);
});

function modifyCartItemQ(e, newPriceTarget, newValue) {
    e.siblings('.InputBtnQ').removeClass('Hidden');
    newPriceTarget.html('$ ' + newValue);
}

$('#MainOverlay').click(function () {
    checkoutSidebar('hide');
});
// Checkout sidebar
// -------------------------------------------		
window.checkoutSidebar = function (state) {

    var sidebar = $('.CheckoutCart');
    var wrapper = $('.main-wrapper');

    var show = function show() {
        sidebar.addClass('active');
        wrapper.addClass('allow-sidebar');
    };

    var hide = function hide() {
        sidebar.removeClass('active');
        wrapper.removeClass('allow-sidebar');
    };

    if (state == undefined) {
        if (sidebar.hasClass('active')) {
            hide();
        } else {
            show();
        }
    } else if (state == 'show') {
        show();
        return false;
    } else if (state == 'hide') {
        hide();
        return false;
    }
};

window.openCheckoutDesktop = function () {
    if ($(window).width() > 768) {
        checkoutSidebar('show');
    }
    return false;
};

// $(window).scroll(function (event) {
//     var scroll = $(window).scrollTop();

//     if (scroll > 125) {
//         $('.checkout-cart').addClass('scrolled');
//     }
//     else {
//         $('.checkout-cart').removeClass('scrolled');
//     }
// });


// Sidebar checkout absolute
// window.checkoutSidebar = function (action) {
//     if (action == 'open') {
//         $('#SideContainer').toggle(100);
//         $('#MainOverlay').fadeIn(100);
//     }
//     if (action == 'close') {
//         $('#SideContainer').toggle(100);
//         $('#MainOverlay').fadeOut(100);
//     }
// }

// $('#MainOverlay').click(function () {
//     checkoutSidebar("close");
// });

window.openFilters = function () {
    var filters = $('#SearchFilters');
    var trigger = $('#SearchFiltersTrigger');
    if (filters.hasClass('active')) {
        filters.removeClass('active');
        trigger.show();
    } else {
        filters.addClass('active');
        trigger.hide();
    }
};

// Hide alerts
// -------------------------------------------
// setTimeout(function(){
//     $('.alert').hide(100);
// }, 4000);


// Cart Resumen
// -------------------------------------------

// window.showCartResumeMobile = function()
// {
//     $('.cart-resume-details-mobile').toggleClass('Hidden', 100);
// }

/*
|--------------------------------------------------------------------------
| CART
|--------------------------------------------------------------------------
*/

window.sumAllItems = function () {
    sum = 0;
    $('.TotalItemPrice').each(function (index) {
        sum += parseInt($(this).html());
    });
    $('.SubTotal').html(sum);
};

// Sum divs text
window.sumDivs = function (origins, target) {
    var sum = 0;
    origins.each(function () {
        sum += parseFloat($(this).text());
    });
    target.text(sum);
};

// Check product variant stock
// -------------------------------------------
window.checkVariantStock = function () {
    var form = $('#AddToCartForm');
    var data = form.serialize();
    var allowSubmit = false;
    $.ajax({
        url: form.data('route'),
        method: 'GET',
        dataType: 'JSON',
        async: false,
        data: data,
        success: function success(data) {
            console.log(data);
            if (data.response == true) {
                if (data.message == '0') {
                    $('.AvailableStock').html("No hay stock disponible");
                    $('#AddToCartFormBtn').prop('disabled', true);
                } else {
                    $('.AvailableStock').html("Stock disponible: " + data.message);
                    $('#AddToCartFormBtn').prop('disabled', false);
                    allowSubmit = true;
                    console.log("Entro en SUCCESS");
                }
                $('#MaxQuantity').prop("max", data.message);
            } else {
                $('#Error').html(data.responseText);
                console.log("Entro en error 1");
            }
        },
        error: function error(data) {
            $('#Error').html(data.responseText);
            // location.reload();
            allowSubmit = false;
            console.log(data);
            console.log("Entro en error 2");
        }
    });
    return allowSubmit;
};

// Set cart items JSON
// -------------------------------------------
window.setItemsData = function () {
    itemData = [];

    $('.Item-Data').each(function () {
        var id = $(this).data('id');
        var price = $(this).data('price');
        var variant_id = $(this).data('variant');
        var quantity = $(this).val();

        item = {};
        item['id'] = id;
        item['variant_id'] = variant_id;
        item['price'] = price;
        item['quantity'] = quantity;
        // Update display total item price
        total = price * quantity;
        $('.' + id + '-TotalItemPrice').html(total);

        itemData.push(item);
    });
    // Update Total
    console.info(itemData);
    sumAllItems();
    $('#Items-Data').val(itemData);
};

// Add product to cart
// -------------------------------------------
window.addToCart = function (route, data) {
    $.ajax({
        url: route,
        method: 'POST',
        dataType: 'JSON',
        data: data,
        success: function success(data) {
            // console.log(data);
            if (data.response == 'success') {
                $('.AvailableStock').html("Stock disponible: " + data.newStock);
                toast_success('Ok!', data.message, 'bottomCenter', '', 2500);
                updateTotals();
                setItemsData();
                setTimeout(function () {
                    setItemsData();
                    sumAllItems();
                    // openCheckoutDesktop();
                }, 100);
            } else if (data.response == 'warning') {
                toast_success('Ups!', data.message, 'bottomCenter');
            }
        },
        error: function error(data) {
            $('#Error').html(data.responseText);
            console.log("Error en addtoCart()");
            // location.reload();
            // console.log(data);
        }
    });
};

// Remove product from cart
// -------------------------------------------
window.removeFromCart = function (route, cartItemId, variantId, quantity, div, action) {
    $.ajax({
        url: route,
        method: 'POST',
        dataType: 'JSON',
        data: { cartItemId: cartItemId, variantId: variantId, quantity: quantity, action: action, method: 'ajax' },
        success: function success(data) {
            if (data.response == 'cart-removed') {
                // console.log(data);
                updateTotals();
                window.location = window.location.href.split("?")[0];
                setItemsData();
            } else if (data.response == 'success') {
                $(div).hide(100);
                $(div).remove();
                updateTotals();
                setItemsData();
            }
        },
        error: function error(data) {
            //$('#Error').html(data.responseText);
            console.log("Error en removeFromCart()");
            console.log(data);
            // If an error pops when destroying an item, reload and prevent bad magic
            location.reload();
        }
    });
};

function updateTotals() {
    // Live Reloading stuff
    $("#SideContainerItemsFixed").load(window.location.href + " #SideContainerItemsFixed");
    $("#SideContainerItemsFloating").load(window.location.href + " #SideContainerItemsFloating");
    $(".TotalCartItems").load(window.location.href + " .TotalCartItems");
    $(".TotalCartItemsSidebar").load(window.location.href + " .TotalCartItemsSidebar");
    $(".CartSubTotal").load(window.location.href + " .CartSubTotal");
    $(".AvailableStock").load(window.location.href + " .AvailableStock");
}

// Submit Cart Form to Checkout
// -------------------------------------------
window.submitCartToCheckout = function (route, target, data, action) {
    //console.log("Ruta: " + route + " Target: " + target + " Data: " + data + "Action: "+ action);
    $.ajax({
        url: route,
        method: 'POST',
        dataType: 'JSON',
        data: { data: data, action: action },
        success: function success(data) {
            console.log(data);
            if (data.response == 'success') {
                console.log(target);
                if (target == 'reload') {
                    // Refresh page, delete parametters and open checkout sidebar
                    window.location = window.location.href.split("?")[0] + "?checkout-on";
                } else {
                    window.location.href = target;
                }
            } else {
                console.log('Error en submitForm');
                console.log(data);
                toast_error('', data.message, 'bottomCenter', '');
                $('.SideContainerError').html(data.message);
                // $('#Error').html(data.responseText);
            }
            // $('#Error').html(data.responseText);
        },
        error: function error(data) {
            // $('#Error').html(data.responseText);
            console.log("Error en submitForm()");
            location.reload();
            console.log(data);
            // location.reload();
        }
    });
};

// Validate and set coupon
// -------------------------------------------
window.validateAndSetCoupon = function (route, code, cartid) {
    var couponDiv = $('#CouponDiv');
    var couponSet = $('#SettedCoupon');
    console.log(code, cartid);
    $.ajax({
        url: route,
        method: 'POST',
        dataType: 'JSON',
        data: { code: code, cartid: cartid },
        beforeSend: function beforeSend() {
            console.log("Comprobando cupón...");
            $('.CouponLoader').removeClass('Hidden');
        },
        success: function success(data) {
            if (data.response == true) {
                $('#CouponValidationMessage').html("Cupón aceptado !");
                couponDiv.hide(200, function () {
                    couponSet.removeClass('Hidden');
                });
                location.reload();
            } else if (data.response == null) {
                $('#CouponValidationMessage').html(data.message);
            }
        },
        error: function error(data) {
            $('#CouponValidationMessage').html(data.responseText);
            console.log(data);
        },
        complete: function complete() {
            $('.CouponLoader').addClass('Hidden');
        }
    });
};

// Favs
// -------------------------------------------
window.addArticleToFavs = function (route, favid, articleid, action, displayButton) {
    $.ajax({
        url: route,
        method: 'POST',
        dataType: 'JSON',
        data: { fav_id: favid, article_id: articleid },
        success: function success(data) {
            if (data.response == true && data.result == 'added') {
                switch (action) {
                    case 'reload':
                        location.reload();
                        break;
                    case 'show':
                        displayButton.removeClass('fav-icon-nofav');
                        displayButton.addClass('fav-icon-isfav');
                        toast_success('Ok!', 'Producto agregado a favoritos', 'bottomCenter', '', 1000);
                        break;
                    case 'none':
                        console.log('Actualizado - Sin Acción');
                    default:
                        console.log('No hay acción');
                        break;
                }
            } else if (data.response == true && data.result == 'removed') {
                displayButton.addClass('fav-icon-nofav');
                displayButton.removeClass('fav-icon-isfav');
                toast_success('Ok!', 'Producto eliminado de favoritos', 'bottomCenter', '', 1000);
            }
            setFavsTotalIcon(data.favsCount);
        },
        error: function error(data) {
            $('#Error').html(data.responseText);
            console.log(data);
        }
    });
};

function setFavsTotalIcon(favs) {
    if (favs > 0) {
        $('.FavMainIcon').removeClass('far');
        $('.FavMainIcon').addClass('fa');
    } else if (favs == 0) {
        $('.FavMainIcon').removeClass('fa');
        $('.FavMainIcon').addClass('far');
    } else {
        $('.FavMainIcon').removeClass('fa');
        $('.FavMainIcon').removeClass('far');
        $('.FavMainIcon').addClass('fa');
        console.log("Error en setFavsTotalIcon()");
    }
}

window.removeArticleFromFavs = function (route, favid, action) {
    var doaction = action;
    $.ajax({
        url: route,
        method: 'POST',
        dataType: 'JSON',
        data: { fav_id: favid },
        success: function success(data) {
            $('#Error').html(data.responseText);
            console.log(data);
            if (data.response == true) {
                console.log(doaction);
                switch (doaction) {
                    case 'reload':
                        var action = 'reload';
                        toast_success('Ok!', 'Producto eliminado de favoritos', 'bottomCenter', action, 1000);
                        break;
                    default:
                        console.log('No hay acción');
                        break;
                }
            } else {
                //$('#Error').html(data.message['errorInfo']);
                console.log(data);
            }
        },
        error: function error(data) {
            //$('#Error').html(data.responseText);
            console.log(data);
        }
    });
};

window.removeAllArticlesFromFavs = function (route, customerid, action) {
    $.ajax({
        url: route,
        method: 'POST',
        dataType: 'JSON',
        data: { customer_id: customerid },
        success: function success(data) {
            console.log(data);
            //$('#Error').html(data.responseText);
            if (data.response == true) {
                switch (action) {
                    case 'reload':
                        location.reload();
                        break;
                    default:
                        console.log('No hay acción');
                        break;
                }
            } else {
                $('#Error').html(data.message['errorInfo']);
                console.log(data);
            }
        },
        error: function error(data) {
            //$('#Error').html(data.responseText);
            console.log(data);
        }
    });
};

/*
|--------------------------------------------------------------------------
| LOGIN AND REGISTER
|--------------------------------------------------------------------------
*/

$('#ResellerBox').hide();

window.openResellerRegistration = function () {
    $('#IsResellerCheckbox').prop('checked', true);
    $('.IfResellerEnable').prop('disabled', false);
    $('#ResellerBox').show(100);
    $('#ResellerCTA').hide(0);
    $('.NormaClientTitle').hide(0);
    $('.ResellerTitle').show(0);
};

window.closeResellerRegistration = function () {
    $('#IsResellerCheckbox').prop('checked', false);
    $('.IfResellerEnable').prop('disabled', true);
    $('#ResellerBox').hide(0);
    $('#ResellerCTA').show(100);
    $('.NormaClientTitle').show(0);
    $('.ResellerTitle').hide(0);
};

$(document).ready(function () {
    $('.GeoProvSelect').on('change', function () {
        var prov_id = $(this).val();
        getGeoLocs(prov_id);
    });
});

/*
|--------------------------------------------------------------------------
| MIX FUNCTIONS
|--------------------------------------------------------------------------
*/

window.closeElement = function (selector) {
    $(selector).hide(100);
};

window.getParam = function (parameterName) {
    var result = null,
        tmp = [];
    location.search.substr(1).split("&").forEach(function (item) {
        tmp = item.split("=");
        if (tmp[0] === parameterName) result = decodeURIComponent(tmp[1]);
    });
    return result;
};

window.getParams = function (url) {
    var params = {};
    var parser = document.createElement('a');
    parser.href = url;
    var query = parser.search.substring(1);
    var vars = query.split('&');
    for (var i = 0; i < vars.length; i++) {
        var pair = vars[i].split('=');
        params[pair[0]] = decodeURIComponent(pair[1]);
    }
    return params;
};

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgYmRmNDJmM2QxZjZkYjUwMDJiNzEiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9zdG9yZS9zY3JpcHRzLmpzIl0sIm5hbWVzIjpbIiQiLCJvbiIsInJlbW92ZUNsYXNzIiwia2V5cHJlc3MiLCJlIiwiY29uc29sZSIsImxvZyIsIndoaWNoIiwicHJldmVudERlZmF1bHQiLCJ2YWx1ZSIsInNpYmxpbmdzIiwidmFsIiwicXVhbnRpdHkiLCJuZXdWYWx1ZSIsIm5ld1ByaWNlVGFyZ2V0IiwicGFyZW50IiwibW9kaWZ5Q2FydEl0ZW1RIiwiaHRtbCIsImNsaWNrIiwiY2hlY2tvdXRTaWRlYmFyIiwid2luZG93Iiwic3RhdGUiLCJzaWRlYmFyIiwid3JhcHBlciIsInNob3ciLCJhZGRDbGFzcyIsImhpZGUiLCJ1bmRlZmluZWQiLCJoYXNDbGFzcyIsIm9wZW5DaGVja291dERlc2t0b3AiLCJ3aWR0aCIsIm9wZW5GaWx0ZXJzIiwiZmlsdGVycyIsInRyaWdnZXIiLCJzdW1BbGxJdGVtcyIsInN1bSIsImVhY2giLCJpbmRleCIsInBhcnNlSW50Iiwic3VtRGl2cyIsIm9yaWdpbnMiLCJ0YXJnZXQiLCJwYXJzZUZsb2F0IiwidGV4dCIsImNoZWNrVmFyaWFudFN0b2NrIiwiZm9ybSIsImRhdGEiLCJzZXJpYWxpemUiLCJhbGxvd1N1Ym1pdCIsImFqYXgiLCJ1cmwiLCJtZXRob2QiLCJkYXRhVHlwZSIsImFzeW5jIiwic3VjY2VzcyIsInJlc3BvbnNlIiwibWVzc2FnZSIsInByb3AiLCJyZXNwb25zZVRleHQiLCJlcnJvciIsInNldEl0ZW1zRGF0YSIsIml0ZW1EYXRhIiwiaWQiLCJwcmljZSIsInZhcmlhbnRfaWQiLCJpdGVtIiwidG90YWwiLCJwdXNoIiwiaW5mbyIsImFkZFRvQ2FydCIsInJvdXRlIiwibmV3U3RvY2siLCJ0b2FzdF9zdWNjZXNzIiwidXBkYXRlVG90YWxzIiwic2V0VGltZW91dCIsInJlbW92ZUZyb21DYXJ0IiwiY2FydEl0ZW1JZCIsInZhcmlhbnRJZCIsImRpdiIsImFjdGlvbiIsImxvY2F0aW9uIiwiaHJlZiIsInNwbGl0IiwicmVtb3ZlIiwicmVsb2FkIiwibG9hZCIsInN1Ym1pdENhcnRUb0NoZWNrb3V0IiwidG9hc3RfZXJyb3IiLCJ2YWxpZGF0ZUFuZFNldENvdXBvbiIsImNvZGUiLCJjYXJ0aWQiLCJjb3Vwb25EaXYiLCJjb3Vwb25TZXQiLCJiZWZvcmVTZW5kIiwiY29tcGxldGUiLCJhZGRBcnRpY2xlVG9GYXZzIiwiZmF2aWQiLCJhcnRpY2xlaWQiLCJkaXNwbGF5QnV0dG9uIiwiZmF2X2lkIiwiYXJ0aWNsZV9pZCIsInJlc3VsdCIsInNldEZhdnNUb3RhbEljb24iLCJmYXZzQ291bnQiLCJmYXZzIiwicmVtb3ZlQXJ0aWNsZUZyb21GYXZzIiwiZG9hY3Rpb24iLCJyZW1vdmVBbGxBcnRpY2xlc0Zyb21GYXZzIiwiY3VzdG9tZXJpZCIsImN1c3RvbWVyX2lkIiwib3BlblJlc2VsbGVyUmVnaXN0cmF0aW9uIiwiY2xvc2VSZXNlbGxlclJlZ2lzdHJhdGlvbiIsImRvY3VtZW50IiwicmVhZHkiLCJwcm92X2lkIiwiZ2V0R2VvTG9jcyIsImNsb3NlRWxlbWVudCIsInNlbGVjdG9yIiwiZ2V0UGFyYW0iLCJwYXJhbWV0ZXJOYW1lIiwidG1wIiwic2VhcmNoIiwic3Vic3RyIiwiZm9yRWFjaCIsImRlY29kZVVSSUNvbXBvbmVudCIsImdldFBhcmFtcyIsInBhcmFtcyIsInBhcnNlciIsImNyZWF0ZUVsZW1lbnQiLCJxdWVyeSIsInN1YnN0cmluZyIsInZhcnMiLCJpIiwibGVuZ3RoIiwicGFpciJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7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dkQsS0FBS2lCLEtBQUwsQ0FBVyxHQUFYLENBQU47QUFDQSxZQUFJc0MsSUFBSSxDQUFKLE1BQVdELGFBQWYsRUFBOEJsQixTQUFTdUIsbUJBQW1CSixJQUFJLENBQUosQ0FBbkIsQ0FBVDtBQUM3QixLQU5MO0FBT0EsV0FBT25CLE1BQVA7QUFDSCxDQVhEOztBQWNBakYsT0FBT3lHLFNBQVAsR0FBbUIsVUFBUzNFLEdBQVQsRUFBYztBQUM3QixRQUFJNEUsU0FBUyxFQUFiO0FBQ0gsUUFBSUMsU0FBU2YsU0FBU2dCLGFBQVQsQ0FBdUIsR0FBdkIsQ0FBYjtBQUNBRCxXQUFPOUMsSUFBUCxHQUFjL0IsR0FBZDtBQUNBLFFBQUkrRSxRQUFRRixPQUFPTixNQUFQLENBQWNTLFNBQWQsQ0FBd0IsQ0FBeEIsQ0FBWjtBQUNBLFFBQUlDLE9BQU9GLE1BQU0vQyxLQUFOLENBQVksR0FBWixDQUFYO0FBQ0EsU0FBSyxJQUFJa0QsSUFBSSxDQUFiLEVBQWdCQSxJQUFJRCxLQUFLRSxNQUF6QixFQUFpQ0QsR0FBakMsRUFBc0M7QUFDckMsWUFBSUUsT0FBT0gsS0FBS0MsQ0FBTCxFQUFRbEQsS0FBUixDQUFjLEdBQWQsQ0FBWDtBQUNBNEMsZUFBT1EsS0FBSyxDQUFMLENBQVAsSUFBa0JWLG1CQUFtQlUsS0FBSyxDQUFMLENBQW5CLENBQWxCO0FBQ0E7QUFDRCxXQUFPUixNQUFQO0FBQ0EsQ0FYRCxDIiwiZmlsZSI6Ii9qcy9zY3JpcHRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL1wiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDcyKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCBiZGY0MmYzZDFmNmRiNTAwMmI3MSIsIi8vIExvYWRlcnNcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiQoXCIubG9hZGVyLW9uLWNoYW5nZVwiKS5vbignY2hhbmdlJywgZnVuY3Rpb24gKCkge1xuICAgICQoJyNmdWxsLWxvYWRlcicpLnJlbW92ZUNsYXNzKCdIaWRkZW4nKTtcbiAgICByZXR1cm4gdHJ1ZTtcbn0pO1xuXG4kKFwiLmxvYWRlci1vbi1zdWJtaXRcIikub24oJ3N1Ym1pdCcsIGZ1bmN0aW9uICgpIHtcbiAgICAkKCcjZnVsbC1sb2FkZXInKS5yZW1vdmVDbGFzcygnSGlkZGVuJyk7XG4gICAgcmV0dXJuIHRydWU7XG59KTtcblxuJCgnLmRvbnQtc3VibWl0LW9uLWVudGVyLCAuZHNvbicpLmtleXByZXNzKGZ1bmN0aW9uIChlKSB7XG4gICAgY29uc29sZS5sb2coXCJFTlRFUlwiKTtcbiAgICBpZiAoZS53aGljaCA9PSAxMykgcmV0dXJuIGZhbHNlO1xuICAgIGlmIChlLndoaWNoID09IDEzKSBlLnByZXZlbnREZWZhdWx0KCk7XG59KTtcblxuLy8gTW9kaWZ5IGNhcnQgaXRlbSBxdWFudGl0eSBcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiQoJy5JbnB1dEJ0blEnKS5vbignY2hhbmdlIGtleXVwJywgZnVuY3Rpb24gKCkge1xuICAgIC8vICBPcmlnaW5hbCBBcnRpY2xlIFByaWNlXG4gICAgbGV0IHZhbHVlID0gJCh0aGlzKS5zaWJsaW5ncygnLkFydGljbGVQcmljZScpLnZhbCgpO1xuICAgIC8vIFF1YW50aXR5XG4gICAgbGV0IHF1YW50aXR5ID0gJCh0aGlzKS52YWwoKTtcbiAgICAvLyBOZXIgVmFsdWVcbiAgICBsZXQgbmV3VmFsdWUgPSAodmFsdWUgKiBxdWFudGl0eSk7XG4gICAgLy8gTmV3IFByaWNlIFRhcmdldFxuICAgIGxldCBuZXdQcmljZVRhcmdldCA9ICQodGhpcykucGFyZW50KCkucGFyZW50KCkucGFyZW50KCkuc2libGluZ3MoJy5Ub3RhbEl0ZW1QcmljZScpO1xuXG4gICAgY29uc29sZS5sb2codmFsdWUsIHF1YW50aXR5LCBuZXdWYWx1ZSk7XG4gICAgbW9kaWZ5Q2FydEl0ZW1RKCQodGhpcyksIG5ld1ByaWNlVGFyZ2V0LCBuZXdWYWx1ZSk7XG59KVxuXG5mdW5jdGlvbiBtb2RpZnlDYXJ0SXRlbVEoZSwgbmV3UHJpY2VUYXJnZXQsIG5ld1ZhbHVlKSB7XG4gICAgZS5zaWJsaW5ncygnLklucHV0QnRuUScpLnJlbW92ZUNsYXNzKCdIaWRkZW4nKTtcbiAgICBuZXdQcmljZVRhcmdldC5odG1sKCckICcgKyBuZXdWYWx1ZSk7XG59XG5cblxuJCgnI01haW5PdmVybGF5JykuY2xpY2soZnVuY3Rpb24oKXtcbiAgICBjaGVja291dFNpZGViYXIoJ2hpZGUnKTtcbn0pXG4vLyBDaGVja291dCBzaWRlYmFyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHRcdFxud2luZG93LmNoZWNrb3V0U2lkZWJhciA9IGZ1bmN0aW9uIChzdGF0ZSkge1xuXG4gICAgY29uc3Qgc2lkZWJhciA9ICQoJy5DaGVja291dENhcnQnKTtcbiAgICBjb25zdCB3cmFwcGVyID0gJCgnLm1haW4td3JhcHBlcicpO1xuXG4gICAgY29uc3Qgc2hvdyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgc2lkZWJhci5hZGRDbGFzcygnYWN0aXZlJyk7XG4gICAgICAgIHdyYXBwZXIuYWRkQ2xhc3MoJ2FsbG93LXNpZGViYXInKTtcbiAgICB9XG5cbiAgICBjb25zdCBoaWRlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBzaWRlYmFyLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcbiAgICAgICAgd3JhcHBlci5yZW1vdmVDbGFzcygnYWxsb3ctc2lkZWJhcicpO1xuICAgIH1cblxuXG4gICAgaWYgKHN0YXRlID09IHVuZGVmaW5lZCkge1xuICAgICAgICBpZiAoc2lkZWJhci5oYXNDbGFzcygnYWN0aXZlJykpIHtcbiAgICAgICAgICAgIGhpZGUoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHNob3coKTtcbiAgICAgICAgfVxuICAgIH0gZWxzZSBpZiAoc3RhdGUgPT0gJ3Nob3cnKSB7XG4gICAgICAgIHNob3coKTtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH0gZWxzZSBpZiAoc3RhdGUgPT0gJ2hpZGUnKSB7XG4gICAgICAgIGhpZGUoKTtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbn1cblxuXG5cbndpbmRvdy5vcGVuQ2hlY2tvdXREZXNrdG9wID0gZnVuY3Rpb24oKVxue1xuICAgIGlmICgkKHdpbmRvdykud2lkdGgoKSA+IDc2OCkge1xuICAgICAgICBjaGVja291dFNpZGViYXIoJ3Nob3cnKTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xufVxuXG5cbi8vICQod2luZG93KS5zY3JvbGwoZnVuY3Rpb24gKGV2ZW50KSB7XG4vLyAgICAgdmFyIHNjcm9sbCA9ICQod2luZG93KS5zY3JvbGxUb3AoKTtcblxuLy8gICAgIGlmIChzY3JvbGwgPiAxMjUpIHtcbi8vICAgICAgICAgJCgnLmNoZWNrb3V0LWNhcnQnKS5hZGRDbGFzcygnc2Nyb2xsZWQnKTtcbi8vICAgICB9XG4vLyAgICAgZWxzZSB7XG4vLyAgICAgICAgICQoJy5jaGVja291dC1jYXJ0JykucmVtb3ZlQ2xhc3MoJ3Njcm9sbGVkJyk7XG4vLyAgICAgfVxuLy8gfSk7XG5cblxuLy8gU2lkZWJhciBjaGVja291dCBhYnNvbHV0ZVxuLy8gd2luZG93LmNoZWNrb3V0U2lkZWJhciA9IGZ1bmN0aW9uIChhY3Rpb24pIHtcbi8vICAgICBpZiAoYWN0aW9uID09ICdvcGVuJykge1xuLy8gICAgICAgICAkKCcjU2lkZUNvbnRhaW5lcicpLnRvZ2dsZSgxMDApO1xuLy8gICAgICAgICAkKCcjTWFpbk92ZXJsYXknKS5mYWRlSW4oMTAwKTtcbi8vICAgICB9XG4vLyAgICAgaWYgKGFjdGlvbiA9PSAnY2xvc2UnKSB7XG4vLyAgICAgICAgICQoJyNTaWRlQ29udGFpbmVyJykudG9nZ2xlKDEwMCk7XG4vLyAgICAgICAgICQoJyNNYWluT3ZlcmxheScpLmZhZGVPdXQoMTAwKTtcbi8vICAgICB9XG4vLyB9XG5cbi8vICQoJyNNYWluT3ZlcmxheScpLmNsaWNrKGZ1bmN0aW9uICgpIHtcbi8vICAgICBjaGVja291dFNpZGViYXIoXCJjbG9zZVwiKTtcbi8vIH0pO1xuXG53aW5kb3cub3BlbkZpbHRlcnMgPSBmdW5jdGlvbiAoKSB7XG4gICAgY29uc3QgZmlsdGVycyA9ICQoJyNTZWFyY2hGaWx0ZXJzJyk7XG4gICAgY29uc3QgdHJpZ2dlciA9ICQoJyNTZWFyY2hGaWx0ZXJzVHJpZ2dlcicpO1xuICAgIGlmKGZpbHRlcnMuaGFzQ2xhc3MoJ2FjdGl2ZScpKVxuICAgIHtcbiAgICAgICAgZmlsdGVycy5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XG4gICAgICAgIHRyaWdnZXIuc2hvdygpO1xuICAgIH1cbiAgICBlbHNlXG4gICAge1xuICAgICAgICBmaWx0ZXJzLmFkZENsYXNzKCdhY3RpdmUnKTtcbiAgICAgICAgdHJpZ2dlci5oaWRlKCk7XG4gICAgfVxuXG59XG5cbi8vIEhpZGUgYWxlcnRzXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XG4vLyAgICAgJCgnLmFsZXJ0JykuaGlkZSgxMDApO1xuLy8gfSwgNDAwMCk7XG5cblxuLy8gQ2FydCBSZXN1bWVuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbi8vIHdpbmRvdy5zaG93Q2FydFJlc3VtZU1vYmlsZSA9IGZ1bmN0aW9uKClcbi8vIHtcbi8vICAgICAkKCcuY2FydC1yZXN1bWUtZGV0YWlscy1tb2JpbGUnKS50b2dnbGVDbGFzcygnSGlkZGVuJywgMTAwKTtcbi8vIH1cblxuLypcbnwtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxufCBDQVJUXG58LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiovXG5cblxud2luZG93LnN1bUFsbEl0ZW1zID0gZnVuY3Rpb24gKCkge1xuICAgIHN1bSA9IDA7XG4gICAgJCgnLlRvdGFsSXRlbVByaWNlJykuZWFjaChmdW5jdGlvbiAoaW5kZXgpIHtcbiAgICAgICAgc3VtICs9IHBhcnNlSW50KCQodGhpcykuaHRtbCgpKTtcbiAgICB9KTtcbiAgICAkKCcuU3ViVG90YWwnKS5odG1sKHN1bSk7XG59XG5cblxuLy8gU3VtIGRpdnMgdGV4dFxud2luZG93LnN1bURpdnMgPSBmdW5jdGlvbiAob3JpZ2lucywgdGFyZ2V0KSB7XG4gICAgbGV0IHN1bSA9IDA7XG4gICAgb3JpZ2lucy5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgc3VtICs9IHBhcnNlRmxvYXQoJCh0aGlzKS50ZXh0KCkpO1xuICAgIH0pO1xuICAgIHRhcmdldC50ZXh0KHN1bSk7XG59XG5cblxuLy8gQ2hlY2sgcHJvZHVjdCB2YXJpYW50IHN0b2NrXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG53aW5kb3cuY2hlY2tWYXJpYW50U3RvY2sgPSBmdW5jdGlvbigpIHtcbiAgICBsZXQgZm9ybSA9ICQoJyNBZGRUb0NhcnRGb3JtJyk7XG4gICAgbGV0IGRhdGEgPSBmb3JtLnNlcmlhbGl6ZSgpO1xuICAgIGxldCBhbGxvd1N1Ym1pdCA9IGZhbHNlO1xuICAgICQuYWpheCh7XG4gICAgICAgIHVybDogZm9ybS5kYXRhKCdyb3V0ZScpLFxuICAgICAgICBtZXRob2Q6ICdHRVQnLFxuICAgICAgICBkYXRhVHlwZTogJ0pTT04nLFxuICAgICAgICBhc3luYzogZmFsc2UsXG4gICAgICAgIGRhdGE6IGRhdGEsXG4gICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcbiAgICAgICAgICAgIGlmKGRhdGEucmVzcG9uc2UgPT0gdHJ1ZSlcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBpZihkYXRhLm1lc3NhZ2UgPT0gJzAnKVxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAkKCcuQXZhaWxhYmxlU3RvY2snKS5odG1sKFwiTm8gaGF5IHN0b2NrIGRpc3BvbmlibGVcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICAkKCcjQWRkVG9DYXJ0Rm9ybUJ0bicpLnByb3AoJ2Rpc2FibGVkJywgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAkKCcuQXZhaWxhYmxlU3RvY2snKS5odG1sKFwiU3RvY2sgZGlzcG9uaWJsZTogXCIgKyBkYXRhLm1lc3NhZ2UpO1xuICAgICAgICAgICAgICAgICAgICAgICAgJCgnI0FkZFRvQ2FydEZvcm1CdG4nKS5wcm9wKCdkaXNhYmxlZCcsIGZhbHNlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsbG93U3VibWl0ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiRW50cm8gZW4gU1VDQ0VTU1wiKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICQoJyNNYXhRdWFudGl0eScpLnByb3AoXCJtYXhcIiwgZGF0YS5tZXNzYWdlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAkKCcjRXJyb3InKS5odG1sKGRhdGEucmVzcG9uc2VUZXh0KTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkVudHJvIGVuIGVycm9yIDFcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIGVycm9yOiBmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgICAgICAgJCgnI0Vycm9yJykuaHRtbChkYXRhLnJlc3BvbnNlVGV4dCk7XG4gICAgICAgICAgICAvLyBsb2NhdGlvbi5yZWxvYWQoKTtcbiAgICAgICAgICAgIGFsbG93U3VibWl0ID0gZmFsc2U7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiRW50cm8gZW4gZXJyb3IgMlwiKTtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBhbGxvd1N1Ym1pdDtcbn1cblxuLy8gU2V0IGNhcnQgaXRlbXMgSlNPTlxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxud2luZG93LnNldEl0ZW1zRGF0YSA9IGZ1bmN0aW9uICgpIHtcbiAgICBpdGVtRGF0YSA9IFtdO1xuXG4gICAgJCgnLkl0ZW0tRGF0YScpLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgICBsZXQgaWQgPSAkKHRoaXMpLmRhdGEoJ2lkJyk7XG4gICAgICAgIGxldCBwcmljZSA9ICQodGhpcykuZGF0YSgncHJpY2UnKTtcbiAgICAgICAgbGV0IHZhcmlhbnRfaWQgPSAkKHRoaXMpLmRhdGEoJ3ZhcmlhbnQnKTtcbiAgICAgICAgbGV0IHF1YW50aXR5ID0gJCh0aGlzKS52YWwoKTtcblxuICAgICAgICBpdGVtID0ge31cbiAgICAgICAgaXRlbVsnaWQnXSA9IGlkO1xuICAgICAgICBpdGVtWyd2YXJpYW50X2lkJ10gPSB2YXJpYW50X2lkO1xuICAgICAgICBpdGVtWydwcmljZSddID0gcHJpY2U7XG4gICAgICAgIGl0ZW1bJ3F1YW50aXR5J10gPSBxdWFudGl0eTtcbiAgICAgICAgLy8gVXBkYXRlIGRpc3BsYXkgdG90YWwgaXRlbSBwcmljZVxuICAgICAgICB0b3RhbCA9IHByaWNlICogcXVhbnRpdHk7XG4gICAgICAgICQoJy4nICsgaWQgKyAnLVRvdGFsSXRlbVByaWNlJykuaHRtbCh0b3RhbCk7XG5cbiAgICAgICAgaXRlbURhdGEucHVzaChpdGVtKTtcbiAgICB9KTtcbiAgICAvLyBVcGRhdGUgVG90YWxcbiAgICBjb25zb2xlLmluZm8oaXRlbURhdGEpO1xuICAgIHN1bUFsbEl0ZW1zKCk7XG4gICAgJCgnI0l0ZW1zLURhdGEnKS52YWwoaXRlbURhdGEpO1xufVxuXG4vLyBBZGQgcHJvZHVjdCB0byBjYXJ0XG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG53aW5kb3cuYWRkVG9DYXJ0ID0gZnVuY3Rpb24gKHJvdXRlLCBkYXRhKSB7XG4gICAgJC5hamF4KHtcbiAgICAgICAgdXJsOiByb3V0ZSxcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgIGRhdGFUeXBlOiAnSlNPTicsXG4gICAgICAgIGRhdGE6IGRhdGEsXG4gICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhkYXRhKTtcbiAgICAgICAgICAgIGlmIChkYXRhLnJlc3BvbnNlID09ICdzdWNjZXNzJykge1xuICAgICAgICAgICAgICAgICQoJy5BdmFpbGFibGVTdG9jaycpLmh0bWwoXCJTdG9jayBkaXNwb25pYmxlOiBcIiArIGRhdGEubmV3U3RvY2spO1xuICAgICAgICAgICAgICAgIHRvYXN0X3N1Y2Nlc3MoJ09rIScsIGRhdGEubWVzc2FnZSwgJ2JvdHRvbUNlbnRlcicsICcnLCAyNTAwKTtcbiAgICAgICAgICAgICAgICB1cGRhdGVUb3RhbHMoKTtcbiAgICAgICAgICAgICAgICBzZXRJdGVtc0RhdGEoKTtcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgc2V0SXRlbXNEYXRhKCk7XG4gICAgICAgICAgICAgICAgICAgIHN1bUFsbEl0ZW1zKCk7XG4gICAgICAgICAgICAgICAgICAgIC8vIG9wZW5DaGVja291dERlc2t0b3AoKTtcbiAgICAgICAgICAgICAgICB9LCAxMDApO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChkYXRhLnJlc3BvbnNlID09ICd3YXJuaW5nJykge1xuICAgICAgICAgICAgICAgIHRvYXN0X3N1Y2Nlc3MoJ1VwcyEnLCBkYXRhLm1lc3NhZ2UsICdib3R0b21DZW50ZXInKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgZXJyb3I6IGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgICAgICAkKCcjRXJyb3InKS5odG1sKGRhdGEucmVzcG9uc2VUZXh0KTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiRXJyb3IgZW4gYWRkdG9DYXJ0KClcIik7XG4gICAgICAgICAgICAvLyBsb2NhdGlvbi5yZWxvYWQoKTtcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGRhdGEpO1xuICAgICAgICB9XG4gICAgfSk7XG59XG5cbiBcblxuLy8gUmVtb3ZlIHByb2R1Y3QgZnJvbSBjYXJ0XG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG53aW5kb3cucmVtb3ZlRnJvbUNhcnQgPSBmdW5jdGlvbiAocm91dGUsIGNhcnRJdGVtSWQsIHZhcmlhbnRJZCwgcXVhbnRpdHksIGRpdiwgYWN0aW9uKSB7XG4gICAgJC5hamF4KHtcbiAgICAgICAgdXJsOiByb3V0ZSxcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgIGRhdGFUeXBlOiAnSlNPTicsXG4gICAgICAgIGRhdGE6IHsgY2FydEl0ZW1JZDogY2FydEl0ZW1JZCwgdmFyaWFudElkOiB2YXJpYW50SWQsIHF1YW50aXR5OiBxdWFudGl0eSwgYWN0aW9uOiBhY3Rpb24sIG1ldGhvZDogJ2FqYXgnIH0sXG4gICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgICAgICBpZiAoZGF0YS5yZXNwb25zZSA9PSAnY2FydC1yZW1vdmVkJykge1xuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGRhdGEpO1xuICAgICAgICAgICAgICAgIHVwZGF0ZVRvdGFscygpO1xuICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbiA9IHdpbmRvdy5sb2NhdGlvbi5ocmVmLnNwbGl0KFwiP1wiKVswXTtcbiAgICAgICAgICAgICAgICBzZXRJdGVtc0RhdGEoKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoZGF0YS5yZXNwb25zZSA9PSAnc3VjY2VzcycpIHtcbiAgICAgICAgICAgICAgICAkKGRpdikuaGlkZSgxMDApO1xuICAgICAgICAgICAgICAgICQoZGl2KS5yZW1vdmUoKTtcbiAgICAgICAgICAgICAgICB1cGRhdGVUb3RhbHMoKTtcbiAgICAgICAgICAgICAgICBzZXRJdGVtc0RhdGEoKTtcbiAgICAgICAgICAgIH0gICBcbiAgICAgICAgfSxcbiAgICAgICAgZXJyb3I6IGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgICAgICAvLyQoJyNFcnJvcicpLmh0bWwoZGF0YS5yZXNwb25zZVRleHQpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJFcnJvciBlbiByZW1vdmVGcm9tQ2FydCgpXCIpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XG4gICAgICAgICAgICAvLyBJZiBhbiBlcnJvciBwb3BzIHdoZW4gZGVzdHJveWluZyBhbiBpdGVtLCByZWxvYWQgYW5kIHByZXZlbnQgYmFkIG1hZ2ljXG4gICAgICAgICAgICBsb2NhdGlvbi5yZWxvYWQoKTtcbiAgICAgICAgfVxuICAgIH0pO1xufVxuXG5mdW5jdGlvbiB1cGRhdGVUb3RhbHMoKSB7XG4gICAgLy8gTGl2ZSBSZWxvYWRpbmcgc3R1ZmZcbiAgICAkKFwiI1NpZGVDb250YWluZXJJdGVtc0ZpeGVkXCIpLmxvYWQod2luZG93LmxvY2F0aW9uLmhyZWYgKyBcIiAjU2lkZUNvbnRhaW5lckl0ZW1zRml4ZWRcIik7XG4gICAgJChcIiNTaWRlQ29udGFpbmVySXRlbXNGbG9hdGluZ1wiKS5sb2FkKHdpbmRvdy5sb2NhdGlvbi5ocmVmICsgXCIgI1NpZGVDb250YWluZXJJdGVtc0Zsb2F0aW5nXCIpO1xuICAgICQoXCIuVG90YWxDYXJ0SXRlbXNcIikubG9hZCh3aW5kb3cubG9jYXRpb24uaHJlZiArIFwiIC5Ub3RhbENhcnRJdGVtc1wiKTtcbiAgICAkKFwiLlRvdGFsQ2FydEl0ZW1zU2lkZWJhclwiKS5sb2FkKHdpbmRvdy5sb2NhdGlvbi5ocmVmICsgXCIgLlRvdGFsQ2FydEl0ZW1zU2lkZWJhclwiKTtcbiAgICAkKFwiLkNhcnRTdWJUb3RhbFwiKS5sb2FkKHdpbmRvdy5sb2NhdGlvbi5ocmVmICsgXCIgLkNhcnRTdWJUb3RhbFwiKTtcbiAgICAkKFwiLkF2YWlsYWJsZVN0b2NrXCIpLmxvYWQod2luZG93LmxvY2F0aW9uLmhyZWYgKyBcIiAuQXZhaWxhYmxlU3RvY2tcIik7XG59XG5cbi8vIFN1Ym1pdCBDYXJ0IEZvcm0gdG8gQ2hlY2tvdXRcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbndpbmRvdy5zdWJtaXRDYXJ0VG9DaGVja291dCA9IGZ1bmN0aW9uIChyb3V0ZSwgdGFyZ2V0LCBkYXRhLCBhY3Rpb24pIHtcbiAgICAvL2NvbnNvbGUubG9nKFwiUnV0YTogXCIgKyByb3V0ZSArIFwiIFRhcmdldDogXCIgKyB0YXJnZXQgKyBcIiBEYXRhOiBcIiArIGRhdGEgKyBcIkFjdGlvbjogXCIrIGFjdGlvbik7XG4gICAgJC5hamF4KHtcbiAgICAgICAgdXJsOiByb3V0ZSxcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgIGRhdGFUeXBlOiAnSlNPTicsXG4gICAgICAgIGRhdGE6IHsgZGF0YSwgYWN0aW9uOiBhY3Rpb24gfSxcbiAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xuICAgICAgICAgICAgaWYgKGRhdGEucmVzcG9uc2UgPT0gJ3N1Y2Nlc3MnKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2codGFyZ2V0KTtcbiAgICAgICAgICAgICAgICBpZiAodGFyZ2V0ID09ICdyZWxvYWQnKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIFJlZnJlc2ggcGFnZSwgZGVsZXRlIHBhcmFtZXR0ZXJzIGFuZCBvcGVuIGNoZWNrb3V0IHNpZGViYXJcbiAgICAgICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uID0gd2luZG93LmxvY2F0aW9uLmhyZWYuc3BsaXQoXCI/XCIpWzBdICsgXCI/Y2hlY2tvdXQtb25cIjtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IHRhcmdldDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdFcnJvciBlbiBzdWJtaXRGb3JtJyk7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XG4gICAgICAgICAgICAgICAgdG9hc3RfZXJyb3IoJycsIGRhdGEubWVzc2FnZSwgJ2JvdHRvbUNlbnRlcicsICcnKTtcbiAgICAgICAgICAgICAgICAkKCcuU2lkZUNvbnRhaW5lckVycm9yJykuaHRtbChkYXRhLm1lc3NhZ2UpO1xuICAgICAgICAgICAgICAgIC8vICQoJyNFcnJvcicpLmh0bWwoZGF0YS5yZXNwb25zZVRleHQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gJCgnI0Vycm9yJykuaHRtbChkYXRhLnJlc3BvbnNlVGV4dCk7XG4gICAgICAgIH0sXG4gICAgICAgIGVycm9yOiBmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgICAgICAgLy8gJCgnI0Vycm9yJykuaHRtbChkYXRhLnJlc3BvbnNlVGV4dCk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIkVycm9yIGVuIHN1Ym1pdEZvcm0oKVwiKTtcbiAgICAgICAgICAgIGxvY2F0aW9uLnJlbG9hZCgpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XG4gICAgICAgICAgICAvLyBsb2NhdGlvbi5yZWxvYWQoKTtcbiAgICAgICAgfVxuICAgIH0pO1xufVxuXG4vLyBWYWxpZGF0ZSBhbmQgc2V0IGNvdXBvblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxud2luZG93LnZhbGlkYXRlQW5kU2V0Q291cG9uID0gZnVuY3Rpb24gKHJvdXRlLCBjb2RlLCBjYXJ0aWQpIHtcbiAgICBsZXQgY291cG9uRGl2ID0gJCgnI0NvdXBvbkRpdicpO1xuICAgIGxldCBjb3Vwb25TZXQgPSAkKCcjU2V0dGVkQ291cG9uJyk7XG4gICAgY29uc29sZS5sb2coY29kZSwgY2FydGlkKTtcbiAgICAkLmFqYXgoe1xuICAgICAgICB1cmw6IHJvdXRlLFxuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgZGF0YVR5cGU6ICdKU09OJyxcbiAgICAgICAgZGF0YTogeyBjb2RlOiBjb2RlLCBjYXJ0aWQ6IGNhcnRpZCB9LFxuICAgICAgICBiZWZvcmVTZW5kOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIkNvbXByb2JhbmRvIGN1cMOzbi4uLlwiKTtcbiAgICAgICAgICAgICQoJy5Db3Vwb25Mb2FkZXInKS5yZW1vdmVDbGFzcygnSGlkZGVuJyk7XG4gICAgICAgIH0sXG4gICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgICAgICBpZiAoZGF0YS5yZXNwb25zZSA9PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgJCgnI0NvdXBvblZhbGlkYXRpb25NZXNzYWdlJykuaHRtbChcIkN1cMOzbiBhY2VwdGFkbyAhXCIpO1xuICAgICAgICAgICAgICAgIGNvdXBvbkRpdi5oaWRlKDIwMCwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICBjb3Vwb25TZXQucmVtb3ZlQ2xhc3MoJ0hpZGRlbicpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIGxvY2F0aW9uLnJlbG9hZCgpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChkYXRhLnJlc3BvbnNlID09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAkKCcjQ291cG9uVmFsaWRhdGlvbk1lc3NhZ2UnKS5odG1sKGRhdGEubWVzc2FnZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIGVycm9yOiBmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgICAgICAgJCgnI0NvdXBvblZhbGlkYXRpb25NZXNzYWdlJykuaHRtbChkYXRhLnJlc3BvbnNlVGV4dCk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcbiAgICAgICAgfSxcbiAgICAgICAgY29tcGxldGU6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICQoJy5Db3Vwb25Mb2FkZXInKS5hZGRDbGFzcygnSGlkZGVuJyk7XG4gICAgICAgIH1cbiAgICB9KTtcbn1cblxuLy8gRmF2c1xuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxud2luZG93LmFkZEFydGljbGVUb0ZhdnMgPSBmdW5jdGlvbiAocm91dGUsIGZhdmlkLCBhcnRpY2xlaWQsIGFjdGlvbiwgZGlzcGxheUJ1dHRvbikge1xuICAgICQuYWpheCh7XG4gICAgICAgIHVybDogcm91dGUsXG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICBkYXRhVHlwZTogJ0pTT04nLFxuICAgICAgICBkYXRhOiB7IGZhdl9pZDogZmF2aWQsIGFydGljbGVfaWQ6IGFydGljbGVpZCB9LFxuICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgICAgICAgaWYgKGRhdGEucmVzcG9uc2UgPT0gdHJ1ZSAmJiBkYXRhLnJlc3VsdCA9PSAnYWRkZWQnKSB7XG4gICAgICAgICAgICAgICAgc3dpdGNoIChhY3Rpb24pIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAncmVsb2FkJzpcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvY2F0aW9uLnJlbG9hZCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ3Nob3cnOlxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheUJ1dHRvbi5yZW1vdmVDbGFzcygnZmF2LWljb24tbm9mYXYnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXlCdXR0b24uYWRkQ2xhc3MoJ2Zhdi1pY29uLWlzZmF2Jyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0b2FzdF9zdWNjZXNzKCdPayEnLCAnUHJvZHVjdG8gYWdyZWdhZG8gYSBmYXZvcml0b3MnLCAnYm90dG9tQ2VudGVyJywgJycsIDEwMDApO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ25vbmUnOlxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0FjdHVhbGl6YWRvIC0gU2luIEFjY2nDs24nKTtcbiAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdObyBoYXkgYWNjacOzbicpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIGlmIChkYXRhLnJlc3BvbnNlID09IHRydWUgJiYgZGF0YS5yZXN1bHQgPT0gJ3JlbW92ZWQnKSB7XG4gICAgICAgICAgICAgICAgZGlzcGxheUJ1dHRvbi5hZGRDbGFzcygnZmF2LWljb24tbm9mYXYnKTtcbiAgICAgICAgICAgICAgICBkaXNwbGF5QnV0dG9uLnJlbW92ZUNsYXNzKCdmYXYtaWNvbi1pc2ZhdicpO1xuICAgICAgICAgICAgICAgIHRvYXN0X3N1Y2Nlc3MoJ09rIScsICdQcm9kdWN0byBlbGltaW5hZG8gZGUgZmF2b3JpdG9zJywgJ2JvdHRvbUNlbnRlcicsICcnLCAxMDAwKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHNldEZhdnNUb3RhbEljb24oZGF0YS5mYXZzQ291bnQpO1xuICAgICAgICB9LFxuICAgICAgICBlcnJvcjogZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgICAgICAgICQoJyNFcnJvcicpLmh0bWwoZGF0YS5yZXNwb25zZVRleHQpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XG4gICAgICAgIH1cbiAgICB9KTtcbn1cblxuZnVuY3Rpb24gc2V0RmF2c1RvdGFsSWNvbihmYXZzKSB7XG4gICAgaWYgKGZhdnMgPiAwKSB7XG4gICAgICAgICQoJy5GYXZNYWluSWNvbicpLnJlbW92ZUNsYXNzKCdmYXInKTtcbiAgICAgICAgJCgnLkZhdk1haW5JY29uJykuYWRkQ2xhc3MoJ2ZhJyk7XG4gICAgfSBlbHNlIGlmIChmYXZzID09IDApIHtcbiAgICAgICAgJCgnLkZhdk1haW5JY29uJykucmVtb3ZlQ2xhc3MoJ2ZhJyk7XG4gICAgICAgICQoJy5GYXZNYWluSWNvbicpLmFkZENsYXNzKCdmYXInKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICAkKCcuRmF2TWFpbkljb24nKS5yZW1vdmVDbGFzcygnZmEnKTtcbiAgICAgICAgJCgnLkZhdk1haW5JY29uJykucmVtb3ZlQ2xhc3MoJ2ZhcicpO1xuICAgICAgICAkKCcuRmF2TWFpbkljb24nKS5hZGRDbGFzcygnZmEnKTtcbiAgICAgICAgY29uc29sZS5sb2coXCJFcnJvciBlbiBzZXRGYXZzVG90YWxJY29uKClcIik7XG4gICAgfVxufVxuXG53aW5kb3cucmVtb3ZlQXJ0aWNsZUZyb21GYXZzID0gZnVuY3Rpb24gKHJvdXRlLCBmYXZpZCwgYWN0aW9uKSB7XG4gICAgdmFyIGRvYWN0aW9uID0gYWN0aW9uO1xuICAgICQuYWpheCh7XG4gICAgICAgIHVybDogcm91dGUsXG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICBkYXRhVHlwZTogJ0pTT04nLFxuICAgICAgICBkYXRhOiB7IGZhdl9pZDogZmF2aWQgfSxcbiAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgICAgICAgICQoJyNFcnJvcicpLmh0bWwoZGF0YS5yZXNwb25zZVRleHQpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XG4gICAgICAgICAgICBpZiAoZGF0YS5yZXNwb25zZSA9PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZG9hY3Rpb24pO1xuICAgICAgICAgICAgICAgIHN3aXRjaCAoZG9hY3Rpb24pIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAncmVsb2FkJzpcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBhY3Rpb24gPSAncmVsb2FkJztcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvYXN0X3N1Y2Nlc3MoJ09rIScsICdQcm9kdWN0byBlbGltaW5hZG8gZGUgZmF2b3JpdG9zJywgJ2JvdHRvbUNlbnRlcicsIGFjdGlvbiwgMTAwMCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdObyBoYXkgYWNjacOzbicpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyQoJyNFcnJvcicpLmh0bWwoZGF0YS5tZXNzYWdlWydlcnJvckluZm8nXSk7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIGVycm9yOiBmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgICAgICAgLy8kKCcjRXJyb3InKS5odG1sKGRhdGEucmVzcG9uc2VUZXh0KTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xuICAgICAgICB9XG4gICAgfSk7XG59XG5cblxud2luZG93LnJlbW92ZUFsbEFydGljbGVzRnJvbUZhdnMgPSBmdW5jdGlvbiAocm91dGUsIGN1c3RvbWVyaWQsIGFjdGlvbikge1xuICAgICQuYWpheCh7XG4gICAgICAgIHVybDogcm91dGUsXG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICBkYXRhVHlwZTogJ0pTT04nLFxuICAgICAgICBkYXRhOiB7IGN1c3RvbWVyX2lkOiBjdXN0b21lcmlkIH0sXG4gICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcbiAgICAgICAgICAgIC8vJCgnI0Vycm9yJykuaHRtbChkYXRhLnJlc3BvbnNlVGV4dCk7XG4gICAgICAgICAgICBpZiAoZGF0YS5yZXNwb25zZSA9PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgc3dpdGNoIChhY3Rpb24pIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAncmVsb2FkJzpcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvY2F0aW9uLnJlbG9hZCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnTm8gaGF5IGFjY2nDs24nKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgJCgnI0Vycm9yJykuaHRtbChkYXRhLm1lc3NhZ2VbJ2Vycm9ySW5mbyddKTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgZXJyb3I6IGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgICAgICAvLyQoJyNFcnJvcicpLmh0bWwoZGF0YS5yZXNwb25zZVRleHQpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XG4gICAgICAgIH1cbiAgICB9KTtcbn1cblxuLypcbnwtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxufCBMT0dJTiBBTkQgUkVHSVNURVJcbnwtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuKi9cblxuJCgnI1Jlc2VsbGVyQm94JykuaGlkZSgpO1xuXG53aW5kb3cub3BlblJlc2VsbGVyUmVnaXN0cmF0aW9uID0gZnVuY3Rpb24oKVxue1xuICAgICQoJyNJc1Jlc2VsbGVyQ2hlY2tib3gnKS5wcm9wKCdjaGVja2VkJywgdHJ1ZSk7XG4gICAgJCgnLklmUmVzZWxsZXJFbmFibGUnKS5wcm9wKCdkaXNhYmxlZCcsIGZhbHNlKTtcbiAgICAkKCcjUmVzZWxsZXJCb3gnKS5zaG93KDEwMCk7XG4gICAgJCgnI1Jlc2VsbGVyQ1RBJykuaGlkZSgwKTtcbiAgICAkKCcuTm9ybWFDbGllbnRUaXRsZScpLmhpZGUoMCk7XG4gICAgJCgnLlJlc2VsbGVyVGl0bGUnKS5zaG93KDApO1xufVxuXG5cbndpbmRvdy5jbG9zZVJlc2VsbGVyUmVnaXN0cmF0aW9uID0gZnVuY3Rpb24oKVxue1xuICAgICQoJyNJc1Jlc2VsbGVyQ2hlY2tib3gnKS5wcm9wKCdjaGVja2VkJywgZmFsc2UpO1xuICAgICQoJy5JZlJlc2VsbGVyRW5hYmxlJykucHJvcCgnZGlzYWJsZWQnLCB0cnVlKTtcbiAgICAkKCcjUmVzZWxsZXJCb3gnKS5oaWRlKDApO1xuICAgICQoJyNSZXNlbGxlckNUQScpLnNob3coMTAwKTtcbiAgICAkKCcuTm9ybWFDbGllbnRUaXRsZScpLnNob3coMCk7XG4gICAgJCgnLlJlc2VsbGVyVGl0bGUnKS5oaWRlKDApO1xufVxuXG4kKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpe1xuICAgICQoJy5HZW9Qcm92U2VsZWN0Jykub24oJ2NoYW5nZScsIGZ1bmN0aW9uKCl7XG4gICAgICAgIGxldCBwcm92X2lkID0gJCh0aGlzKS52YWwoKTtcbiAgICAgICAgZ2V0R2VvTG9jcyhwcm92X2lkKTtcbiAgICB9KTtcbn0pO1xuXG5cbi8qXG58LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbnwgTUlYIEZVTkNUSU9OU1xufC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4qL1xuXG53aW5kb3cuY2xvc2VFbGVtZW50ID0gZnVuY3Rpb24oc2VsZWN0b3IpXG57XG4gICAgJChzZWxlY3RvcikuaGlkZSgxMDApO1xufVxuXG53aW5kb3cuZ2V0UGFyYW0gPSBmdW5jdGlvbihwYXJhbWV0ZXJOYW1lKSB7XG4gICAgdmFyIHJlc3VsdCA9IG51bGwsXG4gICAgICAgIHRtcCA9IFtdO1xuICAgIGxvY2F0aW9uLnNlYXJjaFxuICAgICAgICAuc3Vic3RyKDEpXG4gICAgICAgIC5zcGxpdChcIiZcIilcbiAgICAgICAgLmZvckVhY2goZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgICAgdG1wID0gaXRlbS5zcGxpdChcIj1cIik7XG4gICAgICAgIGlmICh0bXBbMF0gPT09IHBhcmFtZXRlck5hbWUpIHJlc3VsdCA9IGRlY29kZVVSSUNvbXBvbmVudCh0bXBbMV0pO1xuICAgICAgICB9KTtcbiAgICByZXR1cm4gcmVzdWx0O1xufVxuXG5cbndpbmRvdy5nZXRQYXJhbXMgPSBmdW5jdGlvbih1cmwpIHtcbiAgICB2YXIgcGFyYW1zID0ge307XG5cdHZhciBwYXJzZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG5cdHBhcnNlci5ocmVmID0gdXJsO1xuXHR2YXIgcXVlcnkgPSBwYXJzZXIuc2VhcmNoLnN1YnN0cmluZygxKTtcblx0dmFyIHZhcnMgPSBxdWVyeS5zcGxpdCgnJicpO1xuXHRmb3IgKHZhciBpID0gMDsgaSA8IHZhcnMubGVuZ3RoOyBpKyspIHtcblx0XHR2YXIgcGFpciA9IHZhcnNbaV0uc3BsaXQoJz0nKTtcblx0XHRwYXJhbXNbcGFpclswXV0gPSBkZWNvZGVVUklDb21wb25lbnQocGFpclsxXSk7XG5cdH1cblx0cmV0dXJuIHBhcmFtcztcbn1cblxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9zdG9yZS9zY3JpcHRzLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==