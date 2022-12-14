//FUNCIONES
console.log('FUNCIONES')

//En el capitulo de 'tipos de datos' ya se habia visto que las funciones son 'pedazos' o 'trozos' de codigo con una ejecucion definida.
//Estas funciones se usan para evitar reescribir o, dicho de otra forma, recicla codigo que tenga una tarea especifica.
//Recordemos el ejercicio planteado en el capitulo 'tipos de datos':
//Hagamos una funcion que se presente un usuario, veamos:

let nombreUsuario = prompt('ingrese su nombre')//pedimos el nombre del usuario 

//ahora hacemos una funcion que salude mostrando el nombre que escribio el usuario. Las funciones se dividen en dos partes:
//la llamada a la funcion y la funcion. La llamada a la funcion tiene el formato: nombreDeLaFuncion(argumentos), donde los argumentos no son
//mas que datos primitivos, arrays, u otras funciones.
//La funcion tiene el formato usado para asignar tipos de datos a una variable, la diferencia es que se usa la palabra reservada 'function': 
//let nombreDeLaFuncion = function(parametro){bloque de codigo}. El parametro es una variable o variables que guardaran el argumento que tiene 
//la llamada de la funcion y que se usaran en el bloque de codigo. Volvamos al ejercicio del saludo siguiendo el orden 1) y 2):


//2) la funcion:
let presentar = function(nombreDelUsuario){//se lee: la funcion esta guardada en la variable 'presentar', alli se guardara el dato del prompt
    //en el parametro 'nombreDelUsuario' y este se usa mostrandolo en la consola.
    console.log(`hola, mi nombre es ${nombreDelUsuario}`)
}


//1)llamada a la funcion:
presentar(nombreUsuario)//se lee: llamamos la funcion 'presentar' y le enviamos el nombre que capturo el prompt

//Ahora veamos otros tipos de declarar funciones.









//FUNCION DECLARATIVA
console.log('FUNCION DECLARATIVA')
//El formato de este tipo de funcion es el mismo en la llamada pero la funcion tiene cierta variante: la palabra 'function' ahora va al comienzo
//de la expresion, luego el nombre de la funcion junto con los parametros y seguido el bloque de codigo, veamos los pasos 1) y 2):

let apellido = "valbuena"//declaramos una variable

//2)  la expresion de la funcion en este caso inicia con la palabra reservada 'function' y luego el nombre de la funcion y luego los parametros
function saludar(nombre){
    console.log(`hola, mi nombre es ${nombre} ${apellido}`)
    //Recordemos que el scope de la variable 'apellido' es global mientras que el de 'nombre' es de bloque, por lo que no se puede acceder
    //a el desde afuera del bloque.
}

//1)
saludar('jorge')//Llamada a funcion
saludar('Enrique')//Llamada a funcion
saludar('Stephy')//Llamada a funcion
saludar//esta llamada no se ejecuta
saludar()//llamada sin argumentos, undefined


//Una funcion es un codigo que se realiza una vez esta sea llamada
//Las funciones estan estructuras de la siguiente manera:

//1) llamada a la funcion, es decir la instruccion que har?? que la funcion se ejecute, formada por el identificador o nombre de la funcion
//y los parentesis: nombreDeLaFuncion(). 
//En el ejemplo, la llamada es cada sentencia "saludar()", de hecho son los parentesis los que sirven de "telefono", pues si no se ponen la 
//funcion no es llamada y por tanto no se ejecuta.

//2) argumento(s) y parametro(s), los argumentos son el o los datos que estan entre los parentesis de la llamada y que se usaran en alguna parte
//dentro del codigo de la funcion. Una vez la funcion es llamada, ese dato o datos pasara(n) a otra(s) variable(s), que se llaman parametro(s). 
//De esta manera los datos que ahora estan en los parametros de la funcion se podra(n) usar dentro del codigo de esta. Los argumentos no son 
//obligatorios, pues se puede llamar a una funcion sin ellos.

