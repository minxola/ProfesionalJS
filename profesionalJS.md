# Curso Profesional de JavaScript

Por: **Richard Kaufman** [@sparragus](www.twitter.com/sparragus)

## Introducción

### 1. Que significa ser un Profesional de JavaScript

El camino del **Junior** al **Senior** es largo, difícil y duro. Se aprende mucho y se llega.

#### Que forma a un profesional

- Conocimiento del lenguaje
- Conocer entorno de programación
- Mejores prácticas
- Versado en código
- Conocer herramientas
- Ética y Profesionalismo
- Experiencia

#### El lenguaje JavaScript

- Fundamentos
- No-fundamentos
- Como funciona

#### No fundamentos

- Promesas (nivel Pro)
- Getters, Setters
- Proxies
- Generadores

#### Como funciona JavaScript

- JavaScript Engine
- Herencia prototipal
- Event Loop

#### Entornos de Programación

- Browser y el DOM API

#### Versado en código

- Hay que leer código
- Mucho
- Constantemente

#### Mejores prácticas

- No reinventamos la rueda usamos lo que ya hay (patrones de diseño)
- Probamos nuestro código

#### Ética

- Ser responsable
- Entregar a tiempo
- Saber decir que no
- No hacer daño

#### Experiencia

- Nada le gana a esto
- No se puede enseñar
- Está en ti
- Perseverancia

### 2. Aspectos que destacan a un profesional

El camino para ser profesional en JavaScript no es fácil, trabaja en estos aspectos para ser un programador destacado.

***Mejores prácticas***: escribir código optimizado que logre el mejor resultado.

***Conocer el entorno de programación***: Dominar la sintaxis y las herramientas te ayudará a reducir la cantidad de errores.

***Versado en Código***: Leer código de otras personas fortalecerá tus habilidades para solucionar problemas.

***Ética profesional***: Cada proyecto que realizas es fundamental para la operación de un sistema.

### 3. Inicio del Proyecto

Trabajaremos en el proyecto **PlatziVideo**, una plataforma de vídeo.

Esta es la base de nuestro proyecto y nos vamos a enfocar en el **MediaPlayer**. Durante el curso se desarrollarán ***plugins*** de forma modular para extender la funcionalidad del MediaPlayer.

