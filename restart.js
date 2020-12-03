function restartGame() {

    document.getElementById('player-name').innerHTML = "";
    document.getElementById('player-class').innerHTML = "";
    document.getElementById('player-health').innerHTML = "";
    document.getElementById('player-attack').innerHTML = "";
    document.getElementById('player-defense').innerHTML = "";
    document.getElementById('player-level').innerHTML = 1;
    document.getElementById('player-exp').innerHTML = 0;

    const userAnswer = prompt("Would you like to play again? (Press y or n)");

    //Double check that both both characters still work
    if (userAnswer === "y" || userAnswer === "Y") {
        getName(prompt("Name, please."));
        rollPlayerStats();
        enemyLoad();
    } else if (userAnswer === "n" || userAnswer === "N") {
        document.getElementById('battleground-text').innerHTML = "https://ahotzler25.github.io/js-rpg/"; //Either this page's URL or site's welcoming page URL
    }
}