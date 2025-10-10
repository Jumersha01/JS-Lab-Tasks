let s = document.body.querySelector(".show")
document.body.addEventListener("keydown",(e)=>{
  s.textContent=`${e.key}`
  console.log("hi")
})