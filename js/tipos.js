/*
TIPOS PRIMITIVOS
boolean -> true | false
number -> int | float
string -> texto
object -> objeto
undefined -> quando há declaração de valor

OBJETOS -> TIPOS NÃO PRIMITIVOS
array -> coleção de valores
function -> função
null -> quando não tem valor
*/

const verdadeiro = true;
const falso = false;
const num = 30;
const texto = "Lorem ipsum dolor sit amet";
const objeto = {};
const vetor = [];
const funcao = function () { };
const nulo = null;
const naoDefinidoDeclarado = undefined;
let naoDefinido;

// typeof mostra o tipo de uma variável
console.log(verdadeiro, typeof verdadeiro);
console.log(falso, typeof falso);
console.log(num, typeof num);
console.log(texto, typeof texto);
console.log(objeto, typeof objeto);
console.log(vetor, typeof vetor);
console.log(funcao, typeof funcao);
console.log(nulo, typeof nulo);
console.log(naoDefinidoDeclarado, typeof naoDefinidoDeclarado);
console.log(naoDefinido, typeof naoDefinido);
