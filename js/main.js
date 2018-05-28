var BREAK_POINT = 850;
var body = $('body');
var preloader = $('#preloader');
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
    image: 'media/images/team/sherif-full.jpg',
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
    image: 'media/images/team/fathy-full.jpg',
    email: 'amr.fathy@babelmp.com',
    links: {
      github: 'https://github.com/amrufathy',
      linkedin: 'https://www.linkedin.com/in/amrufathy/'
    }
  },
  {
    name: 'Mohammed Ghannam',
    position: 'Back End Developer',
    image: 'media/images/team/ghannam-full.jpg',
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
      linkedin: 'https://www.linkedin.com/in/m-emam/',
      github: 'https://github.com/mohemam'
    }
  }
];
var linkStrings = ['projects', 'services', 'about', 'team', 'contact-us'];
var navFlag = false;

function sectionLazyload (selector) {
  return lazyload(document.querySelectorAll(selector))
}

var lazyloaders = {
  '2': {
    load: function () {
      this.loaded = true
      return sectionLazyload('#projects .lazyload')
    },
    loaded: false
  },
  '3': {
    load: function () {
      this.loaded = true
      return sectionLazyload('#services .lazyload')
    },
    loaded: false
  },
  '4': {
    load: function () {
      this.loaded = true
      return sectionLazyload('#about .lazyload')
    },
    loaded: false
  },
  '5': {
    load: function () {
      this.loaded = true
      return sectionLazyload('#team .lazyload')
    },
    loaded: false
  },
  loadAll: function () {
    var self = this
    Object.keys(this).forEach(function (key) {
      if (Number(key) > 0 && Number(key) < 6) {
        self[key].load().loadImages()
      }
    })
  }
};

function loadImages(index) {
  if (Number(index) > 5 || Number(index) < 1) return
  if (!lazyloaders[index].loaded) {
    lazyloaders[String(index)].load().loadImages()
  }
}

function firstImagesLoad () {
  if (window.innerWidth > BREAK_POINT) {
    loadImages('2')
  } else {
    setTimeout(function () {
      lazyloaders.loadAll();
    }, 50)
  }
}

function loadVideo () {
  $('#background-video')[0].preload = 'auto'
}

$('#fullpage').onepage_scroll({
  animationTime: 700,
  pagination: false,
  responsiveFallback: BREAK_POINT,
  loop: false,
  easing: 'cubic-bezier(0.86, 0, 0.07, 1)',
  afterMove: function (index) {
    loadImages(String(index + 1))
  }
});
$('#slick').slick({
  prevArrow: $('#custom-prev'),
  nextArrow: $('#custom-next'),
  slidesToShow: 2,
  lazyLoad: 'ondemand',
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
    if (window.innerWidth < BREAK_POINT) {
      toggleNav(true);
      window.location = '#' +  link.data('link');
    } else {
      $.fn.moveTo(linkStrings.indexOf(link.data('link')) + 2);
      lazyloaders.loadAll();
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
  $(this).on('mouseenter', function () {
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
function servicesDefault (index) {
  if (window.innerWidth < BREAK_POINT) {
    servicesBackground.removeClass('active')
    $(servicesBackground.get(index)).addClass('active')
  }
}

window.addEventListener('resize', function () {
  repositionTeamMembers();
  servicesDefault(2);
  firstImagesLoad();
});
repositionTeamMembers();
servicesDefault();

$('#iframe-modal').iziModal({
  iframe: true,
  iframeHeight: 400,
  iframeURL: "https://player.vimeo.com/video/245121021?autoplay=1&loop=1&color=f1c40f&title=0&byline=0&portrait=0",
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
  firstImagesLoad();
  loadVideo();
})