//3) el codigo de la funcion, o el programa que se ejecutar?? una vez sea esta invocada, se encuentra entre corchetes ({ }). Si la llamada tiene 
//parametros, estos se podran usar en esta parte de codigo pero no por fuera. No se puede acceder a una variable o parametro de la funcion 
//desde afuera del bloque de codigo, pero una variable o parametro de la funcion puede acceder a una variable de ambito o scope global.


try {//usamos el try, catch para hacer una excepcion del error: 
    console.log(nombre, apellido)//como la variable 'nombre' est?? dentro del bloque de la funcion y la variable 'apellido' esta fuera, esta 
    //??ltima podra ser leida pero la primera generar?? un error del tipo 'Uncaught ReferenceError: nombre is not defined' indicando que 'nombre 
    //no esta declarado   
} catch (error) {
    console.log(error)
}


//EJEMPLO 2
function saludar(nombre, apellido){
    console.log(`hola, mi nombre es ${nombre} ${apellido}`)

}

//hacemos la llamada a la funcion:
saludar('jorge', 'valbuena')//llamada a la funcion "saludar" con dos argumentos



//RECUERDA!!!!  
//los argumentos se cargan en los parametros que son variables que se usaran en el bloque de codigo de la funcion.









//EL RETORNO DE LA FUNCION (return)
console.log('EL RETORNO DE LA FUNCION (return)')
//La palabra "return" es usada en la funci??n para retornar o devolver un valor o expresi??n a la llamada que la hizo. Veamos:
//Seguir orden 1) y 2):

//2)
function saludar(nombre, apellido){//la funci??n recibe los argumentos de la llamada y los guarda respectivamente en cada par??metro.
    return `hola, mi nombre es ${nombre} ${apellido}`//la palabra "return" devolver?? el string que le sigue, a la llamada que la hizo, es decir
    // "saludar('Pepito', 'P??rez')" obviamente colocando cada par??metro correspondiente.
}

//1) llamada a la funcion 
let retornoDeLaFuncion = saludar('Pepito', 'P??rez')//llamamos a la funcion "saludar" con dos strings c??mo argumentos. Esta llamada recibe el 
//string "hola, mi nombre es Pepito perez" como retorno, y dicho string se guardar?? en la variable 'retornoDeLaFuncion'
console.log(retornoDeLaFuncion)//se muestra en la consola el string retornado de la funcion



//otro ejemplo, seguir orden 1) y 2):

//2) la funci??n "sumar" recibe dos argumentos que ser??n guardados en los dos par??metros, numero1 y numero2
function sumar(numero1, numero2){
    return numero1 + numero2//y retorna a la llamada la suma de los par??metros
}

//1) se llama a la funci??n "sumar" con dos n??meros como argumentos, pero como esta recibe un valor retornado, este se guardar?? en la variable 
//"resultado":
let resultado = sumar(5, 8)//
console.log(`el resultado de la funcion sumar es: ${resultado}`)



//Tambien se pueden retornar un array, otra funcion o un objeto, veamos:

function retornarArray(){
    return [1,2,3,4]
}

console.log(retornarArray())




let retornarFuncion = ()=>{
    return function(mensaje){
        console.log(mensaje)
    }
}

console.log(retornarFuncion()('funcion retornada'))// si solo se dejara un parentesis se veria en consola la funcion devuelta completa. 
//Para que se ejecute el bloque de la funcion retornada, se coloca un segundo parentesis y un argumento si se requiere.




function retornarObjeto(){
    return {nombre: 'jorge', apellido: 'valbuena'}
}

console.log(retornarObjeto())


//NOTA: despues de la palabra "return" no se deben ni pueden colocar lineas de codigo, pues seran ignoradas.
//RECORDAR que el valor retornado se guarda en la llamada que invoc?? la funci??n 



























//PAR??METROS POR DEFECTO
console.log('PAR??METROS POR DEFECTO')
//Si una funci??n no recibe par??metros, es decir se llama sin argumentos, podemos establecer par??metros con valores dentro de los par??ntesis, 
//pues finalmente estos son variables locales. Seguir el orden 1) y 2):

