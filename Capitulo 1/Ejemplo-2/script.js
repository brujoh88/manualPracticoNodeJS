QUnit.test('Prueba', (assert) => {
  let autor = new Autor()
  autor.setName('Gustavo')
  autor.setDateAge('31')
  autor.setNationality('Arg')

  let libro = new Book()
  libro.setTitulo('Matematicas')
  libro.setEditorial('Santillan')
  libro.setAutor(autor)
  libro.setFechaPrimeraEdicion('04/06/1988')
  libro.setIsbn('123456')

  let tituloLibro = libro.getTitulo(),
    editorialLibro = libro.getEditorial(),
    autorLibro = libro.getAutor(),
    nombreAutor = autor.getName(),
    AgeAutor = autor.getDateAge(),
    nacionalidadAutor = autor.getNationality(),
    fechaEdicon = libro.getFechaPrimeraEdicion(),
    isbLibro = libro.getIsbn()

  assert.equal(tituloLibro, 'Matematicas', 'Titulo libro correcto')
  assert.equal(editorialLibro, 'Santillan', 'Editorial del libro correcto')
  assert.equal(autorLibro, autor, 'Autor Correcto')
  assert.equal(nombreAutor, 'Gustavo', 'Nombre Autor Correcto')
  assert.equal(AgeAutor, '31', 'Fecha Correcta')
  assert.equal(nacionalidadAutor, 'Arg', 'Nacionalidad Correcta')
  assert.equal(fechaEdicon, '04/06/1988', 'Fecha Edicion Correcta')
  assert.equal(isbLibro, '123456', 'ISB Correcto')
})
