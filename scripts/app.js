/*----- ----- ----- ----- ----- ----- ----- ----- ----- -----
    VARIABLES
----- ----- ----- ----- ----- ----- ----- ----- ----- -----*/

// ----- Variables -----
var pageActuelle = 0;
var totalDevis = 0;
var totalQte = 0;

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

var bornemoins = document.getElementById("formonly");
var borneplus = bornemoins.offsetTop + bornemoins.offsetHeight;

// ----- Buttons -----

/*----- ----- ----- ----- ----- ----- ----- ----- ----- -----
    Bibliotheque
----- ----- ----- ----- ----- ----- ----- ----- ----- -----*/

// Pour y accéder : les_produits[0].nom 
var les_produits=[
  {id: 0, nom:'Fendt 1000 Vario', type:'Tracteur conventionnel', description:'le boss du quartier', annee_de_creation:2016, poids:'14000 kg', longueur:6350, largeur:2750, hauteur:3606, note: 4.9, prix:641000, nb_exemplaire:0},
  {id: 1, nom:'TT504 50hp', type:'Tracteur conventionnel', description:'faispachier', annee_de_creation:1999, poids:'2285 kg', longueur:3579, largeur:1750, hauteur:2105, note: 4.3, prix:4500, nb_exemplaire:0},
  {id: 2, nom:'Kubota B1500DT', type:'Micro tracteur', description:'faispachier', annee_de_creation:1982, poids:'545 kg', longueur:220, largeur:105, hauteur:120, note: 4.3, prix:3791, nb_exemplaire:0},
  {id: 3, nom:'MTD 96', type:'Micro tracteur', description:'faispachier', annee_de_creation:1996, poids:'149 kg', longueur:170, largeur:107, hauteur:100, note: 4.3, prix:134465, nb_exemplaire:0},
  {id: 4, nom:'Grégoire G5-320', type:'Tracteur enjambeur', description:'faispachier', annee_de_creation:2018, poids:'1052 kg', longueur:5240, largeur:2895, hauteur:3600, note: 4.3, prix:172000, nb_exemplaire:0},
  {id: 5, nom:'Bobard Polybob', type:'Tracteur enjambeur', description:'faispachier', annee_de_creation:1927, poids:'387 kg', longueur:210, largeur:130, hauteur:180, note: 1.0, prix:1000, nb_exemplaire:0},
  {id: 6, nom:'Eliatis Chaptrack 282', type:'Tracteur forestier', description:'faispachier', annee_de_creation:1994, poids:'23t', longueur:111, largeur:256, hauteur:3606, note: 4.3, prix:330000, nb_exemplaire:0},
  {id: 7, nom:'Agrip JD 4000', type:'Tracteur forestier', description:'faispachier', annee_de_creation:1982, poids:'23t', longueur:111, largeur:256, hauteur:3606, note: 4.3, prix:1000, nb_exemplaire:0},
  {id: 8, nom:'Reform METRAC H8X', type:'Tracteur de pente', description:'faispachier', annee_de_creation:2015, poids:'23t', longueur:111, largeur:256, hauteur:3606, note: 4.3, prix:78000, nb_exemplaire:0},
  {id: 9, nom:'Reform METRAC 2002', type:'Tracteur de pente', description:'faispachier', annee_de_creation:1980, poids:'23t', longueur:111, largeur:256, hauteur:3606, note: 4.3, prix:841, nb_exemplaire:0},
  {id: 10, nom:'1961 Lamborghini 5C Ercole', type:'Tracteur à chenille', description:'faispachier', annee_de_creation:1961, poids:'23t', longueur:111, largeur:256, hauteur:3606, note: 5, prix:28500, nb_exemplaire:0},
  {id: 11, nom:'Steiger 500', type:'Tracteur à chenille', description:'faispachier', annee_de_creation:2018, poids:'23t', longueur:111, largeur:256, hauteur:3606, note: 4.7, prix:35760, nb_exemplaire:0}

];

/*----- ----- ----- ----- ----- ----- ----- ----- ----- -----
    Produits
----- ----- ----- ----- ----- ----- ----- ----- ----- -----*/

// ----- Barre de recherche -----

