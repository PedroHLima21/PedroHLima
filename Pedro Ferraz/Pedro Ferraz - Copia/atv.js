var btnEnviar = document.querySelector("#btnEnviar");

btnEnviar.addEventListener("click", function(event) {
    event.preventDefault();
    
    var cadastroreg = document.querySelector("#cadastroreg");

    var pessoa = cadastroreg.pessoa.value;
    var idade = cadastroreg.idade.value;
    var atividade = cadastroreg.atividade.value;
    var tempo = cadastroreg.tempo.value;
    var frequencia = cadastroreg.frequencia.value;

    var registro = {
        pessoa: pessoa,
        idade: idade,
        atividade: atividade,
        tempo: tempo,
        frequencia: frequencia
    };

    var registroJSON = JSON.stringify(registro);
    localStorage.setItem("registro", registroJSON);

    console.log("pessoa: " + pessoa);
    console.log("idade: " + idade);
    console.log("atividade: " + atividade);
    console.log("tempo: " + tempo);
    console.log("frequencia: " + frequencia);

    alert("Atividade registrada! Tenha foco, assim os resultados virão!");
});
