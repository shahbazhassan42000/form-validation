document.addEventListener("DOMContentLoaded",function (){
    const patterns={
        username:/^[a-z\d]{5,12}$/i,
        email:/^\w+@\w+.com$/,
        password:/^[\w-@]{8,20}$/,
        telephone:/^\d{12}$/,
        slug:/^[a-z0-9-]{8,20}$/
    };
    document.addEventListener("keyup",function (event) {
        if((event.target.tagName)=="INPUT") //check if input filed is triggered
        {

            validate(event.target,patterns[event.target.attributes.name.value]);
        }
    });
    function validate(inputField,regex) {

        if(regex.test(inputField.value))
        {
            inputField.style.borderColor="green";
        }
        else
        {
            inputField.style.borderColor="red";
        }
    }
    document.querySelector("#show_hide_password_btn").addEventListener('click',function (event) {
        event.preventDefault();
       if(this.previousElementSibling.type==="text")
       {
           this.previousElementSibling.type="password";
           this.innerHTML="Show";
       }
       else
       {
           this.previousElementSibling.type="text";
           this.innerHTML="Hide";
       }
    });
});