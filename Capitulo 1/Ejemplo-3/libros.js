// Con esta clase logro hacer que sus atrivutos sean privados el dato se guarda en las variables _variable y se lee unicamente por medio del metodo getVariable()
class Libro {
  constructor(titulo, editorial, autor, fechaPrimeraEdicion, isbn) {
    let _titulo = titulo,
      _editorial = editorial,
      _autor = autor,
      _fechaPrimeraEdicion = fechaPrimeraEdicion,
      _isbn = isbn
    this.setTitulo = (date) => {
      _titulo = date
    }
    this.getTitulo = () => {
      return _titulo
    }
    this.setEditorial = (date) => {
      _editorial = date
    }
    this.getEditorial = () => {
      return _editorial
    }
    this.setAutor = (date) => {
      _autor = date
    }
    this.getAutor = () => {
      return _autor
    }
    this.setFechaPrimeraEdicion = (date) => {
      _fechaPrimeraEdicion = date
    }
    this.getFechaPrimeraEdicion = () => {
      return _fechaPrimeraEdicion
    }
    this.setIsbn = (date) => {
      _isbn = date
    }
    this.getIsbn = () => {
      return _isbn
    }
    //Respuesta de control si el campo del check es incorrecta! (podria solucionarse con un Switch y return una ()=>{ return false})
    this.devuelveFalse = () => {
      return false
    }
    this.check = (nombreCampo) => {
      if (nombreCampo && nombreCampo !== "") {
        if (nombreCampo === "isbn") {
          return this.compruebaIsbn
        } else {
          return this.devuelveFalse
        }
      } else {
        return this.devuelveFalse
      }
    }
    this.compruebaIsbn = () => {
      let partesIsbn = _isbn.split("-"),
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
}
