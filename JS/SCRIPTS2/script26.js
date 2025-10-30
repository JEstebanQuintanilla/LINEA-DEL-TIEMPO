const btnAbrirModal = document.querySelector("#btn-abrir-modal26");
const btnCerrarModal = document.querySelector("#btn-cerrar-modal26");
const modal = document.querySelector("#modal26");

btnAbrirModal.addEventListener("click", () => {
  modal.showModal();
});

btnCerrarModal.addEventListener("click", () => {
  modal.close();
});
