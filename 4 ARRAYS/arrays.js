//ARRAYS
console.log('ARRAYS')
 
//En el tema 'tipos de datos' vimos de forma breve lo que son los arrays y dijimos que, por su forma de almacenar datos, es considerado un 
//objeto. Recordemos:

let unArray = ['un string', 5, true, false, null]

//Los arrays es un conjunto de datos primitivos o de objetos que se guardan en memoria pero dentro de corchetes [].
//Cada elemento del array ocupa una posicion en memoria y dichas posiciones inician en 0, es decir, 'un string' esta en la posicion 0, 
//el numero 5 esta en la posicion 1, 'true' esta en la posicion 2 y asi sucesivamente. Miremoslo en consola:
console.table(unArray)//en forma de tabla
console.log(unArray)

//Para ver un elemento de alguna posicion hacemos lo siguiente:
console.log(unArray[2])//llamamos el array y dentro de corchetes colocamos la posicion que queremos evaluar

//Para actualizar un dato podemos hacer:
unArray[0] = 'otro string'
console.log(unArray)

//Tambien podemos tener un alguna posicion otro array o mas arrays:
unArray[1] = [1,2,3,4]//se lee: en la posicion 1 de 'unArray' se guarda otro array con los numeros del 1 al 4
console.log(unArray)//En consola vemos que en la posicion 1 hay un array con 4 elementos.


//ARRAY CON OTROS ARRAYS
let arrayPrincipal = [
    ['a', 'b', 'c', 'd'],
    ['e', 'f', 'g', 'h'],
    ['i', 'j', 'k', 'l']
]
console.log(arrayPrincipal)// en este caso vemos en cada posicion del array otros arrays


//Tambien hemos visto que un objeto es otro tipo de arreglo en memoria pero, a diferencia de un array, cada posicion dentro de un objeto 
//tiene un identificador llamado 'key' o propiedad y dentro de cada key puede haber un tipo de dato primitivo, un array, una funcion u otro 
//objeto. Veamos:

let unObjeto = {// en este objeto tenemos los mismos datos de 'unArray' pero cada posicion de memoria tiene su propio identificador:
    unString : 'un string',
    numero : 5,
    boleano : true,
    otroBoleano : false,
    unNull : null,
    unaFuncion: function(dato){console.log(dato)}//tambien podemos tener una funcion dentro, funcion que podemos invocar de la siguiente manera:
}

unObjeto.unaFuncion('esto se llama tambien metodo')//se lee: dentro de 'unObjeto' esta la funcion o metodo 'unaFuncion' que tiene
//como argumento un string, argumento que se cargara en el parametro 'dato' que esta dentro de los parentesis del metodo y luego se 
//ejecuta el console.log mostrando lo que tiene 'dato'.

//Tambien podemos hacer un array de objetos:
const MASCOTAS= [
    {nombre:'puchini', edad: 12, raza:'perro'},
    {nombre: 'chanchito', edad: 3, raza:'perro'},
    {nombre:'pulga', edad: 10, raza:'perro'},
    {nombre: 'pelusa', edad: 16, raza:'gato'}
]

//Para mostrar la propiedad o key de alguna posicion del array hacemos:
console.log(MASCOTAS[2].raza)
console.log(MASCOTAS[1].nombre)
console.log(MASCOTAS[3].edad)

//¿Que pasara si pidemos un dato que no existe? veamos:
console.log(MASCOTAS[6])//en consola se pintara 'undefined' y es obvio pues no hay nada en esa posicion, no existe


    
//Ya que nos hemos familiarizado con arrays y objetos, nos quedara mas facil entender lo siguiente.
//JS tiene establecidos muchos metodos o funciones que podemos usar, por ejemplo, con arrays. 

//METODO PUSH
console.log('METODO PUSH')
console.log(unArray)
//Este metodo o funcion se usa para agregar un elemento al final de un array, veamos:
unArray.push(52)//se lee: agregue al final de 'unArray' el numero 55. El 55 es un argumento de la funcion  es el dato que se agregara al final
unArray.push('otro elemento al final')
unArray.push('uno mas')
console.log(unArray)

//METODO UNSHIFT
console.log('METODO UNSHIFT')
console.log(unArray)
//Este metodo o funcion sirve para agregar un elemento al inicio del array:
unArray.unshift('al inicio')
unArray.unshift('otro al inicio')
console.log(unArray)

