// PROMISE É UMA PROMESSA DE UM RETORNO
// ELA PODE TER OS SEGUINTES STATUS: pending, fulfilled + value, rejected + reason
const promise1 = new Promise(function (resolve, reject) {
	console.log('promise1: executando chamada na API');
	// resolve('promise1: resposta aguardada da API');

	reject('promise1: ocorreu um erro ao chamar a API');
});

promise1
	.then((response) => {
		console.log('deu certo 1!', response);

		return new Promise(function (resolve, reject) {
			console.log('promise2: executando chamada na API');
			resolve('promise2: resposta aguardada da API');

			// reject('promise2: ocorreu um erro ao chamar a API');
		});
	})
	.then((response) => {
		console.log('deu certo 2!', response);
	})
	.catch((error) => {
		console.log('deu erro :(', error);
	})
	.finally(() => {
		console.log('concluido');
	});

console.log(promise1);
