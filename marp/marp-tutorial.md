---
marp: true
paginate: true
title: Píldoras INCIDE - Intróducción a MARP
theme: marp-incide
headingDivider: 2
---

<style>
    /* You can add custom style here. VSCode supports this.
    Other editor might need these custom code in
    the YAML header: section: | */
</style>


# Píldoras INCIDE
<!-- _class: first-slide -->

**Presentaciones en Markdown con MARP**

Juan Vera

jvera@incide.es

## Hoy hablamos de...

- [Introducción a MARP](#3)
- [Jugar con los estilos](#14)
- [Tema INCIDE](#18)
- [En el día a día](#25)

<!--
Desgraciadamente, este índice no parece que pueda construirse automáticamente...

Por cierto, esto es una nota de orador
-->

# Introducción a MARP
<!-- _class: lead -->

## Marp Next

Sistema para generación de presentaciones a partir de Markdown: <https://marp.app/>

Presentación final en HTML, PDF o PPTX

![center width:20em](https://raw.githubusercontent.com/marp-team/marp/master/marp.png)

- *marpit*: mini núcleo del sistema y sintaxis: <https://marpit.marp.app/>
- *marp-core*: API para Marpit: <https://github.com/marp-team/marp-core>
- *marp-vscode*: plugin para VSCode

<!--
El Marp original era una aplicación con editor incluido. Ya no está soportado, en favor de usar VSCode como editor.
-->

## Edición en VSCode

Plugin: Marp for VS Code

![width:27em center](images/vscode-marp.png)

## Separación entre transparencias

Por defecto, la separación se hace con una línea de tres guiones `---`

Si se añade `headingDivider: 2` en la cabecera YAML, pueden usarse cabeceras niveles 1 y 2 para separar transparencias

Si necesitas una trasparencia sin título siempre puedes usar las tres líneas `---`

## Listas

Las listas con guiones `-` son estáticas

- Uno
- Dos

Las listas con asteriscos `*` son dinámicas, pero solo en el HTML

* Uno
* Dos

## Modo presentación

Pulsa `p` para entrar en el modo presentación y ver los comentarios, hora, siguiente transparencia...

![center w:20em](images/presentacion.png)

Además, desde línea de comandos, `--bespoke.progress true` añade una muy útil barra de progreso

<!--
Esto es un comentario visible en el modo presentación
-->

## Imágenes en el interior

![center](https://www.incide.es/images/incide_logo.png)
![width:50px](https://www.incide.es/images/incide_logo.png)
![width:5em](https://www.incide.es/images/incide_logo.png)

```markdown
![center](https://www.incide.es/images/incide_logo.png)
![width:50px](https://www.incide.es/images/incide_logo.png)
![width:15em](https://www.incide.es/images/incide_logo.png) 
```

Tamaños: pixeles y em, pero **no** porcentajes

## Imágenes en el fondo

![bg brightness:1.5 saturate:0.5](https://picsum.photos/720?image=29)

```
![bg brightness:1.5 saturate:0.5](https://picsum.photos/720?image=29)

También se puede hacer con directivas, como se verá más adelante.
```

## Imágenes en el fondo: izquierda

![bg left left:30%](themes/incide/lead-2.jpg)

## Imágenes en el fondo: múltiples

![bg right](https://picsum.photos/720?image=3)
![bg right](https://picsum.photos/720?image=20)

```
![bg right](https://picsum.photos/720?image=3)
![bg right](https://picsum.photos/720?image=20)
```

---

![bg](http://i.giphy.com/90F8aUepslB84.gif)

GIFs, videos...

Esta transparencia también es un ejemplo de nueva transparencia sin título

# Jugar con los estilos
<!--
_class: lead
_backgroundImage: url('https://cdn.shopify.com/s/files/1/0200/7466/articles/shopify-new-features_1000x.jpeg')
 -->

## Uso de directivas
<!--
_backgroundImage: url('themes/back-starline.jpg')
-->


Cambia los estilos con [directivas](https://marpit.marp.app/directives), comentarios justo después del título.

Por ejemplo, añadir imagen de fondo:

```
<!--
_backgroundImage: url('themes/back-starline.jpg')
backgroundImage: url('themes/back-starline.jpg')
-->
```

- Sin guion bajo, activo para esta trasparencia y las siguientes.
- Con guion bajo, solo activo para esta trasparencia.
- Si se ponen en la cabecera YAML, activo para todas las trasparencias.

> Background: [Designed by starline / Freepik](http://www.freepik.com).

## <!-- fit --> Otros ejemplos
<!--
_header: '![width:5em grayscale invert brightness:2](https://www.incide.es/images/incide_logo.png)'
_footer: 'Pie personalizado con [enlace](http://www.incide.es)'
_backgroundImage: "linear-gradient(to bottom, #ffffff, #ffaa00)"
_color: red
-->


```markdown
# <!-- fit --> Otros ejemplos

<!--
_header: '![width:5em grayscale invert brightness:2](https://www.incide.es/images/incide_logo.png)'
_footer: 'Pie personalizado con [enlace](http://www.incide.es)'
_backgroundImage: "linear-gradient(to bottom, #ffffff, green)"
_color: red
-->
```

El título ocupa toda la línea, muchos colores, pie y cabecera...

## Si quieres personalización total...

<style scoped>
    .mycustomspan {
        border: solid 1px orange;
        background-color: red;
        color: white;
    }
    p:nth-of-type(2) { text-align: center; margin: 0 2em 0 2em; color: green; }
    section::before{ background-image:  none;}
</style>

```html
<style scoped>
    .mycustomspan {
        border: solid 1px orange;
        background-color: red;
        color: white;
    }
    /* segundo párrafo verde y centrado */
    p:nth-of-type(2) { text-align: center; margin: 0 2em 0 2em; color: green; }
    /* sin logo */
    section::before{ background-image:  none;}
</style>

Esto es un párrafo <span class="mycustomspan">y esto unas cuantas palabras</span>.
```

Esto es un párrafo <span class="mycustomspan">y esto unas cuantas palabras</span>.

Para que funcione el `span` se tiene que activar `--html` en las opciones del compilador Marp o en la sección Marp de VSCode. Es un riesgo si abres presentaciones de atacantes, porque pueden incluir cualquier script

---

<style scoped>
    li { list-style-type: none}
</style>

- Con `scoped` esto puedes hacer cosas como estas
* ...mostrar las frases poco a poco...
* ...paso a paso
* pero no se me ocurre cómo animar imágenes

# Tema INCIDE
<!--
_class: lead
-->

## Tema personalizado INCIDE
<!-- _class: smaller-font -->

`theme: marp-incide` en el preámbulo. Su path tiene que estar registrado

- Página actual. Mira el CSS para poner también totales
- Atributo *center* para imágenes
- Clases especiales:
    - *lead* / *lead2* / *first-slide*: inicio de sección
    - *two-columns*: transparencia con dos columnas
    - *two-columns-33*: transparencia con dos columnas, la de la izquierda es más pequeña
    - *smaller-font* / *smallest-font*: transparencia con letra más pequeña
    - *center*: centra el contenido de texto
    - *with-info* / *with-success*  / *with-warning*: el último párrafo es una caja *info* / *success* / *warning*

> Utiliza *blockquote* para "notas a pie de página"

## two-columns
<!-- _class: two-columns -->

Uno|Dos|Tres|Cuatro|Cinco
--|--|--|--|--
1|2|3|4|5
1|2|3|4|5

- `<!-- _class: two-columns -->`
- La columna de la izquierda tiene que ser una lista, código, tabla, párrafo o imagen. Es decir, un elemento único.
- La columna de la derecha también

El siguiente elemento único va después de todo y se extiende hasta el final de la transparencia.

## two-columns-33
<!--
_class: two-columns-33 with-header
_header: Header de ejemplo
_footer: Footer de ejemplo, con [link](https://www.incide.es)
-->

![](https://www.incide.es/images/incide_logo.png)

Lo mismo que `two-columns`, pero la izquierda es más estrecha

Si tienes un header, añade la clase `with-header` como en este ejemplo

## <!-- fit --> smallest-font
<!-- _class: smallest-font center with-info -->

(y también ejemplo de título *fit* y clase *center* y *with-info*)

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vel quam lobortis, egestas ex eu, dictum nisi. Nullam accumsan magna augue, vitae tempor arcu porttitor quis. Nam sit amet turpis sit amet tellus lacinia convallis. Nam suscipit sollicitudin orci, quis vehicula velit. Pellentesque viverra lacus nec velit fermentum suscipit sit amet eu erat. Mauris finibus massa eu eros luctus, nec congue velit lobortis. Quisque rhoncus velit porta tristique consectetur. Praesent sagittis facilisis ex in facilisis. Curabitur vel vulputate libero. Sed leo metus, maximus non lectus non, vestibulum scelerisque ipsum. Nunc convallis, felis vitae commodo iaculis, tellus nisl sollicitudin ligula, quis consectetur sem tellus vitae lorem. Duis rhoncus tristique volutpat. Nunc erat ante, pellentesque non ligula id, gravida vehicula lacus.

Tambien está la clase `smaller-font`, que es un poco más grande.

## Cajas: *success*
<!-- _class: with-success -->

```html
<!-- _class: with-success -->
```

 $$
 \begin{aligned}
 c_1 \oplus c_2  &= (k_{\text{g}} \oplus m_1) \oplus (k_{\text{g}} \oplus m_2) \\
    &= k_{\text{g}} \oplus m_1 \oplus k_{\text{g}} \oplus m_2 \\
    &= k_{\text{g}} \oplus k_{\text{g}} \oplus m_1 \oplus m_2 \\
    &= (k_{\text{g}} \oplus k_{\text{g}}) \oplus (m_1 \oplus m_2) \\
    &= (\{000\cdots000\}) \oplus (m_1 \oplus m_2) \\
    &= m_1 \oplus m_2
\end{aligned}
$$

Por supuesto, puedes añadir fórmulas matemáticas: $2 \times 2 = 4$

## Cajas: *warning*
<!-- _class: with-warning -->

```html
<!-- _class: with-warning -->
```

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vel quam lobortis, egestas ex eu, dictum nisi. Nullam accumsan magna augue, vitae tempor arcu porttitor quis.

Solo puede haber una caja *warning*, *info* o *success* por transparencia. Solo el último párrafo se mete en una caja.

# En el día a día
<!--
_class: lead
_backgroundImageAlternate: url('https://www.incide.es/images/incide_office.jpg')
_backgroundImage: url('https://cdn.shopify.com/s/files/1/0200/7466/files/shopify-new-features-research.jpeg')
 -->

 Sí, puedes añadir fondos personalizados a los inicios de secciones

## Comparando con RevealJS
<!-- _class: with-info -->

- Marp no ofrece animaciones entre transparencias, RevealJS sí
- Las transparencias de Marp tienen cabeceras y pies
- HackMD no soporta directamente Marp, pero sí RevealJS
- El plugin para VSCode de Marp es superior y eso convierte a Marp (**¡opinión!**) en más productivo: exportación a PDF perfecta, preview más rápido
- RevealJS tiene ayudas espectaculares durante la presentación: alarmas, modo pizarra, movimiento en dos dimensiones...
- Los temas MARP los tengo **mucho** más desarrollados

**Mi opinión**: es mucho más rápido escribir una presentación tradicional en Marp, pero es más fácil y dinámico presentar con RevealJS.

<!--
Las animaciones entre trasparencias las tiene que ofrecer "una librería de alto nivel" que use Marp: https://github.com/marp-team/marp-core/issues/110 
-->

## Convertir de RevealJS a Marp y viceversa
<!-- _class: two-columns -->

- Casi todas las transparencias podrán copiarse sin más
- Sintaxis diferente, pero similar, en imágenes y clases especiales
- Las transparencias que utilicen cosas específicas como animaciones tendrán que repensarse

![width:15em](https://i.kym-cdn.com/photos/images/original/000/058/092/wololooooooooooooooooooooo20110724-22047-dccquj.gif)

## Ejemplos de conversiones

RevealJS:

```markdown
< !-- .slide:data-state="lead" -->
# Título

![](imagen.jpg){width=70%}
```

Marp:

```markdown
< !-- _class: lead -->
# Título

![width:20em](imagen.jpg){}
```

<script src="whiteboard.js"></script>
