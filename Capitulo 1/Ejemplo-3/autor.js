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
  }
}
