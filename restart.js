function restartGame() {
    //toggle button on here

    const userAnswer = prompt("Would you like to play again? (Press y or n)");

    //Double check that both both characters still work
    if (userAnswer === "y" || userAnswer === "Y") {
        getName(prompt("Name, please."));
        rerollPlayerStats();
        enemyLoad();
    } else {
        document.getElementById('battleground-text').innerHTML = "URL will go here"; //Either this page's URL or site's welcoming page URL
    }
}