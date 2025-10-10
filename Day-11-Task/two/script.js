let count =0;
let textAr = document.body.querySelector("#getdata");
let val =textAr.value
let display = document.body.querySelector(".disp")
textAr.addEventListener("input",()=>{
    count++
    display.textContent=`${count}`
    if(count===100){
        display.style.color='red'
        alert("Your Reached the word limit")
        display.setAttribute('readonly',"")
    }
})
