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

// login
document
    .getElementById("loginForm")
    .addEventListener("submit", function (event) {
        event.preventDefault();
        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;

        const user = localStorage.getItem(username);

        if (user) {
            const parsedUser = JSON.parse(user);
            if (parsedUser.password === password) {
                localStorage.setItem("user", JSON.stringify(parsedUser));

                // Retrieve the last visited page from localStorage
                const lastPage = localStorage.getItem("lastPage");

                // Redirect to the last visited page or to the home page if not found
                if (lastPage) {
                    window.location.href = lastPage;
                } else {
                    window.location.href = "/home/index.html";
                }
            } else {
                alert("Incorrect password");
            }
        } else {
            alert("User not found");
        }
    });
