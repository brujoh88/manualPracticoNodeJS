// Test Unitaro con QUnit del factorial
factorial = (n) => {
  if (n % 1 === 0) {
    if (n > 0) {
      return n * factorial(n - 1)
    } else {
      return 1
    }
  } else {
    return -1
  }
}
QUnit.test('Prueba funcion factorial', function (assert) {
  assert.equal(factorial(6), 720, '¡Correcto!')
  assert.equal(factorial(5), 120, '¡Correcto!')
})

//?====================================================

// Test Unitaro con QUnit del array

let usuario = new Array()

usuario['nick'] = 'Brujoh88'
usuario['name'] = 'Gustavo Hernan Tiseira'
usuario['email'] = 'gustavotiseira@gmail.com'
usuario['password'] = 'asdasdasd'
QUnit.test('Probando Array (usuario)', (assert) => {
  assert.equal(usuario['nick'], 'Brujoh88', 'Correcto')
})

//!Notar que este usuarioJSON es igual que el array anterior

let usuarioJSON = {
  nick: 'Brujoh88',
  name: 'Gustavo Hernan Tiseira',
  email: 'gustavotiseira@gmail.com',
  password: 'asdasdasd',
}

QUnit.test('Probando usuarioJSON', (assert) => {
  //La forma mas senciila de llamar al nick
  assert.equal(usuarioJSON.nick, 'Brujoh88', 'Correcto')
  //Otra forma de llamar es la que propone el libro
  assert.equal(usuarioJSON['name'], 'Gustavo Hernan Tiseira', 'Correcto')
})
