const btnAbrirModal = document.querySelector("#btn-abrir-modal11");
const btnCerrarModal = document.querySelector("#btn-cerrar-modal11");
const modal = document.querySelector("#modal11");

btnAbrirModal.addEventListener("click", () => {
  modal.showModal();
});

btnCerrarModal.addEventListener("click", () => {
  modal.close();
});
