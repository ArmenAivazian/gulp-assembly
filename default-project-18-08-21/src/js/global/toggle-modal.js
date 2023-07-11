// // if (e.target.closest("[data-event-modal]")) toggleModal({modal: `[data-modal="${$(e.target.closest("[data-event-modal]")).data('event-modal')}"]`})

// // --> Открытие\закрытие модалки
// const toggleModal = ({ modal, mode = "toggle", header = null }) => {
//   const body = document.querySelector("body");
//   let documentWidth = parseInt(document.documentElement.clientWidth);
//   let windowsWidth = parseInt(window.innerWidth);
//   let scrollbarWidth = windowsWidth - documentWidth;

//   if (mode === "close" || $(body).hasClass("open-modal")) {
//     $(body).removeClass("open-modal");
//     bodyScrollLock.enableBodyScroll(document.querySelector(".modal.active"));
//     body.style.paddingRight = "";
//     header.style.paddingRight = "";
//     $(".modal").removeClass("active");
//     $(".modal__window").removeClass("active");
//     return;
//   }

//   $(body).addClass("open-modal");
//   bodyScrollLock.disableBodyScroll(document.querySelector(modal));
//   body.style.paddingRight = scrollbarWidth + "px";
//   header.style.paddingRight = scrollbarWidth + "px";
//   $(modal).addClass("active");
//   $(modal).find(".modal__window").addClass("active");
// };