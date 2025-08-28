function ordem(Lista){
    return Lista.sort((a, b) => a.nome.localeCompare(b.nome))
    //minha tentativa foi return sort(Lista.nome) e o gpt deu esse método
}

function telefone(DDD, numero){
    this.DDD = DDD
    this.numero = numero
}

function endereco(rua, nume, cidade, estado){
    this.rua = rua
    this.nume = nume
    this.cidade = cidade
    this.estado = estado
}

function Cliente(nome, telefone, email, endereco){
    this.nome = nome
    this.telefone = telefone
    this.endereco = endereco
    this.email = email
    Object.defineProperty(this,'descricao',{
        get: function(){
            return "---------------" + 
            "\nInformações do Cliente:" + 
            "\nNome:" + this.nome +
            "\n---------------" +
            "\nEmail:"+ this.email +
            "\n---------------" +
            "\nTelefone:" + 
            "\nDDD:"+ this.telefone.DDD +
            "\nNúmero:"+ this.telefone.numero +
            "\n---------------" +
            "\nEndereço:" +
            "\nRua:"+ this.endereco.rua +
            "\nNúmero:" + this.endereco.nume +
            "\nCidade:" + this.endereco.cidade +
            "\nEstado:" + this.endereco.estado
        }
    })
}

let t1 = new telefone("12","90909090")
let e1 = new endereco("funileiros","58","SJC","SP")
let c1 = new Cliente("Igor",t1,"A@G.com",e1)

let t2 = new telefone("14","12345678")
let e2 = new endereco("funil","38","RJ","RJ")
let c2 = new Cliente("Allen",t2,"B@K.com",e2)

let t3 = new telefone("95","192837465")
let e3 = new endereco("pedreiros","54","Sapucaia","BH")
let c3 = new Cliente("Wesley",t3,"M@S.com",e3)

let Lista = [c1,c2,c3]
for (x of ordem(Lista)){
    console.log(x.descricao)
}