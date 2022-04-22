document.addEventListener("DOMContentLoaded", function () {
    const patterns = {
        username: /^[a-z\d]{5,12}$/i,
        email: /^([a-z\d\.]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/,
        password: /^[\w-@]{8,20}$/,
        phone: /^\d{12}$/
    };
    document.addEventListener("keyup", function (event) {
        let inputField = event.target;
        if ((inputField.tagName) === "INPUT") //check if input filed is triggered
        {
            if (inputField.attributes.name.value === "email")
                checkEmail(inputField, patterns[inputField.attributes.name.value]);
            else if (inputField.attributes.name.value === "confirm_pwd")
                checkPasswordMatch(inputField, document.getElementsByName("password")[0].value);
            else
                checkCredentials(inputField,patterns[inputField.attributes.name.value]);
        }
    });

    function checkEmail(inputField, regex) {
        if (regex.test(inputField.value)) {
            inputField.style.borderColor = "#36cc36";
            inputField.nextElementSibling.style.opacity = "0";
            inputField.nextElementSibling.style.height = "0";
        } else {
            inputField.style.borderColor = "orange";
            inputField.nextElementSibling.style.opacity = "1";
            inputField.nextElementSibling.style.height = "auto";
            inputField.nextElementSibling.style.marginBottom = "20px";
        }
    }

    function checkCredentials(inputField, regex) {
        let fieldName=inputField.attributes.name.value;
        let elem=inputField;
        if(fieldName=== "password")
            elem=document.querySelector(".show_hide_password_btn");
        if (regex.test(inputField.value)) {
            inputField.style.borderColor = "#36cc36";
            elem.nextElementSibling.style.opacity = "0";
            elem.nextElementSibling.style.height = "0";
        } else {
            inputField.style.borderColor = "orange";
            elem.nextElementSibling.style.opacity = "1";
            elem.nextElementSibling.style.height = "auto";
            elem.nextElementSibling.style.marginBottom = "20px";
        }
    }
    function checkPasswordMatch(inputField, password) {
        let elem=inputField.nextElementSibling;
        if(password === inputField.value && inputField.value !== ""){
            inputField.style.borderColor = "#36cc36";
            elem.nextElementSibling.style.opacity = "0";
            elem.nextElementSibling.style.height = "0";
        } else {
            inputField.style.borderColor = "orange";
            elem.nextElementSibling.style.opacity = "1";
            elem.nextElementSibling.style.height = "auto";
            elem.nextElementSibling.style.marginBottom = "20px";
        }
    }
    function checkRequired(inputs) {
        for(let input in inputs){
            if(input.value.length===0)
                return false;
        }
        return true;
    }
    document.addEventListener('click', function (event) {
        if (event.target.tagName === "BUTTON") {
            let btn = event.target
            if (btn.innerText === "SUBMIT") {
                let inputs=document.getElementsByClassName("user_input");
                if(checkRequired(inputs)){
                    alert("Successfully signup");
                    document.getElementsByName("signup-form")[0].reset();
                    for (let msg in inputs)
                        msg.style.borderColor="#cccccc";
                    event.preventDefault();
                }
            } else {
                event.preventDefault();
                if (btn.previousElementSibling.type === "text") {
                    btn.previousElementSibling.type = "password";
                    btn.innerHTML = "Show";
                } else {
                    btn.previousElementSibling.type = "text";
                    btn.innerHTML = "Hide";
                }
            }
        }
    });
});