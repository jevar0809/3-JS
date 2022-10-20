//OPERACIONES CON DATOS
console.log('OPERACIONES CON DATOS')
//Una vez tengamos datos primitivos u objetos, debemos trabajar con ellos y para ello encontramos una serie de operadores que haran que
//podamos operar con los datos, veamos.


//OPERADORES ARITMETICOS
console.log('OPERADORES ARITMETICOS')
//Asi como en matematicas, tambien necesitamos operadores para trabajar con datos, veamos👀:
let numero1 = 5
let numero2 = 2

let resultadoSuma = numero1 + numero2//se lee: la variable resultado guarda la suma de las dos varibles numero1 y numero2
let resultadoResta = numero1 - numero2
let resultadoMultiplicacion = numero1 * numero2
let resultadoDivison = numero1 / numero2
let modulo = numero1 % numero2// el modulo es lo que sobra de la division. Recordemos las partes de una division, en este caso 5/2,
//el 5 se llama 'dividendo', el 2 se llama 'divisor', el 2 que se multiplica con el divisor se llama cociente, y el 1 que sobra se llama
//modulo o resto.
//En la division 2/2, el modulo es 0. Este tipo de resultado se usa, por ejemplo, para buscar numeros pares o numeros impares pues los 
//primeros no generan modulo y los otros generan modulo

//Veamos los resultados en la consola:
console.log(`resultado suma: ${resultadoSuma}, resultado resta: ${resultadoResta}, resultado multiplicacion: ${resultadoMultiplicacion}, 
resultado division: ${resultadoDivison}, resultado del modulo: ${modulo}`)

//Si queremos que una variable aumente su valor en 1, podemos hacer:
let numeroInicial = 124
let incremento = numeroInicial + 1//se lee: la variable 'incremento' tendra el valor de la variable 'numeroInicial' mas 1
console.log(`let incremento = numeroInicial + 1, 124+1 = ${incremento}`)
//Pero podemos hacer lo mismo usando el operador ++, veamos:
incremento = ++incremento// inicialmente 'incremento' vale 125, luego del ++ queda en 126
console.log(`incremento = ++incremento = ${incremento}`)
//Pero si lo que queremos es restar su valor en 1, hacemos:
incremento = --incremento
console.log(`incremento = --incremento = ${incremento}`)

//Esto es normal con tipos de datos numericos, pero ¿que pasa si utilizamos estos mismos operadores con otros datos? Veamos👀:
let numeroComoString = '5'
let numeroNormal = 5
let UnStringCualquiera = 'esto es un string cualquiera '
let otroStringCualquiera = 'esto es otro string cualquiera '
let unBooleanoVerdadero = true
let unBooleanoFalso = false
let unNull = null
let unArray = ['banana', 'fresa', 'pera']


let resultado = numeroComoString + numeroNormal
console.log(`la suma entre un numero string, 5, y un numero normal, 5, es: ${resultado}`)//el resultado es 5,5, es decir, no se sumaron sino que 
//se unieron o se concatenaron😎

resultado = UnStringCualquiera + otroStringCualquiera
console.log(`la suma de dos strings es: ${resultado}`)//es resultado es la union de las dos frases, esto se llama 'concatenar'. Anteriormente 
//vimos que tambien se podia concatenar dos variables con las plantillas literales o template strings: 
console.log(`la suma de dos strings es: ${UnStringCualquiera}${otroStringCualquiera}`)//en la consola se vera igual que arriba con el operador
//de suma

resultado = unBooleanoVerdadero + unBooleanoFalso
console.log(`la suma de un true y un false es: ${resultado}`)//el resultado es 1, por que la suma de dos valores positivos da otro valor positivo

resultado = unBooleanoVerdadero - unBooleanoFalso
console.log(`la resta de un true y un false es: ${resultado}`)//el resultado es 1, a 1 le esto 0 queda 1 

