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

let promessaPessoa = lerPessoa()

function resolvePessoa(retorno){
    console.log('Retornou a pessoa: ')
    console.log(retorno)
    leitor.close()
}


promessaPessoa.then(resolvePessoa)