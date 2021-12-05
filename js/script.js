var day = document.getElementById("days");
var hour = document.getElementById("hours");
var minute = document.getElementById("mins");
var second = document.getElementById("secs");

var x = setInterval(function() {

    var launchDate = new Date("Jun 13, 2022 12:00:00").getTime();
    var currentDate = new Date().getTime();

    var timeDiff = launchDate - currentDate;

    var days = Math.floor((timeDiff / (1000 * 60 * 60 * 24)));
    var hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

    day.innerHTML = days+"<span></span><P>days</P>";
    hour.innerHTML = hours+"<span></span><P>hours</P>";
    minute.innerHTML = minutes+"<span></span><P>minutes</P>";
    second.innerHTML = seconds+"<span></span><P>seconds</P>";
}, 1000);
