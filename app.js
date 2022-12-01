const btn = document.querySelector("#btn");
const btn2 = document.querySelector("#btn2");
const resultat = document.querySelector(".resultat");
const resultatCategorie = document.querySelector(".resultatCategorie");
const coursSousVoile = document.querySelector("#cours-sous-voile");

let nbrJumps = document.querySelector("#nbrJumps");
let weight = document.querySelector("#weight");
let size = document.querySelector("#size");

// fonction calcule le wingload, poids avec rig * 2.2 / taille de voile = wingload
function y(a,b) {
    return a * 2.2 / b
}


btn.addEventListener("click", submit);

function submit() {

        resultat.textContent = " " 
        resultatCategorie.textContent = " "  
        checked()
        weight.value = " "
        size.value = " "

}

// Fonction checked

function checked() {

    const coursSousVoile = document.querySelector("#cours-sous-voile").selectedIndex;
    if (coursSousVoile === 0) {
        isChecked()
    }else{
      
        isNotChecked()
    }

}

function isChecked() {

    let valueNbrJumps = nbrJumps.valueAsNumber;
    let valueWeight = parseInt(weight.value);
    let valueSize = parseInt(size.value );
    let r = y(valueWeight, valueSize).toFixed(2)

    if (valueNbrJumps == 0) {
        alert("Tu dois avoir plus de 0 saut")
    }else if (valueNbrJumps >= 1 && valueNbrJumps <= 25) {
        resultat.textContent = `Ton wingload est de ${r} il devrait etre de MAX 1.1`
        resultatCategorie.textContent = "Catégoe de voile MAX 2"
        console.log("+= 1 et -= 25");
    }else if (valueNbrJumps >= 26 && valueNbrJumps <= 50) {
        resultat.textContent = `Ton wingload est de ${r} il devrait etre de MAX 1.2`
        resultatCategorie.textContent = "Catégoe de voile MAX 2"
        console.log("+=26 et -= 50");
    }else if (valueNbrJumps >= 51 && valueNbrJumps <= 100) {
        console.log("+= 51 et -=100");
        resultat.textContent = `Ton wingload est de ${r} il devrait etre de MAX 1.3`
        resultatCategorie.textContent = "Catégoe de voile MAX 3"
    }else if (valueNbrJumps >= 101 && valueNbrJumps <= 200) {
        console.log("+= 101 et -= 200");
        resultat.textContent = `Ton wingload est de ${r} il devrait etre de MAX 1.4`
        resultatCategorie.textContent = "Catégoe de voile MAX 3"
    }else if (valueNbrJumps >= 201 && valueNbrJumps <= 500) {
        console.log("+= 201 et -= 500");
        resultat.textContent = `Ton wingload est de ${r} il devrait etre de MAX 1.6`
        resultatCategorie.textContent = "Catégoe de voile MAX 4"
    }else if (valueNbrJumps >= 501 && valueNbrJumps <= 1000) {
        console.log("+= 501 et -=1000");
        resultat.textContent = `Ton wingload est de ${r} il devrait etre de MAX 1.9`
        resultatCategorie.textContent = "Catégoe de voile MAX 5"
    }else if (valueNbrJumps >= 1001 && valueNbrJumps <= 2000) {
        console.log("+= 1001 et -= 2000");
        resultat.textContent = `Ton wingload est de ${r} il devrait etre de MAX 2.5`
        resultatCategorie.textContent = "Catégoe de voile MAX 6"
    }else if (valueNbrJumps >= 2000) {
        resultat.textContent = `Ton wingload est de ${r} `
        resultatCategorie.textContent = "Catégoe de voile MAX 7"
        console.log("+++2000");
    }else{
        console.log("erreur");
    }

    console.log(r);
}

function isNotChecked() {

    let valueNbrJumps = nbrJumps.valueAsNumber;
    let valueWeight = parseInt(weight.value);
    let valueSize = parseInt(size.value );
    let r = y(valueWeight, valueSize).toFixed(2)
    
    if (valueNbrJumps == 0) {
        alert("Tu dois avoir plus de 0 saut")
    }else if (valueNbrJumps >= 1 && valueNbrJumps <= 25) {
        resultat.textContent = `Ton wingload est de ${r} il devrait etre de MAX 1`
        resultatCategorie.textContent = "Catégoe de voile MAX 1"
        console.log("NNN += 1 et -= 25");
    }else if (valueNbrJumps >= 26 && valueNbrJumps <= 50) {
        resultat.textContent = `Ton wingload est de ${r} il devrait etre de MAX 1.1`
        resultatCategorie.textContent = "Catégoe de voile MAX 2"
        console.log("NNN +=26 et -= 50");
    }else if (valueNbrJumps >= 51 && valueNbrJumps <= 100) {
        resultat.textContent = `Ton wingload est de ${r} il devrait etre de MAX 1.2`
        resultatCategorie.textContent = "Catégoe de voile MAX 3"
        console.log("NNN += 51 et -=100");
    }else if (valueNbrJumps >= 101 && valueNbrJumps <= 200) {
        resultat.textContent = `Ton wingload est de ${r} il devrait etre de MAX 1.3`
        resultatCategorie.textContent = "Catégoe de voile MAX 3"
        console.log("NNN += 101 et -= 200");
    }else if (valueNbrJumps >= 201 && valueNbrJumps <= 500) {
        resultat.textContent = `Ton wingload est de ${r} il devrait etre de MAX 1.5`
        resultatCategorie.textContent = "Catégoe de voile MAX 3"
        console.log("NNN += 201 et -= 500");
    }else if (valueNbrJumps >= 501 && valueNbrJumps <= 1000) {
        resultat.textContent = `Ton wingload est de ${r} il devrait etre de MAX 1.7`
        resultatCategorie.textContent = "Catégoe de voile MAX 4"
        console.log("NNN += 501 et -=1000");
    }else if (valueNbrJumps >= 1001 && valueNbrJumps <= 2000) {
        resultat.textContent = `Ton wingload est de ${r} il devrait etre de MAX 1.9`
        resultatCategorie.textContent = "Catégoe de voile MAX 5"
        console.log("NNN += 1001 et -= 2000");
    }else if (valueNbrJumps >= 2000) {
        resultat.textContent = `Ton wingload est de ${r} il devrait etre de MAX 2.5`
        resultatCategorie.textContent = "Catégoe de voile MAX 6"
        console.log("NNN +++2000");
    }else{
        console.log("erreur");
    }
}

// B

btn2.addEventListener("click", submitTableauVoile);

function submitTableauVoile() {
    document.location.href = "categorie.html"
}









