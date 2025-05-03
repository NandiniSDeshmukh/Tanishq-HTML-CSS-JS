let box=document.getElementById("images")
let arr=[
     "https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Library-Sites-TanishqSharedLibrary/default/dw0f2c180e/homepage/HeroBanner/nav-raani-desktop-en1.jpg",
     "https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Library-Sites-TanishqSharedLibrary/default/dw8f323f3e/homepage/HeroBanner/festive-24-desktop.jpg",
     "https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Library-Sites-TanishqSharedLibrary/default/dw2bb5bca4/homepage/HeroBanner/gd-desktop-wo.jpg",
     "https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Library-Sites-TanishqSharedLibrary/default/dw1cb2cf12/homepage/HeroBanner/rwj-desktop.jpg",
     "https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Library-Sites-TanishqSharedLibrary/default/dw14fc94ce/homepage/HeroBanner/rivaah-tt-launch-desktop.jpg",
     "https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Library-Sites-TanishqSharedLibrary/default/dw912fbd40/homepage/HeroBanner/modern-polki-desktop.jpg",
     "https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Library-Sites-TanishqSharedLibrary/default/dw408b476e/homepage/HeroBanner/new-arrivals-desktop.jpg",
     "https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Library-Sites-TanishqSharedLibrary/default/dw0dc4e068/homepage/HeroBanner/festive-of-exchange-desktop.jpg"
]

let count=0
  aptobox(arr[count])
function aptobox(link){
    box.innerHTML=""
    let img=document.createElement("img")
    img.src=link
    img.setAttribute("id","image")
images.append(img)
}
let si;
function timer(){
 si=setInterval(function(){

    if(count==arr.length-1){
        count=0
    }
    else{
        count++
    }
    aptobox(arr[count])
 }
,3000)
}
timer()

// function prev(){
//     if(count==0){
//     count=arr.length-1
// }
// else {
//     // count=arr.length-1
//     count--
    
// }
// aptobox(arr[count])
// clearTimeout(si)
// setTimeout(timer,5000)
// }

// function next(){
//     if(count==arr.length-1){
//     count=0
// }
// else{
//     count++
// }
// aptobox(arr[count])
// clearTimeout(si)
// setTimeout(timer,5000)
// }


let carousal=document.getElementById("carousal")
async function getprod(){
 let data=await fetch(`http://localhost:3000/homeproduct1`)
 let actualdata=await data.json()
 console.log(actualdata)

 actualdata.forEach(makecard)
}
getprod()

function makecard(obj){
    let acard=document.createElement("div")
    acard.setAttribute("id","card1")

    let aimage=document.createElement("img")
    aimage.setAttribute("id","imgc")
    aimage.src=obj.image
   

    let atitle=document.createElement("p")
    atitle.setAttribute("id","title")
    atitle.innerText=obj.title

    let aprice=document.createElement("h3")
    aprice.setAttribute("id","price")
    aprice.innerText="ru "+obj.price

    

    acard.append(aimage,atitle,aprice)
    
    carousal.append(acard)

}