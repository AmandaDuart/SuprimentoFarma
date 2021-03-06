

function geraPaginaTodo(tarefas) {

    //para cada tarefa recebida:
        //criar card com título e 
    let cardsTarefas = '';


    tarefas.forEach(element => {
        cardsTarefas+=
        `<form action = "/tarefas/${element.id}" method ="POST" >
            
            <tbody>
                <tr>
                    <th scope="row">${element.id}</th>
                    <td>${element.codigo}</td>
                    <td>${element.titulo}</td>
                    <td>${element.descricao}</td>
                    <td>${element.preco}</td>
                    <td>${element.quantidade}</td>
                    <td>${element.entrada}</td>
                    <td>${element.saida}</td>
                    <td>${element.vencimento}</td>
                    <td>  
                        <input name="_method"  class="btn btn-danger" value="DELETE"
                        <input type = "submit" id="${element.descricao}" class="btn btn-danger" value = "Delete">
                    </td>
                    
                </tr>
            </tbody>
            
        </form>
        ` 
        
    });

    return `<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title></title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <link href="https://fonts.googleapis.com/css2?family=Indie+Flower&display=swap" rel="stylesheet">
</head>
<body>
    <nav class="nav bg-info mb-4" style="text-align: center;">
    <h1 class=" py-2 text-light" style="font-family: 'Indie Flower'; width:100%">Cadastro de Medicamentos    </h1>
    </nav>
    <div class="container"> 
        <form action = "/tarefas" method = "POST" class="flex-fill">
            <div class = "row">
                <div class = "col-4">
                    <div class="form-group">
                        <label for="tituloTarefa"><b>Nome do Medicamento:</b></label>
                        <input type="text" class="form-control" id="tituloTarefa" placeholder="Nome do suprimento" name = titulo>
                    </div>
                </div> 
                <div class = "col-4">
                    <div class="form-group">
                        <label for="descricaoTarefa"><b>Descrição do medicamento</b></label>
                        <textarea class="form-control" id="descricaoTarefa" rows="1" placeholder="Insira a descrição da suprimento" name ='descricao'></textarea>
                    </div>
                </div>
                <div class = "col-4">
                    <div class="form-group">
                        <label for="codigo"><b>Código de barras:</b></label>
                        <input type="text" class="form-control" id="codigoTarefa"  placeholder="Insira a quantidade" name ='codigo'>
                    </div>
                </div>
            </div>
            <div class = "row">
                <div class = "col-2">
                    <div class="form-group">
                        <label for="preco"><b>Preço:</b></label>
                        <input type="text" class="form-control" id="precoTarefa"  placeholder="Insira o preço  " name ='preco'>
                    </div>
                </div>
                <div class = "col-2">
                    <div class="form-group">
                        <label for="quantidade"><b>Quantidade:</b></label>
                        <input type="text" class="form-control" id="quantidadeTarefa"  placeholder="Insira a quantidade " name ='quantidade'>
                    </div>
                </div>
                <div class = "col-2">
                    <div class="form-group">
                        <label for="entrada"><b>Data de Entrada:</b></label>
                        <input type="text" class="form-control" id="entradaTarefa"  placeholder="  ____/____/_____ " name ='entrada'>
                    </div>
                </div>
                <div class = "col-2">
                    <div class="form-group">
                        <label for="saida"><b>Data de Saída:</b></label>
                        <input type="text" class="form-control" id="saidaTarefa"  placeholder="  ____/____/_____ " name ='saida'>
                    </div>
                </div>
                <div class = "col-2">
                    <div class="form-group">
                        <label for="vencimento"><b>Data de Vencimento:</b></label>
                        <input type="text" class="form-control" id="vencimentoTarefa"  placeholder="   ____/____/_____" name ='vencimento'>
                    </div>
                </div>
                <div class = "col-2">
                    <div class="form-group">
                        <label for="tipo"><b>Tipo</b></label>
                        <input type="text" class="form-control" id="tipoTarefa"  placeholder="Insira o tipo" name ='tipo'>
                    </div>
                </div>
            </div>
        </div>
        <div class = "row justify-content-center">
            <div class="form-group">
                <input class="btn btn-primary" type= "submit" >
            </div>
        </div>
        </form>
    </div>
    <div class=" container">
        <div class = "row">
            <div class="col-12">
                <div id="todoCard">
                    <table class="table">
                        <thead>
                            <tr>
                            <th scope="col">Id</th>
                            <th scope="col">Código</th>
                            <th scope="col">Medicamento</th>
                            <th scope="col">Descrição</th>
                            <th scope="col">Preço</th>
                            <th scope="col">Quantidade</th>
                            <th scope="col">Entrada</th>
                            <th scope="col">Saída</th>
                            <th scope="col">Vencimento</th>
                            <th scope="col">Ações</th>
                            </tr>
                        </thead>                
                        ${cardsTarefas}
                    </table>
                </div>
            </div>
        </div>
    </div>

    <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
</body>
</html>`;
}

module.exports = geraPaginaTodo;