const btnAbrirModal = document.querySelector("#btn-abrir-modal29");
const btnCerrarModal = document.querySelector("#btn-cerrar-modal29");
const modal = document.querySelector("#modal29");

btnAbrirModal.addEventListener("click", () => {
  modal.showModal();
});

btnCerrarModal.addEventListener("click", () => {
  modal.close();
});
