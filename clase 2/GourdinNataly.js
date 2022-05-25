class Usuario {


constructor(nombre, apellido, libros, mascotas){
 this.nombre = nombre
 this.apellido = apellido
 this.libros= libros
 this.mascotas = mascotas
}

getFullname() {
return `${this.nombre} ${this.apellido}`

}

addMascota(mascota) {
  return  this.mascotas.push(mascota)
}

countMascotas() {
    return this.mascotas.length

}

addBooks(nombre, autor) {
    this.libros.push({
        nombre: nombre, autor: autor
    })
}
getBookNames(){
    let nombresLibros = []
        for (let i = 0; i < this.libros.length; i++) {
             nombresLibros.push(this.libros[i].nombre)
        }    
        return nombresLibros

    }
}


let nombre = "Nataly"
let apellido = "Gourdin"
let mascotas =[]
let libros = []

const nataly = new Usuario(nombre, apellido, mascotas, libros)

nataly.addMascota(" perro Ulises ")
nataly.addMascota(" perro Toto ")
nataly.addBooks(" Comer, rezar, amar ", "Elizabeth Gilbert")
nataly.addBooks(" 50 sombras de Grey ", "E. L. James")

console.log(
    `Nombre completo: ${nataly.getFullname()} 
    Mascotas: ${nataly.mascotas}
    Cantidad de mascotas que tiene: ${nataly.countMascotas()}
    Sus libros favoritos son: ${nataly.getBookNames()}
    `
);