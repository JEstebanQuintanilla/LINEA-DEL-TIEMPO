const btnAbrirModal = document.querySelector("#btn-abrir-modal17");
const btnCerrarModal = document.querySelector("#btn-cerrar-modal17");
const modal = document.querySelector("#modal17");

btnAbrirModal.addEventListener("click", () => {
  modal.showModal();
});

btnCerrarModal.addEventListener("click", () => {
  modal.close();
});
