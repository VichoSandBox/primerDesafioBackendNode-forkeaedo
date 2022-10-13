class Usuario {
  constructor(nombre, apellido, libros, mascotas) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.libros = libros;
    this.mascotas = mascotas;
  }

  getFullName(){
    return `${this.nombre} ${this.apellido}`;
  }

  addMascota(nombreMascota){
    this.mascotas.push(nombreMascota);
  }

  countMascotas(){
    return this.mascotas.length;
  }

  addBook(nombreLibro, autorLibro){
    this.libros.push({nombre: nombreLibro, autor: autorLibro});
  }

  getBookNames(){
    return this.libros.map( libro => libro.nombre );
  }
}

const vicenciomf = new Usuario("Vicente", "Martínez", [{nombre: "Orgullo y prejuicio", autor: "Jane Austen"}], ["Luna", "Corky"]);

console.log(vicenciomf.getFullName());

vicenciomf.addMascota("Mopita");
console.log(vicenciomf.countMascotas());

vicenciomf.addBook("Juego de tronos", "George Martin");
console.log(vicenciomf.getBookNames());
