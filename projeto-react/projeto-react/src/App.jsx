function OutroComponente(props){
  
  return <>
  <div>
    {props.pergunta}
    <button>Sim</button>
    <button>Não</button>
  </div>
  </>
}

export default function App(){
  return <>
  <div>
    {/* <h1>Olá mundo!</h1>
    <button>Entre</button>
    <h2>Qualquer coisa</h2> */}
    <h1>Super Quiz</h1>
    {/* atributos/props da tag */}
    <input type="text" /> 
    {/* composição de componentes */}
    <OutroComponente pergunta="POA é a capital do RS?">
    </OutroComponente>
    <OutroComponente pergunta="NH é município de Santa Catarina?"/> 
  </div>
  </>
}