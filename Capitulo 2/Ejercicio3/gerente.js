class Gerente {
  constructor(name, dni, tel) {
    let _name = name,
      _dni = dni,
      _tel = tel
    this.getName = () => {
      return _name
    }
    this.setName = (date) => {
      _name = date
    }
    this.getDni = () => {
      return _dni
    }
    this.setDni = (date) => {
      _dni = date
    }
    this.getTel = () => {
      return _tel
    }
    this.setTel = (date) => {
      _tel = date
    }

    this.compruebaDni = () => {
      if (!/^[0-9]{7,8}$/.test(_dni)) {
        return false
      }
      return true
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
          case "dni":
            return this.compruebaDni
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
