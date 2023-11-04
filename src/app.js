// Write your code on this file. Please don't change the existing code
// unless absolutely needed.

//Initial price of the burger
var wholeWheatBun = 10;

//Ingredients of the burger along with the price
// Clue: the name is same as the textcontent of the button. Will be useful later on :)
var ingredients = {
  Patty: 80,
  Cheese: 10,
  Tomatoes: 20,
  Onions: 20,
  Lettuce: 20
};

//Current state of the ingredients in the burger
var state = {
  Patty: false,
  Cheese: false,
  Tomatoes: false,
  Onions: false,
  Lettuce: false
};

// This function renders the entire screen everytime the state changes accordingly
function renderAll() {
  renderPatty();
  renderCheese();
  renderTomatoes();
  renderOnions();
  renderLettuce();
  renderButtons();
  renderIngredientsBoard();
  renderPrice();
}

function renderPatty() {
  let patty = document.querySelector("#patty");
  //you can also use getElementById
  if (state.Patty) {
    patty.style.display = "inherit";
  } else {
    patty.style.display = "none";
  }
}

function renderCheese() {
  let Cheese=document.querySelector("#cheese")
  if (state.Cheese){
    Cheese.style.display="block"
  }
  else{
    Cheese.style.display="none"
  }
}

function renderTomatoes() {
  let tomatoes=document.querySelector("#tomato")
  if (state.Tomatoes){
    tomatoes.style.display="block"
  }
  else{
    tomatoes.style.display="none"
  }
}

function renderOnions() {
  let onion=document.querySelector("#onion")
  if(state.Onions){
    onion.style.display="block"
  }
  else{
    onion.style.display="none"
  }
}

function renderLettuce() {
  let lettuce=document.querySelector("#lettuce")
  if(state.Lettuce){
    lettuce.style.display="block"
  }
  else{
  lettuce.style.display="none"
  }
}

document.querySelector(".btn-patty").onclick = function () {
  state.Patty = !state.Patty;
  renderAll();
};

document.querySelector(".btn-cheese").onclick= function () {
  
  state.Cheese = !state.Cheese;
  renderAll();
};

document.querySelector(".btn-tomatoes").onclick=function () {
  
  state.Tomatoes = !state.Tomatoes;
  renderAll();
};

document.querySelector(".btn-onions").onclick=function () {
 
  state.Onions = !state.Onions;
  renderAll();
};

document.querySelector(".btn-lettuce").onclick=function () {
  
  state.Lettuce = !state.Lettuce;
  renderAll();
};

//Challenge 1 - Add/Remove the class active to the buttons based on state
function renderButtons() {
  if (state.Patty){
    document.querySelector(".btn-patty").classList.remove("active")
  }
  else{
    document.querySelector(".btn-patty").classList.add("active")
  }
  if (state.Cheese){
    document.querySelector(".btn-cheese").classList.remove("active")
  }
  else{
    document.querySelector(".btn-cheese").classList.add("active")
  }
  if (state.Tomatoes){
    document.querySelector(".btn-tomatoes").classList.remove("active")
  }
  else{
    document.querySelector(".btn-tomatoes").classList.add("active")
  }
  if (state.Onions){
    document.querySelector(".btn-onions").classList.remove("active")
  }
  else{
    document.querySelector(".btn-onions").classList.add("active")
  }
  if (state.Lettuce){
    document.querySelector(".btn-lettuce").classList.remove("active")
  }
  else{
    document.querySelector(".btn-lettuce").classList.add("active")
  }

  
}
//Challenge 2 - Render only the items selected in the ingredients board based on the state
function renderIngredientsBoard() { 
  if (state.Patty){
    document.querySelectorAll(".items")[0].style.display="block"
  }
  else{
    document.querySelectorAll(".items")[0].style.display = "none"
  }
  if (state.Cheese){
    document.querySelectorAll(".items")[1].style.display="block"
  }
  else{
    document.querySelectorAll(".items")[1].style.display="none"
  }
  if (state.Tomatoes){
    document.querySelectorAll(".items")[2].style.display="block"
  }
  else{
    document.querySelectorAll(".items")[2].style.display="none"
  }
  if (state.Onions){
    document.querySelectorAll(".items")[3].style.display="block"
  }
  else{
    document.querySelectorAll(".items")[3].style.display="none"
  }
  if (state.Lettuce){
    document.querySelectorAll(".items")[4].style.display="block"
  }
  else{
    document.querySelectorAll(".items")[4].style.display="none"
  }
}


function renderPrice(){
  total=20
  prize=document.querySelector(".price-details")
  if (state.Patty){
    total+=ingredients.Patty
  }
  
  if (state.Cheese){
    total+=ingredients.Cheese
  }
  
  if (state.Tomatoes){
    total+=ingredients.Tomatoes
  }
  
  if (state.Onions){
    total+=ingredients.Onions
  }
  
  if (state.Lettuce){
    total+=ingredients.Lettuce
  }
  prize.innerText="INR"+total
  console.log(total)
} 

//Judgement 1
//In the p element having price-details as the class, display the calculated
//price based on ingredients
