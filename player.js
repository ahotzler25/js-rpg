/* This function was moved to javascript.js file; should work there; can rename that to player.js
function rerollPlayerStats() {
    
    playerOne.health = Math.floor(Math.random() * (20 - 10) + 10),
    playerOne.attack = Math.floor(Math.random() * (7 - 1) + 1),
    playerOne.defense = Math.floor(Math.random() * (5 - 2) + 2)

        document.getElementById("player-name").innerHTML = playerOne.name;
        document.getElementById("player-health").innerHTML = "Health: " + playerOne.health;
        document.getElementById("player-attack").innerHTML = "Attack: " + playerOne.attack;
        document.getElementById("player-defense").innerHTML = "Defense: " + playerOne.defense;
}

*/