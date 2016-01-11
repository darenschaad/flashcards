$(function() {
    $(".clickable").click(function() {
      $("#backside-" + this.id).fadeToggle();
    })
});
