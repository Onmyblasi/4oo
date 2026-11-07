# 4oo · Reglas de negocio por perfil

> Para que tu carrera no se pare mientras cuidas.

## Índice
- [Usuaria/o](#usuariao)
- [RRHH](#rrhh)
- [Mentora](#mentora)
- [Administración](#administración)
- [Transversal](#transversal)
- [Estructura del prototipo](#estructura-del-prototipo)

---

## Usuaria/o

| ID | Regla |
|----|-------|
| RN1 | Todas las personas de la empresa pueden acceder a la web. |

### Sin activación de excedencia o reducción de jornada

| ID | Regla |
|----|-------|
| RN2 | Ver simulaciones según el salario que introduzca. |
| RN3 | Ver el catálogo de mentoras (solo nombre corto y una descripcion de su perfil ). |
| RN4 | Ver ejemplos de rutas según el perfil laboral. |
| RN5 | Ver los cursos recomendados para su rol. |

### Con activación de excedencia o reducción de jornada

| ID | Regla |
|----|-------|
| RN6 | Ver su ruta de aprendizaje personalizada. |
| RN7 | Ver el cálculo referencial de su salario. |
| RN8 | Ver su pasaporte de competencias *(contenido por definir)*. |
| RN9 | Ver su mentora asignada, su contacto y la agenda planificada. |
| RN19 | Marcar el progreso de cada curso (pendiente, en curso, completado). |

---

## RRHH

| ID | Regla |
|----|-------|
| RN10 | Activar la excedencia o la reducción de jornada. |
| RN11 | Asignar la mentora. |
| RN20 | Ver el panel de indicadores agregados: personas activas por sexo, formación completada y retención. |
| RN30 |  Generar y exportar (PDF o Excel) un informe de formación por periodo de las personas en reducción de jornada o excedencia: persona, situación, curso, horas, fecha de finalización y competencias adquiridas. Sirve como evidencia ante la Administración Pública (Inspección de Trabajo, plan de igualdad, FUNDAE). |
| RN31 |  El informe se puede filtrar por periodo, por situación (reducción de jornada o excedencia) y por sexo. |
| RN38 | Ver avisos de seguimiento: vueltas en las próximas 6 semanas, personas sin mentora y planes sin avance en 30 días. |
---

## Mentora

| ID | Regla |
|----|-------|
| RN12 | Ver su listado de viajeras (personas que acompaña). |
| RN13 | Ver sus agendas. |
| RN14 | Añadir las sesiones a su calendario (Teams, Meet, etc.). |
| RN15 | Ver su resumen de perfil tal como lo verán otras personas. |

---

## Administración

| ID | Regla |
|----|-------|
| RN16 | Mantenimiento de cursos por rol y sus rutas asociadas (de momento, manual). Incluye la URL de la web de cada curso. |
| RN17 | Las mentoras pueden ser internas o externas; las externas se incentivan con certificados. |
|| RN33 | Seleccionar la empresa en la cabecera (siempre visible). Filtra solo la zona "Empresa seleccionada": usuarias y roles, mentoras internas e informe de formación. La zona "Configuración global" (empresas, cursos y rutas, mentoras externas) no cambia con el filtro. |
| RN18 | Mantenimiento de mentoras en dos listados: internas (por empresa) y externas (globales). Datos: nombre, resumen profesional y correo de contacto. |
| RN18 | Mantenimiento de mentoras: tipo (interna/externa), nombre, resumen profesional y correo de contacto. |
| RN35 | Las mentoras **externas** son transversales: se pueden asignar a personas de cualquier empresa. |
| RN36 | Las mentoras **internas** pertenecen a una empresa y solo pueden acompañar a personas de esa empresa. |

| RN21 | Gestionar usuarias y roles (usuaria, RRHH, mentora, admin) de la empresa seleccionada.
| RN34 | Dar de alta y mantener empresas: nombre, CIF, nº de personas en plantilla y estado (activa o inactiva). |
| RN40 | Ver un resumen de la empresa seleccionada: personas activas (reducción de jornada o excedencia), mentoras sin asignar, planes sin avance en 30 días y acceso al informe de formación. |
| RN41 | Importar personas y cursos desde un fichero CSV *(de momento, solo visual)*. |
| RN30 | Por el filtro de empresa:   Generar y exportar (PDF o Excel) un informe de formación por periodo de las personas en reducción de jornada o excedencia: persona, situación, curso, horas, fecha de finalización y competencias adquiridas. Sirve como evidencia ante la Administración Pública (Inspección de Trabajo, plan de igualdad, FUNDAE). |
| RN31 | Por el filtro de empresa: El informe se puede filtrar por periodo, por situación (reducción de jornada o excedencia) y por sexo. |

## Transversal

| ID | Regla |
|----|-------|
| RN22 | El simulador muestra el aviso "cálculo orientativo, no es asesoramiento legal". |
| RN37 | RRHH, mentoras internas y usuarias solo ven los datos de su propia empresa. Solo Administración puede cambiar de empresa. |
| RN39 | Cada curso de la ruta y de los cursos recomendados tiene un enlace a su web. Se abre en una pestaña nueva e indica el proveedor (catálogo de la empresa o externo). |
| RN42 | Cada perfil tiene una página de inicio con un resumen de lo más importante y acceso a sus opciones. |


---

## Estructura del prototipo

HTML estático, sin frameworks. Cada perfil (salvo Administración) tiene una carpeta con una página por opción del menú. `inicio.html` es la página por defecto de cada perfil.

```
4oo/
├── index.html                    Portada (las cuatro áreas y el acceso)
├── admin.html                    Administración (menú lateral, una sola página)
├── css/
│   ├── styles.css                Paleta, tipografía y componentes compartidos
│   └── admin.css                 Estilos propios de Administración
├── js/
│   └── layout.js                 Cabecera, menú y barra del prototipo de cada perfil
├── usuaria/                      Usuaria sin activación
│   ├── inicio.html
│   ├── simulador.html
│   ├── rutas.html
│   └── mentoras.html
├── usuaria-activa/               Usuaria con activación
│   ├── inicio.html
│   ├── mi-ruta.html
│   ├── mi-salario.html
│   ├── mi-mentora.html
│   └── mi-pasaporte.html
├── rrhh/
│   ├── inicio.html
│   ├── activaciones.html
│   ├── indicadores.html
│   ├── seguimiento.html
│   └── informe.html
└── mentora/
    ├── inicio.html
    ├── viajeras.html
    ├── agenda.html
    └── perfil.html
```

`usuaria-sin-activacion.html`, `usuaria-con-activacion.html`, `rrhh.html` y `mentora.html` solo redirigen al `inicio.html` de su perfil, para no romper enlaces antiguos.

### Reglas que cubre cada página

| Página | Reglas |
|--------|--------|
| `usuaria/inicio.html` | RN42 · simulador compacto (RN2, RN22), rutas (RN4) y mentoras (RN3) |
| `usuaria/simulador.html` | RN2, RN22 |
| `usuaria/rutas.html` | RN4, RN5, RN39 |
| `usuaria/mentoras.html` | RN3 |
| `usuaria-activa/inicio.html` | RN42 · progreso y siguiente curso (RN6, RN39), próxima sesión (RN9), salario (RN7, RN22) y competencias nuevas (RN8) |
| `usuaria-activa/mi-ruta.html` | RN6, RN19, RN39 |
| `usuaria-activa/mi-salario.html` | RN7, RN22 |
| `usuaria-activa/mi-mentora.html` | RN9 |
| `usuaria-activa/mi-pasaporte.html` | RN8 |
| `rrhh/inicio.html` | RN42 · avisos (RN38), indicadores clave (RN20) y accesos a activar plan (RN10) y generar informe (RN30) |
| `rrhh/activaciones.html` | RN10, RN11 |
| `rrhh/indicadores.html` | RN20 |
| `rrhh/seguimiento.html` | RN38 |
| `rrhh/informe.html` | RN30, RN31 |
| `mentora/inicio.html` | RN42 · próxima sesión (RN13, RN14), viajeras que necesitan atención (RN12) y acceso a mi perfil (RN15) |
| `mentora/viajeras.html` | RN12 |
| `mentora/agenda.html` | RN13, RN14 |
| `mentora/perfil.html` | RN15 |
| `admin.html` | RN16–RN18, RN21, RN30, RN31, RN33–RN37, RN39–RN41 |
