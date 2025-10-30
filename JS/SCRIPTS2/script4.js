const btnAbrirModal = document.querySelector("#btn-abrir-modal4");
const btnCerrarModal = document.querySelector("#btn-cerrar-modal4");
const modal = document.querySelector("#modal4");

btnAbrirModal.addEventListener("click", () => {
  modal.showModal();
});

btnCerrarModal.addEventListener("click", () => {
  modal.close();
});
