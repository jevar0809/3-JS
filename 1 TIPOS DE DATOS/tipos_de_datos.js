//TIPOS DE DATOS EN JAVASCRIPT
console.log('TIPOS DE DATOS EN JAVASCRIPT')

/* Los datos son parte fundamental de la programacion, pues finalmente es con ellos que se trabajan para obtener un resultado.
Pensemos en un dato como los numeros, con ellos hacemos diferentes calculos como sumas, restas, multiplicaciones, etc...
Pues con javascript podemos trabajar con los datos del usuario o del mismo programador.
JavaScript recibe los siguientes datos:
Numeros
Cadenas de texto o tambien conocidas como 'string'
Booleanos, es decir, true y false
NULL (un primitivo especial)

Pero JS genera estos datos:
UNDEFINED
NaN

Estos se conocen como datos primitivos, pues son basicos respecto a los objetos que son una coleccion de variables: 
Arrays
Objeto literal
funciones (un objeto especial)

Pero antes de ver en detalle los datos, tenemos que conocer donde se depositan, es decir las variables.

 */
















//DECLARACION DE VARIABLES 
console.log('DECLARACION DE VARIABLES')

//PALABRA RESERVADA LET
console.log('PALABRA RESERVADA LET')
/* Para trabajar con los datos, debemos almacenarlos en la memoria del PC. Para ello debemos saber que la declaracion de una 
variable se divide en tres partes: palabra reservada, identificador y tipo de dato (no es obligatorio), veamos: */

let nombre = 'jorge';//se lee:A la variable nombre se le asigno el string 'jorge'

//let es un palabra reservada que le indica al programa que se va a declarar una variable 
//nombre es el identificador o la direccion del dato
//'jorge' es un dato de tipo string, pero puede suceder que no se requiera ningun dato aun.

let apellido//se lee: se declaro la variable sin un dato, este se podra asignar mas adelante en el codigo
 
/* Para ver este dato almacenado, podemos usar la consola del navegador. En la carpeta donde esta este documento tambien hay 
otro del tipo html que se llama "tipos de datos". Si le pulsamos doble click se abrira en una ventana del navegador sea 
Chrome, Edge o el que tenga instalado (los navagedores antes mencionados tienen una consola de desarrollo muy bueno). 

En Chrome o Edge pulsamos la tecla "F12" donde se desplegara un entorno de desarrollo en la parte inferior (casi siempre, 
pero es ajustable). Estando en la consola o herramientas de desarrollo, buscamos la pestana que se llama "consola" y alli
digitamos "nombre" y pulsamos enter dos veces. Veremos que aparece el string 'jorge' asignado anteriormente.

Para refrescar la ventana de desarrollo, pulsamos "F5", veremos que los datos en la consola se borraran.
Ahora, si digitamos "apellido" y damos dos veces enter, aparecera un tipo de dato "undefined" del que hablaremos mas
adelante.


La palabra reservada let tiene varias ventajas. Una de ellas es que si declaramos otra variable con el mismo nombre, en la
consola de las herramientas de desarrollo del navegador (de ahora en adelante consola) aparece un error como este:
"Uncaught SyntaxError: Identifier 'primerNombre' has already been declared" indicando que dicho identificador, "primerNombre",
ya se uso:

let primerNombre = 'jorge';
let primerNombre = 'enrique'

Sin embargo, el tipo de dato de una variable declarada con let si se puede reemplazar, por ejemplo:
*/

let nombreMascota = 'firulais'
nombreMascota = 'michu'
console.log(nombreMascota)//console.log es un metodo que nos muestra lo que hay dentro de sus parentesis en la consola de
//desarrollo, en este caso se mostrara el nombre 'michu'

//Otra ventaja se expondra mas adelante y es el scope o ambito de la variable.

// Si quisieramos declarar mas de una variable a la vez, podriamos hacer lo siguiente:
let numero1, numero2, numero3// de esta forma no usamos la palabra let para cada variable y luego les asignamos valores

