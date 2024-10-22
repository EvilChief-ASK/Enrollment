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
    alert("For additional information or if you are interested in joining our team, please don't hesitate to reach out to us at\n +1(469)-630-2823 - Sai Kumar (or)\n +1(469)-926-3485 - Karthik");
}

function myLocation() {
    alert('We are a Texas-based firm with operations in various locations, including one where we operate. \n\n Our Location: Lincoln, Nebraska.')
}
