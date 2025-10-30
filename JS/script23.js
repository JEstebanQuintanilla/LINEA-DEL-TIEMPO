const btnAbrirModal = document.querySelector("#btn-abrir-modal23");
const btnCerrarModal = document.querySelector("#btn-cerrar-modal23");
const modal = document.querySelector("#modal23");

btnAbrirModal.addEventListener("click", () => {
  modal.showModal();
});

btnCerrarModal.addEventListener("click", () => {
  modal.close();
});
