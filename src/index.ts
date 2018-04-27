//import { FigureInterface } from './figure.interface';

var readlineSync = require('readline-sync');

class Figura {
	private tipo: string;

	constructor( tipo:string ){
		this.tipo = tipo;
	}

	protected obtenerNombreFigura(): string {
		console.log(this.tipo);
		return this.tipo;
	}
}

abstract class Operaciones {
	abstract obtenerParametros(): void;
	abstract sacarArea(): number;
	abstract sacarPerimetro(): number;
}

class Triangulo extends Figura implements Operaciones {
	private lado:number = 0; 
	private altura:number = 0;

	constructor(){
		super('Figura: triangulo');
		this.obtenerParametros();
		this.obtenerNombreFigura();
	}

	obtenerParametros() {
		this.lado = readlineSync.question('Ingresa lado: ');
		this.altura = readlineSync.question('Ingresa altura: ');
	}

	sacarArea() {
		console.log( 'Area: ' + (this.lado * this.altura) / 2 );
		return (this.lado * this.altura) / 2;
	}

	sacarPerimetro() {
		console.log( 'Perímetro: ' + this.lado * 3);
		return this.lado * 3;
	}
}

var figura1 = new Triangulo();
figura1.sacarArea();
figura1.sacarPerimetro();

