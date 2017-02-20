var currentIndex = 0;
var phiShoutouts = [];
var intervalID = null;

$(document).ready(function(){

  // Upon page load, get the data from the server
  $.ajax({
    type: "GET",
    url: "/data",
    success: function(data){
      // // yay! we have data!
      // console.log('returned data from server: ', data);
      phiShoutouts = data.phirephiters;

      displayShoutout(currentIndex);
      startTimer();


      phiShoutouts.forEach(function(shoutout, index){
        var $point = $('<span>&Phi;</span>');

        if(index === 0) {
          $point.addClass('active');
        }
        $($point).css("margin", "5px");
        $('#points').append($point);
      }); // ends for each
      buttonFunctionality();
    } // ends success function
  });// ends ajax request
});// ends doc ready

function startTimer(index){
  intervalID = setInterval(nextShoutout, 3000);
}

function displayShoutout (index) {
  $('#name').text(phiShoutouts[index].name);
  $('#username').text(phiShoutouts[index].git_username);
  $('#username').attr('href', '//www.github.com/' + phiShoutouts[index].git_username);
  $('#shoutout').text(phiShoutouts[index].shoutout);
}

function fadeShoutout (index) {
  $('#shoutouts').fadeOut('slow', function (){
    displayShoutout(index);
  });
  $('#shoutouts').fadeIn('slow');
}

function updateActivePointer (index) {
  $('.active').removeClass('active');
  $('#points').children().eq(index).addClass('active');
}


function buttonFunctionality(){
  $('#next').on('click', function (){
    clearInterval(intervalID);
    nextShoutout(currentIndex);
    startTimer(currentIndex);
  });

  $('#prev').on('click', function (){
    clearInterval(intervalID);
    nextShoutout(currentIndex);
    startTimer(currentIndex);
  });
}

function nextShoutout(index) {
  if(currentIndex === phiShoutouts.length -1){
    currentIndex = 0;
  } else {
    currentIndex++;
  }
  fadeShoutout(currentIndex);
  updateActivePointer(currentIndex);
  //ends NEXT onclick
}

function prevShoutout(index) {
  if (currentIndex <= 0) {
    currentIndex = phiShoutouts.length -1
  } else {
    currentIndex--;
  }
  fadeShoutout(currentIndex);
  updateActivePointer(currentIndex);
}
