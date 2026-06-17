import "./App.css";

import Exemplo1 from "./paginas/Exemplo1.jsx";
import Exemplo2 from "./paginas/Exemplo2.jsx";

import Exercicio1 from "./paginas/Exercicio1.jsx";
import Exercicio2 from "./paginas/Exercicio2.jsx";
import Exercicio3 from "./paginas/Exercicio3.jsx";
import Exercicio4 from "./paginas/Exercicio4.jsx";
import Exercicio5 from "./paginas/Exercicio5.jsx";
import Exercicio6 from "./paginas/Exercicio6.jsx";

export default function App() {
  return (
    <div>
      <h1>Aula 02 - Estudo de Componentes e Props</h1>

      <div className="card">
        <h3>Chamada para o Exemplo 1</h3>
        <Exemplo1 numero={33} />
        <Exemplo1 numero={43} />
        <Exemplo1 numero={3} />
      </div>

      <div className="card">
        <h3>Chamada para o Exemplo 2</h3>
        <Exemplo2 numero1={33} numero2={34} />
        <Exemplo2 numero1={20} numero2={22} />
      </div>

      <div className="card">
        <h3>Chamada para o Exercício 1</h3>
        <Exercicio1 numero={100} />
        <Exercicio1 numero={0} />
        <Exercicio1 numero={32} />
      </div>

      <div className="card">
        <h3>Chamadas para o Exercício 2</h3>
        <Exercicio2 peso={78} altura={178} />
        <Exercicio2 peso={60} altura={160} />
      </div>

      <div className="card">
        <h3>Chamadas para o Exercício 3</h3>
        <Exercicio3 nota1={9} nota2={7} />
        <Exercicio3 nota1={6} nota2={10} />
      </div>

      <div className="card">
        <h3>Chamadas para o Exercício 4</h3>
        <Exercicio4 tipo="retangulo" base={10} altura={5} />
        <Exercicio4 tipo="triangulo" base={10} altura={5} />
        <Exercicio4 tipo="quadrado" base={10} altura={10} />
      </div>

      <div className="card">
        <h3>Chamada para o Exercício 5</h3>
        <Exercicio5 consultas={40} />
      </div>

      <div className="card">
        <h3>Chamada para o Exercício 6</h3>
        <Exercicio6 capital={1000} taxa={5} tempo={6} />
      </div>
    </div>
  );
}