# Web Components

Web Components with Stencil JS

## Run

```

> cd web-components
> npm install
> npm start

```

## CLI:

```
npm init stencil
> cd web-components
> npm install
> npm start

$ npm start
$ npm run build
$ npm test

npm run generate folder/company-button
npm run generate wc-card → Created in components folder
npx stencil generate app-detail


Existing Project:

npm install
$ npm start

ALL SETUP:

> npm start
Starts the development server.

> npm run build
Builds your components/app in production mode.

> npm test
Starts the test runner.

We suggest that you begin by typing:

> cd web-components
> npm install
> npm start

```

## Boilerplate

```
Boilerplate → Stencil → web-components
```

## Componentes

```
usar prefijos para crear los componentes:

prefijo-button
company-input

wc = web component
wc-card



```

## Convención de nomenclatura de diseño CSS BEM

* **https://programmerclick.com/article/49581004023/**
* **https://codepen.io/lucasmourelle/pen/xxpaXP**
* **https://csswizardry.com/2013/01/mindbemding-getting-your-head-round-bem-syntax/**

```
BEM significaBlock-Element-Modifier:

/* Convención BEM para clases de CSS */

/* Blocks */
.block { }

/* Elements */
.block__element { }

/* Modifiers */
.block__element--modifier { }


/* Algunos ejemplos */
.modal { }
.modal__header { }
.modal__header--error { }
.modal__content { }
.modal__buttons__button--default { }
.modal--alert__content { }


/* 
Basado en artículo: 
https://csswizardry.com/2013/01/mindbemding-getting-your-head-round-bem-syntax/
*/

```

## random user generator

* **https://randomuser.me/**


## Web Components

```
Los Componentes Web son un paquete de diferentes tecnologías que te permiten crear elementos personalizados reutilizables — con su funcionalidad encapsulada apartada del resto del código — y utilizarlos en las aplicaciones web.


Los Componentes Web apuntan a resolver dichos problemas — consiste en tres tecnologías principalmente, las que se pueden usar juntas para crear elementos personalizables versátiles que encapsulan la funcionalidad y pueda ser reutilizada donde sea sin miedo a colisiones de código.

- Custom elements (elementos personalizados): Un conjunto de APIs de JavaScript que permiten definir elementos personalizados y su comportamiento, que entonces puede ser utilizado como se deseé en la interfaz del usuario.

- Shadow DOM: Un conjunto de APIs de JavaScript para fijar un árbol DOM "sombra" encapsulado a un elemento — que es renderizado por separado del documento DOM principal — y controlando funcionalidad asociada. De esta forma, se pueden mantener características de un elemento en privado, así puede tener el estilo y los scripts sin miedo de colisiones con otras partes del documento.

- HTML templates (plantillas HTML): Los elementos <template> y <slot> permiten escribir plantillas de marcado que no son desplegadas en la página renderizada. Éstas pueden ser reutilizadas en múltiples ocasiones como base de la estructura de un elemento personalizado.


customElements.whenDefined("wc-card").then(()=> console.log("WC-CARD is defined."));

```

## Angular

```
API > @angular/core
mode_edit code
ViewEncapsulation

```
## Enums - TypeScript

* **https://www.typescriptlang.org/docs/handbook/enums.html**