//METODO POP
console.log('METODO POP')
console.log(unArray)
//Este metodo sirve para eliminar un elemento al final del array y como su mision ya esta establecida, no requiere un argumento:
unArray.pop()
unArray.pop()
unArray.pop()
console.log(unArray)// se eliminaron los 3 ultimos


//METODO SHIFT
console.log('METODO SHIFT')
console.log(unArray)
//Este metodo o funcion sirve para eliminar un elemento al inicio del array y como es su unica funcion, tampoco necesita argumentos:
unArray.shift()
unArray.shift()
unArray.shift()
console.log(unArray)


//Otros metodos utiles son:
//METODO INCLUDES
console.log('METODO INCLUDES')
//Sirve para saber si se encuentra cierto elemento en el array:
let frutas = ['manzana', 'pera', 'banana']
console.log(frutas)
let indice = frutas.includes('uva')
console.log(`¿la uva esta en el array? ${indice}`);//el resultado es true o false 




//METODO SPLICE
console.log('METODO SPLICE')
//Usado para remover o cambiar elementos dentro del array, veamos:
let arrayFrutas = ['naranjas', 'papayas', 'uvas', 'granadillas']
console.log(arrayFrutas)

//El primer argumento se llama 'start' y se usa para indicar el inicio para cambiar o eliminar algun elemento. Puede ser un numero entero 
//positivo o negativo y no deberia ser mayor que el numero de elementos del array. Si es negativo se comenzara a contar a partir del ultimo 
//elemento hacia la izquierda.

//El segundo argumento se llama 'deleteCount' y es el numero de elementos que se eliminaran. Se puede omitir y si eso pasa todos los elementos
//desde 'start' se eliminaran. Si es 0 o negativo no se eliminaran elementos 

//El tercer argumento, 'item', es el elemento que se agregara al array, si se omite solo se eliminaran elementos.

//Veamos los siguientes ejemplos:
arrayFrutas.splice(1, 0, 'pitayas')//se lee: en la posicion 1, sin borrar algun elemento, coloque el string 'pitayas'
console.log(arrayFrutas)

arrayFrutas.splice(-1, 1)//se lee: desde la posicion -1 (que es la ultima) borre un elemento, contando el 'start'
console.log(arrayFrutas)

let elementoEliminado = arrayFrutas.splice(2, 1, 'bananas')//se lee: desde la posicion 2 borre un elemento (contando la posicion 'start'), y 
//coloque el string 'banana', en otras palabras, reemplace el elemento de la posicion 2
console.log(arrayFrutas)
console.log(`este es el elemento eliminado del anterior array: ${elementoEliminado}`)

arrayFrutas.splice(0, 2);//se lee: desde la posicion 0 borre dos elementos (contando la posicion 'start')
console.log(arrayFrutas)

 
arrayFrutas.splice(0)//se lee: desde la posicion 0 borre todos los elementos
console.log(arrayFrutas)
















//PROPIEDAD LENGTH
console.log('PROPIEDAD LENGTH')
//Tambien existe una propiedad o key que nos devuleve la longitud de un array, veamos:
console.log(`la longitud de 'unArray' es de ${unArray.length} elementos`)
//Recordemos que a diferencia de un metodo, una propiedad no recibe argumentos solo muestra lo que hay en ella y en ese caso muestra el 
//numero de elementos del array en cuestion.

console.log(`el array 'MASCOTAS' tiene ${MASCOTAS.length} elementos`)
console.log(`el 'arrayPrincipal' tiene ${arrayPrincipal.length} elementos`)
















//COMO RECORRER LOS ELEMENTOS DE UN ARRAY
console.log('COMO RECORRER LOS ELEMENTOS DE UN ARRAY')
//Cuando decimos recorrer los elementos de un array estamos mencionando que se trabajaran con cada uno de sus indices, por ejemplo:
arrayFrutas = ['naranjas', 'papayas', 'uvas', 'granadillas']
console.log(arrayFrutas)

