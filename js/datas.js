const today = new Date();
console.log(today, typeof today, today instanceof Date);

const yesterday1 = new Date('2021-11-12');
const yesterday2 = new Date('2021,11,11');
const halloween = new Date('October 31, 2021 00:01:00');
const isoFormat1 = new Date('2021-11-12T17:23:40Z'); // UTC
const isoFormat2 = new Date('2021-11-12T17:23:40-03:00'); // UTC
// EM JS OS MESES VÃO DE 0 A 11
const allParams1 = new Date(2021, 10, 12, 15, 10, 17, 900);
const allParams2 = new Date(2021, 10, 12, 15, 10, 17);
const allParams3 = new Date(2021, 10, 12, 15, 10);
const allParams4 = new Date(2021, 10, 12, 15);
const allParams5 = new Date(2021, 10, 12);
const allParams6 = new Date(2021, 10);
const allParams7 = new Date(2021);
const allParams8 = new Date();
const allParams9 = new Date(halloween.getTime()/* em milissegundos */);
const now = Date.now(); // quantidade de milissegundos desde 01/01/1970 -> UNIX timestamp

console.log(yesterday1);
console.log(yesterday2);
console.log(halloween);
console.log(isoFormat1);
console.log(isoFormat2);
console.log(allParams1);
console.log(allParams2);
console.log(allParams3);
console.log(allParams4);
console.log(allParams5);
console.log(allParams6);
console.log(allParams7);
console.log(allParams8);
console.log(allParams9);
console.log(now);

console.log(today.getFullYear()); // ANO
console.log(today.getMonth()); // MÊS 0 A 11
console.log(today.getDate()); // DIA
console.log(today.getHours()); // HORAS
console.log(today.getMinutes()); // MINUTOS
console.log(today.getSeconds()); // SEGUNDOS
console.log(today.getMilliseconds()); // MILISSEGUNDOS
console.log(today.getTime()); // MILISSEGUNDOS DESDE 01/01/1970
console.log(today.getDay()); // DIA DA SEMANA 0 A 6

console.log(today.toDateString());
console.log(today.toISOString());
console.log(today.toUTCString());
console.log(today.toString());

// OPERAÇÕES COM DATAS

// ADICIONAR
const dias = 1000 * 60 * 60 * 24 * 30;
const futuro = new Date(Date.now() + dias);

console.log(futuro);
// COMPARAR
console.log(futuro.getTime() > Date.now());
