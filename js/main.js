// Javascript with timer til Im avalable for hire.

var dateTilHire = new Date("Jun 14, 2019 00:00:00").getTime();

var counter = setInterval(function() {

    var rightNow = new Date().getTime();
    var distance = dateTilHire - rightNow;

    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  
    document.querySelector("#timer").innerHTML = days + " dagar " + hours + " timmar " + minutes + " minuter " + seconds + " sekunder";

    if (distance < 0) {
        clearInterval(counter);
        document.querySelector(".#timer").innerHTML = "Tillgänglig för jobb";
    }
}, 1000);


// Javascript for toggeling the hamburger menu.

// function toggle(x) {
//     x.classList.toggle("hamburger");
// }

function navToggle(x) {
    x.classList.toggle("change");
}