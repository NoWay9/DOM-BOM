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
console.log(validateAge(input.value));
 if(validateAge(input.value) && validateUserName(input2.value) && validateData(input3.value))
 alert("Everything is fine");
 else alert("Incorrect input!");

/*Change background-color if input is incorrect*/

 input.onblur = function(){
if(validateAge() == false)
    input.className = 'error';
}

input.onfocus = function(){
    if(input.className == 'error')
    input.className = '';
}


input2.onblur = function(){
if(validateUserName() == false)
    input2.className = 'error';
}


input2.onfocus = function(){
    if(input2.className == 'error')
    input2.className = '';
}

input3.onblur = function(){
    if(validateData() == false)
    input3.className = 'error';
}


input3.onfocus = function(){
    if(input3.className == 'error')
    input3.className = '';
}

}



/*Validate Function*/

function validateAge(){
    if(isNaN(input.value)||input.value<=0)
    return false;
     else return true;
}


function validateUserName(){
    if(input2.value.indexOf('user_') == 0)
    return true;
    else return false;
}


function validateData(){
    if(input3.value.length != 10)return false;
    var check=/([0-9][0-9]\/){2}[0-9]{4}/
    if(check.test(input3.value)){
        if((input3.value[0]+input3.value[1])<=31 && (input3.value[3]+input3.value[4])<=12 )
        return true;
        else return false;
}
else alert('Enter date in format dd/mm/yyyy');
}