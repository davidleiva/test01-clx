function handleInit() {
    const userLang = navigator.language || navigator.userLanguage;
    if(userLang === 'ar') { // ar
        document.querySelector('html').dir = 'rtl';
        // add css class "rtl" to elements ....
    }
}

window.onload = handleInit();
