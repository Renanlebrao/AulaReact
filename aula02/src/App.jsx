
import "./App.css";
import Exemplo1 from "./paginas/Exemplo1";
import Exemplo2 from "./paginas/Exemplo2";
import Exercicio1 from "./paginas/Exercicio1";



export default function App ()
{
  return (
    <><div>
      <h1>Aula 02 - Estudo de Componentes e Props</h1>


      <div className="card">

        <h3>Chamada para o Exemplo 1</h3>
        <Exemplo1 numero={33} />
        <Exemplo1 numero={67} />
        <Exemplo1 numero={42} />

      </div>

      <div className="card">
        <Exemplo2 numero1={33} numero2={34} />
        <Exemplo2 numero1={4.5} numero2={6.8} />
      </div>

    </div>
    <div></div>
    
    <div className="card">
    <Exercicio1 fahrenheit={86} />
        
      </div></>

)

}

