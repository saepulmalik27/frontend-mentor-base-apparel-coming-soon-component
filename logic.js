const validateEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
};

const validEmail = (email)=>{
    const regex = /^((?!\.)[\w\-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/;
    return regex.test(email);
  }


const sent_email = document.getElementById('sent_email');
const form_input = document.getElementById('form_input');
const error_email = document.getElementById('error_email');
const form = document.getElementById('form');
const error_icon = document.getElementById('error_icon');

const formSubmit = (e) => {
    e.preventDefault();
 
    if (validateEmail(form_input.value)) {
        form_input.value = ""
        if (sent_email.classList.contains("active")) {
            sent_email.classList.add("remove")
        }
        if (form.classList.contains("border-error")) {
            form.classList.remove("border-error")
        }
        
        error_email.innerHTML = ''
        if ( error_icon.classList.contains("error_icon")) {
            error_icon.classList.remove("error_icon")
        }
        error_icon.innerHTML = ''
    }else{
        sent_email.classList.add("active")
        form.classList.add("border-error")
        error_email.innerHTML = '<p class="text-error" style="padding : 1rem 2.25rem">Please provide a valid email</p>'
        error_icon.classList.add("error_icon")
        error_icon.innerHTML = '<img src="./images/icon-error.svg" alt="error" />'
    }
    
}
sent_email.addEventListener("click", (event) => {
   formSubmit(event);
} )