function crea_recherche(){
  //console.log(document.getElementById("recherche_produit"));
  document.getElementById("recherche_produit").innerHTML = '<input type="text" id="recherche" name="recherche" placeholder="Saisissez votre Recherche"><select id="tri"><optgroup label="Tri"><option value="nom">Nom</option><option value="type">Type</option><option value="annee_de_creation+">Année de création+</option><option value="annee_de_creation-">Année de création-</option><option value="prix+">Prix+</option><option value="prix-">Prix-</option><option value="note+">Note+</option><option value="note-">Note-</option></optgroup></select><button type="button" id="recherche_button" onclick="recherche()">Rechercher</button><button type="reset" onclick="suicide_recherche()">Annuler</button>';
  recherche();
  /* <option value="nom">Nom</option> */
}

function recherche(){
  //document.getElementById('recherche').innerHTML = "";
  var le_tri = document.getElementById('tri').value;
  console.log(le_tri);
  var liste_tri;
  if(le_tri=='nom'){
    les_produits.sort(function(first, second) {
      var name1 = first.nom.toLowerCase();
      var name2 = second.nom.toLowerCase();
      if (name1 > name2) {
        return 1;
      } else if (name1 < name2){
        return -1;
      } else {
        return 0;
      };
    });
  }
  else if (le_tri=='type'){
    les_produits.sort(function(first, second) {
      return first.type - second.type;
    });
  }
  else if (le_tri=='annee_de_creation+'){
    les_produits.sort(function(first, second) {
      return first.annee_de_creation - second.annee_de_creation;
    });
  }
  else if (le_tri=='annee_de_creation-'){
    les_produits.sort(function(first, second) {
      return second.annee_de_creation - first.annee_de_creation;
    });
  }
  else if (le_tri=='prix+'){
    les_produits.sort(function(first, second) {
      return first.prix - second.prix;
    });
  }
  else if (le_tri=='prix-'){
    les_produits.sort(function(first, second) {
      return second.prix - first.prix;
    });
  }
  else if (le_tri=='note+'){
    les_produits.sort(function(first, second) {
      return first.note - second.note;
    });
  }
  else if (le_tri=='note-'){
    les_produits.sort(function(first, second) {
      return second.note - first.note;
    });
  }
  var ma_recherche = document.getElementById('recherche').value;
  console.log(ma_recherche);
  if (ma_recherche!=""){
    var ma_page = document.getElementById("page_produit");
    ma_page.innerHTML = "";
    //console.log(ma_page);
    for(var key in les_produits) { /* stringB.indexOf( stringA ) > -1 */
      if (les_produits[key].nom.indexOf(ma_recherche)>-1||
      les_produits[key].type.indexOf(ma_recherche)>-1||
      les_produits[key].description.indexOf(ma_recherche)>-1||
      les_produits[key].annee_de_creation.toString().indexOf(ma_recherche)>-1||
      les_produits[key].poids.indexOf(ma_recherche)>-1||
      les_produits[key].longueur.toString().indexOf(ma_recherche)>-1||
      les_produits[key].largeur.toString().indexOf(ma_recherche)>-1||
      les_produits[key].hauteur.toString().indexOf(ma_recherche)>-1||
      les_produits[key].prix.toString().indexOf(ma_recherche)>-1){
        ma_page.innerHTML += (crea_1_produit(key));
      }
    }
    if (ma_page.innerHTML == ""){
      ma_page.innerHTML = "<div>Nous n'avons trouvé aucun résultat</div>";
    }
  }
  les_produits.sort(function(first, second) {
    return first.id - second.id;
  });
}

function suicide_recherche(){
  document.getElementById('recherche').value = "";
  document.getElementById("page_produit").innerHTML = "";
  crea_produit();
}

// ----- Les produits -----

function crea_1_produit(num){
  // c'est pour l'affichage, car aprés on va afficher les produits sur des pages par 10 (à voir) et faire des recherches
  return '<div id="produit_'+les_produits[num].id+'" class="produit"><img src="images/'+les_produits[num].id
  +'.png"><div class="info_produit">'+les_produits[num].nom+'<div class="description_produit">'+les_produits[num].description
  +'</div><div class="note_produit">'+les_produits[num].note+'/5 *</div><div class="cout_produit">'+les_produits[num].prix
  +' €</div><div class="add_button" onclick="ajouterDevis('+les_produits[num].id+');"><button type="button">Ajouter au devis</button></div></div></div>';
}

function crea_produit(){
  //console.log(document.getElementById("page_produit"));
  for(var key in les_produits) {
    document.getElementById("page_produit").innerHTML += (crea_1_produit(key));
  }
  
}

// ----- JSP -----

