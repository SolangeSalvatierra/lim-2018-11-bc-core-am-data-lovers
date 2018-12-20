

//  Mostrando todos los pokemones.
document.getElementById("list-pokemones").innerHTML = pokemones;

//Mostrando con template
const ListPokemones = document.getElementById("list-pokemones");
ListPokemones.innerHTML = crearTemplateDeCard(listpokemon);
 

const pgStart=document.getElementById("btnStart");
pgStart.addEventListener("click",()=>{
  document.getElementById ("btnStart").style.display="block";
  document.getElementById ("btnOrder").style.display="none";
  document.getElementById ("btnFilter").style.display="none";
  document.getElementById ("btnCalculate").style.display="none";
});

const pgOrder=document.getElementById("btnOrder");
pgOrder.addEventListener("click",()=>{
 document.getElementById ("btnStart").style.display="none";
  document.getElementById ("btnOrder").style.display="block";
  document.getElementById ("btnFilter").style.display="none";
  document.getElementById ("btnCalculate").style.display="none";
});


// Funcion ORDENAR

const orderpokemon= document.getElementById ("orderpokemon");

orderpokemon.addEventListener ( "click", () => {
	listpokemon.innerHTML = crearTemplateDeCard(AOrder);
	});
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

const contenedor = document.getElementById("lista-por-tipo");
const listaTipo = document.getElementById("listTipoPoke");
listaTipo.addEventListener("onchange", (e) =>{

	contenedor.innerHTML = filterData(listPokemon, e.target.getAttribute("value"));
});
//KYARA