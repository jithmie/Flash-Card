function myMenuFunction() {
    var i = document.getElementById("navMenu");
    if(i.className === "nav-menu") {
        i.className += " responsive";
    } else {
        i.className = "nav-menu";
    }
   }


    var a = document.getElementById("loginBtn");
    var b = document.getElementById("registerBtn");
    var x = document.getElementById("login");
    var y = document.getElementById("register");


    function logout() {
        // Example: If using an API call to log out (for token-based systems)
        fetch('/logout', {
            method: 'POST', // POST or GET based on your backend logic
            credentials: 'include', // Ensure credentials (cookies/session) are sent
        })
        .then(response => {
            if (response.ok) {
                // Clear any client-side data, if needed (localStorage, sessionStorage, etc.)
                localStorage.removeItem('token'); // For JWT tokens, if stored
                window.location.href = '/login'; // Redirect to login or home page
            } else {
                console.error('Log out failed');
            }
        })
        .catch(error => {
            console.error('Error:', error);
        });
    }
    // function login(){
    //     x.style.left = "4px";
    //     y.style.right = "-520px";
    //     a.className += " white-btn";
    //     b.className = "btn";
    //     x.style.opacity = 1;
    //     y.style.opacity = 0;
    // }
    // function register(){
    //     x.style.left = "-510px";
    //     y.style.right = "5px";
    //     a.className = "btn";
    //     b.className += " white-btn";
    //     x.style.opacity = 0;
    //     y.style.opacity = 1;
    // }
