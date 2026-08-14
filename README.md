# DizZine · Plataforma Web Interactiva

## Especificación Técnica y Alcance

**Documento:** ESPEC-2026-001
**Versión:** 0.1
**Fecha:** 13 de agosto de 2026
**Preparado por:** Ingeniería Frontend
**Estado:** Aprobado para diseño detallado

---

## 1. Resumen ejecutivo

DIZZINE es una publicación digital interactiva que expone el catálogo de ediciones de la revista mediante un cover dinámico. El sistema permitirá navegar entre ediciones actualizando en tiempo real el contenido visual y la paleta cromática de la interfaz, sin recarga de página.

## 2. Alcance

### Incluido (v1)

- Replica fiel al diseño de referencia
- Navegación entre ediciones con actualización dinámica
- Cambio de color de fondo derivado de la edición activa
- Simulación de flujo de compra y consulta de punta de venta

### Excluido (fuera de alcance)

- Persistencia de datos y backend.
- Internacionalización (i18n).

## 3. Requisitos funcionales

| ID    | Requisito                                                               | Prioridad |
| ----- | ----------------------------------------------------------------------- | --------- |
| RF-01 | Renderizar el cover de la edición activa.                               | Alta      |
| RF-02 | Permitir seleccionar cualquier edición sin recarga de página.           | Alta      |
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

## 5. Criterios de aceptación

- Fidelidad visual ≥ 95 % respecto a la referencia.
- Navegación completa entre ediciones sin recarga.
- Code review sin observaciones críticas.

## 6. Entregables

1. Especificación técnica (este documento).
2. Diseño detallado: estructura, modelo de datos, mapa de eventos.
3. Implementación: Milestone A (estático) y Milestone B (interactividad).
4. Evaluación técnica y retrospectiva.
