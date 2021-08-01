function validation(){
	flag=true;

	var first = document.getElementById('fname').value;
	var email = document.getElementById('email').value;
	var lname = document.getElementById('lname').value;
	var r1 = document.getElementById('dot-1');
	var r2 = document.getElementById('dot-2');
	var r3 = document.getElementById('dot-3');
	var contact = document.getElementById('contact').value;
	var address = document.getElementById('address').value;
    var txt;

    

    if(first == ""){
        txt="*Required";
        document.getElementById("demo1").innerHTML = txt;
           flag = false;
    }
        
		if(email == "" ){
            txt="*Required";
			document.getElementById("demo2").innerHTML = txt;
			   flag = false;
		}
		if(lname == "" ){
            txt="*Required";
			document.getElementById("demo3").innerHTML = txt;
			   flag = false;
		}

		if(!r1.checked && !r2.checked && !r3.checked){
            txt="*Required";
			document.getElementById("demo4").innerHTML = txt;
			   flag = false;
		}

		if(contact == "" ){
            txt="*Required";
			document.getElementById("demo5").innerHTML = txt;
			   flag = false;
		}
		if(address == "" ){
            txt="*Required";
			document.getElementById("demo6").innerHTML = txt;
			   flag = false;
		}
		 return flag;
}


function myFunction() {
	if (validation()) {
      alert("User Added Successfully!");
      return true;
    } else {
      return false;
    }
}


