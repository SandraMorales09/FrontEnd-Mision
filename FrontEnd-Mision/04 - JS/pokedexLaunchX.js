const fetchPokemon = () => {
    const url = "http//pokeap1.co/ap1/v2/pokemon/chikorita";
    fetch(url).then((res) => {
        console.log(res);
        return res.json();
    }).then((data) => {
        console.log(data);
        let pokeInmg = data.sprites.front_default;
        console.log(pokeImg);
    })
}

fetchPokemon();