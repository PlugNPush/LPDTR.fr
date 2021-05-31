var defaultalbe = document.getElementById('utilisateur').innerHTML;

var info = new Array();
var page = 0;
var defaultalbe_tache = document.getElementById('tache').innerHTML;

function destroyed_tache() {
    document.getElementById('tache').innerHTML = defaultalbe_tache;
}

function destroyed() {
    document.getElementById('utilisateur').innerHTML = defaultalbe;
}

function ajouter() {
    console.log('test de la fonction');

    const prénom = document.querySelector('#prénom');
    const nom = document.querySelector('#nom');
    const email = document.querySelector('#email');
    const rôle = document.querySelector('#rôle');

            
    const newline = document.createElement("tr");

    let newname = document.createElement("td");
    newname.textContent = document.getElementById('nom').value;
    let newname2 = document.createElement("td");
    newname2.textContent = document.getElementById('prénom').value;
    let mail = document.createElement("td");
    mail.textContent = document.getElementById('email').value;
    let rule = document.createElement("td");
    rule.textContent = document.getElementById('rôle').value;

    if (document.getElementById('nom').checkValidity() && document.getElementById('prénom').checkValidity() && document.getElementById('email').checkValidity() && document.getElementById('rôle').checkValidity()){
        if (timer){
            newline.appendChild(newname);
            newline.appendChild(newname2);
            newline.appendChild(mail);
            newline.appendChild(rule);

            document.getElementById('utilisateur').appendChild(newline);
            alert('Vous êtes inscrit !');
            Reset();
        }else{
            alert('Les 10 secondes ne sont pas écoulées.');
        }
    }else {
        alert('Veulliez remplir tous les champs.');
    }

}

window.onscroll = function() {slide()};

var formulaire = document.getElementById("formulaire2");
var haut_de_page = formulaire.offsetTop + formulaire.offsetHeight;

function slide() {
  if (window.pageYOffset > haut_de_page) {
    formulaire.classList.add("slide");
  } else {
    formulaire.classList.remove("slide");
  }
}



var check = document.querySelector('#compteur');

var timer = false;
var compt = 10;
var interval = window.setInterval(Handler, 10000);
var chrono = window.setInterval(New_ticker, 1000);

function Reset(){
    timer = false;
    compt = 10;
    interval = window.setInterval(Handler, 10000);
    chrono = window.setInterval(New_ticker, 1000);
    check.textContent = "Ajouter (10)";
    check.classList.add("time");
}

function Handler(){
    timer = true;
    clearInterval(interval);
}

function New_ticker(){
    if (compt > 0){
        compt = compt - 1;
        check.textContent = "Ajouter ("+compt+")";
    }else{
        clearInterval(chrono);
        check.textContent = "Ajouter";
        check.classList.remove("time");
    }

}


const tache = document.querySelector('#tache');
const utilisateur = document.querySelector('#utilisateur');

const tache_titre = document.querySelector('#tache_Titre');
const utilisateur_titre = document.querySelector('#utilisateur_Titre');

const idBut = document.querySelector('#utilisateurBut');
const taskBut = document.querySelector('#tacheBut');

const precedent = document.querySelector('#precedent');
const suivant = document.querySelector('#suivant');

function showUsers(){
    
    tache.style.display = 'none';
    utilisateur.style.display = '';
    tache_titre.style.display = 'none';
    utilisateur_titre.style.display = '';
    suivant.style.display = 'none';
    precedent.style.display = 'none';
    formulaire.style.display = '';

}

function showTasks(){
    
    utilisateur.style.display = 'none';
    tache.style.display = '';
    utilisateur_titre.style.display = 'none';
    tache_titre.style.display = '';
    suivant.style.display = '';
    precedent.style.display = '';
    formulaire.style.display = 'none';
    if (!document.info){
        getTasks();
    }
    
}

showUsers();


function getTasks(){
    fetch('https://jsonplaceholder.typicode.com/todos').then(response => response.json()).then(function (data) {
        // je vois des mots en latin
        console.log('data', data);
        document.info = data;
        update_Task(page);
    })
}

function createTask(userId, id, title, completed){

    const newline = document.createElement("tr");

    let newname = document.createElement("td");
    newname.textContent = userId;
    let newname2 = document.createElement("td");
    newname2.textContent = id;
    let mail = document.createElement("td");
    mail.textContent = title;
    let rule = document.createElement("td");
    rule.textContent = completed;

    newline.appendChild(newname);
    newline.appendChild(newname2);
    newline.appendChild(mail);
    newline.appendChild(rule);

    document.getElementById('tache').appendChild(newline);
}

function update_Task(page){
    let compteur = 10;
    destroyed_tache();
    document.info.forEach(function(item, index, array){
        if (index >= 10 * page && compteur > 0){
            createTask(item.userId, item.id, item.title, item.completed);
            compteur = compteur - 1;
        }
    })
}

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
}