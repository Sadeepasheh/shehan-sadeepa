function submitForm(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    window.location.href = `home.html?name=${encodeURIComponent(name)}&email=${encodeURIComponent(email)}`;
}