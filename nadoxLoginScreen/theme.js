const body = document.body;

themeToggle.addEventListener("click", () => {
    if (body.getAttribute("data-theme") === "light") {
        body.setAttribute("data-theme", "dark");
    } else {
        body.setAttribute("data-theme", "light");
    }
});