resultado = numeroNormal - numeroComoString
console.log(`la resta de un numero normal, 5, y un string, 5, es: ${resultado}`)//a 5 le restamos 5 = 0

resultado = numeroNormal / numeroComoString
console.log(`la division entre un numero normal, 5, y un string, 5, es: ${resultado}`)//5/5 es 1

resultado = UnStringCualquiera / otroStringCualquiera
console.log(`la division de un string con otro string es: ${resultado}`)//Como ninguna de las varibles tiene numeros, el resultado es NaN

resultado = unNull / numeroNormal
console.log(`la division de un null con un numero normal, 5, es: ${resultado}`)//el null se toma como 0, por tanto 0/5 = 0

resultado = numeroNormal / unNull
console.log(`la division de un numero normal, 5, con un null es: ${resultado}`)// el null sera tomado como 0, por tanto, 5/0 es infinito

resultado = UnStringCualquiera + unArray
console.log(`la suma entre un string y un array es: ${resultado}`)//se concatenaron las varibles 

resultado = numeroNormal + unBooleanoVerdadero
console.log(`la suma entre un numero, 5, y el boleano 'true' es: ${resultado}`)//el boleano 'true' se toma como un 1 y se suma con el 5 = 6

resultado = (unBooleanoVerdadero + unBooleanoVerdadero) * numeroNormal //la suma de los boleanos verdaderos es true + true = 1 + 1 = 2
console.log(`la multiplicacion de un numero, 5, con la suma de dos boleanos true es: ${resultado}`)//2*5 = 10


//COERSION DE TIPOS:
console.log('COERSION DE TIPOS') 
//No es normal que se hagan operaciones entre strings y numeros u otros strings, pero es posible hacerlo. La coercion de tipos es la conversion
//de datos que hace JS para concretar una operacion. Por ejemplo, si restamos un string '5' con un numero 5, JS se toma la libertad de
//convertir el string a numero para concretar la operacion. De igual forma con los demas operadores a menos que definitivamente JS no sepa
//que hacer, como cuando se le pide que haga una division entre dos strings, aqui como no puede concretar una operacion genera el NaN que 
//significa "Not a Number" indicando que no es un numero. 
//Por tal motivo como desarrolladores debemos tener cuidado con el tipo de dato que se esta manejando. Si no tenemos la certeza del tipo de 
//dato, lo mejor es asegurarnos y hacer una conversion explicita, es decir, una conversion hecha por nosotros mismos y evitar que JS haga la 
//conversion implicita, veamos👀


//CONVERSION DE TIPOS DE DATOS
console.log('CONVERSION DE TIPOS DE DATOS')

//convertir un numero a string:
//contatenando un string vacio:
let numeroAString = 3 + ""//si se concatena o se suma un numero con un string vacio el tipo de dato es...
console.log(`el tipo de dato es: ${typeof numeroAString}`)//...un string
//Tambien se puede usar el metodo string:
numeroAString = String(568)//se lee: la variable 'numeroAString' contiene el resultado de convertir el numero 568 a string
console.log(`el tipo de dato es: ${typeof numeroAString}`)//el tipo de dato cambio a string



//Convertir de string a numero:
let stringANumero = +'45879'//Se antepone el operador + al string que se quiere convertir a numero
console.log(`el tipo de dato es: ${typeof stringANumero}`)
//Usando el metodo number:
stringANumero = Number('144552')//se lee: la variable 'stringANumero' contiene el resultado de convertir un string a numero 
console.log(`el tipo de dato es: ${typeof stringANumero}`)


//Convertir a boleano:
let variableVacia = null// Tenemos una variable vacia o nula
console.log(`el tipo de dato del 'null' es: ${variableVacia}`)
let variableBoleano = Boolean(variableVacia)//ahora se convierte este tipo de dato a booleano:
console.log(`despues de pasar un 'null' a boleano, el tipo de dato es: ${typeof variableBoleano}`)


