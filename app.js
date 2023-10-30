const express = require("express");
const readline = require('readline');
/* */
const app =  express(); // Instancia express 
const puerto = 3000;  // puerto utilizado
/* */
let arrAux = [];
let rl = readline.createInterface(process.stdin, process.stdout);

app.get('/', (req, res) => {
    
})

function agregarTarea(){
    rl.question('Ingrese una tarea: ', (tarea)=>{
        tarea = document.getElementById("conttext").value;
        if (tarea.trim() !== '')
        {
            arrAux.push(tarea);
            console.log('Su tarea se agregó correctamente!', tarea);
            console.log(arrAux);
        }
        else
        {
            console.log("Debe ingresar una tarea");
        }
        rl.close();
    })
}


/*

// Ruta para manejar el acceso a través del navegador
app.get('/', (req, res) => {
    res.send('Accede a la consola del servidor para ingresar tareas.');
});

// Función para agregar tareas desde la consola
function agregarTareaDesdeConsola() {
    rl.question('Ingrese una tarea desde la consola: ', (tarea) => {
        if (tarea.trim() !== '') {
            arrAux.push(tarea);
            console.log('Tarea agregada desde la consola:', tarea);
            mostrarTareas();
        } else {
            console.log('Por favor, ingrese una tarea válida.');
        }

        // Volver a solicitar una nueva tarea después de procesar la actual
        agregarTareaDesdeConsola();
    });
}

function mostrarTareas() {
    console.log('Tareas actuales:', arrAux);
}

// Iniciar la función para ingresar tareas desde la consola
agregarTareaDesdeConsola();

app.listen(puerto, () => {
    console.log(`El servidor está escuchando en el puerto ${puerto}`);
});

*/

/*
const readline = require('readline');

const arrAux = [];

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function agregarTarea() {
  rl.question('Ingrese una tarea: ', (tarea) => {
    if (tarea.trim() !== '') {
      arrAux.push(tarea);
      console.log('Su tarea se agregó correctamente:', tarea);
      console.log(arrAux);
    } else {
      console.log("Debe ingresar una tarea");
    }
    rl.close();
  });
}

agregarTarea();
*/
