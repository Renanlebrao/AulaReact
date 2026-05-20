export default function Exercicio3()
{

    let nota1 = 7
    let nota2 = 5
  
    let media = (nota1 + nota2) / 2
  
    return (
  
      <div className="card">
  
        <h1>Resultado do Aluno</h1>
  
        <p>Nota 1: {nota1}</p>
  
        <p>Nota 2: {nota2}</p>
  
        <p>Média: {media.toFixed(2)}</p>
  
        <p>
          Situação: {media >= 6 ? "Aprovado" : "Reprovado"}
        </p>
  
      </div>
  
    )
  }
