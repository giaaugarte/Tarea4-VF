function emailValidation() {
    const form = document.getElementById('form');
    const emailConfirmField = document.getElementById('email_confirm');
    const element = document.createElement('p');
    element.innerText =('Eメールが一致しません');
    element.setAttribute('id', 'errorMessage'); 
    element.classList.add('error_color');

    emailConfirmField.addEventListener('input', e => {
        if (form.email.value !== form.email_confirm.value) {
            emailConfirmField.classList.add('alert_bg');
            if (!document.getElementById('errorMessage')) {
                const errorBox = document.getElementById('error');
                errorBox.after(element);
                }
        } else {
            emailConfirmField.classList.remove('alert_bg');
            if (document.getElementById('errorMessage')) {
                element.parentNode.removeChild(element);
            }
        }
    });
}

window.onload = function () {
    emailValidation();
};
