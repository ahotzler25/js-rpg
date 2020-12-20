// Create Enemy Prototype Object

/*const Enemy = {
    name: "",
    health: Math.floor(Math.random() * (max - min) + min),
    attack: 0,
    defense: 0
}*/

/*Enemy object creation function

function createEnemy(name, max, min) {
-- or --
let enemyFive = new Enemy {this.name = name; this.health = health; this.attack = attack; this.defense = defense;}    
}*/

//Instead of "let enemyOne", I can use an array to store all the objects and access everything that way; much cleaner and easier
    let enemyOne = {
        name: "Goblin",
        health: Math.floor(Math.random() * (12 - 3) + 3),
        attack: Math.floor(Math.random() * (6 - 2) + 2),
        defense: Math.floor(Math.random() * (3 - 1) + 1),
        exp: 8
    }

    let enemyTwo = {
        name: "Vulture",
        health: Math.floor(Math.random() * (12 - 4) + 4),
        attack: Math.floor(Math.random() * (7 - 2) + 2),
        defense: Math.floor(Math.random() * (4 - 1) + 1),
        exp: 12
    }

    let enemyThree = {
        name: "Cougar",
        health: Math.floor(Math.random() * (13 - 3) + 3),
        attack: Math.floor(Math.random() * (8 - 1) + 1),
        defense: Math.floor(Math.random() * (5 - 1) + 1),
        exp: 13
    }

    let enemyFour = {
        name: "Vampire",
        health: Math.floor(Math.random() * (13 - 2) + 2),
        attack: Math.floor(Math.random() * (9 - 2) + 2),
        defense: Math.floor(Math.random() * (6 - 2) + 2),
        exp: 15
    }

    let enemyFive = {
        name: "The Bali Snaaaaaake",
        health: 7,
        attack: 4,
        defense: 1,
        exp: 10
    }

    let enemySix = {
        name: "Trevor's Frenchmen",
        health: 10,
        attack: 4,
        defense: 2,
        exp: 15
    }

    let bossOne = {
        name: "Evil Troy and Evil Abed",
        health: 50,
        attack: 14,
        defense: 20,
        exp: 50
    }


//Enemy Stat Load
const ENEMY = ["Goblin", "Vulture", "Cougar", "Vampire", "The Bali Snaaaaaake", "Trevor's Frenchmen"]; //, "Trump the Troll", "Evil Abed", "Evil Troy"];
let currentEnemy = {
    name: "",
    health: 0,
    attack: 0,
    defense: 0
}

// Spawns new enemy each time button is clicked
function enemyLoad() {
    let enemySpawn = Math.floor(Math.random() * (ENEMY.length - 0));

/*  // Figure out a smarter way of using the ENEMY[enemySpawn].attribute 
    // with objects so I don't repeat so much code      
        currentEnemy.name = ENEMY[enemySpawn];
        
         = ENEMY[enemySpawn];
        currentEnemy.health = ENEMY[enemySpawn].health;
        currentEnemy.attack = ENEMY[enemySpawn].attack;
        currentEnemy.defense = ENEMY[enemySpawn].defense;
        document.getElementById('battleground-text').innerHTML = "A " + currentEnemy.name + " is attacking!";
        document.getElementById('enemy-name').innerHTML = currentEnemy.name;
        document.getElementById('enemy-health').innerHTML = "Health: " + currentEnemy.health;
        document.getElementById('enemy-attack').innerHTML = "Attack: " + currentEnemy.attack;
        document.getElementById('enemy-defense').innerHTML = "Defense: " + currentEnemy.defense;
*/
    
    for (let i = 0; i < ENEMY.length; i++) {
        if (enemySpawn === 0) {
            currentEnemy.name = enemyOne.name;
            currentEnemy.health = enemyOne.health;
            currentEnemy.attack = enemyOne.attack;
            currentEnemy.defense = enemyOne.defense;
            document.getElementById("battleground-text").innerHTML = "A " + currentEnemy.name + " is attacking!";
            document.getElementById("enemy-name").innerHTML = currentEnemy.name;
            document.getElementById("enemy-health").innerHTML = "Health: " + currentEnemy.health;
            document.getElementById("enemy-attack").innerHTML = "Attack: " + currentEnemy.attack;
            document.getElementById("enemy-defense").innerHTML = "Defense: " + currentEnemy.defense;
        } else if (enemySpawn === 1) {
            currentEnemy.name = enemyTwo.name;
            currentEnemy.health = enemyTwo.health;
            currentEnemy.attack = enemyTwo.attack;
            currentEnemy.defense = enemyTwo.defense;
            document.getElementById("battleground-text").innerHTML = "A " + currentEnemy.name + " is attacking!";
            document.getElementById("enemy-name").innerHTML = currentEnemy.name;
            document.getElementById("enemy-health").innerHTML = "Health: " + currentEnemy.health;
            document.getElementById("enemy-attack").innerHTML = "Attack: " + currentEnemy.attack;
            document.getElementById("enemy-defense").innerHTML = "Defense: " + currentEnemy.defense;
        } else if (enemySpawn === 2) {
            currentEnemy.name = enemyThree.name;
            currentEnemy.health = enemyThree.health;
            currentEnemy.attack = enemyThree.attack;
            currentEnemy.defense = enemyThree.defense;
            document.getElementById("battleground-text").innerHTML = "A " + currentEnemy.name + " is attacking!";
            document.getElementById("enemy-name").innerHTML = currentEnemy.name;
            document.getElementById("enemy-health").innerHTML = "Health: " + currentEnemy.health;
            document.getElementById("enemy-attack").innerHTML = "Attack: " + currentEnemy.attack;
            document.getElementById("enemy-defense").innerHTML = "Defense: " + currentEnemy.defense;
        } else if (enemySpawn === 3) {
            currentEnemy.name = enemyFour.name;
            currentEnemy.health = enemyFour.health;
            currentEnemy.attack = enemyFour.attack;
            currentEnemy.defense = enemyFour.defense;
            document.getElementById("battleground-text").innerHTML = "A " + currentEnemy.name + " is attacking!";
            document.getElementById("enemy-name").innerHTML = currentEnemy.name;
            document.getElementById("enemy-health").innerHTML = "Health: " + currentEnemy.health;
            document.getElementById("enemy-attack").innerHTML = "Attack: " + currentEnemy.attack;
            document.getElementById("enemy-defense").innerHTML = "Defense: " + currentEnemy.defense;
        } else if (enemySpawn === 4) {
            currentEnemy.name = enemyFive.name;
            document.getElementById('enemy-name').innerHTML = currentEnemy.name;
        } else if (enemySpawn === 5) {
            currentEnemy.name = enemySix.name;
            document.getElementById('enemy-name').innerHTML = currentEnemy.name;
        } else {
            document.getElementById('battleground-text').innerHTML = "Something's gone wrong!";
        }
    }
}