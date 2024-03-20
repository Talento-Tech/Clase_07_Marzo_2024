/* 
  1. Crear un nuevo componente que permita la carga de archivos .txt, en caso de ser de un formato diferente mostrar el error y solicitar la extensión correcta. 
  2. Crear un nuevo componente que permita la carga de varios tipos de archivos, mostrar la extensión y listar los archivos. 
*/

/* 
Crear una aplicación React que permita al usuario subir una imagen y mostrarla en pantalla. */

import React from "react";
import UploadImage from "./Components/UploadImage";

const App = () => {
  return (
    <div>
      <h1>App para subir imágenes</h1>
      <UploadImage />
    </div>
  );
};

export default App;
