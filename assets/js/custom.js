(function ($) {
  $(document).ready(function () {
    $("body").addClass("js");
    var $menu = $("#menu"),
      $menulink = $(".menu-link");

    $menulink.click(function () {
      $menulink.toggleClass("active");
      $menu.toggleClass("active");
      return false;
    });
  });

  videoPopup();

  $(".owl-carousel").owlCarousel({
    loop: true,
    margin: 30,
    nav: true,
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1,
      },
      550: {
        items: 2,
      },
      750: {
        items: 3,
      },
      1000: {
        items: 4,
      },
      1200: {
        items: 5,
      },
    },
  });

  $(".Modern-Slider").slick({
    autoplay: true,
    autoplaySpeed: 10000,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover: false,
    dots: true,
    pauseOnDotsHover: true,
    cssEase: "fade",
    // fade:true,
    draggable: false,
    prevArrow: '<button class="PrevArrow"></button>',
    nextArrow: '<button class="NextArrow"></button>',
  });

  $("div.features-post").hover(
    function () {
      $(this).find("div.content-hide").slideToggle("medium");
    },
    function () {
      $(this).find("div.content-hide").slideToggle("medium");
    }
  );

  $("#tabs").tabs();

  (function init() {
    // Cek apakah ada endtime yang disimpan di localStorage
    var endtime = localStorage.getItem("endtime");

    if (!endtime) {
      // Jika tidak ada, set endtime menjadi 20 hari dari sekarang
      endtime = new Date();
      endtime.setDate(endtime.getDate() + 20); // Tambahkan 20 hari
      // Simpan endtime ke localStorage
      localStorage.setItem("endtime", endtime);
    } else {
      // Jika ada, ubah endtime menjadi objek Date
      endtime = new Date(endtime);
    }

    function getTimeRemaining(endtime) {
      var t = Date.parse(endtime) - Date.parse(new Date());
      var seconds = Math.floor((t / 1000) % 60);
      var minutes = Math.floor((t / 1000 / 60) % 60);
      var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
      var days = Math.floor(t / (1000 * 60 * 60 * 24));
      return {
        total: t,
        days: days,
        hours: hours,
        minutes: minutes,
        seconds: seconds,
      };
    }

    function initializeClock(endtime) {
      var timeinterval = setInterval(function () {
        var t = getTimeRemaining(endtime);
        document.querySelector(".days > .value").innerText = t.days;
        document.querySelector(".hours > .value").innerText = t.hours;
        document.querySelector(".minutes > .value").innerText = t.minutes;
        document.querySelector(".seconds > .value").innerText = t.seconds;
        if (t.total <= 0) {A
          clearInterval(timeinterval);
          // Jika timer habis, hapus endtime dari localStorage
          localStorage.removeItem("endtime");
        }
      }, 1000);
    }

    initializeClock(endtime);
  })();
})(jQuery);
