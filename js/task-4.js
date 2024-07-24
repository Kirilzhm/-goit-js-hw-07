document.querySelector(`.login-form`).addEventListener(`submit`, function (event) {
    event.preventDefault();
    const form = event.target;
    const email = form.elements.email.value.trim();
    const password = form.elements.password.value.trim();
    if (email === "" || password === "") {
        return alert("All form fields must be filled in");
    } 
    const emailAndPassword = {
        email,
        password
    };
    console.log(emailAndPassword);
    form.reset();
});