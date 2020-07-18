
function onload() {
	var arr = [];
	var text1 = document.getElementById('message1');
	var text2 = document.getElementById('message2');
	var text3 = document.getElementById('message3');
	var text4 = document.getElementById('message4');
	var text5 = document.getElementById('message5');
	var text6 = document.getElementById('message6');
	var text7 = document.getElementById('message7');
	var text8 = document.getElementById('message8');
    var text9 = document.getElementById('message9'); 
    var url = document.location.href,
    params = url.split('?')[1].split('&');


    var a = params[0].split('=');
    var a = a.toString().replace('first_name,','')
    arr.push(a);
    var b = params[1].split('=');
    var b = b.toString().replace('last_name,','');
    arr.push(b);
    var c = params[2].split('=');
    var c = c.toString().replace('address,','');
    arr.push(c);
    var h = params[3].split('=');
    var h = h.toString().replace('city,','');
    arr.push(h);
    var j = params[4].split('=');
    var j = j.toString().replace('dob,',' ');
    arr.push(j);
    var d = params[5].split('=');
    var d = d.toString().replace('educationlevel,',' ');
    arr.push(d);
    var e = params[6].split('=');
    var e = e.toString().replace('height,',' ');
    arr.push(e);
    var f = params[7].split('=');
    var f = f.toString().replace('phoneno,',' ');
    var f = f.toString().replace('%2B',' ');
    arr.push(f);
    var h = params[8].split('=');
    var h = h.toString().replace('email,',' ');
    var h = h.toString().replace('%40','@');
    arr.push(h);
   
         



       



    text1.innerHTML = arr[0];
    text2.innerHTML = arr[1];
    text3.innerHTML = arr[2];
    text4.innerHTML = arr[4];
    text5.innerHTML = arr[5];
    text6.innerHTML = arr[6];
    text7.innerHTML = arr[7];
    text8.innerHTML = arr[8];
    text9.innerHTML = arr[3];

    var a = "https://maps.google.com/maps?q="+arr[3]+"&t=&z=13&ie=UTF8&iwloc=&output=embed"
    document.getElementById("map").src = a;

	

}