alert("arquivo aberto")
console.log("Arquivos JS lido")

function numeroLegal (valor) {
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

var frutas  = ["banana", "pera", "laranja", "kiwi"]
for (fruta of frutas) {
    console.log(fruta)
}
console.log(frutas.indexOf("pera"))
console.log(frutas.indexOf("laranja"))
console.log(frutas.indexOf("maçã"))

console.log('usando for')
for( var i=0; i < 10; i++) {
    console.log(i)
}

console.log('usando while')
var i = 0
while (i < 10) {
    console.log(i)
    i += 1
}

function mostrarData() {
    console.log(new Date())
}

mostrarData()
//setInterval(mostrarData, 2000)
setTimeout(mostrarData, 2000)
