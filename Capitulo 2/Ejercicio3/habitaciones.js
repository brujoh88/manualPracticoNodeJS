class Habitaciones {
  constructor(planta, cantCamas, tel) {
    let _planta = planta,
      _cantCamas = cantCamas,
      _tel = tel
    this.getPlanta = () => {
      return _planta
    }
    this.setPlanta = (date) => {
      _planta = date
    }
    this.getCantCamas = () => {
      return _cantCamas
    }
    this.setCantCamas = (date) => {
      _cantCamas = date
    }
    this.getTel = () => {
      return _tel
    }
    this.setTel = (date) => {
      _tel = date
    }
    this.compruebaTel = () => {
      if (!/^\+?\d{12}/.test(_tel)) {
        return false
      }
      return true
    }
    this.devuelveFalse = () => {
      return false
    }

    this.check = (campo) => {
      if (campo && campo !== "") {
        switch (campo) {
          case "tel":
            return this.compruebaTel
          default:
            return this.devuelveFalse
        }
      } else {
        return this.devuelveFalse
      }
    }
  }
}
