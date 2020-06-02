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

  // Valirdacion de campo ISBN del tipo DDD-DD-DDDDDD-D-D (13 digitos)
  check(campo) {
    //Condicional para saber si existe y que sea != a vacio
    if (campo && campo !== '') {
      if (campo !== 'isbn') {
        return () => {
          return true
        }
      } else {
        return () => {
          let isbn = this.isbn,
            partesIsbn = isbn.split('-'),
            nPartes = partesIsbn.length
          if (nPartes !== 5) {
            return false
          } else {
            let valido = true
            for (let i = 0; i < nPartes; i++) {
              let estaParte = partesIsbn[i]
              if (!/^([0-9])*$/.test(estaParte)) {
                valido = false
                break
              }
            }
            return valido
          }
        }
      }
    } else {
      return () => {
        return false
      }
    }
  }
}
