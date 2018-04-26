
class Figuras {

	area: number;
	perimetro: number;
	figura: string;

	constructor(
		area:number,
		perimetro:number,
		figura: string
	){
		this.area = area;
		this.perimetro = perimetro;
		this.figura = figura;
	}

	generarArea():void {
		console.log("Mi área es: " + this.area);
	}

	generarPerimetro():void {
		console.log("Mi perímetro es: " + this.perimetro);
	}

	identificarFigura():void {
		console.log("Soy: " + this.figura );
	}

}




/*var readlineSync = require('readline-sync');
 
// Wait for user's response.
var userName = readlineSync.question('May I have your name? ');
console.log('Hi ' + userName + '!');
 
// Handle the secret text (e.g. password).
var favFood = readlineSync.question('What is your favorite food? ', {
	hideEchoBack: true // The typed text on screen is hidden by `*` (default).
});
console.log('Oh, ' + userName + ' loves ' + favFood + '!');*/