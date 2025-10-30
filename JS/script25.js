const btnAbrirModal = document.querySelector("#btn-abrir-modal25");
const btnCerrarModal = document.querySelector("#btn-cerrar-modal25");
const modal = document.querySelector("#modal25");

btnAbrirModal.addEventListener("click", () => {
  modal.showModal();
});

btnCerrarModal.addEventListener("click", () => {
  modal.close();
});
