var BREAK_POINT = 850
var body = $('body');
var preloader = $('#preloader');
var preloaderOmg = $('preloader-img');
var mainImage = $('#main-image');
var backVideo = $('#background-video');
var memberEmail = $('#team-member-email');
var memberName = $('#team-member-name');
var memberPosition = $('#team-member-position');
var memberLinks = $('#team-member-links');
var teamContainer = $('#team-container');
var teamMembers = $('.team-member');
var nav = $('#mobile-nav');
var navUl = $('#mobile-nav-ul');
var navLinks = $('.nav-link');
var menu = $('#hamburger-menu');
var services = $('.service');
var servicesBackground = $('#services .image');
var team = [
  {
    name: 'Amr Ahmed Ismail',
    position: 'Founder & CEO',
    image: 'media/images/team/amr-full.jpg',
    email: 'amr.ismail@babelmp.com',
    links: {
      linkedin: 'https://www.linkedin.com/in/amr-ahmed-ismail-45845392/',
      behance: 'https://www.behance.net/amrahmedismail'
    }
  },
  {
    name: 'Sherif Ashraf',
    position: 'Chief Technical Officer',
    image: 'media/images/team/team.jpg',
    email: 'sherif.ashraf@babelmp.com',
    links: {
      behance: 'https://www.behance.net/SherifGabr'
    }
  },
  {
    name: 'Ahmed El-Sawi',
    position: 'Photographer',
    image: 'media/images/team/sawi-full.jpg',
    email: 'ahmed.elsawi@babelmp.com',
    links: {
      behance: 'https://www.behance.net/Ahmedelsaw607e'
    }
  },
  {
    name: 'Tarek Alqaddy',
    position: 'Front End Developer',
    image: 'media/images/team/tarek-full.jpg',
    email: 'tarek.alqaddy@babelmp.com',
    links: {
      linkedin: 'https://www.linkedin.com/in/tarek-alqaddy/',
      github: 'https://github.com/tarekalqaddy'
    }
  },
  {
    name: 'Amr Fathy',
    position: 'Back End Developer',
    image: 'media/images/team/team.jpg',
    email: 'amr.fathy@babelmp.com',
    links: {
      github: 'https://github.com/amrufathy',
      linkedin: 'https://www.linkedin.com/in/amrufathy/'
    }
  },
  {
    name: 'Mohammed Ghannam',
    position: 'Back End Developer',
    image: 'media/images/team/team.jpg',
    email: 'mohammed.ghannam@babelmp.com',
    links: {
      github: 'https://github.com/mmghannam',
      linkedin: 'https://www.linkedin.com/in/mohammad-ghannam-a69276b2/'
    }
  },
  {
    name: 'Mohamed Emam',
    position: 'Game Developer',
    image: 'media/images/team/emam-full.jpg',
    email: 'mohamed.emam@babelmp.com',
    links: {
      linkedin: 'https://www.linkedin.com/in/mohamed-emam-43601b104/',
      github: 'https://github.com/emam95'
    }
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
});
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
});


menu.on('click', function () {
  toggleNav(navFlag)
});

function toggleNav(isOpened) {
  if (isOpened) {
    navFlag = !navFlag;
    navUl.removeClass('active');
    setTimeout(function () {
      menu.removeClass('active');
      nav.removeClass('active');
    }, 700)
  } else {
    navFlag = !navFlag;
    menu.toggleClass('active');
    nav.toggleClass('active');
    setTimeout(function () {
      navUl.addClass('active');
    }, 500)
  }
}

navLinks.each(function () {
  var link = $(this);
  link.on('click', function () {
    if (window.innerWidth <= BREAK_POINT) {
      toggleNav(1);
      window.location = '#' +  link.data('link');
    } else {
      $.fn.moveTo(linkStrings.indexOf(link.data('link')) + 2);
    }
  })
});


teamMembers.each(function (index) {
  $(this).on('click', function () {
    var imageUrl = 'url("' + team[index].image + '")';
    mainImage.removeClass('active');
    memberName.html(team[index].name)
    memberEmail.html(team[index].email)
    memberPosition.html(team[index].position)
    memberLinks.html('');
    Object.keys(team[index].links).forEach(function (key) {
      img = $('<img>', {
        src: 'media/images/social/' + key + '.svg'
      });
      a = $('<a>', {
        href: team[index].links[key]
      })
      li = $('<li>');
      a.append(img);
      li.append(a);
      memberLinks.append(li)
    });
    setTimeout(function () {
      mainImage.css({'background-image': imageUrl});
      mainImage.addClass('active');
    }, 200)
  });
  $(this).on('mouseenter touchstart', function () {
    teamMembers.each(function () {
      $(this).removeClass('active');
    });
    $(this).addClass('active')
  });
  $(this).on('mouseleave blur', function () {
    teamMembers.each(function () {
      $(this).addClass('active')
    })
  })
});

services.each(function (index) {
  $(this).on('mouseenter click', function () {
    if (window.innerWidth > BREAK_POINT) {
      servicesBackground.each(function () {
        $(this).removeClass('active')
      })
      $(servicesBackground[index]).addClass('active');
    }
  })
});

function repositionTeamMembers() {
  var containerWidth = teamContainer.width();
  var imageWidth = teamMembers.first().width();
  var leftMargin = imageWidth + 4 - ((containerWidth - imageWidth) / (teamMembers.length - 1));
  teamMembers.each(function (index) {
    if (index !== 0) {
      $(this).css({'margin-left': -leftMargin})
    }
  })
}

window.addEventListener('resize', function () {
  repositionTeamMembers()
});
repositionTeamMembers();

$('#iframe-modal').iziModal({
  iframe: true,
  iframeHeight: 400,
  iframeURL: "https://player.vimeo.com/video/245121021",
  onOpening: function () {
    if (window.innerWidth > BREAK_POINT) {
      backVideo[0].pause()
    }
  },
  onClosing: function () {
    if (window.innerWidth > BREAK_POINT) {
      backVideo[0].play()
    }
  }
});
$('#open-video').on('click', function () {
  $('#iframe-modal').iziModal('open')
});

window.addEventListener('load', function () {
  preloader.fadeOut(1000);
})