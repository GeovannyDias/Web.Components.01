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

```
enum VIDEO_PROVIDERS {
  YOUTUBE = 'youtube',
  VIMEO = 'vimeo',
}

this.provider === VIDEO_PROVIDERS.YOUTUBE

```

## DS WEB PCHNCH

```
npm run generate atoms/pichincha-button

Stencil construye automáticamente la documentación, creamos en el componente los ficheros:

readme.md
angular.md
react.md

Construimos el componente y automáticamente se genera la documentación en los ficheros *.md:

npm run build


```

## ERROR

```
[ ERROR ]  Rollup: Missing Export: ./src/index.ts:1:9
           'Components' is not exported by ./src/components.d.ts, imported by ./src/index.ts

      L1:  export { Components, JSX } from './components';

[38:03.5]  build failed in 97 ms



Solve "@stencil/core": "^2.13.0":

In file index.ts first import the components, then export them.

import { Components, JSX } from "./components";
export { Components, JSX };

// export { Components, JSX } from './components'; → Eliminar del fichero


```

## History Book

* **https://dev.to/raguilera82/empezando-con-stenciljs-35f4**

```
En primer lugar integrar el CLI de Storybook en el proyecto para eso dentro de la raíz del proyecto ejecutamos:

npx -p @storybook/cli sb init --type html 

Posteriormente instalamos las dependencias de los addons que vayamos a utilizar de Storybook:

npm install --save-dev @storybook/addon-notes @storybook/addon-knobs


npm run storybook

```

## SASS

* **https://www.npmjs.com/package/@stencil/sass**

```
npm install @stencil/sass --save-dev

```

