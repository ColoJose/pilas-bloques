/// <reference path = "EscenaDesdeMapa.ts" />
/// <reference path = "../EstadosDeEscena.ts" />
/// <reference path = "../../actores/libroPrimaria/Lita.ts" />
/// <reference path = "../../actores/libroPrimaria/Obstaculo.ts" />
/// <reference path = "../../actores/libroPrimaria/Ensalada.ts" />

class EscenaLita extends EscenaDesdeMapa {
    automata : Lita;

    constructor(mapas: Array<MapaEscena>) {
        super(new GeneradorDeMapasArray(mapas));
	}
	
	iniciar() {
		super.iniciar();
		this.construirFSM();
	}
	
	ajustarGraficos() {
		this.automata.escala *= this.escalaSegunCuadricula(1.9);
		this.automata.setY(this.automata.getY() + this.automata.getAlto() / 4);

		this.obtenerActoresConEtiqueta("Ensaladera").forEach(ensaladera => {
			ensaladera.enviarAlFrente();
			ensaladera.setY(ensaladera.getY() - ensaladera.getAlto() / 5);
		});

		this.obtenerActoresConEtiquetas(["Tomate", "Lechuga", "Ensaladera"]).forEach(actor => {
			actor.aprender(Flotar, { Desvio: 5 });
			actor.escala *= this.escalaSegunCuadricula(1.2) * 0.85;
		});

		this.obtenerActoresConEtiqueta("Obstaculo").forEach(obstaculo => {
			obstaculo.escala *= this.escalaSegunCuadricula(1.1);
		});
    }

    mapeoCuadricula() : MapeoCuadricula {
        return {
            'A': () => this.automata,
            'L': () => new Lechuga(),
            'T': () => new Tomate(),
            'E': () => new Ensaladera(),
            'O': (f, c) => this.obtenerObstaculo(f,c)
        }
    }

    obtenerAutomata() : Lita {
        return new Lita();
    }
    
    obtenerObstaculo(fila: number, columna: number): Obstaculo {
		let archivosObstaculos = ["obstaculo.lita1.png", "obstaculo.lita2.png", "obstaculo.lita3.png", "obstaculo.lita4.png"];
		return new Obstaculo(archivosObstaculos, (fila + 1) + (fila + 1) * (columna + 1));
    }

	construirFSM() {
		let builder = new BuilderStatePattern(this, 'inicial');
		builder.agregarEstado('tengoTomate');
		builder.agregarEstado('tengoLechuga');
		builder.agregarEstado('tengoTomateYLechuga');
		builder.agregarEstadoAceptacion('ensaladaLista');

		builder.agregarTransicion('inicial', 'tengoTomate', 'agarrarTomate');
		builder.agregarTransicion('inicial', 'tengoLechuga', 'agarrarLechuga');
		builder.agregarError('inicial', 'prepararEnsalada', '¡Todavía no tengo tomate ni lechuga!');

		builder.agregarTransicion('tengoTomate', 'tengoTomate', 'agarrarTomate');
		builder.agregarTransicion('tengoTomate', 'tengoTomateYLechuga', 'agarrarLechuga');
		builder.agregarError('tengoTomate', 'prepararEnsalada', '¡Todavía no tengo lechuga!');

		builder.agregarTransicion('tengoLechuga', 'tengoTomateYLechuga', 'agarrarTomate');
		builder.agregarTransicion('tengoLechuga', 'tengoLechuga', 'agarrarLechuga');
		builder.agregarError('tengoLechuga', 'prepararEnsalada', '¡Todavía no tengo tomate!');

		builder.agregarTransicion('tengoTomateYLechuga', 'tengoTomateYLechuga', 'agarrarTomate');
		builder.agregarTransicion('tengoTomateYLechuga', 'tengoTomateYLechuga', 'agarrarLechuga');
		builder.agregarTransicion('tengoTomateYLechuga', 'ensaladaLista', 'prepararEnsalada');

		this.estado = builder.estadoInicial();
	}

    archivoFondo() {
        return "fondo.lita.png";
    }
    cuadriculaX() {
		return 0;
	}
	cuadriculaY() {
		return -20;
	}
    opsCuadricula() {
		return { ancho: 340, alto: 380 };
	}
	opsCasilla() {
		return {
			grilla: 'casillas.duba.png',
			cantFilas: 1,
			cantColumnas: 16,
			bordesDecorados: true,
			relAspecto: 1,
		};
	}
}