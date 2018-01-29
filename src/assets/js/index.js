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
	const isLetter = /^[a-zA-ZÀ-ÿ\u00f1\u00d1]+(\s*[a-zA-ZÀ-ÿ\u00f1\u00d1]*)*[a-zA-ZÀ-ÿ\u00f1\u00d1]+$/;
	
	let test1 = (numberIn, cvvNumber) => {
		var realN = numberIn.replace(/\s/g,'');
		var realCVV = cvvNumber.replace(/\s/g,'');
		if(visa.test(realN)){
			numberVal.className ='form-control form-control-lg success';
			if((realCVV.length === 3) && !(isLetter.test(realCVV))){
				verificationVal.className = 'form-control form-control-lg success';
				alert('El numero ' + realN + ' es visa');
			} else {
				verificationVal.className = 'form-control form-control-lg error';
			}
		}else if(masterCard.test(realN)){
			numberVal.className ='form-control form-control-lg success';
			if((realCVV.length === 3) && !(isLetter.test(realCVV))){
				verificationVal.className = 'form-control form-control-lg success';
				alert('El numero ' + realN + ' es mastercard');
			} else {
				verificationVal.className = 'form-control form-control-lg error';
			}
		}else if(amex.test(realN)){
			numberVal.className ='form-control form-control-lg success';
			if((realCVV.length === 4) && !(isLetter.test(realCVV))){
				verificationVal.className = 'form-control form-control-lg success';
				alert('El numero ' + realN + ' es American Express');
			} else {
				verificationVal.className = 'form-control form-control-lg error';
			}
		}else if(dinerClub.test(realN)){
			numberVal.className ='form-control form-control-lg success';
			if((realCVV.length === 3) && !(isLetter.test(realCVV))){
				verificationVal.className = 'form-control form-control-lg success';
				alert('El numero ' + realN + ' es Dinner Club');
			} else {
				verificationVal.className = 'form-control form-control-lg error';
			}
		}else if(discover.test(realN)){
			numberVal.className ='form-control form-control-lg success';
			if((realCVV.length === 3) && !(isLetter.test(realCVV))){
				verificationVal.className = 'form-control form-control-lg success';
				alert('El numero ' + realN + ' es Discover');
			} else {
				verificationVal.className = 'form-control form-control-lg error';
			}
		}else if(jcb.test(realN)){
			numberVal.className ='form-control form-control-lg success';
			if((realCVV.length === 3) && !(isLetter.test(realCVV))){
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
	
	let expirationDate = (inputDate) => {
		let months = [
      '01',
      '02',
      '03',
      '04',
      '05',
      '06',
      '07',
      '08',
      '09',
      '10',
      '11',
      '12'
    ];
		let actualDate = new Date();
		let day = actualDate.getDate();
		let month = months[actualDate.getUTCMonth()];
		let year = actualDate.getFullYear();
		let fullDate = year+month+day;
		let actualDateJoin = inputDate.split('-').join('');
		if(actualDateJoin >= fullDate){
			dateVal.className ='form-control form-control-lg success';
		} else {
			dateVal.className ='form-control form-control-lg error';
		}
	}
	
	let testingFunction = (e) => {
		const numberIn = numberVal.value;
		const cvvNumber = verificationVal.value;
		const inputDate = dateVal.value;
		test1(numberIn, cvvNumber);
		expirationDate(inputDate);
	}
	
	testBtn.addEventListener('click', testingFunction);
	
})()