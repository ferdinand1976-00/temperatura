let Temperatura_corregida = 0
let Temperatura = 0
let Valor_corrección = 3
basic.forever(function () {
    Temperatura = input.temperature()
    Temperatura_corregida = Temperatura + Valor_corrección
    basic.showNumber(Temperatura_corregida)
    basic.pause(1000)
})
