
class Heroi {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    atacar() {
        let ataque;

        switch (this.tipo) {
            case "mago":
                ataque = "magia";
                break;
            case "guerreiro":
                ataque = "espada";
                break;
            case "monge":
                ataque = "artes marciais";
                break;
            case "ninja":
                ataque = "shuriken";
                break;
            default:
                ataque = "um ataque indefinido";
        }

        console.log(`o ${this.tipo} atacou usando ${ataque}`);
    }
}

// Exemplo de uso
const mago = new Heroi("Merlin", 30, "mago");
mago.atacar();

const guerreiro = new Heroi("Leo", 35, "guerreiro");
guerreiro.atacar();

const monge = new Heroi("Buda", 40, "monge");
monge.atacar();

const ninja = new Heroi("Naruto", 25, "ninja");
ninja.atacar();