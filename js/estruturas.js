{
	const input = prompt("Informe a sua idade");
	const age = parseInt(input);
	const votarProibido = age > 0 && age < 16;
	const votarOpcional = age >= 16 && age < 18 || age >= 70 && age < 120;
	const votarObrigatorio = age >= 18 && age < 70;

	if (votarProibido) {
		console.log(`Você tem ${age} anos e votar não é permitido`);
	} else if (votarOpcional) {
		console.log(`Você tem ${age} anos e votar é opcional`);
	} else if (votarObrigatorio) {
		console.log(`Você tem ${age} anos e votar é obrigatório`);
	} else {
		console.log(`A idade informada é inválida: ${age}`);
	}
}

{
	const diaSemana = 7;

	switch (diaSemana) {
		case 0: // "domingo"
			console.log("amanhã é segunda ='(")
			break;
		case 1: // "segunda-feira"
			console.log("Hoje é segunda TT _ TT ")
			break;
		case 2: // "terça-feira"
			console.log("Hoje é ainda é terça :(")
			break;
		case 3: // "quarta-feira"
			console.log("Metade já foi!")
			break;
		case 4: // "quinta-feira"
			console.log("Amanhã é sexta \\o/ ")
			break;
		case 5: // "sexta-feira"
			console.log("Hoje é sexta uhuuuu ")
			break;
		case 6: // "sábado"
			console.log("Hoje é sábado :D ")
			break;
		default:
			console.log(`O dia da semana informado é inválido: ${diaSemana}`);
	}
}

{
	const diaSemana = -1;

	switch (diaSemana) {
		case 0: // "domingo"
		case 6: // "sábado"
			console.log("final de semana")
			break;
		case 1: // "segunda-feira"
		case 2: // "terça-feira"
		case 3: // "quarta-feira"
		case 4: // "quinta-feira"
		case 5: // "sexta-feira"
			console.log("dia útil")
			break;
		default:
			console.log(`O dia da semana informado é inválido: ${diaSemana}`);
	}
}

{
	// for (inicializador; expressão lógica; incremento) { bloco de código a ser repetido };

	// console.log(`${numero} x 1 = `, numero);
	// console.log(`${numero} x 2 = `, numero * 2);
	// console.log(`${numero} x 3 = `, numero * 3);
	// console.log(`${numero} x 4 = `, numero * 4);
	// console.log(`${numero} x 5 = `, numero * 5);
	// console.log(`${numero} x 6 = `, numero * 6);
	// console.log(`${numero} x 7 = `, numero * 7);
	// console.log(`${numero} x 8 = `, numero * 8);
	// console.log(`${numero} x 9 = `, numero * 9);
	// console.log(`${numero} x 10 = `, numero * 10);


	const numero = parseInt(prompt("Informe um número"));
	const limite = parseInt(prompt("Informe um limite"));
	const j = 7;

	for (let i = 1; i <= limite; i++) {
		console.log(`${numero} x ${i} = `, numero * i);

		if (i === j) {
			break;
		}
	}
}

{
	// while (expressão lógica) { bloco de código a ser repetido };

	const numero = parseInt(prompt("Informe um número"));
	let i = 1;

	while (true) {
		console.log(`${numero} x ${i} = `, numero * i);

		i++;

		if (i % 2 === 0){
			continue;
		}

		console.log("Qual número vezes um número Par é igual a um número Par");

		if (i >= 10) {
			break;
		}
	}
}

{
	// do { bloco de código a ser repetido } while(expressão lógica);

	let res;

	do {
		let i = 1;
		const numero = parseInt(prompt("Informe um número"));

		while (i <= 10) {
			console.log(`${numero} x ${i} = `, numero * i);
			i++;
		}

		res = confirm("Deseja continuar?");
	} while (res);
}
