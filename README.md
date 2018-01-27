# ![icon-document](https://github.com/Gloper98/Cifrado-cesar-/raw/master/assets/images/icon-document.png "document") Card Validator
![Card-Validator](https://github.com/Gloper98/Cifrado-cesar-/raw/master/assets/images/decoder1.gif "cipher and decipher")
>Producto Final: Library to Card Validation.

La presente es una libreria para la validacion del numero, fecha de vencimiento, codigo de verificacion(cvv) y nombre completo correspondiente a la tarjeta de credito la cual hace uso del algoritmo de [Luhn](https://en.wikipedia.org/wiki/Luhn_algorithm).

## Download

```diff
npm install moment --save   # npm
yarn add moment             # Yarn
Install-Package Moment.js   # NuGet
spm install moment --save   # spm
meteor add momentjs:moment  # meteor
```

## Install

```diff
npm install moment --save   # npm
yarn add moment             # Yarn
Install-Package Moment.js   # NuGet
spm install moment --save   # spm
meteor add momentjs:moment  # meteor
```

## 

## Herramientas usadas

* **[CSS3:](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS3)** Usada para dar los estilos basicos.

```diff
Card-validator->css>main.css
```

* **[HTML:](https://www.w3schools.com/html/html_elements.asp)** Usada para la estructura de la pagina.

```diff
Card-validatorr->index.html
```

* **[Javascript](https://www.javascript.com/), [jQuery](https://jquery.com/)** y **[ECMA script 6:](http://es6-features.org/#Constants)** Usada para darle funcionalidad a la pagina.
```javascript
 for(var i =0;i< firstStep.length;i++){
				if(firstStep[i]*0 !== 0){
					if(firstStep.charCodeAt(i) >= 97 && firstStep.charCodeAt(i) <= 122){
					  let ascciCode =firstStep.charCodeAt(i);
					  let newAscciCode = (ascciCode-97+33)%26+97;
						let encodedString =String.fromCharCode(newAscciCode);
						newString.push(encodedString);
						console.log(ascciCode);
				  }
```

## Related Topics

* [Medium Blog:](https://medium.com/javascript-scene/javascript-es6-var-let-or-const-ba58b8dcde75)Acerca de `let`, `const`y `var`.
* [MDN web docs:](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions) Acerca de `arrow functions`.
* [MDN web docs:](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/String/fromCharCode) Acerca de `fromCharCode()`.
* [MDN web docs:](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/String/charCodeAt) Acerca de `charCodeAt()`.
* [Definicion.de:](http://conceptodefinicion.de/ascii/) Acerca de `ASCCI code`.

>Learn more: [Youtube Tutorial](https://www.youtube.com/watch?v=QVWsTy4ZPJI);

