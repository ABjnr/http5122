//LAB 10 - 1 FAQ PAGE

//Listen for window load the jQuery way
$(document).ready(function () {
  // Hide all content boxes initially
  $(".contentBox").hide();

  //ADD CLICK EVENT TO <h2>
  $("h2").on("click", function () {
    $(".contentBox").not($(this).next()).slideUp(3000);

    $(this).next(".contentBox").slideToggle(3000);
  });

  //CHANGE <p> BACKGROUND ON HOVER
  $(".contentBox").on("mouseenter", function () {
    $(this).addClass("textHovered");
  });

  $(".contentBox").on("mouseleave", function () {
    $(this).removeClass("textHovered");
  });
});
