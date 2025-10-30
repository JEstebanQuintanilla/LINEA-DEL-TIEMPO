const btnAbrirModal = document.querySelector("#btn-abrir-modal28");
const btnCerrarModal = document.querySelector("#btn-cerrar-modal28");
const modal = document.querySelector("#modal28");

btnAbrirModal.addEventListener("click", () => {
  modal.showModal();
});

btnCerrarModal.addEventListener("click", () => {
  modal.close();
});