//En vez de mostrar todos los elementos del array, mostremos uno a uno. Para ello usemos el ciclo 'for'.
//Cuando decimos array.length esta propiedad se carga con el numero de elementos del array. Si queremos saber el ultimo indice podemos 
//hacer: array.length-1...por que? por que el ultimo indice no es la cantidad de indices, pues estos inician en 0, por tanto se le 
//resta 1. 
//Por ejemplo, tenemos este array: arrayFrutas = ['naranjas', 'papayas', 'uvas', 'granadillas'], si le pasamos el metodo arrayFrutas.length
//arrojara la cantidad de indices, es decir 4, pero si lo que queremos es saber el ultimo indice no es 4 es 3, pues se inicia desde 0.
//Es por esto que se resta uno al metodo: arrayFrutas.length = 4 -1 = 3 que es el ultimo indice

for(i=arrayFrutas.length-1; i>=0; --i ){//se lee: la variable i se carga con el valor del ultimo indice, luego se pregunta:
    //i es mayor o igual que 0? como la respuesta es verdadera se ejecuta lo que esta dentro del bloque un vez y luego se resta una unidad
    //a la variable 'i'
    console.log(arrayFrutas[i])//se lee: muestre en consola lo que esta en el indice que marque la variable 'i'. Como esta se va decrementando
    //mostrara cada indice del array en cada ciclo
}













//USANDO EL FOR-OF
console.log('USANDO EL FOR-OF')
//La anterior forma para recorrer elementos no esta mal pero hay una mejor forma, veamos:

for (const variableQueRecibe of arrayFrutas) {
    console.log(variableQueRecibe)
}
//En consola no solo vemos el mismo resultado que se obtuvo con el ciclo for tradicional, sino que los ordeno desde el indice 0 hasta el 4
//Cosa que tambien podriamos hacer con el for tradicional pero este for lo hace mas facil... verdad?

/*
La estructura es la siguiente:
for(a of b){bloque de codigo}, donde a es una variable o constante que recibe cada elemento del array que queremos recorrer y por lo general se 
escribe el mismo nombre que el array fuente pero en singular, y b es el array fuente que queremos recorrer. Una vez tengamos dichos elementos 
por separado basta con trabajar con cada uno de ellos. Veamos otro ejemplo:
*/

let numerosEnteros = [-3,-2,-1,0,1,2,3]
//Tenemos un array con numeros enteros negativos y positivos. Sumemosle otro numero a cada uno y mostremos el resultado:

for (const numeroEntero of numerosEnteros) {//se lee: por cada ciclo o iteracion un elemento del array 'numerosEnteros' pasara a la constante
    // 'numeroEntero' y enseguida se ejecuta lo que esta dentro de los bloques usando, probablemente, la constante que recibe cada elemento. 
    //Digo probablemente por que se puede usar este ciclo con otro proposito, por ejemplo mostrar un 'hola' en consola el numero de elementos
    //que tiene el array fuente, por ejemplo:
    console.log(numeroEntero + 3)
    /*
    -3 + 3 = 0
    -2 + 3 = 1
    -1 + 3 = 2
    0 + 3 = 3
    1 + 3 = 4
    2 + 3 = 5
    3 + 3 = 6
    */
    console.log('hola')//apareceran 7 veces el string 'hola', podemos obviar el mostrar la suma de enteros volviendolo un comentario
}














//Sigamos con otro ejercicio aplicando lo conocido. Pidamosle al usuario 3 elementos para irlos guardando en un array. Despues le pedimos que 
//cambie o que borre un elemento: 

//Declaramos un array vacio y un mensaje al usuario que lo oriente en el proceso:
let prendas = []
alert('A continuacion le pediremos 3 prendas de vestir')

//como son 3 elementos los que vamos a pedir y a la vez se van guardando en el array declarado, hagamos un ciclo for tradicional para llevar 
//el conteo:
for(i=0; i<3; ++i){//se lee: se declara la variable 'i' con 0, luego se pregunta: ¿i es menor que 3? como es verdadero se ejecuta una vez 
    //el codigo del bloque y luego se incrementa la variable 'i'. El bloque se ejecutara hasta que 'i' no sea menor a 3, es decir, cuando sea 4
    prendas.push(prompt('por favor ingrese una prenda de vestir'));//se lee: empuje en el array 'prendas' lo que el prompt capture del usuario
}

