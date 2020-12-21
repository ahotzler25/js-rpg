const d20 = require('d20');

function charStats(d20) {

    let finalCounter = 0;
    const firstRoll = d20.roll('4d6', true);
    console.log(firstRoll);
    const secondRoll = d20.roll('4d6', true);
    const thirdRoll = d20.roll('4d6', true);
    const fourthRoll = d20.roll('4d6', true);
    const fifthRoll = d20.roll('4d6', true);
    const sixthRoll = d20.roll('4d6', true);

    // console.log(totalRoll);
    firstRoll.sort((a, b) => a > b ? -1 : 1);
    
    firstRoll.forEach((dice) => {
        // let counter = 0;
        for (let i = 0; i < 5; i++) {
    
            if (i <= 2) {
                finalCounter += dice;
            }
        }
    })

    // let finalCounter = 0;
    console.log(finalCounter);
    console.log(`Your total score: ${firstRoll}`);
}

charStats(d20);

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