// SLIDESHOW

function Divs() {
  var divs= $('#parent div'),
  now = divs.filter(':visible'),
  next = now.next().length ? now.next() : divs.first(),
  speed = 800;

  now.fadeOut(speed);
  next.fadeIn(speed);
}

$(function () {
<<<<<<< HEAD
  setInterval(Divs, 5000);
=======
setInterval(Divs, 9000);
>>>>>>> 6350aec21f7fdbcd58b56a02f71215462f988d21
});



// IMG NAVIGATOR
$(document).ready(function(){ //wait until page is fully loaded

  //the slideshow code uses this to determine a few things. Make sure this is set correctly!
  const NUMBER_OF_SLIDES = 4;

  //get the width of the side-scrollable area in the 'sldieshow' div and divide by NUMBER_OF_SLIDES so that the
  //scrollLeft under setInterval knows by how much to scroll
  var slide_width = document.getElementById('parent').scrollWidth / NUMBER_OF_SLIDES;

  //used as a reference for what slide to switch to in the coming setInterval()
  var slide_number = 1;

  //sets which circle is highlighted depending on the integer fed into it
  var setCircle = function(input_circle){

    //set all circles to grey
    for(x=1;x <= NUMBER_OF_SLIDES; x++){
      $("#circle" + x).css({
        "background-color": "white"
      });
    }

    //set a circle to be brown, based on input_circle
    $("#circle" + input_circle).css({
      "background-color": "black"
    });
  }

  //initialy setting the first circle to be brown, before the slideshow starts manipulating them
  setCircle(1);

  //every 4 seconds(excluding the 500ms slide effect), slide to the next image, and set the appropriate circle to be brown
  setInterval(function(){
    if (slide_number < NUMBER_OF_SLIDES){
      //move to next slide
      $("#slideshow").animate({
        scrollLeft: slide_width * slide_number
      },5000);
      slide_number++;
    }else{
      //go to the first slide
      $("#slideshow").animate({
        scrollLeft: 0
      },5000);
      slide_number = 1;
    }
    setCircle(slide_number);

<<<<<<< HEAD
  }, 5000);
=======
	}, 9100);
>>>>>>> 6350aec21f7fdbcd58b56a02f71215462f988d21
});
