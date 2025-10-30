const btnAbrirModal = document.querySelector("#btn-abrir-modal42");
const btnCerrarModal = document.querySelector("#btn-cerrar-modal42");
const modal = document.querySelector("#modal42");

btnAbrirModal.addEventListener("click", () => {
  modal.showModal();
});

btnCerrarModal.addEventListener("click", () => {
  modal.close();
});
