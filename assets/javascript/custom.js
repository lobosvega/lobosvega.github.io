/*===========Navbar transparent to solid==========*/

$(document).ready(function() {
    $(window).scroll(function() {
        if($(this).scrollTop() > 300) {
            $('.navbar').addClass('solid');
        } else {
          $('.navbar').removeClass('solid');
        }
    });
});
/*=========== Close mobile nav on click ==========*/
$(document).ready(function() {
    $(document).click(function(event) {
        var clickover = $(event.target);
        var _opened = $(".navbar-collapse").hasClass("show");
        if ( _opened === true && !clickover.hasClass("navbar-toggler")) {
            $(".navbar-toggler").click();
        }
    })
})
/*=========== Smooooooth scroooling to links ==========*/
$(document).ready(function() {
    $("a").on('click', function(event) {
        if (this.hash !=="") {
            event.preventDefault();
            var hash = this.hash;
            $('html, body').animate( {
                scrollTop: $(hash).offset().top
            }, 800, function() {
                window.location.hash = hash;
            });
        } //End  if
    });
});
/*=========== bouncing down arrow ==========*/
$(document).ready(function() {
    $(window).scroll(function() {
        $(".arrow").css("opacity", 1 - $(window).scrollTop()/250);
    });
});

/*========== SKILLS COUNTER ==========*/

$(document).ready(function() { //when document is ready
    $('.counter').counterUp({
        delay: 10, //delay in milliseconds per count up
        time: 3000 //(originally 1800) total time taken by the animation
    });
});
/*========== TOP SCROLL BUTTON ==========*/

$(document).ready(function() { //when document is ready
    $(window).scroll(function() { //when webpage is scrolled
      if ($(this).scrollTop() > 500) { //if scroll from top is more than 500
        $('.top-scroll').fadeIn(); //display element with class 'top-scroll'; opacity increases
      } else { //if not
        $('.top-scroll').fadeOut(); //hide element with class 'top-scroll'; opacity decreases
      }
    });
  });

// Refresh Page at top of document on load instead of at # hash

$(document).ready(function(){
    $('html, body').scrollTop(0);
    $(window).on('load', function() {
    setTimeout(function(){
        $('html, body').scrollTop(0);
    }, 0);
 });
});

// OPTION TO MAKE ALL ANIMATIONS THE SAME "FADEINUP" ANIMATION ON MOBILE DEVICES

$(document).ready(function() { 
    if ($(window).width() < 768 ) {
       $("div").attr('data-animation','fadeInUp');
    }
    });
    
//LINKING TO ANOTHER PAGE WITH A HASH AT THE END OF THE LINK,
//SUCH AS domain.com#services THEN USE THE FOLLOWING SMOOTH SCROLL INSTEAD
//OF THE SMOOTH SCROLL USED AT THE TOP OF THIS DOCUMENT.
    
//document.querySelectorAll('a[href^="#"]').forEach(anchor => {
//anchor.addEventListener('click', function (e) {
//e.preventDefault();
    
//document.querySelector(this.getAttribute('href')).scrollIntoView({
//behavior: 'smooth'
//});
//});
//});
    
    
    
    
