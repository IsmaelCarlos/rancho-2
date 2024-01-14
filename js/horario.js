function verificaHora()
{
 	var agora = new Date();
	var hora = agora.getHours();

	//  console.log(`agora são exatamente ${hora} horas`);
	if(hora < 12){
		return "Bom dia, Bem vindo ao M.Rancho."
	}else if (hora <= 18){
		return "Boa tarde, Bem vindo ao M.Rancho."
	}else{
		return "Boa noite, Bem vindo ao M.Rancho"
	}
}




