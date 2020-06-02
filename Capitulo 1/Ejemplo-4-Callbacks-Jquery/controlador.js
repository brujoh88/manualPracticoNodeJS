/* let controlador = function constructor($document) {
  let dato = $("input#nombre").val()
  console.log(dato)
} */
let controlador = function constructor($document) {
  let nombre = $("input#nombre").val(),
    fNacimiento = $("input#fNacimiento").val(),
    nacionalidad = $("input#nacionalidad").val(),
    campos = {
      nombre,
      fNacimiento,
      nacionalidad,
    }
  let comprobaciones = (campos, cb) => {
    let nombre = campos.nombre,
      fNacimiento = campos.fNacimiento,
      nacionalidad = campos.nacionalidad
    console.log(nombre, fNacimiento, nacionalidad)
    if (
      nombre &&
      nombre != "" &&
      fNacimiento &&
      fNacimiento != "" &&
      nacionalidad &&
      nacionalidad != ""
    ) {
      console.log("campos completo")
      return cb(true, campos)
    } else {
      return cb(false)
    }
  }
  let crearAutor = (valido, campos) => {
    if (valido) {
      let nombre = campos.nombre,
        fNacimiento = campos.fNacimiento,
        nacionalidad = campos.nacionalidad,
        autor = new Autor()
      autor.setName(nombre)
      autor.setDateAge(fNacimiento)
      autor.setNationality(nacionalidad)
      let comprobacion = autor.check("fechaNacimiento"),
        resultado = comprobacion()
      if (resultado) {
        return autor
      } else {
        return null
      }
    } else {
      return null
    }
  }
  let autor = comprobaciones(campos, crearAutor)
  if (autor) {
    QUnit.test("Probando los datos introducidos", (assert) => {
      assert.equal(fNacimiento, autor.getDateAge(), "La fecha es correcta")
    })
  } else {
    console.log("ERROR EN LOS DATOS")
  }
}
