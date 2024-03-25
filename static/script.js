
function greetingFunc() {
    var d = new Date();
    var h = d.getHours();
    var E = document.getElementById("greeting");
    if (h >= 5 && h < 12) {
        E.innerHTMl = "Good morning, I am Stephanie Reed" ;
    } else if (h >= 12 && h < 18) {
        E.innerHTML = "Good afternoon, I am Stephanie Reed";
    } else if (h >= 18 && h < 20) {
        E.innerHTMl = "Good evening, I am Stephanie Reed";
    } else if (h >= 20 && h < 24 || h < 5) {
        E.innerHTMl = "Good night, I am Stephanie Reed";
    }
} 

var L = window.location.href;
console.log(L)
if (L.includes('index.html')) {
    greetingFunc();
}

function addYear() {
    var d = new Date();
    var y = d.getFullYear();
    var E = document.getElementById("copyYear");
    E.innerHTML += y;

}

// function showList() {
//     document.getElementById("FavList").style.display = "block";
//     document.getElementById("SeeMoreBTN").style.display = "none";
// }

$("#readLess").click(function() {
    $("#longIntro").hide();
    $("#readLess").hide();
    $("#readMore").show();
})

$("#readMore").click(function() {
    $("#longIntro").show();
    $("#readLess").show();
    $("#readMore").hide();
})

function validate() {
    var userName = document.getElementById("UserName");
    var userEmail = document.getElementById("UserEmail")
    var userText = document.getElementById("UserText");
    var msg = document.getElementById("ValidateMsg");
    if (!userName.checkValidity() || !userEmail.checkValidity() || !userText.checkValidity()) {
        msg.innerHTML = "Please fill out the form correctly so I can get back to you :)";
    }
}
var L = window.location.href;


let map;

//NOTE: would only be used using the API Key method
// async function initMap() {

//     // The location of Tsaocaa, the Cathedral of Learning, the National Aviary, and Waffleonia
   
//     const tsaocaaPosition = { lat: 40.441631580264506, lng:-79.95729949909716 };
//     const cathedralPosition = { lat: 40.44436074265992, lng: -79.95315554204085};
//     const aviaryPosition = { lat: 40.45332124478193, lng: -80.00960698977872};
//     const waffleoniaPosition = { lat: 40.43769864077061, lng: -79.92286687390147};
//     // Request needed libraries.
   
//     //@ts-ignore
   
//     const { Map } = await google.maps.importLibrary("maps");
   
//     const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");
   
   
//     // The map, centered at Tscaocaa
   
//     map = new Map(document.getElementById("map"), {
   
//       zoom: 12,
   
//       center: tsaocaaPosition,
   
//       mapId: "DEMO_MAP_ID",
   
//     });
   
   
//     // The marker, positioned at Tsaocaa
   
//     const marker = new AdvancedMarkerElement({
   
//       map: map,
   
//       position: tsaocaaPosition,
   
//       title: "Tsaocaa",
   
//     });

//     const marker2 = new AdvancedMarkerElement({
   
//         map: map,
     
//         position: cathedralPosition,
     
//         title: "Cathedral of Learning",
     
//       });

//     const marker3 = new AdvancedMarkerElement({
   
//         map: map,
     
//         position: aviaryPosition,
     
//         title: "Cathedral of Learning",
     
//       });
    
//     const marker4 = new AdvancedMarkerElement({
   
//         map: map,
     
//         position: waffleoniaPosition,
     
//         title: "Cathedral of Learning",
     
//       });
   
//    }
// END of API version

if (L.includes("fun.html")) {

    initMap();
}

function activeNav () {
    var x = document.getElementById("myTopnav");
    if (x.className == "topnav") {
        x.className += "responsive";
    } else {
        x.className = "topnav";
    }
}
