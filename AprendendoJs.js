console.log("Teste....");
//Var (Variável)
var i;
for (i = 1; i <= 10; i ++){
    console.log(i);
}
//EscolhaCaso (Switch)
sexo = "feminin";
switch (sexo) {
    case "feminino":
        console.log("Bem-Vinda!");
        break;
        case false:
            console.log("Bem-Vindo!");
}
var name = "Paulo"
var idade = 14
if(idade <= 18) {
    console.log(name + "Menor de Idade");
}
else(idade >=18) {
    console.log(name + "Maior de Idade");
}

var langs = ["html", "css", "JavaScript"]
var localizacao = langs[2]
console.log(localizacao)

var langs = ["HTML", "css", "JavaScript"];
var tam = langs.length;

//vetor
var langs = ["html", "css", "JavaScript"]
//vetor chamando o próprio vetor e a função lenght
//essa função acrescenta
langs [langs.length] = "php"
//imprimir a função
console.log(langs)
var langs = ["html", "css", "JavaScript"];
var last = langs.pop();
//Remove um valor do fim do vetor
var last = langs.shift();
//remove o primeiro elemento e o retorna
var langs = ["html", "css", "JavaScript"];
var last = langs.unshift("php");
//Adiciona "php" no inicio do vetor e retorna o novo tamanho (4)

var data1 = new Date();
//data1 = data atual
var data2 = new Date("November 17, 2014, 12:50:00");
//data2 = Mon Nov 17 2014 12:50:00
var data3 = new Date(7890787445);
//data3 = Thu Apr 02 1970 04:53:07
var data4 = new Date(2014, 11, 8, 13, 10 , 30, 0);
//data4 = Mon Dec 08 2014 13:10:30
console.log(data4);

var data4 = new Date(2014, 11, 8, 13, 10 , 30, 0);
document.write(data4 + "<br>/");
document.write(data4.toUTCString() + "<br/>");
document.write(data4.toDateString());

var frase = "A linguagem JavaScript é fácil"
var pos1 = frase.indexOf("JavaScript")
console.log(pos1)

var frase = "A linguagem JavaScript é fácil!";
var sub1 = frase.slice(12, 22);//sub = "JavaScript"
var sub2 = frase.substring(2, 11);//sub2 = "linguagem"
var sub3= frase.slice(25);//sub3 = "fácil!"
//O método slice() aceita valores negativos. Nesse caso, a contagem começa a partir do final da string.

var frase = "A linguagem Javascript é fácil!";
var sub = frase.substr(2, 9);//sub = "linguagem"

var frase = "A linguagem Javascript é fácil!";
var novaFrase = frase.replace("Javascript", "HTML");
//novaFrase = "A linguagem HTML é fácil!";