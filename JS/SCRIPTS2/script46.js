const btnAbrirModal = document.querySelector("#btn-abrir-modal46");
const btnCerrarModal = document.querySelector("#btn-cerrar-modal46");
const modal = document.querySelector("#modal46");

btnAbrirModal.addEventListener("click", () => {
  modal.showModal();
});

btnCerrarModal.addEventListener("click", () => {
  modal.close();
});
