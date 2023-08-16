let contactos=[

"David Cardenas",
"Dante Stone",
"Lisa Ramirez",
"Aurora  Cardenas",
];

function agregarContacto (nombre){
    contactos.push(nombre);
};


function eliminarContacto (nombre){
    const indice = contactos.indexOf(nombre);
    if (indice !== -1) {
        contactos.splice(indice, 1);
    }
};


function lista (){
    console.log("Lista de contactos:");
    for (let i =0; i < contactos.length; i++){
        console.log(contactos[i]);
    }
};

while (true) {
    const opcion = prompt(
        "Selecciona una opción:\n" +
        "1. Agregar contacto\n" +
        "2. Eliminar contacto\n" +
        "3. Mostrar contactos\n" +
        "4. Salir"
    );

    if (opcion === "1") {
        const nuevoContacto = prompt("Ingrese el nombre del nuevo contacto:");
        agregarContacto(nuevoContacto);
        alert("Contacto agregado exitosamente.");
    } else if (opcion === "2") {
        const contactoAEliminar = prompt("Ingrese el nombre del contacto a eliminar:");
        eliminarContacto(contactoAEliminar);
        alert("Contacto eliminado exitosamente.");
    } else if (opcion === "3") {
        lista();
    } else if (opcion === "4") {
        alert("¡Hasta luego!");
        break;
    } else {
        alert("Opción inválida. Por favor, elija una opción válida.");
    }
}

