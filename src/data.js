// esta es una función de ejemplo
// puedes ver como agregamos la función a nuestro objeto global window

//const example = () => {
  //return 'example';
//};

//window.example = example;

const listPokemon = POKEMON.pokemon;
const filterData = (data, condition) =>{
  	let arrTipo = [];
	for (let i = 0; i < data.length; i++){
	for(let x =0; x < data[i].type.length; x++)
	if(data[i].type[x] === condition){
   arrTipo.push(data[i] , data[i].name , data[i].id)
   
  }
 }
 return arrTipo;
}

//funcion que pinta
//primero priorizar, hacerlo junta



