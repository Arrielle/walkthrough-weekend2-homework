$(document).ready(function(){

    // Upon page load, get the data from the server
    $.ajax({
      type: "GET",
      url: "/data",
      success: function(data){
        // yay! we have data!
        console.log('returned data from server: ', data);
      }
    });
});
