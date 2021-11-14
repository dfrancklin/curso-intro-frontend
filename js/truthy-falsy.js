// falsy -> null, undefined, 0, ""

// if (null) { console.log("true") } else { console.log("false") }
// if (undefined) { console.log("true") } else { console.log("false") }
// if (0) { console.log("true") } else { console.log("false") }
// if ("") { console.log("true") } else { console.log("false") }

// truthy

// if (1) { console.log("true") } else { console.log("false") }
// if (2) { console.log("true") } else { console.log("false") }
// if ("a") { console.log("true") } else { console.log("false") }
// if ("asdasd") { console.log("true") } else { console.log("false") }
// if ([]) { console.log("true") } else { console.log("false") }
// if ({}) { console.log("true") } else { console.log("false") }


// const elemento = document.querySelector("#mensagem2");
// let elemento;

// if (!elemento) {
// 	console.log("Elemento #mensagem2 não existe")
// } else {
// 	elemento.innerHTML = "<h1> Olá mundo </h1>";
// }


// falsy -> null, undefined, 0, ""

console.log(null, !!null);
console.log(undefined, !!undefined);
console.log(0, !!0);
console.log("", !!"");

// truthy

console.log(1, !!1);
console.log(2, !!2);
console.log("a", !!"a");
console.log("asdasd", !!"asdasd");
console.log([], !![]);
console.log({}, !!{});
