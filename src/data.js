/* const sortData = (data, sortBy, sortOrder) => {
  let arrOrder = [];
   ordenado alfabeticamente 
  if (sortBy === 'name') {
    if (sortOrder === 'A-Z') {
      arrOrder = data.sort(function(abc, bcd) {
        if (abc.name > bcd.name) return 1;
        if (abc.name === bcd.name) return 0;
        return -1;
      });
    } else {
      arrOrder = data.sort(function(abc, bcd) {
        if (bcd.name > abc.name) return 1;
        if (bcd.name === abc.name) return 0;
        return -1;
      });
    }

   ordenado por id 
  } else if (sortBy === 'number') {
    if (sortOrder === 'asc') {
      arrOrder = data.sort(function(abc, bcd) {
        if (abc.id > bcd.id) return 1;
        if (abc.id === bcd.id) return 0;
        return -1;
      });
    } else {
      arrOrder = data.sort(function(abc, bcd) {
        if (bcd.id > abc.id) return 1;
        if (bcd.id === abc.id) return 0;
        return -1;
      });
    }
  } 
  return arrOrder;
};*/

const sortData = (data, sortBy, sortOrder) => {
  let arrOrder = [];
  /* ordenado alfabeticamente */
  if (sortOrder === 'asc') {
    arrOrder = data.sort(function(abc, bcd) {
      if (abc[sortBy] > bcd[sortBy]) return 1;
      if (abc[sortBy] === bcd[sortBy]) return 0;
      return -1;
    });
  } else {
    arrOrder = data.sort(function(abc, bcd) {
      if (bcd[sortBy] > abc[sortBy]) return 1;
      if (bcd[sortBy] === abc[sortBy]) return 0;
      return -1;
    });
  }
  return arrOrder;
};

const filterData = (data, condition) => {
  let arrType = [];
  for (let i = 0; i < data.length; i++) {
    for (let x = 0; x < data[i].type.length; x++) {
      if (data[i].type[x] === condition) {
        arrType.push(data[i]);  
      }
    }  
  }
  return arrType;
};

const computeStats = (data, typePoke) => {
  let tipoPorcen = [];
  for (let i = 0; i < data.length; i++) {
    for (let x = 0; x < data[i].type.length; x++) {
      if (data[i].type[x] === typePoke) {
        tipoPorcen.push(data[i].type[x]);
      }
    }
  }
  return ('El porcentaje del pokemon de tipo ' + typePoke + ' es: ' + ((tipoPorcen.length) / 151 * 100).toFixed(2).bold() + '%');
};

window.POKE = {
  sortData,
  filterData,
  computeStats,
};