const btnAbrirModal = document.querySelector("#btn-abrir-modal8");
const btnCerrarModal = document.querySelector("#btn-cerrar-modal8");
const modal = document.querySelector("#modal8");

btnAbrirModal.addEventListener("click", () => {
  modal.showModal();
});

btnCerrarModal.addEventListener("click", () => {
  modal.close();
});
