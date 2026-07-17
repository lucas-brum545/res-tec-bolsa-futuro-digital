import leitor from 'readline-sync'

function lerAluno(){
    const aluno = {}

    aluno.nome = leitor.question('Insira o nome do aluno: ')
    aluno.nota1 = Number(leitor.question('Insira a primeira nota do aluno: '))
    aluno.nota2 = Number(leitor.question('Insira a segunda nota do aluno: '))

    aluno.media = (aluno.nota1 + aluno.nota2)/2

    return aluno
}

let aluno = lerAluno()

console.log(aluno)