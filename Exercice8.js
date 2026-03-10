let nom = "  Fatima  ";
let age = "23";
let email = "fatima@example";
let scoreJeu = "150pts";
let estAdmin = "false";
let derniereConnexion = null;
let nombreConnexions = "0";

let nomCorrige = nom.trim();
let ageCorrige = Number(age);
let emailValide = email.includes("@") && email.split("@")[1].includes(".");
let scoreCorrige = parseInt(scoreJeu);
let adminCorrige = (estAdmin === "true");
let connexion = derniereConnexion ?? "Jamais connecté";


let connexions = Number(nombreConnexions);
let connexionsTexte = connexions === 0 ? "Aucune connexion" : connexions;

console.log("===== RAPPORT UTILISATEUR =====");
console.log('nom              : "' + nomCorrige + '" (corrigé : espaces supprimés)');
console.log("age              :", ageCorrige, "(valide)");
console.log('email            : "' + email + '" (' + (emailValide ? "valide" : "invalide : pas de point après @") + ")");
console.log("scoreJeu         :", scoreCorrige, '(extrait depuis "150pts")');
console.log("estAdmin         :", adminCorrige, '(attention : Boolean("false") = true, conversion manuelle requise)');
console.log('derniereConnexion: "' + connexion + '" (valeur par défaut via ??)');
console.log('nombreConnexions : "' + connexionsTexte + '" (0 après conversion)');
console.log("================================")