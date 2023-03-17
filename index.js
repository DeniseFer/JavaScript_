function ConvCelsius (temp_usuario) {
    if (temp_usuario == 1){
        conv = prompt("Digite a temperatura em Farenheit:\n")
        celsius = (conv  - 32) * 5/9
        return "A temperatura em celsius equivale a " + celsius +"Cº"
    } else if (temp_usuario == 2){
        conv = prompt("Digite a temperatura em Kelvin:\n")
        celsius =  conv - 273,15
        return "A temperatura em celsius equivale a " + celsius+"Cº"
    }
}
console.log("=======CONVERTOR DE TEMPERATURA PARA CELSIUS=======\n")
let temperatura = prompt("Digite qual Unidade de Temperatura que deseja converter:\n 1 - Farenheit\n 2 - Kelvin")
console.log(ConvCelsius (temperatura))