function createHome(){
  
  les_produits.sort(function(first, second) {
    return first.prix - second.prix;
   });
  document.getElementById("cheapest").innerHTML += crea_1_produit(0)
  
  les_produits.sort(function(first, second) {
    return second.note - first.note;
   });
  document.getElementById("popularest").innerHTML += crea_1_produit(0);
  les_produits.sort(function(first, second) {
    return second.annee_de_creation - first.annee_de_creation;
   });
  document.getElementById("newest").innerHTML += crea_1_produit(0);
  les_produits.sort(function(first, second) {
    return second.prix - first.prix;
   });
  document.getElementById("highestend").innerHTML += crea_1_produit(0);

  les_produits.sort(function(first, second) {
    return first.id - second.id;
   });
}
createHome();

function fetchProduitsDevis() {
  for(var key in les_produits) {
    var value = les_produits[key];

    var text = les_produits[key].type + " " + les_produits[key].nom + " " + les_produits[key].poids + " (" + les_produits[key].prix + "€)";

    var section = new Option(text, key);

		document.getElementById('role').appendChild(section);

  }
}

fetchProduitsDevis();

/*----- ----- ----- ----- ----- ----- ----- ----- ----- -----
    MAIN
----- ----- ----- ----- ----- ----- ----- ----- ----- -----*/

// ----- Les menus -----

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
  crea_recherche();
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

// ----- Réinitialisation -----

function removeAll(){
    //console.log(pageActuelle);
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

/*----- ----- ----- ----- ----- ----- ----- ----- ----- -----
    Barre de navigation
----- ----- ----- ----- ----- ----- ----- ----- ----- -----*/

function test_responsive(){
  if (window.outerWidth>600){
    var x = document.getElementById("myTopnav");
    if (x.className !== "topnav") {
      myFunction();
    }
  }
}

/* Toggle entre ajouter et enlever la classe "responsive" de topnav quand l'utilisateur clique sur l'icon */
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
}

/*----- ----- ----- ----- ----- ----- ----- ----- ----- -----
    Devis
----- ----- ----- ----- ----- ----- ----- ----- ----- -----*/

// ----- Formulaire -----

function suicide(){
  document.getElementById('table').innerHTML = defaulttable;
  totalDevis = 0;
  totalQte = 0;

  var devis = document.getElementById('totalDevis');
  var qte = document.getElementById('totalQte');
  var devisqte = document.getElementById('devisQteMenu');
  devis.textContent = totalDevis;
  qte.textContent = totalQte;
  devisqte.textContent = "";
}

window.onscroll = function() {electroaimant()};

function electroaimant() {
  if (window.pageYOffset > borneplus) {
	  bornemoins.classList.add("aimante");
  } else {
	bornemoins.classList.remove("aimante");
	  }
}

// ----- Tableau -----

function ajouterDevis(key = document.getElementById('role').options[document.getElementById('role').selectedIndex].value) {

  update = false;
  var table = document.getElementById('table');
  for (var i = 1, row; row = table.rows[i]; i++) {
    if (row.cells[0].textContent == les_produits[key].id) {
      document.getElementById('prix'+les_produits[key].id).textContent = parseInt(document.getElementById('prix'+les_produits[key].id).textContent, 10) + 1
      update = true;
    }
  }

  if (!update) {
    var section = document.createElement('tr');
              
    var valeur0 = document.createElement('td');
    valeur0.textContent = les_produits[key].id;
    var valeur1 = document.createElement('td');
    valeur1.textContent = les_produits[key].nom;
    var valeur2 = document.createElement('td');
    valeur2.textContent = les_produits[key].type;
    var valeur3 = document.createElement('td');
    valeur3.setAttribute("id", "prix" + les_produits[key].id);
    valeur3.textContent = 1;
    var valeur4 = document.createElement('td');
    valeur4.textContent = les_produits[key].prix;

    section.appendChild(valeur0);
    section.appendChild(valeur1);
    section.appendChild(valeur2);
    section.appendChild(valeur3);
    section.appendChild(valeur4);

    document.getElementById('table').appendChild(section);
  }

  for (var i = 1, row; row = table.rows[i]; i++) {
    totalDevis += row.cells[3].textContent * row.cells[4].textContent;
  }
            
  totalQte = totalQte + 1;

  var devis = document.getElementById('totalDevis');
  var qte = document.getElementById('totalQte');
  var devisqte = document.getElementById('devisQteMenu');
  devis.textContent = totalDevis;
  qte.textContent = totalQte;
  if (totalQte > 99) {
    devisqte.textContent = "\xa0(99+)";
  } else {
    devisqte.textContent = "\xa0(" + totalQte + ")";
  }
  
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
