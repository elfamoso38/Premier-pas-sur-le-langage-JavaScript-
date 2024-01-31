// Déclaration des éléments à récupéré pour le carroussel
//Flèche
const arrowLeft = document.querySelector(".arrow_left");
const arrowRight = document.querySelector(".arrow_right");
//Image
const bannerImage = document.querySelector(".banner-img");
//Texte
const bannerText = document.querySelector("#banner p");
//Bullet point
const dotsContainer = document.getElementById("dots-Container");
const dots = document.querySelectorAll(".dot");
let index = 0;
// Déclaration d'un tableau pour gérer les différentes images et texte associé
const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	},
];

// Activation de la flèche de gauche lors du click
	arrowLeft.addEventListener("click", () => {
		dots[index].className = "dot";
		index--;
		if(0 > index) index = 3;
		console.log(index);
		bannerImage.src = "images/slideshow/"+ slides[index].image;
		bannerText.innerHTML = slides[index].tagLine;
		console.log("clickLeft");
		dots[index].className = "dot dot_selected";
	});
// Activation de la flèche de droite
	arrowRight.addEventListener("click", () => {
		dots[index].className = "dot";
		index++;
		if(4 == index) index = 0;
		console.log(index);
		bannerImage.src = "images/slideshow/"+ slides[index].image;
		bannerText.innerHTML = slides[index].tagLine;
		console.log("clickRight")
		dots[index].className = "dot dot_selected";
	});
