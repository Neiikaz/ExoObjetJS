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
    this.nom = Vang;
    this.prix = 
 }