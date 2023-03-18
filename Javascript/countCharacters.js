var countCharacters = function (str) {
  let jsonTable = {};
  for (let i = 0; i < str.length; i++) {
    if (jsonTable.hasOwnProperty(`${str[i]}`)) {
      jsonTable[`${str[i]}`] += 1;
    } else {
      jsonTable[`${str[i]}`] = 1;
    }
  }
  return jsonTable;
};

console.log(countCharacters('ghaufguagfjdgfau'));
