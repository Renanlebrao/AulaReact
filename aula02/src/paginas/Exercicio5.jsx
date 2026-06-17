export default function Exercicio5({ consultas })


{
    let salario_bruto = Number(consultas) * 150
    let inss = salario_bruto * 0.08
    let salario_liquido = salario_bruto - inss

    return (
        <div>
            O salário bruto é R$ {salario_bruto.toFixed(2)}, o desconto do INSS é R$ {inss.toFixed(2)}, e o salário líquido é R$ {salario_liquido.toFixed(2)}.
        </div>
    )
}