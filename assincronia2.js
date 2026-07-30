import * as readline from "node:readline/promises";
import { stdin, stdout} from "node:process";
import { question } from "readline-sync";

let leitor = readline.createInterface({
    input:stdin,
    output: stdout
})

let pessoa = {nome: "", email: ""}
let promessaNome = leitor.question('Digite o nome: ')
console.log(pessoa)
pessoa.nome = await promessaNome
console.log(pessoa)
pessoa.email = await leitor.question('Digite o email: ')
console.log(pessoa)
leitor.close()