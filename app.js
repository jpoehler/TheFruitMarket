//create an array to store the objects
var fruitsArray = [];
// set the initial fruitPrice
var fruitPrice;
// set the total cash
var totalCash = 100;
//build object via constructor Fruit
function Fruit (name, price) {
  this.name = name;
  this.price = price;
  fruitsArray.push(this);
}

//create new fruit objects
var apple = new Fruit ("Apple", 0);
var orange = new Fruit ("Orange", 0);
var banana = new Fruit ("Banana", 0);
//var grape = new Fruit ("Grapes", 5.00);
var pear = new Fruit ("Pear", 0);
//var watermelon = new Fruit ("Watermelon", 5.00);

//jquery document ready
$(document).ready(function(){
  $('.fruits').append('<div class="cash">Total Cash: $<span id="totalCash">' + totalCash + '</span></div>');
  for(var i = 0; i < fruitsArray.length; i++) {
    //set the fruit price and append to the DOM
    setInitial(fruitsArray[i]);
    appendDOM(fruitsArray[i]);
  }
 $('.fruits').on('click','button', spendMoney);
});

function spendMoney(){
  var price = $(this).data('price');
  totalCash -= price;
  console.log(price);
  $('#totalCash').text(totalCash);
}

//set the initial price for each fruit
function setInitial(object){
  object.price += randomNumber(0.5, 9.99);

}
//initial append to the DOM
function appendDOM(object){
  $('.fruits').append('<div class="eachfruit"></div>');
  var $el = $('.fruits').children().last();

  $el.append('<p class="' + object.name + '">Fruit Name: ' + object.name + '</p>');
  $el.append('<p class="' + object.name + '-price">Fruit Price: $' + object.price + '</p>');
  $el.append('<button id="' + object.name + '"> Buy </button>');
  //$('.button').data('price', object.price);
  //console.log(object);
  // store the data to the button

}
// set up the function to generate random numbers for each fruit price
//var fruitPrice = randomNumber(0.5, 9.99);
function setPrice() {
  for(var i = 0; i < fruitsArray.length; i++){

    fruitsArray[i].price += randomNumber(-0.5, 0.5);
    while(fruitsArray[i].price < 0.5){
      fruitsArray[i].price += randomNumber(0,0.5);
    }
    while(fruitsArray[i].price > 9.99){
      fruitsArray[i].price -= randomNumber(0,0.5);
    }

    $('.eachfruit').find('.' + fruitsArray[i].name + '-price').text("Fruit Price: $" + fruitsArray[i].price.toFixed(2));
    $('#'+fruitsArray[i].name+'').data('price', fruitsArray[i].price.toFixed(2));

    //console.log(fruitsArray);
  }

}
//random number generator
function randomNumber(min, max){
  return Math.random() * (1 + max - min) + min*100/100;
}

var test = randomNumber(0.5,9.99);
console.log(test);
//built in function to change the price every 15 seconds
setInterval(setPrice, 3000);
