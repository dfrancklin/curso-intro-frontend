// async function namedFn() { }
// const anonym = async function () { }
// const anonym = async () => { }

// async function getName() {
// 	return 'Diego';
// }

// (async () => {
// 	const name = await getName();
// 	console.log(name);
// })();

// (async () => {
// 	const postList = document.querySelector("#posts");
// 	const url = "https://jsonplaceholder.typicode.com/posts";

// 	// const posts = await fetch(url).then(res => res.json());
// 	const response = await fetch(url);
// 	const posts = await response.json();
// 	posts.forEach((post) => {
// 		const postLi = document.createElement("li");
// 		postLi.textContent = `${post.id} - ${post.title}`;
// 		postLi.addEventListener("click", onClick(post));
// 		postList.appendChild(postLi);
// 	});

// 	function onClick(post) {
// 		return async function onClickHandler(event) {
// 			const postLi = event.target;
// 			postLi.removeEventListener("click", onClickHandler);

// 			const response = await fetch(`${url}/${post.id}/comments`);
// 			const comments = await response.json();

// 			if (!comments.length) {
// 				return;
// 			}

// 			const commentList = document.createElement("ul");

// 			comments.forEach((comment) => {
// 				const commentLi = document.createElement("li");
// 				commentLi.textContent = `${comment.email} - ${comment.title}`;
// 				commentList.appendChild(commentLi);
// 			});

// 			postLi.appendChild(commentList);
// 		};
// 	}
// })();

async function divisao(num1, num2) {
	if (num2 === 0) {
		throw new Error("divisão por zero");
	}

	return num1 / num2;
}

(async () => {
	try {
		const resultado = await divisao(2, 0);
		console.log(resultado);
		// .then(console.log)
		// .catch((error) => console.log("erro tratado -> ", error));
	} catch (error) {
		console.log("erro tratado -> ", error);
	}
})();
