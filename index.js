function dwarfRollCall(dwarves) {
  let dwarvesnumber = [];
  for (let i = 0; i < dwarves.length; i++) {
    dwarvesnumber.push(`${i+1}. ${dwarves[i]} `);
  }
  return dwarvesnumber.join("")
}

function summonCaptainPlanet(planeteerCalls) {
  let shoutCaptainPlanet = [];
  for (let i = 0; i < planeteerCalls.length; i++) {
    shoutCaptainPlanet.push(`${planeteerCalls[i].toUpperCase()}!`);
  }
  return shoutCaptainPlanet;
}

function longPlaneteerCalls(words) {
  for (let i = 0; i < words.length; i++) {
    if (words[i].length > 4) {
      return true;
    } else {
      return false;
    }
  }
}

function findTheCheese(foods) {
  var cheesetypes = ["cheddar", "gouda", "camenbert"]
  for (let i = 0; i < foods.length; i++)  {
    if(cheesetypes.include(foods[i]))  {
      return foods[i];
    }
  }
}
