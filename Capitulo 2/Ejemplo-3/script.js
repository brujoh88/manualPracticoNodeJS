QUnit.test("Prueba", (assert) => {
  const autor1 = new Autor()
  autor1.setName("Gustavo Hernan Tiseira")
  autor1.setDateAge("31")
  autor1.setNationality("Arg")

  const libro1 = new Libro()
  libro1.setTitulo("Narnia")
  libro1.setEditorial("Santillan")
  libro1.setAutor(autor1)
  libro1.setFechaPrimeraEdicion("12/05/18")
  libro1.setIsbn("123456789") //false

  let comprobacion = libro1.check("isbn")
  let resultado = comprobacion()
  assert.ok(resultado, "El formato es correcto")
  //Ahora si le damos un formato correcto
  libro1.setIsbn("978-15-678213-2-8")
  comprobacion = libro1.check("isbn")
  resultado = comprobacion()
  assert.ok(resultado, "El formato es correcto")
})
