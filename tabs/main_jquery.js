$(function () {
  //   const btn = $(".btn");
  //   console.log(btn);
  $(".btn").click(function () {
    $(".btn").removeClass("active");
    $(this).addClass("active");

    const idx = $(this).index();
    // console.log(idx);
    $(".panel").hide();
    $(".panel").eq(idx).show();
  });
});
