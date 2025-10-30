const btnAbrirModal = document.querySelector("#btn-abrir-modal34");
const btnCerrarModal = document.querySelector("#btn-cerrar-modal34");
const modal = document.querySelector("#modal34");

btnAbrirModal.addEventListener("click", () => {
  modal.showModal();
});

btnCerrarModal.addEventListener("click", () => {
  modal.close();
});