El repositorio de este curso lo encuentras en: [JavaScript Profesional](ttps://github.com/platzi/javascript-profesional)

#### Inicio del proyecto con GIT y NPM

```bash
#Inicio del repositorio git
git init

#Inicio del proyecto con npm, por defecto
npm init -y #-y es yes a todas las preguntas de package.json
```

#### Instalación de paquete live server

```bash
npm i -D live-server #-D indica desarrollo, i es install
```

Agregamos el script para correr live server en el package.json

```json
"scripts": {
    "start": "live-server"
  }
```

Ahora para correr live server desde consola usamos `npm start` y cargará el **index.html**.

#### Inicio del proyecto

Crear los archivos del proyecto, desde el repositorio del proyecto terminado.

```bash
#Primero clonamos el proyecto de curso
git clone ttps://github.com/platzi/javascript-profesional

#Vemos la historia del proyecto, y ubicamos los commits iniciales
git log

#Hacemos checkout hacía el commit Inicio del proyecto
git checkout ff1badc05e00be6bb018bf3e5705ba672e20821f

#Una vez en el commit especificado, podemos extraer los recursos index.html, index.css y el video para el proyecto
```





## Repaso de conceptos fundamentales

### 4. Cómo llega un script al navegador

El **DOM** es la representación que hace el navegador de un documento HTML.

#### DOMContentLoaded

El navegador interpreta el archivo HTML y cuando termina de transformarlo al DOM se dispara el event `DOMContentLoaded` lo que significa que todo el documento está disponible para ser manipulado. Sin embargo cuando se dispara `DOMContentLoaded` los recursos como imágenes, videos, css, etc. aún no están cargados.

#### Ejecución de scripts externos y embebidos

Todo script que carguemos en nuestra página tiene un llamado y una ejecución. Si el script esta dentro de nuestra página, la carga del DOM se detiene hasta terminar la petición y la ejecución del script, terminada la ejecución se continúa con la carga del DOM.

```html
<!DOCTYPE html>
<html>
    <head>
        <meta charset='utf-8'>
    </head>
    <body>
        <script>
            alert('Hello World!')
            //Cuando el interprete llege al script
            //ejecutará el script y detendrá la carga del DOM
            //terminada la ejecución continua con la carga del DOM
        </script>
        <main>
            <article>
                <p>This is a html document</p>
            </article>
        </main>
    </body>
</html>
```

Para modificar este comportamiento podemos usar peticiones asíncronas, las cuales van a permitir que la carga del DOM no se vea interrumpida mientras se hace la petición y ejecución de script ya sean externos o embebidos.

Tanto con **async** como con **defer** podemos hacer llamados asíncronos pero tiene sus diferencias:

`async`: Con async podemos hacer la petición de forma asíncrona y no vamos a detener la carga del DOM, cuando la petición se completa en ese momento se detiene la carga del DOM y empieza la ejecución del script, terminada la ejecución del script continúa la carga del DOM.

```html
<head>
    <script async src="https://..."></script>
</head>
<body>
    <p>
        This is a website
    </p>
</body>
```

`defer`: La petición es igual asíncrona como en el async pero va a deferir la ejecución del JavasCript hasta el final, después de que se cargue todo el DOM.

```html
<head>
    <script defer src="https://..."></script>
</head>
<body>
    <p>
        This is a website
    </p>
</body>
```

Hay que tener en cuenta que cuando carga una página y se encuentra un script a ejecutar toda la carga se detiene. Por eso se recomienda agregar tus scripts justo antes de cerrar el body para que todo el documento esté disponible.

```html
<head>
</head>
<body>
    <p>
        This is a website
    </p>
    <script src='#'></script>
</body>
```

### 5. Scope

El scope, ámbito o alcance es el contexto actual de ejecución, en el cual los valores y expresiones son “visibles” y pueden ser referenciados, si una variable u otra expresión no esta en el **“contexto actual de ejecución”** **(current scope)**, entonces estas no están disponibles para su uso. Los **scopes - alcances** también pueden tener una jerarquía de manera que los scopes de menor jerarquía tienen accesos a los scopes de mayor jerarquía pero no a la inversa.

Una función sirve como una **clausura - closure** en JavaScript esto significa que una función crea un **scope - contexto de ejecución**, entonces no se puede acceder a variables definidas dentro de una función desde afuera de esa función, ni desde otras funciones

Un **scope** puede heredar sus variables y expresiones hacia sus hijos pero los hijos no pueden heredar su scope a los padres.

#### Global Scope

Variables disponibles de forma global, se usa la palabra `var`, son accesibles por todos los scripts que se cargan en la página y se declaran fuera de una función o bloque. Aquí hay mucho riesgo de sobreescritura.

```js
var x = 'Hello';
var sayMessage = () => {
    console.log(x); //se accede a x porque es global
}
```

También sucede cuando traemos código a través de un CDN, la función de jQuery `$` queda de manera global y podría ser sobre escrita por otra función con el mismo nombre.

```html
<script src='https://unpkg.com/jquery@3.3.1/dist/jquery.js'></script>
```

#### Function Scope

Variables declaradas dentro de una función utilizando var sólo visibles dentro de ella misma (incluyendo los argumentos que se pasan a la función).

```js
//SCOPE DE FUNCIÓN
var message = 'Hello friends'; //scope global
var sayMessage = (message) => {
    console.log(message);
}

//El argumento 'message' es Function Scope
//El console.log accede al argumento, y no a global var message
sayMessage('Hola'); //Hola
```

Otro caso de function scope es:

```js
function printNumbers (){
    for(var i = 0; i < 10; i++){
        setTimeout(()=> {
            console.log(i);
        }, 200);
    }
}
printNumbers(); //10 10 ...10 (10 veces)
```

Esto sucede porque *JavaScript* toma `var` y lo declara con alcance de función.

```js
function printNumbers (){
    var i; //Declaración con function scope
    for(i = 0; i < 10; i++){
        setTimeout(()=> {
            console.log(i);
        }, 200);
    }
}
printNumbers(); //10 10 ...10 (10 veces)
```

Para solucionar esto se puede usar también el *Alcance de función*.

```js
function printNumbers(){
    for(var i = 0; i < 10; i++){
        function eventuallyPrintNumber(n){
            setTimeout(() => {
                console.log(n);
            }, 1000)
        }
        eventuallyPrintNumber(i)
    }
}

//Al pasar el argumento 'n', ya no puede acceder a 'i' ya que la variable que necesita está en su ámbito léxico.
printNumbers(); //0 1 2 ... 9
```

#### Block Scope

Variables definidas dentro de un bloque, por ejemplo variables declaradas dentro un loop `while` o `for`. Se usa `let` y `const` para declarar este tipo de variables.

```js
function printer(){
    for(let i = 0; i < 10; i++){
        setTimeout(() => {
            console.log(i);
        },200);
    }
}
//En cada iteración se crea un bloque, y al haber usado let, esta variable solo está disponible en cada bloque
printer(); //0 1 2 ... 9
```

#### Module Scope

Cuando se denota un script de tipo module con el atributo `type="module` las variables son limitadas al archivo en el que están declaradas.

```html
<script type='module' src='./js/index.js'></script>
```

##### Export Module

La declaración **`export`** se utiliza al crear módulos de JavaScript para exportar funciones, objetos o tipos de dato primitivos del módulo para que puedan ser utilizados por otros programas con la sentencia `import`.

Los módulos exportados están en `strict mode` tanto si se declaran así como si no. La sentencia export no puede ser utilizada en scripts embebidos.

```js
export { name1, name2, …, nameN };
export { variable1 as name1, variable2 as name2, …, nameN };
export let name1, name2, …, nameN; // también var
export let name1 = …, name2 = …, …, nameN; // también var, const
export function FunctionName(){...}
export class ClassName {...}

export default expression;
export default function (…) { … } // también class, function*
export default function name1(…) { … } // también class, function*
export { name1 as default, … };

export * from …;
export { name1, name2, …, nameN } from …;
export { import1 as name1, import2 as name2, …, nameN } from …;
export { default } from …;
```

##### Import module

La sentencia `import` se usa para importar funciones que han sido exportadas desde un módulo externo.

```js
import defaultExport from "./js/module-name";
import * as name from "module-name";
import { export } from "module-name";
import { export as alias } from "module-name";
import { export1 , export2 } from "module-name";
import { export1 , export2 as alias2 , [...] } from "module-name";
import defaultExport, { export [ , [...] ] } from "module-name";
import defaultExport, * as name from "module-name";
import "module-name";
```

### 6. Closures o clausuras

Son funciones que regresan una función o un objeto con funciones que mantienen las variables que fueron declaradas fuera de su scope.

Los **closures** nos sirven para tener algo parecido a variables privadas, característica que no tiene JavaScript por *default*. Es decir encapsulan variables que no pueden ser modificadas directamente por otros objetos, sólo por funciones pertenecientes al mismo.

#### IIFE: Immediately Invoked Function Expresion

Las **expresiones de función ejecutadas inmediatamente** (**IIFE** por su sigla en inglés) son funciones que se ejecutan tan pronto como se definen.

**Sintaxis**:

```js
(function () {
    //statements
})();
```

Es un patrón de diseño también conocido cómo **función autoejecutable** y se compone por dos partes. La primera es la función anónima con alcance léxico encerrado por el *Operador de Agrupación* `()`. Esto impide accesar variables fuera del IIFE, así cómo contaminar el alcance (scope) global. 

La segunda parte crea la expresión de función cuya ejecución es inmediata `()`, siendo interpretado directamente en el engine de JavaScript.

*La función se convierte en una expresión de función que es ejecutada inmediatamente. La variable dentro de la expresíon no puede ser accesada desde afuera.*

```js
(function (){
    var name = 'Tim';
})();

console.log(name); //name is not defined
```

*Asignar el IIFE a una variable almacena el valor de retorno, no la definición de la función.*

```js
var printer = function (){
    let color = 'red';
    return color;}

printer;
//printer retorna la definición de la función
/* ƒ (){
        let color = 'red';
        return color;}
*/

//USANDO IIFE
var result = (function (){
    let name = 'Tim';
    return name;
})();

result; //Tim
```

#### Funciones que retornan funciones

También son *Clausuras* porque no se puede acceder directamente a las variables definidas dentro de la función principal. Para acceder a estas variables solo se puede hacer mediante la función de retorno ya que esta recuerda el ámbito en la que fue definida.

```js
function makeColorPrinter(color){
    let colorMessage = `The color is ${color}`;
    return function(){
        console.log(colorMessage);
    }
}

let greenColorPrinter = makeColorPrinter('green');
greenColorPrinter(); //The color is green
greenColorPrinter(); //The color is green
```

#### Variables privadas

Con las clausuras se puede crear variables privadas, las cuales solo se puede tener acceso mediante los métodos definidos a través de funciones, pues estas recuerdan el ámbito léxico en la que fueron definidas.

```js
function makeCounter (n) {
    let count = n;
    return {
        increse: function(){
            count = count + 1;
        },
        decrease: function(){
            count = count - 1;
        },
        getCount: function(){
            return count;
        },
    };
}

let counter = makeCounter(10);
console.log(`Count is : ${counter.getCount()}`); //10
counter.increse();
console.log(`Count is : ${counter.getCount()}`); //11
counter.decrease();
console.log(`Count is : ${counter.getCount()}`); // 10
counter.decrease();
counter.decrease();
console.log(`Count is : ${counter.getCount()}`); //8
```

### 7. El primer plugin

Para el primer plugin se implementó el autoplay y el botón de mute y unmute.

### 8. this

### 9. Los métodos call, apply y bind

### 10. Prototype

### 11. Herencia prototipal

## Cómo funciona JavaScript

### 12. Parsers y el Abstract Syntax Tree

### 13. Abstract Syntax Tree en Práctica

### 14. Cómo funciona el JavaScript Engine

### 15. Event Loop

## Fundamentos Intermedios

### 16. Promesas

### 17. Getters y Setters

## Fundamentos Avanzados

### 18. Proxy

### 19. Generators

## APIs del DOM

### 20. Fetch - Cómo cancelar peticiones

### 21. IntersectionObserver

### 22. VisibilityChange

### 23. Service Workers

## TypeScript

### 24. Introducción

### 25. Tipos básicos

### 26. Funciones

### 27. Interfaces

### 28. Clases

### 29. Convertir el proyecto a TypeScript

## Patrones de Diseño

### 30. Que es un patrón de diseño

### 31. Categorías de patrones de diseño

### 32. Patrón Singleton y Casos de Uso

### 33. Implementación de patrón Singleton

### 34. Como funciona el Patrón Observer

### 35. Implementación del patrón Observer

### 36. Casos de uso del patrón Observer: Redux

### 37. Patrón Decorator y Casos de Uso

### 38. Implementación del Patrón Decorator

## Proyecto: MediaPlayer

### 39. Implementación de plugin de Ads: Desplegando en consola

### 40. Implementación de plugin de Ads: Desplegando en Pantalla

### 41. Publicar en npm

## Conclusiones

### 42. Conclusiones

