require('../src/data.js');

const input = 
[
  {id: '1', num: '001', name: 'Bulbasaur', type: [ 'Grass', 'Poison' ]},
  {id: '2', num: '002', name: 'Ivysaur', type: [ 'Grass', 'Poison' ]},
  {id: '3', num: '003', name: 'Venusaur', type: [ 'Grass', 'Poison' ]},
  {id: '4', num: '004', name: 'Charmander', type: ['Fire' ]},
  {id: '5', num: '005', name: 'Charmeleon', type: [ 'Fire' ]},
];

const output = [
  {id: '3', num: '003', name: 'Venusaur', type: [ 'Grass', 'Poison' ]},
  {id: '2', num: '002', name: 'Ivysaur', type: [ 'Grass', 'Poison' ]},
  {id: '5', num: '005', name: 'Charmeleon', type: [ 'Fire' ]},
  {id: '4', num: '004', name: 'Charmander', type: [ 'Fire' ]},
  {id: '1', num: '001', name: 'Bulbasaur', type: [ 'Grass', 'Poison' ]},
];

const output2 = [
  {id: '5', num: '005', name: 'Charmeleon', type: [ 'Fire' ]},
  {id: '4', num: '004', name: 'Charmander', type: ['Fire' ]},
  {id: '3', num: '003', name: 'Venusaur', type: [ 'Grass', 'Poison' ]},
  {id: '2', num: '002', name: 'Ivysaur', type: [ 'Grass', 'Poison' ]},
  {id: '1', num: '001', name: 'Bulbasaur', type: [ 'Grass', 'Poison' ]},
];

const output5 = 
[
  {id: '1', num: '001', name: 'Bulbasaur', type: [ 'Grass', 'Poison' ]},
  {id: '4', num: '004', name: 'Charmander', type: ['Fire' ]},
  {id: '5', num: '005', name: 'Charmeleon', type: [ 'Fire' ]},
  {id: '2', num: '002', name: 'Ivysaur', type: [ 'Grass', 'Poison' ]},
  {id: '3', num: '003', name: 'Venusaur', type: [ 'Grass', 'Poison' ]},
];

const output4 = 
[
  {id: '1', num: '001', name: 'Bulbasaur', type: [ 'Grass', 'Poison' ]},
  {id: '2', num: '002', name: 'Ivysaur', type: [ 'Grass', 'Poison' ]},
  {id: '3', num: '003', name: 'Venusaur', type: [ 'Grass', 'Poison' ]},
  {id: '4', num: '004', name: 'Charmander', type: ['Fire' ]},
  {id: '5', num: '005', name: 'Charmeleon', type: [ 'Fire' ]},
];

const output3 = [
  {id: '3', num: '003', name: 'Venusaur', type: [ 'Grass', 'Poison' ]},
  {id: '2', num: '002', name: 'Ivysaur', type: [ 'Grass', 'Poison' ]},
  {id: '1', num: '001', name: 'Bulbasaur', type: [ 'Grass', 'Poison' ]},
];

const output6 = 'El porcentaje del pokemon de tipo Fire es: 1.32%';

const input1 = [
  {id: '1', num: '001', name: 'Bulbasaur', type: [ 'Grass', 'Poison' ]},
  {id: '2', num: '002', name: 'Bulbasaur', type: [ 'Grass', 'Poison' ]}
];

const output7 = [
  {id: '1', num: '001', name: 'Bulbasaur', type: [ 'Grass', 'Poison' ]},
  {id: '2', num: '002', name: 'Bulbasaur', type: [ 'Grass', 'Poison' ]}
];

const input2 = [
  {id: '1', num: '001', name: 'Bulbasaur', type: [ 'Grass', 'Poison' ]},
  {id: '1', num: '002', name: 'Bulbasaur', type: [ 'Grass', 'Poison' ]}
];

const output8 = [
  {id: '1', num: '001', name: 'Bulbasaur', type: [ 'Grass', 'Poison' ]},
  {id: '1', num: '002', name: 'Bulbasaur', type: [ 'Grass', 'Poison' ]}
];


// que el usuario pueda Ordenar Alfabeticamente
describe('POKE', () => {
  it('Deberia ser objeto', () => {
    expect(typeof POKE).toBe('object');
  });
  describe('POKE.sortData', () => {
    it('deberia ser una funcion', () => {
      expect(typeof POKE.sortData).toBe('function');
    });
    it('deberia retornar un array ordenando alfabeticamente', () => {
      expect(POKE.sortData(input, 'name', 0)).toEqual(output);
    });
    it('deberia retornar un array ordenando alfabeticamente', () => {
      expect(POKE.sortData(input, 'name', 'A-Z')).toEqual(output5);
    });
    it('deberia retornar un array ordenando alfabeticamente', () => {
      expect(POKE.sortData(input1, 'name', 0)).toEqual(output7);
    });
    
    // que el usuario pueda Ordenar Ascendente y Descendente
    it('deberia retornar un array ordenando ascendentemente', () => {
      expect(POKE.sortData(input, 'number', 'asc')).toEqual(output4);
    });
    it('deberia retornar un array ordenando descendente', () => {
      expect(POKE.sortData(input, 'number', 0)).toEqual(output2);
    });
    it('deberia retornar un array ordenando descendente', () => {
      expect(POKE.sortData(input2, 'number', 0)).toEqual(output8);
    });
  });

  // que el usuario pueda Filtrar

  describe('POKE.filterData', () => {
    it('deberia ser una funcion', () => {
      expect(typeof POKE.filterData).toBe('function');
    });
    it('deberia retornar un array filtrando por tipon', () => {
      expect(POKE.filterData(input, 'Grass')).toEqual(output3);
    });
  });
});


// que el usuario pueda Calcular

describe('POKE.computeStats', () => {
  it('deberia ser una funcion', () => {
    expect(typeof POKE.computeStats).toBe('function');
  });
  it('deberia retornar un array calculado el % por tipon', () => {
    expect(POKE.computeStats(input, 'Fire')).toEqual(output6);
  });
}); 