const btnAbrirModal = document.querySelector("#btn-abrir-modal22");
const btnCerrarModal = document.querySelector("#btn-cerrar-modal22");
const modal = document.querySelector("#modal22");

btnAbrirModal.addEventListener("click", () => {
  modal.showModal();
});

btnCerrarModal.addEventListener("click", () => {
  modal.close();
});
