const btnAbrirModal = document.querySelector("#btn-abrir-modal33");
const btnCerrarModal = document.querySelector("#btn-cerrar-modal33");
const modal = document.querySelector("#modal33");

btnAbrirModal.addEventListener("click", () => {
  modal.showModal();
});

btnCerrarModal.addEventListener("click", () => {
  modal.close();
});
