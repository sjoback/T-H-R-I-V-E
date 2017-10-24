(window).on('scroll',function() {

      document.getElementById('page1').scrollIntoView({behavior: 'smooth'});
      (window).off('scroll');

    if (checkVisible($('#page1'))) {
      document.getElementById('page2').scrollIntoView({behavior: 'smooth'});
      (window).off('scroll');
    }
    if (checkVisible($('#page2'))) {
      document.getElementById('page3').scrollIntoView({behavior: 'smooth'});
      (window).off('scroll');
    }
    if (checkVisible($('#page3'))) {
      document.getElementById('page4').scrollIntoView({behavior: 'smooth'});
      (window).off('scroll');
    }
});

function checkVisible( elm, eval ) {
    eval = eval || "object visible";
    var viewportHeight = $(window).height(), // Viewport Height
        scrolltop = $(window).scrollTop(), // Scroll Top
        y = $(elm).offset().top,
        elementHeight = $(elm).height();

    if (eval == "object visible") return ((y < (viewportHeight + scrolltop)) && (y > (scrolltop - elementHeight)));
    if (eval == "above") return ((y < (viewportHeight + scrolltop)));
}





/*function show_cockie(){
  if (document.getElementById("vase1").style.opacity === "1") {
    document.getElementById("vase1").style.opacity = 0;
  }
  else {
    document.getElementById("vase1").style.opacity = 1;
  }
};

(window).one('scroll',show_cockie() {
   // Stuff
});

//document.getElementById('page4').scrollIntoView({behavior: 'smooth'});

document.getElementById('page2').scrollIntoView({behavior: 'smooth'});
