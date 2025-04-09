let guestScore = document.getElementById("guest-score");
let homeScore = document.getElementById("home-score");
let home1Btn = document.getElementById("home1");
let home2Btn = document.getElementById("home2");
let home3Btn = document.getElementById("home3");
let guest1Btn = document.getElementById("guest1");
let guest2Btn = document.getElementById("guest2");
let guest3Btn = document.getElementById("guest3");
let newGameBtn = document.getElementById("new-game")
let newSetBtn = document.getElementById("new-set")
let homePoints = 0;  // Separate score for home team
let guestPoints = 0; // Separate score for guest team
let setNum = 1;
let set1Score = document.getElementById("set1")
let set2Score = document.getElementById("set2")
let set3Score = document.getElementById("set3")
let set4Score = document.getElementById("set4")
let set5Score = document.getElementById("set5")

// Functions to add points
function plusOneHome() {
    homePoints += 1; // Increment home score by 1
    homeScore.innerText = homePoints; // Update the display
}

function plusTwoHome() {
    homePoints += 2; // Increment home score by 2
    homeScore.innerText = homePoints; // Update the display
}

function plusThreeHome() {
    homePoints += 3; // Increment home score by 3
    homeScore.innerText = homePoints; // Update the display
}

function plusOneGuest() {
    guestPoints += 1; // Increment guest score by 1
    guestScore.innerText = guestPoints; // Update the display
}

function plusTwoGuest() {
    guestPoints += 2; // Increment guest score by 2
    guestScore.innerText = guestPoints; // Update the display
}

function plusThreeGuest() {
    guestPoints += 3; // Increment guest score by 3
    guestScore.innerText = guestPoints; // Update the display
}

function newGame() {
    homePoints = 0;
    guestPoints = 0;
    setNum = 1;
    homeScore.innerText = homePoints;
    guestScore.innerText = guestPoints;
    set1Score.innerText = `Set 1: ${homePoints}-${guestPoints}`;
    set2Score.innerText = `Set 2: ${homePoints}-${guestPoints}`;
    set3Score.innerText = `Set 3: ${homePoints}-${guestPoints}`;
    set4Score.innerText = `Set 4: ${homePoints}-${guestPoints}`;
    set5Score.innerText = `Set 5: ${homePoints}-${guestPoints}`;
}

function newSet() {
    // Update the corresponding set score based on setNum
    switch (setNum) {
        case 1:
            set1Score.innerText = `Set 1: ${homePoints}-${guestPoints}`;
            break;
        case 2:
            set2Score.innerText = `Set 2: ${homePoints}-${guestPoints}`;
            break;
        case 3:
            set3Score.innerText = `Set 3: ${homePoints}-${guestPoints}`;
            break;
        case 4:
            set4Score.innerText = `Set 4: ${homePoints}-${guestPoints}`;
            break;
        case 5:
            set5Score.innerText = `Set 5: ${homePoints}-${guestPoints}`;
            break;
    }

    // Reset score for the next set
    homePoints = 0;
    guestPoints = 0;
    homeScore.innerText = homePoints;
    guestScore.innerText = guestPoints;

    // Increment the set number
    if (setNum < 5) {
        setNum++;
    } else {
        alert("Game over. You have played 5 sets!");
    }
}

// Event listeners for the home team
home1Btn.addEventListener("click", plusOneHome);
home2Btn.addEventListener("click", plusTwoHome);
home3Btn.addEventListener("click", plusThreeHome);

// Event listeners for the guest team
guest1Btn.addEventListener("click", plusOneGuest);
guest2Btn.addEventListener("click", plusTwoGuest);
guest3Btn.addEventListener("click", plusThreeGuest);

// Event listener for new game
newGameBtn.addEventListener("click", newGame);

// Event listener for new set
newSetBtn.addEventListener("click", newSet)