
contador 
while (condição) { 
    execução
    passo
} 

let nota = Number(prompt('Qual a nota do aluno?'));
let contador = 0;


while (isNaN(nota)&& contador < 5) {
    //nota = Number(prompt('Por favor, digite um número. Qual a nota do aluno?'));
    
    i ++;
}

if (i >= 5) {
    //alert('Você chegou no limite de tentativas, por favor tente novamente mais tarde.');
}

alert(`A nota do aluno é ${nota}`);

let valores = [15, 2, -10, 227, 458, 300];

let i = 0;
while(i < valores.length) {
    console.log(valores[i]);
    
    i ++;
}

for(let valor of valores) {
    if(valor % 2 === 0){
        console.log(`O número ${valor} é par.`);
    }
    else {
        console.log(`O número ${valor} é ímpar.`);
    }
}


