// 左側選單效果
$(function () {
  function slideMenu() {
    var activeState = $("#menu-container .menu-list").hasClass("active");
    $("#menu-container .menu-list").animate({
      left: activeState ? "0%" : "-100%"
    }, 400);
  }
  $("#menu-wrapper").click(function (event) {
    event.stopPropagation();
    $("#hamburger-menu").toggleClass("open");
    $("#menu-container .menu-list").toggleClass("active");
    slideMenu();

    $("body").toggleClass("overflow-hidden");
  });

  $(".menu-list").find(".accordion-toggle").click(function () {
    $(this).next().toggleClass("open");
    $(this).toggleClass("active-tab").find(".menu-link").toggleClass("active");

    $(".menu-list .accordion-content").not($(this).next()).slideUp("fast").removeClass("open");
    $(".menu-list .accordion-toggle").not(jQuery(this)).removeClass("active-tab").find(".menu-link").removeClass("active");
  });
});

// popup
$(function () {
  $(".apply-btn").on('click', function () {
    $(".popup-apply").removeClass('model-open');
    $(".popup-apply2").addClass('model-open');
  });
  $(".close-btn, .bg-overlay").click(function () {
    $(".popup-apply, .popup-apply2").removeClass('model-open');
  });
});

//tab切換
$(function () {
  $("#OrderTab li:first-child").addClass("active");
  $(".tab-content").hide();
  $(".tab-content:first").show();

  // Click function
  $("#OrderTab li").click(function () {
    $("#OrderTab li").removeClass("active");
    $(this).addClass("active");
    $(".tab-content").hide();

    var activeTab = $(this).find("a").attr("href");
    $(activeTab).fadeIn();
    return false;
  });
});