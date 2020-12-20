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
    exp: 8,
    img: "images/goblin.jpg"

}

let enemyTwo = {
    name: "Vulture",
    health: Math.floor(Math.random() * (12 - 4) + 4),
    attack: Math.floor(Math.random() * (7 - 2) + 2),
    defense: Math.floor(Math.random() * (4 - 1) + 1),
    exp: 12,
    img: "images/vulture.jpg"
}

let enemyThree = {
    name: "Cougar",
    health: Math.floor(Math.random() * (13 - 3) + 3),
    attack: Math.floor(Math.random() * (8 - 1) + 1),
    defense: Math.floor(Math.random() * (5 - 1) + 1),
    exp: 13,
    img: "images/cougar.gif"
}

let enemyFour = {
    name: "Vampire",
    health: Math.floor(Math.random() * (13 - 2) + 2),
    attack: Math.floor(Math.random() * (9 - 2) + 2),
    defense: Math.floor(Math.random() * (6 - 2) + 2),
    exp: 15,
    img: "images/vampire.png"
}

let enemyFive = {
    name: "The Bali Snaaaaaake",
    health: Math.floor(Math.random() * (13 - 1) + 1),
    attack: Math.floor(Math.random() * (9 - 1) + 1),
    defense: Math.floor(Math.random() * (6 - 3) + 3),
    exp: 10,
    img: "images/snake.png"
}

let enemySix = {
    name: "Trevor's Frenchmen",
    health: Math.floor(Math.random() * (14 - 2) + 2),
    attack: Math.floor(Math.random() * (10 - 2) + 2),
    defense: Math.floor(Math.random() * (6 - 2) + 2),
    exp: 15,
    img: "images/frenchman.jpg"
}

let bossOne = {
    name: "Evil Troy and Evil Abed",
    health: Math.floor(Math.random() * (50 - 30) + 30),
    attack: Math.floor(Math.random() * (25 - 15) + 15),
    defense: Math.floor(Math.random() * (20 - 14) + 14),
    exp: 50,
    img: "Boss image"
}



//Enemy Stat Load
const ENEMY = ["Goblin", "Vulture", "Cougar", "Vampire", "The Bali Snaaaaaake", "Trevor's Frenchmen"]; //, "Trump the Troll", "Evil Abed", "Evil Troy"];
let currentEnemy = {
    name: "",
    health: 0,
    attack: 0,
    defense: 0,
    exp: 0,
    img: ""
}

const BOSS = ["Evil Troy and Evil Abed"];
let currentBoss = {
    name: "",
    health: 0,
    attack: 0,
    defense: 0,
    exp: 0,
    img: ""

}

// Spawns new enemy each time button is clicked
function enemyLoad() {

    document.getElementById('player-combat-button').style.visibility = "visible";
    document.getElementById('combat-button').style.visibility = "visible";

    let enemySpawn = Math.floor(Math.random() * (ENEMY.length - 0));
    
    for (let i = 0; i < ENEMY.length; i++) {
        if (enemySpawn === 0) {
            currentEnemy.name = enemyOne.name;
            currentEnemy.health = enemyOne.health;
            currentEnemy.attack = enemyOne.attack;
            currentEnemy.defense = enemyOne.defense;
            currentEnemy.exp = enemyOne.exp;
            currentEnemy.img = enemyOne.img;

        } else if (enemySpawn === 1) {
            currentEnemy.name = enemyTwo.name;
            currentEnemy.health = enemyTwo.health;
            currentEnemy.attack = enemyTwo.attack;
            currentEnemy.defense = enemyTwo.defense;
            currentEnemy.exp = enemyTwo.exp;
            currentEnemy.img = enemyTwo.img;

        } else if (enemySpawn === 2) {
            currentEnemy.name = enemyThree.name;
            currentEnemy.health = enemyThree.health;
            currentEnemy.attack = enemyThree.attack;
            currentEnemy.defense = enemyThree.defense;
            currentEnemy.exp = enemyThree.exp;
            currentEnemy.img = enemyThree.img;

        } else if (enemySpawn === 3) {
            currentEnemy.name = enemyFour.name;
            currentEnemy.health = enemyFour.health;
            currentEnemy.attack = enemyFour.attack;
            currentEnemy.defense = enemyFour.defense;
            currentEnemy.exp = enemyFour.exp;
            currentEnemy.img = enemyFour.img;

        } else if (enemySpawn === 4) {
            currentEnemy.name = enemyFive.name;
            currentEnemy.health = enemyFive.health;
            currentEnemy.attack = enemyFive.attack;
            currentEnemy.defense = enemyFive.defense;
            currentEnemy.exp = enemyFive.exp;
            currentEnemy.img = enemyFive.img;
            
        } else if (enemySpawn === 5) {
            currentEnemy.name = enemySix.name;
            currentEnemy.health = enemySix.health;
            currentEnemy.attack = enemySix.attack;
            currentEnemy.defense = enemySix.defense;
            currentEnemy.exp = enemySix.exp;
            currentEnemy.img = enemySix.img;

        } else {
            document.getElementById('battleground-text').innerHTML = "Something's gone wrong!";
        }

        getEnemyImage();
        document.getElementById('battleground-text').innerHTML = `A ${currentEnemy.name} is attacking!`;
        document.getElementById('enemy-name').innerHTML = currentEnemy.name;
        document.getElementById('enemy-health').innerHTML = `Health: ${currentEnemy.health}`;
        document.getElementById('enemy-attack').innerHTML = `Attack: ${currentEnemy.attack}`;
        document.getElementById('enemy-defense').innerHTML = `Defense: ${currentEnemy.defense}`;
        document.getElementById('enemy-exp').innerHTML = `EXP: ${currentEnemy.defense}`;
    }
}

function getEnemyImage() {
    let img = document.getElementById("enemy-image");
    img.setAttribute("src", currentEnemy.img);
    document.getElementById("enemy-image").innerHTML = img;
}

function despawnEnemy() {
    document.getElementById('enemy-name').innerHTML = "";
    document.getElementById('enemy-health').innerHTML = "";
    document.getElementById('enemy-attack').innerHTML = "";
    document.getElementById('enemy-defense').innerHTML = "";
    document.getElementById('enemy-exp').innerHTML = "";
    document.getElementById('enemy-image').innerHTML = "";
}