const btnAbrirModal = document.querySelector("#btn-abrir-modal20");
const btnCerrarModal = document.querySelector("#btn-cerrar-modal20");
const modal = document.querySelector("#modal20");

btnAbrirModal.addEventListener("click", () => {
  modal.showModal();
});

btnCerrarModal.addEventListener("click", () => {
  modal.close();
});
