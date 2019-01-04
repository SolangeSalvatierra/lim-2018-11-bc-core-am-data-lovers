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
  {id: '4', num: '004', name: 'Charmander', type: ['Fire' ]},
  {id: '1', num: '001', name: 'Bulbasaur', type: [ 'Grass', 'Poison' ]},
];
// que el usuario pueda Ordenar 
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
  });
});

