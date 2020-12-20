let playerOne = {
    name: "",
    health: Math.floor(Math.random() * (20 - 10) + 10),
    attack: Math.floor(Math.random() * (7 - 1) + 1),
    defense: Math.floor(Math.random() * (4 - 2) + 2),
    level: 1,
    exp: 0
} // Need to design level and experience ratio to gain levels

//JS writing to Page (Player)
//Is this redundant with rerollPlayerStats(), restartGame(), and the initial stat load? Probably can delete.
function displayPlayerStats() {
    document.getElementById("player-name").innerHTML = playerOne.name;
    document.getElementById("player-health").innerHTML = "Health: " + playerOne.health;
    document.getElementById("player-attack").innerHTML = "Attack: " + playerOne.attack;
    document.getElementById("player-defense").innerHTML = "Defense: " + playerOne.defense;
    document.getElemenyById('player-level').innerHTML = `Level: ${playerOne.level}`;
    document.getElementById('player-exp').innerHTML = `EXP: ${playerOne.exp}`;
}

function getName(promptName) {
    playerOne.name = promptName;
    document.getElementById("player-name").innerHTML = playerOne.name;
}

getName(prompt("What's your name, warrior? (Max: 20 characters)"));


//Initial Stat Load
document.getElementById("player-name").innerHTML = playerOne.name;
document.getElementById("player-health").innerHTML = `Health: ${playerOne.health}`
document.getElementById("player-attack").innerHTML = `Attack: ${playerOne.attack}`
document.getElementById("player-defense").innerHTML = `Defense: ${playerOne.defense}`
document.getElementById('player-level').innerHTML = `Level: ${playerOne.level}`
document.getElementById('player-exp').innerHTML = `EXP: ${playerOne.exp}`

//Player Stat Reroll (connected to player-stats button)
function rerollPlayerStats() {
    playerOne.health = Math.floor(Math.random() * (20 - 10) + 10),
    playerOne.attack = Math.floor(Math.random() * (7 - 1) + 1),
    playerOne.defense = Math.floor(Math.random() * (5 - 2) + 2)
    document.getElementById("player-name").innerHTML = playerOne.name;
    document.getElementById("player-health").innerHTML = "Health: " + playerOne.health;
    document.getElementById("player-attack").innerHTML = "Attack: " + playerOne.attack;
    document.getElementById("player-defense").innerHTML = "Defense: " + playerOne.defense;
}

/*Testing Vis and Invis
function playerTurn() {
    let visibility = true;
    if (visibility == true) {
        document.getElementById("player-turn-button").style.visibility="hidden";
        document.getElementById("testing-text").innerHTML = "This is visible. (Player turn)";
    } else if (visibility == false) {
        document.getElementById("testing-text").innerHTML = "This is invisible. (Enemy turn)";
    }
}*/