/*let listpokemon = POKEMON.pokemon;
let pokemon = JSON.stringify (listpokemon);
document.getElementById ("list-pokemones").innerHTML = pokemon;*/

// esta es una función de ejemplo
// puedes ver como agregamos la función a nuestro objeto global window



 
 

 
 const dataPoke = POKEMON.pokemon;

 const sortData = (data,sortBy,sortOrder) => {
    let arrOrder = [] ;

    if (sortBy === name) {
 arrOrder = data.sort(function (a,b){
     if (a.name > b.name) {
       return 1;
     }
 
     if (a.name < b.name) {
       return -1;
     }
 
   });

   return arrOrder;
  };
 
};
 
window.POKE = { 
  sortData,
  filterData,
 };
 










/*const filterData = (data, condition) =>{
  	let arrTipo = [];
	for (let i = 0; i < data.length; i++){
	for(let x =0; x < data[i].type.length; x++)
	if(data[i].type[x] === condition){
   arrTipo.push(data[i] , data[i].name , data[i].id)
   
  }
 }
 return arrTipo;
}
*/










/*let list = POKEMON.pokemon;
for (let i = 0; i < list.length; i++){
  const abc= apokemon [i]
console.log (abc.name);}

var arrpokemon = POKEMON.pokemon
for (var i = 0; i < arrpokemon.length; i++) {
 console.log(arrpokemon[i].name);
}
*/
