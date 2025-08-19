function toggleTheme() {
    const htmlElement = document.documentElement;
    htmlElement.classList.toggle('dark-mode');

    const theme = htmlElement.classList.contains('dark-mode') ? 'dark' : 'light';
    localStorage.setItem('theme', theme);
}

function applySavedTheme() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        document.documentElement.classList.add('dark-mode');
    }
}

document.addEventListener('DOMContentLoaded', () => {
    applySavedTheme();

    const toggleButton = document.getElementById('theme-toggle');
    toggleButton.addEventListener('click', toggleTheme);
});

