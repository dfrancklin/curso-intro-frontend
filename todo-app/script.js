(() => {
	const form = document.querySelector("#todo-form");
	const input = form.querySelector("#todo-task");
	const submitBtn = form.querySelector('button[type="submit"]');
	const target = document.querySelector("#todo-list");
	const clearDoneBtn = document.querySelector("#clear-done");
	const clearAllBtn = document.querySelector("#clear-all");

	const storage = localStorage.getItem("todo-list");
	let todoList = storage ? JSON.parse(storage) : [];
	let index = Math.max(0, ...todoList.map((it) => it.id)) + 1;

	update();

	input.addEventListener("input", onInput);
	form.addEventListener("submit", onAddTodo);
	clearDoneBtn.addEventListener("click", onClearDone);
	clearAllBtn.addEventListener("click", onClearAll);

	function onInput() {
		submitBtn.disabled = !input.value.trim();
	}

	function onAddTodo(event) {
		event.preventDefault();

		const text = input.value;

		if (!text.trim()) {
			return;
		}

		const todo = { id: index++, text, done: false };
		todoList.push(todo);

		input.value = "";

		update();

		console.log(todoList);
	}

	function update() {
		target.innerHTML = "";

		clearDoneBtn.disabled =
			!todoList.length || !todoList.some((it) => it.done);
		clearAllBtn.disabled = !todoList.length;

		localStorage.setItem("todo-list", JSON.stringify(todoList));

		if (!todoList.length) {
			target.innerHTML =
				'<li class="list-group-item d-flex justify-content-between align-items-center lead">You cleared all your task today! Congratulations!</li>';
			return;
		}

		todoList
			.sort(sort)
			.forEach((todo) => target.appendChild(createListItem(todo)));

		function sort(a, b) {
			if (a.done && !b.done) {
				return 1;
			}

			if (!a.done && b.done) {
				return -1;
			}

			return 0;
		}

		function createListItem(todo) {
			const listItem = document.createElement("li");
			listItem.classList.add(
				"list-group-item",
				"d-flex",
				"justify-content-between",
				"align-items-center"
			);

			listItem.appendChild(createDiv(todo));
			todo.done && listItem.appendChild(createButton(todo));

			return listItem;

			function createButton(todo) {
				const button = document.createElement("button");
				button.classList.add("btn", "btn-warning", "rounded-pill");
				button.textContent = "Remove";
				button.addEventListener("click", onRemoveTodo(todo));

				return button;
			}

			function createDiv(todo) {
				const div = document.createElement("div");
				div.classList.add("flex-grow-1");
				div.appendChild(createCheckbox(todo));
				div.appendChild(createLabel(todo));

				return div;

				function createCheckbox(todo) {
					const checkbox = document.createElement("input");
					checkbox.type = "checkbox";
					checkbox.id = `task-${todo.id}`;
					checkbox.checked = todo.done;
					checkbox.classList.add("form-check-input", "me-1");
					checkbox.addEventListener("change", onToggleTodo(todo));

					return checkbox;
				}

				function createLabel(todo) {
					const label = document.createElement("label");
					label.textContent = todo.text;
					label.setAttribute("for", `task-${todo.id}`);
					label.style.cursor = "pointer";

					todo.done &&
						label.classList.add(
							"text-muted",
							"text-decoration-line-through"
						);

					return label;
				}
			}
		}
	}

	function onRemoveTodo(todo) {
		return () => {
			todoList = todoList.filter((it) => it.id !== todo.id);
			update();
		};
	}

	function onToggleTodo(todo) {
		return () => {
			todo.done = !todo.done;
			update();
		};
	}

	function onClearDone() {
		todoList = todoList.filter((todo) => !todo.done);
		update();
	}

	function onClearAll() {
		todoList = [];
		update();
	}
})();
