// STICKY HEADER

const header = document.getElementById("mainHeader");

window.addEventListener("scroll", () => {

    if (window.scrollY > 80) {
        header.classList.add("sticky");
    } else {
        header.classList.remove("sticky");
    }

});
// MOBILE MENU

const mobileToggle = document.getElementById("mobileToggle");
const mainMenu = document.getElementById("mainMenu");

mobileToggle.addEventListener("click", () => {

    mainMenu.classList.toggle("active");

    if (mainMenu.classList.contains("active")) {

        mobileToggle.innerHTML =
            '<i class="bi bi-x-lg"></i>';

        document.body.style.overflow = "hidden";

    } else {

        mobileToggle.innerHTML =
            '<i class="bi bi-list"></i>';

        document.body.style.overflow = "auto";
    }

});


// MOBILE DROPDOWN

const shopToggle = document.querySelector(".shop-toggle");
const hasDropdown = document.querySelector(".has-dropdown");

shopToggle.addEventListener("click", function (e) {

    // ONLY MOBILE

    if (window.innerWidth < 1200) {

        e.preventDefault();

        hasDropdown.classList.toggle("open");

    }

});


//home tab bundle
document.addEventListener("DOMContentLoaded", () => {

    const buttons = document.querySelectorAll(".filter-btn");
    const cards = document.querySelectorAll(".bundle-card");

    buttons.forEach(btn => {

        btn.addEventListener("click", () => {

            buttons.forEach(b => b.classList.remove("active"));
            btn.classList.add("active");

            const filter = btn.dataset.filter;

            cards.forEach(card => {

                if (filter === "all") {

                    card.style.display = "block";

                } else if (card.classList.contains(filter)) {

                    card.style.display = "block";

                } else {

                    card.style.display = "none";

                }

            });

        });

    });

});

//whatsapp pop up
function closeWpAlert(){
    document.getElementById("wpAlert").style.display = "none";
}


//cart btn

function openCart(){
    document.getElementById("cartSidebar").classList.add("active");
    document.getElementById("cartOverlay").classList.add("show");
}

function closeCart(){
    document.getElementById("cartSidebar").classList.remove("active");
    document.getElementById("cartOverlay").classList.remove("show");
}


// on click left class active
const buttons = document.querySelectorAll(".filter-btn");

buttons.forEach((btn) => {

    // active class
    if (window.location.pathname.includes(btn.dataset.page)) {
        btn.classList.add("active");
    }

    btn.addEventListener("click", () => {

        // active class remove
        buttons.forEach((b) => b.classList.remove("active"));

        // current active
        btn.classList.add("active");

        // page redirect
        window.location.href = btn.dataset.page;
    });
});