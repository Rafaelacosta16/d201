 console.log("Hello world!");

 let nota = Number(prompt('Qual a nota do aluno?'));

 console.log(nota);

alert("A nota do aluno é: " + nota);
alert(´A nota do aluno é ${nota}´);

 if (nota >=6) {
 alert('Parabéns, o aluno foi aprovado!');
 }
 else if (nota >= 5.5) {
 alert('Parabéns. você foi aprovado, agradeça o sistma.');
 }
 else {
 alert('Parece que sua nota foi insuficinte, converse com a coordenação.');
}

 let valores = [20, 3, 5, 8, 10];

 for(let valor of valores) {
 if(valor % 2 === 0){
 console.log(`O número ${valor} é par.`);
 }
 else {
 console.log(`O número ${valor} é ímpar.`);
 }
 }













