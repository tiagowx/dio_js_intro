var d = new Date(); // Atribui a data e hora atual a variável
alert(d);
alert(d.getDay()+1); // retorna o indice referente ao dia da semana
alert(d.getHours()); // retorna a hora atual a variável
alert(d.getTime());  // retorna o a data e hora em milisegundos
alert(Date.now()); // retorna o data e hora atual em milisegundos
alert(d.getTime() - Date.now());

/*
for (var i = 0; i < 5; i++) { // Para unidade contada execute
    alert(i);
}  */


/*
var count = 0;

do { // Execute 
    count++;
    alert(count);
} while (count<=5);  // Pare se for verdadeiro
*/
/* var count = 0;
while (count <=5) { // Enquanto for verdadeiro execute
    alert(count);
    count++;
}*/

/*var idade = prompt("Qual sua idade?");

if (idade >= 18) {
    alert("Maior de idade.")
} else{
    alert("Menor de idade.")
}*/

/*var frutas = [{nome: "maçã", cor: "vermelha"},{nome: "uva", cor: "roxa"}]; // array de Objetos para
console.log(frutas[1].nome);*/


/* Objeto 
var fruta = {nome: "maçã", cor: "vermelha"}; // Atribui um objeto JSON a variável
console.log(fruta.nome+ " " + fruta.cor);
*/


/* // Tratamento de vetores(array)
var lista = ["maçã", "pêra" , "laranja"]; // Atribui um array com valorea a variável lista

lista.push("uva"); // Adciona/empurra o item 'uva' para a lista
lista.pop(); // remove o ultimo item adicionado da lista

console.log(lista); // retorna a lista
console.log(lista.toString()); // retorna a lista como string
console.log(lista.join(" - ")); // retorna a lista com separador customizado
*/

/* // Tratamento de variáveis
var nome = "Tiago Batista";
var idade = 29;
var n1 = 5;
var n2 = 3;
var frase = "Japão é o melhor time do mundo";
alert(nome + " tem " + idade + " anos")
console.log(n1 * n2);
console.log(frase.toLowerCase()); // transforma letras maiusculas em minusculas
console.log(frase.toUpperCase()); // transforma letras minusculas em maiusculas
console.log(frase.replace("Japão", "Brasil")); // substitui uma string ou caractere por outro 
*/