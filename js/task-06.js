
const inputEl = document.querySelector('#validation-input');

inputEl.addEventListener("blur", controlInput);

function controlInput(event) {
 
    if (event.currentTarget.value.length !== Number(inputEl.dataset.length)) {
        inputEl.classList.add("invalid"); 
        inputEl.classList.remove("valid"); 
    } else {
        inputEl.classList.add("valid"); 
        inputEl.classList.remove("invalid");  
    }
}