//Convertir un booleano a numero
let unBoleano = true
console.log(`el tipo de dato de un booleano 'true' es: ${unBoleano}`)
let ValorNumericoDelBoleano = +unBoleano//si le anteponemos al valor booleano el signo +, este se convertira a numero
console.log(`este es el valor numerico del boleano 'true': ${ValorNumericoDelBoleano}`)

//se hace lo mismo para los booleanos 'false' a numero
unBoleano = false
ValorNumericoDelBoleano = +unBoleano
console.log(`este es el valor numerico del boleano 'false': ${ValorNumericoDelBoleano}`)





//EQUIVALENCIA DE TIPO DE DATO A BOOLEANO
console.log('EQUIVALENCIA DE TIPO DE DATO A BOOLEANO')
//Necesitamos saber la equivalencia booleana de los datos primitivos para usarlos mas adelante en estructuras de control, veamos👀:

let algunString = 'algun string'
let valorBoleano = Boolean(algunString)
console.log(`el valor boleano de un string es: ${valorBoleano}`)//cualquier string sera considerado 'true'

let valorStringVacio = ''
valorBoleano = Boolean(valorStringVacio)
console.log(`el valor boleano de un string vacio es: ${valorBoleano}`)//los strings vacios seran considerados 'false'


//Podemos cambiar el estado del booleano si negamos la expresion anteponiendo una signo de exclamacion. La palabra negar significa 
//'lo opuesto de'. Por ejemplo, lo opuesto de true es false y lo opuesto de false es true. Veamos👀:

valorStringVacio = ''//Tenemos una variable con un string vacio
valorBoleano = !Boolean(valorStringVacio)//Se niega la expresion anteponiendo un signo de admiracion ! en el metodo Boolean, de esta forma...
console.log(`el valor boleano de un string vacio NEGADO es: ${valorBoleano}`)//...Un string vacio es considerado como false, pero negandolo 
//queda 'true'

let unNumero = 4587
valorBoleano = Boolean(unNumero)
console.log(`el valor boleano de un numero diferente a cero es: ${valorBoleano}`)//cualquier valor numerico diferente a 0 es considerado 'true'

//Tambien podemos negar el boleano del number, veamos:
unNumero = 4531
valorBoleano = !Boolean(unNumero)//Se niega la expresion anteponiendo un signo de admiracion ! en el metodo Boolean, de esta forma...
console.log(`el valor boleano de un numero diferente a cero NEGADO es: ${valorBoleano}`)//...el valor ya no sera true sino false


//Para los valores que no aportan ningun dato valido, el valor booleano sera 'false'. Veamos👀:
let valorCero = 0
valorBoleano = Boolean(valorCero)//convertir el 0 a booleano genera...
console.log(`el valor boleano del 0 es: ${valorBoleano}`)//...un 'false'

let valorUndefined = undefined
valorBoleano = Boolean(valorUndefined)//convertir el 'undefined' a booleano genera...
console.log(`el valor boleano del undefined es: ${valorBoleano}`)//...un 'false'

let valorNull = null
valorBoleano = Boolean(valorNull)//convertir el 'null' a booleano genera...
console.log(`el valor boleano del null es: ${valorBoleano}`)//...un 'false'

let valorNaN = NaN
valorBoleano = Boolean(valorNaN)//convertir el NaN a booleano genera...
console.log(`el valor boleano de un NaN es: ${valorBoleano}`)//un 'false'









//ORDEN DE LOS OPERADORES
console.log('ORDEN DE LOS OPERADORES')
//Pensemos en como JS realiza la siguiente operacion:
resultado = 3*5/2+4-5
console.log(`el resultado de 3*5/2+4-5 es: ${resultado}`)//es 6.5 si seguimos el orden 

