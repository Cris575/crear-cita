var usuarios = [
    {
      ine: "1",
      nombre: "Usuario 1",
      citas: [
        {
          fecha: "2023-06-15",
          hora: "10:00",
          modulo: "Modulo1"
        }
      ]
    },
    {
      ine: "2",
      nombre: "Usuario 2",
      citas: [
        {
          fecha: "2023-06-15",
          hora: "14:00",
          modulo: "Modulo3"
        }
      ]
    }
  ];
  
  var consultaForm = document.getElementById("consulta-form");
  var ineInput = document.getElementById("ine-input");
  var resultadoDiv = document.getElementById("resultado");
  
  consultaForm.addEventListener("submit", function(event) {
    event.preventDefault();
  
    var ine = ineInput.value;
  
    // Buscar el usuario en el arreglo de usuarios
    var usuario = usuarios.find(function(user) {
      return user.ine === ine;
    });
    console.log(usuario)
    // Verificar si se encontró el usuario
    if (usuario) {
      // Mostrar el resultado de la consulta
      resultadoDiv.innerHTML = "";
      resultadoDiv.style.display = "block";
  
      var nombreP = document.createElement("p");
      nombreP.textContent = "Nombre: " + usuario.nombre;
  
      resultadoDiv.appendChild(nombreP);
  
      // Mostrar la información de las citas del usuario
      usuario.citas.forEach(function(cita) {
        console.log(1)
        var fechaP = document.createElement("p");
        fechaP.textContent = "Fecha: " + cita.fecha;
  
        var horaP = document.createElement("p");
        horaP.textContent = "Hora: " + cita.hora;
  
        var moduloP = document.createElement("p");
        moduloP.textContent = "Módulo: " + cita.modulo;
  
        resultadoDiv.appendChild(fechaP);
        resultadoDiv.appendChild(horaP);
        resultadoDiv.appendChild(moduloP);
      });
    } else {
      // Mostrar mensaje de usuario no encontrado
      resultadoDiv.innerHTML = "Usuario no encontrado";
      resultadoDiv.style.display = "block";
    }
  });
  