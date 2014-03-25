/*!
 * jquery-loading plugin v1.0.0
 * http://github.com/mayswind/jquery-loading
 *
 * Copyright 2014 MaysWind
 * Licensed under the MIT license
 */

jQuery.fn.showLoading = function (options) {
    var settings = {
        "full": false,
        "delay": 0,
        "animate": false,
        "speed": "fast",
        "img": "img/loading.gif",
    };

    jQuery.extend(settings, options);

    var overlay = $("<div></div>");
    var img = $("<img></img>");

    jQuery(img).attr("src", settings.img).addClass("progressimg" + (settings.full ? "-full" : ""));
    jQuery(overlay).css("display", "none").addClass("loading" + (settings.full ? "-full" : "")).append(img).appendTo(this);

    if (settings.animate) {
        overlay.delay(settings.delay).fadeIn(settings.speed);
    }
    else {
        overlay.delay(settings.delay).show(0);
    }

    return this;
};

jQuery.fn.hideLoading = function (options) {
    var settings = {
        "animate": false,
        "speed": "fast"
    };

    jQuery.extend(settings, options);

    if (settings.animate) {
        jQuery(this).children(".loading").fadeOut(settings.speed);
        jQuery(this).children(".loading-full").fadeOut(settings.speed);
    }
    else {
        jQuery(this).children(".loading").hide();
        jQuery(this).children(".loading-full").hide();
    }

    jQuery(this).children(".loading").remove();
    jQuery(this).children(".loading-full").remove();

    return this;
};
