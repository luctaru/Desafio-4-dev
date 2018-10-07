$(document).ready(function(){
    var getJSON = function(url, callback) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.responseType = 'json';
    xhr.onreadystatechange = function() {
      var status = xhr.status;
      if (status === 200) { 
        //Callback caso de tudo certo
        callback(null, xhr.response);
      } else {
        //Callback caso de algum erro
        callback(status, xhr.response);
      }
    };
    xhr.send();
};

//Utilizando o método
	getJSON('desafiodb-export.json', function(err, data) {
	  if (err !== null) {
		console.log('Ocorreu um erro' + err);
	  } else {
		  var aval = data.avaliacao;  
		  for(i = 1; i < aval.length; i++){

					if(aval[i].resultado >= 80){
						$("#div_resul").append("<label><font color = 'white'>Mes: "+aval[i].mes+"</font></label><div style='width:100px; height:70px; background-color:green'><p>Meta Atingida</p></div><br><br/>");
					}
					else if(aval[i].resultado < 80 && aval[i].resultado >= 60){
						$("#div_resul").append("<label><font color = 'white'>Mes: "+aval[i].mes+"</font></label><div style='width:100px; height:70px; background-color:yellow'><p>Meta Tolerada</p></div><br><br/>");
					}
					else if (aval[i].resultado <= 60){
						$("#div_resul").append("<label><font color = 'white'>Mes: "+aval[i].mes+"</font></label><div style='width:100px; height:70px; background-color:red'><p>Meta Não Atingida</p></div><br><br/>");
					}
					else{
						$("#div_resul").append("<label><font color = 'white'>Mes: "+aval[i].mes+"</font></label><div style='width:100px; height:70px; background-color:white'><p>Não houve avaliação esse mês</p></div><br><br/>");
					}
			}
	  }
	})
});

