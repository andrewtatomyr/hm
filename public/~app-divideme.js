
$(document).ready(function() {
  console.log(",,DIVIDEME'' ALREADY WAS LOADED");
  /*
  var choiceAction= function(element) {

    $("#sticker").animate({
      top: -68
    });

    $('.buttons').fadeTo('fast', 1);

    $('.buttons').animate({
      height: 100
    });

    element.animate({
      height: 0
    });
    element.fadeTo('slow', 0);

    //console.log("CHOICE: "+element);
    /**
    for (var key in element) {
      console.log('* '+key+' => '+element[key]);
    }
    /**
    $('#current-mood').addClass('mood-selected');

    $("#sticker").animate({
      top: -8
    });
  }
  */
  $('#segment').click(function (e) {
    var xClick = e.pageX - $(this).offset().left;
    var yClick = e.pageY - $(this).offset().top;

    $('#test').text(xClick+"|"+yClick);
  });

  var timeout= 3000;
  //var dx= 0;
  setInterval(function() {
    //timeout=5000;

    var banner= $("#banner");
    var x= banner.offset().left;
    var bannerWidth= banner.width(); //1632
    var bodyWidth= $('body').width();
    var dx= 30*Math.ceil((Math.random()-1/2)*3);
    //dx+=dx2;
    //$("div#test").text(x+'|'+dx+"|"+dx2);
    //banner.animate({ left: x-100 });

    /**/
    if ((x+dx<0) && (bannerWidth+x+dx>bodyWidth)) {
      banner.animate({ left: x+dx }, timeout);
    }
    /**/
    //$("div#test").text(x+'|'+(bannerWidth+x)+"~"+bodyWidth);


  }, timeout);
  
  $("#test").click(function() {
    var test= 30*Math.ceil((Math.random()-1/2)*3);
    $(this).text(test);
  });



});
