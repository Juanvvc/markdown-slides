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

Juanvi

jvera@incide.es

## Hoy hablamos de...
<!-- _class: cool-list -->

1. [Introducción a MARP](#3)
1. [Jugar con los estilos](#16)
1. [Tema INCIDE](#22)
1. [En el día a día](#33)
1. [Notas adicionales](#37)

Esta misma presentación sirve también como ejemplo de Marp

<!--
Desgraciadamente, este índice no parece que pueda construirse automáticamente

Por cierto, esto es una nota de orador
-->

# Introducción a MARP
<!-- _class: lead -->

## ¡Escribe presentaciones en Markdown!

```markdown
## Marp Next

Sistema para generación de presentaciones a partir de Markdown: <https://marp.app/>

Presentación final en HTML, PDF o PPTX

![center width:20em](https://raw.githubusercontent.com/marp-team/marp/master/marp.png)

- *marpit*: mini núcleo del sistema y sintaxis: <https://marpit.marp.app/>
- *marp-core*: API para Marpit: <https://github.com/marp-team/marp-core>
- *marp-vscode*: plugin para VSCode

<!--
El Marp original era una aplicación con editor incluido.
Marp Next uriliza VSCode con un plugin como editor.
-->
```

Mira el resultado en la siguiente transparencia

<!--
MARP utiliza Common Markdown, el dialecto con mayor compatibilidad y por tanto menos características de Markdown
-->

## Marp Next

Sistema para generación de presentaciones a partir de Markdown: <https://marp.app/>

Presentación final en HTML, PDF o PPTX

![center width:20em](https://raw.githubusercontent.com/marp-team/marp/master/marp.png)

- *marpit*: mini núcleo del sistema y sintaxis: <https://marpit.marp.app/>
- *marp-core*: API para Marpit: <https://github.com/marp-team/marp-core>
- *marp-vscode*: plugin para VSCode

<!--
El Marp original era una aplicación con editor incluido.
Marp Next uriliza VSCode con un plugin como editor.
-->

## Edición en VSCode
Plugin: "*Marp for VS Code*". Previsualización con `CMD+k+v`

![width:27em center](images/vscode-marp.png)

<!--
El plugin permite:

- Previsualización instantánea
- Compilación a PDF, HTML o PPTX
-->

## Compilación desde línea de comandos

```makefile
# This command only works if you have marp-cli: npm install -g @marp-team/marp-cli
# You need chrome/chromium in your system for the PDF
MARP=marp
# This command needs "marp-cli" from docker: docker pull marpteam/marp-cli
#MARP=docker run --rm --init -v "$(PWD)":/home/marp/app/ marpteam/marp-cli

# You can overwrite these from the command line
# For example: make -e THEME=marp-viu
THEME=marp-incide
THEME_SET=themes/$(THEME).css

# Convert all .md files in this directory
SRCS=$(shell find . -name '*.md')
OBJS=$(patsubst %.md,%.html,$(SRCS))

all: $(OBJS)

%.pdf: %.md
	$(MARP) "$<" -o "$@" --no-config --theme $(THEME) --theme-set "$(THEME_SET)" --pdf --allow-local-files

%.html: %.md
	$(MARP) "$<" -o "$@" --no-config --theme $(THEME) --theme-set "$(THEME_SET)" --bespoke.progress true --html

clean:
	/bin/rm -rf *.html *.pdf

.PHONY: all clean
```

## Separación entre transparencias

Por defecto, la separación se hace con una línea de tres guiones `---`

En la cabecera YAML `headingDivider: 2`, pueden usarse cabeceras para separar transparencias

Si necesitas una transparencia sin título siempre puedes usar las tres líneas `---`

<!--
Fíjate también: los textos se centran verticalmente en los temas por defecto
-->

## Listas

Las listas con guiones `-` son estáticas

- Uno
- Dos

Las listas con asteriscos `*` son dinámicas, pero solo en el HTML

* Uno
* Dos

<!--
Es decir, los asteriscos no mostrarán los items de la lista uno a uno ni en la previsualización ni en el PDF
-->

## Modo presentación

Pulsa `p` para entrar en el modo presentación y ver los comentarios, hora, siguiente transparencia...

![center w:20em](images/presentacion.png)

Dsde línea de comandos, `--bespoke.progress true` añade una barra de progreso

<!--
Esto es un comentario visible en el modo presentación

Para la barra de progreso, mira en la parte de arriba de la transparencia
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

Atributos: https://github.com/marp-team/marpit/blob/main/docs/image-syntax.md

<!--
En Marp, la parte entre corchetes [] puede contener atributos adicionales: clases para aplicar sobre la imagen, tamaños, posiciones...

Nota que esto es una diferencia con respecto a otros dialectos como HackMD o RevealJS, que usan llaves {} para los atributos adicionales.
-->

## Imágenes en el fondo: `bg`

![bg saturate:0.9 contrast:0.3 brightness:1.5](https://picsum.photos/720?image=27)

```markdown
![bg saturate:0.9 contrast:0.3 brightness:1.5](https://picsum.photos/720?image=27)
```

También se puede hacer con directivas (lo veremos)

<!--
El orden de los filtros gráficos importa. No es lo mismo desaturar y después contrastar que al revés
-->

## Imágenes en el fondo: `bg right` o `bg left`

![bg left:30% w:80% hue-rotate:120deg](https://freepngimg.com/thumb/android/58538-development-android-software-free-hd-image.png)


```markdown
![bg left:30% w:80%](https://freepngimg.com/...)
```

Si no se dice nada, la imagen ocupa **todo el alto**

Puede limitarse el ancho con `w:VALOR%`

Nota que con `bg` sí se pueden usar porcentajes

## Imágenes en el fondo: múltiples

![bg left hue-rotate:240deg](https://freepngimg.com/thumb/android/58538-development-android-software-free-hd-image.png)
![bg left hue-rotate:320deg](https://freepngimg.com/thumb/android/58538-development-android-software-free-hd-image.png)
![bg left:50%](https://freepngimg.com/thumb/android/58538-development-android-software-free-hd-image.png)


```markdown
![bg left hue-rotate:240deg](https://freepngimg.com/...)
![bg left hue-rotate:320deg](https://freepngimg.com/...)
![bg left:50%](https://freepngimg.com/...)
```

No pueden combinarse `left` y `right`

Fíjate que la última tiene **el total** que ocuparán todas

---

![bg](http://i.giphy.com/90F8aUepslB84.gif)

GIFs, videos...

Esta transparencia también es un ejemplo de nueva transparencia sin título

<!--
Nota: VSCode no soporta previsualización de GIFs cuando están en el background
-->

# Jugar con los estilos
<!--
_class: lead
_backgroundImage: url('https://cdn.shopify.com/s/files/1/0200/7466/articles/shopify-new-features_1000x.jpeg')
 -->

## Uso de directivas
<!--
_backgroundImage: url('themes/back-starline.jpg')
-->

Controla el estilo de una transparencia con [directivas](https://marpit.marp.app/directives) justo después del título.

Por ejemplo, añadir imagen de fondo:

```html
<!--
backgroundImage: url('themes/back-starline.jpg')
_backgroundImage: url('themes/back-starline.jpg')
-->
```

- Sin guion bajo, activo para esta transparencia y las siguientes.
- Con guion bajo, solo activo para esta transparencia.
- Si se ponen en la cabecera YAML, activo para todas las transparencias.

> Background: [Designed by starline / Freepik](http://www.freepik.com).

## <!-- fit --> Otros ejemplos
<!--
_header: '![width:5em grayscale invert brightness:2](https://www.incide.es/images/incide_logo.png)'
_footer: 'Pie personalizado con [enlace](http://www.incide.es)'
_backgroundImage: "linear-gradient(to bottom, #ffffff, #ffaa00)"
_color: red
-->

(incluso si hacen daño)


```markdown
# <!-- fit --> Otros ejemplos

<!--
_header: '![width:5em grayscale invert brightness:2](https://www.incide.es/images/incide_logo.png)'
_footer: 'Pie personalizado con [enlace](http://www.incide.es)'
_backgroundImage: "linear-gradient(to bottom, #ffffff, green)"
_color: red
-->
```

Hacer que el título ocupe toda la línea, degradados, pie y cabecera...

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
    li:nth-child(2) {
        border-radius: 0.15em;
        border: 2px solid #73AD21aa;
        background-color: #73AD2133;
        padding: 0.5em;
    }
    li:nth-child(3) {
        border-radius: 0.15em;
        border: 2px solid #ce5708aa;
        background-color: #ce570855;
        padding: 0.5em;
    }
</style>

- Con `scoped` esto puedes cambiar el estilo de las listas
* ...mostrar las frases poco a poco...
* ...paso a paso
* ...una a una

<!--
Fíjate: el primer item es un guion para que aparezca desde el principio
-->

---
<!-- _class: center -->

<style scoped>
li {
    list-style-type: none;
    position: absolute;
    top: 10%;
    left: 25%;
}
</style>

Ejemplo sencillo de imágenes que aparecen

* ![w:20em](https://picsum.photos/720?image=20)
* ![w:20em](https://picsum.photos/720?image=21)

# Tema INCIDE
<!--
_class: lead
-->

## Tema personalizado INCIDE
<!-- _class: smaller-font -->

`theme: marp-incide` en el preámbulo. Su path tiene que estar registrado en VSCode

- Pequeños ajustes: muestra página actual, atributo *center* para imágenes...
- Clases especiales:
    - *lead* / *lead2* / *first-slide*: inicio de sección
    - *cool-list* / *cool-list-animated* para listas especiales
    - *two-columns* / *two-columns-33*: transparencia con dos columnas
    - *two-columns-list*: lista en dos o más columnas
    - *smaller-font* / *smallest-font*: transparencia con letra más pequeña
    - *center*: centra el contenido de texto en la transparencia
    - *with-info* / *with-success*  / *with-warning*: el último párrafo es una caja *info* / *success* / *warning*

> Utiliza *blockquote* para "notas a pie de página"

## cool-list
<!-- _class: cool-list -->

1. *Uno*
    - Uno y medio
    - y tres cuartos
1. *Dos*
    1. *Dos y medio*
    1. *Dos y un poco más*
1. *Tres*

<!--
Hay que meter obligatoriamente los items entre asteriscos o enlaces

Se puede usar en el índice

-->

> Basado en: https://catalin.red/css3-ordered-list-styles/

## cool-list-animated
<!-- _class: cool-list-animated -->

<style scoped>ol { counter-reset: li 5; }</style>

Un estilo alternativo de lista

1. *Seis (nota que podemos empezar en cualquier número)*
    - `<style scoped>ol { counter-reset: li 5; }</style>`
    - y tres cuartos
1. *Siete*
    1. *y medio*
    1. *y un poco más*
1. *Ocho*

> Basado en: https://catalin.red/css3-ordered-list-styles/

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


<!--
- Cualquier elemento después del último volverá a estar en formato columnas
- Para poner párrafos en las columnas, usa listas pero oculta los puntos:

<style scoped>
ul { list-style-type: none; }
li {margin-bottom: 1em}
</style>
-->

## two-columns-33
<!--
_class: two-columns-33 with-header
_header: Header de ejemplo
_footer: Footer de ejemplo, con [link](https://www.incide.es)
-->

![](https://www.incide.es/images/incide_logo.png)

Lo mismo que `two-columns`, pero la izquierda es más estrecha

Si tienes un header, añade la clase `with-header` como en este ejemplo

## two-columns-list
<!-- _class: two-columns-list with-warning -->

<style scoped>
ul>* {
    width: 12em; /* para tres columnas */
}
ul ol {
    list-style-type: lower-latin; /* disc lower-roman decimal */
}
</style>

Se usa para listas largas que se organizan en dos o más columnas. Mira el código de esta transparencia para configuración.

- Uno, uno, uno y uno y uno y uno y uno y uno
    1. Uno
    1. Dos
- Dos
- Tres
- Cuatro
    1. Uno
- Cinco
- Seis
    1. Uno
    1. Dos
- Dos
- Tres
- Cuatro
    1. Uno
    1. Dos
- Seis
    1. Uno
    1. Dos
- Dos
- Tres
- Cuatro
    1. Uno
    1. Dos

La lista externa es ul, la interna es ol

## Listas en dos columnas con cool list
<!-- _class: cool-list with-warning smaller-font -->

<style scoped>
    ol {
        height: 20em;
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
    }
    ol>* {
        flex: 0 1 auto;
        width: 45%;
    }
</style>


No uses two-columns-list, necesita estilos especiales. Mira el código de esta transparencia

1. *Uno, uno, uno y uno y uno y uno y uno y uno*
    - y otro
    - y otro
1. *Dos*
1. *Tres*
    - y otro
    - y otro
1. *Cuatro uno*
    - y otro
    - y otro
1. *Cinco*
    - uno, uno y uno y uno y uno y uno y uno y uno y uno, uno y uno y uno y uno y uno y uno

La lista externa es ol, la interna ul

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

Por supuesto, puedes añadir fórmulas matemáticas, tanto en párrafos como inline $2 \times 2 = 4$ y también utilizar emojis 🙆  🏃 💓  y símbolos ⇛ ❤ ⚝

<!--
La diferencia entre emojis y símbolos es operativa de editores de texto: mientras que los emojis se entrar escribiendo :emoji:, los símbolos se copianpegan de alún sitio como https://unicode-table.com. En realidad, todo es unicode.

En la lista anterior he usado adrede símbolos que la fuente por defecto no tiene instalada, para probar cómo salen
-->

## Cajas: *warning*
<!-- _class: with-warning -->

```html
<!-- _class: with-warning -->
```

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vel quam lobortis, egestas ex eu, dictum nisi. Nullam accumsan magna augue, vitae tempor arcu porttitor quis.

⚠ Solo puede haber una caja *warning*, *info* o *success* por transparencia. Solo el último párrafo se mete en una caja.

# En el día a día
<!--
_class: lead
_backgroundImageAlternate: url('https://www.incide.es/images/incide_office.jpg')
_backgroundImage: url('https://cdn.shopify.com/s/files/1/0200/7466/files/shopify-new-features-research.jpeg')
header: En el día a día
 -->

 Sí, puedes añadir fondos personalizados a los inicios de secciones

## Comparando con RevealJS
<!-- _class: with-info-->

- Marp no ofrece animaciones entre transparencias, RevealJS sí
- Las transparencias de Marp tienen cabeceras y pies
- HackMD no soporta directamente Marp, pero sí RevealJS
- El plugin para VSCode de Marp es superior y eso convierte a Marp (**¡opinión!**) en más productivo: exportación a PDF perfecta, preview más rápido
- RevealJS tiene ayudas espectaculares durante la presentación: alarmas, modo pizarra, movimiento en dos dimensiones...
- Los temas Marp los tengo **mucho** más desarrollados

**Mi opinión**: es mucho más rápido **escribir** una presentación tradicional en Marp, pero es más fácil y dinámico **presentar** con RevealJS.

<!--
Las animaciones entre transparencias las tiene que ofrecer "una librería de alto nivel" que use Marp: https://github.com/marp-team/marp-core/issues/110 
-->

## Convertir de RevealJS a Marp y viceversa
<!-- _class: two-columns with-header -->

- Casi todas las transparencias podrán copiarse sin más
- Sintaxis diferente, pero similar, en imágenes y clases especiales
- Las transparencias que utilicen cosas específicas como animaciones tendrán que repensarse

![width:15em](https://i.kym-cdn.com/photos/images/original/000/058/092/wololooooooooooooooooooooo20110724-22047-dccquj.gif)

> Ejemplo de *two-columns* con imagen, alternativa a `bg right`

## Ejemplos de conversiones

RevealJS:

```markdown
< !-- .slide:data-state="lead" -->
# Título

![](imagen.jpg){width=70%}
```

Marp:

```markdown
# Título
< !-- _class: lead -->

![width:20em](imagen.jpg){}
```

# Notas adicionales
<!--
_class: lead
header: Notas adicionales
-->

---

- En 2021, las transparencias son simples y sin animaciones
- No luches contra el sistema de presentaciones: si no puedes hacer algo, no pierdas demasiado tiempo buscando cómo
- Puedes usar `header: Título de sección` como directiva en las transparencias de sección

## Pizarra

Puede añadirse JavaScript genérico en la última transparencia

```html
<script src="whiteboard.js"></script>
```

Por ejemplo, modo pizarra (experimental):

- `n`: pizarra transparente
- `k`: pizarra negra
- `c`: limpia la pizarra
- `1`, `2`, `3`, `4`, `5`: colores


<script src="whiteboard.js"></script>