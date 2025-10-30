const btnAbrirModal = document.querySelector("#btn-abrir-modal41");
const btnCerrarModal = document.querySelector("#btn-cerrar-modal41");
const modal = document.querySelector("#modal41");

btnAbrirModal.addEventListener("click", () => {
  modal.showModal();
});

btnCerrarModal.addEventListener("click", () => {
  modal.close();
});
