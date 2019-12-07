const textElement = document.getElementById("text");
const verseElement = document.getElementById("verse");

const data = JSON.parse(localStorage.getItem("reminder"));
const matches = data.matches;
const count = data.count;

const randomTextObject = matches[Math.floor(Math.random() * count)];
textElement.innerHTML = randomTextObject.text;
verseElement.innerHTML = `Quran ${randomTextObject.surah.number}, Verse ${randomTextObject.numberInSurah}`;
