  
  $(document).ready(function() {
jQuery.fn.extend({
    toggleText: function (a, b){
        var that = this;
            if (that.text() != a && that.text() != b){
                that.text(a);
            }
            else
            if (that.text() == a){
                that.text(b);
            }
            else
            if (that.text() == b){
                that.text(a);
            }
        return this;
    }
});


  navigator.geolocation.getCurrentPosition(function(position) {
  var lon = position.coords.latitude; 
  var lat = position.coords.longitude;
      $.getJSON("http://api.openweathermap.org/data/2.5/weather?lat=" + lon + "&lon=" + lat + "&units=metric&appid=dd9d731d7a547a48f14ce719452812d7", function(json) {
        var city = (json.name);
        var looks = (json.weather[0].main);
        var temp = Math.floor((json.main.temp));
        var cel = temp + (String.fromCharCode(176)) + "Cel";
        var far = Math.round((temp * 9/5 + 32)) + (String.fromCharCode(176)) + "Far"
        

        
      $(".message").html(city);
      $(".message2").html(looks);
      $(".message3").html(cel);
      $(".message3").on("click", function() {
          $(this).toggleText((far),(cel));
      });
      if(looks === "Clouds" ) {
        $("#main3").show();
      }
      else if(looks === "Clear" ) {
        $("#main5").show();
      }
      else if(looks === "Thunderstorm" ) {
        $("#main2").show();
      }
      else if(looks === "Rain" ) {
        $("#main6").show();
        }
        else if(looks === "Snow" ) {
        $("#main4").show();
      }
      else if(looks === "Drizzle" ) {
        $("#main1").show();
      }
      else {
        $("main5").show();
      }
      });      
    });
  
  });

