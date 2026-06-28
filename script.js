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

window.onload = ()=>{
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
