var form = document.createElement('form');
form.name = 'login';
form.action = 'google.com';

document.body.appendChild(form);

var inputAge = document.createElement('input');
inputAge.type = 'text';
inputAge.setAttribute('placeholder', 'age');
inputAge.name = 'age';

document.getElementsByName('login')[0].appendChild(inputAge);


var inputUserName = inputAge.cloneNode(true);
inputUserName.name = 'username';
inputUserName.setAttribute('placeholder', 'username');
inputAge.parentNode.appendChild(inputUserName);


var inputDate = inputAge.cloneNode(true);
inputDate.name = 'date';
inputDate.setAttribute('placeholder', 'date');
inputAge.parentNode.appendChild(inputDate);


var inputSubmit = document.createElement('input');
inputSubmit.type = 'submit';
inputSubmit.value = 'Validate Me';
document.getElementsByName('login')[0].appendChild(inputSubmit);

/*Validate Event*/

form.addEventListener('submit', validateForm);

function validateForm() {

  event.preventDefault();
  if (validateAge(inputAge.value) && validateUserName(inputUserName.value) && validateData(inputDate.value))
    alert("Everything is fine");
  else alert("Incorrect input!");

  /*Change background-color if input is incorrect*/

  inputAge.onblur = function () {
    if (validateAge(inputAge.value) == false)
      inputAge.classList.add('error');
  }

  inputAge.onfocus = function () {
    if (inputAge.className == 'error')
      inputAge.classList.remove('error');
  }


  inputUserName.onblur = function () {
    if (validateUserName(inputUserName.value) == false)
      inputUserName.classList.add('error');
  }


  inputUserName.onfocus = function () {
    if (inputUserName.className == 'error')
      inputUserName.classList.remove('error');
  }

  inputDate.onblur = function () {
    if (validateData(inputDate.value) == false)
      inputDate.classList.add('error');
  }


  inputDate.onfocus = function () {
    if (inputDate.className == 'error')
      inputDate.classList.remove('error');
  }

}



/*Validate Function*/

function validateAge(value) {
  if (isNaN(value) || value <= 0)
    return false;
  else return true;
}


function validateUserName(value) {
  if (value.indexOf('user_') == 0)
    return true;
  else return false;
}


function validateData(value) {
  if (value.length != 10) return false;
  var check = /([0-9][0-9]\/){2}[0-9]{4}/
  if (check.test(value)) {
    if ((value[0] + value[1]) <= 31 && (value[3] + value[4]) <= 12)
      return true;
    else return false;
  }
  else alert('Enter date in format dd/mm/yyyy');
}
