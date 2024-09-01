$(document).ready(function(){
  $("a").on('click', function(event) {
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
      $('body,html').animate({
      scrollTop: $(hash).offset().top
      }, 1200, function(){
      window.location.hash = hash;
     });
     } 
    });
});

var width = $(window).width(); 

window.onscroll = function(){
if ((width >= 900)){
    if(document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        $("#middle").css("background-size","150% auto");
    }else{
        $("#middle").css("background-size","100% auto");        
    }
}
};

setTimeout(function(){
    $("#loading").addClass("animated fadeOut");
    setTimeout(function(){
      $("#loading").removeClass("animated fadeOut");
      $("#loading").css("display","none");
    },800);
},1450);




function redirectToGoogleForm() {
  // Get values from the form fields
  var name = encodeURIComponent(document.getElementById('name').value);
  var email = encodeURIComponent(document.getElementById('email').value);
  var message = encodeURIComponent(document.getElementById('message').value);
  
  // Replace these with the correct entry IDs from your Google Form
  var googleFormUrl = 'https://docs.google.com/forms/d/e/1FAIpQLSe3uYi6Oe2rgVcwG6Xx-hr9EZHurNh3PuQF12Bvg6x-nYw3iQ/viewform?usp=pp_url';
  var preFilledUrl = googleFormUrl + 
      '&entry.1812805586=' + name + 
      '&entry.1167064511=' + email + 
      '&entry.205695226=' + message;

  // Redirect to the Google Form with pre-filled data
  window.open(preFilledUrl, '_blank');
}



