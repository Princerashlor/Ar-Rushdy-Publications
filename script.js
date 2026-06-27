/* ==========================
   SCROLL ANIMATION
========================== */

const hiddenElements = document.querySelectorAll(".hidden");

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
});

hiddenElements.forEach((el) => observer.observe(el));

/* ==========================
   STICKY NAVBAR SHADOW
========================== */

window.addEventListener("scroll", () => {
    const navbar = document.querySelector(".navbar");

    if (navbar) {
        if (window.scrollY > 30) {
            navbar.style.boxShadow = "0 10px 30px rgba(0,0,0,.12)";
        } else {
            navbar.style.boxShadow = "0 5px 20px rgba(0,0,0,.08)";
        }
    }
});

/* ==========================
   BUTTON HOVER
========================== */

const buttons = document.querySelectorAll(".primary-btn, .secondary-btn");

buttons.forEach(button => {

    button.addEventListener("mouseenter", () => {
        button.style.transform = "translateY(-3px)";
    });

    button.addEventListener("mouseleave", () => {
        button.style.transform = "translateY(0)";
    });

});

/* ==========================
   PAYSTACK PAYMENT
========================== */

function payWithPaystack() {

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;

    if (!name || !email || !phone) {
        alert("Please fill in all fields.");
        return;
    }

    let handler = PaystackPop.setup({

        key: "pk_test_6668c562f7c0a67945b58a9e69afa6408156cb3d",

        email: email,

        amount: 500000,

        currency: "NGN",

        ref: "ARRUSHDY_" + Date.now(),

        metadata: {
            custom_fields: [
                {
                    display_name: "Customer Name",
                    variable_name: "customer_name",
                    value: name
                },
                {
                    display_name: "Phone Number",
                    variable_name: "phone_number",
                    value: phone
                }
            ]
        },

        callback: function(response) {

            alert("Payment Successful!");

           const reference = response.reference;

window.location.href =
    "success.html?reference=" + encodeURIComponent(reference);
        },

        onClose: function() {

            alert("Payment Cancelled.");

        }

    });

    handler.openIframe();

}