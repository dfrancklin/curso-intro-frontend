const cumprimento1 = () => alert('Olá Diego');
const cumprimento2 = (nome) => alert(`Olá ${nome}`);

const timeoutId1 = setTimeout(cumprimento1, 1000);
const timeoutId2 = setTimeout(() => cumprimento2('Diego'), 2000);
const timeoutId3 = setTimeout(cumprimento2, 3000, 'Diego');
clearTimeout(timeoutId1);


const start = Date.now();

setTimeout(() => console.log('Executou após ' + (Date.now() - start) + 'ms'), 1000);

while (true) {
	if (Date.now() - start > 3000) {
		console.log('Rodou por ' + (Date.now() - start) + 'ms')
		break;
	}
}


(() => {
	console.log('começou a executar aqui');

	setTimeout(() => console.log('Callback 1 executou'));

	console.log('continuou executando aqui');

	setTimeout(() => console.log('Callback 2 executou'), 0);

	console.log('terminou de executar aqui');
})();



setInterval(() => (document.body.innerHTML = new Date().toLocaleString()), 1000);

const intervalId = setInterval(() => console.log('interval', new Date()), 500);
clearInterval(intervalId)
