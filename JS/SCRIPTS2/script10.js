const btnAbrirModal = document.querySelector("#btn-abrir-modal10");
const btnCerrarModal = document.querySelector("#btn-cerrar-modal10");
const modal = document.querySelector("#modal10");

btnAbrirModal.addEventListener("click", () => {
  modal.showModal();
});

btnCerrarModal.addEventListener("click", () => {
  modal.close();
});
