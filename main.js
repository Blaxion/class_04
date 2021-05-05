// ## EXO1

// ### Créez une class [Lieu] avec une propriété nom(string) et personnes(array vide).
// ### Puis créez des instances de [Lieu]: MolenGeek, Snack et Maison
// ### Puis créez une class [Personne] avec une propriété nom(string), prenom(string), argent(number) et une methode seDeplacer(), cette methode permet de vous déplacer dans les differents lieux en faisant appel à la méthode embarquer() du bus.
// ### Puis créez une instance de votre personnage.
// ### Créez une class [Bus] avec une propriéte personnes(array vide), une propriéte caisse(number) et une methode embarquer() (qui sera appelée dans la méthode seDeplacer() de la personne) qui va vérifier si vous possedez l'argent, si oui, il le déduit de votre argent, et le rajoute à sa caisse, et le personnage rentre dans le bus. Le bus cout 2.80.


class Lieu{
    constructor(nom){
        this.nom = nom
        this.personnes = []
    }
}
let molenGeek = new Lieu("Molengeek")
let snack = new Lieu("Snack")
let maison = new Lieu("Maison")

class Personne {
    constructor(nom,prenom,argent){
        this.nom = nom
        this.prenom = prenom
        this.argent = argent
    }
    seDeplacer(start,end){
        this.argent = bus.embarquer(this.argent,start,end) 
    }
}
let farhad = new Personne("Khibaziev","Farhad",100)

class Bus{
    constructor(nom,caisse){
        this.nom = nom
        this.caisse = caisse
        this.personnes = []

    }
    embarquer(tonble,start,end){
        let ticket = 2.8
        if (tonble >= ticket){
            tonble = tonble - ticket;
            this.caisse = this.caisse + ticket
            start.personnes.splice(bus.personnes.indexOf(farhad),1)
            this.personnes.push(farhad)
            this.personnes.splice(bus.personnes.indexOf(farhad),1)
            end.personnes.push(farhad)
        } else {
            alert("Dégage racaillou")
        }
        return tonble
    }
}



// ### Créez une instance de Bus. 
let bus = new Bus ("STIB",100)
// ### 8h00 Vous êtes à la maison.
maison.personnes.push(farhad)
console.log(maison.personnes)
console.log(molenGeek.personnes)
console.log(snack.personnes)
// ### 8h30 Vous prennez le bus vers MolenGeek.
farhad.seDeplacer(maison,molenGeek)
// ### 8h45 Vous êtes à MolenGeek.
console.log(maison.personnes)
console.log(molenGeek.personnes)
console.log(snack.personnes)
// ### 12h45 Vous sortez de MolenGeek, vous prenez le bus pour aller au snack.
farhad.seDeplacer(molenGeek,snack)
console.log(maison.personnes)
console.log(molenGeek.personnes)
console.log(snack.personnes)
// ### 13h30 Vous sortez du snack, et vous rentrer pied à MolenGeek pour digérer.
snack.personnes.splice(snack.personnes.indexOf(farhad),1)
molenGeek.personnes.push(farhad)
console.log(maison.personnes)
console.log(molenGeek.personnes)
console.log(snack.personnes)
// ### 17h10 Vous sortez de MolenGeek, vous prenez le bus pour rentrer chez vous.
farhad.seDeplacer(molenGeek,maison)
console.log(maison.personnes)
console.log(molenGeek.personnes)
console.log(snack.personnes)
// ### Faites un console.log() de votre argent, ainsi que l'argent du Bus
console.log((bus.caisse,farhad.argent).toPrecision(4))