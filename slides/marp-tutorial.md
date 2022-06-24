---
# Activate Marp mode in VSCode (preview on the right)
marp: true
# Metadata, in HTML and PDF
title: Píldoras INCIDE - Introducción a MARP
description: Introducción a MARP y ejemplos de tema personalizado
author: Juan Vera
keywords: marp,tutorial,incide
# Configuration
theme: marp-incide
paginate: true
headingDivider: 2
# Example of additional configuration
#backgroundImage: url("themes/back-starline.jpg")
#backgroundColor: #eef
#size: 4:3
# slide transition is experimental in Marp 1.4.0 and only works in Chrome
# available effects: fade reveal cover implode explode
transition: fade
---

<style>
    /* You can add custom style here. VSCode supports this.
    Other editor might need these custom code in
    the YAML header: style: | */
</style>


# Píldoras INCIDE
<!-- _class: first-slide -->

**Presentaciones en Markdown con MARP**

Juanvi - jvera@incide.es

## Hoy hablamos de...
<!-- _class: cool-list -->

1. [Introducción a MARP](#3)
1. [Jugar con los estilos](#16)
1. [Tema INCIDE](#22)
1. [En el día a día](#33)
1. [Notas adicionales](#38)

Esta misma presentación sirve también como ejemplo de Marp

<!--
Los identificadores en los enlaces son páginas. Podría usarse el tradicional <a id="enlace"></a>, pero me parece muy incómodo y contra el espíritu de markdown

Por cierto, esto es una nota de orador. Aparecen pulsando P... pero solo si el HTML no se ha abierto con protocolo file://.

También aparecen en el PDF como annotations. Algunos visores PDF como pympress o el PDF de OSX aceptan anotaciones, pero otros como Okular no.
-->

# Introducción a MARP
<!-- _class: lead -->

## ¡Escribe presentaciones en Markdown!

```markdown
## Marp Next

Presentaciones HTML, PDF y PPTX en Markdown

[![center width:20em](https://raw.githubusercontent.com/marp-team/marp/master/marp.png)](https://marp.app/)

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

Presentaciones HTML, PDF y PPTX en Markdown

[![center width:20em](https://raw.githubusercontent.com/marp-team/marp/master/marp.png)](https://marp.app/)

- [marpit](https://marpit.marp.app/): mini núcleo del sistema y documentación
- [marp-core](https://github.com/marp-team/marp-core): API para Marpit para programadores
- [Marp for VS Code](https://marketplace.visualstudio.com/items?itemName=marp-team.marp-vscode): plugin para VSCode

<!--
El Marp original era una aplicación con editor incluido.
Marp Next utiliza VSCode con un plugin como editor.
-->

## Edición en VSCode

![width:27em center](images/vscode-marp.png)

Plugin: "*Marp for VS Code*". Previsualización con `CMD+k+v`

<!--
El plugin permite:

- Previsualización instantánea
- Compilación a PDF, HTML o PPTX. PDF y PPTX necesitan tener instalado Chrome
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
THEME_SET=themes
THEME_OPTS=--theme $(THEME) --theme-set "$(THEME_SET)"

# Convert all .md files in this directory
SRCS=$(shell find . -name '*.md')
OBJS=$(patsubst %.md,%.html,$(SRCS))

all: $(OBJS)

%.pdf: %.md
	$(MARP) "$<" -o "$@" --no-config $(THEME_OPTS) --pdf --allow-local-files --html --pdf-notes

%.html: %.md
	$(MARP) "$<" -o "$@" --no-config $(THEME_OPTS) --bespoke.progress true --html
	#--bespoke.transition

clean:
	/bin/rm -rf *.html *.pdf

.PHONY: all clean
```

<!--
Además, la opción -p abre una ventana de navegador, y la opción -s un servidor que se queda escuchando para cambios.
-->

## Separación entre transparencias

Por defecto, la separación se hace con una línea de tres guiones `---`

`headingDivider: 2` en YAML: usa cabeceras para separar transparencias

Si necesitas una transparencia sin título siempre puedes usar las tres líneas `---`

<!--
Fíjate también: los textos se centran verticalmente en los temas por defecto

En esta presentación de ejemplo se utilizan los títulos para separar transparencias porque me parece más cómodo. Fíjate en el headingDivider de la cabecera YAML de esta presentación
-->

## Listas

Las listas con guiones `-` o con `1.` son estáticas

- Uno
- Dos
- Tres

Las listas con asteriscos `*` o con `1)` son animadas, pero solo en el HTML

* Uno
* Dos
* Tres

<!--
Es decir, los asteriscos no mostrarán los items de la lista uno a uno ni en la previsualización ni en el PDF

Puedes combinar - y * en la misma lista, y así algunos items aparecen siempre, si quieres.
-->

## Modo speaker

Pulsa `p` para entrar en el modo *speaker*: comentarios, hora, siguiente transparencia...

![center w:22em](images/presentacion.png)


<!--
Esto es un comentario visible en el modo presentación

Desde línea de comandos, `--bespoke.progress true` añade una barra de progreso. Mira en la parte de arriba de la transparencia
-->

## Imágenes en el interior

![center](https://www.incide.es/images/incide_logo.png)
![width:50px](https://www.incide.es/images/incide_logo.png)
![w:5em](https://www.incide.es/images/incide_logo.png)

```markdown
![center](https://www.incide.es/images/incide_logo.png)
![width:50px](https://www.incide.es/images/incide_logo.png)
![w:15em](https://www.incide.es/images/incide_logo.png) 
```

Tamaños: pixeles y em, pero no porcentajes

Hay muchos [atributos disponibles](https://github.com/marp-team/marpit/blob/main/docs/image-syntax.md)

<!--
En Marp, la parte entre corchetes [] puede contener atributos adicionales: clases para aplicar sobre la imagen, tamaños, posiciones...

Nota que esto es una diferencia con respecto a otros dialectos como HackMD o RevealJS, que usan llaves {} para los atributos adicionales.

Puedes usar width o w, height o h
-->

## Imágenes en el fondo: atributo `bg`

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
<!-- _color: #bbb -->

![bg](http://i.giphy.com/90F8aUepslB84.gif)

GIFs, videos...

Esta transparencia también es un ejemplo de nueva transparencia sin título

<iframe width="400" height="300" src="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
</iframe>


<!--
Nota: VSCode no soporta previsualización de GIFs cuando están en el background

Los vídeos necesitan la activación del código HTML en VSCode o en línea de comandos (mira el Makefile). En local, pueden no funcionar si abres la presentación con protocolo file://

También puedes usar etiqueda <video> para vídeos en local
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

Controla el estilo de una transparencia con [directivas](https://marpit.marp.app/directives) justo después del título

Por ejemplo, añadir imagen de fondo:

```html
<!--
backgroundImage: url('themes/back-starline.jpg')
_backgroundImage: url('themes/back-starline.jpg')
-->
```

- En la cabecera YAML, activo para todas las transparencias
- Sin guion bajo, activo **a partir de ahora** en todas las transparencias
- Con guion bajo, solo activo en la transparencia actual


> Background: [Designed by starline / Freepik](http://www.freepik.com).

## <!-- fit --> Otros ejemplos
<!--
_header: 'Cabecera con imagen ![width:5em grayscale invert brightness:2](themes/incide/incide_logo.png)'
_footer: 'Pie personalizado con [enlace](http://www.incide.es)'
_backgroundImage: "linear-gradient(to bottom, #67b8e3, #F288d1)"
_color: #fff
-->

<style scoped>code {color: black;} </style>


```
# <!-- fit --> Otros ejemplos

<!--
_header: 'Cabecera con imagen ![width:5em grayscale invert brightness:2](themes/incide/incide_logo.png)'
_footer: 'Pie personalizado con [enlace](http://www.incide.es)'
_backgroundImage: "linear-gradient(to bottom, #67b8e3, #F288d1)"
_color: #fff
-->
```

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

<!-- Solo lo pongo como ejemplo, la idea de los temas personalizados en no necesitar (casi nunca) esto -->

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

- Con `scoped` puedes por ejemplo cambiar completamente el estilo de las listas
* ...mostrar las frases poco a poco...
* ...paso a paso
* ...una a una
* imagino que ya entiendes la idea

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

Ejemplo sencillo de imágenes que aparecen en el centro

* ![w:20em](https://picsum.photos/720?image=20)
* ![w:20em](https://picsum.photos/720?image=21)

<!-- ejemplo de qué puede hacerse pero no recomiendo su uso -->

# Tema INCIDE
<!--
_class: lead
-->

## Tema personalizado INCIDE
<!-- _class: with-info -->

`theme: marp-incide` en el preámbulo

En opciones de VSCode -> Marp, hay que incluir el *path* al tema

**Idea principal**: que todo sea Markdown, y solo cambiar "la clase" (el layout) de la transparencia

![bg right w:95%](themes/incide/incide_logo.png)

## Clases / layouts especiales

- *lead* / *lead2* / *first-slide* | *last-slide*: inicio de sección. Ya hemos visto ejemplos
- *cool-list* / *cool-list2* para listas especiales
- *two-columns* / *two-columns-33*: transparencia con dos columnas
- *two-columns-list*: lista en dos o más columnas
- *smaller-font* / *smallest-font*: transparencia con letra más pequeña
- *center*: centra el contenido de texto en la transparencia
- *with-info* / *with-success*  / *with-warning*: el último párrafo es una caja *info* / *success* / *warning*

> Utiliza *blockquote* para "notas a pie de página"
> También incluye pequeños ajustes: muestra página actual, logotipo, atributo *center* para imágenes...


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

## cool-list2
<!-- _class: cool-list2 -->

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

<style scoped>ul {list-style-type: none;}</style>

![](https://www.incide.es/images/incide_logo.png)

- Lo mismo que `two-columns`, pero la izquierda es más estrecha
- Fíjate que aunque este elemento es una lista, puedes desactivar los puntos con `<style scoped>ul {list-style-type: none;}</style>`

Si tienes un header, añade la clase `with-header` como en este ejemplo

## two-columns-list
<!-- _class: two-columns-list with-warning smaller-font -->

<style scoped>
    ol {
        height: 17em; /* alto de la lista */
        list-style-type: disc; /* Discos en vez de números para la lista externa */
    }
    ol>* {
        width: 5em; /* ancho de una columna */
    }
</style>

Listas largas que se organizan en dos o más columnas. Mira el código de esta transparencia para configuración

1. Uno, uno, uno y uno y uno y uno y uno y uno
    - Uno
    - Dos
1. Dos
1. Tres
1. Cuatro
    - Uno
1. Cinco
1. Seis
    - Uno
    - Dos
1. Siete
1. Ocho
1. Nueve
    - Uno
    - Dos
1. Diez
    - Uno
    - Dos
1. Once
1. Doce
1. Trece
    - Uno
    - Dos

La lista externa es *ol*, la interna es *ul*. Al revés no funciona

## two-columns-list y cool-list
<!-- _class: two-columns-list cool-list with-warning smaller-font -->

Puedes combinar *two-columns-list* y *cool-list*

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

En este caso no puedes usar listas *ol* internas

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
<!-- _class: with-info smaller-font -->

- Marp no ofrece animaciones entre transparencias, RevealJS sí
    - Esto puede cambiar cuanto se adopte la [Element Transition API](https://developer.chrome.com/blog/shared-element-transitions-for-spas/) en los navegadores. La versión 1.4.0 (2021) de Marp ya incluye animaciones pero solo en Chrome
- HackMD no soporta directamente Marp, pero sí RevealJS
- El plugin para VSCode de Marp es **muy** superior y eso convierte a Marp (**¡opinión!**) en más productivo: exportación a PDF perfecta, preview más rápido
- RevealJS tiene ayudas espectaculares durante la presentación: alarmas, modo pizarra, movimiento en dos dimensiones...
- RevealJS es mucho más flexible con el layout de una transparencia, a cambio de escribir más HTML
- Los temas Marp los tengo mucho más desarrollados

**Mi opinión**: es mucho más rápido **ESCRIBIR** una presentación tradicional en Marp, pero es más fácil y dinámico **PRESENTAR** con RevealJS.

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

- En 2022, las transparencias son simples, sin sombras, sin animaciones...
- No luches contra el sistema de presentaciones: si no puedes hacer algo, no pierdas demasiado tiempo buscando cómo
- Puedes usar `header: Título de sección` como directiva en las transparencias de sección y aparecerá a partir de ese momento. Mira el header de esta transparencia
- <http://www.jilles.net/perma/2020/06/05/presentation-rules.html>

## Pizarra

Puede añadirse JavaScript genérico en la última transparencia

```html
<script src="whiteboard.js"></script>
```

Por ejemplo, modo pizarra (experimental):

- `n`: activa pizarra transparente
- `k`: activa pizarra negra
- `c`: vuelve al modo normal
- `1`, `2`, `3`, `4`, `5`: colores

# ¡Gracias!
<!-- _class: last-slide -->


<script src="whiteboard.js"></script>

<!--
Para que funcione la pizarra tienes que activar el código HTML.

Mira el Makefile
-->
