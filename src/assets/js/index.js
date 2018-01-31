onload = (() => { 
	let numberVal = document.getElementById('number');
	let nameVal = document.getElementById('name');
	let verificationVal = document.getElementById('verification');
	let dateVal = document.getElementById('date');
	let testBtn = document.getElementById('test');
	let visa = /^4[0-9]{6,}$/;
  let masterCard = /^5[1-5][0-9]{5,}|222[1-9][0-9]{3,}|22[3-9][0-9]{4,}|2[3-6][0-9]{5,}|27[01][0-9]{4,}|2720[0-9]{3,}$/;
	let amex = /^3[47][0-9]{5,}$/;
	let dinerClub = /^3(?:0[0-5]|[68][0-9])[0-9]{4,}$/;
	let discover = /^6(?:011|5[0-9]{2})[0-9]{3,}$/;
	let jcb = /^(?:2131|1800|35[0-9]{3})[0-9]{3,}$/;
	let isNumber = /^\d+$/;
	
	//Validar que el nombre exista || este correctamente escrito======Validar si el numero esta registrado
	//Validar que el numero sea valido || validar de que empresa es ===== Validar si el numero esta registrado
	//Validar que la tarjeta no este vencida => Validar que el mes ingresado no haya acabado => comprobar si es el ultimo dia del mes.
	//validar el numero de verificacion => validar el numer => validar el tipo de tarjeta => ver si el numero corresponde al tipo de tarjeta. ==== verificar si tiene numero de verificacion
	
	//Type of card function
	
	// let cardType = (numberIn) => {
	// 	let typeOfCard;
	// 	let realN = numberIn.replace(/\s/g,'');
	// 	if(visa.test(realN)){
	// 		typeOfCard='visa';
	// 	}else if(masterCard.test(realN)){
	// 		typeOfCard='mastercard';
	// 	}else if(amex.test(realN)){
	// 		typeOfCard='amex';
	// 	}else if(dinerClub.test(realN)){
	// 		typeOfCard='dclub';
	// 	}else if(discover.test(realN)){
	// 		typeOfCard='discover';
	// 	}else if(jcb.test(realN)){
	// 		typeOfCard='jcb';
	// 	}else {
	// 		typeOfCard='tipo de tarjeta no registrada';
	// 	}
	// 	return typeOfCard;
	// }
	
	//Just CVV validation
	let cvvValidation = (typeCard, cvvNumber) => {
		let realCVV = cvvNumber.replace(/\s/g,'');
		let validationNumber;
		if(isNumber.test(realCVV)){
			if(realCVV.length === 3) {
				if(typeCard === 'visa' || typeCard === 'mastercard' || typeCard === 'discover' || typeCard === 'dclub' || typeCard === 'jcb') {
				validationNumber = 'valid';
			  } else {
				validationNumber = 'invalid';
			  }
	  	} else if(realCVV.length === 4) {
			  if(typeCard === 'amex'){
					validationNumber = 'valid';
				} else {
					validationNumber = 'invalid';
				}
		  } else {
				validationNumber = 'too-long';
			}
		} else {
			validationNumber = 'not-number';
		}
		if(validationNumber === 'valid'){
			verificationVal.className = 'form-control form-control-lg success';
		} else {
			verificationVal.className = 'form-control form-control-lg error';
		}
		return validationNumber;
	}
	
	// General function to validate CVV and type of card + this fucntion add the error and the success class to the input
	
	let test1 = (numberIn, cvvNumber) => {
		let realN = numberIn.replace(/\s/g,'');
		let realCVV = cvvNumber.replace(/\s/g,'');
		if(visa.test(realN)){
			numberVal.className ='form-control form-control-lg success';
			if((realCVV.length === 3) && (isNumber.test(realCVV))){
				verificationVal.className = 'form-control form-control-lg success';
				alert('El numero ' + realN + ' es visa');
			} else {
				verificationVal.className = 'form-control form-control-lg error';
			}
		}else if(masterCard.test(realN)){
			numberVal.className ='form-control form-control-lg success';
			if((realCVV.length === 3) && (isNumber.test(realCVV))){
				verificationVal.className = 'form-control form-control-lg success';
				alert('El numero ' + realN + ' es mastercard');
			} else {
				verificationVal.className = 'form-control form-control-lg error';
			}
		}else if(amex.test(realN)){
			numberVal.className ='form-control form-control-lg success';
			if((realCVV.length === 4) && (isNumber.test(realCVV))){
				verificationVal.className = 'form-control form-control-lg success';
				alert('El numero ' + realN + ' es American Express');
			} else {
				verificationVal.className = 'form-control form-control-lg error';
			}
		}else if(dinerClub.test(realN)){
			numberVal.className ='form-control form-control-lg success';
			if((realCVV.length === 3) && (isNumber.test(realCVV))){
				verificationVal.className = 'form-control form-control-lg success';
				alert('El numero ' + realN + ' es Dinner Club');
			} else {
				verificationVal.className = 'form-control form-control-lg error';
			}
		}else if(discover.test(realN)){
			numberVal.className ='form-control form-control-lg success';
			if((realCVV.length === 3) && (isNumber.test(realCVV))){
				verificationVal.className = 'form-control form-control-lg success';
				alert('El numero ' + realN + ' es Discover');
			} else {
				verificationVal.className = 'form-control form-control-lg error';
			}
		}else if(jcb.test(realN)){
			numberVal.className ='form-control form-control-lg success';
			if((realCVV.length === 3) && (isNumber.test(realCVV))){
				verificationVal.className = 'form-control form-control-lg success';
				alert('El numero ' + realN + ' es JCB');
			} else {
				verificationVal.className = 'form-control form-control-lg error';
			}
		}else {
			numberVal.className ='form-control form-control-lg error';
			verificationVal.className = 'form-control form-control-lg error';
			alert('El numero ' +  realN + ' no es valido')
		}
	}
	
	//Expiration date function
	
	let expirationDate = (inputDate) => {
		let dateValid;
		let months = ['01','02','03','04','05','06','07','08','09','10','11','12'];
		let actualDate = new Date();
		let day = actualDate.getDate();
		let month = months[actualDate.getUTCMonth()];
		let year = actualDate.getFullYear();
		let fullDate = year+month;
		let actualDateJoin = inputDate.split('-').join('');
		let lastDay = new Date(year,actualDate.getMonth() + 1,0);
		let dayL = lastDay.getDate();
		
		if(actualDateJoin > fullDate){
			dateValid = 'valid';
		} else if (actualDateJoin === fullDate) {
			if (day === dayL){
				dateValid = 'invalid';
			} else {
				dateValid = 'valid';
			}
		} else {
			dateValid = 'invalid';
		}
		if(dateValid === 'valid'){
			dateVal.className ='form-control form-control-lg success';
		} else {
			dateVal.className ='form-control form-control-lg error';
		}
		return dateValid;
	}
	
	//Testing: General function to test.html
	
	let testingFunction = (e) => {
		const numberIn = numberVal.value;
		const cvvNumber = verificationVal.value;
		const inputDate = dateVal.value;
		//test1(numberIn, cvvNumber);
		expirationDate(inputDate);
		cvvValidation(cardType(numberIn), cvvNumber);
	}
	
	testBtn.addEventListener('click', testingFunction);
	
})()