//Si quisieramos agregar el mismo valor a todas la variables, podriamos hacer lo siguiente:
let numero4 = numero5 = numero6 = 5
console.log(numero4, numero5, numero6)// asignando a todas las variables el namero 5





//PALABRA RESERVADA CONST
console.log('PALABRA RESERVADA CONST')

// Otra palabra reservada para declarar variables es const. Esta palabra indica que la variable no puede ser modificada,
// y su identificador tampoco se puede ser reemplazado, en otras palabras es constante. Por ejemplo:

const PI = 3.1416 //el numero PI es constante, su valor nunca cambia
const CADENA_CARACTERES = 'cadena de caracteres' //esta constante no cambia su valor en el codigo
console.log(PI, CADENA_CARACTERES) //en consola se mostrara el contenido de las constantes


// Si intentaramos cambiar el identificador o el tipo de dato no lo permitiria:
//const PI = 2.1547
//const CADENA_CARACTERES  = 'otra cadena'
// En consola aparece el error: Uncaught SyntaxError: Identifier 'PI' has already been declared, mencionando, como vimos en 
// otro ejemplo, que el identificador ya fue declarado.
// Tampoco podemos cambiar su valor como si lo podemos hacer con let:
// PI = 2.1415 el error de consola sera: Uncaught TypeError: Assignment to constant variable, que traduce algo como 'esta
// asignando un valor a una constante' 

// Esta declaracion es super util pues no permite errores en codigos largos donde es prepenso reformular las variables.

// A diferencia de let, las constantes se deben inicializar siempre, es decir, no se permite declarar una constante vacia 
// como si lo permite let, por ejemplo:

// const SIN_VALOR, en la consola aparece el siguiente error: Uncaught SyntaxError: Missing initializer in const declaration, 
// que traduce: falta el inicializador en la declaracion const


// EN RESUMEN:
// let permite reasignar su valor, const no
// No se pueden volver a declarar variables o constantes con el mismo identificador
// let se puede declarar sin valor inicial, const se debe declarar asignandole un valor

















//EL IDENTIFICADOR
console.log('EL IDENTIFICADOR')
// Despues de la palabra reservada let o const encontramos el identificador de la variable o constante, es decir, la 
//referencia o direccion del dato en la memoria, por ejemplo:

let numero = 5
const ASIGNATURA = 'programacion'

// El identificador 'numero' es la direccion de la variable donde se guardara el numero 5, en la constante el identificador
// es 'ASIGNATURA' donde se guardara el string o cadena de texto 'programacion'.
//Los identificadores tienen una serie de normas y buenas practicas para trabajar con ellos, veamos.



//TIPOS DE NOTACION
console.log('TIPOS DE NOTACION')
//CAMEL CASE: Esta notacion indica que el identificador de la variable inicia con minuscula y cada nueva palabra inicia con 
//MAYUSCULA: aumentarNivelDificultad

//PASCAL CASE: Esta notacion indica que el identificador de la variable inicia con MAYUSCULA y cada nueva palabra inicia con 
//MAYUSCULA tambien: AumentarNivelDificultad

//SNAKE CASE: Esta notacion indica que el identificador de la variable se escribe en MAYUSCULAS y cada nueva palabra se
//separa con un guion bajo. Se usa, de forma convencional, para las constantes:  AUMENTAR_NIVEL_DIFICULTAD


//Los identificadores son case sensitive, es decir, que un identificador con mayusculas no es igual a uno con minusculas:
let sumar = 5+4
let SUMAR = 4+5
const name = 'jorge'
const NAME = 'jorge'
//La consola no muestra error pues son diferentes identificadores

//Los identificadores no pueden ser una palabra reservada como let, const, function, if, for, etc...estas son propias del 
//programa JAVASCRIPT

