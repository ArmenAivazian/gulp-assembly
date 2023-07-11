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
    // /Page load
});
