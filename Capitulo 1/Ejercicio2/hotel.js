class Hotel {
  constructor(name, city, adress, tel, webPage, gerente, habitaciones) {
    this.name = name
    this.city = city
    this.adress = adress
    this.tel = tel
    this.webPage = webPage
    this.gerente = gerente
    this.habitaciones = habitaciones
  }
  getName() {
    return this.name
  }
  setName(date) {
    this.name = date
  }
  getCity() {
    return this.city
  }
  setCity(date) {
    this.city = date
  }
  getAdress() {
    return this.adress
  }
  setAdress(date) {
    this.adress = date
  }
  getTel() {
    return this.tel
  }
  setTel(date) {
    this.tel = date
  }
  getWebPage() {
    return this.webPage
  }
  setWebPage(date) {
    this.webPage = date
  }
  getGerente() {
    return this.gerente
  }
  setGerente(date) {
    this.gerente = date
  }
  getHabitaciones() {
    return this.habitaciones
  }
  setHabitaciones(date) {
    this.habitaciones = date
  }

  //Validacion
  check(campo) {
    if (campo && campo !== '') {
      switch (campo) {
        case 'telHotel':
          let tel = this.tel
          if (!/^\+?\d{12}/.test(tel)) {
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
