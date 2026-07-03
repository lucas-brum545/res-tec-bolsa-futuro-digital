import leitor from 'readline-sync'

const usuarioCorreto = 'admin'
const senhaCorreto = '4321'
let usuario
let senha
let deslogado = true

while (deslogado) {
    usuario = leitor.question('Digite o usuario: ')
    senha = leitor.question('Digite a senha: ')

    if (usuario == usuarioCorreto && senha == senhaCorreto) {
        console.log('Login com sucesso')
        deslogado = false
    }
    else {
        console.log('Dados invalidos')
    }
}