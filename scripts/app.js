/*----- ----- ----- ----- ----- ----- ----- ----- ----- -----
    VARIABLES
----- ----- ----- ----- ----- ----- ----- ----- ----- -----*/

// ----- Variables -----
var pageActuelle = 0

const name_site = document.getElementById("name_site");
const nav_home = document.getElementById("nav_home");
const nav_prod = document.getElementById("nav_prod");
const nav_devis = document.getElementById("nav_devis");
const nav_avis = document.getElementById("nav_avis");
const nav_propos = document.getElementById("nav_propos");
const home = document.getElementById("home");
const prod = document.getElementById("prod");
const devis = document.getElementById("devis");
const avis = document.getElementById("avis");
const propos = document.getElementById("propos");
const defaulttable = document.getElementById('table').innerHTML;

// ----- Buttons -----

/*----- ----- ----- ----- ----- ----- ----- ----- ----- -----
    Bibliotheque
----- ----- ----- ----- ----- ----- ----- ----- ----- -----*/

/* nom,type,description,note,prix */
var les_produits=[
  {nom:'Fendt 1000 Vario', type:'Tracteur conventionnel', description:'le boss du quartier', poids:'36t', dimension1:124, dimension2:316, note: 4.9, prix:641000, nb_exemplaire:0},
  {nom:'TT504 50hp', type:'Tracteur conventionnel', description:'faispachier', poids:'23t', dimension1:111, dimension2:256, note: 4.3, prix:4500, nb_exemplaire:0},
  {nom:'Kubota B1500DT', type:'Micro tracteur', description:'faispachier', poids:'23t', dimension1:111, dimension2:256, note: 4.3, prix:3791, nb_exemplaire:0},
  {nom:'MTD 96', type:'Micro tracteur', description:'faispachier', poids:'23t', dimension1:111, dimension2:256, note: 4.3, prix:134465, nb_exemplaire:0},
  {nom:'Grégoire G5-320', type:'Tracteur enjambeur', description:'faispachier', poids:'23t', dimension1:111, dimension2:256, note: 4.3, prix:172000, nb_exemplaire:0},
  {nom:'Bobard Polybob', type:'Tracteur enjambeur', description:'faispachier', poids:'23t', dimension1:111, dimension2:256, note: 1.0, prix:1000, nb_exemplaire:0},
  {nom:'Eliatis Chaptrack 282', type:'Tracteur forestier', description:'faispachier', poids:'23t', dimension1:111, dimension2:256, note: 4.3, prix:330000, nb_exemplaire:0},
  {nom:'Agrip JD 4000', type:'Tracteur forestier', description:'faispachier', poids:'23t', dimension1:111, dimension2:256, note: 4.3, prix:1000, nb_exemplaire:0},
  {nom:'Reform metrac', type:'Tracteur de pente', description:'faispachier', poids:'23t', dimension1:111, dimension2:256, note: 4.3, prix:78000, nb_exemplaire:0},
  {nom:'Reform FINGERBALKENMÄHER', type:'Tracteur de pente', description:'faispachier', poids:'23t', dimension1:111, dimension2:256, note: 4.3, prix:841, nb_exemplaire:0},
  {nom:'1961 Lamborghini 5C Ercole', type:'Tracteur à chenille', description:'faispachier', poids:'23t', dimension1:111, dimension2:256, note: 5, prix:28500, nb_exemplaire:0},
  {nom:'Steiger 500', type:'Tracteur à chenille', description:'faispachier', poids:'23t', dimension1:111, dimension2:256, note: 4.7, prix:35760, nb_exemplaire:0}

];

function crea_1_produit(num){
  // c'est pour l'affichage, car aprés on va afficher les produits sur des pages par 10 (à voir) et faire des recherches
  return '<div id="produit_'+num+'" class="produit"><img src="images/'+num
  +'.png"><div class="info_produit">'+les_produits[num].nom+'<div class="description_produit">'+les_produits[num].description
  +'</div><div class="note_produit">'+les_produits[num].note
  +'/5 *</div><div class="cout_produit">'+les_produits[num].prix
  +' €</div><div class="add_button" onclick="ajouterDevis('+num+');"><button type="button">Ajouter au devis</button></div></div></div>';
  /*
  <img src="images/tracteur1.jpg">
  <div class="info_produit">
    <div class="description_produit">Magnifique tracteur !</div>
    <div class="note_produit">4.3/5 *</div>
    <div class="cout_produit">36 000</div>
  </div>
  */
}

