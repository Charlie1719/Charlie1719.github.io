//Escribe un comentario explicando para qué sirve http
import http from 'http'; //sirve para usar el módulo HTTP integrado, que permite crear servidores web o hacer solicitudes HTTP.
//Escribe un comentario explicando para qué sirve fs
//hola charlie kirk
import fs from 'fs'; //permite interactuar con archivos y directorios en el servidor


    //Esta función deberá mostrar deberá mostrar una página HTML 
    //con la bienvenida a tu proyecto
    function darBienvenida(req, res) {
       //Agrega lo mínimo necesario en bienvenida.html
       console.log("Bienvenido usuario promedio");
      
      fs.readFile('bienvenida.html', 'utf8', (error, data) => {
        if (error) {
           //Escribe qué significa el 500 
            //El 500 es un codigo o mensaje de error que indica que algo fallo al procesar la solicitud
          res.writeHead(500, { 'Content-Type': 'text/plain' });
          res.end('Oh no!!!!');
          return;
        }
        //Escribe qué significa el 200
          ////El 200 es un codigo o mensaje que seria que todo salio bien, OK
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(data);
    });
    }


    //Esta función deberá enviar un json con los datos de las mascotas
    function getMascotas(req, res) {
        //Esto representa un objeto JSON de una mascota
        //Agrega otra mascota
        const mascotas = [
            {
            "nombre": "Pikachu",
            "color": "Amarillo"
            },
            {
            "nombre": "Rodo",
            "color": "Blanco"
            }
          ];  
      res.writeHead(200, { 'Content-Type': 'application/json' });
      
      //Escribe qué hace la función stringify y por qué la tenemos que usar
        // JSON.stringify convierte un objeto o arreglo de JavaScript a texto JSON
      // Se usa porque HTTP solo puede enviar texto, no objetos directamente
      res.end(JSON.stringify(mascotas));
    }

     function mostrarMascotas(req, res) {
        //Construye una página básica adpotantes.html HECHO PE MI CAUSA, PERU ES CLAVE
        fs.readFile('mascotas.html', 'utf8', (error, data) => {
            if (error) {
              res.writeHead(500, { 'Content-Type': 'text/plain' });
              res.end('Oh no!!!!');
              return;
            }
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(data);
        });
      }
  
    function mostrarPerfil(req, res) {
        fs.readFile('perfil.html', 'utf8', (error, data) => {
            if (error) {
              res.writeHead(500, { 'Content-Type': 'text/plain' });
              res.end('Oh no!!!!');
              return;
            }
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(data);
        });
      }

     
      function mostrarAdoptantes(req, res) {
        //Construye una página básica adpotantes.html HECHO PE MI CAUSA, PERU ES CLAVE
        fs.readFile('adoptantes.html', 'utf8', (error, data) => {
            if (error) {
              res.writeHead(500, { 'Content-Type': 'text/plain' });
              res.end('Oh no!!!!');
              return;
            }
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(data);
        });
      }

    //Esta función deberá enviar un json con los datos de las adoptantes
    function getAdoptantes(req, res) {
    //Tienes que corregir varias cosas en esta sección
        const adoptantes = [
            {
              nombre: "Ana",
              edad: 25,
              ciudad: "Guadalajara"
            },
            {
              nombre: "Luis",
              edad: 30,
              ciudad: "Zapopan"
            }
      ];
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify(adoptantes));
    }

    function manejarRuta404(req, res) {
      res.writeHead(404, { 'Content-Type': 'text/plain' });
      //Cambia el mensaje por algo más divertido
      res.end('Toc Toc. Quien es? Tu mascota no');
    }

    function mostrarEquipo(req, res) {
        //Construye una página básica adpotantes.html HECHO PE MI CAUSA, PERU ES CLAVE
        fs.readFile('equipo.html', 'utf8', (error, data) => {
            if (error) {
              res.writeHead(500, { 'Content-Type': 'text/plain' });
              res.end('Oh no!!!!');
              return;
            }
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(data);
        });
      }

    //incluye el enlace a la documentación de createServer
    const servidor = http.createServer((req, res) => {
      const url = req.url;

      if (url === '/') {
        darBienvenida(req, res);
      } else if (url === '/api/mascotas') {
        getMascotas(req, res);
      } else if (url === '/api/adoptantes') {
        getAdoptantes(req, res);
      } 
      else if (url === '/mascotas') {
        mostrarMascotas(req, res);
      } 
      else if (url === '/adoptantes') {
        mostrarAdoptantes(req, res);
      } 
      else if (url === '/equipo') {
        mostrarEquipo(req, res);
      } 
      //Agrega una ruta /equipo y su función correspondiente para que muestre el equipo del proyecto
      //Haz una página equipo.html correspondiente
      //Escribe el nombre completo y una cualidad que valores en esa persona de tu equipo
      //Trata de agregar una imagen a equipo.html
      //Explica si la puedes ver, en caso negativo ¿qué crees que pase?

      //Agrega una ruta /opinion
      //Haz una página opinion.html
      // Lee el siguiente artículo y responde ¿Crees que el colonialismo digital es un riesgo para tu carrera profesionl? ¿Para tu vida persona?
      //¿Qué es el freedombox?
      //https://www.aljazeera.com/opinions/2019/3/13/digital-colonialism-is-threatening-the-global-south
      
      
      else {
        manejarRuta404(req, res);
      }
    });

    const puerto = 1984;
    servidor.listen(puerto, () => {
      console.log(`Servidor escuchando en el puerto ${puerto}`);
    });

    //Importante
    //En esta actividad deberás agregar en miarchivo.html un enlace a servidor.js y al resto de los html