//Ahora con:
resultado = 5-4+2/5*3
console.log(`el resultado de 5-4+2/5*3 es: ${resultado}`)//el resultado es 2.2, pero si seguimos el orden el resultado es 1.8...¿que hizo JS?
//En este caso JS realizo la operacion de la siguiente manera: 2/5*3 = 1.2 luego 1.2+5-4 = 2.2, justo su resultado.
//Los operadores de multiplicacion, division, y modulo tienen mas peso que la suma y la resta. Por eso JS realiza primero estos operadores
//y luego los de menos peso. 
//Usando parentesis le indicamos a JS las operaciones que tendran mas peso y menos peso:
resultado = (5-4+2)/5*3
console.log(`el resultado de (5-4+2)/5*3 es: ${resultado}`)//ahora el resultado es 1.799999 el que antes nos habia dado (redondeando a 1.8)
//En este caso le indicamos a JS que la prioridad la tiene los parentesis donde estan los operadores de menos peso 







//CONCLUSION
//Con los operadores aritmeticos podemos hacer las operaciones matematicas basicas entre variables.
//Para incrementar o decrementar en una unidad una variable, basta con anteponer los signos ++ o -- sea el caso.
//Se pueden hacer operaciones matematicas con cualquier tipo de dato pero JS convertira ciertos tipos de datos para concretar la operacion.
//Para evitar la coercion de tipos, lo mejor es asegurar los tipos de datos que queremos operar, convirtiendolos a string, numeros o booleanos
//Es importante saber la equivalencia de un tipo de dato a booleano y como se puede cambiar o negar dicha equivalencia.
//Los operadores de menos peso se pueden incluir dentro de un parentesis para darles importancia dentro de la operacion.


















//OPERADORES DE ASIGNACION
console.log('OPERADORES DE ASIGNACION')
//En el transcurso de los ejercicios hemos visto que para asignar un valor a una variable se usa el operador de igualdad =
let operadorAsignacion = 'el operador = asigna un valor a la variable'

//El resultado de una operacion matematica basica se puede guardar en otra variable o en alguna que este involucrada como operando, veamos👀
let numeroCualquiera = 4587
let otroNumeroCualquiera = 58
//Ahora si queremos sumar estas dos variables hariamos esto:
resultado = numeroCualquiera + otroNumeroCualquiera
console.log(`resultado = numeroCualquiera + otroNumeroCualquiera, 4587+58 = ${resultado}`)//el resultado se guarda en otra variable, pero si lo que queremos es guardar el resultado en alguna de las dos variable 
//que estan siendo usadas como operando seria asi:
numeroCualquiera = numeroCualquiera + otroNumeroCualquiera//ahora el resultado se va a guardar en una de las variables usadas...
console.log(`numeroCualquiera = numeroCualquiera + otroNumeroCualquiera, 4587+58 = ${numeroCualquiera}`)//... dando el mismo resultado por consola

//Esta operacion se puede asignar con un leve cambio, veamos👀:
numeroCualquiera += otroNumeroCualquiera//el operador += se usa para indicar que la variable del lado izquierdo del operador se usa en la 
//operacion y ademas sera quien reciba el resultado
console.log(`numeroCualquiera += otroNumeroCualquiera, 4645+58 = ${numeroCualquiera}`)//

//Ahora usemoslo para la resta:
numeroCualquiera = 58
otroNumeroCualquiera = 55
otroNumeroCualquiera -= numeroCualquiera//se lee: reste a 'otroNumeroCualquiera' el valor de 'numeroCualquiera', 55-58 = -3, y el resultado
//guardelo en la variable que esta a mano izquierda del operador, es decir en 'otroNumeroCualquiera'
console.log(`otroNumeroCualquiera -= numeroCualquiera, 58-55 = ${otroNumeroCualquiera}` )


//Ahora usemoslo para la multiplicacion:
numeroCualquiera = 58
otroNumeroCualquiera = 55
numeroCualquiera *= otroNumeroCualquiera
console.log(`numeroCualquiera *= otroNumeroCualquiera, 58*55 = ${numeroCualquiera}`)

