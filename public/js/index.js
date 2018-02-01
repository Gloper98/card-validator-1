const regExpNumbers = /^\d+$/;
const regExpText = /^[a-zA-ZÀ-ÿ\u00f1\u00d1]+(\s*[a-zA-ZÀ-ÿ\u00f1\u00d1]*)*[a-zA-ZÀ-ÿ\u00f1\u00d1]+$/;

let sentinelCardNumber = false;
let sentinelName = false;
let sentinelVerificationCode = false;
let sentinelDueDate = false;
let allInputsValid = false;

// card number Validation
let isValidCardNumber = (cardNumber) => {
  if (regExpNumbers.test(cardNumber) && cardNumber.length === 16) {
    let cardNumbersUpsideDown = cardNumber.split('').reverse(); // array de numeros al revés
    let counterOfEvenNumbers = 1; // contador de posiciones pares (impares en js)
    let sum = 0; // almacenar la suma de los numeros de la tarjeta  
    cardNumbersUpsideDown.forEach((numb, index) => {
      cardNumbersUpsideDown[index] = parseInt(numb);
      if (index === counterOfEvenNumbers) {
        cardNumbersUpsideDown[index] *= 2; // multiplicar por 2 los numeros de las posiciones pares(impares en js)
        if (cardNumbersUpsideDown[index] >= 10) {
          cardNumbersUpsideDown[index] = cardNumbersUpsideDown[index].toString(); // convertir el numero en string
          let separateNumbers = cardNumbersUpsideDown[index].split('');
          separateNumbers[0] = parseInt(separateNumbers[0]);
          separateNumbers[1] = parseInt(separateNumbers[1]);
          cardNumbersUpsideDown[index] = separateNumbers[0] + separateNumbers[1]; // sumar las cifras
        }
        counterOfEvenNumbers += 2; // De lo contrario si la multiplicación es menor que 10 aumentar j en 2
      }
      sum += cardNumbersUpsideDown[index]; // suma de numeros en posiciones impares y nuevos numeros en posiciones pares
    });
    sum % 10 === 0 ? sentinelCardNumber = true : sentinelCardNumber = false;
  } else
    sentinelCardNumber = false;
  return sentinelCardNumber;
};

// Name Validation
let isValidName = (name) => {
  if (regExpText.test(name) && name.length >= 14 && name.length <= 18)
    sentinelName = true;
  else
    sentinelName = false;
};

// CVV validation
let cvvValidation = (typeCard, cvvNumber) => {
  let realCVV = cvvNumber.replace(/\s/g, '');
  let validationNumber;
  if (regExpNumbers.test(realCVV)) {
    if (realCVV.length === 3) {
      if (typeCard === 'visa' || typeCard === 'mastercard' || typeCard === 'discover' || typeCard === 'dclub' || typeCard === 'jcb') {
        sentinelVerificationCode = true;
      } else {
        sentinelVerificationCode = false;
      }
    } else if (realCVV.length === 4) {
      if (typeCard === 'amex') {
        sentinelVerificationCode = true;
      } else {
        sentinelVerificationCode = false;
      }
    }
  } else {
    sentinelVerificationCode = false;
  }
};

let cardType = (numberIn) => {
  let typeOfCard;
  const visa = /^4[0-9]{6,}$/;
  const masterCard = /^5[1-5][0-9]{5,}|222[1-9][0-9]{3,}|22[3-9][0-9]{4,}|2[3-6][0-9]{5,}|27[01][0-9]{4,}|2720[0-9]{3,}$/;
  const amex = /^3[47][0-9]{5,}$/;
  const dinerClub = /^3(?:0[0-5]|[68][0-9])[0-9]{4,}$/;
  let realN = numberIn.replace(/\s/g, '');
  if (visa.test(realN)) {
    typeOfCard = 'visa';
  } else if (masterCard.test(realN)) {
    typeOfCard = 'mastercard';
  } else if (amex.test(realN)) {
    typeOfCard = 'amex';
  } else if (dinerClub.test(realN)) {
    typeOfCard = 'dclub';
  } else {
    typeOfCard = 'tipo de tarjeta no registrada';
  }
  return typeOfCard;
};

// expiration date validation
let expirationDate = (month, year) => {
  let dateValid;
  let months = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'];
  let actualDate = new Date();
  let day = actualDate.getDate();
  let actualMonth = months[actualDate.getUTCMonth()];
  let actualYear = actualDate.getFullYear();
  let fullDate = actualYear + actualMonth;
  let actualDateJoin = year + month;
  let lastDay = new Date(year, actualDate.getMonth() + 1, 0);
  let dayL = lastDay.getDate();
  
  if (actualDateJoin > fullDate) {
    sentinelDueDate = true;
  } else if (actualDateJoin === fullDate) {
    if (day === dayL) {
      sentinelDueDate = false;
    } else {
      sentinelDueDate = true;
    }
  } else {
    sentinelDueDate = false;
  }
};

// Testing: General function.

let anielCard = (name, cardNumber, cvv, month, year) => { 
  let valueName = document.getElementById(name.id).value;
  let valueCardNumber = document.getElementById(cardNumber.id).value;
  let valueCvv = document.getElementById(cvv.id).value;
  let valueMonth = document.getElementById(month.id).value;
  let valueYear = document.getElementById(year.id).value;

  isValidCardNumber(valueCardNumber);
  isValidName(valueName);
  cvvValidation(cardType(valueCardNumber), valueCvv);
  expirationDate(valueMonth, valueYear);

  // verificar que todos los inputs cumplan la condición
  if (sentinelCardNumber() && sentinelDueDate() && sentinelName() && sentinelVerificationCode())
    return allInputsValid = true;
  else
    return allInputsValid = false;
};