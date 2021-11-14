// FUNÇÃO NOMEADA
function log() {
	console.log("mensagem útil no console.");
}

log();

function log2(mensagem) {
	console.log(mensagem);
}

const msg = "outra mensagem útil";
log2(msg);

function divisao2por2() {
	return 2 / 2;
}

console.log(divisao2por2());

function divisao(num1, num2) {
	if (num2 === 0) {
		throw Error("não é possível divisão por zero");
	}

	return num1 / num2;
}

divisao(1, 2);

// FUNÇÃO ANONIMA

const anonima = function (msg) {
	alert(msg);
}

anonima("alerta!");

function lerArquivo(arquivo, cb) {
	console.log("lendo", arquivo);

	if (cb && typeof cb === 'function') {
		cb();
	}
}

const callback = function () {
	console.log("terminou 1");
}

lerArquivo("arquivo1.txt", callback);

lerArquivo("arquivo2.txt", function () {
	console.log("terminou 2");
});

lerArquivo("arquivo2.txt", "blabla");
lerArquivo("arquivo2.txt", null);
lerArquivo("arquivo2.txt");

// IIFE -> Immediately Invoked Function Expression
(function (nome) {
	alert(`Olá ${nome}`);
})("Diego");

// FUNÇÃO NOMEADA PASSADA PARA VARIÁVEL
const nomeada = function funcaoComErro () {
	throw new Error('Ocorreu um erro');
}

(function (cb) {
	cb();
})(nomeada);

// ARROW FUNCTION

const arrow = () => { }

// HOISTING

console.log(divisaoPor2(10));

function divisaoPor2(num) {
	const valor = divisao(num, 2);

	return valor;

	function divisao(num1, num2) {
		return num1 / num2;
	}
}
