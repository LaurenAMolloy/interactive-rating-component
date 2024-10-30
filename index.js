console.log("it works");
// main container
const mainCard = document.querySelector("#main-card");

//thank you container
const thankyou = document.querySelector(".thankyou");  
// submit button
const submitButton = document.querySelector(".submit");
// rate again button
const rateAgain = document.querySelector("#vote-again-button");
// span
const rating = document.querySelector(".rating");
// all buttons
const rates = document.querySelectorAll(".btn-rating");

// set rating to 0
let selectedRating = 0;

// listen for a click event on the submit
submitButton.addEventListener("click", function () {
if (selectedRating > 0) {
// show thanks container
mainCard.classList.add("d-none");
// hide main container
thankyou.classList.remove("d-none");
} else {
alert("Please select a number before submitting!");
}
});

//listen for a click event on the rate again
rateAgain.addEventListener("click", function (){
    thankyou.classList.add("d-none");
    mainCard.classList.remove("d-none");
})

//forEach to loop over buttons
//click event to listen for which button is clicked
rates.forEach(function(rate) {
rate.addEventListener("click", function(){
//update selectedRating
selectedRating = Number(rate.innerText);
console.log(typeof selectedRating);
//update span
rating.innerText = rate.innerText;
})
})

