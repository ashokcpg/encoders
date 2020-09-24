let elements = document.querySelectorAll(".portfolio__project-container");
const projects = document.querySelector(".portfolio");
btns = document.querySelectorAll(".btn-small");
console.log(btns);
const btnClassName = "btn-small-active";
const hideItems = "hide-class";

// const btns = document.querySelectorAll(".tab-btn");

// const about = document.querySelector(".about");

// const articles = document.querySelectorAll(".content");

// projects.addEventListener("click", function (e) {
// 	const id = e.target.dataset.id;
// 	console.log(id);
// 	if (id) {
// 		//remove active from other buttons...

// 		btns.forEach(function (btn) {
// 			btn.classList.remove("active");
// 			e.target.classList.add("active");
// 		});

// 		// hide other articles...
// 		articles.forEach(function (article) {
// 			article.classList.remove("active");
// 		});

// 		const element = document.getElementById(id);
// 		element.classList.add("active");
// 	}
// });
