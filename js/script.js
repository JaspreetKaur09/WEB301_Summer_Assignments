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
    function success(position){
      $("#latitude").val(position.coords.latitude);
      $("#longitude").val(position.coords.longitude);
    }
    function showError(error){
      $('#error').text("Location permission denied");
    }

    $("#btnP").on("click", function () {
      getCurrentLocation();
    });
    $("#btnSubmit").on("click", function () {
      localStorage.setItem("firstname", $("#firstname").val());
      localStorage.setItem("lastname", $("#lastname").val());
      localStorage.setItem("longitude", $("#longitude").val());
      localStorage.setItem("latitude", $("#latitude").val());
      $('#success').text("Information submitted successfully");
    });
  }
});
