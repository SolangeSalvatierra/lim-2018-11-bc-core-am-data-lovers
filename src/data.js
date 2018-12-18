/*let listpokemon = POKEMON.pokemon;
let pokemon = JSON.stringify (listpokemon);
document.getElementById ("list-pokemones").innerHTML = pokemon;*/


// esta es una función de ejemplo
// puedes ver como agregamos la función a nuestro objeto global window

/*const example = () => {
  return 'example';
};

window.example = example;*/

let listpokemon = POKEMON.pokemon
let pokemones = [];
for (let i = 0; i < listpokemon.length; i++) {
  pokemones.push(listpokemon[i].id);
}

//Funcion para pintar tarjetas con datos pokemon
const crearTemplateDeCard = (data) => {
  let templateListOfCards = '';
  // recorremos nuestro array con forEach
  data.forEach((pokemon) => {
    // creamos un template(string) por cada elemento del array
    const card = `
      <div class="card-link">
        <article class="blog-card">
          <img class="post-image" src="${ pokemon.img }" />
          <h3 class="post-title">${ pokemon.id }</h3>
          <div class="article-details">
            <h4 class="post-category">${ pokemon.name }</h4>
          </div>
        </article>
      </div>
    `;
    templateListOfCards += card;
  })
  return templateListOfCards
};


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