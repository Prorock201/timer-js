window.onload = bindEventHandlers;
var ClickingStart = false;
var Minutes = 0;
var Seconds = 0;
var Hours = 0;


function bindEventHandlers() {
    $("#start").on("click", startTimer);
    $("#pause").on("click", pauseTimer);
}

function startTimer() {
    if (!ClickingStart) {
        $(".notification__message").text("");
        move = setInterval(moveArrow, 1000);
        ClickingStart = true;
    }
}

function pauseTimer() {
    $(".notification__message").text("Passed " + Hours + " hours " + Minutes + " minutes and " + Seconds + " seconds");
    clearInterval(move);
    ClickingStart = false;
}

function moveArrow() {
    Seconds += 1;
    if (Seconds == 60) {
        Minutes += 1;
        Seconds = 0;
    }
    if (Minutes == 60) {
        Hours += 1;
        Minutes = 0;
    }
    var secDegrees = Seconds*6;
    var minDegrees = Minutes*6;
    $(".clock__seconds").css("-webkit-transform", "rotate(" + secDegrees + "deg)");
    $(".clock__minutes").css("-webkit-transform", "rotate(" + minDegrees + "deg)");
}