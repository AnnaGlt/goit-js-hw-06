
const form = document.querySelector(".login-form");

form.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
    event.preventDefault();

    if (event.currentTarget.elements.password.value === "" ||
        event.currentTarget.elements.password.value === "") {
            alert('всі поля повинні бути заповнені!!!');
    };

    const formEl = event.currentTarget.elements;
    
    const email = formEl.email.value;
    const password = formEl.password.value;

    const formData = {
        email,
        password,
    };
    console.log(formData);     
}

