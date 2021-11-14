const num = 0;

try {
	if (num === 0) {
		throw Error("Erro: divisão por zero!");
	}

	const divisao = 2 / num;

	console.log(divisao);
} catch (error) {
	console.error(error);
}


function divisao(num1, num2) {
	if (num2 === 0) {
		throw Error("não é possível divisão por zero");
	}

	return num1 / num2;
}

const resultado = divisao(3, 2);
console.log(resultado)

try {
	divisao(3, 0);
} catch(error) {
	alert(error.message);
}

const resultado2 = divisao(10, 2);
console.log(resultado2)


console.log("abriu arquivo");

try {
	console.log("escreveu no arquivo");

	divisao(3, 0);

	console.log("salvou o arquivo");
} catch(error) {
	console.log(error.message);
} finally {
	console.log("fechou o arquivo");
}
