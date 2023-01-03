// Exercice 1 : Liste Des Personnes
const people = ["Greg", "Mary", "Devon", "James"];
// Partie I - Examen Des Tableaux
// 1. Écrivez du code pour supprimer "Greg" du peopletableau.
people.shift();
// 2. Écrivez le code pour remplacer "James" par "Jason".
people[2] = "Jason";
// 3. Écrivez du code pour ajouter votre nom à la fin du peopletableau. 
people.push("Tia");
// 4. Écrivez le code qui console.logs l'index de Mary. jetez un oeil à la indexOfméthode sur Google .
console.log(`L'index de "Mary" est : ${people.indexOf("Mary")}`);
// 5. Écrivez du code pour faire une copie du peopletableau à l'aide de la sliceméthode
peopleNew = people.slice(1);
// 6. Écrivez le code qui donne l'index de "Foo". Pourquoi renvoie-t-il -1 ?
console.log(`L'index de "Foo" est :${people.indexOf("Foo")} car "Foo" n'est pas dans le tableau`);
// 7. Créez une variable appelée lastdont la valeur est le dernier élément du tableau.
let last = people[people.length -1];
console.log(last);

// Part II - Loops

// 1. À l'aide d'une boucle, parcourez le peopletableau et console.log chaque personne
people.forEach(element => console.log(element))

// 2. À l'aide d'une boucle, parcourez le peopletableau et quittez la boucle après avoir console.log "Jason".
for (let i = 0; i < people.length; i++) {
    console.log(people[i])
    if(people[i] == "Jason"){
        break;
    }
}

// Exercice 2 : Vos Couleurs Préférées
// 1.Créez un tableau appelé colorsoù la valeur est une liste de vos cinq couleurs préférées.
const colors = ["red", "yellow", "blue", "green"];

// 2. Bouclez à travers le tableau et pendant que vous bouclez console.log une chaîne comme ceci : "Mon choix n°1 est bleu", "Mon choix n°2 est rouge" ect
for (let i = 0; i < colors.length; i++) {
    console.log(`My #${i+1} choice is ${colors[i]}`);
}
// 3. Bonus : changez-le en console.log "Mon 1er choix", "Mon 2ème choix", "Mon 3ème choix", en choisissant le suffixe correct pour chaque numéro.
const value = ["1st", "2nd", "3rd", "4th"];
for (let i = 0; i < value.length; i++) {
    console.log(`Mon ${value[i]} choix est ${colors[i]}`);
}

// Exercice 3 : Répéter La Question
// 1. Demander à l'utilisateur un numéro.Astuce : Vérifiez le type de données que vous recevez à partir de l'invite (c.-à-d. Utilisez la typeofméthode)
let number = prompt("Saisir un numero: ");
console.log(`LSon type est : ${typeof(number)}`)

// 2. tant que le nombre est inférieur à 10, continuez à demander à l'utilisateur un nouveau numéro. 
while (number < 10) {
    number = prompt("Saisir un autre numero");
    if (number > 10){
        alert(`Superbe votre nombre n° ${number} > 10  est !!!`);
    }
}

// Exercice 4 : Gestion Du Bâtiment
// 1. Copiez et collez l'objet ci-dessus dans votre fichier Javascript..
const building = {
    numberOfFloors: 4,
    numberOfAptByFloor: {
        firstFloor: 3,
        secondFloor: 4,
        thirdFloor: 9,
        fourthFloor: 2,
    },
    nameOfTenants: ["Sarah", "Dan", "David"],
    numberOfRoomsAndRent:  {
        sarah: [3, 990],
        dan:  [4, 1000],
        david: [1, 500],
    },
}

// 2. Console.log the number of floors in the building.
console.log(`Nombre d'étage est : ${building.numberOfFloors}`)

// 3. Console.log how many apartments are on the floors 1 and 3.
console.log(`Nombre d'appartement à l'étage 1 est : ${building.numberOfAptByFloor.firstFloor}`)
console.log(`Nombre d'appartement à l'étage 3 est : ${building.numberOfAptByFloor.thirdFloor}`)

// 4. Console.log the name of the second tenant and the number of rooms he has in his apartment.
console.log(`Nom du deuxième locataire est : ${building.nameOfTenants[1]}
Nombre de pièce de son appartement est : ${building.numberOfRoomsAndRent.dan[0]}`)

// 5. Check if the sum of Sarah’s and David’s rent is bigger than Dan’s rent. If it is, than increase Dan’s rent to 1200.
verifyRent = building.numberOfRoomsAndRent.sarah[1] + building.numberOfRoomsAndRent.david[1];
if ( verifyRent > building.numberOfRoomsAndRent.dan[1]){
    newRent = building.numberOfRoomsAndRent.dan[1] + 200
    console.log(`Le loyer de Dan passe à : ${newRent}`)
}

// Exercice 5 : Famille
// 1. Create an object called family with a few key value pairs.
const family = {
    firstChild: 'Tia',
    secondChild: 'Ange',
    thirdChild: 'Gompou'
}

// 2. Using a for in loop, console.log the keys of the object.
for (const property in family) {
    // Les clés de la classe "family"
    console.log(`${property}`)
}

// 3. Using a for in loop, console.log the values of the object.
for (const property in family){
    // Les valeurs des clés
    console.log(`${family[property]}`)
}

//Exercice 6 : Rodolphe
const details = {
    my: 'name',
    is: 'Rudolf',
    the: 'raindeer'
  }

let detail_ = Object.entries(details) 
// 1. Given the object above and using a for loop, console.log “my name is Rudolf the raindeer”
for (let i=0; i< detail_.length; i++) {
    for (let j=0; j< detail_[i].length;j++){
        console.log(detail_[i][j])
    }
}

//Exercice 7 : Groupe Secret
// 1. Un groupe d'amis a décidé de créer une société secrète. Le nom de la société sera la première lettre de chacun de leurs noms triés par ordre alphabétique. 
const names = ["Jack", "Philip", "Sarah", "Amanda", "Bernard", "Kyle"];

names.sort();
firtsIndex = `The society name's : ${names[0][0]}${names[1][0]}${names[2][0]}${names[3][0]}${names[4][0]}${names[5][0]}`
console.log(firtsIndex);