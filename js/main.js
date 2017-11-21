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
  pagination: false,
  responsiveFallback: 850
})
$('#slick').slick({
  prevArrow: $('#custom-prev'),
  nextArrow: $('#custom-next'),
  slidesToShow: 2,
  responsive: [
    {
      breakpoint: 650,
      settings: {
        slidesToShow: 1
      }
    }
  ]
})

var mainImage = $('#main-image');
var teamContainer = $('#team-container');
var teamMembers = $('.team-member');
var nav = $('#nav');
var menu = $('#hamburger-menu');
var services = $('.service');
var servicesBackground = $('#services-section .image');
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
    mainImage.removeClass('active');
    setTimeout(function () {
      mainImage.css({'background-image': imageUrl})
      mainImage.addClass('active');
    }, 200)
  })
})

services.each(function (index) {
  $(this).on('mouseenter touchstart', function () {
    servicesBackground.removeClass('active');
    $(servicesBackground[index]).addClass('active');
  })
})

function repositionTeamMembers() {
  var containerWidth = teamContainer.width()
  var imageWidth = teamMembers.first().width()
  var leftMargin = imageWidth + 4 - ((containerWidth - imageWidth) / (teamMembers.length - 1))
  teamMembers.each(function (index) {
    if (index !== 0) {
      $(this).css({'margin-left': -leftMargin})
    }
  })
}

window.addEventListener('resize', function () {
  repositionTeamMembers()
})
repositionTeamMembers()

menu.on('click', function () {
  toggleNav()
})

function toggleNav() {
  menu.toggleClass('active')
  nav.toggleClass('active')
}