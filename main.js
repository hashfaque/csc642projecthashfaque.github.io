/****************************************************************** extra functions ************************************************************************************/
function isAlphaNumeric(str) {
  if(str.match("^[a-zA-Z0-9]*$")){
   return true
  }
  else{
   return false
  }
}


function is_usZipCode(str){
  regexp = /^[0-9]{5}(?:-[0-9]{4})?$/;
  if (regexp.test(str)){
    return true;
  }
  else{
    return false;
  }
}

function validateEmail(email) {
  const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}


function testJS() {
    var a = document.getElementById('first_name').value;
    var b = document.getElementById('last_name').value;
    var c = document.getElementById('address').value;
    var d = document.getElementById('city').value;
    var e = document.getElementById('dob').value;
    var f = document.getElementById('educationlevel').value;
    var g = document.getElementById('height').value;
    var h = document.getElementById('phno').value;
    var i = document.getElementById('email').value;

    url =  encodeURIComponent(a) + encodeURIComponent(b)+ encodeURIComponent(c)+ encodeURIComponent(d)+ encodeURIComponent(e)+ encodeURIComponent(f)
    + encodeURIComponent(g)+ encodeURIComponent(h)+ encodeURIComponent(i);
    document.location.href = url;
}


/****************************************************************** Main Code *****************************************************************************************/

var f_name = document.getElementById('first_name');
var text1 = document.getElementById('message1');
f_name.addEventListener('input', function(){
  var val = f_name.value;
  if (val.length > 40) {
    text1.innerHTML = "Not greater than 40";
  }
  else{
    text1.innerHTML = "";
  }
});

var l_name = document.getElementById('last_name');
var text2 = document.getElementById('message2');
l_name.addEventListener('input', function(){
  var val = l_name.value;
  if (val.length > 40) {
    text2.innerHTML = "Not greater than 40";
  }
  else{
    text1.innerHTML = "";
  }
});


var address = document.getElementById('address');
var text3   = document.getElementById('message3');
address.addEventListener('input', function(){
  var val = address.value;
  if (val.length > 40 ) {
    text3.innerHTML = "Not greater than 40";
  }
  else if(isAlphaNumeric(val) == false){
    text3.innerHTML = "Include AlphaNumeric Charachter";
  }
  else if(is_usZipCode(val) == false ){
    text3.innerHTML = "Include Zip Code";
  }
  else{
    text3.innerHTML = "";
  }
});


var email = document.getElementById('email');
var text4 = document.getElementById('message5');
email.addEventListener('input', function(){
  var val = email.value;
  if (validateEmail(val)) {
    text4.innerHTML = "";
  }
  else{
    text4.innerHTML = "Invalid Email";
  }
});