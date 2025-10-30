const btnAbrirModal = document.querySelector("#btn-abrir-modal19");
const btnCerrarModal = document.querySelector("#btn-cerrar-modal19");
const modal = document.querySelector("#modal19");

btnAbrirModal.addEventListener("click", () => {
  modal.showModal();
});

btnCerrarModal.addEventListener("click", () => {
  modal.close();
});
