// Hakee hamburger-valikon elementin ja lisää klikkauksella 'open' luokan nav-links-listaan
document.getElementById('hamburger').addEventListener('click', function() {
    const navLinks = document.getElementById('nav-links');
    navLinks.classList.toggle('open'); // Näyttää tai piilottaa navigaation
});
