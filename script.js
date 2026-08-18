// Sistema de Inscripción Escolar — lógica del lado del cliente

document.getElementById("form-contacto").addEventListener("submit", function (e) {
  e.preventDefault();

  const nombre = document.getElementById("nombre").value.trim();
  const correo = document.getElementById("correo").value.trim();
  const mensaje = document.getElementById("mensaje").value.trim();

  // Validación: Verificar campos vacíos
  if (nombre === "" || correo === "" || mensaje === "") {
    alert("Error: Todos los campos son obligatorios.");
    return;
  }

  // Validación: Formato de correo electrónico básico
  if (!correo.includes("@") || !correo.includes(".")) {
    alert("Error: Por favor, introduce un correo electrónico válido.");
    return;
  }

  // Si pasa las validaciones:
  alert("Formulario enviado con éxito.");
});