alert("arquivo aberto")
console.log("Arquivos JS lido")

function numerolegal (valor) {
    //se o valor for maior que 100
    return valor % 2 == 0 && valor > 100
}

console.log ('Numero Legal - 5-, 150, 151')
console.log(numeroLegal(50))
console.log(numeroLegal(150))
console.log(numeroLegal(151))

function numeroChato (valor) {
    // se for impar ou menor que 70
    return valor % 2 == 1 || valor< 70
}

console.log ('Numero Chato - 66-, 76, 77')
console.log(numeroChato(66))
console.log(numeroChato(76))
console.log(numeroChato(77))