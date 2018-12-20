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

const contenedor = document.getElementById("lista-por-tipo");
const listaTipo = document.getElementById("listTipoPoke");
listaTipo.addEventListener("onchange", (e) =>{

	contenedor.innerHTML = filterData(listPokemon, e.target.getAttribute("value"));
});
