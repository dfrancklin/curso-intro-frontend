// API (Application Programming Interface) -> Interface para comunicação entre programas
// RESTFul API -> Arquitetura de Software baseada em REST
// REST (REpresentational State Transfer) -> Conjunto de regras para construção de uma API

// HTTP METHODS -> Representa uma ação a ser executada
// - GET -> recuperar / consultar / pegar um dado do serviço
// - POST -> criar um registro novo no serviço
// - PUT -> modificar um registro existente no serviço (preciso informar o registro completo)
// - PATCH -> modificar um registro existente no serviço (posso informar um registro com dados parciais)
// - DELETE -> deletar um registro existente no serviço
// - OPTIONS -> requisita as opções de comunicação para um determinado recurso

// HTTP STATUS -> A situação da requisição
// - 1xx -> representa respostas informacionais
// - 2xx -> representa respostas com sucesso
// - 3xx -> representa redirecionamento
// - 4xx -> representa respostas com erro do cliente
// - 5xx -> representa respostas com erro do servidor

// fetch(url, options);

const postList = document.querySelector("#posts");
// api.github.com/users/<username>
// api do notion
// api do The Movie Database
// api do Star Wars
// api do Pokemon
const url = "https://jsonplaceholder.typicode.com/posts";

fetch(url)
	.then((posts) => posts.json())
	.then((posts) => {
		posts.forEach((post) => {
			const postLi = document.createElement("li");
			postLi.textContent = `${post.id} - ${post.title}`;
			postLi.addEventListener("click", onClick(post));
			postList.appendChild(postLi);
		});
	});

// onClick({})();
// const fn = onClick({});
// fn();

function onClick(post) {
	return function onClickHandler(event) {
		const postLi = event.target;
		postLi.removeEventListener("click", onClickHandler);

		fetch(`${url}/${post.id}/comments`)
			.then((comments) => comments.json())
			.then((comments) => {
				if (!comments.length) {
					return;
				}

				const commentList = document.createElement("ul");

				comments.forEach((comment) => {
					const commentLi = document.createElement("li");
					commentLi.textContent = `${comment.email} - ${comment.title}`;
					commentList.appendChild(commentLi);
				});

				postLi.appendChild(commentList);
			});
	};
}

fetch("https://jsonplaceholder.typicode.com/posts/1")
	.then((response) => response.body.getReader().read())
	.then((data) => new TextDecoder("utf-8").decode(data.value))
	.then(JSON.parse)
	.then(console.log);
