QUnit.test("Prueba", (assert) => {
  let gerente1 = new Gerente()
  gerente1.setName("Lopez Hernando")
  gerente1.setDni("33722427")
  gerente1.setTel("+5434005544878")

  let habitacion105 = new Habitaciones()
  habitacion105.setPlanta("2")
  habitacion105.setCantCamas("1")
  habitacion105.setTel("+5434005544878")

  let hotel = new Hotel()
  hotel.setName("Altos del sol")
  hotel.setCity("Villa Constitucion")
  hotel.setAdress("Roma 1005")
  hotel.setTel("+543400472192")
  hotel.setWebPage("http://www.altosdelsol.com")
  hotel.setGerente(gerente1)
  hotel.setHabitaciones(habitacion105)

  let NameHotel = hotel.getName(),
    cityHotel = hotel.getCity(),
    adressHotel = hotel.getAdress(),
    gerenHotel = hotel.getGerente(),
    roomHotel = hotel.getHabitaciones(),
    //Comprobaciones HOTEL
    comprobacionTel = hotel.check("tel"),
    resultadoTel = comprobacionTel(),
    comprobacionWebPage = hotel.check("webPage"),
    resultadoWeb = comprobacionWebPage(),
    //Comprobacion GERENTE
    comprobacionDNI = gerente1.check("dni"),
    resultadoDNI = comprobacionDNI(),
    comprobacionTelGerente = gerente1.check("tel"),
    resultadoTelGer = comprobacionTelGerente(),
    //Comprobacion HABITACION
    comprobacionTelHabi = habitacion105.check("tel"),
    resultadoTelHabi = comprobacionTelHabi()

  assert.ok(resultadoTel, "Formato de numero tel. del hotel correcto")
  assert.ok(resultadoWeb, "Formato de pagia web correcta")
  assert.ok(resultadoDNI, "Formato DNI del gerente correcto")
  assert.ok(resultadoTelGer, "Formato de numero tel. del gerente correcto")
  assert.ok(
    resultadoTelHabi,
    "Formato de numero tel. de la habitacion correcto"
  )

  assert.equal(NameHotel, "Altos del sol", "Nombre del hotel correcto")
  assert.equal(cityHotel, "Villa Constitucion", "Ciudad hotel correcta")
  assert.equal(adressHotel, "Roma 1005", "Direccion Hotel")
  assert.equal(gerenHotel, gerenHotel, "Gerente hotel")
  assert.equal(roomHotel, roomHotel, "Habitaciones hotel")
})
