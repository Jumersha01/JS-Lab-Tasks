let inNumbers = document.body.querySelector("#Guess");
let shows = document.body.querySelector(".show");
let show2 = document.body.querySelector(".show2")

function main(){
 document.querySelector("#check").addEventListener("click",()=>{
   let inValues = inNumbers.value;
   let rndNO = Math.floor(Math.random()*50+1);
   shows.textContent=`The Random No Was ${rndNO}`;
//    console.log(rndNO)
//    console.log(inValues)
       if(inValues==rndNO){
          show2.textContent=`WoW You Did It!`
       }
       else{
        show2.textContent=`Better Luck Next Time`
       }
     
 })

}
main()