import heroes from "./data/heroes";

// const promesa = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve(heroes[0]);
//     //reject("no se pudo manejar el error");
//   }, 2000);
// });

// promesa.then((heroe) =>
//   console.log("Peticion efectuada con exito, su heroe es", heroe)
// );

// promesa.catch((err) => console.warn(err));

const getHeroeByIndexAsync = (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const heroe = heroes[id].name;
      if (heroe) {
        resolve(heroe);
      } else {
        reject("El heroe requerido no existe en la base de datos");
      }
    }, 1000);
  });
};

getHeroeByIndexAsync(0)
  .then((heroe) => console.log(`El heroe que buscas es ${heroe} `))
  .catch((err) => console.warn(err));
