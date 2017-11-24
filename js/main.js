var BREAK_POINT = 850
var body = $('body');
var mainImage = $('#main-image');
var teamContainer = $('#team-container');
var teamMembers = $('.team-member');
var nav = $('#mobile-nav');
var navUl = $('#nav-ul');
var navLinks = $('.nav-link');
var menu = $('#hamburger-menu');
var services = $('.service');
var servicesBackground = $('#services .image');
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
var linkStrings = ['projects', 'services', 'about', 'team', 'contact-us'];
var navFlag = 0;

$('#fullpage').onepage_scroll({
  animationTime: 700,
  pagination: false,
  responsiveFallback: BREAK_POINT,
  loop: false,
  easing: 'cubic-bezier(0.86, 0, 0.07, 1)'
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


menu.on('click', function () {
  toggleNav(navFlag)
})

function toggleNav(isOpened) {
  if (isOpened) {
    navFlag = !navFlag
    navUl.removeClass('active')
    setTimeout(function () {
      menu.removeClass('active')
      nav.removeClass('active')
    }, 700)
  } else {
    navFlag = !navFlag
    menu.toggleClass('active')
    nav.toggleClass('active')
    setTimeout(function () {
      navUl.addClass('active')
    }, 500)
  }
}

navLinks.each(function () {
  var link = $(this)
  link.on('click', function () {
    if (window.innerWidth <= BREAK_POINT) {
      toggleNav(1)
      window.location = '#' +  link.data('link')
    } else {
      $.fn.moveTo(linkStrings.indexOf(link.data('link')) + 2)
    }
  })
})


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

$('#iframe-modal').iziModal({
  iframe: true,
  iframeHeight: 400,
  iframeURL: "https://www.youtube.com/embed/KYuylu6PVsI?autoplay=1?rel=0&amp;controls=0&amp;showinfo=0"
});
$('#open-video').on('click', function () {
  $('#iframe-modal').iziModal('open')
})