//Una vez acabe el ciclo for, se mostrara un mensaje al usuario mostrando lo que ingreso y pidiendo que realice una accion: eliminar o cambiar:
//Para que salgan lineas separadas en el alert, se usa la linea invertida con una n: \n (alt + 92)
let respuesta = prompt(`usted tiene los siguientes elementos: \n
${prendas[0]},\n
${prendas[1]},\n
${prendas[2]} \n
si desea eliminar alguna marque 1, \n
si desea cambiar alguna marque 2, si quiere salir del menu cancele.`)
//En una variable llamada 'respuesta' guardaremos el numero que el cliente escoja, pero antes le mostramos un mensaje para que tome una accion 
//Para mostrar lo que el usuario ingreso, llamamos al array y sus indices: prenda[0, 1 o 2]

//Tengamos pesente que el usuario puede escojer 3 opciones: 1 para eliminar un objeto del array, 2 cambiarlo y 3 oprimir cancelar. Esta 
//estructura es muy apropiada para usar un ciclo 'switch' ya que la variable 'respuesta' puede contener 1, 2 o null. 
//Este ultimo dato se carga cuando el usuario cancela y no ingresa algun dato al prompt.

//Antes de seguir, evaluemos que tipo de dato se ingresa por el prompt:
console.log(`el tipo de dato que captura el 'prompt' es: ${typeof respuesta}, a pesar que se ingresa un numero`)



switch(respuesta){//se lee: cargamos la variable 'respuesta', luego en cada caso (case) colocamos el valor que va a tener la variable 'respuesta'
    //y para cada caso (case) una serie de insrucciones dependiendo de lo que quiere el usuario:

    //caso (case) 1: el usuario va a eliminar un objeto:
    case "1" : let opcion1 = prompt(`presione el numero del objeto que desea eliminar: 1. ${prendas[0]}, 2. ${prendas[1]}, 3. ${prendas[2]}`)
    if(opcion1>3){//se lee: si opcion1 es mayor a un numero que se le pide al usuario, saldra una alerta...
        alert('presione un numero valido, vuelva a empezar')
    }
    else{
        prendas.splice(opcion1-1, 1)//como las opciones que se brindan al usuario estan por encima un digito respecto a los indices
        //del array, se debe restar dicho digito con opcion1-1. esta linea se lee: a la opcion que digite el usuario reste 1 y luego borre un
        //elemento incluido el opcion1-1
        let prendasNoEliminadas = []//este array vacio se usa para que...
        for (let prenda of prendas) {//el ciclo for-of pasara lo que tiene el array 'prendas' a la variable 'prenda' y por cada elemento del
            //array hara el codigo del bloque
            prendasNoEliminadas.push(prenda)//....se empuje el dato que tiene la variable 'prenda' al array vacio
        }
        alert(`usted se quedo con las siguientes prendas: ${prendasNoEliminadas}`)//finalmente mostramos el array 'prendasNoEliminadas'
        //al usuario.
    };
    break;// una vez se ejecute este caso se termina el script

    //El caso (case) 2 sera para que el usuario cambie una prenda:
    case "2" : let opcion2 = prompt(`presione el numero del objeto que desea cambiar: 1. ${prendas[0]}, 2. ${prendas[1]}, 3. ${prendas[2]}`)
    let nuevaPrenda =prompt('ingrese la nueva prenda, por favor')
    if(opcion2>3){//si el usuario marca un numero mayor al pedido, saldra....
        alert('presione un numero valido, vuelva a empezar')//....una alerta
    }
    else{
        prendas.splice(opcion2-1, 1, nuevaPrenda)//se lee: el argumento 'start' sera un digito menor que el marcado por el usuario ya que 
        //los arrays empiezan en 0. El argumento 'deleteCount' indica que se eliminara 1 elemento incluido el 'start' y el argumento 'item'
        //es la variable que se cargo por medio del prompt con la nueva prenda.

        //Ahora se armara otro array con la prenda reemplazada
        const Prenda_Cambiada = []
        for (let prendaCambiada of prendas) {
            Prenda_Cambiada.push(prendaCambiada)
        }
        alert(`usted se quedo con las siguientes prendas: ${Prenda_Cambiada}`)
    };
    break;// una vez se ejecute este caso se termina el script

    //En caso de que el usuario cancele la operacion de cambio o eliminacion, la variable 'respuesta' se cargara con 'null' es decir sin 
    //dato y le mostrara al usuario un mensaje con lo que tiene en el 'carrito':
    case null : alert(`usted tiene los siguientes elementos: \n
    ${prendas[0]},\n
    ${prendas[1]},\n
    ${prendas[2]} \n`);
    break;// una vez se ejecute este caso se termina el script


    //En caso de que 'respuesta' no sea ni 1, ni 2, ni 'null' (un valor como 4, por ejemplo), mostrara una alerta al usuario:
    default : alert('ingrese un numero valido, vuelva a empezar')

}

