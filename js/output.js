const nome = "Diego";
// document.body.innerHTML = "<h1>Olá " + nome + "</h1>";
// document.body.innerHTML = `<h1>Hello ${nome}</h1>`;

// document.getElementById('mensagem').innerHTML = `<h1>Hello ${nome}</h1>`;
document.querySelector("#mensagem").innerHTML = `<h1>Hello ${nome}</h1>`;
document.write(`<h1>Hello ${nome}</h1>`);
alert(`Olá ${nome}`);
console.log(`Olá ${nome}`);
