const usesState = (valor) => {
  return [
    valor,
    () => {
      console.log("hola mundo");
    },
  ];
};

const arr = usesState("Goku");

const [nombre, seNombre] = arr;

console.log(nombre);
seNombre();
