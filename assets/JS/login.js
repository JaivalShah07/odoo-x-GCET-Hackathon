const users = [
    { loginId: 'john123', email: 'john@admin.com', password: 'john123' },
    { loginId: 'sarah99', email: 'sarah@google.com', password: 'sarah123' },
    { loginId: 'mike77', email: 'mike@google.com', password: 'mike123' }
];

const login = () => {
    const id = document.getElementById('loginid').value.trim();
    const password = document.getElementById('loginPassword').value.trim();
    const errMsg = document.getElementById('errMsg');

    if (!id || !password) {
        errMsg.style.color = "red";
        errMsg.textContent = "Please fill in all fields.";
        return;
    }

    const user = users.find(u => u.loginId === id || u.email === id);

    if (!user) {
        errMsg.style.color = "red";
        errMsg.textContent = "User not found.";
        return;
    }

    if (user.password !== password) {
        errMsg.style.color = "red";
        errMsg.textContent = "Incorrect password.";
        return;
    }

    errMsg.style.color = "green";
    errMsg.style.marginBottom = "10px";
    errMsg.textContent = "Login successful!";
    localStorage.setItem("loggedInUser", JSON.stringify(user));

    setTimeout(() => {
        window.location.href = "../admindash.html";
    }, 3000);
};