//Ahora usemoslo para la division:
numeroCualquiera = 58
otroNumeroCualquiera = 55
numeroCualquiera /= otroNumeroCualquiera// 58/55 = 1.054...
console.log(`numeroCualquiera /= otroNumeroCualquiera, 58/55 = ${numeroCualquiera}`)


//Ahora usemoslo para el modulo:
numeroCualquiera = 58
otroNumeroCualquiera = 55
numeroCualquiera %= otroNumeroCualquiera// 58/55 = 1.054... y el resto es 3
console.log(`numeroCualquiera %= otroNumeroCualquiera, 58/55 = 1.054... y el resto es ${numeroCualquiera}`)



























//OPERADORES DE COMPARACION
console.log('OPERADORES DE COMPARACION')
//Ademas de hacer operaciones aritmeticas con tipos de datos, tambien podemos comparar entre dos o mas datos. Veamos
let variable1 = 5
let variable2 = 5
let variable3 = true
let variable4 = false
const STRING_DE_4_CARACTERES = 'ALAS'
const STRING_DE_6_CARACTERES = 'JIRAFA'
const STRING_VACIO = ""

resultado = variable1 > variable2
console.log(`¿5 es mayor que 5? ${resultado}`)

resultado = variable3 > variable4
console.log(`¿true es mayor que false? ${resultado}`)//es true, porque 1 es mayor que 0

resultado = variable1 < variable2
console.log(`¿5 es menor que 5? ${resultado}`)

resultado = variable1 >= variable2
console.log(`¿5 es mayor o igual que 5? ${resultado}`)

resultado = variable1 <= variable2
console.log(`¿5 es menor o igual que 5? ${resultado}`)

resultado = STRING_DE_4_CARACTERES < STRING_DE_6_CARACTERES
console.log(`¿el string de 4 caracteres es menor que el de 6 caracteres? ${resultado}`)

resultado = STRING_DE_4_CARACTERES >= STRING_DE_6_CARACTERES
console.log(`¿el string de 4 caracteres es mayor e igual que el de 6 caracteres? ${resultado}`)

resultado = variable3 > STRING_VACIO
console.log(`¿el true es mayor que un string vacio? ${resultado}`)

resultado = variable3 > STRING_DE_6_CARACTERES
console.log(`¿el true es mayor que un string de 6 caracteres? ${resultado}`)

resultado = variable1 == variable2//Un solo igual asigna el dato en la variable, mientras que dos iguales seguidos compara entre las variables  
console.log(`¿el 5 es igual que el 5? ${resultado}`)

//Ahora hagamos la comparacion entre un numero y un string
variable2 = '5'

resultado = variable1 == variable2//Un solo igual asigna el dato en la variable, mientras que dos iguales seguidos compara entre las variables  
console.log(`¿el 5 es igual que el '5'? ${resultado}`)
//Notamos que JS dice que son iguales a pesar de que una es un tipo de dato numerico y la otra un string, aqui tambien se aprecia la coercion.
//¿Pero que pasa si usamos el triple igual? veamos:
resultado = variable1 === variable2  
console.log(`¿el 5 es estrictamente igual que el '5'? ${resultado}`)
//Ahora JS dice que no son iguales...¿que paso? Con el operador triple igual JS no solo compara el dato sino el tipo. Con un solo igual
//compara el dato y "ve" que son iguales, un 5 numerico y un 5 en cadena de texto, pero con el triple igual compara el dato y el tipo y como 
//uno es numero y el otro es string, JS indica que no son iguales.

//Tambien podemos comparar si dos datos son diferentes, veamos:
resultado = variable1 != variable2
console.log(`¿el 5 es diferente al '5'? ${resultado}`)// como el dato es igual, la respuesta es 'false'

