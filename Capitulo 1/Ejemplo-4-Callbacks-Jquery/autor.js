class Autor {
  constructor(name, dateAge, nationatily) {
    let _name = name,
      _dateAge = dateAge,
      _nationality = nationatily
    this.getName = () => {
      return _name
    }
    this.setName = (date) => {
      _name = date
    }
    this.getDateAge = () => {
      return _dateAge
    }
    this.setDateAge = (date) => {
      _dateAge = date
    }
    this.getNationality = () => {
      return _nationality
    }
    this.setNationality = (date) => {
      _nationality = date
    }
    this.campoIncorrecto = () => {
      return false
    }
    this.comprobarFechaNacimiento = () => {
      let fechaIngresada = _dateAge,
        partesFecha = fechaIngresada.split("/"),
        nPartes = partesFecha.length,
        dia = partesFecha[0].length,
        mes = partesFecha[1].length,
        anio = partesFecha[2].length
      if (nPartes === 3 && dia === 2 && mes === 2 && anio === 4) {
        for (let i = 0; i < nPartes.length; i++) {
          let parteActual = nPartes[i]
          if (!/^([0-9])*$/.test(parteActual)) {
            return false
          }
        }
        return true
      } else {
        return false
      }
    }
    this.check = (campo) => {
      switch (campo) {
        case "fechaNacimiento":
          return this.comprobarFechaNacimiento

        default:
          return this.campoIncorrecto
      }
    }
  }
}
