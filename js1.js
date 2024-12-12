const connectBtn = document.querySelector(".connect");
const arrow = document.querySelector(".arrow");
const socialmedialist = document.querySelector(".socialmedialist");

connectBtn.addEventListener("click",()=>{
    if(!socialmedialist.classList.contains("active")){
        socialmedialist.classList.add("active");
        arrow.style.transform = "rotate(-135deg)";
    }else{
        socialmedialist.classList.remove("active");
        arrow.style.transform = "rotate(45deg)";
    }
})

function myFunction() {
    alert("For additional information or if you are interested in joining our team, please don't hesitate to reach out to us at\n +1(502)431-9420 - Charan (or)\n +1(425)459-7330 - Jayandeep");
}

function myLocation() {
    alert('We are a Texas-based firm with operations in various locations, including one where we operate. \n\n Our Location: Lincoln, Nebraska.')
}
