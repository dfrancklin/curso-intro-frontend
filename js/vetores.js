const a = [];
// const b = new Array();

console.log(a/* , b */);

const frutas = [/* 0 */'maçã', /* 1 */'abacaxi', /* 2 */'banana'];
const numeros = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
// const objects = [{}, {}, {}, {}, {}];
// const heterogeneo = ['string', 1, {}, [], true, false, null, null, null, undefined, undefined, 1, 'string'];

// ACESSA OS DADOS ARMAZENADOS NO VETOR VIA INDICES NUMÉRICOS
console.log(frutas[0]);
console.log(frutas[1]);
console.log(frutas[2]);

console.log(frutas, frutas.length);
console.log(numeros, numeros.length);

// FOR EACH
frutas.forEach(function (fruta, i/* , array */) {
	console.log(i, fruta/* , array */);
});

// FOR OF
for (let fruta of frutas) {
	console.log("for of", fruta);
}


// MAP
const newFrutas = frutas.map(/* função "transformadora" */ (fruta) => fruta.toUpperCase() + " **");
console.log(frutas, newFrutas);

const newNumeros = numeros.map((numero) => numero ** 2);
console.log(numeros, newNumeros);


// REDUCE
const resultado = numeros.reduce(function (/* valor acumulado */ acc, /* valorAtual */ curr/* , indiceAtual, array */) {
	return acc + curr;
}, /* valor inicial */0);
console.log(resultado);

const listaFrutas = frutas.reduce((acc, curr) => {
	if (!acc) return curr;

	return `${acc}, ${curr}`;
}, "");
console.log(listaFrutas);

const valorTotal = [{ valor: 100 }, { valor: 40 }, { valor: 17 }, { valor: 9 }].reduce((acc, curr) => acc + curr.valor, 0);
console.log(valorTotal);

const soma = [{ valor: 100 }, { valor: 40 }, { valor: 17 }, { valor: 9 }].reduce((acc, curr) => {
	acc.total += curr.valor;
	return acc;
}, { total: 0 });

console.log(soma);


// FIND
const maca = frutas.find(function (fruta) {
	return fruta === 'maçã';
});
console.log(maca);

const manga = frutas.find(function (fruta) {
	return fruta === 'manga';
});
console.log(manga);


// FIND INDEX
const abacaxi = frutas.findIndex(function (fruta) {
	return fruta === 'abacaxi';
});
console.log(abacaxi);

const manga = frutas.findIndex(function (fruta) {
	return fruta === 'manga';
});
console.log(manga);


// FILTER
const noAbacaxi = frutas.filter(function (fruta) {
	return fruta !== 'abacaxi';
})
console.log(noAbacaxi)

const somenteImpares = numeros.filter((numero) => numero % 2);
console.log(somenteImpares)


// SOME
const temImpares = numeros.some((numero) => numero % 2);
const temManga = frutas.some((fruta) => fruta === 'manga');
console.log(temImpares);
console.log(temManga);


// EVERY
const todosSaoImpares1 = numeros.every((numero) => numero % 2);
const todosSaoImpares2 = somenteImpares.every((numero) => numero % 2);
const todosSaoMaca = frutas.every((fruta) => fruta === 'maçã');
console.log(todosSaoImpares1);
console.log(todosSaoImpares2);
console.log(todosSaoMaca);


// SORT
console.log(frutas.sort())
console.log(numeros.sort())

const numeros2 = [4, 2, 5, 1, 3];

console.log(numeros2.sort(function (a, b) {
	if (a > b) {
		return 1;
	}

	if (a < b) {
		return -1;
	}

	return 0;
}))

console.log(numeros2.sort(function (a, b) {
	return a - b;
}))


// JOIN
console.log(frutas.join("\n"));
console.log(numeros.join(", "));
console.log([{ valor: 100 }, { valor: 40 }, { valor: 17 }, { valor: 9 }].map(JSON.stringify).join(", "));


// MÉTODOS QUE MODIFICAM O VETOR

// PUSH
frutas.push("uvas");
console.log(frutas);
numeros.push(10);
console.log(numeros);


// POP
const ultimaFruta = frutas.pop();
console.log(ultimaFruta);
const ultimoNumero = numeros.pop();
console.log(ultimoNumero);


// UNSHIFT
frutas.unshift("manga");
numeros.unshift(-1);
console.log(frutas);
console.log(numeros);


// SHIFT
const primeiraFruta = frutas.shift();
console.log(primeiraFruta);
const primeiroNumero = numeros.shift();
console.log(primeiroNumero);

// COISAS PARA VOCÊ PESQUISAR DEPOIS

// REVERSE
// SLICE
// CONCAT
// SPLICE
// INCLUDES