//2)la funci??n "restar" no recibe argumentos, pero los par??metros tienen por defecto valores asignados
function restar(numero1=5, numero2=3){
    return numero1 - numero2 //se retorna a la llamada la resta de los par??metros. 
}
//1)llamamos la funci??n "restar" sin argumentos, y como recibe un retorno, este se guarda en "resultadoResta"
let resultadoResta = restar()
console.log(`el resultado de la funcion resta es: ${resultadoResta}`)


//Ahora, es posible que la llamada tenga un argumento y la funcion tenga un par??metro por defecto. Veamos, Seguir 1) y 2):
//2) la funci??n "multiplicacion" recibe un argumento que se guarda en el par??metro "numero1".
function multiplicacion(numero1, numero2=3){//El par??metro "numero2" tiene un valor asignado por defecto
    return numero1 * numero2 //el retorno ser?? la multiplicacion de los dos par??metros.
}
//1) llamamos la funci??n "multiplicacion" con un argumento. Como esta llamada recibe un retorno, este se guarda en una variable:
let resultadoMultiplicacion = multiplicacion(3)
console.log(`el resultado de la multiplicacion es: ${resultadoMultiplicacion}`)


//Tambien es posible que la funcion tenga par??metros por defecto pero la llamada tenga argumentos:
function dividir(numero1=9, numero2=3){
    return numero1 / numero2
}

let resultadoDeLaDivision = dividir(10, 2)
console.log(`el resultado de la division es: ${resultadoDeLaDivision}`)//cual ser?? el resultado, 9/3 o 10/2?
//En este caso tiene prioridad los argumentos de la llamada y no los par??metros de la funcion, a menos que falte alguno.
















//FUNCION DE EXPRESION (funcion referenciada desde una variable)
console.log('FUNCION DE EXPRESION (funcion referenciada desde una variable)')
//Las funciones que utilizamos en un comienzo se conocen como funciones de expresion

let despedida = function(nombre){//Es casi lo mismo que las funciones declarativas, solo que el nombre de la funci??n ahora sirve para declarar 
    //una variable y dentro encontramos la palabra 'function' y las demas partes ya vistas
    return `chao ${nombre}`
}

console.log(despedida('Pablito'))//Se llama la funcion 'despedida' y como recibe un valor como retorno lo mostramos en consola de una vez sin 
//guardarla en una variable 




















//FUNCIONES FLECHA (arrow function)
console.log('FUNCIONES FLECHA (arrow function)')
//Es una alternativa compacta a la funcion tradicional, pero no se puede usar en todas las ocasiones. Seguir el orden 1) y 2) del ejemplo: 

//2) 
let funcionFlecha = () =>'esto es una funcion flecha'// la funcion flecha se parece a una funci??n de expresi??n con la diferencia que ya no se 
//escribe la palabra reservada 'function', en vez de eso se utiliza un operador que es la combinacion de un igual "=" y un mayor qu?? ">" 
//formando asi una "flecha". Este operador va desp??es de los par??ntesis de par??metros. Lo interesante es que si solo hay una l??nea de c??digo se 
//har?? un retorno "automatico", ademas las llaves tambien sobran con una linea de c??digo

//1) llamamos la funci??n "funcionFlecha" sin argumentos y se recibe un valor retornado que ser?? mostrado por consola
console.log(funcionFlecha())

//Como cualquier otra funci??n tambien recibe argumentos, pero si es solo uno se pueden borrar los par??ntesis. Seguir 1) y 2):

//2)la funci??n "llamadaConUnSoloArgumento" recibe el argumento de la llamada 
let llamadaConUnSoloArgumento = data => data//como tiene un s??lo par??metro no es necesario los par??ntesis, y como tiene una sola l??nea de c??digo
// tampoco son necesarias las llaves. Ademas el valor del par??metro ser?? retornado automaticamente a la llamada.

//1)llamamos la funcion "llamadaConUnSoloArgumento" con un string como argumento, pero como la funci??n flecha le hace un retorno este se 
//muestra en consola
console.log(llamadaConUnSoloArgumento('argumento'))