//Por lo general las constantes se nombran con notacion SNAKE_CASE, de esta forma se identificara mas rapido dentro del 
//codigo, indicando asi que es una variable de solo lectura:
const MI_NOMBRE = 'jorge'
//Y las variables comunes se nombran, por lo general, con camel case:
let miNombre = 'enrique'



//Un buen identificador debe ser descriptivo, es decir, debe indicar su contenido. Un identificador como:
let X = 5 //no describe nada, en cambio:
let numeroVidas = 5 // menciona que una variable controla el numero de vidas en un juego, por ejemplo

//Si la variable tiene datos booleanos, es super practico usar verbos tales como: es..., esta..., tiene..., ha...
//if(haAceptadoLosterminos), siempre leyendose de forma afirmativa. En funciones es bueno usar verbos como
//function crearNombre, saludar, hacerDescuento, etc (ya lo veremos mas adelante)



//Ademas, los identificadores no llevan tildes, pueden empezar con letras mayusculas o minusculas, el signo $ o el guion 
//bajo (_), no tienen una longitud y pueden tener numeros pero no al inicio. Veamos:
let _valor = 7
let $otroValor = 5
let Amigos = 'juan, pepe, chato'
let mascota = 'firu'
let archivo5 = 'archivo 5'
let unIdentificadorPuedeSerMuyLargoPeroNoPasaNada = 0





















//TIPOS DE DATOS:
console.log('TIPOS DE DATOS')
//Ahora si, veamos los tipos de datos que hablabamos al principio. Iniciemos con los que recibe JS: 
//NUMBER O NUMEROS: Las variables pueden contener numeros enteros positivos o negativos, decimales positivos o 
//negativos, veamos:
let numeroDeVidas = 5
const IVA = 19.5
const TEMPERATURA = -35.5
let descuento = -10


//STRING O CADENAS DE TEXTO: Las variables pueden contener union de caracteres o cadenas de texto pero este debe estar entre 
//comillas, veamos:
const NOMBRE_DE_MI_PERRO = 'firulais castancio'
let fruta = 'manzana'

//Si se requiere usar comillas en el texto, se pueden usar comillas simples para bordear el string y comilla dobles para 
//bordear la palabra que queremos resaltar o viceversa, por ejemplo:
let identificacion = 'jorge, alias "el profe",'
let texto = "dice que la computadora no 'entiende' la instruccion"
console.log(identificacion, texto)

//Los emojis tambien son un tipo de string. Para usarlos se presiona la tecla windows + la tecla punto 👌👌 dentro de comillas:
let emoji = '😃👍'
console.log(emoji)

//Otro tipo de string muy usado es el 'template string' o plantillas literales. De esta forma se pueden unir texto y una variable. 
//Para usar el template string debemos colocar el texto y la variable dentro de comillas invertidas o backticks (alt + 96) y la variable dentro 
//de llaves anteponiendo el signo pesos, veamos👀:
let unaFrase = 'una variable'
let otraFrase = 'por ejemplo'
console.log(`De esta forma se une un texto con ${unaFrase} para formar una oracion, ${otraFrase}`)
console.log(`${unaFrase} ${otraFrase}`)//se unen las dos variables y queda: 'una variable por ejemplo'

//Tambien podemos realizar ciertas operaciones dentro de las llaves, por ejemplo:

let numeroX = 3
let numeroY = 5

console.log(`el resultado de 3 + 5 es ${numeroX + numeroY}`)

//En posteriores capitulos veremos mas usos de las plantillas literales.




//BOOLEANOS O FALSO Y VERDADERO: La electronica de los computadores solo permite dos valores 0 y 1. Cada valor representa la 
//ausencia o presencia de corriente. De igual forma decimos que si hay 0 (ausencia de corriente) es falso 
//y si hay 1 (presencia de corriente) es verdadero 
//Para mas informacion ver el siguiente enlace:
//(https://www.youtube.com/watch?v=RVGIXfC4Xeg&list=PL3ei_Xb7-ic6EWu3nYLCxMu2mSmhiAEq7&index=1)

