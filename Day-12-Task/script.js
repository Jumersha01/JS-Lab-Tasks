 

async function getProducts() {
//    let res = await fetch('https://fakestoreapi.com/products/categories');
 let res = await fetch('https://fakestoreapi.com/products');
   let data = await res.json();
   console.log(data)

   let all = document.body.querySelector(".All").addEventListener("click",(e)=>{
  //console.log(e.target.innerHTML.toLowerCase());
})

  for (const el of data) {
  if(el.category=="electronics"){
    let images = document.createElement('img')
    let div = document.createElement('div')
    let titles = el.title;
    let imgs = el.image;
    let price = el.price;
    
    
    div.innerHTML=` <div class="cardItem">
            <img src="${imgs}" alt="" class="imaj">
            <h3>${titles}</h3>
            <h4>$${price}</h4>
            <span>${el.category}</span>
            <div class="btnCon"><button class="blu">View Details</button><button class="gree">Add to Cart</button></div>
        </div>`;
      document.querySelector(".container").append(div);
    
    





  }
    
}
}
getProducts()