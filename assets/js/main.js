var pictures = ["assets/img/a1.jpg","assets/img/a2.jpg", "assets/img/a3.jpg", "assets/img/a4.jpg"];

var contenedorImgs = document.getElementsByClassName("cuadros")[0];

pictures.forEach(function(element){
	var img = document.createElement("img");
	img.setAttribute("src", element);
	img.setAttribute("class", "panda-cuadros");
	contenedorImgs.appendChild(img);
})