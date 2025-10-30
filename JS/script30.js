const btnAbrirModal = document.querySelector("#btn-abrir-modal30");
const btnCerrarModal = document.querySelector("#btn-cerrar-modal30");
const modal = document.querySelector("#modal30");

btnAbrirModal.addEventListener("click", () => {
  modal.showModal();
});

btnCerrarModal.addEventListener("click", () => {
  modal.close();
});
