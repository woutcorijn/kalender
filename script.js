
var days = 55;
var kalender = document.getElementById("kalender");
var header = kalender.cloneNode(true);

var dateInput = document.getElementById("start");

dateInput.valueAsDate = new Date();
run();

dateInput.addEventListener("change", run);

function run() {
    var start = dateInput.value;

    var startDate = new Date(start);
    var selectedDate = startDate.getDay();
    var monday = new Date(startDate.getTime() - (selectedDate - 1) * 24 * 60 * 60 * 1000);

    drawBlocks(monday, days);
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