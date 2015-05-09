window.Momday = {};

window.Momday.markImagesWideOrTall = function (selector) {
  var $el = $(selector);
  var $images = $($el.find("img"));
  $.each($images, function(index, image){
    var img = new Image();
    img.src = $(image).attr("src");
    console.log(width);
    console.log(height);

    if (img.width > img.height){
      $(image).addClass("wide");
    } else {
      $(image).addClass("tall");
    }
  });
}

window.Momday.switchPane = function (event) {
  return function(event) {
    var $button = $(event.currentTarget)
    var paneClass = $button.data("pane");

    var $pane = $("section." + paneClass);
    var $active = $(".active");
    $active.removeClass("active");

    setTimeout(function () {
      $pane.addClass("active");
      $button.addClass("active");
    }, 0);
  };
};