//El lio es cuando queremos retornar un objeto, pues las llaves del objeto se puede confundir con las llaves del bloque de la funcion. 
//Para ello hacemos lo siguiente: 

let retornarObjetoConFlecha = () => ({name: 'jorge', lastname: 'valbuena'})// dentro de parentesis se coloca el objeto a retornar
console.log(retornarObjetoConFlecha())


//En Resumen:
//Funcion flecha: es una variable o constante inicializada con parametros (opcional), un igual-mayor qu?? y las llaves donde se ejecuta el codigo
// de la funcion.
// Si tiene un solo parametro, los parentesis sobran
// Si va a retornar algo, la palabra return y las llaves sobran si s??lo hay una l??nea de c??digo
// Se puede hacer lo mismo que con las funciones de siempre

// otros datos:
// Para los nombres de las funciones se tienen en cuenta las mismas indicaciones que para las variables y usando, por lo gral, un verbo o la 
//accion que hara dicha funcion 
// Para hacer obligatorio un par??metro, podemos usar un condicional if evaluando si el tipo de par??metro est?? indefinido (undefined). 
//Seguir el orden 1) y 2):	

//2)
let llamadaSinArgumento = (data) => {
    console.log(data)//como la funcion no recibe ningun argumento, el valor del par??metro "data" es undefined. Este tipo de dato ser?? evaluado 
    //como false
    if(!data){//si el par??metro "data" es undefined este valor ser?? evaluado como false. Para evitar el complemento "else", podemos negar la 
        //expresion para que el flujo del c??digo entre a los par??ntesis y se ejecute el console.log
        console.log('se requiere un argumento!!')
    }
}
//1)llamamos a la funci??n "llamadaSinArgumento" 
llamadaSinArgumento();
























//FUNCION AUTOINVOCADA O ANONIMA: es decir, se ejecuta al instante y no tiene un nombre desp??es de la sentencia "function"
console.log('FUNCION AUTOINVOCADA O ANONIMA');

(
    function(data){
        let resultado = data+9;
        console.log(`el resultado de la funcion autoinvocada es: ${resultado}`)
    }(4)//estos par??ntesis tienen la labor de llamar a la funcion, pero como esta no tiene nombre los par??ntesis tampoco 
)

//No se usa con frecuencia pero su utilidad se ver?? mas adelante





















//FUNCIONES EN OBJETOS, M??TODOS
console.log('FUNCIONES EN OBJETOS, M??TODOS')
//Los objetos tambien pueden contener funciones, pero estas reciben el nombre de m??todos, veamos:

let carro = {//Tenemos un objeto con algunas caracter??sticas de un carro:
    modelo: 2020,
    marca: 'Chevrolet',
    velocidad: function (data){//y dentro del objeto tenemos una funci??n que es tambien llamada m??todo
        console.log(`la velocidad es de:`, data, 'k/h')
    },
    otrasCaracteristicas: function(data){
        let caracter??sticas = ['cojineria en Cuero', 'frenos ABS' ]
        console.log(caracter??sticas[data])


    }
}

//Para acceder a cada clave del objeto, lo hacemos con la notacion punto:
console.log(carro.marca)
//Para acceder a su m??todo tambien usamos la notacion punto:
carro.velocidad(180)//igual que una funci??n, le podemos pasar argumentos o no
carro.otrasCaracteristicas(0)





















//OPERADORES REST Y SPREAD EN FUNCIONES
console.log('OPERADORES REST Y SPREAD EN FUNCIONES')
//EL OPERADOR REST permite que los par??metros de una funci??n no sean fijos, es decir, que reciban cuantos se requieran.
//Por ejemplo, seguir 1) y 2):

//2) la funci??n "parametrosVariables" recibe los argumentos, pero como es un operador REST (es decir tres puntos y una variable que esperan
//recibir datos) los guarda en un array, de esta forma podemos recibir el numero de parametros que queramos
function parametrosVariables(...args){
    console.log(args)
}

