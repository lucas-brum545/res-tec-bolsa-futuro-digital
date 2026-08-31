import alertas from '../service/alertas'
import usuarios from '../service/usuarios'
import produtos from '../service/produtos'
import alunos from '../service/alunos'


import GerenciaAlertas from '../gerencia_alertas/GerenciaAlertas' // questao 1
import GerenciaCards from '../gerencia_cards/GerenciaCards' // questao 2
import NotaAluno from '../NotaAluno/NotaAluno' // questao 3
import GerenciaProdutos from '../gerencia_produtos/GerenciaProdutos' // questao 4
import BotaoAcao from '../BotaoAcao/BotaoAcao' // questao 7

function App() {
  return (
    <>
      {/* titulo da questao sublinhado */}
      
      <h1 style={{ textDecoration: 'underline' }}>Questão 1</h1>
      <GerenciaAlertas alertas={alertas}/>
      <h1 style={{ textDecoration: 'underline' }}>Questão 2</h1>
      <GerenciaCards usuarios={usuarios}/>
      <h1 style={{ textDecoration: 'underline' }}>Questão 3</h1>
      {alunos.map(aluno => <NotaAluno
      nome={aluno.nome}
      nota={aluno.nota}/>)}
      <h1 style={{ textDecoration: 'underline' }}>Questão 4</h1>
      <GerenciaProdutos produtos={produtos}/>
      <h1 style={{ textDecoration: 'underline' }}>Questão 7</h1>
      <BotaoAcao texto="Salvar" desabilitado={false} />
      <BotaoAcao texto="Excluir" desabilitado={true} />
      <BotaoAcao texto="Editar" desabilitado={false} />
    </>
  )
}

export default App
