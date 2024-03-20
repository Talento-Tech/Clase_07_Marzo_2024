const express = require('express'); // Importamos el paquete express
const multer = require('multer'); // Para subir imágenes

const app = express(); // Creamos una instancia de express

const storage = multer.diskStorage({ // Configuramos el almacenamiento de imágenes
  destination: './uploads', // Dirección de destino 
  filename: (req, file, cb) => { // Función para el nombre de la imagen
    cb(null, file.originalname); // Nombre de la imagen
  }
});

const upload = multer({ storage }); // Configuramos el middleware de multer  
app.post('/upload', upload.single('image'), (req, res) => { // Función para subir imágenes
  res.send('Imagen subida correctamente');
});

app.listen(3000, () => { // Escuchamos en el puerto 3000
  console.log('Servidor iniciado en el puerto 3000');
});
