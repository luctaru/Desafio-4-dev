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
		  var cli = data.cliente;  
		  for(i = 1; i < cli.length; i++){
			  
			  $("#tab_cli").append("<tr><td align='left'><input type='checkbox'  name='OPCAO' required><font color = 'white'>  "+cli[i].nome+"</font></td><td align='left'><font color = 'white'>Nota: </font><input type='number' name='not' min='0' max='10' required></td><td align='left'><font color = 'white'>Motivo: </font><input type='text' max='100' required></td></tr>");
			  
		  }
		  
	  }
	})
});