//Cuando se acabe el ciclo 'switch' y el script, se acabara el codigo:
console.log('se termino el script y el switch')


//OJO!! el tipo de dato que se recibe en el prompt es string, lo que se debe tener un cuenta a la hora de operar y tengamos resultados 
//inesperados por la coercion de tipos, veamos:

let valor1 = prompt('ingrese un numero')
let valor2 = prompt('ingrese otro numero')
console.log(resultado = valor1 + valor2)//el resultado es la concatenacion de dos string y no la operacion suma

//Para que se de la operacion deseada, se debe hacer una conversion explicita de tipo de dato, por ejemplo convertir a numero lo que
//ingrese por el prompt:

valor1 = +prompt('ingrese un numero')
valor2 = +prompt('ingrese otro numero')
console.log(resultado = valor1 + valor2)//ahora si es una operacion decente.....








//DESESTRUCTURAR ARREGLOS:
console.log('DESESTRUCTURAR ARREGLOS')

// Consiste en asignar valores a variables usando arreglos, por ejemplo:
let a, b
[a, b] = [1, 2]// el array de la derecha son los datos que se asignaran al array de la izquierda
console.log(a, b)

let d, e, f
[d, e, f] = [1, 2, 3]
console.log(d, e, f)


let g, h, j
[g, h, , , j] = [1,2,3,4,5]
console.log(g, h, j);//notamos que no hay variables donde guardar el numero 3 y 4 por lo tanto no se asignan

//Destructurar tambien es usado para cambiar los valores de las variables:
let k = 8, l = 2;
console.log(k, l);
//Ahora:
[k, l] = [l, k];//los valores de la derecha se asignaran en el mismo orden a la izquierda, de esta forma cambian los valores
console.log(l, k);



//tenemos un array...
const arrayNumeros = [1, 2, 3]

//ahora queremos colocar cada indice del array anterior en cada variable:
let [posicion1, posicion2, posicion3] = arrayNumeros
console.log(posicion1, posicion2, posicion3)


//pero si quiero solo tener ciertos indices hacemos los siguiente:
let [, posicion4, posicion5] = arrayNumeros //quitamos la posicion3
console.log(posicion4, posicion5)

let [posicion6, , posicion8] = arrayNumeros //quitamos la posicion 7
console.log(posicion6, posicion8)









//EL OPERADOR SPREAD Y REST
console.log('EL OPERADOR SPREAD Y REST')
//En JS encontramos tres puntos que tienen una mision interesante, pero dependiendo de su funcion se llamaran spread o rest, veamos.
//El operador es el siguiente: '...variable' se conforma de tres puntos y luego una variable. Esto funciona para ambos casos, spread o rest
//PERO spread (que significa 'untado', 'extendido') se usa para 'extender' valores, mientras que el rest hace lo contrario.
//Veamos como se usa el operador spread:

let arrayParaUsarSpread = [1,2,3,4]// tenemos un array con 4 elementos
let arrayCopia = [...arrayParaUsarSpread]// en 'arrayCopia' se estan 'extendiendo' los indices del array anterior, en otras palabras estamos diciendo que coja lo que tiene cada indice y 
//extiendalo en cada indice del nuevo array: lo que tiene el indice 0 coloquelo en el indice 0 del nuevo array, lo que esta en el indice 1 coloquelo en el indice 1 del nuevo array, etc...
console.log(arrayCopia)// y en consola vemos el mismo valor



//Veamos otro ejemplo, ahora tenemos 2 arrays: 'arrayParaUsarSpread' (ejemplo de arriba) y 'otroArraySpread'.  
let otroArraySpread = [5,6,7,8]

En un 3er array, 'unionDeArrays', podemos colocar el contenido de los otros arrays:
let unionDeArrays = [...arrayParaUsarSpread, ...otroArraySpread, 9,10]// 'extendemos' los dos arrays anteriores, es como si dijeramos: 'operador spread coloque el contenido de cada indice 
//en cada indice del nuevo array', eso hace que spread sepa cuantos indices tiene un array y como va a colocar cada uno en los otros indices del nuevo array
console.log(unionDeArrays)//ahora vemos la union de ambos arrays y los nuevos indices 


