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
        document.getElementById('resultadofinal').innerText += `Bilhete número ${(i+1).toString().extenso()}: ${sorteado}\n`;
    }
}
function getRandom(min,max)
{
    return min + Math.floor(Math.random() * (max-min) + 1);
}
//funcao pra escrever o numero por extenso.
//+ Carlos R. L. Rodrigues
//@ http://jsfromhell.com/string/extenso [rev. #3]
String.prototype.extenso = function(c){
    var ex = [
        ["zero", "um", "dois", "três", "quatro", "cinco", "seis", "sete", "oito", "nove", "dez", "onze", "doze", "treze", "quatorze", "quinze", "dezesseis", "dezessete", "dezoito", "dezenove"],
        ["dez", "vinte", "trinta", "quarenta", "cinqüenta", "sessenta", "setenta", "oitenta", "noventa"],
        ["cem", "cento", "duzentos", "trezentos", "quatrocentos", "quinhentos", "seiscentos", "setecentos", "oitocentos", "novecentos"],
        ["mil", "milhão", "bilhão", "trilhão", "quadrilhão", "quintilhão", "sextilhão", "setilhão", "octilhão", "nonilhão", "decilhão", "undecilhão", "dodecilhão", "tredecilhão", "quatrodecilhão", "quindecilhão", "sedecilhão", "septendecilhão", "octencilhão", "nonencilhão"]
    ];
    var a, n, v, i, n = this.replace(c ? /[^,\d]/g : /\D/g, "").split(","), e = " e ", $ = "real", d = "centavo", sl;
    for(var f = n.length - 1, l, j = -1, r = [], s = [], t = ""; ++j <= f; s = []){
        j && (n[j] = (("." + n[j]) * 1).toFixed(2).slice(2));
        if(!(a = (v = n[j]).slice((l = v.length) % 3).match(/\d{3}/g), v = l % 3 ? [v.slice(0, l % 3)] : [], v = a ? v.concat(a) : v).length) continue;
        for(a = -1, l = v.length; ++a < l; t = ""){
            if(!(i = v[a] * 1)) continue;
            i % 100 < 20 && (t += ex[0][i % 100]) ||
            i % 100 + 1 && (t += ex[1][(i % 100 / 10 >> 0) - 1] + (i % 10 ? e + ex[0][i % 10] : ""));
            s.push((i < 100 ? t : !(i % 100) ? ex[2][i == 100 ? 0 : i / 100 >> 0] : (ex[2][i / 100 >> 0] + e + t)) +
            ((t = l - a - 2) > -1 ? " " + (i > 1 && t > 0 ? ex[3][t].replace("ão", "ões") : ex[3][t]) : ""));
        }
        a = ((sl = s.length) > 1 ? (a = s.pop(), s.join(" ") + e + a) : s.join("") || ((!j && (n[j + 1] * 1 > 0) || r.length) ? "" : ex[0][0]));
        a && r.push(a + (c ? (" " + (v.join("") * 1 > 1 ? j ? d + "s" : (/0{6,}$/.test(n[0]) ? "de " : "") + $.replace("l", "is") : j ? d : $)) : ""));
    }
    return r.join(e);
}