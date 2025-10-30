const btnAbrirModal = document.querySelector("#btn-abrir-modal14");
const btnCerrarModal = document.querySelector("#btn-cerrar-modal14");
const modal = document.querySelector("#modal14");

btnAbrirModal.addEventListener("click", () => {
  modal.showModal();
});

btnCerrarModal.addEventListener("click", () => {
  modal.close();
});
