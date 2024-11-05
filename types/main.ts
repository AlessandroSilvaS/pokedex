import { Pokemon } from "./pokemon";

async function capture():Promise<any | string>{
    try{
        const response = await fetch("https://pokeapi.co/api/v2/pokemon/blastoise");
        if(!response.ok){
            throw new Error("Network fall")
        }else{
            const datas = await response.json()
            return datas
        }
    }catch{
        return "Oh, no! The Pokémon broke free!"
    }
}

capture().then((captured) => {
    let myPokemon = new Pokemon(captured.name, captured.types[0].type.name, captured.height, captured.weight, captured.sprites.front_default)

    let name = document.getElementById("name") as HTMLParagraphElement;
    let type = document.getElementById("type") as HTMLParagraphElement;
    let height = document.getElementById("height") as HTMLParagraphElement;
    let weight = document.getElementById("weight") as HTMLParagraphElement;
    let sprite = document.getElementById("sprite") as HTMLImageElement
    let firstAbilityButton = document.getElementById("ability-button-F") as HTMLButtonElement;
    let secondAbilityButton = document.getElementById("ability-button-S") as HTMLButtonElement;

    if(typeof myPokemon !== "string"){
        name.innerHTML = `Name: ${myPokemon.name}`;
        type.innerHTML = `Type: ${myPokemon.type}`;
        height.innerText = `Height: ${myPokemon.height * 10} cm`;
        weight.innerHTML = `Weight: ${myPokemon.weight} kg`;
        sprite.src = myPokemon.sprite

        if(firstAbilityButton && captured.abilities[0]){
            firstAbilityButton.textContent = captured.abilities[0].ability.name
        }

        if(secondAbilityButton && captured.abilities[1]){
            secondAbilityButton.textContent = captured.abilities[1].ability.name
        }

        function myPokemonUseThis(atack: string){
            const prompt = document.getElementById('prompt') as HTMLTextAreaElement

            if(prompt){
                if(atack === 'first' && firstAbilityButton.textContent){
                if(prompt.value === ''){
                    //prompt.value = myPokemon.move(firstAbilityButton.textContent)
                }
            }
            else if(atack === 'second' && secondAbilityButton.textContent){
                myPokemon.move(secondAbilityButton.textContent)
            }}
        }
    }
})
