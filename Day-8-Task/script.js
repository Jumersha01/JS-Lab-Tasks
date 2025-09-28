let len = document.body.querySelector(".len");
let vo =document.body.querySelector(".vo");
let co =document.body.querySelector(".co");
let spaa = document.body.querySelector(".spas")
let values = document.body.querySelector(".val");
document.body.querySelector(".get").addEventListener("click",()=>{
    let vow =0;
    let con = 0;
    let lenf = values.value;
len.innerHTML=`Lenght is : ${lenf.length}`;
let spaces  = values.value.split(" ");
let spa = spaces.length-1;
 spaa.innerHTML=`Spaces is :${spa}`;
 
 for (const i  of values.value) {
    let j = i.toLowerCase();
   if(j=='a'||j=='e'||j=='i'||j=='o'||j=='u'){
    vow++;
   }
   else{
con++;
   }
   vo.innerHTML=`Vowels are ${vow}`;
    co.innerHTML=`Cononat are ${con}`
 }
 
});