let verdadero = true//se lee: en la variable 'verdadero' se guarda el dato 'true'
let falso = false//se lee: en la variable 'falso' se guarda el dato 'false'
console.log(verdadero, falso)


//NULL O NULO, SIN VALOR: El dato null sirve para indicar que una variable es declarada sin ningun valor, veamos:
let panes = null//se lee: en la variable 'panes' no se guarda nada, o se guarda un dato nulo
console.log(panes)




//Veamos los datos que genera JS:
//UNDEFINED O INDEFINIDO: A diferencia del null, undefined indica que JS no interpreta el dato que esta en la variable, 
//no "sabe" que es. Aunque podemos escribir este dato en una variable no es recomendable.
let baseDeDatos// variable inicializada pero sin datos.
//console.log(baseDeDatos) la consola mostrara 'undefined' porque no 'sabe' que dato esta contenido


//NaN O NOT A NUMBER: Este dato lo genera JS cuando se esta operando con datos que no son numeros. Veamos:
let numeroUno = 5
let numeroDos = '5'
let resultadoOperacion = numero1 / numero2
console.log(resultadoOperacion)// como se esta dividiendo un numero con un string, JS no puede hacer dicha operacion.
//Mas adelante veremos que JS puede operar con numeros y cadenas de texto (raro...)




//CRUD (Create, Read, Update, Delete)
//En las bases de datos, este acronimo es usado para gestionar la informacion almacenada, pero el concepto lo podemos
//usar para las variables. Pensemos en como se crea un dato, como se lee dicho dato, como se actualiza y finalmente como
//se elimina.
//Crear un dato:
let otroDato = 'un dato'
//leer el dato:
console.log(otroDato)
//Actualizar el dato:
otroDato = 'otro dato'
console.log(otroDato)
//Borrar un dato:
otroDato = null
console.log(otroDato)
otroDato = ''
console.log(otroDato)//tambien se pude ver desde la consola digitando 'otroDato'


//EL METODO TYPEOF
//Para saber el tipo de dato que contiene una variable, podemos usar un metodo conocido como typeOf(), veamos:
console.log(typeof(otroDato))//string
console.log(typeof(numeroUno))//number
console.log(typeof(verdadero))//boolean
console.log(typeof(TEMPERATURA))//number, no distingue si es entero o decimal (flotante)
console.log(typeof(identificacion))//string
console.log(typeof(panes))//Aunque "panes" contiene un 'null' como dato, typeOf lo muestra como un objeto (object), 
//realmente este es un error de JS que no sera reparado.
console.log(typeof(baseDeDatos))//undefined













//LOS OBJETOS
//Los datos que acabamos de ver se les conocen como datos "primitivos" pues son muy basicos y su contenido en memoria no es
//tan grande como los objetos, ademas tienen otras caracteristicas que los cataloga de esta forma, pero no se podran 
//entender hasta que veamos los datos conocidos como "OBJETOS".

//Los objetos tiene un gran uso de memoria porque basicamente es un arreglo de variables dentro de una sola. Para entenderlo
//veamos un primer objeto en JS, el array.





//EL ARRAY
console.log('ARREGLOS O ARRAYS')
//El array o arreglo es un conjunto de datos dentro de una variable, por ejemplo:
let arrayDeCosas = ['string', 5, true, null]
console.log(arrayDeCosas)
console.log(typeof(arrayDeCosas))// el tipo de dato sera un object

//Igual que una variable, se declara con la palabra reservada let o const, luego se asigna un identificador y se inicializa 
//con corchetes ([]) y dentro colocamos los tipos de datos que queramos o necesitemos separados por comas (,)

//Al verlo en consola aparece el array con una flecha, a mano izquierda, que indica que se pueden desplegar datos.

