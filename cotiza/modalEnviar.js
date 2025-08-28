    // Manejar el envío del formulario
    document.querySelector('.cotiza-form').addEventListener('submit', function(e) {
      e.preventDefault(); // Prevenir el envío normal del formulario
      
      // Mostrar la alerta de SweetAlert2
      Swal.fire({
        title: "Se ha enviado correctamente.",
        text: "Nos pondremos en contacto contigo pronto",
        icon: "success",
        confirmButtonText: "OK"
      }).then((result) => {
        if (result.isConfirmed) {
          // Aquí puedes agregar lógica adicional después de que el usuario cierre la alerta
          // Por ejemplo, limpiar el formulario o redirigir a otra página
          this.reset(); // Limpia el formulario
        }
      });
    });