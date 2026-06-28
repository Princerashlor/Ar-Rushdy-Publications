/* MENU */
const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("navMenu");
const overlay = document.getElementById("overlay");

function openMenu(){
navMenu.classList.add("active");
overlay.classList.add("active");
}

function closeMenu(){
navMenu.classList.remove("active");
overlay.classList.remove("active");
}

hamburger.onclick = ()=> navMenu.classList.toggle("active");
overlay.onclick = closeMenu;

/* DASHBOARD */
function saveName(){
let name = document.getElementById("name").value;
localStorage.setItem("name", name);
document.getElementById("welcome").innerText =
"Welcome " + name;
}

window.onload = ()=>{document.addEventListener("DOMContentLoaded", () => {

    /* MOBILE MENU */
    const hamburger = document.getElementById("hamburger");
    const navMenu = document.getElementById("navMenu");
    const overlay = document.getElementById("overlay");

    if (hamburger && navMenu && overlay) {

        function openMenu() {
            navMenu.classList.add("active");
            overlay.classList.add("active");
            document.body.style.overflow = "hidden";
        }

        function closeMenu() {
            navMenu.classList.remove("active");
            overlay.classList.remove("active");
            document.body.style.overflow = "auto";
        }

        hamburger.addEventListener("click", () => {
            navMenu.classList.contains("active") ? closeMenu() : openMenu();
        });

        overlay.addEventListener("click", closeMenu);

        document.querySelectorAll("#navMenu a").forEach(link => {
            link.addEventListener("click", closeMenu);
        });
    }

    /* ISLAMIC CONTENT */
    const hadiths = [
        "Actions are judged by intentions. (Bukhari)",
        "The best among you are those with best character.",
        "Do not be angry, and you will enter Paradise.",
        "Whoever believes in Allah should speak good or remain silent."
    ];

    const quran = [
        "Indeed with hardship comes ease. (94:6)",
        "So remember Me; I will remember you. (2:152)",
        "Allah does not burden a soul beyond what it can bear. (2:286)",
        "He is with you wherever you are. (57:4)"
    ];

    const duas = [
        "O Allah, guide us to the straight path.",
        "O Allah, forgive us and have mercy on us.",
        "O Allah, strengthen our hearts with faith."
    ];

    function random(arr) {
        return arr[Math.floor(Math.random() * arr.length)];
    }

    function updateContent() {
        const hadithBox = document.getElementById("hadithBox");
        const quranBox = document.getElementById("quranBox");
        const duaBox = document.getElementById("duaBox");

        if (hadithBox) hadithBox.innerText = random(hadiths);
        if (quranBox) quranBox.innerText = random(quran);
        if (duaBox) duaBox.innerText = random(duas);
    }

    updateContent();
    setInterval(updateContent, 10000);

    /* DASHBOARD */
    const nameInput = document.getElementById("name");
    const welcome = document.getElementById("welcome");

    window.saveName = function () {
        if (!nameInput.value) return;

        localStorage.setItem("username", nameInput.value);
        welcome.innerText = "Welcome, " + nameInput.value;
    };

    const saved = localStorage.getItem("username");
    if (saved && welcome) {
        welcome.innerText = "Welcome back, " + saved;
    }

});
let name = localStorage.getItem("name");
if(name){
document.getElementById("welcome").innerText =
"Welcome back " + name;
}
loadHadith();
loadQuran();
loadDua();
};

/* ISLAMIC CONTENT (FIXED STATIC SAFE VERSION) */

function loadHadith(){
document.getElementById("hadithBox").innerText =
"“Actions are judged by intentions.” — Bukhari";
}

function loadQuran(){
document.getElementById("quranBox").innerText =
"Indeed with hardship comes ease (94:6)";
}

function loadDua(){
document.getElementById("duaBox").innerText =
"O Allah, guide us to the straight path";
}

/* PAYSTACK */
function payWithPaystack(){
let email = document.getElementById("email").value;
let phone = document.getElementById("phone").value;

let handler = PaystackPop.setup({
key:"pk_test_6668c562f7c0a67945b58a9e69afa6408156cb3d",
email:email,
amount:500000,
currency:"NGN",
ref:"ARR_"+Date.now(),

callback:function(res){
alert("Payment Successful!");
},

onClose:function(){
alert("Payment closed");
}
});

handler.openIframe();
}
