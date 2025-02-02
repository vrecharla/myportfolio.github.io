document.addEventListener("DOMContentLoaded", function() {
    document.querySelectorAll('nav ul li a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            targetSection.scrollIntoView({ behavior: "smooth" });
        });
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const items = document.querySelectorAll(".timeline-item");

    function checkScroll() {
        let triggerBottom = window.innerHeight * 0.8;

        items.forEach(item => {
            const boxTop = item.getBoundingClientRect().top;
            if (boxTop < triggerBottom) {
                item.classList.add("show");
            }
        });
    }

    window.addEventListener("scroll", checkScroll);
    checkScroll();
});

// document.addEventListener("DOMContentLoaded", function () {
//     const timeline = document.querySelector(".timeline");
//     const firstItem = document.querySelector(".timeline-item:first-child");
//     const lastItem = document.querySelector(".timeline-item:last-child");

//     if (firstItem && lastItem) {
//         const startY = firstItem.offsetTop;
//         const endY = lastItem.offsetTop + lastItem.offsetHeight;
//         const line = document.querySelector(".timeline::before");

//         line.style.height = `${endY - startY}px`; // Adjust height
//     }
// });
