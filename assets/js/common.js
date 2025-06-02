// Your JavaScript code goes here
document.addEventListener("DOMContentLoaded", () => {
  const btns = document.querySelectorAll(".tab-btn");
  const contents = document.querySelectorAll(".content-container");

  btns.forEach(function (btn) {
    btn.addEventListener("click", function (event) {
      event.preventDefault();

      let filter = this.getAttribute("data-btn");

      btns.forEach(function (btn) {
        btn.classList.remove("active");
      });
      this.classList.add("active");

      contents.forEach(function (content) {
        content.classList.remove("show");
      });
      document.querySelector('.content-container[data-content="' + filter + '"]').classList.add("show");
    });
  });
});

// Your jQuery code goes here
$(function () {
  $(".hamburger").click(function () {
    $(this).toggleClass("active");
    $(".menu").toggleClass("show");

    if ($(".hamburger").hasClass("active")) {
      $("body").addClass("overflow-hidden");
    } else {
      $("body").removeClass("overflow-hidden");
    }
  });
});
