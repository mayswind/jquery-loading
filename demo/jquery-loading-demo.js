$(document).ready(function() {
    $("#simplebtn").click(function () {
        showLoading({ "img": "../img/loading.gif" });
    });
    
    $("#overlaybtn").click(function () {
        showLoading({ full:true, "img": "../img/loading.gif" });
    });
    
    $("#animationbtn").click(function () {
        showLoading({ full:true, animate:true, speed:400, "img": "../img/loading.gif" });
    });
    
    $("#delaybtn").click(function () {
        showLoading({ full:true, animate:true, speed:400, delay:400, "img": "../img/loading.gif" });
    });
});

function showLoading(options) {
    var btn = $(this);
    var area = $("#loadingarea");
    area.showLoading(options);
    
    setTimeout(function() {
        area.hideLoading();
    }, 3000);
}
