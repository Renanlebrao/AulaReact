import "./App.css";
import Exemplo1 from "./paginas/Exemplo1";
import Exemplo2 from "./paginas/Exemplo2";

export default function App() {

  let peso = 70
  let altura = 1.75
  let imc = peso / (altura * altura)

  let nota1 = 7
  let nota2 = 5

  let media = (nota1 + nota2) / 2

  return (

    <>

      <div>

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

        <div className="card">

          <h1>Calculadora IMC</h1>

          <p>Peso: {peso} kg</p>

          <p>Altura: {altura} m</p>

          <p>IMC: {imc.toFixed(2)}</p>

        </div>

        <div className="card">

          <h1>Calculadora de Notas</h1>

          <p>Nota 1: {nota1}</p>

          <p>Nota 2: {nota2}</p>

          <p>Média: {media.toFixed(2)}</p>

          <p>
            Situação: {media >= 6 ? "Aprovado" : "Reprovado"}
          </p>

        </div>

      </div>

    </>

  )
}