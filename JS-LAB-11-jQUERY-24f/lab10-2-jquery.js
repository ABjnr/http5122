//LAB 10 - 2 INVENTORY PAGE

$(document).ready(function () {
  $(".desc").hide();

  //ADD MOUSEOVER/MOUSEOUT FUNCTIONS FOR <tr>

  $("#tblInventory tbody tr").on("mouseenter", function () {
    $(this).addClass("selected");
  });

  $("#tblInventory tbody tr").on("mouseleave", function () {
    $(this).removeClass("selected");
  });

  //ADD CLICK EVENT TO <tr>
  $("#tblInventory tbody tr").on("click", function () {
    $(".desc").hide();

    $(this).find(".desc").show();
  });
});
