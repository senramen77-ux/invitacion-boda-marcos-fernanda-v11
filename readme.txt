INVITACIÓN MARCOS & FERNANDA — PREMIUM V9

Contenido:
- index.html
- estilos.css
- script.js
- carpeta assets/ con vídeo inicial, música, GIFs e iconos.

Cambios principales versión 6:
1. Se parte de la versión 5 modificada manualmente.
2. Se mantiene el vídeo inicial y musica.aac.
3. La música intenta reproducirse automáticamente al abrir la invitación. Nota: algunos móviles/navegadores pueden bloquear el autoplay con sonido hasta que el invitado toque la pantalla.
4. Se eliminan de la estructura HTML las imágenes decorativas monocolor de fondo.
5. Se añade un nuevo bloque “Solo adultos” entre Transporte/Vestimenta y Galería.
6. Se sustituye el collage de galería por un vídeo: assets/video_galeria_v6.mp4.
7. Se añaden separadores ondulados elegantes entre secciones mediante CSS.

Edición rápida:
- Cambiar texto: index.html
- Cambiar tamaños, posiciones, colores: estilos.css
- Música, cuenta atrás, formulario y reproducción del vídeo de galería: script.js

Para probar localmente:
1. Abrir la carpeta en Visual Studio Code.
2. Abrir index.html con Live Server o abrir directamente en navegador.
3. Guardar cambios con Ctrl+S y recargar si no usas Live Server.


NOTA v6 ligera: se han eliminado assets no usados en HTML/CSS/JS y se han optimizado los GIFs pesados para facilitar descarga y WhatsApp.


VERSIÓN 7
- Mantiene estructura y contenido de la versión 6.
- Añade ornamentos laterales y transiciones suaves entre bloques con estética verde/dorada.
- Al pulsar "Abrir invitación", "Confirmar" o "Enviar confirmación" se intenta iniciar la música.
- Nota: por seguridad, algunos móviles/navegadores bloquean el autoplay hasta el primer toque del usuario.


VERSIÓN 8
- Mantiene contenido y estructura de la versión 6/7.
- Añade separadores HTML reales entre bloques con ondas y ornamentos visibles.
- Mejora fondos con textura de papel, veladuras cálidas y adornos verdes/dorados laterales.
- Refuerza activación de música al pulsar botones principales.


VERSIÓN 9:
- Formulario Google Forms integrado en el bloque RSVP mediante iframe.
- El invitado puede confirmar asistencia sin salir de la invitación.
- Las respuestas llegan directamente al Google Sheets vinculado al formulario.


V10: eliminados iconos rotos en invitado y cuenta atrás; ajustado bloque RSVP para ocultar cabecera/pie estándar de Google Forms y mostrar botón visual ENVIAR CONFIRMACIÓN.


CORRECCIÓN V10: Se aumenta el área visible del formulario RSVP para que aparezca la pregunta "¿Quieres dejarnos algún comentario?" antes del botón de envío oculto/personalizado.


VERSIÓN 11:
- Bloque RSVP integrado con la estética original de la web.
- Añadidas preguntas: nombres de acompañantes y servicio de autobús.
- El formulario está preparado para enviar a Google Forms mediante formResponse.
- Antes de publicar definitivamente, sustituir en script.js los entry.000000000 por los entry reales del formulario de Google.
