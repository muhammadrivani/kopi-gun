// Toggle
const navbarNav = document.querySelector('.navbar-nav')
// Ketika hamburger menu diklik
document.querySelector('#hamburger-menu').onclick = () => {
    navbarNav.classList.toggle('active')
}

// Klik diluar sidebar untuk mnghilangkan hamburger menu
const hamburger = document.querySelector('#hamburger-menu')

document.addEventListener('click', function(e) {
    if(!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
        navbarNav.classList.remove('active')
    }
})