function damageDealt() {
    let damageDealt = playerOne.attack - currentEnemy.defense;

    if (damageDealt <= 0) {
        damageDealt = 0;
    }

    document.getElementById("battleground-text").innerHTML = `You dealt ${currentEnemy.name} ${damageDealt} damage!`
    currentEnemy.health -= damageDealt;
    document.getElementById('enemy-health').innerHTML = `Health: ${currentEnemy.health}`
    document.getElementById('player-combat-button').style.visibility = "hidden";
    document.getElementById('combat-button').style.visibility = "visible";

    if (currentEnemy.health <= 0) {
        document.getElementById('player-combat-button').style.visibility = "hidden";
        currentEnemy.health = 0;
        document.getElementById('battleground-text').innerHTML = `${currentEnemy.name} is dead!`;
        playerOne.exp += currentEnemy.exp;
        document.getElementById('player-exp').innerHTML = `EXP: ${playerOne.exp}`;
        document.getElementById('combat-button').style.visibility = "hidden";
        despawnEnemy();
    }
}

function damageReceived() {
    let damageTaken = currentEnemy.attack - playerOne.defense;

    if (damageTaken <= 0) {
        damageTaken = 0;
    }

    document.getElementById("battleground-text").innerHTML = `${currentEnemy.name} attacked! You took ${damageTaken} damage.`;
    playerOne.health -= damageTaken;
    document.getElementById("player-health").innerHTML = `Health: ${playerOne.health}`;
    document.getElementById('player-combat-button').style.visibility = "visible";
    document.getElementById('combat-button').style.visibility = "hidden";

    if (playerOne.health <= 0) {
        playerOne.health = 0;
        document.getElementById("battleground-text").innerHTML = "Great job! You're dead.";
        document.getElementById("player-health").innerHTML = "Health: " + 0;
    }

    if (playerOne.health === 0) {
        restartGame();
    }
}