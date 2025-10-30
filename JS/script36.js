const btnAbrirModal = document.querySelector("#btn-abrir-modal36");
const btnCerrarModal = document.querySelector("#btn-cerrar-modal36");
const modal = document.querySelector("#modal36");

btnAbrirModal.addEventListener("click", () => {
  modal.showModal();
});

btnCerrarModal.addEventListener("click", () => {
  modal.close();
});
