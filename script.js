const registerButton = document.getElementById('registerButton');
const loginButton = document.getElementById('loginButton');
const logoutButton = document.getElementById('logoutButton');

const registerMessage = document.getElementById('registerMessage');
const loginMessage = document.getElementById('loginMessage');

registerButton.addEventListener('click', () => {
    const username = document.getElementById('registerUsername').value;
    const password = document.getElementById('registerPassword').value;

    if (username && password) {
        localStorage.setItem(username, password);
        registerMessage.textContent = 'Registration successful!';
        document.getElementById('registerUsername').value = '';
        document.getElementById('registerPassword').value = '';
    } else {
        registerMessage.textContent = 'Please fill all fields.';
    }
});

loginButton.addEventListener('click', () => {
    const username = document.getElementById('loginUsername').value;
    const password = document.getElementById('loginPassword').value;

    if (localStorage.getItem(username) === password) {
        document.getElementById('loginForm').style.display = 'none';
        document.getElementById('registerForm').style.display = 'none';
        document.getElementById('securedPage').style.display = 'block';
        loginMessage.textContent = '';
    } else {
        loginMessage.textContent = 'Invalid username or password.';
    }
});

logoutButton.addEventListener('click', () => {
    document.getElementById('securedPage').style.display = 'none';
    document.getElementById('loginForm').style.display = 'block';
    document.getElementById('registerForm').style.display = 'block';
});