function crea_produit(){
  console.log(document.getElementById("page_produit"));
  for(var key in les_produits) {
    document.getElementById("page_produit").innerHTML += (crea_1_produit(key));
  }
  
}

function fetchProduitsDevis() {
  for(var key in les_produits) {
    var value = les_produits[key];

    var text = les_produits[key].type + " " + les_produits[key].nom + " " + les_produits[key].poids + " (" + les_produits[key].prix + "€)";

    var section = new Option(text, key);

		document.getElementById('role').appendChild(section);

  }
}

fetchProduitsDevis();

// Pour y accéder : les_produits[0].nom 

/*----- ----- ----- ----- ----- ----- ----- ----- ----- -----
    MAIN
----- ----- ----- ----- ----- ----- ----- ----- ----- -----*/

/*Les menus*/
function create_home(){
  pageActuelle = 0;
  removeAll();
  home.classList.remove("chuispala");
  home.classList.add("chuisla");
  nav_home.classList.add("active");
}

function create_prod(){
  pageActuelle = 1;
  removeAll();
  prod.classList.remove("chuispala");
  prod.classList.add("chuisla");
  nav_prod.classList.add("active");
  crea_produit();
}

function create_devis(){
  pageActuelle = 2;
  removeAll();
  devis.classList.remove("chuispala");
  devis.classList.add("chuisla");
  nav_devis.classList.add("active");
}

function create_avis(){
  pageActuelle = 3;
  removeAll();
  avis.classList.remove("chuispala");
  avis.classList.add("chuisla");
  nav_avis.classList.add("active");
}

function create_propos(){
  pageActuelle = 4;
  removeAll();
  propos.classList.remove("chuispala");
  propos.classList.add("chuisla");
  nav_propos.classList.add("active");
}

function removeAll(){
    console.log(pageActuelle);
    nav_home.classList.remove("active");
    home.classList.remove("chuisla");
    home.classList.add("chuispala");

    nav_prod.classList.remove("active");
    prod.classList.remove("chuisla");
    prod.classList.add("chuispala");

    nav_devis.classList.remove("active");
    devis.classList.remove("chuisla");
    devis.classList.add("chuispala");

    nav_avis.classList.remove("active");
    avis.classList.remove("chuisla");
    avis.classList.add("chuispala");

    nav_propos.classList.remove("active");
    propos.classList.remove("chuisla");
    propos.classList.add("chuispala");

    var x = document.getElementById("myTopnav");
    if (x.className !== "topnav") {
      myFunction();
    }
    
  
}

function test_responsive(){
  if (window.outerWidth>600){
    var x = document.getElementById("myTopnav");
    if (x.className !== "topnav") {
      myFunction();
    }
  }
}

/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
}

function suicide(){
  document.getElementById('table').innerHTML = defaulttable;
}

window.onscroll = function() {electroaimant()};

			var bornemoins = document.getElementById("formonly");
			var borneplus = bornemoins.offsetTop + bornemoins.offsetHeight;

			function electroaimant() {
			  if (window.pageYOffset > borneplus) {
			    bornemoins.classList.add("aimante");
			  } else {
			    bornemoins.classList.remove("aimante");
			  }
			}

function ajouterDevis(key = document.getElementById('role').options[document.getElementById('role').selectedIndex].value) {
            var section = document.createElement('tr');

						var valeur1 = document.createElement('td');
						valeur1.textContent = les_produits[key].nom;
						var valeur2 = document.createElement('td');
						valeur2.textContent = les_produits[key].type;
						var valeur3 = document.createElement('td');
						valeur3.textContent = "1"
						var valeur4 = document.createElement('td');
						valeur4.textContent = les_produits[key].prix;

						section.appendChild(valeur1);
						section.appendChild(valeur2);
						section.appendChild(valeur3);
						section.appendChild(valeur4);

						document.getElementById('table').appendChild(section);

}


/*
function action_precedent(){
  let minimum = 0;
  if (page - 1 >= minimum){
      page -= 1;
      update_Task(page);
  }else{
      alert("Impossible de revenir en arrière.");
  }
}

function action_suivant(){
  let maximum = document.info.length / 10;
  if (page + 1 < maximum){
      page += 1;
      update_Task(page);
  }else{
      alert("Impossible de continuer.");
  }
}*/

/*window.onscroll = function() {slide()};

var formulaire = document.getElementById("formulaire2");
var haut_de_page = formulaire.offsetTop + formulaire.offsetHeight;

function slide() {
  if (window.pageYOffset > haut_de_page) {
    formulaire.classList.add("slide");
  } else {
    formulaire.classList.remove("slide");
  }
}*/
