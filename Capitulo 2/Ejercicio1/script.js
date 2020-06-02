QUnit.test('Prueba', (assert) => {
  let gerente1 = new Gerente()
  gerente1.setName('Lopez Hernando')
  gerente1.setDni('33722427')
  gerente1.setTel('+5434005544878')

  let habitacion105 = new Habitaciones()
  habitacion105.setPlanta('2')
  habitacion105.setCantCamas('1')
  habitacion105.setTel('105')

  let hotel = new Hotel()
  hotel.setName('Altos del sol')
  hotel.setCity('Villa Constitucion')
  hotel.setAdress('Roma 1005')
  hotel.setTel('+543400748745')
  hotel.setWebPage('www.altosdelsol.com')
  hotel.setGerente(gerente1)
  hotel.setHabitaciones(habitacion105)

  let NameHotel = hotel.getName(),
    cityHotel = hotel.getCity(),
    adressHotel = hotel.getAdress(),
    telHotel = hotel.getTel(),
    webHotel = hotel.getWebPage(),
    gerenHotel = hotel.getGerente(),
    roomHotel = hotel.getHabitaciones()

  assert.equal(NameHotel, 'Altos del sol', 'Nombre del hotel correcto')
  assert.equal(cityHotel, 'Villa Constitucion', 'Ciudad hotel correcta')
  assert.equal(adressHotel, 'Roma 1005', 'Direccion Hotel')
  assert.equal(telHotel, '+543400748745', 'Tel hotel')
  assert.equal(webHotel, 'www.altosdelsol.com', 'Web hotel')
  assert.equal(gerenHotel, gerenHotel, 'Gerente hotel')
  assert.equal(roomHotel, roomHotel, 'Habitaciones hotel')
})
