// $('#fullpage').fullpage({
//     slidesNavigation: true
// });
//
// function move() {
//     $.fn.fullpage.moveSlideLeft()
// }

$('#fullpage').onepage_scroll({
    animationTime: 600
})
$('#slick').slick({
    prevArrow: $('#custom-prev'),
    nextArrow: $('#custom-next')
})