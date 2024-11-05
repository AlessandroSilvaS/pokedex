export class Pokemon{

    name:string;
    type:string;
    height:number;
    weight:number;
    sprite: string;

    constructor(name:string, type:string, height:number, weight:number, sprite:string){
        this.name = name;
        this.type = type;
        this.height = height;
        this.weight = weight;
        this.sprite = sprite;
    }

    async delay(timeMs:number): Promise<void>{
        return new Promise((resolve) => setTimeout(resolve, timeMs))
    }

    defineType(){
        switch (this.type) {
            case "normal":
                return "Boom!";
            case "fire":
                return "Whoosh!";
            case "water":
                return "Splash!";
            case "electric":
                return "Zap!";
            case "ice":
                return "Crack!";
            case "fighting":
                return "Pow!";
            case "poison":
                return "Hiss!";
            case "ground":
                return "Rumble!";
            case "flying":
                return "Whoosh!";
            case "psychic":
                return "Wooo...";
            case "bug":
                return "Buzz!";
            case "rock":
                return "Clunk!";
            case "ghost":
                return "Boo!";
            case "dragon":
                return "Roar!";
            case "dark":
                return "Snikt!";
            case "steel":
                return "Clang!";
            case "fairy":
                return "Tinkle!";
            default:
                return "Unknown sound!";
        }
    }        
    async move(movement:string){

        let namePokemon = this.name
        const outTexts:string[] = [
            `${namePokemon} usou ${movement}...`,
            `${this.defineType()}`,
            "Uau! Foi super efetivo...!"
        ]

        outTexts.forEach(async (text) => {
            await this.delay(5000)
            return(text)
        })
    }
}
