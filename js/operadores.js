const num1 = 5;
const num2 = 8;
let num3 = 10;

// OPERADORES MATEMÁTICOS
console.log(num1 + num2);
console.log(num1 - num2);
console.log(num1 / num2);
console.log(num1 * num2);
console.log(num1 ** num2);
console.log(num1 % num2);
console.log(num1 % 2);
console.log(num2 % 2);

// OPERADORES DE ATRIBUIÇÃO
num3++ // incrementa 1 -> num3 = num3 + 1
console.log(num3);
num3-- // decrementa 1 -> num3 = num3 - 1
console.log(num3);
num3 += 2 // num3 = num3 + 2
console.log(num3);
num3 -= 2 // num3 = num3 - 2
console.log(num3);
num3 *= 3 // num3 = num3 * 3
console.log(num3);
num3 /= 3 // num3 = num3 / 3
console.log(num3);
num3 **= 3 // num3 = num3 ** 3
console.log(num3);
num3 %= 3; // num3 = num3 % 3
console.log(num3);

// OPERADORES DE COMPARAÇÃO
console.log(num1 == num2); // igual (compara somente o valor)
console.log(num1 === num2); // igual (compara o valor e o tipo)
console.log(num1 != num2); // igual (compara somente o valor)
console.log(num1 !== num2); // igual (compara o valor e o tipo)
console.log(num1 > num2); // maior que
console.log(num1 < num2); // menor que
console.log(num1 >= num2); // maior ou igual que
console.log(num1 <= num2); // menor ou igual que
console.log(10 == "10"); // igual (compara somente o valor)
console.log(10 === "10"); // igual (compara o valor e o tipo)
console.log(10 != "10"); // igual (compara somente o valor)
console.log(10 !== "10"); // igual (compara o valor e o tipo)
console.log("Diego" == "Diego");
console.log("Diego" === "Diego");
console.log("Diego" === new String("Diego"));


// OPERADORES LÓGICOS
// &&
// ||
// ^
// !

const age = 70;
const gender = "M";

// console.log(age === 18 && gender === "M")

const votarProibido = age < 16;
const votarOpcional = age >= 16 && age < 18 || age >= 70;
const votarObrigatorio = age >= 18 && age < 70;

console.log(votarProibido);
console.log(votarOpcional);
console.log(votarObrigatorio);


const tempoContaAtiva = 10;
const movimentacaoMensalMedia = 10000;
const nomeSujo = true;

const podeConcederEmprestimo = (tempoContaAtiva >= 10 || movimentacaoMensalMedia >= 10000) && !nomeSujo

console.log( podeConcederEmprestimo );


// C1 | C2 | C3  -->  (C1 || C2) && C3

// (V || V) && F
// V && F
// F




// &&
// C1 | C2 | R
// ------------
// V  | V  | V
// V  | F  | F
// F  | V  | F
// F  | F  | F

// ||
// C1 | C2 | R
// ------------
// V  | V  | V
// V  | F  | V
// F  | V  | V
// F  | F  | F

// ^
// C1 | C2 | R
// ------------
// V  | V  | F
// V  | F  | V
// F  | V  | V
// F  | F  | F

// !
// C | R
// -----
// V | F
// F | V


// OPERADOR TERNÁRIO
const condicaoX = false;
const emprestimoConcedido = false;

// disclaimer: não faça operadores ternários encadeados
const mensagem = condicaoX ?
	"condição x é verdadeira" :
	emprestimoConcedido ?
		"condição x é falsa mas, emprestimo concedido" :
		"condição x é falsa e o empréstimo não concedido";

console.log(mensagem);
