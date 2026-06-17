export default function Exercicio4({tipo, base, altura})
{
    let area = 0
   if(tipo === "triangulo")
    {
        area = Number(base) * Number(altura) /2;
    }

    else if(tipo === "retangulo")
    {
        area = Number(base) * Number(altura)

    }
    else{
        area = 0;
     }
    
    return(
    <div>
      Poligono {tipo} de base {base} e altura {altura} possui a Área = {area}
    </div>)
    
}