//Tambien podemos añadir nuevos datos: 
 
const nuevoArray = [6, 7, 8]
let dato = 5

const elArrayConElDato = [dato, ...nuevoArray]//se lee: en el indice 0 coloque 'dato' y en los demas indices 'extienda' los indices que tiene 'nuevoArray'
console.log(elArrayConElDato)
 
//Tambien podemos cambiar el orden de los indices:
const CambioDeOrden = [...nuevoArray, dato]//se lee: extienda los indices del 'nuevoArray' y en el ultimo indice coloque 'dato'
console.log(CambioDeOrden)


        












//DESESTRUCTURACION CON EL OPERADOR REST
console.log('DESESTRUCTURACION CON EL OPERADOR REST')
//El operador REST, igual que el spread, son tres puntos horizontales seguidos y luego una variable, por ejemplo: '...laVariable' 
//PERO a diferencia del spread, el REST no extiende los valores sino que los contrae, veamos:

let m, n, arg;//declaramos algunas variables como 'arg', variable que tendra el nuevo arreglo del REST
[m, n, ...arg] = [1,2,3,4,5,6,7,8,9]// asignemos los elementos del array de la derecha al array de la izquierda
console.log(m, n, arg);//en consola vemos que en 'm' y 'n' se cargaron el primer y segundo elemento pero en 'arg' se guardaron 
//los demas valores pero en un array
//Es de esta forma que el operador REST, en vez de extender, 'contrae' en un array los elementos.



// ejemplo 2: remover los 3 primeros elementos de un arreglo:
[ , , ,...arg] = [1,2,3,4,5,6,7,8,9];//como hay 3 elementos vacios en el array de la izquierda, se omiten los primeros elementos del array 
//de la derecha, y los demas se guarda en 'arg'
console.log(arg);//con este método conseguimos que solo se guarden en la variable "arg" los elementos del 4 en adelante, pues antes de cada 
//coma (,) no hay variable para asignarle los numeros 1,2 y 3.


//CONCLUSION
//A pesar de que ambos operadores son iguales, ...otroArraySpread y ...arg (tres puntos y una variable), distinguimos un operador REST de un 
//operador SPREAD porque el primero no tiene datos, espera recibirlos para formar un array con ellos, mientras que el segundo tiene datos que 
//seran 'extendidos' en alguna variable.




























//METODO PARA ELIMINAR ELEMENTOS DUPLICADOS
console.log('METODO PARA ELIMINAR ELEMENTOS DUPLICADOS')

//Tenemos el siguiente array:
let caracteres = ['a', 'b', 'b', 'c', 'd', 'd', 'e', 'e', 'f']
console.log(caracteres)

//Como vemos hay unos caracteres repetidos en el array, para elimininarlos haremos lo siguiente:
let caracteresUnicos = [...new Set(caracteres)]
console.log(caracteresUnicos)




















/*
CONCLUSION

*Un array es un conjunto de n tipos de datos dentro de corchetes.
*Cada tipo de dato es guardado en un indice dentro del array. Estos indices inician en 0
*Para leer algun indice se coloca el nombre del array y dentro de corchetes el numero del indice en cuestion
*El metodo PUSH se usa para agregar un elemento al final del array 
*El metodo UNSHIFT se usa para agregar un elemento al inicio del array
*El metodo POP se usa para eliminar un elemento al final del array
*El metodo SHIFT se usa para eliminar un elemento al inicio del array
*El metodo INCLUDES se usa para saber si existe cierto elemento en el array, dando como resultado true o false
*El metodo SPLICE se usa para remover o cambiar elementos dentro del array
*El metodo SET se usa para eliminar elementos duplicados en el array
*La propiedad LENGTH devuelve el numero de elementos que tiene un array
*La sentencia for-of se usa para recorrer los elementos de un array, pasando uno a uno a otra variable 
*Desestructurar un array es desempacar sus valores en distintas variables. Se puede usar el operador REST
* este metodo ...new Set() elimina valores duplicados en un array


Mas adelante veremos que los arrays tienen muchos metodos pero antes debemos ver otros temas...

*/
