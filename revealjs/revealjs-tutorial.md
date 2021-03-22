---
title: "RevealJS intro"
theme : "white"
transition: "slide"
# otras transiciones: fade, convex, concave, zoom, none
highlightTheme: "monokai"
customTheme: "themes/revealjs-incide"
notesSeparator: "Note:"
slideNumber: true
---

# Introducción a RevealJS
<!-- .slide:class="first-slide" -->

---

## RevealJS

<https://revealjs.com/>

![](https://hakim-static.s3.amazonaws.com/reveal-js/logo/v1/reveal-black-text.svg){width=50% .center}

- RevealJs está especialmente pensado para escribirse con HTML
- Markdown es "un extra", y no todo es accesible
- La sintaxis exacta Markdown depende de qué paser use tu compilador. Diferentes sistemas (pandoc, hackmd...) parsean diferente.


Note:
Estas son notas de orador. Algunos atajos: S: muestra notas de orador en otra ventana; B: modo pizarra; C: modo bolígrafo; Ctrl+Click (Linux) o Alt+Click (Windows) para zoom

---

## Escritura en VScode

Plugin: reveal-markdown o vscode-reveal

![](images/vscode-revealjs.png)

---

## Separación entre transparencias

- La separación entre transparencias horizontales se hace con una línea de tres guiones `---`.
- Pero RevealJS también tiene transparencias verticales, separadas con dos `--` o cuatro guiones `----`, dependiendo de quién lo parsee. Se pueden usar, por ejemplo:
    - secciones en horizontal, transparencias de sección en vertical
    - transparencias normales en horizontal, de detalle "me alegra que me haga esa pregunta" en vertical.

---

## Listas

Por defecto las elementos son estáticos, pero se puede añadir animación:

- fade-in {.fragment}
- fade-out {.fragment .fade-out}
- fade-left {.fragment .fade-left}
- fade-right {.fragment .fade-right}
- fade-in-then-out{.fragment .fade-in-then-out}
- fade-in-then-semi-out {.fragment .fade-in-then-semi-out}
- current-visible {.fragment .current-visible}
- Highlight red{.fragment .highlight-red}

---

## Imágenes en el interior

![](https://www.incide.es/images/incide_logo.png){width=50px}

<center><img src="themes/incide/incide_logo.png" style="width:10em" /></center>

```markdown
<center>

![](https://www.incide.es/images/incide_logo.png){width=50px}
</center>

<center><img src="themes/incide/incide_logo.png" style="width:10em" /></center>
```

Dónde, cómo y en qué unidades indicar el tamaño en el Markdown depende del parser exacto que se esté usando. La versión HTLM debería funcionar siempre.

Note:
El espacio después de `<center>` es necesario si la imagen tiene atributos especiales, así que es recomendable ponerlo siempre.

---

## Imágenes en el lateral

![](https://picsum.photos/720?image=3){.bg-left}

Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum 

---

## Imágenes en el fondo
<!-- .slide:data-background-image="https://picsum.photos/720?image=3" data-background-opacity="0.5" -->


Para toda la presentación se pueden activar en la cabecera YAML:

```
background-image="themes/back-starline.jpg"
```

Background: [Designed by starline / Freepik](http://www.freepik.com).

--

## Imágenes en el fondo
<!-- .slide:data-background-image="http://i.giphy.com/90F8aUepslB84.gif" -->

GIFs, videos...

---

## Tablas

|             |          Grouping           ||
First Header  | Second Header | Third Header |
 ------------ | :-----------: | -----------: |
Content       |          *Long Cell*        ||
Content       |   **Cell**    |      Merged |
Content       |     More      |          ^^ |
Content       | With an escaped '\\|'       ||

---

# Tema INCIDE
<!-- .slide:data-state="lead" -->

---

## Tema personalizado INCIDE

- Actívalo con `customTheme: "revealjs-incide"` en el preámbulo.
- Hay algunas clases especiales para transparencias
    - *lead*: inicio de sección (ejemplo en la transparencia anterior)
    - *two-columns*: transparencia con dos columnas
    - *two-coluns-33*: transparencia con dos columnas, la de la izquierda es más pequeña
    - *smaller-font* / *smallest-font*: letra más pequeña

--

<!-- .slide:data-state="two-columns" -->
## two-columns

Uno|Dos|Tres|Cuatro|Cinco
--|--|--|--|--
1|2|3|4|5
1|2|3|4|5

- `<!-- .slide:data-state="two-columns" -->`
- La columna de la izquierda tiene que ser una lista, código, tabla, párrafo o imagen. Es decir, un elemento único.
- La columna de la derecha también

El siguiente elemento único va después de todo y se extiende hasta el final de la transparencia.

--

## two-columns-33
<!-- .slide:data-state="two-columns-33" -->

![](https://www.incide.es/images/incide_logo.png)

Lo mismo que `two-columns`, pero la izquierda es más estrecha

--

## smaller-font
<!-- .slide:data-state="smaller-font" -->

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vel quam lobortis, egestas ex eu, dictum nisi. Nullam accumsan magna augue, vitae tempor arcu porttitor quis. Nam sit amet turpis sit amet tellus lacinia convallis. Nam suscipit sollicitudin orci, quis vehicula velit. Pellentesque viverra lacus nec velit fermentum suscipit sit amet eu erat. Mauris finibus massa eu eros luctus, nec congue velit lobortis. Quisque rhoncus velit porta tristique consectetur.

Praesent sagittis facilisis ex in facilisis. Curabitur vel vulputate libero. Sed leo metus, maximus non lectus non, vestibulum scelerisque ipsum. Nunc convallis, felis vitae commodo iaculis, tellus nisl sollicitudin ligula, quis consectetur sem tellus vitae lorem. Duis rhoncus tristique volutpat. Nunc erat ante, pellentesque non ligula id, gravida vehicula lacus. Aliquam mattis, sem at suscipit tincidunt, magna mauris bibendum ex, a ultrices ante justo ac nisl. Aliquam auctor, diam id iaculis gravida, ante velit porttitor dolor, nec convallis enim est eget metus. Integer posuere, neque id convallis egestas, dui dolor posuere nulla, vehicula fermentum arcu orci ut justo. Vestibulum tincidunt, massa tincidunt pharetra ultrices, nisi velit tincidunt mauris, quis maximus sapien dolor vel est. Donec tempor elit sed lacinia fringilla. Morbi interdum ullamcorper nisi, porttitor venenatis eros porta at. Mauris tincidunt arcu a massa maximus maximus.

---

# En el día a día
<!-- .slide:data-state="lead" -->

---

## Comparando con Marp

- Marp no ofrece animaciones entre transparencias, RevealJS sí.
- Las transparencias de Marp tienen cabeceras y pies
- HackMD soporta RevealJS.
- El plugin para VSCode de Marp es superior y eso convierte a Marp (**¡opinión!**) en más productivo: exportación a PDF perfecta, preview más rápido
- RevealJS tiene ayudas durante la presentación: alarmas, modo pizarra, movimiento en dos dimensiones...

Note:
Las animaciones entre trasparencias las tiene que ofrecer "una librería de alto nivel" que use Marp: https://github.com/marp-team/marp-core/issues/110 

Mi opinión: es más rápido escribir una presentación tradicional en Marp, pero es más fácil y dinámico presentar con RevealJS.

---

## Convertir de RevealJS a Marp y viceversa
<!-- .slide:data-state="two-columns" -->

- Casi todas las transparencias podrán copiarse sin más
- Sintaxis diferente, pero similar, en imágenes y clases especiales
- Las transparencias que utilicen cosas específicas como animaciones tendrán que repensarse

![](https://i.kym-cdn.com/photos/images/original/000/058/092/wololooooooooooooooooooooo20110724-22047-dccquj.gif){width=70%}


--

## Ejemplos de conversiones

RevealJS:

```
< !-- .slide:data-state="lead" -->
# Título

![](imagen.jpg){width=70%}
```

Marp:

```
< !-- _class: lead -->
# Título

![width:20em](imagen.jpg){}
```