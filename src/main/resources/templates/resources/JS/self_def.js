$(window).scroll(function () {

    if ($(this).scrollTop() > 100) {
        $("#gotop").slideDown();
    } else {
        $("#gotop").slideUp();
    }
    ;
});
$('#gotop').click(function () {
    $('html,body').animate({
        scrollTop: '0px'
    }, 100);//返回顶部所用的时间 返回顶部也可调用goto()函数
});
$("img").attr("alt", "");

AOS.init({
    offset: 200,
    duration: 600,
    easing: 'ease-out-back',
    delay: 100,
    disable: 'mobile'
});
$(document).ready(function () {
    $("video").attr("poster", "/statics/video.jpg");
});