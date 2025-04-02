document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll("nav a");
    const sections = document.querySelectorAll("section");

    navLinks.forEach(link => {
        link.addEventListener("click", function (event) {
            event.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            const targetSection = document.getElementById(targetId);
            
            window.scrollTo({
                top: targetSection.offsetTop - 20,
                behavior: "smooth"
            });
        });
    });

    // Highlight active section in navbar
    window.addEventListener("scroll", function () {
        let scrollPosition = window.scrollY;
        sections.forEach(section => {
            if (scrollPosition >= section.offsetTop - 50 && scrollPosition < section.offsetTop + section.offsetHeight) {
                navLinks.forEach(link => link.classList.remove("active"));
                document.querySelector(`nav a[href="#${section.id}"]`).classList.add("active");
            }
        });
    });
});
