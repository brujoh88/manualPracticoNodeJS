class Book {
  constructor(titulo, editorial, autor, fechaPrimeraEdicion, isbn) {
    this.titulo = titulo
    this.editorial = editorial
    this.autor = autor
    this.fechaPrimeraEdicion = fechaPrimeraEdicion
    this.isbn = isbn
  }
  getTitulo() {
    return this.titulo
  }
  setTitulo(date) {
    this.titulo = date
  }
  getEditorial() {
    return this.editorial
  }
  setEditorial(date) {
    this.editorial = date
  }
  getAutor() {
    return this.autor
  }
  setAutor(date) {
    this.autor = date
  }
  getFechaPrimeraEdicion() {
    return this.fechaPrimeraEdicion
  }
  setFechaPrimeraEdicion(date) {
    this.fechaPrimeraEdicion = date
  }
  getIsbn() {
    return this.isbn
  }
  setIsbn(date) {
    this.isbn = date
  }
}
