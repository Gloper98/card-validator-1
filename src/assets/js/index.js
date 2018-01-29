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
	
	let test1 = (numberIn, cvvNumber) => {
		var realN = numberIn.replace(/\s/g,'');
		var realCVV = cvvNumber.replace(/\s/g,'');
		if(visa.test(realN) && realCVV.length === 3){
			alert('El numero ' + realN + ' es visa');
		}else if(masterCard.test(realN) && (realCVV.length === 3)){
			alert('El numero ' + realN + ' es mastercard');
		}else if(amex.test(realN) && realCVV.length === 4){
			alert('El numero ' + realN + ' es American Express');
		}else if(dinerClub.test(realN) && realCVV.length === 3){
			alert('El numero ' + realN + ' es Dinner Club');
		}else if(discover.test(realN) && realCVV.length === 3){
			alert('El numero ' + realN + ' es Discover');
		}else if(jcb.test(realN) && realCVV.length === 3){
			alert('El numero ' + realN + ' es JCB');
		}else {
			alert('El numero ' +  realN + ' no es valido')
		}
	}
	var testingFunction = (e) => {
		const numberIn = numberVal.value;
		const cvvNumber = verificationVal.value;
		test1(numberIn, cvvNumber);
	}
	
	testBtn.addEventListener('click', testingFunction);
	
})()