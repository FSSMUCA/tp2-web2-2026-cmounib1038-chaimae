let nomProduit = "Clavier mécanique";
let prix = 89.99;
let quantite = 3;
let codePromo = null;
let reductionPourcentage = 10;
let estMembre = true;
let soldeCompte = 250;

let sousTotal = prix * quantite
console.log("Sous-total :", sousTotal.toFixed(3), "MAD")

let reduction = (codePromo ?? false) && estMembre ? sousTotal * reductionPourcentage / 100 : 0
console.log("Réduction :", reduction.toFixed(3), "MAD")

let total = sousTotal - reduction
console.log("Total final :", total.toFixed(3), "MAD")

let statut = soldeCompte >= total ? "Paiement accepté" : "Solde insuffisant"
console.log("Statut :", statut)

let nouveauSolde = statut === "Paiement accepté" ? soldeCompte - total : soldeCompte
if (statut === "Paiement accepté") {
    console.log("Nouveau solde :", nouveauSolde.toFixed(3), "MAD")
}

console.log("==== RÉCAPITULATIF ====");
console.log("Produit   :", nomProduit);
console.log("Quantité  :", quantite);
console.log("Prix unit.:", prix.toFixed(2), "MAD");
console.log("Sous-total:", sousTotal.toFixed(3), "MAD");
console.log("Réduction :", reduction.toFixed(3), "MAD");
console.log("Total     :", total.toFixed(3), "MAD");
console.log("Statut    :", statut);
console.log("Solde     :", nouveauSolde.toFixed(3), "MAD");
console.log("========================");

