function validation(){
	flag=true;

	var fname = document.getElementById('fname').value;
	var email = document.getElementById('email').value;
	var lname = document.getElementById('lname').value;
	var r1 = document.getElementById('dot-1');
	var r2 = document.getElementById('dot-2');
	var r3 = document.getElementById('dot-3');
	var contact = document.getElementById('contact').value;

	var address = document.getElementById('address').value;

		if(fname == ""){
			document.getElementById('fname').innerHTML="*This field is required";
			 flag = false;
		}
		if(email == ""){
			document.getElementById('email').innerHTML="*This field is required";
			 flag = false;
		}
		if(lname == ""){
			document.getElementById('lname').innerHTML="*This field is required";
			 flag = false;
		}

		if(!r1.checked && !r2.checked && !r3.checked){
			document.getElementById('u-types').innerHTML="*This field is required";
			flag = false;
		}

		if(contact == ""){
			document.getElementById('contact').innerHTML="*This field is required";
			 flag = false;
		}
		if(address == ""){
			document.getElementById('address').innerHTML="*This field is required";
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


