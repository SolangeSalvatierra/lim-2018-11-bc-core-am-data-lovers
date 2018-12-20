
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
