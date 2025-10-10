let arr=["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUSIbvgiLKC182UDLt6qDeA-dmTC_KehMaAA&s","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5dthTUOe8cGnuuXFH3Kt5mHbjw5BHdLvkDg&s","https://rukminim2.flixcart.com/image/480/640/kyvvtzk0/poster/8/t/3/medium-solo-leveling-sung-jin-woo-glowing-eyes-black-hair-anime-original-imagbyghc52cym2t.jpeg?q=90"]

let imgs = document.body.querySelector(".im");
 imgs.src =`${arr[0]}`;
 
 let count = 0;
 let rights = document.querySelector(".right").addEventListener("click",(e)=>{

     if(count<=arr.length-1){

        imgs.src =`${arr[count]}`;
        
     }
     if(count>arr.length-1){
            imgs.src =`${arr[0]}`
            count =0
        }
count++;


 })

 let lefts = document.querySelector(".left").addEventListener("click",(e)=>{

     if(count<=arr.length-1){

        imgs.src =`${arr[count]}`;
        
     }
     if(count<0){
            imgs.src =`${arr[2]}`
            count =2
        }
count--;


 })