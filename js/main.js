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

var mainImage = $('#main-image');
var teamImages = $('.team-member');
var team = [
    {
        image: 'media/images/amr-ismail-big.jpg'
    },
    {
        image: 'media/images/services-media.jpg'
    },
    {
        image: 'media/images/services-video.jpg'
    },
    {
        image: 'media/images/project-ajyal.jpg'
    },
    {
        image: 'media/images/logo-big.jpg'
    },
    {
        image: 'media/images/amr-ismail-big.jpg'
    },
    {
        image: 'media/images/amr-ismail-big.jpg'
    }
];

teamImages.each(function (index) {
    $(this).on('click', function () {
        var imageUrl = 'url("' + team[index].image + '")'
        mainImage.fadeTo(300, 0, function () {
            mainImage.css({ 'background-image': imageUrl })
            mainImage.fadeTo(300, 1)
        })
    })
})
