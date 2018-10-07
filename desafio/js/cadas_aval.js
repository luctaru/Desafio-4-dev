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
		  var promo = 0;
		   var neut = 0;
		    var det = 0;
			
		  for(i = 1; i < cli.length(); i++){
			  if(cli[i].cont == 0){
				  if(cli[i].nota >= 9){
					  promo += 1;
				  }
				  else if(cli[i].nota == 7 || cli[i].nota == 8){
					  neut += 1;
				  }
				  else{
					  det += 1;
				  }
			  }
			  else{
				  
			  }
		  }
		  
		  var res = ((promo - det) / cli.length) * 100;
		  
		  $( "#cadastro_aval" ).submit(function( event ) {
			if ( $( "input:first" ).val() === "correct" ) {
				$( "span" ).text( "Validated..." ).show();
				return;
			 }
			 
			 var newObj = {ano : $("input[name=ano_ref]").val(), mes : $("input[name=mes_ref]").val(), resultado : res}
			 
			 data.avaliacao.push = newObj;
			 
			 data.avaliacao[4] = newObj
 
			  $( "span" ).text( "Not valid!" ).show().fadeOut( 1000 );
			  event.preventDefault();
		});
	  }
	})
});