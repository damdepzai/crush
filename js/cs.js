
$(document).ready(function () {
    // countdown time
    // Set the date we're counting down to
    var countDownDate = new Date("2022/10/05 15:00:00").getTime();

    // Update the count down every 1 second
    var x = setInterval(function () {

        // Get today's date and time
        var now = new Date().getTime();

        // Find the distance between now and the count down date
        var distance = countDownDate - now;

        // Time calculations for days, hours, minutes and seconds
        var days = Math.floor(distance / (1000 * 60 * 60 * 24)).toString().padStart(2,0);
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)).toString().padStart(2,0);
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)).toString().padStart(2,0);
        var seconds = Math.floor((distance % (1000 * 60)) / 1000).toString().padStart(2,0);

        // Output the result in an element with id="demo"
        document.getElementById("time").innerHTML =hours + ":" + minutes + ":" + seconds;

    }, 1000);

    // process bar
    setTimeout(function () {
        $('.loading-containe').fadeOut();
    }, 1500);
})
