const pokemonTypes = {
  Bulbasaur: ["grass", "poison"],
  Charmander: ["fire"],
  Squirtle: ["water"],
  Chikorita: ["grass"],
  Cyndaquil: ["fire"],
  Totodile: ["water"],
  Treecko: ["grass"],
  Torchic: ["fire"],
  Mudkip: ["water"],
  Turtwig: ["grass"],
  Chimchar: ["fire"],
  Piplup: ["water"],
  Snivy: ["grass"],
  Tepig: ["fire"],
  Oshawott: ["water"],
  Chespin: ["grass"],
  Fennekin: ["fire"],
  Froakie: ["water"],
  Rowlet: ["grass", "flying"],
  Litten: ["fire"],
  Popplio: ["water"],
  Grookey: ["grass"],
  Scorbunny: ["fire"],
  Sobble: ["water"],
};

function determineWinner(pokemon1, pokemon2) {
  if (!pokemon1 || !pokemon2) {
    return "Both Pokemon must be selected to fight!";
  }

  if (pokemon1 === pokemon2) {
    return `${pokemon1} and ${pokemon2} beat each other up so much that Nurse Joy can't heal them. They die and Nurse Joy spirals into depression!`;
  }

  const type1 = pokemonTypes[pokemon1];
  const type2 = pokemonTypes[pokemon2];

  if (type1.includes("grass") && type2.includes("water")) {
    return `${pokemon1} gives ${pokemon2} a cut so bad ${pokemon2}'s bloodline ends!`;
  } else if (type1.includes("water") && type2.includes("fire")) {
    return `${pokemon1} gets ${pokemon2} so wet ${pokemon2} can't fight anymore!`;
  } else if (type1.includes("fire") && type2.includes("grass")) {
    return `${pokemon1} roasts ${pokemon2} so hard ${pokemon2} goes crying back to mommy!`;
  } else if (type1.includes("water") && type2.includes("grass")) {
    return `${pokemon2} gives ${pokemon1} a cut so bad ${pokemon1}'s bloodline ends!`;
  } else if (type1.includes("fire") && type2.includes("water")) {
    return `${pokemon2} gets ${pokemon1} so wet ${pokemon1} can't fight anymore!`;
  } else if (type1.includes("grass") && type2.includes("fire")) {
    return `${pokemon2} roasts ${pokemon1} so hard ${pokemon1} goes crying back to mommy!`;
  } else {
    return `${pokemon1} and ${pokemon2} are the same type, they resort to cannibalism. Professor Oak Wins!`;
  }
}

const fightButton = document.getElementById("fight-button");
fightButton.addEventListener("click", () => {
  const pokemon1 = document.getElementById("pokemon1-select").value;
  const pokemon2 = document.getElementById("pokemon2-select").value;
  const results = document.getElementById("results");
  results.textContent = determineWinner(pokemon1, pokemon2);
});
