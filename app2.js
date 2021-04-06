let name = `Resika SB`;//give user name=> backend
userNameWelcome = document.querySelector(".userNameWelcome");
userNameWelcome.innerText = name;




let map;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 37.3382, lng: -121.8863 }, //intial lat and longitude position => san jose
    zoom: 15,
  });

  //lat and longitude of the hotel=> backend
let latitude=37.3352;
let longitude=121.8811;


var marker = new google.maps.Marker({
    position:{lat: latitude, lng: -longitude},
    map:map
});
}




//card details=> backend
let hotelName = "Sangeetha Hotel";
let hotelId = "AD5578";
let rating = "8";
let link = "index.html";

//random no generation
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
  };
let rndNo = getRndInteger(1,25); 
let jsIcon = document.querySelector(".cardIconImg");
jsIcon.src = "icons/"+rndNo+".png";


let jsName = document.querySelector(".hotelNameValue");
let jsId = document.querySelector(".hotelIdValue");
let jsRating = document.querySelector(".hotelRatingValue");

jsName.innerText =  hotelName ;
jsId.innerText =  hotelId ;
jsRating.innerText =  rating + "/10" ;


let jsLink = document.querySelector(".bookA");
jsLink.href = link;

