const btnAbrirModal = document.querySelector("#btn-abrir-modal24");
const btnCerrarModal = document.querySelector("#btn-cerrar-modal24");
const modal = document.querySelector("#modal24");

btnAbrirModal.addEventListener("click", () => {
  modal.showModal();
});

btnCerrarModal.addEventListener("click", () => {
  modal.close();
});
