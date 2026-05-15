function showOffer() {
  const offer = "Buy 1 Latte, Get 1 Free — Today Only!";
  document.getElementById("offerText").innerText = offer;
}

function playMusic() {
    var myAudio = document.getElementById("myMusicPlayer");
    if (myAudio) {
        myAudio.play().catch(function(error) {
            console.log("Play error: " + error);
        });
    } else {
        console.log("Audio element not found!");
    }
}

function pauseMusic() {
    var myAudio = document.getElementById("myMusicPlayer");
    if (myAudio) {
        myAudio.pause();
    }
}

function stopMusic() {
    var myAudio = document.getElementById("myMusicPlayer");
    if (myAudio) {
        myAudio.pause();
        myAudio.currentTime = 0;
    }
}
