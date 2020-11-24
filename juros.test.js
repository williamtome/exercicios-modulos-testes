const juros = require('./juros')

test('jurosSimples', () => {
  const C = 100
  const i = 0.10
  const t = 1
  const jurosEsperados = 10
  const juro = juros.jurosSimples(C, i, t)
  expect(juro).toBe(jurosEsperados);
})

test('jurosSimples', () => {
  const C = 100
  const i = 0.10
  const t = 0
  const jurosEsperados = 0
  const juro = juros.jurosSimples(C, i, t)
  expect(juro).toBe(jurosEsperados);
})

test('jurosSimples', () => {
  const C = 100
  const i = 0.10
  const t = 10
  const jurosEsperados = 100
  const juro = juros.jurosSimples(C, i, t)
  expect(juro).toBe(jurosEsperados);
})

test('montanteComJurosSimples', () => {
  const C = 100
  const i = 0.10
  const t = 1
  const montanteEsperado = 110
  const jurosSimples = jest.fn()
  jurosSimples.mockImplementation(() => 10)
  const montanteSimples = juros.pure.montanteComJurosSimples({ jurosSimples })
  const montante = montanteSimples(C, i, t)
  expect(jurosSimples.mock.calls[0]).toEqual([C, i, t])
  expect(montanteEsperado).toBe(montante)
})

test('montanteJurosCompostos', () => {
  const C = 1000
  const i = 0.1
  const t = 1
  const jurosEsperados = 1100
  const juro = juros.montanteJurosCompostos(C, i, t)
  expect(juro).toBe(jurosEsperados);
})

test('jurosCompostos', () => {
  const C = 1000
  const i = 0.10
  const t = 1
  const montanteJurosCompostos = jest.fn()
  montanteJurosCompostos.mockImplementation(() => 1100)

  const jurosCompostos = juros.pure.jurosCompostos({ montanteJurosCompostos })
  const jurosCalc = jurosCompostos(C, i, t)

  expect(montanteJurosCompostos.mock.calls[0]).toEqual([C, i, t])
  expect(jurosCalc).toBe(100)
})