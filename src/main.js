// Mostrando todos los pokemones.
/*document.getElementById("allThePokemones").innerHTML = listpokemon;*/


//Mostrando con template
const template = (list) => {
  let templateListPoke = "";
  // recorremos nuestro array con forEach
  list.forEach((dataPoke) => {
    // creamos un template(string) por cada elemento del array
    const card = `
      <div class="card-link">
        <article class="blog-card">
          <img class="post-image" src="${ dataPoke.img}" />
          <h3 class="post-title">${ dataPoke.id}</h3>
          <div class="article-details">
            <h4 class="post-category">${ dataPoke.name}</h4>
          </div>
        </article>
      </div>
    `;
    templateListPoke += card;
  });
  document.getElementById("allThePokemones").innerHTML = templateListPoke;
};
template(dataPoke);

//Funcion de ordenar de A-Z
const sortBy = document.getElementById("orderpokemon");
sortBy.addEventListener("change", (evt) => {
  debugger
  const selectedIndex = evt.currentTarget.selectedIndex;
  //sortBy.options[sortBy.selectedIndex].value;
  if (selectedIndex === 1) {
    template(sortData(dataPoke, 'name', 'asc'));
  } else if (selectedIndex === 2) {
    template(sortData(dataPoke, 'name', 'desc'));
  } else if (selectedIndex === 0) {
    template(sortData(dataPoke, 'number', "asc"));
  }
  
  //return 1;
});

/*const sortOrder = document.getElementById ("orderpokemon");
sortOrder.addEventListener("change",() => {
  sortOrder.options [sortOrder.selectedIndex].value; 
  template (sortData(dataPoke,name, 1));
  return 1;
});*/





//funcion mostrar ocultar del nav
const start = document.getElementById("Start");//EVENTO PARA entrar a la 2 pagina
start.addEventListener("click", () => {
  document.getElementById("home").style.display = "block";
  document.getElementById("listdePokemones").style.display = "none";
})

//Nav Start
const homeStart = document.getElementById("Start");
homeStart.addEventListener("click", () => {
  document.getElementById("").style.display = "none";
  document.getElementById("home").style.display = "block";
})

//Nav Order
const homeOrder = document.getElementById("Order");//EVENTO PARA entrar a la 2 pagina
homeOrder.addEventListener("click", () => {
  document.getElementById("home").style.display = "none";
  document.getElementById("listdePokemones").style.display = "block";
})

//Nav Filter
const homeFilter = document.getElementById("Filter");//EVENTO PARA entrar a la 3 pagina
homeFilter.addEventListener("click", () => {
  document.getElementById("home").style.display = "none";
  document.getElementById("listdePokemones").style.display = "block";
})

//Nav Calculate
const homeCalculate = document.getElementById("Calculate");//EVENTO PARA entrar a la 4 pagina
homeCalculate.addEventListener("click", () => {
  document.getElementById("home").style.display = "none";
  document.getElementById(" ").style.display = "block";
})

//botton Conoce tus Pokemones
const BtInicio = document.getElementById("pokemones");//EVENTO PARA entrar a la 2 pagina
BtInicio.addEventListener("click", () => {
  document.getElementById("home").style.display = "none";
  document.getElementById("listdePokemones").style.display = "block";
})



//KYARA
/*const almuerzo = [
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
/*const containerType = document.getElementById("contType");
containerType.addEventListener('click', (e) => {
 containerList.innerHTML = templateCard(filterData(arrPokemon, e.target.getAttribute("value")));
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

/*const contenedor = document.getElementById("lista-por-tipo");
const listaTipo = document.getElementById("listTipoPoke");
listaTipo.addEventListener("onchange", (e) =>{

	contenedor.innerHTML = filterData(listPokemon, e.target.getAttribute("value"));
});
//KYARA*/