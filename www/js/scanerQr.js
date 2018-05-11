function revisarFecha(qrInput,flag){
	var fecha = new Date();
	var dia = fecha.getDate();
	var hora = fecha.getHours();
	var minutos = fecha.getMinutes();
	console.log(dia,hora,minutos);
	alert("pepepep");
	var qr = qrInput;
	var diaQr;
	obtenerDia(qr,diaQr);
	var horaQr;
	obtenerHora(qr,horaQr);
	var minutosQr;
	obtenerMinuto(qr,minutosQr);
	console.log(diaQr,horaQr,minutosQr);
	if(dia == diaQr){
		if(horaQr <= hora){
			if(minutosQr <= minutos){
				flag = true;
				return flag;
			}
			else{
				flag = false;
				return flag;
			}
		}
		else{
			flag = false;
			return flag;
		}
	}
	else{
		flag = false;
		return flag;
	}
	
	
	function obtenerDia(qr,dia){
		var indiceDia = qr.search("/") + 1;
		var indiceDiaFinal = qr.search("-");
		diaQr = qr.substring(indiceDia,indiceDiaFinal);
		return diaQr;
	}
	function obtenerHora(qr,hora){
		var indiceInicio = qr.search("-") + 1;
		var indiceFinal = qr.search(":");
		horaQr = qr.substring(indiceInicio,indiceFinal);
		return horaQr;
	}
	function obtenerMinuto(qr,minutos){
		var indiceInicio = qr.search(":") + 1;
		var indiceFinal = qr.search("-");
		minutosQr = qr.substring(indiceInicio);
		return minutosQr;
	}
}

