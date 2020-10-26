class TarefasDAO {
    constructor(db){
        this._db = db
    }
    buscarTarefas(){
        return new Promise((resolve,reject)=>{
         this._db.all(`SELECT * FROM TAREFAS`, (err, rows)=>{
            if (err){
                reject(`Tarefa não encontrada ${err}`) /* tratando o erro */
            }
            resolve(rows)
         })
        })
    }

    inserirTarefa(req){
        return new Promise((resolve,reject)=>{
         this._db.run(`INSERT INTO TAREFAS (titulo, descricao)  VALUES(?,?)`, [req.body.titulo, req.body.descricao], (err)=>{
            if (err){
                reject(`Tarefa não inserida ${err}`) /* tratando o erro */
            }
            resolve(`Inserido com sucesso!`)
         })
        })
    }

    modificarTarefa(req){
        return new Promise((resolve,reject)=>{
         this._db.run(`UPDATE TAREFAS SET titulo =?, descricao =? WHERE id=?`, [req.body.titulo, req.body.descricao, req.params.idtarefa], (err)=>{
            if (err){
                reject(`Tarefa não modificada ${err}`) /* tratando o erro */
            }
            resolve(`Modificado com sucesso!`)
         })
        })
    }

    deletarTarefa(req){
        return new Promise((resolve,reject)=>{
         this._db.run(`DELETE FROM TAREFAS where id=?`,[req.params.idtarefa],(err)=>{
            if (err){
            reject(`Tarefa não deletada ${err}`) /* tratando o erro */
            }
            resolve('Tarefa deletada com sucesso')
         })
        })
    }
}
module.exports = TarefasDAO