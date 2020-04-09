let candyType = ["Fruity", "Chocolatey", "Peanut Butter"];
let candyNames = [
  ["fruit Roll up", "Life Savers", "Skittles"],
  ["Hershey", "Cadbury", "Milky Way"],
  ["Reeses", "ButterFingers", "MrGood Bar"],
];

for (i = 0; i < candyType.length; i++) {
  for (j = 0; j < candyNames[i].length; j++) {
    console.log(`${candyType[i]}: ${candyNames[i][j]}`);
  }
}
