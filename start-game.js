let playerOne = {
    name: "",
    class: "",
    health: 0,
    attack: 0,
    defense: 0,
    level: 0,
    exp: 0,
    img: ""
}

//JS writing to Page (Player)

function getName(promptName) {
    playerOne.name = promptName;
    document.getElementById("player-name").innerHTML = playerOne.name;
}

getName(prompt("What's your name, warrior? (Max: 20 characters)"));

//Player Stat Roll (connected to player-stats button)
function rollPlayerStats() {
    let classChoice = getPlayerClass(prompt("Choose your class: Barbarian | Necromancer | Amazonian | Warlock"));

    playerOne.class = "";
    playerOne.health = 3;
    playerOne.attack = 2;
    playerOne.defense = 2;
    playerOne.level = 1;
    playerOne.img = "";
    playerOne.exp = 0;

    
    if (classChoice == 1) {
        playerOne.class = barbarian.class;
        playerOne.health += barbarian.health;
        playerOne.attack += barbarian.strength;
        playerOne.defense += barbarian.armor;
    } else if (classChoice == 2) {
        playerOne.class = necromancer.class;
        playerOne.health += necromancer.health;
        playerOne.attack += necromancer.strength;
        playerOne.defense += necromancer.armor;
    } else if (classChoice == 3) {
        playerOne.class = amazonian.class;
        playerOne.health += amazonian.health;
        playerOne.attack += amazonian.strength;
        playerOne.defense += amazonian.armor;
    } else if (classChoice == 4) {
        playerOne.class = warlock.class;
        playerOne.health += warlock.health;
        playerOne.attack += warlock.strength;
        playerOne.defense += warlock.armor;
    }

    document.getElementById('battleground-text').innerHTML = `You have chosen the ${playerOne.class} life.`;
    document.getElementById("player-name").innerHTML = playerOne.name;
    document.getElementById('player-class').innerHTML = playerOne.class;
    document.getElementById("player-health").innerHTML = "Health: " + playerOne.health;
    document.getElementById("player-attack").innerHTML = "Attack: " + playerOne.attack;
    document.getElementById("player-defense").innerHTML = "Defense: " + playerOne.defense;
    document.getElementById('player-level').innerHTML = `Level: ${playerOne.level}`;
    document.getElementById('player-exp').innerHTML = `EXP: ${playerOne.exp}`;

    enemyLoad();
    document.getElementById('player-combat-button').style.visibility = "visible";
}
