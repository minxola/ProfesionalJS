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

### 5. Scope

### 6. Closures

### 7. El primer plugin

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

