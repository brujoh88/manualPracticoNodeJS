class Gerente {
  constructor(name, dni, tel) {
    this.name = name
    this.dni = dni
    this.tel = tel
  }
  getName() {
    return this.name
  }
  setName(date) {
    this.name = date
  }
  getDni() {
    return this.dni
  }
  setDni(date) {
    this.dni = date
  }
  getTel() {
    return this.tel
  }
  setTel(date) {
    this.tel = date
  }
  check(campo) {
    if (campo && campo !== "") {
      switch (campo) {
        case "dni":
          let dni = this.dni
          if (!/^[0-9]{7,8}$/.test(dni)) {
            return false
          }
          return true

        default:
          break
      }
    } else {
      return false
    }
  }
}