//1) llamamos la funci??n "parametrosVariables" con varios argumentos: un n??mero, un string, y dos datos booleanos:
parametrosVariables(7, 'string', false, true)







//EL OPERADOR SPREAD hace lo contrario a REST, mientras que REST introduce los argumentos en un array, SPREAD toma un array y lo descompone en 
//par??metros. Veamos un ejemplo siguiendo el orden 1) y 2):


//2)la funci??n recibe cada uno de los indices del array en cada par??metro
function datosEnArray(num1, num2, num3, num4){
    console.log(num1, num2, num3, num4)//luego los podemos mostrar en consola, por ejemplo

}

//1)llamamos la funci??n "datosEnArray" y el argumento ser?? un array previamente declarado:
let numeros = [1, 2, 3, 4]
datosEnArray(...numeros)// en el operador SPREAD (operador que tiene datos) esta el array declarado previamente


//Tambien podemos combinar los dos operadores, seguir 1) y 2):

//2) En una funcion flecha recibimos como par??metros el array con el operador REST
let otrosDatosEnArray = (...args) => console.log(args)// y los mostramos en consola. T??cnicamente la llamada env??o cada elemento del array 
//como un argumento por separado y la funci??n volvio a armar el array original :)

//1) declaramos un array llamado "cosas" y este lo colocamos como argumento en la llamada de la funci??n "otrosDatosEnArray" con el operador 
//SPREAD:
let cosas = [2, 'payaso', true]
otrosDatosEnArray(...cosas)




















//HOISTING O ELEVACION 
console.log('HOISTING O ELEVACION')
/*
En todos los ejecicios hemos usado las funciones siguiendo el orden 1 y 2, la sentencia 1 esta debajo de la sentencia 2....??porque?
Basicamente cuando llamamos una funcion esta ya deberia estar creada de lo contrario pasaria lo mismo que usar una variable que no se 
ha declarado antes, saldria un error de referencia:

console.log(variableNoexiste) Uncaught ReferenceError: Cannot access 'variableNoexiste' before initialization
let variableNoexiste = false

Pero hay una excepcion. Veamos:
*/


hoisting('esto es el hoisting o la elevacion')//llamamos la funcion 'hoisting' pero esta no se ha creado, pues JS va ejecutando el codigo de
//arriba hacia abajo, pero si la funcion es declarativa JS hace una 'elevacion', es decir, hace que la funcion se "coloque" por encima de la 
//llamada. Es por esta accion que se puede ejecutar la funcion:

function hoisting(data){
console.log(data)
}


//veamos otro ejemplo, seguir orden 1) y 2):

//1)llamamos la funcion que, segun JS, no se ha creado
funcionConHoisting('se hace una elevacion de la funcion')

//2) pero el hoisting hace que esta se "eleve" por encima de la llamada para que se pueda ejecutar el console:
function funcionConHoisting(data){
    console.log(data)
}




/*
Ahora, si la funcion es de expresion el hoisting no funciona. Veamos:

otroHoisting('hoisting con funcion de expresion')
let otroHoisting = function(data){console.log(data)} Uncaught ReferenceError: Cannot access 'otroHoisting' before initialization

Lo mismo sucede con las funciones flecha:

hoistingConFlecha('hiosting con flecha')
let hoistingConFlecha = data => console.log(data) Uncaught ReferenceError: Cannot access 'hoistingConFlecha' before initialization

En ambos casos mostrara error de referencia, pues se esta llamando a una funcion que no se ha creado, segun JS

*/



















/*
CONCLUSIONES

*Las funciones son un conjunto de instrucciones que realizan una tarea tomando datos de entrada y retornando valores
*Existen funciones DECLARATIVAS, DE EXPRESION, FLECHA Y ANONIMAS
*Las funciones que se encuentran dentro de un objeto se llaman METODOS
*Podemos usar el operador REST y SPREAD para darle manejo a los parametros o argumentos respectivamente
*El hoisting es la elevacion que hace JS de una funcion declarativa, por lo que podemos llamarla antes de crearla 



Ahora aprendamos un tipo de funcion muy usada en JS...

*/
