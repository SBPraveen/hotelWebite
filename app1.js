let name = `Resika SB`;
userNameWelcome = document.querySelector(".userNameWelcome");
userNameWelcome.innerText = name;


//card Gneration
let hotelName, hotelId, hotelRating, hotelLink;
var cardContainer = document.querySelector(".cardsContainer");

    //random no generation
    function getRndInteger(min, max) {
        return Math.floor(Math.random() * (max - min) ) + min;
      }
      

function cardGenerate(hotelName, hotelId, hotelRating, hotelLink){

    //creating card
    var card = document.createElement('div');
    card.classList.add("card");

    //Creating Icon
    let iconDiv = document.createElement('div');
    iconDiv.classList.add("cardIcon");
    let icon = document.createElement('img');
    let rndNo = getRndInteger(1,25); //since we have only 25 icons
    icon.src = "icons/"+rndNo+".png";
    iconDiv.appendChild(icon);
    card.appendChild(iconDiv);


    //creating card Details 
    let cardDetailsDiv = document.createElement('div');
    // hotel Name
    let hotelNamePara = document.createElement('p');
    hotelNamePara.classList.add('hotelNameValue');
    let hotelNameA = document.createElement('a');
    hotelNameA.href = "dex2.html";
    hotelNameA.classList.add('hotelNameA');
    hotelNameA.innerText = hotelName;
    hotelNamePara.appendChild(hotelNameA);
    cardDetailsDiv.appendChild(hotelNamePara);
    console.log(hotelNamePara);

    // let hotelNamePara = document.createElement('p');
    // hotelNamePara.classList.add('hotelNameValue');
    // hotelNamePara.innerText = hotelName;
    // cardDetailsDiv.appendChild(hotelNamePara);
    //hotel Id
    let hotelIdPara = document.createElement('p');
    hotelIdPara.classList.add('hotelIdP');
    hotelIdPara.innerText = `Id :` + ` ` ;
    let hotelIdParaSpan = document.createElement('span');
    hotelIdParaSpan.classList.add('hotelIdValue');
    hotelIdParaSpan.innerText = hotelId;
    hotelIdPara.appendChild(hotelIdParaSpan);
    cardDetailsDiv.appendChild(hotelIdPara);
    //hotel ratings
    let hotelRatingPara = document.createElement('p');
    hotelRatingPara.classList.add('hotelRatingP');
    hotelRatingPara.innerText = 'Ratings : '+" ";
    let hotelRatingParaSpan = document.createElement('span');
    hotelRatingParaSpan.classList.add('hotelRatingValue');
    hotelRatingParaSpan.innerText = hotelRating+" "+"/10";
    hotelRatingPara.appendChild(hotelRatingParaSpan);
    cardDetailsDiv.appendChild(hotelRatingPara);
    //appening the card details div to the cardContainer 
    card.appendChild(cardDetailsDiv);


    //creating book button
    let bookDiv = document.createElement('div');
    bookDiv.classList.add("cardBookButton");
    let bookButton = document.createElement('button');
    bookButton.classList.add('bookButton');
    let bookButtonA = document.createElement('a');
    bookButtonA.href = hotelLink;
    bookButtonA.innerText = 'Book';
    bookButton.appendChild(bookButtonA);
    bookDiv.appendChild(bookButton);
    card.appendChild(bookDiv);

    cardContainer.appendChild(card);

}


// ----------------------------------------------------------------


//eg JSON => u have to give from backend
const hotels = {
    1:{
        name: "Sangeetha Hotel",
        id: "AD8954",
        rating: "8.5",
        link: "index.html"
    },
    2:{
        name: "Sangeetha Hotel",
        id: "AD8954",
        rating: "8.5",
        link: "index.html"
    },
    3:{
        name: "Sangeetha Hotel",
        id: "AD8954",
        rating: "8.5",
        link: "index.html"
    },
    4:{
        name: "Sangeetha Hotel",
        id: "AD8954",
        rating: "8.5",
        link: "index.html"
    },
    5:{
        name: "Sangeetha Hotel",
        id: "AD8954",
        rating: "8.5",
        link: "index.html"
    },
    6:{
        name: "Sangeetha Hotel",
        id: "AD8954",
        rating: "8.5",
        link: "index.html"
    },
    7:{
        name: "Sangeetha Hotel",
        id: "AD8954",
        rating: "8.5",
        link: "index.html"
    },
    8:{
        name: "Sangetha Hotel",
        id: "AD8954",
        rating: "8.5",
        link: "index.html"
    },
    9:{
        name: "Sangeetha Hotel",
        id: "AD8954",
        rating: "8.5",
        link: "index.html"
    },
    10:{
        name: "Sangeetha Hotel",
        id: "AD8954",
        rating: "8.5",
        link: "index.html"
    },
    11:{
        name: "Sangeetha Hotel",
        id: "AD8954",
        rating: "8.5",
        link: "index.html"
    },
    12:{
        name: "Sangeetha Hotel",
        id: "AD8954",
        rating: "8.5",
        link: "index.html"
    },
    13:{
        name: "Sangeetha Hotel",
        id: "AD8954",
        rating: "8.5",
        link: "index.html"
    }
};




//functioin for travrsing the JSON
function traverse(o) {
    for (var i in o) {
        console.log(o[i]);
        cardGenerate(o[i].name, o[i].id, o[i].rating, o[i].link);
    }
};

traverse(hotels);
