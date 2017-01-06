$(window).load(function() {
  // Animate loader off screen
  $(".se-pre-con").fadeOut("slow");
});

$(document).ready(function(){
  $("#counter").countdown({
  until: new Date(2017, 2, 02, 0),
  format: 'dHMS'
  });

  $("#counter_wrapper").fitText(1.5, {
  minFontSize: '20px',
  maxFontSize: '40px'
  });
});
