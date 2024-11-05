var count = 0;
var inc = 0;
var margin = 0;
var slider = document.getElementsByClassName("slider-width")[0];
var itemDisplay = 0;

// Responsive - depending on the screen width, how many elemnts will be displayed
if (screen.width > 990) 
    itemDisplay = document.getElementsByClassName("slider-container")[0].getAttribute("item-display-d");
else if(screen.width > 700 && screen.width < 990)
    itemDisplay = document.getElementsByClassName("slider-container")[0].getAttribute("item-display-t");
else
    itemDisplay = document.getElementsByClassName("slider-container")[0].getAttribute("item-display-m");

var item = document.getElementsByClassName("item"); // If we do not put an array, then we represent all items
var itemleft = item.length % itemDisplay;

//console.log(itemDisplay); //Responsive testing
