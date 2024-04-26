const body = document.body;
const darkThemeRadio = document.getElementById("darkRadio");
const lightThemeRadio = document.getElementById("lightRadio");
const autoThemeRadio = document.getElementById("autoRadio");
const pinkColorButton = document.getElementById("pink");
const blueColorButton = document.getElementById("blue");


document.querySelectorAll('.choiceTheme').forEach(choice => {
    choice.addEventListener('click', () => {
        const radioId = choice.getAttribute('id').replace('Theme', 'Radio');
        const radio = document.getElementById(radioId);
        if (radio) {
            radio.checked = true;
            radio.dispatchEvent(new Event('change'));
        }
    });
});


function updateThemeBasedOnSystemPreference() {
    const prefersDarkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;
    if (prefersDarkMode) {
        body.setAttribute("data-theme", "dark");
    } else {
        body.setAttribute("data-theme", "light");
    }
}

function setTheme(theme) {
    body.setAttribute("data-theme", theme);
}

function setColor(color) {
    body.setAttribute("data-color", color);
}

updateThemeBasedOnSystemPreference();

window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", (e) => {
    if (e.matches) {
        setTheme("dark");
    } else {
        setTheme("light");
    }
});

darkThemeRadio.addEventListener("change", () => {
    if (darkThemeRadio.checked) {
        setTheme("dark");
    }
});

lightThemeRadio.addEventListener("change", () => {
    if (lightThemeRadio.checked) {
        setTheme("light");
    }
});

autoThemeRadio.addEventListener("change", () => {
    if (autoThemeRadio.checked) {
        updateThemeBasedOnSystemPreference();
    }
});

pinkColorButton.addEventListener("click", () => {
    setColor("pink");
});

blueColorButton.addEventListener("click", () => {
    setColor("blue");
});
