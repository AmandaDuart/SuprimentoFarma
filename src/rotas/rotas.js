const TarefasController = require("../app/Controller/TarefasController");
const bodyparser = require('body-parser') /*pacote de instalação */
const methodOverride = require('method-override')
const rotas = (app)=>{
    app.use(bodyparser.urlencoded({extended:false}))/*recebendo os dados do formulario*/ 
    app.use(methodOverride(function (req, res) {
        if (req.body && typeof req.body === 'object' && '_method' in req.body) {
          var method = req.body._method
          delete req.body._method
          return method
        }
      }))

    app.get('/tarefas', TarefasController.buscandoTarefas() );

    app.post('/tarefas', TarefasController.inserindoTarefa());

    app.put('/tarefas/:idtarefa',TarefasController.modificandoTarefa());

    app.delete('/tarefas/:idtarefa', TarefasController.deletandoTarefa());
    
};

module.exports = rotas; /* exportou a função para usar no servidor */