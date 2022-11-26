$(document).ready(function () {
  //navbar ainmation
  $(window).scroll(function () {
    var appScroll = $(document).scrollTop();
    if (appScroll >= 1) {
      $("header .navbar").removeClass("headerAnimate");
    } else {
      $("header .navbar").addClass("headerAnimate");
    }
  });
  //MainSlider
  var mainSlider = new Swiper(".mainSliderContainer", {
    spaceBetween: 0,
    loop: true,
    // effect: "fade",
    speed: 500,
    autoplay: {
      delay: 6000,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: ".mainSliderNext",
      prevEl: ".mainSliderPrev",
    },
  });

  // services slider
  var servicesSlider = new Swiper(".servicesSlider", {
    navigation: {
      nextEl: ".servicesSliderNext",
      prevEl: ".servicesSliderPrev",
    },
    pagination: {
      el: ".servicesSlidePagination",
      type: "fraction",
    },
    loop: true,
    spaceBetween: 12,
    speed: 1000,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    // slidesPerView: "auto",
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      340: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 3,
      },
      991: {
        slidesPerView: 4,
      },
    },
  });
  $(".servicesSlider").hover(
    function () {
      this.swiper.autoplay.stop();
    },
    function () {
      this.swiper.autoplay.start();
    }
  );

  // testimonials
  var swiper = new Swiper(".testimonialsSlider", {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    speed: 1000,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    slidesPerView: "auto",
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      576: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 2,
      },
      991: {
        slidesPerView: 3,
      },
    },
    observer: true,
    observeParents: true,
  });

  $(".hideSideBtn").click(function () {
    $(".allWorkers .side").toggleClass("showSide");
  });

  // $(document).mouseup(function (e) {
  //   var targetedDiv = $(".allWorkers .side");
  //   if (!targetedDiv.is(e.target) && targetedDiv.has(e.target).length === 0) {
  //     targetedDiv.removeClass("showSide");
  //   }
  // });
});
// ////////////////////////////////////////
// ////////////////////////////////////////
// ////////////////////////////////////////
// ////////////////////////////////////////
// ////////////////////////////////////////
// ////////////////////////////////////////
// ////////////////////////////////////////
// ////////////////////////////////////////
// ////////////////////////////////////////
// ////////////////////////////////////////
// ////////////////////////////////////////
// ////////////////////////////////////////
$(document).ready(function () {
  //spinner
  $(".loader ").fadeOut("slow");
  // select2
  $(".select2search").select2();
  $(".select2").select2({
    minimumResultsForSearch: -1,
  });
  // odometer
  $(".odometer").appear(function (e) {
    var odo = $(".odometer");
    odo.each(function () {
      var countNumber = $(this).attr("data-count");
      $(this).html(countNumber);
    });
  });
  // aos
  AOS.init({
    offset: 60,
    delay: 50,
    duration: 500,
    // easing: "linear",
    once: true,
  });
  //aos Delay
  function aosDelay() {
    var class_ = "mainSection";
    $("section").each(function (i) {
      class_ = $(this).attr("class");
      if (class_) {
        $("." + class_ + " div[data-aos]").each(function (i) {
          var d = 0;
          d = i * 100;
          $(this).attr("data-aos-delay", d);
          d = 0;
        });
      }
    });
  }
  aosDelay();
  // tooltip
  var tooltipTriggerList = [].slice.call(
    document.querySelectorAll('[data-bs-toggle="tooltip"]')
  );
  var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl);
  });

  // validation
  (function () {
    "use strict";
    var forms = document.querySelectorAll(".needs-validation");
    Array.prototype.slice.call(forms).forEach(function (form) {
      form.addEventListener(
        "submit",
        function (event) {
          if (!form.checkValidity()) {
            event.preventDefault();
            event.stopPropagation();
          }
          form.classList.add("was-validated");
        },
        false
      );
    });
  })();
});
// /////////////////////////////
// /////////////////////////////
// /////////////////////////////
// custom cursor
var cursor = document.querySelector(".customCursor");
var cursorinner = document.querySelector(".customCursorInner");
var a = document.querySelectorAll("a");
document.addEventListener("mousemove", function (e) {
  var x = e.clientX;
  var y = e.clientY;
  cursor.style.transform = `translate3d(calc(${e.clientX}px - 50%), calc(${e.clientY}px - 50%), 0)`;
});
document.addEventListener("mousemove", function (e) {
  var x = e.clientX;
  var y = e.clientY;
  cursorinner.style.left = x + "px";
  cursorinner.style.top = y + "px";
});
document.addEventListener("mousedown", function () {
  cursor.classList.add("click");
  cursorinner.classList.add("customClick");
});
document.addEventListener("mouseup", function () {
  cursor.classList.remove("click");
  cursorinner.classList.remove("customClick");
});
a.forEach((item) => {
  item.addEventListener("mouseover", () => {
    cursor.classList.add("customHover");
  });
  item.addEventListener("mouseleave", () => {
    cursor.classList.remove("customHover");
  });
});
