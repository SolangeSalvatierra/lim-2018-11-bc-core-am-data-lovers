const dataPoke = POKEMON.pokemon;
// Mostrando con template
const template = (list) => {
  let templateListPoke = '';
  // recorremos nuestro array con forEach
  list.forEach((dataPoke) => {
    // creamos un template(string) por cada elemento del array
    const card = `
      <div class='card-link'>
        <article class='blog-card'>
          <img class='post-image' src='${dataPoke.img}' />
          <h3 class='post-id'>${dataPoke.id}</h3>
          <div class='article-details'>
            <h4 class='post-title'>${dataPoke.name}</h4>
            <h6 class='post-category'>${dataPoke.type}</h6>
          </div>
        </article>
      </div>
    `;
    templateListPoke += card;
  });
  document.getElementById('allThePokemones').innerHTML = templateListPoke;
};
template(dataPoke);

// Mostrar Funcion Sort con Select 
const sortBy = document.getElementById('orderpokemon').addEventListener('change', (evt) => {
const selectedIndex = evt.currentTarget.selectedIndex;
  // sortBy.options[sortBy.selectedIndex].value;
  if (selectedIndex === 3) {
    template(POKE.sortData(dataPoke, 'name', 'A-Z'));
  } else if (selectedIndex === 4) {
    template(POKE.sortData(dataPoke, 'name', 'Z-A'));
  } else if (selectedIndex === 2) {
    template(POKE.sortData(dataPoke, 'number', 'asc'));
  } else if (selectedIndex === 1) {
    template(POKE.sortData(dataPoke, 'number', 'des'));
  } 
});

// Mostrar Funcion Filter con Select 
const condition = document.getElementById('typepokemon').addEventListener('change', (evt) => {
const selectedIndex = evt.currentTarget.selectedIndex;
  if (selectedIndex === 1) {
    template(POKE.filterData(dataPoke, 'Water' ));
  } else if (selectedIndex === 2) {
    template(POKE.filterData(dataPoke, 'Bug'));
  } else if (selectedIndex === 3) {
    template(POKE.filterData(dataPoke, 'Dragon'));
  } else if (selectedIndex === 4) {
    template(POKE.filterData(dataPoke, 'Electric'));
  } else if (selectedIndex === 5) {
    template(POKE.filterData(dataPoke, 'Ghost'));
  } else if (selectedIndex === 6) {
    template(POKE.filterData(dataPoke, 'Fire'));
  } else if (selectedIndex === 7) {
    template(POKE.filterData(dataPoke, 'Ice'));
  } else if (selectedIndex === 8) {
    template(POKE.filterData(dataPoke, 'Fighting'));
  } else if (selectedIndex === 9) {
    template(POKE.filterData(dataPoke, 'Normal'));
  } else if (selectedIndex === 10) {
    template(POKE.filterData(dataPoke, 'Grass'));
  } else if (selectedIndex === 11) {
    template(POKE.filterData(dataPoke, 'Psychic'));
  } else if (selectedIndex === 12) {
    template(POKE.filterData(dataPoke, 'Rock'));
  } else if (selectedIndex === 13) {
    template(POKE.filterData(dataPoke, 'Ground'));
  } else if (selectedIndex === 14) {
    template(POKE.filterData(dataPoke, 'Poison'));
  } else if (selectedIndex === 15) {
    template(POKE.filterData(dataPoke, 'Flying'));
  } 
});


// Nav Inicio
  document.getElementById('Start').addEventListener('click', () => {
  document.getElementById('home').style.display = 'block';
  document.getElementById('listdePokemones').style.display = 'none';
  document.getElementById('listCalcuPoke').style.display = 'none'; 
});

// Nav Order
  document.getElementById('Order').addEventListener('click', () => {
  document.getElementById('listdePokemones').style.display = 'block';
  document.getElementById('orderpokemon').style.display = 'block';
  document.getElementById('home').style.display = 'none';
  document.getElementById('typepokemon').style.display = 'none';
  document.getElementById('listCalcuPoke').style.display = 'none'; 
});

// Nav Filter
  document.getElementById('Filter').addEventListener('click', () => {
  document.getElementById('listdePokemones').style.display = 'block';
  document.getElementById('typepokemon').style.display = 'block';
  document.getElementById('home').style.display = 'none';
  document.getElementById('orderpokemon').style.display = 'none';
  document.getElementById('listCalcuPoke').style.display = 'none'; 
});

// Nav Calculate
  document.getElementById('Calculate').addEventListener('click', () => {
  document.getElementById('listCalcuPoke').style.display = 'block';
  document.getElementById('home').style.display = 'none';
  document.getElementById('listdePokemones').style.display = 'none';
});

// botton Conoce tus Pokemones
  document.getElementById('pokemones').addEventListener('click', () => {
  document.getElementById('listdePokemones').style.display = 'block';
  document.getElementById('home').style.display = 'none';
  document.getElementById('typepokemon').style.display = 'none';
  document.getElementById('listCalcuPoke').style.display = 'none'; 
});

/* const almuerzo = [
 {principal: 'arepa', postre: 'helado'},
 {principal: 'taco', postre: 'torta de queso'},
 {principal: 'pizza', postre: 'galletas'},
 {principal: 'sushi', postre: 'quesillo'},
];

const platosPrincipales = [];
for (let i = 0; i < almuerzo.length; i++) {
platosPrincipales.push(almuerzo[i].principal);
    
}
console.log(platosPrincipales);*/
/* const containerType = document.getElementById('contType');
containerType.addEventListener('click', (e) => {
 containerList.innerHTML = templateCard(filterData(arrPokemon, e.target.getAttribute('value')));
});

var listPokemon = POKEMON.pokemon ;
var typePoison = [];
for (let i = 0; i < listPokemon.length; i++){
 for(let x =0; x < listPokemon[i].type.length; x++)
 if(listPokemon[i].type[x] === 'Water'){
   typePoison.push(listPokemon[i].type)
 }

}
console.log(typePoison);*/

/* const contenedor = document.getElementById('lista-por-tipo');
const listaTipo = document.getElementById('listTipoPoke');
listaTipo.addEventListener('onchange', (e) =>{

	contenedor.innerHTML = filterData(listPokemon, e.target.getAttribute('value'));
});
//KYARA */