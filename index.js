// FUNÇÃO MEDIA 

const media = (...numeros) => {
  const soma = numeros.reduce((acumulador, num) => acumulador + num, 0)
  return soma / numeros.length
}

console.log(`Média Aritmética Simples: ${media(3, 6, 10, 9)}`)

// FUNÇÃO MEDIA PONDERADA
const mediaPonderada = (...entradas) => {
  const soma = entradas.reduce((acumulador, { numero, peso }) => acumulador + (numero * (peso ?? 1)), 0)
  const somaPeso = entradas.reduce((acumulador, entrada) => acumulador + (entrada.peso ?? 1), 0)
  return soma / somaPeso
}

console.log(`Média Ponderada: ${mediaPonderada(
  { numero: 9, peso: 3 },
  { numero: 7 },
  { numero: 10, peso: 1 },
)}`)

// FUNÇÃO MEDIANA
const mediana = (...numeros) => {
  const numerosEmOrdem = [...numeros].sort((a, b) => a - b)
  const meio = Math.floor(numerosEmOrdem.length / 2)
  if (numerosEmOrdem.length % 2 !== 0) {
    return numerosEmOrdem[meio]
  }
  const primeiroMediano = numerosEmOrdem[meio - 1]
  const segundoMediano = numerosEmOrdem[meio]
  return media(primeiroMediano, segundoMediano)
}

console.log(`Mediana: ${mediana(2, 5, 99, 4, 42, 7)}`)
console.log(`Mediana: ${mediana(15, 14, 8, 7, 3)}`)

// FUNÇÃO MODA
const moda = (...numeros) => {
  //[[n, qtd], [n, qtd], [n, qtd]]
  const quantidades = numeros.map(num => [
    num,
    numeros.filter(n => num === n).length
  ])
  quantidades.sort((a, b) => b[1] - a[1])
  return quantidades[0][0]
}
console.log(`Moda: ${moda(1, 1, 99, 99, 99, 99, 99, 99, 99, 99, 5, 4, 9, 7, 4, 3, 5, 2, 4, 0, 4)}`)