var annuaire = JSON.parse(localStorage.getItem('3d')) || [];

const btn = document.querySelector('#btn')
const personne = document.getElementById('personne')

btn.addEventListener('click', () => { //()=> veut dire fonction nouvelle écriture en javascript
    personne.classList.toggle("show") //show class déclarée en css // toggle appelle ou enlève au clic donc ici l'image apparait ou disparait
})
// var annuaire = [
//     {
//         nom  	: "gauthier", 
//         prenom	: "fred", 
//         numero	: "0606060606",
//         nomComplet : function() {
//             return this.nom + " " + this.prenom + " "+ this.numero;
//         }
//     },{
//         nom  	: "bedu", 
//         prenom	: "celine", 
//         numero	: "0707070707",
//         nomComplet : function() {
//             return this.nom + " " + this.prenom + " "+ this.numero;
//         }
//     }
// ]

function afficherListe() {
    document.getElementById ("personne").innerHTML ="";
    for (let i in annuaire) {
        document.getElementById ("personne").innerHTML +=`<option value ="${annuaire[i].numero}">${annuaire[i].nom}, ${annuaire[i].prenom}, ${annuaire[i].numero}</option>`;
    }
}
function ajouterClient() {
   let  nom = document.getElementById("nom").value;
   let prenom = document.getElementById("prenom").value;
   let tel = document.getElementById("tel").value;
    if (nom.trim() != '' && prenom.trim() != '' && tel.trim() != '') {
        annuaire.push({
            nom  	: nom, 
            prenom	: prenom, 
            numero	: tel,
           /*nomComplet : function() {
                return this.nom + " " + this.prenom + " "+ this.numero;
            }*/
        })
        sauvegardeDonnees();
        afficherListe();
    }
    else {
        alert('veuillez saisir un client !');
    }
}

function supprimerClient() {			
    /*annuaire.pop();//suppression du dernier*/
    let numero = document.querySelector('#personne option:checked').value;
    for (i in annuaire) {
        if (annuaire[i].numero == numero) {
            annuaire.splice(i, 1);
        }
    }


    afficherListe();
    sauvegardeDonnees()
}
function sauvegardeDonnees(){
    localStorage.setItem('3d', JSON.stringify(annuaire));
}

afficherListe();

const mouseEvent = document.querySelector(".mouseEvent");
const horizontal = document.querySelector(".horizontal");
const vertical = document.querySelector(".vertical");

mouseEvent.addEventListener("mousemove", (e) => { // e pour event
   // console.log(event);
    horizontal.innerHTML = e.x;
    vertical.innerHTML = e.y;
    mouseEvent.style.left = e.x / window.innerWidth * 100 + "%";//permet de bouger de gauche à droite
   // mouseEvent.style.top = e.y / window.innerHeight * 100 + "%";// permet de bouger de haut en bas

    if (e.x > 500) {
        document.body.style.filter = "blur(2px)"; // pour flouter dès que cela dépasse 500px
    } else {
        document.body.style.filter = "none"; // pas de floutage en dessous
    }
})
//****************************************************** */
document.getElementById('input').addEventListener('input', (e) => {
   //console.log(e.target.value);
    vertical.innerHTML = e.target.value

})




