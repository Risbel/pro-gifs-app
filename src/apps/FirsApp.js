import React from "react";
import PropTypes from "prop-types";

const FirstApp = ({ saludo, subtitle }) => {
  //   const objet = {
  //     raza: "perro",
  //     nombre: "Can",
  //   };

  return (
    <>
      <h1> {saludo} </h1>
      <h3>{subtitle}</h3>
      {/* imprimiendo objetos    */}
      {/* <pre> {JSON.stringify(objet, null, 3)} </pre> */}
    </>
  );
};

FirstApp.propTypes = {
  saludo: PropTypes.string.isRequired,
};

FirstApp.defaultProps = {
  subtitle: "this is a subtitle",
};

export default FirstApp;
