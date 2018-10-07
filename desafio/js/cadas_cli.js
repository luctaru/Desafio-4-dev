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
	getJSON('desafiodb-export.json', function(err, js) {
	  if (err !== null) {
		console.log('Ocorreu um erro' + err);
	  } else {
		  
		  $( "#cadastro_cli" ).submit(function( event ) {
			if ( $( "input:first" ).val() === "correct" ) {
				$( "span" ).text( "Validated..." ).show();
				return;
			 }
			 
			 var newObj = {data : $("input[name=date]").val(), nome : $("input[name=mes_ref]").val(), nomeContato :$("input[name=nome_cont]").val(), nota: "", numero: $("input[name=num_cont]").val(), cont : ""}
			 
 
			  $( "span" ).text( "Not valid!" ).show().fadeOut( 1000 );
			  event.preventDefault();
		});
	  }
	})
});