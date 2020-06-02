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
  libro.setIsbn('978-15-678213-2-8')

  let tituloLibro = libro.getTitulo(),
    editorialLibro = libro.getEditorial(),
    autorLibro = libro.getAutor(),
    nombreAutor = autor.getName(),
    AgeAutor = autor.getDateAge(),
    nacionalidadAutor = autor.getNationality(),
    fechaEdicon = libro.getFechaPrimeraEdicion(),
    //isbLibro = libro.getIsbn(),
    comprobacion = libro.check('isbn'),
    isbnCorrecto = comprobacion()

  //Notar este assert que verifica con .ok()
  assert.ok(isbnCorrecto, 'El isbn es correcto')

  assert.equal(tituloLibro, 'Matematicas', 'Titulo libro correcto')
  assert.equal(editorialLibro, 'Santillan', 'Editorial del libro correcto')
  assert.equal(autorLibro, autor, 'Autor Correcto')
  assert.equal(nombreAutor, 'Gustavo', 'Nombre Autor Correcto')
  assert.equal(AgeAutor, '31', 'Fecha Correcta')
  assert.equal(nacionalidadAutor, 'Arg', 'Nacionalidad Correcta')
  assert.equal(fechaEdicon, '04/06/1988', 'Fecha Edicion Correcta')
  //assert.equal(isbLibro, '123456', 'ISB Correcto')
})
