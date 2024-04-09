document.addEventListener('DOMContentLoaded', function () {
    const dice1 = document.getElementById('dice1');
    const dice2 = document.getElementById('dice2');
    const player1ScoreDisplay = document.getElementById('player1-score');
    const player2ScoreDisplay = document.getElementById('player2-score');
    const rollButton = document.getElementById('roll-btn');
    const winnerMessage = document.getElementById('winner-message');

    let player1Score = 0;
    let player2Score = 0;

    rollButton.addEventListener('click', function () {
        // Generate random numbers between 1 and 6 for each dice
        const dice1Value = Math.floor(Math.random() * 6) + 1;
        const dice2Value = Math.floor(Math.random() * 6) + 1;

        // Update the dice images
        dice1.src = `dice${dice1Value}.png`;
        dice2.src = `dice${dice2Value}.png`;

        // Calculate score difference
        const scoreDifference = Math.abs(dice1Value - dice2Value);

        // Update player scores
        if (dice1Value > dice2Value) {
            player1Score += scoreDifference;
        } else if (dice1Value < dice2Value) {
            player2Score += scoreDifference;
        }

        // Display updated player scores
        player1ScoreDisplay.textContent = `Player 1 Score: ${player1Score}`;
        player2ScoreDisplay.textContent = `Player 2 Score: ${player2Score}`;

        // Check for winner
        if (player1Score >= 20) {
            winnerMessage.textContent = "Player 1 wins!";
            rollButton.disabled = true;
        } else if (player2Score >= 20) {
            winnerMessage.textContent = "Player 2 wins!";
            rollButton.disabled = true;
        }
    });
});
