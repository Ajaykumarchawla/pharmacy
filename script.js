//js for Navbar
if ($(window).width() > 100) {
  $(window).scroll(function(){  
     if ($(this).scrollTop() > document.getElementById('topNav').offsetHeight + document.getElementById('navbar_top').offsetHeight) {
        $('#navbar_top').addClass("fixed-top");
        // add padding top to show content behind navbar
        $('body').css('padding-top', $('.navbar').outerHeight() + 'px');
      }else{
        $('#navbar_top').removeClass("fixed-top");
         // remove padding top from body
        $('body').css('padding-top', '0');
      }   
  });
}