const SEK_NA_MIN = 60;
let sec, min, left;

alert("Konwertuje sekundy w minuty i sek.");
sec = parseInt(prompt("Podaj sekundy:"))

while (sec > 0) {
min = parseInt(sec / SEK_NA_MIN);
left = sec % SEK_NA_MIN;
alert(sec + " sekund to " + min + " min, " + left + "s");
sec = parseInt(prompt("Podaj kolejną wartość:"));
}
alert("Koniec!");