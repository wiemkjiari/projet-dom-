// get buton plus 
let btnP = document.querySelectorAll("#btnplus");
// get button moin
let btnm = document.querySelectorAll("#btnmoins");

//get price
let price= document.querySelectorAll(".price")
//get quantite
let input=document.querySelectorAll(".input");
let amount = document.querySelectorAll("span");
let total = document.querySelector("#totale");
console.log(total);
//incremente quantite
for(let i=0;i<input.length;i++){
    btnP[i].addEventListener("click" , function() {
input[i].value++ ;
amount[i].innerHTML = parseInt(amount[i].innerHTML)+parseInt(price[i].value) ;
total.innerHTML= parseInt(total.innerHTML)+parseInt(price[i].value);
})
}

// decremente quantite
for( let i=0; i<input.length;i++){
    btnm[i].addEventListener("click", function(){
        input[i].value-- ; 
span[i].innerHTML = parseInt(span[i].innerHTML)-parseInt(price[i].value) ;
    })

}

let coeur = document.querySelectorAll("#heart")

for (let i=0;i<coeur.length;i++){
    coeur[i].addEventListener("click", function(){
        if( coeur[i].style.color =="red"){

        coeur[i].style.color ="black" ; 
        }
        else{
        coeur[i].style.color ="red" ; 

        }

    })

}
// remove item
const ligne= document.querySelectorAll("tbody tr");
const cor= document.querySelectorAll("#trash");
console.log(ligne);
console.log(cor);
for(let i=0; i<cor.length; i++){
    cor[i].addEventListener("click",function(){
     let child= ligne[i].lastChild;
     while (child){
         ligne[i].removeChild(child);
         child = ligne[i].lastChild  ; 
        }


    });

}
