const enviarTarea = () => {
  const tareaTexto = inputTarea.value;
  const cardTarea = document.createElement("div");
  cardTarea.classList.add("card", "mb-4");
  cardTarea.style.width = "18rem";
  cardTarea.innerHTML = `
      <div class="card-body d-flex flex-column justify-content-center align-items-center">
        <h5 class="card-title">${tareaTexto}</h5>
        <button type="button" class="btn btn-danger eliminar-btn my-3 ">Eliminar</button>
      </div>
    `;

  const contenedorTarea = document.querySelector("article");
  contenedorTarea.appendChild(cardTarea);

  const botonEliminar = cardTarea.querySelector(".eliminar-btn");
  botonEliminar.addEventListener("click", () => {
    cardTarea.remove();
  });
};

const botonAñadir = document.querySelector("button");
const inputTarea = document.querySelector("input");
