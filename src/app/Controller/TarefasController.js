const TarefasModel= require('../Model/TarefasModel');//import class
const TodoApp =   require('../view/todo_app');//import class
class TarefasController{
    constructor(){
        throw ('erro')
    }
    
    static buscandoTarefas(){
        return function(req,res){
            TarefasModel.buscarTarefas()
            .then(tarefa =>{
                res.send(TodoApp(tarefa))
        })
        .catch(err => console.log(err));
    }
}

    static inserindoTarefa(){
        return function(req,res){
            TarefasModel.inserirTarefa(req)
            .then(tarefa =>{
               console.log(tarefa);
        })
        .catch(err => console.log(err));
        res.redirect("/tarefas")
    }
}

    static deletandoTarefa(){
        return function(req,res){
            TarefasModel.deletarTarefa(req)
            .then(tarefa =>{
               console.log(tarefa);
        })
        .catch(err => console.log(err));
    }

}
    static modificandoTarefa(){
        return function(req,res){
            TarefasModel.modificarTarefa(req)
            .then(tarefa =>{
            console.log(tarefa);
        })
        .catch(err => console.log(err));
        res.send("Modificado com sucesso")
    }   

}

}

module.exports = TarefasController;
