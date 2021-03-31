
$(function() {
   $('.hamburger').click(function() {
      $(this).toggleClass('active');

      if ($(this).hasClass('active')) {
         $('.globalMenuSp').fadeIn(600)
      } else {
         $('.globalMenuSp').fadeOut(500)
      }
   });
   $('.globalMenuSp').click(function() {
      $(this).fadeOut(500)
      $('.hamburger').toggleClass('active');
   })
});

function slideSwitch() {
   var $active = $('#slideshow img.active');

   if($active.length == 0) {
      $active = $('#slideshow img:last');
      
   }
   console.log($active)
   var $next 
   if ($active.next().length) {
      $next = $active.next()
   }  else {
      $next = $('#slideshow img:first')
   }
   console.log($next)
   $active.addClass('last-active');

   $next.css({opacity: 0.0})
      .addClass('active')
      .animate({opacity: 1.0}, 3000, function() {
            $active.removeClass('active last-active');
      });
}

$(function() {
   console.log("TEST")
   setInterval( slideSwitch,3000 );
});

// For more check out zachsaucier.com