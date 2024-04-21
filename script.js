const dialog = document.querySelector("dialog");
const showModal = document.querySelector(".add");
const closeModal = document.querySelector("dialog .close");

showModal.addEventListener("click", () => {
  dialog.showModal();
});

closeModal.addEventListener("click", () => {
  dialog.close();
});