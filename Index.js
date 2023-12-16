let personagem =  "Jorjão Funilaria coração de diamante"
let PontosXP = 7002

let NivelHeroi;

if (PontosXP < 1000) {
    NivelHeroi = "Ferro";
} else if (PontosXP >= 1001 && PontosXP < 2000) {
    NivelHeroi = "Bronze";
} else if (PontosXP >= 2001 && PontosXP < 5000) {
    NivelHeroi = "Prata";
} else if (PontosXP >= 6001 && PontosXP < 7000) {
    NivelHeroi = "Ouro";
} else if (PontosXP >= 7001 && PontosXP < 8000) {
    NivelHeroi = "Platina";
} else if (PontosXP >= 8001 && PontosXP < 9000) {
    NivelHeroi = "Ascedente";
} else if (PontosXP >= 9001 && PontosXP < 10000) {
    NivelHeroi = "Imortal";
} else {
    NivelHeroi = "Radiante";
}

console.log("O Herói de nome, " + personagem + " está no nível de " + NivelHeroi + "!");
