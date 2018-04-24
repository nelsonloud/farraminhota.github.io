$(".navbar-nav li a").click(function(event) {
    if (!$(this).parent().hasClass('dropdown'))
        $(".navbar-collapse").collapse('hide');
});

$(document).ready(function() {
    
    //get the header height
    var navHeight = $('nav').outerHeight();    
   
    $('.nav-link').click(function(e) {
       var linkHref = $(this).attr('href');
       
       $('html, body').animate({
           scrollTop: $(linkHref).offset().top - navHeight + 5
       }, 1000);
       
       e.preventDefault();
   });
});