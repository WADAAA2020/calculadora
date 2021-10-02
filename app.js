// alert("olá mundo")
// função alert( )

//console.log("Olá mundo")
//console.log("Aprendendo Javascript")

/*tipos de dados JS
texto (string) --> "Wada", "19"
número (number) --> 19
inteiro (int) --> 19
decimal (float) --> 19.5
Booleano --> Verdadeiro (true) ou falso (false)
*/

//console.log("Wada")
//console.log(19)
//console.log(true)

/*
OPERADORES MATEMÁTICOS
+ --> adição
- --> subtração
* --> multiplicação
/ --> divisão 
*/

//console.log(10+20)
//console.log(10-3)
//console.log(3*5)
//console.log(20/4)

/* 
VARIÁVEL 
espaço reservado na memória com um nome
let --> criar variável
*/

//let nome = "Wada"
//let idade = 19
//console.log("Olá " + nome)
//console.log(idade + 5)

let nomeDoAluno = "Wada"
let notaDoPrimeiroBimestre = 5
let notaDoSegundoBimestre = 7
let notaDoTerceiroBimestre = 6
let notaDoQuartoBimestre = 10
let media = (notaDoPrimeiroBimestre + notaDoSegundoBimestre + notaDoTerceiroBimestre + notaDoQuartoBimestre) / 4

let mediaFixada = media.toFixed(1)

// concactenação ( + )
console.log("Boas Vindas " + nomeDoAluno)

/*prioridade: * ou / depois +ou- colocar entre parênteses  */
document.write(mediaFixada)

if(media>= 5) {
    document.write ("Aprovado");
}

if(media<= 5) {
    document.write ("Reprovado");
}