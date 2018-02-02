let begin = () => {
  // selecciona elementos del DOM
  let cardNumber = document.getElementById('card-number');
  let name = document.getElementById('name');
  let cvv = document.getElementById('cvv');
  let month = document.getElementById('month');
  let year = document.getElementById('year');
  let btnSubmit = $('#btn-submit');
  let messageTesting = $('#message');
  let returnCode = $('#return');
	let changeLang = $('#language');
	
	$('[lang="es"]').hide();
	changeLang.click(function() {
		$('[lang="es"]').toggle();
    $('[lang="en"]').toggle();
  });

  let card = $('#card');
  let number = $('#number');
  let code = $('#code');
  let expiration = $('#expiration');
  let validName = $('#valid-name');

  // declarar funciones 
  let addObjectValuesToHTML = (valueReturnAnielCard) => {
    card.text(valueReturnAnielCard['card valid']);
    number.text(valueReturnAnielCard['card number']);
    code.text(valueReturnAnielCard['cvv']);
    expiration.text(valueReturnAnielCard['expiration']);
    validName.text(valueReturnAnielCard['name']);
  }

  let addElementsHtml = (valueReturnAnielCard) => {   
    addObjectValuesToHTML(valueReturnAnielCard);    
    if (valueReturnAnielCard['card valid'] === true) {
      messageTesting.text('The card is valid');
    } else {
      messageTesting.text('The card is invalid'); 
    }
  };

  let resetExample = () => {
    cardNumber.value = '';
    name.value = '';
    cvv.value = ''; 
    month.value = '';
    year.value = '';
  };

  let testingLibrary = (event) => {
    event.preventDefault(); 
    addElementsHtml(anielCard(name, cardNumber, cvv, month, year));
    resetExample();
  };

  // asocia eventos a elementos del DOM
  btnSubmit.on('click', testingLibrary);
};

window.onload = (begin);