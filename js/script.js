document.addEventListener("DOMContentLoaded",function (){
    const patterns={
        username:/^[a-z\d]{5,12}$/i,
        email:/^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/,
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
            inputField.style.borderColor="#36cc36";
            if(inputField.attributes.name.value==="password")
            {
                let btn=document.querySelector("#show_hide_password_btn");
                btn.nextElementSibling.style.opacity = "0";
                btn.nextElementSibling.style.height = "0";

            }
            else {
                inputField.nextElementSibling.style.opacity = "0";
                inputField.nextElementSibling.style.height = "0";
            }
        }
        else
        {
            inputField.style.borderColor="orange";
           if(inputField.attributes.name.value==="password"){
               let btn=document.querySelector("#show_hide_password_btn");
               btn.nextElementSibling.style.opacity="1";
               btn.nextElementSibling.style.height="auto";
               btn.nextElementSibling.style.marginBottom="20px";
           }
           else{
               inputField.nextElementSibling.style.opacity="1";
               inputField.nextElementSibling.style.height="auto";
               inputField.nextElementSibling.style.marginBottom="20px";
           }
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