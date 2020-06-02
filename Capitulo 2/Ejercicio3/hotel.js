class Hotel {
  constructor(name, city, adress, tel, webPage, gerente, habitaciones) {
    let _name = name,
      _city = city,
      _adress = adress,
      _tel = tel,
      _webPage = webPage,
      _gerente = gerente,
      _habitaciones = habitaciones
    this.getName = () => {
      return _name
    }
    this.setName = (date) => {
      _name = date
    }
    this.getCity = () => {
      return _city
    }
    this.setCity = (date) => {
      _city = date
    }
    this.getAdress = () => {
      return _adress
    }
    this.setAdress = (date) => {
      _adress = date
    }
    this.getTel = () => {
      return _tel
    }
    this.setTel = (date) => {
      _tel = date
    }
    this.getWebPage = () => {
      return _webPage
    }
    this.setWebPage = (date) => {
      _webPage = date
    }
    this.getGerente = () => {
      return _gerente
    }
    this.setGerente = (date) => {
      _gerente = date
    }
    this.getHabitaciones = () => {
      return _habitaciones
    }
    this.setHabitaciones = (date) => {
      _habitaciones = date
    }
    this.compruebaTel = () => {
      if (!/^\+?\d{12}/.test(_tel)) {
        return false
      }
      return true
    }
    this.compruebaWebPage = () => {
      if (!/https?:\/\/[\w\-\.]+\.\w{2,5}\/?\S*/.test(_webPage)) {
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
          case "webPage":
            return this.compruebaWebPage
          default:
            return this.devuelveFalse
        }
      } else {
        return this.devuelveFalse
      }
    }
  }
}
