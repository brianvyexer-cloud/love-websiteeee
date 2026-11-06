// Website sections
const welcome = document.getElementById("welcome");
const question = document.getElementById("question");
const dateSection = document.getElementById("dateSection");
const musicSection = document.getElementById("musicSection");
const finalSection = document.getElementById("finalSection");

// Buttons
const openGift = document.getElementById("openGift");
const yesButton = document.getElementById("yesButton");
const noButton = document.getElementById("noButton");
const dateButton = document.getElementById("dateButton");
const continueButton = document.getElementById("continueButton");

// Music
const loveSong = document.getElementById("loveSong");

// Special date
const specialDate = document.getElementById("specialDate");

const correctDate = "2007-08-15";

// Change sections
function showSection(section) {
    welcome.classList.add("hidden");
    question.classList.add("hidden");
    dateSection.classList.add("hidden");
    musicSection.classList.add("hidden");
    finalSection.classList.add("hidden");

    section.classList.remove("hidden");

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}

// Open gift
openGift.addEventListener("click", function() {
    showSection(question);
});

// Yes button
yesButton.addEventListener("click", function() {
    showSection(dateSection);
});

// No button
noButton.addEventListener("click", function() {
    noButton.textContent = "Are you sure? 🥺";
});

// Check special date
dateButton.addEventListener("click", function() {

    const selectedDate = specialDate.value;

    if (selectedDate === "") {
        alert("Please choose a special date ❤️");
        return;
    }

    if (selectedDate !== correctDate) {
        alert("That's not our special date. Try again ❤️");
        return;
    }

    showSection(musicSection);

});

// Continue to final surprise
continueButton.addEventListener("click", function() {
    showSection(finalSection);
});

// Floating hearts animation
const heartsContainer = document.getElementById("hearts");

function createHeart() {

    const heart = document.createElement("span");

    heart.classList.add("floating-heart");

    heart.innerHTML = Math.random() > 0.5 ? "♥" : "♡";

    heart.style.left = Math.random() * 100 + "%";

    heart.style.fontSize = (12 + Math.random() * 25) + "px";

    heart.style.animationDuration = (5 + Math.random() * 7) + "s";

    heartsContainer.appendChild(heart);

    setTimeout(function() {
        heart.remove();
    }, 12000);
}

setInterval(createHeart, 500);
// Romantic heart button
const heartButton = document.getElementById("heartButton");
const loveMessage = document.getElementById("loveMessage");

heartButton.addEventListener("click", function() {

    loveMessage.innerHTML = "Sending you all my love! ❤️💕💗";

    for (let i = 0; i < 15; i++) {

        const heart = document.createElement("span");

        heart.innerHTML = "♥";
        heart.classList.add("floating-heart");

        heart.style.left = Math.random() * 100 + "%";
        heart.style.fontSize = (15 + Math.random() * 25) + "px";
        heart.style.animationDuration = "4s";

        heartsContainer.appendChild(heart);

        setTimeout(function() {
            heart.remove();
        }, 4000);
    }

});
// Love letter interaction
const letterButton = document.getElementById("letterButton");
const letterText = document.getElementById("letterText");

letterButton.addEventListener("click", function() {
    letterText.classList.remove("hidden");
    letterButton.textContent = "💌 Your letter is open";
});