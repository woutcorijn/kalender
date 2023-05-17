
var days = 1;
var kalender = document.getElementById("kalender");

var header = kalender.cloneNode(true);

function run() {
    var start = document.getElementById("start").value;
    var end = document.getElementById("end").value;

    var startDate = new Date(start);
    var endDate = new Date(end);
    if(startDate.getDay() == 1) {
        var time_difference = endDate.getTime() - startDate.getTime();
        days = time_difference/(1000 * 60 * 60 * 24);

        drawBlocks(startDate, days);
        document.getElementById("note").innerText = "";
    } else {
        document.getElementById("note").innerText = "Select a monday for start date!";
    }
}

function drawBlocks(startDate, days) {
    kalender.innerText = "";
    header.style.width = "100%";
    kalender.appendChild(header);
    for(var i = 0; i < days + 1; i++) {
        var dagBlok = document.createElement("div");
        dagBlok.className = "dagBlok";

        var datum = document.createElement("p");

        var day = 60 * 60 * 24 * 1000;
        var newDate = new Date(startDate.getTime() + i*day);
        datum.innerText = newDate.toISOString().slice(0, 10);;
        datum.className = "datum";

        dagBlok.appendChild(datum)
        kalender.appendChild(dagBlok);
    }
}