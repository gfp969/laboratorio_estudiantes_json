const listaEstudiantes = [
    {
        "nombre": "Juan",
        "edad": 30,
        "esEstudiante": true
    },
    {
        "nombre": "Pedro",
        "edad": 21,
        "esEstudiante": true
    },
    {
        "nombre": "Felipe",
        "edad": 19,
        "esEstudiante": true
    },
    {
        "nombre": "Victor",
        "edad": 17,
        "esEstudiante": true
    },
    {
        "nombre": "Alex",
        "edad": 22,
        "esEstudiante": true
    }
]
//mostrar tipo de "listaEstudiantes"
console.log(typeof listaEstudiantes)

//se crea el nuevo estudiante
const nuevoStudent = {
    "nombre": "María",
    "edad": 23,
    "esEstudiante": true
};

//se introduce el nuevo estudiante a la lista de estudiantes
listaEstudiantes.push(nuevoStudent);

//se muestra en consola la nueva lista de estudiantes
console.log("Nuevo listado de estudiantes:", listaEstudiantes);

//filtro de la lista de estudiantes: "aquellos que sean mayores a 21 años de edad"
const filtroEstudiantes = listaEstudiantes.filter((estudiante) => estudiante.edad > 21)

//mostrar en consola la lista de estudiantes filtrada
console.log("Lista de estudiantes filtrada: ",filtroEstudiantes)

// convertir "listaEstudiantes" a cadena
const students = JSON.stringify(listaEstudiantes);

//mostrar el nuevo tipo de "listaEstudiantes" y pasa a ser "students"
console.log(typeof students)

//convertir "students" a objeto nuevamente
const objEstudiantes = JSON.parse(students);

//mostrar el nuevo tipo de "students" y pasa a ser "objEstudiantes"
console.log(typeof objEstudiantes)

//enviar la lista de estudiantes al archivo .JSON
const { error } = require('console');
const fs=require('fs')

const ListEstudiantes = JSON.stringify(objEstudiantes)

fs.writeFile('list_estudiantes.json', ListEstudiantes, (error)=>{
    if (error) throw error;
    console.log("lista recibida (＾▽＾)")
})