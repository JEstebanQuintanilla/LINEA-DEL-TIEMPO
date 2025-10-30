const btnAbrirModal = document.querySelector("#btn-abrir-modal7");
const btnCerrarModal = document.querySelector("#btn-cerrar-modal7");
const modal = document.querySelector("#modal7");

btnAbrirModal.addEventListener("click", () => {
  modal.showModal();
});

btnCerrarModal.addEventListener("click", () => {
  modal.close();
});
