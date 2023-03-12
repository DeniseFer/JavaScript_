/*TIPOS DE VARÍAVEL
- No javascript nós temos 6 tipos de variáveis primitivas:
   - contém uma única coisa/valor
   String, Boolean, Number, bignit,null e undefined
- E 3 tipos de variáveis complexas:
   - pode conter várias entidades mais complexas
   array, object e function (Todas são objects)
   
TIPAGEM DE DADOS
- Os tipos de dados dos valores(ex:String ou number)
Estática
- O tipo de dado de uma variável não pde ser alterado quando atribuir um novo valor a ela, tendo que especificar o seu tipo de dado quando for declarada.
Dinâmica
- O tipo de dado de uma variável pode ser alterado quando atribuir um novo valor a ela


 COMO CRIAR UMA VARIÁVEL?
 -var, let ou const
 
 var a1 = "Carlos" // string
let a2 = 56 // number
const a3 = false //boolean

*/

var a1 = "Carlos" // string
let a2 = 56 // number
const a3 = false //boolean
// OBS: Elas foram declaradas e inicializadas ao mesmo tempo/ var pode ser redeclarada

console.log("Meu amigo "+a1+" tem "+a2+" anos\n") //Uso delas


/*ARRAY

- Valores postos em uma lista ordenadamente, colocados entre aspas, caso seja string, e separados por meio de vírgulas. A array é posta dentro de uma variável.
- Ex: let frutas = ["banana","Maçã","uva"]
- Cada elemento dentro de uma array pode ser acessado por meio de seu índice
*/
//OPERAÇÃO FOR COM ARRAY
let array = ["BTS","JImin","jungkook"]

console.log("\nFOR TRADICIONAL\n")
for(let i = 0;i<=array.length-1; i++)
  console.log(array[i])
  
console.log("\n DECRESCENTE\n")
for(let i = array.length-1; i>=0; i--)
 console.log(array[i])

console.log("\nFOR OF\n")
for (x of array)
  console.log(x)
  
console.log(" \n FOR EACH\n")  
array.forEach(x=>console.log(x))

console.log("\nFOR IN\n")
for (x in array)
 console.log(x) //apenas os índices são mostrados
 
 //
 
 /*OPERADORES
 Atribuição
 - atribui valor do operando direito ao esquerdo
 - tem abreviação
 let a = 9
 a += 10 // a = a + 10
 Unário
 - Converte ou decrementa/ incrementa
 ++ ou -- 
 + ou - 
 let a = 1
 a =-a //transf em negativo
 
 ARITMÉTICOS
 - tomam valores numéricos (sejam literais ou variáveis) como seus operandos e retornam um único valor númerico
 COMPARAÇÃO
 - compara seus operandos e retorna um valor lógico
 
 OPERADOR LÓGICO
 - opera e retorna um valor lógico
 - false, undefined, null, 0, NaN ou uma string vazia (''): false
- todos os demais valores: true
OPERADOR DE TIPO
- type of
-retorna o tipo de um dado
OPERADOR TERNÁRIO
Único que leva 3 operandos
Operador terá um de dois valores, dependendo de uma condição
 */
 
let tipofruta = prompt("Digite uma fruta:\n")
switch (tipofruta) {
   case "Laranja":
      console.log("O quilo da laranja está R$0,59.<br>");
      break;
   case "Maçã":
      console.log("O quilo da maçã está R$0,32.<br>");
      break; 
   default:
     console.log("Não está no estoque")}