const btnAbrirModal = document.querySelector("#btn-abrir-modal15");
const btnCerrarModal = document.querySelector("#btn-cerrar-modal15");
const modal = document.querySelector("#modal15");

btnAbrirModal.addEventListener("click", () => {
  modal.showModal();
});

btnCerrarModal.addEventListener("click", () => {
  modal.close();
});
