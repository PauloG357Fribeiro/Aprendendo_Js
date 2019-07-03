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
    console.log(nome + "Menor de Idade");
}
else(idade >=18) {
    console.log(nome + "Maior de Idade");
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