//Probemos con el comparador de diferencia doble:
resultado = variable1 !== variable2
console.log(`¿el 5 es estrictamente diferente al '5'? ${resultado}`)//como el tipo de dato es diferente, ahora es 'true'

//Hasta ahora hemos utilizado datos primitivos para hacer comparaciones. Con los objetos es un poco mas complicado pues JS evalua, no el dato,
//sino su posicion de memoria. Por el momento veamos otros operadores.























//OPERADORES LOGICOS
console.log('OPERADORES LOGICOS')
//Este tipo de operadores se usan cuando queremos saber el estado de las relaciones logicas entre dos expresiones. 
//Pensemos en un bombillo que tiene dos interruptores: http://www.ccapitalia.net/img/minivac-and.png, en el caso de la imagen, el bombillo
//solo se encendera cuando los dos interruptores esten cerrados, en otras palabras, cuando el interruptor A Y B esten cerrados. Si uno de
//los dos esta abierto el bombillo estara apagado representando un estado 0 o false. En este caso decimos que la relacion es 'este Y este tambien'.
//Aqui se usa el operador Y (o tambien conocido como AND) pues la relacion es este Y aquel, es decir ambos actuan

//Ahora pensemos en este caso: https://www.picuino.com/_images/electric-bornas-interruptores-paralelo.png, los interruptores estan de un
//modo que cualquiera de los dos puede estar abierto o cerrado y le sigue llegando energia a la lampara, a menos que los dos esten abiertos.
//En este caso decimos que la relacion es 'este O este otro'. Aqui el operador es el O (o tambien conocido como OR), es decir cualquiera de 
//los dos actuan.

//En JS podemos usar este mismo simil para indicar que se deben cumplir las dos expresiones o alguna de las dos, veamos:

let bombillo = true && false// el operador doble && (AMPERSAND) representa el operador AND
console.log(`¿el bombillo esta encendido? ${bombillo}`)//el bombillo no esta encendido porque un dato es false o 0

bombillo = true && true
console.log(`¿el bombillo esta encendido? ${bombillo}`)//el bombillo esta encendido porque los dos valores estan true o 1


//Ahora representemos el operador OR (con dos barras paralelas verticales):
bombillo = true || false
console.log(`¿el bombillo esta encendido? ${bombillo}`)

bombillo = false || true
console.log(`¿el bombillo esta encendido? ${bombillo}`)

//En ambos casos el bombillo esta encendido porque al menos uno de los dos valores es 'true' 

bombillo = false || false
console.log(`¿el bombillo esta encendido? ${bombillo}`)// en este caso los dos estan en false o en 0, lo que no enciende el bombillo

//Negar una expresion es cambiar su valor y para ello se antepone el signo de admiracion !, veamos:
bombillo = !false || !false// negar la expresion es convertirla a su opuesto, en vez de 'false' ahora es 'true'
console.log(`¿el bombillo esta encendido? ${bombillo}`)//este mismo ejercicio anteriormente se habia evaludo como false, pues ambas expresiones
//son 'false, pero en este caso negamos dichas expresiones para cambiar el resultado, ahora el bombillo se enciende!!









//REFERENCIA Y VALOR
console.log('REFERENCIA Y VALOR')
//Debemos recordar que los datos se guardan en espacios de la memoria RAM. La memoria tiene dos tipos de datos: 1) la direccion del dato y 
//2) el dato en si, en otras palabras, cuando declaramos una variable estamos reservando una direccion en memoria y el valor con el que 
//inicializamos la variable es el dato que va es esa direccion que reservamos.
//Por ejemplo: let variable = 'string', esto se traduce: en la direccion variable guarde el dato 'string'. 
//Ahora, las direcciones fisicas son posiciones de memoria que van desde los 0 bytes hasta 8, 16 o 32 GigaBytes.
//Una direccion de memoria se puede representar de la siguiente manera: 0011100010101100. Si pasamos este valor a sistema hexadecimal 
//queda: 38AC y es alli que se guarda un dato, por ejemplo. 
//Una vez entendemos esto, podemos entender mejor lo que sucede cuando se referencian o se apuntan a direcciones de memoria. 

