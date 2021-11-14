// O DOM -> Document Object Model
// Representa documento HTML -> para manipular a estrutura, estilos e o conteúdo

// document.write();
// document.body.innerHTML = '';

// BUSCAM ELEMENTOS NA ÁRVORE DOM
// document.getElementById('mensagem'); // UM ELEMENTO
// document.getElementsByClassName('class-css'); // UM VETOR
// document.getElementsByTagName('h1'); // UM VETOR

const divMensagem = document.querySelector('#mensagem'); // UM ELEMENTO
divMensagem.innerHTML = '<h1>Mensagem</h1>';
// document.querySelectorAll('.class-css'); // UM VETOR

// CRIA ELEMENTOS
const div = document.createElement('div');
div.id = "nova-div";
div.classList.add('container', 'bg-black');
div.setAttribute('title', 'Nova div criada por JS');
// div.innerHTML = '<h2>Div criada programaticamente</h2>';
// div.textContent = '<h2>Div criada programaticamente</h2>';
div.textContent = 'Div criada programaticamente';

// ADICIONAR ELEMENTO
divMensagem.appendChild(div)
// document.body.appendChild(div);
// document.body.insertBefore(div, divMensagem);

// REMOVER ELEMENTO
// const parent = divMensagem.parentNode;
// parent.removeChild(divMensagem);

// ALTERANDO O ESTILO CSS DO ELEMENTO
div.style.color = 'white';
div.style.backgroundColor = 'gray';
div.style['background-color'] = 'gray';

// CAMMEL CASE

// JS .animate() -> developer.mozilla
// JS window -> developer.mozilla
// JS Events

const button = document.querySelector('#click-me-button');

// button.addEventListener('click', onClickHandler);
// button.removeEventListener('click', onClickHandler);

document.addEventListener('click', onClickHandler);


function onClickHandler(event) {
	console.log(this, event);
	alert('You clicked me!');

	// button.removeEventListener('click', onClickHandler);
}


// evento submit no JS
// evento click no JS
// evento mouseover no JS
// evento load no JS
// evento keydown no JS
// evento keyup no JS
// evento drag 'n' drop no JS
// evento animation no JS
// evento copy/cut/paste no JS
// evento mouse pointer no JS
// evento transition no JS
// evento touch no JS
