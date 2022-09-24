const container = document.querySelector(".container");
const count = document.querySelector(".count");
const amount = document.querySelector(".amount");
const movie = document.getElementById("movie");
container.addEventListener("click", function(e){
    if(e.target.classList.contains("seat")&& !e.target.classList.contains("reserved")){
        e.target.classList.toggle("selected");
    }
    let selectedSeatCount = container.querySelectorAll(".seat.selected").length;
    let price = movie.value;
    count.innerText = selectedSeatCount;
    amount.innerText = price*selectedSeatCount;
    }
    
);
movie.addEventListener("change", function(e){
    let selectedSeatCount = container.querySelectorAll(".seat.selected").length;
    let price = movie.value;
    count.innerText = selectedSeatCount;
    amount.innerText = price*selectedSeatCount;
})

