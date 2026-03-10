let nom = null
let age = 0
let ville = ""
let score = undefined
let actif = false

console.log("PARTIE A - Opérateur ??")
console.log("nom ?? 'valeur par défaut'   ->", nom ?? "valeur par défaut")
console.log("age ?? 'valeur par défaut'   ->", age ?? "valeur par défaut")
console.log("ville ?? 'valeur par défaut' ->", ville ?? "valeur par défaut")
console.log("score ?? 'valeur par défaut' ->", score ?? "valeur par défaut")
console.log("actif ?? 'valeur par défaut' ->", actif ?? "valeur par défaut")

console.log("\nPARTIE B - Opérateur ||")
console.log("nom ||'valeur par défaut '  ->", nom || "valeur par défaut")
console.log("age || 'valeur par défaut'   ->", age || "valeur par défaut")
console.log("ville || 'valeur par défaut' ->", ville || "valeur par défaut")
console.log("score || 'valeur par défaut' ->", score || "valeur par défaut")
console.log("actif || 'valeur par défaut' ->", actif || "valeur par défaut")

console.log("\nPARTIE C - Comparaison ?? et ||")
console.log("nom   : ?? et || ->", 
            (nom ?? "valeur par défaut") === (nom || "valeur par défaut") ? "même résultat" : "résultat différent")
console.log("age   : ?? et || ->", 
            (age ?? "valeur par défaut") === (age || "valeur par défaut") ? "même résultat" : "résultat différent")
console.log("ville : ?? et || ->", 
            (ville ?? "valeur par défaut") === (ville || "valeur par défaut") ? "même résultat" : "résultat différent")
console.log("score : ?? et || ->", 
            (score ?? "valeur par défaut") === (score || "valeur par défaut") ? "même résultat" : "résultat différent")
console.log("actif : ?? et || ->", 
            (actif ?? "valeur par défaut") === (actif || "valeur par défaut") ? "même résultat" : "résultat différent")
