let contactos=[

];

function agregarContacto (contacto){
    contactos.push(contacto);
    
};


function eliminarContacto (id){
    const indice = contactos.findIndex(contacto => contacto.id === id);
    if (indice !== -1) {
        contactos.splice(indice, 1);
    }
};


function lista () {
    console.log("Lista de contactos:");
    for (const contacto of contactos) 
    {
        console.log("ID:", contacto.id);
        console.log("Nombre:", contacto.nombre);
        console.log("Apellidos:", contacto.apellidos);
        console.log("Teléfono:", contacto.telefono);
        console.log("Ubicaciones:", contacto.ubicaciones);
        console.log("Ciudad:", contacto.ciudad);
        console.log("Dirección:", contacto.direccion);
        console.log("------------------------");
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

    if (opcion === "1") 
    {
    
        const nuevoContacto =  {
            id: parseInt(prompt("Ingrese el ID del nuevo contacto:")),
            nombre: prompt("Ingrese el nombre del nuevo contacto:"),
            apellidos: prompt("Ingrese los apellidos del nuevo contacto:"),
            telefono: prompt("Ingrese el teléfono del nuevo contacto:"),
            ubicaciones: prompt("Ingrese las ubicaciones del nuevo contacto:"),
            ciudad: prompt("Ingrese la ciudad del nuevo contacto:"),
            direccion: prompt("Ingrese la dirección del nuevo contacto:")
         
        }
        
        agregarContacto(nuevoContacto);
        alert("Contacto agregado exitosamente.");
    
        } else if (opcion === "2") {
        
        const idAEliminar = parseInt(prompt("Ingrese el ID del contacto a eliminar:"));
        eliminarContacto(idAEliminar);
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