//Una vez se despliegan, vemos una asosiacion de numeros con los valores del array. Los numeros a mano izquierda 
//indican la posicion dentro del array y se llaman indices, por ejemplo el dato 'string' esta en la posicion o indice 0, el 
//dato 5 esta en la posicion o indice 1, el dato 'true' en la posicion o indice 2 y el dato 'null' en la posicion o indice 3.
//Y finalmente muestra que el array contiene 4 datos o que tiene una longitud (length) de 4 posiciones, del 0 al 3.

//Como podemos observar, a diferencia de un dato primitivo aqui los datos abarcan mas memoria y un arreglo especial.

//Todos los datos dentro de un array comienzan en la posicion 0, porque? Por que la electronica digital usa solo ceros 
//y unos. Para mas info, ver el siguiente video: https://www.youtube.com/watch?v=RVGIXfC4Xeg

//Una vez entendemos el sistema binario, entenderemos como funciona la memoria RAM, donde esta se conecta con el procesador 
//con 3 buses de datos: uno indicando la direccion del dato, otro un sistema de control y otro el dato en si
//Y aqui tiene que ver mucho la direccion, pues esta inicia con el valor 0 o como se conoce en la electronica con el 
//valor que no aporta electricidad. Para mas info ver https://www.youtube.com/watch?v=yRNwl24l39E

//Por tanto, en un array se inicia en la posicion 0 (podemos quedarnos con este dato asi como asi o haber explorado los
//videos anteriores para comprenderlo mejor).

//Volviendo a los arrays, la longitud de estos no tiene importancia, pueden ser tan largos como se deseen.

//Aplicando el concepto CRUD, seria:
//Create:
const DEPORTES = ['futbol', 'basket', 'golf', 'ping pong']

//Read:
console.log(DEPORTES)
console.log(DEPORTES[0])//se lee: muestre lo que tiene el array en el indice 0
console.log(DEPORTES[1])//se lee: muestre lo que tiene el array en el indice 1
console.log(DEPORTES[2])//se lee: muestre lo que tiene el array en el indice 2
console.log(DEPORTES[3])//se lee: muestre lo que tiene el array en el indice 3

//Update
DEPORTES[0] = 'tenis'//se lee: el indice 0 se carga con el string 'tenis'
console.log(DEPORTES)
console.log(DEPORTES[0])//se lee: muestre lo que tiene el array en el indice 0
//No se permite, en este caso, cambiar todo el array DEPORTES = ['tenis de mesa', 'karate', 'atletismo'], pues 
//console.log(DEPORTES) daria un error de tipos: Uncaught TypeError: Assignment to constant variable. A menos que 
//DEPORTES estuviera declarado con let.

//Delete:
//En este caso no se podria asignar un null: DEPORTES = null, pues tambien daria un error de tipos: Uncaught TypeError: 
//Assignment to constant variable. A menos que estuviera declarado con let.

//Los arrays tambien pueden llevar en un indice otro array:
let elementos = ['elemento 1', ['subelemento1', 'subelemento2'], 'elemento2']
console.log(elementos)

//Y para poder leer un indice del array contenido en el array, solo basta con pedir el indice del indice, por ejemplo:
console.log(elementos[1][1])//se lee: muestre el contenido del indice 1 y luego el contenido del indice 1 

//Tambien podemos pedir el dato de un indice que no tiene nada:
//console.log(elementos[3]) Como el indice 3 no tiene nada saldra 'undefined'

//Mas adelante veremos mas usos de los arrays. Por el momento veamos otro objeto: las funciones.













//LAS FUNCIONES
console.log('FUNCIONES')
//Las funciones son "pedazos" de codigo. Mas adelante las veremos en profundidad, pero basicamente se componen de
//2 partes: una llamada y la funcion de la llamada. Por ejemplo, sigamos el orden 1) y 2):

