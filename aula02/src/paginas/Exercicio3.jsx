export default function Exercicio3({nota1, nota2})
{
    let media= Number(nota1) + Number(nota2)/2;
    return (
        <div>
        nota1: {nota1} <br></br>

        nota2: {nota2} <br></br>

        A media da Aritmética é : {media}
        </div>
    )
}