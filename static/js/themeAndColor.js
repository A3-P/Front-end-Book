const body = document.body;
const toggleTheme = document.getElementById("toggleTheme");
const toggleColor = document.getElementById("toggleColor");

toggleTheme.addEventListener("click", () => {
    if (body.getAttribute("data-theme") === "light") {
        body.setAttribute("data-theme", "dark");
        toggleTheme.innerText = "Dark Theme";
    } else {
        body.setAttribute("data-theme", "light");
        toggleTheme.innerText = "Light Theme";
    }
});

toggleColor.addEventListener("click", () => {
    if (body.getAttribute("data-color") === "pink") {
        body.setAttribute("data-color", "blue");
        toggleColor.innerText = "Blue Theme";
    } else {
        body.setAttribute("data-color", "pink");
        toggleColor.innerText = "Pink Theme";
    }
});
