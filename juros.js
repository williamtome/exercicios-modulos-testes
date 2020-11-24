/**
 * Exercício 1: juros simples
    Crie um módulo juros.js, e exporte dele uma função
    jurosSimples que recebe C (capital), i (juros em decimal. ex: 3,5% = 0.035)
    e t (tempo). E retorne o juros simples do período (C * i * t ).
 */

const jurosSimples = (capital, juros, tempo) => capital * juros * tempo

/**
 * Exercício 2: montante com juros simples
    Crie uma nova função que dado as mesmas variáveis
    do exercício anterior, retorne o montante total C + juros simples.
 */
const montanteComJurosSimples = ({ jurosSimples }) => (capital, juros, tempo) => capital + jurosSimples(capital, juros, tempo)

/**
 * Exercício 3: montante com juros compostos
    Crie uma função montanteJurosCompostos que recebe
    C (capital), i (juros em decimal) e t (tempo) e retorne
    o montante para o período, dado pela fórmula: M = C * (1 +  i) ^ t​.
 */
const montanteJurosCompostos = (capital, juros, tempo) => capital * Math.pow((1 + juros), tempo) 

/**
 * Exercício 4: juros compostos
    O exercício anterior já retorna o montante (capital + juros). 
    Crie uma função em juros.js que retorne somente os juros.

    (ps: para realizar testes unitários de funções que dependam de
      outras funções - é importante assistir a aula - Injeção de dependências)
 */
const jurosCompostos = ({ montanteJurosCompostos }) => (capital, juros, tempo) => montanteJurosCompostos(capital, juros, tempo) - capital

module.exports = { 
  jurosSimples, 
  montanteComJurosSimples: montanteComJurosSimples({ jurosSimples }),
  montanteJurosCompostos,
  jurosCompostos: jurosCompostos({ montanteJurosCompostos }),
  pure: {
    montanteComJurosSimples,
    jurosCompostos
  }
}