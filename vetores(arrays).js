// Arrays são como caixas com repartições dentro, que pode ser 
// acessadas através do seu índice entre colchetes[]. O primeiro índice
// sempre começa do 0, portanto um array de quatro posições terá um índice de 
// 0 a 3.

//O array é heterogenio, ou seja, podemos colocar qualquer valor dentro dele, ou seja, tipos de dados diferentes. 
//Int, String,Double, boolean...

//Realizando a criação de um array:
// ctrl+alt+n (executa code runner)
const arr = ['Girafa', 'Camaleão', 'Zebra', 3]
arr[10]='Leão'
console.log(`
${arr[10]}`)
// arr.push('qualquer coisa')
// arr.push('Girafa')

// console.log(arr)
// console.log(arr[0])
// console.log(arr[1])

console.log(arr.length)// comprimento do array -> 2

// ***************************Métodos de Arrays**************************///

//**************Método 01- PUSH***************//
//permite adicionar valores no final do array
// const pushArray = ['Leão', 'Tartaruga', 'Papagaio']
// console.log(pushArray)
// pushArray[0]= 'Borboleta'
// console.log(pushArray)
// pushArray.push('Escorpião')
// console.log(pushArray)
// pushArray.push('Dragão')
// console.log(pushArray)
// const teste = 'teste'
// console.log(teste[4])
//*************Método 02 - UNSHIFT**************//

//Adiciona elementos no ínicio do Array
// pushArray.unshift('Cobra')
// console.log(pushArray)

//***********Método 03- POP************//
//Remove o último valor de um determinado array
const popArray= ['Fernando','Mara', 'Eric', 'Gabriel']
console.log(popArray)
popArray.pop()
console.log(popArray)

//*************Método 04 - SHIFT**************//

//Como eliminar o primeiro valor de um array
//Podemos fazer isso usando método shift

popArray.shift()
console.log(popArray)

//*************Método 05 - SPLICE**************//

          // indices 0       1      2        3
const spliceArray= ['Jan', 'Fev', 'Abril', 'Jun']
console.log(spliceArray)
spliceArray.splice(0, 0, 'Meses:')
// coloca "meses" na posição 0
// console.log(spliceArray)
// spliceArray.splice(1, 1, )
//substituí janeiro por 'meses'
console.log(spliceArray)
 spliceArray.splice(3,0,'Mar')
 
 console.log(spliceArray)

 spliceArray.splice(5,0,'Mai')

 console.log(spliceArray) 
 //***********Método 06 -FILTER***************//

const filterArray = [ 1, 80, 2, 20, 30, 100, 93729]
console.log(filterArray)

const novoArray = filterArray.filter((qualquerCoisamenosnum) =>{
    return  qualquerCoisamenosnum >10
})
console.log(novoArray)

const filterArrayy = [ 'Juliana', 'Fernando', 'Eric']
console.log(filterArrayy)

const novoArrayy = filterArrayy.filter((qualquerCoisa) =>{
    return  qualquerCoisa == 'Juliana'
})
console.log(novoArrayy)
 //***********Método 07 -MAP*******************//

 //Invoca uma função de callback
 //O map não modifica o array original, somente a função callback poderá fazer isso. Ou seja, ela 
 //criará um novo array modificado.

const arrayMap = [1, 2, 3, 4 , 5]
const arrayModificado = arrayMap.map((arrayMap) => {
    return arrayMap * 2

})
  console.log(arrayModificado)
 //***********Método 08 -FOR EACH*******************//

 const foreachtArray = ['Carlos', 'André', 'Júlia', 'Akira']
foreachtArray.forEach((nome) => {
    console.log(nome)
 });