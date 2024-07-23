let homeScoreEl = document.getElementById("home-score")
let guestScoreEl = document.getElementById("guest-score")
let leaderEl = document.getElementById("leader")
let homeScore = 0
let guestScore = 0 

function incrementScore(team, scoreAdded) {
    if(team == 'home') {
        homeScore += scoreAdded
        homeScoreEl.textContent = homeScore
    } else if(team == 'guest') {
        guestScore += scoreAdded
        guestScoreEl.textContent = guestScore
    }
    determineLeader()
}

function resetScore() {
    homeScore = 0;
    guestScore = 0;
    homeScoreEl.textContent = homeScore;
    guestScoreEl.textContent = guestScore;
    leaderEl.textContent = "Tie"
}

function determineLeader() {
    if(homeScore > guestScore) {
        leaderEl.innerText = "Leader: Home"
    } else if (guestScore > homeScore) {
        leaderEl.innerText = "Leader: Guest"
    } else {
        leaderEl.innerText = "Tie"
    }
}