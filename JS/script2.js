const btnAbrirModal = document.querySelector("#btn-abrir-modal2");
const btnCerrarModal = document.querySelector("#btn-cerrar-modal2");
const modal = document.querySelector("#modal2");

btnAbrirModal.addEventListener("click", () => {
  modal.showModal();
});

btnCerrarModal.addEventListener("click", () => {
  modal.close();
});
