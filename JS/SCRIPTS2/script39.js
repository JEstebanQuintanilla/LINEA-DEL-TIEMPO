const btnAbrirModal = document.querySelector("#btn-abrir-modal39");
const btnCerrarModal = document.querySelector("#btn-cerrar-modal39");
const modal = document.querySelector("#modal39");

btnAbrirModal.addEventListener("click", () => {
  modal.showModal();
});

btnCerrarModal.addEventListener("click", () => {
  modal.close();
});
