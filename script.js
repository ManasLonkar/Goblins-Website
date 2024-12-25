document.addEventListener("DOMContentLoaded", function () {
    // Menu toggle functionality
    let menu = document.querySelector("#menu-icon");
    let navlist = document.querySelector(".navlist");

    if (menu && navlist) {
        menu.onclick = () => {
            menu.classList.toggle("bx-x");
            navlist.classList.toggle("open");
        };
    }

    // ScrollReveal animations
    const scroll = ScrollReveal({
        distance: "65px",
        duration: 2600,
        delay: 450,
        reset: true,
    });

    scroll.reveal(".hero-text", { delay: 200, origin: "top" });
    scroll.reveal(".hero-img", { delay: 300, origin: "top" });
    scroll.reveal(".icons", { delay: 500, origin: "left" });
    scroll.reveal(".scroll-down", { delay: 200, origin: "right" });

    // Try Button event listener
    const btn = document.querySelector("button");

    if (btn) {
        btn.addEventListener("onclick", function () {
            
        });
    }
});