//2) la funcion de la llamada:
let miNombreEs = function(nombre){//La funcion, que es un pedazo de codigo, esta guardada en una variable llamada "miNombreEs".
    //Dentro de esta variable esta la funcion que se declara con la palabra "function" seguido de un parentesis donde se guardara o 
    //guardaran los datos que envia la llamada en variables llamadas parametros, en otras palabras, el argumento o argumentos que envia la 
    //llamada se guardan en las variables que estan dentro de los parentesis, estas variables se llaman parametros. 
    //En este caso, el parametro "nombre" recibe los string 'jorge' o 'Enrique' de la llamada, como si fuese una variable: nombre = 'jorge'
    //De esta forma se puede usar esta variable o parametro dentro de las llaves {} de la funcion. 
    //En este caso, se usa para pintar en consola una frase: 
    console.log(`mi nombre es ${nombre}`)
}

//1) una llamada:
miNombreEs('jorge')//esto se lee: ejecute la llamada cuyo identificador es "miNombreEs" y enviele un string "jorge".
//El dato o datos que estan dentro de los parentesis se llaman argumentos y estos pueden ser strings, numeros, boleanos, etc...
miNombreEs('Enrique')//esto se lee: ejecute la llamada cuyo identificador es "miNombreEs" y enviele un string "Enrique"
console.log(typeof(miNombreEs))//Aunque el tipo de dato es declarado como 'function' tambien puede ser visto como un 
//objeto, por que se usa una posicion de memoria mas amplia que un primitivo para guardar este tipo de codigo.



//Veamos otro ejemplo, seguir el orden 1) y 2):
//2)la funcion "restar" recibe dos numeros, cada uno sera guardado en cada parametro o variable: numero1 y numero2 
let restar = function(numero1, numero2){
    console.log(numero1 - numero2)// luego los restamos y el resultado se muestra en consola: -43
}

//1)llamemos la funcion "restar" y enviemosle dos numeros:
restar(5, 48)

//Mas adelante veremos mas sobre las funciones. Por el momento veamos otro tipo de dato: los objetos literales































//OBJETOS LITERALES
console.log('OBJETOS LITERALES')
//Ese tipo de dato es el mas completo y practicamente se usa en todo lo que tiene que ver con JS. Los llamamos 'literales'
//pues son aquellos que creamos. JS tiene muchos objetos para trabajar de forma practica, pero familiaricemonos con ellos.
//Pensemos en las siguientes variables:
let variableNumero = 6
let variableString = 'string'
let variableBoleano = true
let variableVacia = null
let variablefuncion = function(dato){console.log(dato)}
let variableArray = [7,8,9,2]


/* 
Tenemos variables con datos primitivos y otras con objetos como una funcion y un array. Un objeto literal es una variable que puede contener
todas estas otras variables dentro de llaves. Veamos:

let objetoConTodasLasVariables = {
    let variableNumero = 6
    let variableString = 'string'
    let variableBoleano = true
    let variableVacia = null
    let variablefuncion = function(dato){console.log(dato)}
    let variableArray = [7,8,9,2]
} 
*/

//Pero hay que hacer algunos cambios para que funcione: quitamos todas las declaraciones "let", el operador = se reemplaza por dos puntos 
//verticales y cada variable se separa de otra con una coma: 

let objetoConTodasLasVariables = {
    variableNumero : 6,
    variableString : 'string',
    variableBoleano : true,
    variableVacia : null,
    variableArray : [7,8,9,2],
    variableFuncion : function(dato){console.log(dato)}
}


//Igual que los demas tipos de datos, los objetos por lo general se guardan en una variable que casi siempre es una constante, y dentro 
//podemos guardar variables, arrays, funciones y otros objetos.

//Como nos podemos dar cuenta, un objeto es un 'monstruo' de datos. Alli encontramos variables con strings, con numeros,
//con arrays, con funciones y hasta con otros objetos.

//En los objetos las variables se llaman claves (keys) o propiedades y los datos que estan dentro se llaman valor (value), key : value

//Para separar cada clave se usa la coma (,)

//Adaptemos el concepto CRUD a los objetos. Para crearlos ya sabemos como, con el ejemplo de arriba

