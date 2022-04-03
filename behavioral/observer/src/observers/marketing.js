export default class Marketing {
    update({id, userName}) {
        //importante lembrar que o uptdate é responsavel por gerenciar seus erros
        // não deve-se ter await no notify pq a responsabildiade do notify é só emitir eventos
        console.log(`[${id}]: [marketing] will send an welcome email to [${userName}]`)
    }
}