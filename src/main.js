
//  Mostrando todos los pokemones.
/*document.getElementById("allThePokemones").innerHTML = listpokemon;*/






//Mostrando con template
const ListPokemones = document.getElementById("allThePokemones");
ListPokemones.innerHTML = Template(listpokemon);
 
//funcion mostrar ocultar del nav
const start=document.getElementById("Start");//EVENTO PARA entrar a la 2 pagina
start.addEventListener("click",()=>{
  document.getElementById ("home").style.display="block";
  document.getElementById ("listdePokemones").style.display="none";
})

//Nav Start
const homeStart=document.getElementById("Start");
homeStart.addEventListener("click",()=>{
  document.getElementById (" ").style.display="none";
  document.getElementById ("home").style.display="block";
})
//Nav Order
const homeOrder=document.getElementById("Order");//EVENTO PARA entrar a la 2 pagina
homeOrder.addEventListener("click",()=>{
  document.getElementById ("home").style.display="none";
  document.getElementById ("listdePokemones").style.display="block";
})
//Nav Filter
const homeFilter=document.getElementById("Filter");//EVENTO PARA entrar a la 3 pagina
homeFilter.addEventListener("click",()=>{
  document.getElementById ("home").style.display="none";
  document.getElementById ("listdePokemones").style.display="block";
})
//Nav Calculate
const homeCalculate=document.getElementById("Calculate");//EVENTO PARA entrar a la 4 pagina
homeCalculate.addEventListener("click",()=>{
  document.getElementById ("home").style.display="none";
  document.getElementById (" ").style.display="block";
})
//botton Conoce tus Pokemones
const BtInicio=document.getElementById("pokemones");//EVENTO PARA entrar a la 2 pagina
BtInicio.addEventListener("click",()=>{
  document.getElementById ("home").style.display="none";
  document.getElementById ("listdePokemones").style.display="block";
})





//mostrar pokemones de A-Z






/*const sortData = document.getElementById( "orderpokemon" );
sortData.addEventListener("change",() => {
  const listenSortBy = sortData.options [sortData.selectedIndex].value; 
  templateListOfCards(data.sortData(array,parseInt(allThePokemones[0]),parseInt(allThePokemones);
  return 1;
})
*/







/*function selectOrder(){
  let listOrder= document.getElementById ("orderpokemon").value;
  document.getElementById("allThePokemones"),innerHTML= crearTemplateDeCard(AOrder);
  }
  */







/*const orderpokemon= document.getElementById ("allThePokemones");
orderpokemon.addEventListener ( "click", () => {
  listpokemon.innerHTML = crearTemplateDeCard(AOrder);
  });*/




/*
//nombrando menu
const pagStar= document.getElementById("home");
const pagPoke= document.getElementById("listdePokemones");
const pagType= document.getElementById("listdePokemones");
const pagVs= document.getElementById();

//nombrando id
const btnStart= document.getElementById("btnStart");
const btnPoke= document.getElementById("btnOrder");
const btnType= document.getElementById("btnFilter");
const btnVs= document.getElementById("btnCalculate");

//creando block a pagina de inicio 
btnStart.addEventListener("click", () => {
  pagStar.style.display = "block";
  pagPoke.style.display = "none";
  pagType.style.display = "none";
  pagVs.style.display = "none";
});

btnPoke.addEventListener("click", () => {
  pagStar.style.display = "none";
  pagPoke.style.display = "block";
  pagType.style.display = "none";
  pagVs.style.display = "none";
});  
*/

// Funcion ORDENAR


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