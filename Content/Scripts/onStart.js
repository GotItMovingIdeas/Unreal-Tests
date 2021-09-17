console.log('********  Hola mundo ***********')
console.log(GWorld)
console.log(MyCube_C)

new MyCube_C(GWorld)

fetch('https://pokeapi.co/api/v2/pokemon/ditto')
  .then(response => response.json())
  .then(data => console.log(data));