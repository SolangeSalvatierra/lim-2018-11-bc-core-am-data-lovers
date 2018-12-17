let arrpokemon = POKEMON.pokemon
//for (let i = 0; i < arrpokemon.length; i++){
  //console.log(arrpokemon[i].name);}
console.log (arrpokemon.sort(function (a,b){
    if (a.name > b.name) {
      return 1;
    }

    if (a.name < b.name) {
      return -1;
    }
  
}));

let apokemon = Object.values(POKEMON.pokemon )
for (let i = 0; i < apokemon.length; i++){
  const abc= apokemon [i]
console.log (abc.name);}