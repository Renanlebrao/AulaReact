export default function Exercicio6({ capital, taxa, tempo }) 

{
    let juros_simples = Number(capital) * (Number(taxa) / 100) * Number(tempo);
    let juros_compostos = Number(capital) * (Math.pow((1 + (Number(taxa) / 100)), Number(tempo)) - 1);

    return (

        <div>
            O capital é R$ {capital}, a taxa de juros é {taxa}% ao mês, e o tempo é de {tempo} meses. <br />
            O juros simples é R$ {juros_simples.toFixed(2)} e o juros compostos é R$ {juros_compostos.toFixed(2)}.
        </div>
    )
}