$('document').ready(function(){

 $.ajax({
    type: "GET",
    headers: {"Access-Control-Allow-Origin": "*"},
    url: "https://api.darksky.net/forecast/63c404967bd84cf1562297882b96e820/51.5074,0.1278"
}).done(function (data) {
    console.log(data);
});



        function fly() {
            var pos = 2;
            var airPlane = document.getElementById('airPlane');
            var airPlaneStatus = {
                Top: Math.random() * 0.9 * window.innerHeight,
                Left: 0,
                Horizontal: window.innerWidth + 100,
                Vertical: window.innerHeight,
                Size: 100
            };
            $('#airPlane').css("top", airPlaneStatus.Top);
            $('#airPlane').css("left", airPlaneStatus.Left + "px");
            $('#airPlane').css("width", airPlaneStatus.Size + "px");
            $('#airPlane').css('-webkit-transform', 'rotate(20deg)');
            
            var id = setInterval(animation, 10)
            function animation(){
                $('#airPlane').css("top", airPlaneStatus.Top + "px");
                if (airPlaneStatus.Top <= 0){
                    pos = 2;
                    $('#airPlane').css('-webkit-transform', 'rotate(20deg)');
                }else if(airPlaneStatus.Top >= airPlaneStatus.Vertical){
                    console.log('fire')
                    $('#airPlane').css('-webkit-transform', 'rotate(-20deg)');
                    pos = -2;
                }
                airPlaneStatus.Top += pos;
                
                if( airPlaneStatus.Left - airPlaneStatus.Size <= airPlaneStatus.Horizontal){
                    airPlaneStatus.Left += 1;
                    $('#airPlane').css("left", airPlaneStatus.Left + "px");
                } else{
                    clearInterval(id);
                    console.log("fired");
                    fly();
                    environmentChange();
                }
                
            }
            
        }
        //  backgroundChange("sunny1.jpg");
        fly();
        environmentChange();
        
        
        
        function backgroundChange(myurl){
            console.log(myurl, 'this is my url');
            $('body').css("background-image", "url("+myurl+")"); 
            
        }
        function environmentChange(){
            CURRENTENVIRONMENT=GetRandomLocationChoice();
            vehiclechange();
            updatebackground();
            weatherchange()
        }
        function weatherchange(){
            // CURRENTWEATHER=GetRandomWeatherChoice();
            $("#city").html(CURRENTENVIRONMENT.name)
            $("#latitude").html(CURRENTENVIRONMENT.latitude)
            $("#longitude").html(CURRENTENVIRONMENT.longitude)
            $("#weather").html(CURRENTENVIRONMENT.appearance)
            $("#wind").html(CURRENTENVIRONMENT.windSpeed)
            $("#pressure").html(CURRENTENVIRONMENT.pressure)
        }
        function vehiclechange (){
            // document.getElementById("airPlane").src 
            if(CURRENTENVIRONMENT.enviroment=== "air"){
                console.log("air")
                document.getElementById("airPlane").src = planeurl;
            } else if(CURRENTENVIRONMENT.enviroment=== "sea"){
                console.log("sea")
                document.getElementById("airPlane").src = spaceshipurl;
            } else if(CURRENTENVIRONMENT.enviroment=== "space"){
                console.log("space")
                document.getElementById("airPlane").src = submarieurl;
            }
        }
         function updatebackground (){
        // document.getElementById("airPlane").src 
            if(CURRENTENVIRONMENT.appearance=== "underwater"){
                backgroundChange("underwater1.jpg")
            } else if(CURRENTENVIRONMENT.appearance=== "space"){
                 backgroundChange("space1.jpg")
            } else if(CURRENTENVIRONMENT.appearance=== "Rainy"){
                backgroundChange("rain1.jpg")
            } else if(CURRENTENVIRONMENT.appearance=== "Sunny"){
                backgroundChange("sunny1.jpg")
            } else if(CURRENTENVIRONMENT.appearance=== "Snowy"){
                backgroundChange("snow1.jpg")
            }  else if(CURRENTENVIRONMENT.appearance=== "Windy"){
            backgroundChange("windy1.jpg")
            } 
         }
});

//var weather = ["Rainy", "Snowy", "Windy", "Sunny","space","underwater"];
var CURRENTENVIRONMENT = NYC;
var CURRENTWEATHER = "Sunny"
var CURRENTVEHICLE = ''
var planeurl = "http://www.vancitymommyd.com/wp-content/uploads/2018/01/cartoon-plane-cartoon-plane-images-clipart-free-download.png";
var spaceshipurl = "Space-Shuttle.jpg";
var submarieurl = "submarine.jpg";
 //https://api.darksky.net/forecast/[key]/[latitude],[longitude]
 //https://api.darksky.net/forecast/63c404967bd84cf1562297882b96e820/40.7128,74.0060 = NYC
 //https://api.darksky.net/forecast/63c404967bd84cf1562297882b96e820/51.5074,0.1278 = London

 var NYC = {
"name":"Name: New York",
"latitude":"Latitude: 40.7128",
"longitude":"Longitude: 74.006",
"timezone":"Asia/Bishkek",
"windSpeed":"Wind: 5.9mph",
"pressure":"Pressure: 1025.24",
"appearance":"Windy",
"enviroment":"air"
};

var London = {
"name":"Name: London",
"latitude":"Latitude 51.5074",
"longitude":"Longitude: 0.1278",
"timezone":"Europe/London",
"windSpeed":"Wind: 14.49pmh",
"pressure":"Pressure: 1006.59",
"appearance":"Snow",
"enviroment":"air"
};

 var Florida = {
"name":"Name: Florida",
"latitude":"Latitude: 27.6648", 
"longitude":"Longitude: 81.5158",
"timezone":"United States",
"windSpeed":"Wind: 9.9mph",
"pressure":"Pressure: 4.24",
"appearance":"Rainy",
"enviroment":"air"
};

 var Chicago = {
"name":"Name: Chicago",
"latitude":"Latitude: 1.8781", 
"longitude":"Longitude: 87.6298",
"timezone":"United States",
"windSpeed":"Wind: 5.9mph",
"pressure":"Pressure: 29.8",
"appearance":"Sunny",
"enviroment":"air"
};

var PacificOcean = {
"name":"Name: Pacific Ocean",
"latitude":"Latitude: 8.7832",
"longitude":"Latitude: 124.5085",
"timezone":"Asia/Manila",
"windSpeed":"Wind: 11.05mph",
"appearance":"Sunny",
"enviroment":"sea"
};

var Milkyway = {
"name":"Name: Milkyway",
"latitude":"Latitude: 0.0",
"longitude":"Latitude: 0.0",
"timezone":"N/A",
"windSpeed":"Wind: 0.0mph",
"appearance":"0.0",
"enviroment":"space"
};
//var  places= [NYC,London,Florida,Chicago,PacificOcean,Milkyway];
//var weather = ["Rainy", "Snowy", "Windy", "Sunny","space","underwater"];

//Get random weather inviroment

function GetRandomWeatherChoice() {
  var weather = ["Rainy", "Snowy", "Windy", "Sunny","space","underwater"];

    var randomIndexs = Math.floor(Math.random() * weather.length);

    var randomChoices = weather[randomIndexs];
    
    return randomChoices;
 
}

//Get random location

function GetRandomLocationChoice() {
  var places = [NYC,London,Florida,Chicago,PacificOcean,Milkyway];

    var randomIndex = Math.floor(Math.random() * places.length);

    var randomChoice = places[randomIndex];
    
    return randomChoice;
 
}


