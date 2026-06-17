export default function Exercicio1({numero})
{
    let fahrenheit = numero;
    let celsius = Number(fahrenheit - 32) * 5 / 9;

    return (
        <div> 
            {fahrenheit}°F é igual a {celsius}°C.
        </div>
    )
}