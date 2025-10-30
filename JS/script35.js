const btnAbrirModal = document.querySelector("#btn-abrir-modal35");
const btnCerrarModal = document.querySelector("#btn-cerrar-modal35");
const modal = document.querySelector("#modal35");

btnAbrirModal.addEventListener("click", () => {
  modal.showModal();
});

btnCerrarModal.addEventListener("click", () => {
  modal.close();
});
