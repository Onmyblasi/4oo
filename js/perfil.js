// =========================================
// 4oo · Mi perfil y pasaporte
// Hace funcionar los filtros de competencias
// y los interruptores de "Quién lo ve".
// =========================================

// ---------- Filtros de competencias ----------
const filtros = document.querySelectorAll('.filtro');
const competencias = document.querySelectorAll('.competencia');

filtros.forEach((filtro) => {
  filtro.addEventListener('click', () => {
    const elegido = filtro.dataset.filtro;

    // Marca como pulsado solo el filtro elegido
    filtros.forEach((otro) => {
      otro.setAttribute('aria-pressed', otro === filtro ? 'true' : 'false');
    });

    // Muestra las competencias de ese origen y oculta las demás
    competencias.forEach((tarjeta) => {
      const coincide = elegido === 'todas' || tarjeta.dataset.origen === elegido;
      tarjeta.hidden = !coincide;
    });
  });
});

// ---------- Interruptores de "Quién lo ve" ----------
// De momento solo cambian en pantalla; más adelante
// guardarán la elección en la base de datos.
document.querySelectorAll('.interruptor').forEach((interruptor) => {
  interruptor.addEventListener('click', () => {
    const encendido = interruptor.getAttribute('aria-checked') === 'true';
    interruptor.setAttribute('aria-checked', encendido ? 'false' : 'true');
  });
});