//Para leer los datos hacemos lo siguiente:
console.log(objetoConTodasLasVariables)//En consola se mostrara todo lo que contiene dicho objeto 
console.log(typeof(objetoConTodasLasVariables))// en consola se mostrara como 'object'
//Para leer los valores de cada propiedad o clave hacemos:
console.log(objetoConTodasLasVariables.variableString)//escribimos el nombre del objeto y con un punto de por medio colocamos la propiedad
//que queremos ver, en este caso 'variableString'.
console.log(objetoConTodasLasVariables.variableNumero)//En consola se mostrara el valor que contiene la propiedad 'variableNumero'
console.log(objetoConTodasLasVariables.variableBoleano)//En consola se mostrara el boleano que esta dentro de la propiedad 'variableBoleano'

//Para utilizar la funcion que esta dentro de la propiedad 'variableFuncion', hacemos lo siguiente:
objetoConTodasLasVariables.variableFuncion('esto es una funcion')//llamamos el objeto y despues del punto invocamos la funcion, cuyo nombre es 
//la propiedad que la contiene, con los parentesis que pueden o no tener un argumento. Una funcion dentro de un objeto se llama 'METODO'

//Para leer algun indice del array que esta dentro del objeto hacemos lo siguiente:
console.log(objetoConTodasLasVariables.variableArray[0])// llamamos el objeto y despues del punto colocamos la propiedad que contiene el
//array y luego, en corchetes, el indice que deseemos

//Para actualizar algun dato hacemos lo siguiente:
console.log(objetoConTodasLasVariables)// pintemos el objeto antes del cambio
//Ahora cambiemos el numero:
objetoConTodasLasVariables.variableNumero = 5698
objetoConTodasLasVariables.variableBoleano = false
objetoConTodasLasVariables.variableString = 'otro string'
console.log(objetoConTodasLasVariables)//pintemos el objeto con el nuevo valor
//Interesante ver que la asignacion de nuevos valores se hace con el operador =

//Para borrar un dato hacemos:
objetoConTodasLasVariables.variableNumero = null//borramos el numero
console.log(objetoConTodasLasVariables)
//Tambien se puede usar la palabra reservada 'delete'
delete objetoConTodasLasVariables.variableBoleano
delete objetoConTodasLasVariables.variableFuncion
delete objetoConTodasLasVariables.variableNumero
delete objetoConTodasLasVariables.variableArray
console.log(objetoConTodasLasVariables)



//Los objetos tambien pueden tener otros objetos dentro. Veamos:

const UN_OBJETO_CON_OTRO_OBJETO = {
    otroObjeto : {
        subObjeto1 : 'string',
        subobjeto2 : 56,
        subObjeto3 : false,
        subObjeto4 : [12,25,78,96]
    }

}

//Para leer, por ejemplo, el numero 96 del array se hace lo siguiente:
console.log(UN_OBJETO_CON_OTRO_OBJETO.otroObjeto.subObjeto4[3])
//Primero se llama el objeto principal, despues del punto se llama el objeto que esta dentro, despues del punto se llama la propiedad deseada
//y como es un array dentro de corchetes escribimos el indice que queremos ver, en este caso el indice 3 que tiene el numero 96, numero que
//aparecera en la consola

//Si solo queremos mostrar el booleano, hacemos:
console.log(UN_OBJETO_CON_OTRO_OBJETO.otroObjeto.subObjeto3)//en consola debe aparecer "false". Asi para las demas keys 


//Los objetos literales son utilizados para representar un objeto de la vida real, pues cada cosa que nos rodea tiene propiedades 
//y funciones. Pensemos en el objeto 'smartPhone'. Un telefono inteligente tiene propiedades como el color, dimension, material,
//y tambien tiene funcionalidades como marcar a otro numero, descargar app, escuchar musica y muchas cosas mas.

