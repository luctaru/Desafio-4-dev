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
			  
			  $(".td_cli").append("<input type='number' required='required' maxlength="2" pattern='[0-9]{2}$' placeholder='Nota' min="0" max="10"/>");
			  
		  }
		  
	  }
	})
});


