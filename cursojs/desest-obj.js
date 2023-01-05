const persona = {
  nombre: "Risbel",
  edad: 44,
  clave: "Iron Man",
};

/*  Mala practica
console.log(persona.nombre);
console.log(persona.edad);
console.log(persona.clave);
*/

//Esto es la desestructiuracion, buena practica
/*
const { nombre, clave, anios} = persona;

console.log(`
${nombre}
${anios}
${clave}
`);
*/

const usesContext = ({ nombre, edad, clave, perro = "chiwawa" }) => {
  //const { edad, clave, nombre } = usuario;

  return {
    nombreClave: clave,
    anios: edad,
    latLon: {
      lat: 2323,
      lon: -6536,
    },
  };
};

const avenger = usesContext(persona);

//const { nombreClave, anios } = avenger;

//console.log(nombreClave, anios);

const extrerDatos = ({ nombreClave, anios, latLon: { lat, lon } }) => {
  console.log(nombreClave, anios, lat, lon);
};

extrerDatos(avenger);
