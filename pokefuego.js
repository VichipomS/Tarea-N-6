let pokemon = [
    {
      nombre: 'Pikachu',

      tipo: 'Eléctrico'
    },
    {
      nombre: 'Charmander',

      tipo: 'Fuego'
    },
    {
      nombre: 'Bulbasaur',

      tipo: 'Planta'
    },
    {
      nombre: 'Squirtle',

      tipo: 'Agua'
    },
    {
      nombre: 'Charmeleon',

      tipo: 'Fuego'
    },
    {
      nombre: 'Weedle',

      tipo: 'Bicho'
    },
    {
      nombre: 'Charizard',

      tipo: 'Fuego'
    }
  ];
  
  let pokemonTipoFuego = pokemon

    .filter(function(pokemon) {
      return pokemon.tipo.toLowerCase() === 'fuego';
    })

    .map(function(pokemon) {
      return pokemon.nombre;
    });


    
  
  console.log(pokemonTipoFuego);
  