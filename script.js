/* ==========================================
   AR-RUSHDY PUBLICATIONS
   SCRIPT.JS
========================================== */

/* ===========================
   MOBILE MENU (FINAL FIX)
=========================== */

const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("navMenu");
const overlay = document.getElementById("overlay");

function openMenu() {
    hamburger.classList.add("active");
    navMenu.classList.add("active");
    overlay.classList.add("active");
    document.body.classList.add("menu-open");
}

function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
    overlay.classList.remove("active");
    document.body.classList.remove("menu-open");
}

/* Toggle hamburger */
hamburger.addEventListener("click", () => {
    if (navMenu.classList.contains("active")) {
        closeMenu();
    } else {
        openMenu();
    }
});

/* Close when clicking overlay */
overlay.addEventListener("click", closeMenu);

/* Close when clicking links */
document.querySelectorAll("#navMenu a").forEach(link => {
    link.addEventListener("click", closeMenu);
});
/* ===========================
   SCROLL ANIMATION
=========================== */

const hiddenElements = document.querySelectorAll(".hidden");

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

},{
    threshold:0.15
});

hiddenElements.forEach(el=>observer.observe(el));

/* ===========================
   STICKY NAVBAR
=========================== */

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll",()=>{

    if(window.scrollY>40){

        navbar.style.boxShadow =
        "0 15px 35px rgba(0,0,0,.12)";

        navbar.style.background =
        "rgba(255,255,255,.95)";

    }else{

        navbar.style.boxShadow =
        "0 8px 25px rgba(0,0,0,.08)";

        navbar.style.background =
        "rgba(255,255,255,.92)";

    }

});

/* ===========================
   PAYSTACK
=========================== */

function payWithPaystack(){

    const name =
    document.getElementById("name").value.trim();

    const email =
    document.getElementById("email").value.trim();

    const phone =
    document.getElementById("phone").value.trim();

    if(!name || !email || !phone){

        alert("Please complete all fields.");

        return;

    }

    let handler = PaystackPop.setup({

        key:"pk_test_6668c562f7c0a67945b58a9e69afa6408156cb3d",

        email:email,

        amount:500000,

        currency:"NGN",

        ref:"ARRUSHDY_"+Date.now(),

        metadata:{

            custom_fields:[

                {

                    display_name:"Customer Name",

                    variable_name:"customer_name",

                    value:name

                },

                {

                    display_name:"Phone Number",

                    variable_name:"phone_number",

                    value:phone

                }

            ]

        },

        callback:function(response){

            window.location.href =
            "success.html?reference=" +
            encodeURIComponent(response.reference);

        },

        onClose:function(){

            alert("Payment Cancelled.");

        }

    });

    handler.openIframe();

}