let smartPhone = {
    dimension : '5.5 pulgadas',
    color : 'negro',
    marca : 'samsung',
    marcarNumero : function(numero){console.log(`estoy marcando al numero ${numero}...`)},
    descargar : function(app){console.log(`estoy descargando la app ${app}...`)},
    otrasCaracteristicas : ['resistente al agua', 'conexion bluetooh', 'camara con dos sensores'],
}

console.log(`el color del telefono es ${smartPhone.color}, su dimension es de ${smartPhone.dimension} y es de marca 
${smartPhone.marca}`)

smartPhone.marcarNumero(321458751)//ejecutamos el metodo 'marcarNumero' pasandole un numero como parametro

smartPhone.descargar('facebook')//ejecutamos el metodo 'descargar' pasandole un string como parametro

console.log(`otra caracteristica del telefono es ${smartPhone.otrasCaracteristicas[2]}`)



























//COMO OBTENER DATOS DEL USUARIO
console.log('COMO OBTENER DATOS DEL USUARIO')
//Hasta ahora los datos que se han utilizado para las variables se han escrito directamente en el codigo, pero utilizando un metodo podemos 
//obtener datos del usuario, veamos.

let nombreUsuario = prompt('ingrese nombre');
//El metodo o la funcion "prompt" pedira al usuario, en este caso, que ingrese su nombre, de esta forma se guardara en la variable
//"nombreUsuario" para utilizarlo luego. Por ejemplo:
console.log(nombreUsuario) 

//Otro metodo que nos ayudar para obtener informacion del usuario es "confirm", veamos:
let confirmacionUsuario = confirm('¿desea ingresar su edad?')
console.log(confirmacionUsuario);//en este caso vemos que en la variable se guardo un dato boleano: si el usuario acepta es true, pero 
//si rechaza es false


//El metodo alert no sirve para obtener datos del usuario pero sirve para que aparezca un dato o mensaje al usuario, veamos:
alert('gracias por su registro')























//LA CONSOLA
//Otro metodo que se ha usado ampliamente en los ejercicios es el console.log() que, como hemos visto, muestra los datos que le pasemos
//como argumento o los datos que se escriben entre los parentesis.
//Pero no solo esta el console.log. Veamos otros metodos del objeto console:

let animalitos = ['perrito', 'gatico', 'tortuguita', 'arañita']
console.table(animalitos)


//Veamos otro ejemplo:
const fechasPatria = {
    independencia:'20 de julio',
    batalla_Boyaca: '7 de agosto',
    bogotazo: '9 de abril'
}
console.table(fechasPatria)
//Este metodo es apropiado para ver rapidamente los datos que hay en cada indice del array o cada clave del objeto


//Otros dos metodos utiles son:
console.error('esto es un error')// con este metodo podemos mostrar mensajes de error en la consola

console.warn('¡cuidado! archivo no compatible')//Este metodo sirve para mostrar mesajes de precaucion en la consola

























//CONCLUSION
//Los tipos de datos se guaradan en variables, o espacios de memoria, que se declaran con las palabras let o const
//let permite reescribir el valor de la variable pero no permite redeclarar una variable.
//const no permite redeclarar ni reescribir variables 
//Los nombres de la variables deben identificar el dato que va a contener y escrito en algun tipo de notacion:
//camel case, pascal case o snake case
//JavaScript es case sentitive, es decir que distingue un identificador de otro si se usan mayusculas o minusculas.
//Los tipos de datos se diferencian entre primitivos y objetos.
//Los primitivos son: numeros, cadenas de texto, booleanos, null, undefined, NaN
//Los objetos son: arrays, funciones y objetos literales
//Hay metodos del objeto console que podemos usar para dar mensajes de error, advertencia o mostrar los indices de arrays u objetos 
//Tambien hay metodos que se usan para obtener datos de los usuarios: prompt, confirm, alert




//Pero una vez tengamos datos tenemos que hacer algo con ellos. En la siguiente seccion aprenderemos operadores que nos permiten mas adelante 
//operar con los datos....


