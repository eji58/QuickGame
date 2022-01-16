let playGame = confirm("shall we play rock, paper or scissors");
if (playGame) {
    let playerchoice = prompt("Please, Enter ur choice: rock, paper or scissors");
    if (playerchoice) {
        let player = playerchoice.trim().toLowerCase();
        if (player === 'rock' || player === 'paper' || player === 'scissors') {
            let computerchoice = Math.floor(Math.random() * 3 + 1);
            let computer =
                computerchoice === 1
                    ? 'rock'
                    : computerchoice === 2
                        ? 'paper'
                        : 'scissors';
            let result = player === computer
                ? "Tie game"
                : player === 'rock' && computer === 'paper'
                    ? `player: ${player} \ncomputer:${computer} \ncomputer wins!! `
                    : player === 'scissors' && computer === 'paper'
                        ? `player: ${player} \ncomputer: ${computer} \ncomputer wins!! `
                        : player === 'paper' && computer === 'paper'
                            ? `player: ${player} \ncomputer: ${computer} \ncomputer wins!! `
                            : `player: ${player} \ncomputer: ${computer} \nplayer wins!! `;
            alert(result)
            let agin = confirm('play agin?!');
            agin ? location.reload : alert('okk, thx for playing.')
        } else {
            alert("you didn't enter the  rock, paper or scissor");
        }
    } else {
        alert('I guess u change ur mined, maybe next time')
    }
} else {
    alert('Ok, maybe next time')
}
