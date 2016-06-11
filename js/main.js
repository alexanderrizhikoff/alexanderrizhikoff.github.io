(function($) {
  $(function() {
    console.log("DOM is ready");
    $("img").click(function() {
      console.log("Image was clicked");
    });
    $("button").on("click", function() {
      console.log("Button was clicked");
    });
  });
})(jQuery);
