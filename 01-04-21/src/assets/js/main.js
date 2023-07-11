// document.onreadystatechange = function() {
//     if (document.readyState === "interactive") {

//     }
// }
// $(window).on('load', () => {
window.addEventListener("load", function () {
    // variables
    // selecror
    // /selecror
    // /variables
    // ----------------------------------------------
    // universal function
    // function indexElement(el) {
    //     if (!el) return -1;
    //     let i = 0;
    //     do {
    //         i++;
    //     } while (el = el.previousElementSibling);
    //     return i;
    // }
    // function isTouchDevice() {
    //     return 'ontouchstart' in window
    //         || navigator.maxTouchPoints;
    // }
    // function scrollEmulation() {
    //     let documentWidth = parseInt(document.documentElement.clientWidth)
    //     let windowsWidth = parseInt(window.innerWidth)
    //     let scrollbarWidth = windowsWidth - documentWidth
    // document.querySelector('body').style.paddingRight = scrollbarWidth + 'px'
    //     document.querySelector('header').style.paddingRight = scrollbarWidth + 'px'
    //     document.querySelector('body').classList.toggle('block')
    // }
    // function ajaxRequest(ajaxForm, url) {
    //     try {
    //         history.replaceState(null, null, "#")
    //     } catch (z) {
    //         console.log(z)
    //     }
    //     $.ajax({
    //         url: url,
    //         type: "POST",
    //         dataType: "html",
    //         data: $("#" + ajaxForm).serialize(), // Сеарилизуем объект
    //         success: function (response) {
    //             //Данные отправлены успешно
    //             let result = $.parseJSON(response)
    //             console.log(result)
    //         },
    //         error: function (response) {
    //             // Данные не отправлены
    //             alert("Ошибка. Данные не отправлены.")
    //         },
    //     })
    // }
    //  /universal function
    // ----------------------------------------------
    // event
    // for (const anchor of document.querySelectorAll('a[href*="#"]')) {
    //     anchor.addEventListener('click', function (e) {
    //         e.preventDefault()

    //         const blockID = anchor.getAttribute('href').substr(1)

    //         document.getElementById(blockID).scrollIntoView({
    //             behavior: 'smooth',
    //             block: 'start'
    //         })
    //     })
    // }
    // $('body').on('click', (e) => {}) 
    document.querySelector('body').addEventListener('click', (e) => { })


    // forms
    // $("#registration-form").on("input, submit", (e) => {
    //     e.preventDefault()
    //     ajaxRequest("registration-form", "test.php")
    // })
    // /forms
    // /event
    // ----------------------------------------------
    // unique function
    // /unique function
    // ----------------------------------------------
    // Page load
    // всегда правильная высота экрана на мобайлах 
    // function viewportHeight() {
    //     let vh = window.innerHeight * 0.01;
    //     document.documentElement.style.setProperty('--vh', `${vh}px`);
    // }
    // document.documentElement.clientWidth <= 500 && (
    //     window.addEventListener('resize', viewportHeight),
    //     viewportHeight()
    // )
    // /Page load
});
