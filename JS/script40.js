const btnAbrirModal = document.querySelector("#btn-abrir-modal40");
const btnCerrarModal = document.querySelector("#btn-cerrar-modal40");
const modal = document.querySelector("#modal40");

btnAbrirModal.addEventListener("click", () => {
  modal.showModal();
});

btnCerrarModal.addEventListener("click", () => {
  modal.close();
});
