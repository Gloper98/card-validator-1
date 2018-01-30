# ![icon-document](https://github.com/Gloper98/Cifrado-cesar-/raw/master/assets/images/icon-document.png "document") Card Validator
![Card-Validator](https://github.com/Gloper98/Cifrado-cesar-/raw/master/assets/images/decoder1.gif "cipher and decipher")
>Producto Final: Library to Card Validation.

La presente es una libreria para la validacion del numero, fecha de vencimiento, codigo de verificacion(cvv) y nombre completo correspondiente a la tarjeta de credito la cual hace uso del algoritmo de [Luhn](https://en.wikipedia.org/wiki/Luhn_algorithm).  

_This is a library for the validation of the number, expiration date, verification code (cvv) and full name corresponding to the credit card that makes use of the **Luhn** algorithm._

[![npm downloads](https://img.shields.io/badge/npm-5.5.2-orange.svg)](https://nodejs.org/en/download/releases/)  ![npm downloads](https://img.shields.io/badge/dependencies-none-brightgreen.svg)  ![npm downloads](https://img.shields.io/badge/devDependencies-insecure-blue.svg)

## Download

```diff
npm install moment --save   # npm
yarn add moment             # Yarn
Install-Package Moment.js   # NuGet
spm install moment --save   # spm
meteor add momentjs:moment  # meteor
```

## Using AnielCard.js

```diff
var valid = require('card-validator');

var numberValidation = valid.number('4111');

if (!numberValidation.isPotentiallyValid) {
  renderInvalidCardNumber();
}

if (numberValidation.card) {
  console.log(numberValidation.card.type); // 'visa'
}

```

## API
<table>
  <thead>
    <tr>
      <th colspan=1>Input</th>
      <th colspan=3>Output</th>
      <th colspan=2>Suggested Handling</th>
    </tr>
  </thead>
  <thead>
    <tr>
      <th>Value</th>
      <th><code>card.type</code></th>
      <th><code>isPotentiallyValid</code></th>
      <th><code>isValid</code></th>
      <th>Render Invalid UI</th>
      <th>Allow Submit</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>''</code></td>
      <td><code>null</code></td>
      <td><strong>true</strong></td>
      <td>false</td>
      <td>no</td>
      <td>no</td>
    </tr>
    <tr>
      <td><code>'6'</code></td>
      <td><code>null</code></td>
      <td><strong>true</strong></td>
      <td>false</td>
      <td>no</td>
      <td>no</td>
    </tr>
    <tr>
      <td><code>'60'</code></td>
      <td><code>'discover'</code></td>
      <td><strong>true</strong></td>
      <td>false</td>
      <td>no</td>
      <td>no</td>
    </tr>
    <tr>
      <td><code>'601'</code></td>
      <td><code>'discover'</code></td>
      <td><strong>true</strong></td>
      <td>false</td>
      <td>no</td>
      <td>no</td>
    </tr>
    <tr>
      <td><code>'6011'</code></td>
      <td><code>'discover'</code></td>
      <td><strong>true</strong></td>
      <td>false</td>
      <td>no</td>
      <td>no</td>
    </tr>
    <tr>
      <td><code>'601'</code></td>
      <td><code>'discover'</code></td>
      <td><strong>true</strong></td>
      <td>false</td>
      <td>no</td>
      <td>no</td>
    </tr>
    <tr>
      <td><code>'60'</code></td>
      <td><code>'discover'</code></td>
      <td><strong>true</strong></td>
      <td>false</td>
      <td>no</td>
      <td>no</td>
    </tr>
    <tr>
      <td><code>'6'</code></td>
      <td><code>null</code></td>
      <td><strong>true</strong></td>
      <td>false</td>
      <td>no</td>
      <td>no</td>
    </tr>
    <tr>
      <td><code>''</code></td>
      <td><code>null</code></td>
      <td><strong>true</strong></td>
      <td>false</td>
      <td>no</td>
      <td>no</td>
    </tr>
    <tr>
      <td><code>'x'</code></td>
      <td><code>null</code></td>
      <td>false</td>
      <td>false</td>
      <td><strong>yes</strong></td>
      <td>no</td>
    </tr>
    <tr>
      <td><code>''</code></td>
      <td><code>null</code></td>
      <td><strong>true</strong></td>
      <td>false</td>
      <td>no</td>
      <td>no</td>
    </tr>
  </tbody>
</table>

| Input                                                                                     | Output                        |
|-------------------------------------------------------------------------------------------|-------------------------------|
| `'10/19'`<br/>`'10 / 19'`<br />`'1019'`<br/>`'10 19'`                                     | `{month: '10', year: '19'}`   |
| `'10/2019'`<br/>`'10 / 2019'`<br />`'102019'`<br/>`'10 2019'`<br/>`'10 19'`               | `{month: '10', year: '2019'}` |
| `{month: '01', year: '19'}`<br/>`{month: '1', year: '19'}`<br/>`{month: 1, year: 19}`     | `{month: '01', year: '19'}`   |
| `{month: '10', year: '2019'}`<br/>`{month: '1', year: '2019'}`<br/>`{month: 1, year: 19}` | `{month: '10', year: '2019'}` |

## Design decisions

- The default maximum expiration year is 19 years from now.
- `valid.expirationDate` will only return `month:` and `year:` as strings if the two are valid, otherwise they will be `null`.
- Since non-US postal codes are alpha-numeric, the `postalCode` will allow non-number characters to be used in validation.

## Development

We use `nvm` for managing our node versions, but you do not have to. Replace any `nvm` references with the tool of your choice below.

```sh
nvm install
npm install
```

## Tools used

* **[Bootstrap:](http://getbootstrap.com/docs/3.3/)** 
  Bootstrap es un framework web front-end gratuito y de código abierto para diseñar sitios web y aplicaciones web.  
  _Bootstrap is a free and open-source front-end web framework for designing websites and web applications._  

* **[ECMA script 6:](http://es6-features.org/#Constants)** 
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


