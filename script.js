//Scrolling
console.log("connected")

$(document).ready(function() {
  $(".About").click(function(event) {
    event.preventDefault();
    $('html,body').animate( { scrollTop:$(this.hash).offset().top } , 1000);
  });
});


//Lightbox
