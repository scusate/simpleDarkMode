const body = document.querySelector("body");
const darkButton = document.querySelector(".dark-container");

darkButton.addEventListener("click", () => {
	darkButton.classList.toggle("dark");
	if(darkButton.classList.contains ("dark")){
		body.style = `background-color: #222831; color:#e4e6eb`;
		darkButton.style.backgroundColor = "#e4e6eb";
		darkButton.style.color = "#222831";
		darkButton.innerHTML = "Light Mode"
	}else{
		body.style = `background-color: #e4e6eb; color:#222831`
		darkButton.style.backgroundColor = "#222831";
		darkButton.style.color = "#e4e6eb";
		darkButton.innerHTML = "Dark Mode"
	}        
})