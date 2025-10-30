const btnAbrirModal = document.querySelector("#btn-abrir-modal21");
const btnCerrarModal = document.querySelector("#btn-cerrar-modal21");
const modal = document.querySelector("#modal21");

btnAbrirModal.addEventListener("click", () => {
  modal.showModal();
});

btnCerrarModal.addEventListener("click", () => {
  modal.close();
});
