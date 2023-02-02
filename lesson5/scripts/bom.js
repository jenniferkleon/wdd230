//Create three variables that hold references to the input, button, and list elements using const.
//Create an click event listener for the Add Chapter button using addEventListener and an anonymous function.  
//Example:  button.addEventListener('click', function() { ...



const list = document.querySelector("ul");
const input = document.querySelector("input");
const button = document.querySelector("button");

button.addEventListener("click", () => {
	const myItem = input.value;
	input.value = "";

	const listItem = document.createElement("li");
	const listText = document.createElement("span");
	const listBtn = document.createElement("button");

	listItem.appendChild(listText);
	listText.textContent = myItem;
	listItem.appendChild(listBtn);
	listBtn.textContent = "❌";
	list.appendChild(listItem);

	listBtn.addEventListener("click", () => {
		list.removeChild(listItem);
	});

	input.focus();
});
    