export default function Exercicio2({peso, altura})
{
    let imc= Number(peso)/ Number(altura)*Number(altura);   
    
    return (
        <div>
            Peso: {peso} <br/>
            altura: {altura} <br/>
            O imc é: {imc} <br/>
        </div>
    )
}