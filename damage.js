function damageDealt() {
    let damageDealt = playerOne.attack - currentEnemy.defense;

    if (damageDealt <= 0) {
        damageDealt = 0;
    }

    document.getElementById("battleground-text").innerHTML = `You dealt ${currentEnemy.name} ${damageDealt} damage!`
    currentEnemy.health -= damageDealt;
    document.getElementById('enemy-health').innerHTML = `Health: ${currentEnemy.health}`

    if (currentEnemy.health <= damageDealt) {
        currentEnemy.health = 0;
        document.getElementById('enemy-health').innerHTML = "Dead.";
        playerOne.exp += currentEnemy.exp;
        document.getElementById('player-exp').innerHTML = `EXP: ${playerOne.exp}`;
    }
}

function damageReceived() {
    //let damage = Math.floor(Math.random() * (8 - 3) + 3);
    let damageTaken = (Math.floor(Math.random() * (6 - 3) + 3)) - playerOne.defense;

    if (damageTaken <= 0) {
        damageTaken = 0;
    }

    document.getElementById("battleground-text").innerHTML = `${currentEnemy.name} attacked! You took ${damageTaken} damage.`;
    playerOne.health -= damageTaken;
    document.getElementById("player-health").innerHTML = `Health: ${playerOne.health}`;

    if (playerOne.health <= 0) {
        playerOne.health = 0;
        document.getElementById("battleground-text").innerHTML = "Great job! You're dead.";
        document.getElementById("player-health").innerHTML = "Health: " + 0;
    }

    if (playerOne.health === 0) {
        restartGame();
    }
}