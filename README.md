# DizZine · Plataforma Web Interactiva

## Especificación Técnica y Alcance

**Documento:** ESPEC-2026-001
**Versión:** 0.2
**Fecha de release:** 18 de agosto de 2026
**Preparado por:** Ingeniería Frontend
**Estado:** Released v0.2

---

## 1. Resumen ejecutivo

DIZZINE es una publicación digital interactiva que expone el catálogo de ediciones de la revista mediante un cover dinámico.
La navegación opera por click y por scroll como fuente única de verdad del estado activo.

## 2. Alcance

### Incluido (v0.2)

- Replica fiel al diseño de referencia.
- Navegación por clic (scroll suave) y por scroll(snap + observer).
- Cambio de color de fondo derivado de la edición activa.
- Simulación de flujo de compra y consulta de punta de venta.
- Fallback de imagen en dos capas (dato ausente y recurso roto).
- Overlay hover con población y arquitectura.
- CTA dinámico "Ver edición [ciudad]".
- Navegación nativa a páginas secundarias.
- Assets locales AVIF y favicon SVG.

### Excluido (fuera de alcance)

- Persistencia de datos y backend.
- Internacionalización (i18n).

## 3. Requisitos funcionales

| ID    | Requisito                                                               | Prioridad |
| ----- | ----------------------------------------------------------------------- | --------- |
| RF-01 | Renderizar el cover de la edición activa.                               | Alta      |
| RF-02 | Seleccionar cualquier edición sin recarga de página.                    | Alta      |
| RF-03 | Actualizar el color de fondo de la interfaz según la edición activa.    | Alta      |
| RF-04 | El botón "COMPRAR AQUÍ" confirmará la compra de la edición activa.      | Media     |
| RF-05 | El enlace "tiendas seleccionadas" alternará la visibilidad de la lista. | Media     |
| RF-06 | "Política de Privacidad" mostrará el aviso legal.                       | Baja      |

## 4. Requisitos no funcionales

| ID     | Requisito                                                           |
| ------ | ------------------------------------------------------------------- |
| RNF-01 | Implementación en JavaScript vanilla (sin frameworks ni librerías). |
| RNF-02 | Separación de capas: index.html / styles.css / app.js.              |
| RNF-03 | Cero errores o advertencias en consola durante la navegación.       |
| RNF-04 | Fuente única de verdad: datos centralizados.                        |
| RNF-05 | Semántica HTML y accesibilidad básica (landmarks, roles, aria).     |
| RNF-06 | Assets modernos autocontenidos: AVIF, SVG.                          |

## 5. Criterios de aceptación

- Fidelidad visual respecto a la referencia.
- Navegación clic + scroll coherente.
- Fallback verificado con src roto intencional.
- Code review sin observaciones críticas.

## 6. Entregables

1. Especificación técnica (este documento).
2. Diseño detallado: estructura, modelo de datos, mapa de eventos.
3. Implementación: Milestone A (estático) y Milestone B (interactividad).
4. Evaluación técnica y retrospectiva.

## Cambios acumulados desde v0.2

1. Dominio: catálogo de 7 ciudades colombianas.
2. Assets locales AVIF + favicon SVG (sin terceros).
3. Fallback en dos capas: `||` (dato) + evento `error` (recurso).
4. Scroll Snap + IntersectionObserver; scroll como fuente de verdad.
5. Overlay hover con datos demográficos.
6. CTA dinámico por ciudad.
7. Arquitectura: setActiveCity como única mutación de estado.
8. Defensive coding: optional chaining, guardias, delegación.