//Evaluemos el siguiente comportamiento: 
let valor1 = 'valor 1'//en la direccion de memoria 'valor1' se guarda el string 'valor 1' 
let valor2 = valor1//en la direccion de memoria 'valor2' se guarda el mismo string que tiene la direccion 'valor1'
console.log(`en valor1 hay: ${valor1} y en valor2 hay: ${valor2}`)//en ambas variables esta el mismo string

valor1 = 'otro valor 1'//Ahora, a 'valor1' le cambiamos el string...¿que pasara con el string de 'valor2', tambien cambiara?
console.log(`en valor1 hay: ${valor1} y en valor2 hay: ${valor2}`)//el string de 'valor2' se mantiene. Esto quiere decir que al asignar 
//a 'valor2' el dato de 'valor1' lo que realmente pasa es que el dato se copia de una variable a otra y cuando el valor cambia a la 
//variable que se esta haciendo referencia, la otra ni se entera y conserva su valor asignado.


//En el caso de los objetos (arrays, funciones y objetos literales) el asunto es otro. Veamos:
let arrayCualquiera = ['algo1', 'algo2', 'algo3', 4, 5]
let otroArrayCualquiera = arrayCualquiera
console.log(`estoy hay en el 'arrayCualquiera': ${arrayCualquiera}`)
console.log(`estoy hay en el 'otroArrayCualquiera': ${otroArrayCualquiera}`)
//Vemos en consola que el 'otroArrayCualquiera' tiene los mismo datos del 'arrayCualquiera', pero... ¿que pasa si cambiamos un elemento del 
//array que esta referenciando o apuntando al array original?

otroArrayCualquiera[0] = 'otro algo'//en la posicion 0 del array que esta copiando el original se esta cambiando el string
otroArrayCualquiera[4] = 45//en la posicion 4 del array que esta copiando el original se esta cambiando el numero
console.log(`estoy hay en el array original: ${arrayCualquiera}`)//¿que pasara con los datos del array original, se conservaran como con los 
//datos primitivos? NO, los elementos tambien cambian.
//Cuando se referencia un dato primitivo y se realizan cambios en la variable original, o en la copia, la otra variable no se entera de nada
//y conserva su valor. En los objetos esto cambia, pues en la direccion de memoria lo que se guarda no son los datos en si, sino la direccion
//de la memoria heap

//MEMORIA HEAP
console.log('MEMORIA HEAP')
//Se denomina "memoria heap" (o almacenamiento libre) al area de memoria donde se guardan los objetos, sean literales, funciones o arrays. 
//Esta area de memoria es dinamica, es decir, con valores primitivos el area es fija, pero como los valores de los objetos pueden ser pocos
//o muchos esta memoria puede varia de tamaño.
//Cuando decimos let arrayCualquiera = ['algo1', 'algo2', 'algo3', 4, 5], decimos: en la posicion de memoria 'arrayCualquiera' se guarda la
//posicion de memoria heap donde se estan dejando los elementos del array, algo como: let arrayCualquiera = 3FAC, y es en la posicion 3FAC
//donde se estan dejando los elementos del array.
//Ahora, cuando decimos: let otroArrayCualquiera = arrayCualquiera, estamos mencionando que 'otroArrayCualquiera' tiene la misma 
//posicion de memoria heap que 'arrayCualquiera', en otras palabras: otroArrayCualquiera = 3FCA y arrayCualquiera = 3FCA, ambos apuntan a 
//la misma posicion de memoria heap. 
//Por tal motivo, cuando se hace un cambio en los elementos de un array tambien cambian en el otro array.



