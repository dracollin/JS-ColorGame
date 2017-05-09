var numSquares = 6;
var colors = [];
var pickedColor;
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");

init();

function init(){
	setupModeButtons();
	setupSquares();
	reset();
}

function setupModeButtons(){
	for(var i = 0; i < modeButtons.length; i++){
		modeButtons[i].addEventListener("click", function(){
			modeButtons[0].classList.remove("selected");
			modeButtons[1].classList.remove("selected");
			this.classList.add("selected");
			this.textContent === "Easy" ? numSquares = 3: numSquares = 6;
			reset();
		});
	}
}

function setupSquares(){
	for(var i = 0; i < squares.length; i++){
	//adiciona clique a quadrados
	squares[i].addEventListener("click", function(){
			//pega a cor do quadrado clicado
			var clickedColor = this.style.background;
			//compara a cor com a pickedColor
			if(clickedColor === pickedColor){
				messageDisplay.textContent = "CORRETO!";
				resetButton.textContent = "Jogar novamente?"
				changeColors(clickedColor);
				h1.style.background = clickedColor;
			} else {
				this.style.background = "#232323";
				messageDisplay.textContent = "Tente novamente."
			}
		});
}
}

function reset(){
	colors = generateRandomColors(numSquares);
	//escolher qualquer cor do array
	pickedColor = pickColor();
	//troca o colorDisplay para ficar igual ai pickedColor
	colorDisplay.textContent = pickedColor;
	resetButton.textContent = "Novas Cores"
	messageDisplay.textContent = "";
	//troca as cores dos quadrados
	for(var i = 0; i < squares.length; i++){
		if(colors[i]){
			squares[i].style.display = "block"
			squares[i].style.background = colors[i];
		} else {
			squares[i].style.display = "none";
		}
	}
	h1.style.background = "steelblue";
}

resetButton.addEventListener("click", function(){
	reset();
})

function changeColors(color){
	//loop por todos os quadrados
	for(var i = 0; i < squares.length; i++){
		//altera cada cor para corresponder
		squares[i].style.background = color;
	}
}

function pickColor(){
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateRandomColors(num){
	//faz uma array
	var arr = []
	//repete num
	for(var i = 0; i < num; i++){
		//pega uma cor aleartoria e coloca no arr
		arr.push(randomColor())
	}
	//retorna o array
	return arr;
}

function randomColor(){
	//escolhe "red" de 0 - 255
	var r = Math.floor(Math.random() * 256);
	//escolhe "green" de 0 -255
	var g = Math.floor(Math.random() * 256);
	//escolhe "blue" de 0 -255
	var b = Math.floor(Math.random() * 256);
	return "rgb(" + r + ", " + g + ", " + b + ")";
}