interface pessoaEntidade{
    nome:string
    idade:number
}

class pessoaRepositorio{
    pessoas: Array<pessoaEntidade>

    add(){
        this.pessoas.push({idade:10, nome:'joao'})
    }
}
