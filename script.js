/* =================================
   ELEMENT
================================= */

const openButton =
    document.getElementById("openButton");

const opening =
    document.getElementById("opening");

const invitation =
    document.getElementById("invitation");

const music =
    document.getElementById("backSound");

const musicButton =
    document.getElementById("musicButton");



/* =================================
   BUKA UNDANGAN
================================= */

openButton.addEventListener("click", function () {

    opening.style.display = "none";
    invitation.style.display = "block";

    // mulai musik
    music.play().then(function () {
        musicButton.innerHTML = "♪";
    }).catch(function () {
        console.log("Musik tidak dapat diputar:", error);
        musicButton.innerHTML = "🔇";
    });

});



// ON / OFF MUSIC
musicButton.addEventListener("click", function (event) {

    event.stopPropagation();

    if (music.paused) {

        music.play().then(function () {
            musicButton.innerHTML = "♪";
        }).catch(function () {
            console.log("Gagal play:", error);
        });

    } else {

        music.pause();
        musicButton.innerHTML = "🔇";

    }

});



/* =================================
   COUNTDOWN
================================= */

const weddingDate =
    new Date(
        "2026-12-21T09:00:00"
    ).getTime();

function updateCountdown() {

    const now =
        new Date().getTime();


    const distance =
        weddingDate - now;


    if (distance <= 0) {

        document.getElementById("days")
            .innerHTML = "1";

        document.getElementById("hours")
            .innerHTML = "9";

        document.getElementById("minutes")
            .innerHTML = "2";

        document.getElementById("seconds")
            .innerHTML = "7";

        return;

    }


    const days =
        Math.floor(
            distance /
            (1000 * 60 * 60 * 24)
        );


    const hours =
        Math.floor(
            (distance %
            (1000 * 60 * 60 * 24))
            /
            (1000 * 60 * 60)
        );


    const minutes =
        Math.floor(
            (distance %
            (1000 * 60 * 60))
            /
            (1000 * 60)
        );


    const seconds =
        Math.floor(
            (distance %
            (1000 * 60))
            /
            1000
        );


    document.getElementById("days")
        .innerHTML =
        String(days).padStart(2, "0");


    document.getElementById("hours")
        .innerHTML =
        String(hours).padStart(2, "0");


    document.getElementById("minutes")
        .innerHTML =
        String(minutes).padStart(2, "0");


    document.getElementById("seconds")
        .innerHTML =
        String(seconds).padStart(2, "0");

}


updateCountdown();


setInterval(
    updateCountdown,
    1000
);