const texto = `O meu nome é Diego e eu tenho ${18 + 10} anos`;

// LENGTH
// retorna o tamanho do texto
console.log(texto.length);

// SPLIT
// "quebra" o texto em um vetor com as partes
console.log(texto.split("Diego"));


// SLICE
// pega uma parte do texto com a posição inicial e posição final
console.log(texto.slice(13, 18));
// pega uma parte do texto começando a partir da posição inicial
console.log(texto.slice(30))
// pega uma parte do texto começando a partir da posição final
console.log(texto.slice(-16))


// SUBSTRING
// pega uma parte do texto com a posição inicial e posição final
console.log(texto.substring(13, 18));
// pega uma parte do texto começando a partir da posição inicial
console.log(texto.substring(30))


// SUBSTR
// pega uma parte do texto com a posição inicial e quantidade de caracteres
console.log(texto.substr(13, 5));
// pega uma parte do texto começando a partir da posição inicial
console.log(texto.substr(30))
// pega uma parte do texto começando a partir da posição final
console.log(texto.substr(-16))


// REPLACE
// troca uma parte do texto por outra
console.log(texto.replace("O meu nome é", "Me chamo").replace("Diego", "Aline").replace("28", "25"));


// CONCAT
// concatena 2 textos usando a operação de soma
console.log("O meu nome é " + "Diego" + " e eu tenho " + 28 + " anos");
// concatena 2 textos usando o método concat
console.log("O meu nome é ".concat("Diego".concat(" e eu tenho ", 10 + 18, " anos")));


// TRIM
// remove espaços do começo e do final do texto
const textoComEspacos = "   Diego   ";
console.log(textoComEspacos.trim());
console.log(textoComEspacos.trimEnd());
console.log(textoComEspacos.trimStart());
const textoVazio = "    ";
console.log(textoVazio.trim()); // ""


// CHAR AT
// pega um caracter em uma posição especifica do texto
console.log(texto.charAt(0))
console.log(texto.charAt(2))
console.log(texto[3])


// CHAR CODE AT
// pega um caracter em uma posição especifica do texto
console.log(texto.charCodeAt(0))
console.log(texto.charCodeAt(2))


// INDEX OF
// retorna a posição de uma parte do texto
console.log(texto.indexOf("Diego"));
// retorna a posição de uma parte do texto
console.log(texto.indexOf("Diego", 15));


// LAST INDEX OF
// retorna a última posição de uma parte do texto
console.log(texto.lastIndexOf("o"));
// retorna a última posição de uma parte do texto
console.log(texto.lastIndexOf("o", 4));


// STARTS WITH
// retorna se o texto começa ou não com um outro texto
console.log(texto.startsWith("O meu nome é"));
// retorna se o texto começa ou não com um outro texto
console.log(texto.startsWith("O meu nome é", 13));
// retorna se o texto começa ou não com um outro texto
console.log(texto.startsWith("Diego", 13));

// ENDS WITH
// retorna se o texto termina ou não com um outro texto
console.log(texto.endsWith("28 anos"));
// retorna se o texto termina ou não com um outro texto
console.log(texto.endsWith("28 anos", 13));
// retorna se o texto termina ou não com um outro texto
console.log(texto.endsWith("tenho",29));

// INCLUDES
// retorna se o texto contém ou não um outro texto
console.log(texto.includes("Diego"));
// retorna se o texto contém ou não um outro texto
console.log(texto.includes("Aline"));

// MATCH
// testa se o texto corresponde a expressão regular
console.log(texto.match(/Diego/g));
// testa se o texto corresponde a expressão regular
console.log(texto.match(/Aline/g));
