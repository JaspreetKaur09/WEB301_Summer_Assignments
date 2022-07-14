/*
  Jaspreet Kaur
  0784780
*/

$(function (){
  function getCurrentLocation(){
    if(navigator.geolocation){
      navigator.geolocation.getCurrentPosition(success,showError);
    } else {
      $('#error').text("Geolocation is not supported on your browser!");
    }
  }
});
