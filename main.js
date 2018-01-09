var form = document.createElement('form');
form.name = 'login';
form.action = 'google.com';

document.body.appendChild(form);


var input = document.createElement('input');
input.type = 'text';
input.name = 'age';

document.getElementsByName('login')[0].appendChild(input);


var input2 = input.cloneNode(true);
input2.name = 'username';
input.parentNode.appendChild(input2);


var input3 = input.cloneNode(true);
input3.name = 'date';
input.parentNode.appendChild(input3);


var input4 = document.createElement('input');
input4.type = 'submit';
input4.value = 'Validate Me';
document.getElementsByName('login')[0].appendChild(input4);

/*Validate Event*/

form.addEventListener('submit', validateForm);

function validateForm() {
    
 event.preventDefault();
console.log(input3.value);
 if(validateAge(input.value) && validateUserName(input2.value) && validateData(input3.value))
 alert("Everything is fine");
 else alert("Incorrect input!");

/*Change background-color if input is incorrect*/

 input.onblur = function(){
if(validateAge(input.value) == false)
    input.classList.add('error');
}

input.onfocus = function(){
    if(input.className == 'error')
    input.classList.remove('error');
}


input2.onblur = function(){
if(validateUserName(input2.value) == false)
    input2.classList.add('error');
}


input2.onfocus = function(){
    if(input2.className == 'error')
    input2.classList.remove('error');
}

input3.onblur = function(){
    if(validateData(input3.value) == false)
    input3.classList.add('error');
}


input3.onfocus = function(){
    if(input3.className =='error')
    input3.classList.remove('error');
}

}



/*Validate Function*/

function validateAge(value){
    if(isNaN(value)||value<=0)
    return false;
     else return true;
}


function validateUserName(value){
    if(value.indexOf('user_') == 0)
    return true;
    else return false;
}


function validateData(value){
    if(value.length != 10)return false;
    var check=/([0-9][0-9]\/){2}[0-9]{4}/
    if(check.test(value)){
        if((value[0]+value[1])<=31 && (value[3]+value[4])<=12 )
        return true;
        else return false;
}
else alert('Enter date in format dd/mm/yyyy');
}