//Este mismo fenomeno pasa en los objetos literales, veamos:
const OBJETO_PRUEBA = {
    propiedad1 : 'propiedad 1',
    propiedad2 : 'propiedad 2',
    propiedad3 : 45 
}
console.log(OBJETO_PRUEBA)

//'objetoPrueba' esta apuntando a la misma posicion de memoria heap de 'OBJETO_PRUEBA':
let objetoPrueba = OBJETO_PRUEBA// OBJETO_PRUEBA = 1A5F, objetoPrueba = 1A5F, ambos tienen la misma direccion de memoria heap
objetoPrueba.propiedad3 = 8569
objetoPrueba.propiedad2 = 'otra propiedad 2'
objetoPrueba.propiedad1 = 'otra propiedad 1'
console.log(OBJETO_PRUEBA)//al cambiar algunas propiedades de 'objetoPrueba', vemos que en 'OBJETO_PRUEBA' tambien cambian pues son lo mismo



//Finalmente veamos el mismo efecto en las funciones que tambien usan la memoria heap.
//sigamos el orden 1) y 2):

//2)la funcion 'unaFuncion' recibe el argumento y lo guarda en su parametro 'elOtroArgumentoVieneAqui' y este lo mostramos en consola
let unaFuncion = function(elOtroArgumentoVieneAqui){
    console.log(elOtroArgumentoVieneAqui)//¿que string aparecera: 'mi perrito fofo' o 'mi gatico mimi? tengamos 
    //presente que la segunda variable apunta a la primera y esta despues cambia su valor...
    //Asi es, la segunda variable mantiene el dato que tenia antes la primer variable, como pasa con los datos primitivos, pues estos 
    //no apuntan a una direccion de memoria.
}


//1) 
let unArgumento  = 'mi perrito fofo'//tenemos una primer variable con un string
let otroArgumento = unArgumento//Una segunda variable hace referencia a la primer variable
unArgumento = 'mi gatico mimi'//pero la primer variable cambia su string...¿la segunda variable cambia tambien su valor o se mantiene?
unaFuncion(otroArgumento)// llamamos la funcion 'unaFuncion' y le pasamos como argumento la segunda variable, la que hace referencia a la 
//primera




//¿Y si pasamos un objeto como argumento? Veamos:
//seguir el orden 1) y 2):

//2) la funcion 'unaFuncionConObjeto' recibe el argumento, que es un objeto, y lo guarda en su parametro
let unaFuncionConObjeto = function(aquiVaElObjeto){
    console.log(aquiVaElObjeto)
    aquiVaElObjeto.propiedad1 = 54878//ahora cambiamos una propiedad del objeto
    console.log(aquiVaElObjeto)//al pintarlo nuevamente vemos que hubo un cambio en el objeto original, pues el parametro 'aquiVaElObjeto'
    //apunta a la misma direccion de memoria heap que el 'OBJETO_PRUEBA'
}

//1)llamamos la funcion 'unaFuncionConObjeto' y le pasamos como argumento el objeto del ejercicio anterior:
unaFuncionConObjeto(OBJETO_PRUEBA)











//CONCLUSIONES
//Podemos asignar a una misma variable involucrada en la operacion el resultado usando el operador seguido de un igual
//Los operadores de comparacion sirven para comprobar que expresiones son iguales, mayores, menores, mayores e iguales
//menores e iguales, de igualdad estricta, diferentes o diferentes estrictos
//Los operadores logicos permiten que las expresiones se ejecuten al tiempo o se ejecute alguna de ellas. Tambien podemos negar o cambiar la 
//expresion logica
//Los valores primitivos usan la cantidad de memoria necesaria a diferencia de los objetos que usan la memoria heap,
//memoria que se puede "expandir" para los elementos de dichos objetos. Esto se conoce como referencia, pues la variable guarda la direccion 
//de memoria para obtener las propiedades de los objetos.


//Ahora que ya sabemos usar los datos, podemos controlar el flujo de ejecucion para controlar los algoritmos...

