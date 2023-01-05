// const getImagen1 = () => {
//   return new Promise((resolve, reject) => {
//     resolve("https://zvsdbxcdf");
//   });
// };

// getImagen1().then(console.log);

const getImagen = async () => {
  try {
    const apiKey = "AhtPMEYCwdPXIbGr75J140h1QDNtvnVg";
    const resp = await fetch(
      `https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`
    );
    const { data } = await resp.json();

    const { url } = data.images.original;

    const img = document.createElement("img");
    img.src = url;
    document.body.append(img);
  } catch (error) {
    console.error(error);
  }
};

getImagen();

// const getHeroeByIndexAsync = (id) => {
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         const heroe = heroes[id].name;
//         if (heroe) {
//           resolve(heroe);
//         } else {
//           reject("El heroe requerido no existe en la base de datos");
//         }
//       }, 1000);
//     });
//   };

//   getHeroeByIndexAsync(0)
//     .then((heroe) => console.log(`El heroe que buscas es ${heroe} `))
//     .catch((err) => console.warn(err));
