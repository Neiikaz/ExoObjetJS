//Création d'un objet voiture avec la marque l'année et savoir si c'est neuf ou occas
let voiture = {
    marque: 'Peugeot',
    annee: 2016,
    estNouvelle: false
}
console.log(voiture.marque);

//Exercice 2 : Création d'un objet livre
let livre = {
    titre: 'Andros',
    auteur: 'Sordna',
    page: 32 
}

//Exercice 3 : suite exo 2
livre.informations = function(){
    return 'Le livre ' + this.titre + ' écrit par ' + this.auteur + ' contient ' + this.page + ' pages.';
}
console.log(livre.informations());

//Exercice 4 : 
let personne = {
    nom: 'Maurice',
    age: 27,
    adresse: '14 adresse',
//Exercice 5 : Rajout d'un méthode 'anniversaire' a personne
anniversaire: function(){
    this.age++;
    return this.age;
    }
}
console.log(personne.anniversaire());
console.log(personne.anniversaire());// Rappel pour l'incrémentation de l'âge

//Exercice 6 et 7: Objet Produit et quantité
let produit1 = {
    nom: 'Siri',
    prix: 12.5,
    quantite: 27,
    acheter: function(buy){
        this.quantite += buy;
        return this.quantite;
    }
}
console.log(produit1.acheter(54));

//Exercice 8 : Objet cercle avec calcule du rayon et surface avec pi
let cercle = {
    rayon: 5.4,
    circonference: function(){
        return 2 * Math.PI * this.rayon;
    },
    surface: function(){
        return Math.PI * Math.pow(this.rayon, 2)
    }
}
console.log(cercle.circonference());
console.log(cercle.surface());

//Exercice 1 deuxième partie
 function Produit(nom,prix,description){
    this.nom = nom;
    this.prix = prix,
    this.description = description;
}
Produit.prototype.infosProduit = function(){ //Ajout de infosProduit exercice 2 deuxième partie
    return 'Il s\'appel ' + this.nom + ' son prix est de ' + this.prix + '€' + ' et ça déscription c\'est' + this.description; 
}
//Ajout de 3 produits exercice 3 deuxième partie rajout de 3 produit avec leurs paramètres
let produitJ = new Produit('Pc', 50,' un outil trop bien'); 
let produitS = new Produit('Siri', 1900,' trop cher'); 
let produitT = new Produit('Tanguy', 1, ' nul');
console.log(produitJ.infosProduit());
console.log(produitT.infosProduit());
console.log(produitS.infosProduit());

//Exercice 4 Création d'une fonction constructeur pour un étudiant avec les spécificité age etc
function Etudiant(nom,niveau,age){
    this.nom = nom;
    this.age = age;
    this.niveau = niveau;
}
Etudiant.prototype.presentation = function(){ //Exercice 5 j'avoute ma méthode pour gérer les info en méttant une petite description en phrase
    return 'Je suis ' + this.nom + ' j\'étudie en ' + this.niveau + ' et j\'ai ' + this.age + 'ans';
}
//Je créé 4 étudiant via mon constructeur et ma variable instancier avec let 'cequejeveux' = new 'nom de mon constructeur'.
let etudiant1 = new Etudiant('Imran','5ème année',22);
let etudiant2 = new Etudiant('Tanguy','5ème année',27);
let etudiant3 = new Etudiant('Ilan','5ème année',30);
let etudiant4 = new Etudiant('Tristant','5ème année',20);
console.log(etudiant1.presentation());
console.log(etudiant2.presentation());
console.log(etudiant3.presentation());
console.log(etudiant4.presentation());

//Exercice 7 et 8: Création d'une fonction cnstructeur pour une voiture
function Voiture(marque,annee,couleur){
    this.marque = marque;
    this.annee = annee;
    this.couleur = couleur;
}
Voiture.prototype.afficherDetails = function(){
    return 'Voici une voiture de marque ' + this.marque + ' de ' + this.annee + ' est de couleur' + this.couleur;
}
let voiture1 = new Voiture('Citroen C4', 2005, 'gris métalique');
let voiture2 = new Voiture('Peugeot 208', 2016, 'rouge rubis');
let voiture3 = new Voiture('Alfa Romeo', 2019, 'blanche');
console.log(voiture1.afficherDetails());
console.log(voiture2.afficherDetails());
console.log(voiture3.afficherDetails());