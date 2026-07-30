import * as readline from "node:readline/promises";
import { stdin, stdout} from "node:process";
import { question } from "readline-sync";

let leitor = readline.createInterface({
    input:stdin,
    output: stdout
})

/* deve ler nome e email e retornar um objeto pessoa com nome e email */

async function lerPessoa(){  // funcoes sao sincronas por padrao necessario async para await funcionar
    let pessoa = {nome: "", email: ""}
    pessoa.nome = await leitor.question('Digite o nome: ')
    pessoa.email = await leitor.question('Digite o e-mail: ')
    return pessoa
}

// retorna um array de pessoas, lidas com o ler pessoa
async function lerPessoas(quantidadePessoas){
    let listaPessoas = []
    for(let indice=0;indice<quantidadePessoas;indice++){
        let pessoa = await lerPessoa()
        listaPessoas.push(pessoa)
    }
    return listaPessoas
}

async function programaPrincipal(){
    let pessoas = await lerPessoas(2)
    console.log(pessoas)
    leitor.close()
}

programaPrincipal()