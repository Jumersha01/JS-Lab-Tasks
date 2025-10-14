async function getData(){
    let countryName =document.body.querySelector(".coun").value;
    let a = await fetch(`https://countriesnow.space/api/v0.1/countries`);
    console.log(countryName)
    let b = await a.json();
    for (const element of b.data) {
       let val =  element.country=countryName
        console.log(element.cities)
    }
}
document.querySelector(".cli").addEventListener("click",getData)



