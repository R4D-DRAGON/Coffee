function showOffer() {
  const offer = "Buy 1 Latte, Get 1 Free — Today Only!";
  document.getElementById("offerText").innerText = offer;
}

// ගීත පාලනය කරන ක්‍රියාවන් (Functions)
var myAudio = document.getElementById("myMusicPlayer");

function playMusic() {
    if (myAudio) {
        myAudio.play();
    }
}

function pauseMusic() {
    if (myAudio) {
        myAudio.pause();
    }
}

function stopMusic() {
    if (myAudio) {
        myAudio.pause();
        myAudio.currentTime = 0; // සින්දුව මුලටම ගෙන යාම
    }
}
