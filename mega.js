var vezes = document.getElementById('numerodevezes').value;
function geraBilhete(qtd,numeros)
{
    document.getElementById('resultadofinal').innerText = " ";
    for(var i = 0; i < qtd; i++) // faz o sorteio de "i" bilhetes.
    {
        var sorteado = [];
        //console.log("ultimo numero "+bilhete[59]); // verifica se todos os números foram colocados corretamente.
        for(var j = 0; j < numeros; j++) // faz a adição de 6 elementos ao vetor "resultado" através de um laço de repetição
        {
            sorteado.push(getRandom(1,60));
        }
        for(var j = 0; j < numeros; j++) //checa se há algum elemento repetido...
        {
            for(var k=0; k < numeros; k++)
            {
                /*if(j != k) // debug only...
                {
                    console.log(`Verificando se sorteado[${j}]=${sorteado[j]} é igual a sorteado[${k}]=${sorteado[k]}`)
                }*/
                if(sorteado[j] == sorteado[k] && j != k)
                {
                    while(sorteado[j] == sorteado[k]) // O loop só acaba quando o valor sorteado for diferente(Pode acontecer de ser sorteado o mesmo valor)
                    {
                        //console.log("Houve uma igualdade! Ressorteando valores...");
                        sorteado[j] = getRandom(1,60);
                        //if(sorteado[j] != sorteado[k])
                            //break;
                    }
                }
            }
        }
        //bubble sort para colocar os números em ordem crescente, tal como todo gerador de lotto faz.
        for(var a = 0; a < sorteado.length; a++)
        {
            var pass;
            for(var b = 0; b < sorteado.length; b++)
            {
                if(sorteado[a] < sorteado[b])
                {
                    pass = sorteado[a];
                    sorteado[a] = sorteado[b];
                    sorteado[b] = pass;
                }
            }
        }
        document.getElementById('resultadofinal').innerText += "Resultado do bilhete "+(i+1)+": "+sorteado+"\n";
    }
}
function getRandom(min,max)
{
    return min + Math.floor(Math.random() * (max-min) + 1);
}