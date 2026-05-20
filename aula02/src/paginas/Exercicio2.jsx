export default function Exercicio2() {

    let peso = 70
    let altura = 1.75
    let imc = peso / (altura * altura)

    return (

        <div>

            <h1>Calculadora IMC</h1>

            <p>Peso: {peso} kg</p>

            <p>Altura: {altura} m</p>

            <p>IMC: {imc.toFixed(2)}</p>

        </div>

    )
}