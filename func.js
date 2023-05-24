const link1 = document.querySelector('.link1');
link1.addEventListener('click', () => {
    window.open("https://github.com/MasonScarbro");
});
const link2 = document.querySelector(".link2");
link2.addEventListener('click', () => {
    window.open("https://www.linkedin.com/in/mason-scarbro-127932259/");
});

const toggle = document.querySelector(".toggle input");

toggle.addEventListener('click', () => {
    const onoff = document.querySelector('.onoff')
    onoff.textContent = toggle.checked ? 'Darkmode' : 'Lightmode';
    if (toggle.checked) {
       const darkModeLink = document.createElement('link');
       darkModeLink.rel = "stylesheet";
       darkModeLink.href = 'darkmode.css';
       darkModeLink.classList.add('darkmode-link');
       document.head.appendChild(darkModeLink);
} else {
    const darkModeLink = document.querySelector('.darkmode-link');
    if (darkModeLink) {
        darkModeLink.remove();
    }
}
});
