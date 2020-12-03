//Player Classes to Choose From


    barbarian = {
        class: "Barbarian",
        health: 2,
        strength: 6,
        armor: 3,
        img: "images/barbarian.png"
    }

    necromancer = {
        class: "Necromancer",
        health: 4,
        strength: 3,
        armor: 3,
        img: "images/necromancer.png"
    }

    amazonian = {
        class: "Amazonian",
        health: 5,
        strength: 3,
        armor: 3,
        img: "images/amazonian.jpg"
    }

    warlock = {
        class: "Warlock",
        health: 2,
        strength: 5,
        armor: 3,
        img: "images/warlock.jpg"
    }


function getPlayerClass(classChoice) {
    //let classChoice = prompt("Choose your class: Barbarian | Necromancer | Amazonian | Warlock");

    if (classChoice == 1) {
        playerOne.img = barbarian.img;
        playerOne.class = barbarian.class;
    } else if (classChoice == 2) {
        playerOne.img = necromancer.img;
        playerOne.class = necromancer.class;
    } else if (classChoice == 3) {
        playerOne.img = amazonian.img;
        playerOne.class = amazonian.class;
    } else if (classChoice == 4) {
        playerOne.img = warlock.img;
        playerOne.class = warlock.class;
    } else {
        alert("Not a valid class. Please try again.");
    }

    let img = document.getElementById('player-image');
    img.setAttribute("src", playerOne.img);
    document.getElementById('player-image').innerHTML = img;

    return classChoice;
}