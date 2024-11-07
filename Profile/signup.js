// code to open side navbar
const menuIcon = document.getElementById('menu-icon');
const mobileMenu = document.getElementById('mobile-menu');
const closeIcon = document.querySelector('.close-icon');
menuIcon.addEventListener('click', () => {
    mobileMenu.style.transform = mobileMenu.classList.contains('open') ? 'translateX(-100%)' : 'translateX(0)';
    mobileMenu.classList.toggle('open');
});
closeIcon.addEventListener('click', () => {
    mobileMenu.style.transform = 'translateX(-100%)';
    mobileMenu.classList.remove('open');
});
// code for drop down
const dropbtns = document.querySelectorAll('.dropbtn');
dropbtns.forEach(dropbtn => {
    const button = dropbtn.querySelector('.heading');
    const content = dropbtn.querySelector('.content');
    const icon = button.querySelector('.drop-icon');

    button.addEventListener('click', () => {
        content.classList.toggle('show');
        icon.classList.toggle('rotate');
    });
});

// register
document
    .getElementById("registerForm")
    .addEventListener("submit", function (event) {
        event.preventDefault();
        const name = document.getElementById("name").value;
        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;
        const confirmPassword =
            document.getElementById("confirmPassword").value;

        if (password !== confirmPassword) {
            alert("Passwords do not match");
            return;
        }

        const user = {
            name: name,
            username: username,
            password: password,
        };

        localStorage.setItem(username, JSON.stringify(user));
        alert("Registration successful! Please login.");
        window.location.href = "login.html";
    });