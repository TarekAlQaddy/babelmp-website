// $('#fullpage').fullpage({
//     slidesNavigation: true
// });
//
// function move() {
//     $.fn.fullpage.moveSlideLeft()
// }

// if (window.innerWidth >= 800) {
//   $('#fullpage').onepage_scroll({
//       animationTime: 600
//   })
// }

$('#fullpage').onepage_scroll({
    animationTime: 600,
    pagination: false
})
$('#slick').slick({
    prevArrow: $('#custom-prev'),
    nextArrow: $('#custom-next')
})

var mainImage = $('#main-image');
var teamContainer = $('#team-container');
var teamMembers = $('.team-member');
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

teamMembers.each(function (index) {
    $(this).on('click', function () {
        var imageUrl = 'url("' + team[index].image + '")'
        mainImage.fadeTo(300, 0, function () {
            mainImage.css({ 'background-image': imageUrl })
            mainImage.fadeTo(300, 1)
        })
    })
})


function repositionTeamMembers() {
    var containerWidth = teamContainer.width()
    var imageWidth = teamMembers.first().width()
    var leftMargin = imageWidth - ((containerWidth - imageWidth) / teamMembers.length)
    teamMembers.each(function (index) {
        if (index !== 0) {
            $(this).css({ 'margin-left': -leftMargin })
        }
    })
}
repositionTeamMembers()
window.addEventListener('resize', function () {
    repositionTeamMembers()
})