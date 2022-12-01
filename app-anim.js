// Animation tableau categorie voile 

const categories = document.querySelector(".categories");
let cat = document.querySelectorAll(".cat");
let categorie1 = document.querySelector(".categorie1");
let categorie2 = document.querySelector(".categorie2");
let categorie3 = document.querySelector(".categorie3");
let categorie4 = document.querySelector(".categorie4");
let categorie5 = document.querySelector(".categorie5");
let categorie6 = document.querySelector(".categorie6");
let categorie7 = document.querySelector(".categorie7");

cat.forEach(function (element, index) {
    element.addEventListener("click", function(){
        switch (index) {
            case 0:
                addClass()
                categorie1.classList.remove("remove");
                break;
            case 1:
                addClass()
                categorie2.classList.remove("remove");
                break;
            case 2:
                addClass()
                categorie3.classList.remove("remove");
                
                break;
            case 3:
                addClass()
                categorie4.classList.remove("remove");
                
                break;
            case 4:
                addClass()
                categorie5.classList.remove("remove");
                
                break;
            case 5:
                addClass()
                categorie6.classList.remove("remove");
                
                break;  
            case 6:
                addClass()
                categorie7.classList.remove("remove");
                
            default:
                break;
        }
    })
})


function addClass() {
    categories.classList.add("active")
    crossDiv.classList.remove("none")
}


//cross animation close

const crossDiv = document.querySelector(".cross");
const allCategorie =document.querySelectorAll("#nbrCategorie");


crossDiv.addEventListener("click", () =>{
    crossDiv.classList.add("active-span")
    categories.classList.remove("active")
    setTimeout(() => {
        crossDiv.classList.add("none")  
        crossDiv.classList.remove("active-span")  
    }, 500);
    for (let i = 0; i < allCategorie.length; i++) {
        const element = allCategorie[i].classList.contains("remove");
        if (element == false) {
            allCategorie[i].classList.add("remove")
        }
    }
})



// Retour vers le wingload calculator

const wingload = document.querySelector(".wingload");

wingload.addEventListener("click", () => {
    document.location.href = "index.html"
})
