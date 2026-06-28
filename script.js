document.addEventListener("DOMContentLoaded", () => {

const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("navMenu");

/* MENU */
hamburger.addEventListener("click", () => {
    navMenu.classList.toggle("active");
});

/* HADITH SYSTEM */
const hadiths = [
    "The best among you are those who learn the Qur’an",
    "Actions are judged by intentions",
    "Patience is light"
];

setInterval(() => {
    document.getElementById("hadithText").innerText =
    hadiths[Math.floor(Math.random() * hadiths.length)];
}, 5000);

/* DUA SYSTEM */
const duas = [
    "O Allah guide us",
    "O Allah forgive us",
    "O Allah grant us patience"
];

setInterval(() => {
    document.getElementById("duaText").innerText =
    duas[Math.floor(Math.random() * duas.length)];
}, 6000);

/* SAVE USER */
function saveUser(){
    let name = document.getElementById("username").value;
    localStorage.setItem("user", name);
    document.getElementById("welcomeText").innerText =
    "Welcome " + name;
}

/* SAVE HADITH */
function saveHadith(){
    localStorage.setItem("hadith",
    document.getElementById("hadithText").innerText);
}

/* SAVE VERSE */
function saveVerse(){
    localStorage.setItem("verse",
    document.getElementById("quranText").innerText);
}

window.saveUser = saveUser;
window.saveHadith = saveHadith;
window.saveVerse = saveVerse;

});
