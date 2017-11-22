var BREAK_POINT = 850
var body = $('body');
var mainImage = $('#main-image');
var teamContainer = $('#team-container');
var teamMembers = $('.team-member');
var nav = $('#nav');
var navUl = $('#nav-ul');
var navLinks = $('.nav-link');
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
var linkStrings = ['projects', 'services', 'about', 'team', 'contact-us'];
var navFlag = 0;

$('#fullpage').onepage_scroll({
  animationTime: 600,
  pagination: false,
  responsiveFallback: BREAK_POINT,
  loop: false
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

navLinks.each(function (index) {
  var link = $(this)
  link.on('click', function () {
    var wait = false
    if (window.innerWidth <= BREAK_POINT) {
      wait = true
    }
    if (wait) {
      toggleNav(1)
      setTimeout(function () {
        console.log(link.data('link'))
        $.fn.moveTo(linkStrings.indexOf(link.data('link')))
      }, 1300)
    } else {
      $.fn.moveTo(linkStrings.indexOf(link.data('link')))
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
