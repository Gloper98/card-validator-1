# ![icon-document](https://github.com/Gloper98/Cifrado-cesar-/raw/master/assets/images/icon-document.png "document") Card Validator
![Card-Validator](https://github.com/Gloper98/Cifrado-cesar-/raw/master/assets/images/decoder1.gif "cipher and decipher")
>Producto Final: Library to Card Validation.

La presente es una libreria para la validacion del numero, fecha de vencimiento, codigo de verificacion(cvv) y nombre completo correspondiente a la tarjeta de credito la cual hace uso del algoritmo de [Luhn](https://en.wikipedia.org/wiki/Luhn_algorithm).  

_This is a library for the validation of the number, expiration date, verification code (cvv) and full name corresponding to the credit card that makes use of the algorithm of **Luhn**._

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
## Tools used

* **[Bootstrap:](http://getbootstrap.com/docs/3.3/)** 
Bootstrap es un framework web front-end gratuito y de código abierto para diseñar sitios web y aplicaciones web.
_Bootstrap is a free and open-source front-end web framework for designing websites and web applications._  

* **[jQuery](https://jquery.com/)** y **[ECMA script 6:](http://es6-features.org/#Constants)** 
Javascript es un lenguaje de programación de alto nivel, dinámico, débilmente tipado, basado en prototipos, multi-paradigma e interpretado.
_Javascript is a high-level, dynamic, weakly typed, prototype-based, multi-paradigm, and interpreted programming language._  
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

* [npmjs: ](https://www.npmjs.com/package/card-validator)Acerca de `card validator`.  
  _About_ **card validator**.

>Learn more: [Youtube NPM Tutorial](https://www.youtube.com/watch?v=4aNA8ZHihFE);

## Credits

* **Anny Gutierrez Lopez:** [GitHub Account](https://github.com/Gloper98).
* **Daniela Gomez Bejar:** [GitHub Account](https://github.com/Danielalab).


