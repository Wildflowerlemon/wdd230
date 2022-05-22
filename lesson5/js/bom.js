const input = document.querySelector("input");
const button = document.querySelector("button");
const list = document.querySelector("ul");



//Add Book & Chapter
	button.addEventListener("click", function() {
		if(document.querySelector("input").value.length == 0){
			alert("Please Enter a Book and Chapter")
	}	
		
		else {
				const myItem = input.value;
				input.value = "";
		
			const listItem = document.createElement("li");
			const listText = document.createElement("span");
			const listBtn = document.createElement("button");

			listItem.appendChild(listText);
			listText.textContent = myItem;
			listItem.appendChild(listBtn);
			listBtn.textContent = "X";
			list.appendChild(listItem);

			listBtn.addEventListener("click", () => {
				list.removeChild(listItem);
			})}



input.focus();
		});

