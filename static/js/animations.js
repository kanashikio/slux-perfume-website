$(document).ready(function () {
  //scroll down animation
  $(window).on("scroll", reveal);

  function reveal() {
    var reveals = $(".reveal");

    reveals.each(function () {
      var windowHeight = $(window).height();
      var revealTop = $(this)[0].getBoundingClientRect().top;
      var revealPoint = 150;

      if (revealTop < windowHeight - revealPoint) {
        $(this).addClass("active");
      } else {
        $(this).removeClass("active");
      }
    });
  }

  //add to cart animation
  let shoppingcart = $(".shopping-cart");
  let add = $(".cartBtn");

  add.each(function () {
    $(this).on("click", function (e) {
      let data = Number(shoppingcart.attr("data-count") || 0);
      shoppingcart.attr("data-count", data + 1).addClass("on");

      let image = $(this).parent().find(".item-prod");
      let span = $(this).parent().find(".span");
      let img_clone = image.clone(false);
      span.append(img_clone).addClass("active");

      setTimeout(() => {
        span.removeClass("active").find(img_clone).remove();
      }, 500);

      let parent = $(this).parent();
      let clone = parent.clone(true);
      $("#select").append(clone);
      clone.find(".cartBtn").text("ADD TO CART");

      if (clone) {
        shoppingcart.on("click", function () {
          $("#select").toggleClass("display");
        });
      }
    });
  });

  //testimonials animation
  $(".testimonial-container").owlCarousel({
    loop: true,
    autoplay: true,
    autoplayTimeout: 3000,
    margin: 10,
    nav: true,
    navText: [
      "<i class='fa-solid fa-arrow-left-long'  style='color: #93b1a6;'></i>",
      "<i class='fa-solid fa-arrow-right-long'  style='color: #93b1a6;'></i>",
    ],
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 3,
      },
    },
  });
});
