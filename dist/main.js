import { Pokemon } from "./pokemon";
async function capture() {
    try {
        const response = await fetch("https://pokeapi.co/api/v2/pokemon/blastoise");
        if (!response.ok) {
            throw new Error("Network fall");
        }
        else {
            const datas = await response.json();
            return datas;
        }
    }
    catch {
        return "Oh, no! The Pokémon broke free!";
    }
}
capture().then((captured) => {
    let myPokemon = new Pokemon(captured.name, captured.types[0].type.name, captured.height, captured.weight, captured.sprites.front_default);
    let name = document.getElementById("name");
    let type = document.getElementById("type");
    let height = document.getElementById("height");
    let weight = document.getElementById("weight");
    let sprite = document.getElementById("sprite");
    let firstAbilityButton = document.getElementById("ability-button-F");
    let secondAbilityButton = document.getElementById("ability-button-S");
    if (typeof myPokemon !== "string") {
        name.innerHTML = `Name: ${myPokemon.name}`;
        type.innerHTML = `Type: ${myPokemon.type}`;
        height.innerText = `Height: ${myPokemon.height * 10} cm`;
        weight.innerHTML = `Weight: ${myPokemon.weight} kg`;
        sprite.src = myPokemon.sprite;
        if (firstAbilityButton && captured.abilities[0]) {
            firstAbilityButton.textContent = captured.abilities[0].ability.name;
        }
        if (secondAbilityButton && captured.abilities[1]) {
            secondAbilityButton.textContent = captured.abilities[1].ability.name;
        }
        function myPokemonUseThis(atack) {
            const prompt = document.getElementById('prompt');
            if (prompt) {
                if (atack === 'first' && firstAbilityButton.textContent) {
                    if (prompt.value === '') {
                        //prompt.value = myPokemon.move(firstAbilityButton.textContent)
                    }
                }
                else if (atack === 'second' && secondAbilityButton.textContent) {
                    myPokemon.move(secondAbilityButton.textContent);
                }
            }
        }
    }
});
