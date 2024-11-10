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
                    window.location.href = "../Landingpage/index.html";
                }
            } else {
                alert("Incorrect password");
            }
        } else {
            alert("User not found");
        }
    });
