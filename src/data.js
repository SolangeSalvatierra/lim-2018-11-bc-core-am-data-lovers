let listpokemon = POKEMON.pokemon;
let pokemon = JSON.stringify (listpokemon);
document.getElementById ("list-pokemones").innerHTML = pokemon;



/*let listpokemon = POKEMON.pokemon
for (let i = 0; i < listpokemon.length; i++) {
 console.log(listpokemon[i].id);
}

document.getElementById("list-pokemones").innerHTML = listpokemon;*/





/*let list = POKEMON.pokemon;
for (let i = 0; i < list.length; i++){
  const abc= apokemon [i]
console.log (abc.name);}

var arrpokemon = POKEMON.pokemon
for (var i = 0; i < arrpokemon.length; i++) {
 console.log(arrpokemon[i].name);
}
*/












/*let arrpokemon = POKEMON.pokemon
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
console.log (abc.name);}*/