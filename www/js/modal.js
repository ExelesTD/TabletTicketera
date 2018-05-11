// Get the modal
var modal = document.getElementById('myModal');
var intentos = 0;
// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
	intentos = 0;
    modal.style.display = "block";
}
function volverBoton(){
	intentos = 0;
    modal.style.display = "block";	
}
// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
function loginCompleto(){	
	var pin = localStorage.getItem('Contraseña') || '<empty>';
	var pinImput = document.getElementById("pinCont").value;
    if(pin == pinImput){
		window.location = "index.html";
    }
    else{
    	alert("Contraseña Incorrecta");
        document.getElementById("pinCont").style.backgroundColor = "red";
		intentos = intentos + 1;
        if(intentos == 3){
			modal.style.display = "none";
		}
    }
}