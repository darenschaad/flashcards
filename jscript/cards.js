$(function() {
    $(".clickable").hover(function() {
      $("#backside-" + this.id).fadeToggle();
    })
});
