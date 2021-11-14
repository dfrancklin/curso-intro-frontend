// GLOBAL
const nome = "Diego";
let documento = "00000000000";
console.log(nome);

// LOCAL
{
	const nome = "Aline";
	console.log(nome);
	const idade = 25;
	documento = "11111111111"; // problemático
	console.log(documento);
}

console.log(nome);
// console.log(idade); -> dá erro!
