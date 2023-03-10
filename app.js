const sendForm = document.querySelector('.formulary');
const emailSend = document.querySelector('#sendEmail');

sendForm.addEventListener('submit',handleSubmit) 

function handleSubmit(event) {
    event.preventDefault() 
    const form = new FormData(this)
    emailSend.setAttribute('href', `mailto:christiang14@hotmail.com.ar? ${form.get('email')}  subjet=${form.get('name')}   &body=${form.get('message')}`)
    emailSend.click()
};
