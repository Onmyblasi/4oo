/* =========================================
   4oo · Cabecera y menú compartidos de los perfiles
   Uso: <body class="app" data-perfil="usuaria" data-pagina="inicio">
        <script src="../js/layout.js"></script>   ← primera línea del body
   Inserta la barra del prototipo, la cabecera con el menú del perfil
   y, si toca, la franja superior (aviso o resumen compacto).
   ========================================= */
(function () {
  'use strict';

  // Todas las páginas de perfil están un nivel por debajo de la raíz
  var RAIZ = '../';

  var PERFILES = {
    'usuaria': {
      nombre: 'Usuaria (sin activación)',
      menu: 'Áreas',
      etiqueta: 'Acceso para toda la plantilla',
      persona: { inicial: 'M', nombre: 'Marta' },
      paginas: [
        ['inicio', 'Inicio'],
        ['simulador', 'Simulador'],
        ['rutas', 'Rutas y cursos'],
        ['mentoras', 'Mentoras']
      ]
    },
    'usuaria-activa': {
      nombre: 'Usuaria (con activación)',
      menu: 'Áreas',
      persona: { inicial: 'M', nombre: 'Marta' },
      paginas: [
        ['inicio', 'Inicio'],
        ['mi-ruta', 'Mi ruta'],
        ['mi-salario', 'Mi salario'],
        ['mi-mentora', 'Mi mentora'],
        ['mi-pasaporte', 'Mi pasaporte']
      ]
    },
    'rrhh': {
      nombre: 'RRHH',
      menu: 'Secciones RRHH',
      rol: 'RRHH · Software Málaga S.L. (empresa de ejemplo)',
      paginas: [
        ['inicio', 'Inicio'],
        ['activaciones', 'Activaciones'],
        ['indicadores', 'Indicadores'],
        ['seguimiento', 'Seguimiento'],
        ['informe', 'Informe']
      ]
    },
    'mentora': {
      nombre: 'Mentora',
      menu: 'Secciones mentora',
      persona: { inicial: 'L', nombre: 'Laura' },
      paginas: [
        ['inicio', 'Inicio'],
        ['viajeras', 'Mis viajeras'],
        ['agenda', 'Agenda'],
        ['perfil', 'Mi perfil']
      ]
    }
  };

  var LOGO =
    '<svg class="marca__logo" viewBox="40 40 284 116" width="88" height="36" aria-hidden="true">' +
      '<text x="136" y="150" fill="#3A1C3D" font-family="Space Grotesk, sans-serif" font-size="150" text-anchor="end">4</text>' +
      '<circle cx="186" cy="113" r="31" fill="none" stroke="#3A1C3D" stroke-width="12"/>' +
      '<circle cx="282" cy="113" r="31" fill="none" stroke="#3A1C3D" stroke-width="12"/>' +
      '<path d="M221.7,122.6 C223,130 236,136 240,150 M246.3,122.6 C245,130 232,136 228,150" fill="none" stroke="#3A1C3D" stroke-width="2.5" stroke-linecap="round"/>' +
    '</svg>';

  var body = document.body;
  var clave = body.getAttribute('data-perfil');
  var pagina = body.getAttribute('data-pagina');
  var perfil = PERFILES[clave];
  if (!perfil) return;

  // Barra del prototipo: un enlace por perfil + Administración
  var proto = '<nav aria-label="Pantallas del prototipo" class="proto-nav">' +
    '<a href="' + RAIZ + 'index.html">← Índice</a>';
  Object.keys(PERFILES).forEach(function (k) {
    var actual = k === clave ? ' aria-current="true"' : '';
    proto += '<a href="' + RAIZ + k + '/inicio.html"' + actual + '>' + PERFILES[k].nombre + '</a>';
  });
  proto += '<a href="' + RAIZ + 'admin.html">Administración</a></nav>';

  // Menú del perfil
  var enlaces = perfil.paginas.map(function (p) {
    var activa = p[0] === pagina;
    return '<a class="nav-link' + (activa ? ' nav-link--active' : '') + '" href="' + p[0] + '.html"' +
      (activa ? ' aria-current="page"' : '') + '>' + p[1] + '</a>';
  }).join('');

  var marcaExtra = '';
  if (perfil.etiqueta) marcaExtra += '<span class="header__etiqueta">' + perfil.etiqueta + '</span>';
  if (perfil.rol) marcaExtra += '<span class="header__rol">' + perfil.rol + '</span>';

  var persona = perfil.persona
    ? '<div class="header__usuaria"><span class="header__avatar" aria-hidden="true">' + perfil.persona.inicial + '</span>' + perfil.persona.nombre + '</div>'
    : '';

  var cabecera =
    '<a class="skip-link" href="#contenido">Saltar al contenido</a>' +
    '<header class="header">' +
      '<div class="header__fila">' +
        '<div class="header__marca">' +
          '<a class="marca" href="' + RAIZ + 'index.html" aria-label="4oo, ir al inicio">' + LOGO +
            '<span class="marca__lema">For Our Ovaries</span></a>' + marcaExtra +
        '</div>' +
        '<nav class="header__nav" aria-label="' + perfil.menu + '">' + enlaces + '</nav>' +
        persona +
      '</div>' +
    '</header>';

  // Franja bajo la cabecera
  var franja = '';
  if (clave === 'usuaria') {
    franja = '<div class="page-top"><div class="notice">' +
      '<p>Modo exploración: aún no tienes una excedencia o reducción de jornada activada.</p>' +
      '<span class="muted">La activa RRHH cuando la solicitas.</span></div></div>';
  }
  if (clave === 'usuaria-activa' && pagina !== 'inicio') {
    franja = '<div class="page-top"><div class="summary" role="group" aria-label="Tu plan">' +
      '<div class="summary__box"><div class="summary__label">Situación</div><div class="summary__value">Reducción 25 %</div></div>' +
      '<div class="summary__box"><div class="summary__label">Vuelta prevista</div><div class="summary__value">Nov 2028</div></div>' +
      '</div></div>';
  }

  // Se inserta justo donde está este <script> (al principio del body), sin parpadeo
  var script = document.currentScript;
  script.insertAdjacentHTML('beforebegin', proto + cabecera + franja);
})();
