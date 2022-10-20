//OBJETOS LITERALES
console.log('OBJETOS LITERALES')

//En el primer capitulo hablamos de los objetos como un tipo de dato donde se acumulan mas variables con otros tipos de datos. Recordemos:

let objetoConAlgunasVariables = {
    variableNumero : 6,
    variableString : 'string',
    variableBoleano : true,
    variableVacia : null,
    variableArray : [7,8,9,2],
    variableFuncion : function(dato){console.log(dato)}
}

//La estructura es let o const nombreDelObjeto = { propiedad1 : valor1, propiedad2 : valor2, metodo1 : funcion1, metodo2 : funcion2, etc... }
//tambien se pueden llamar pares clave:valor o en ingles keys:value


//CREAR UN OBJETO:
//Se crea como el ejercicio de arriba o de la siguiente forma:
const unObjetoNuevo = {}// declaramos una variable con let o const y le asignamos unas llaves sin nada dentro
console.log(unObjetoNuevo)//Antes de asignarle algun valor se vera como un objeto vacio, solo las llaves.

//NOTACION PUNTO:
console.log('NOTACION PUNTO')
//Luego usamos la notacion punto para asignarle al objeto vacio una propiedad
unObjetoNuevo.propiedad1 = 'un string'//usamos la notacion punto, es decir, nombre del objeto seguido de un punto y la propiedad asignandole su
//valor como una variable cualquiera


//Tambien podemos introducir un metodo:
unObjetoNuevo.unMetodo = function(data){console.log(data)}

//Introduzcamos un array:
unObjetoNuevo.unArray = [1,2,3,4]
console.log(unObjetoNuevo)//Ahora vemos un objeto con una propiedad, un metodo y un array




//LEER UN OBJETO:
//tambien usamos la notacion punto pero sin asignarle valores:
console.log(unObjetoNuevo.unMetodo)//muestra en consola el metodo
console.log(unObjetoNuevo.propiedad1)//muestra en consola la propiedad

//Si se va a leer un indice del array se hace lo siguiente:
console.log(unObjetoNuevo.unArray[0])//con la notacion punto referenciamos el array del objeto y luego el indice que queremos




//ACTUALIZAR UN OBJETO:
//podemos actualizar una propiedad de un objeto:
unObjetoNuevo.propiedad1 = 'otra propiedad 1'
unObjetoNuevo.otroMetodo = function(item){console.log(item)}
console.log(unObjetoNuevo)




//BORRAR UNA PROPIEDAD O UN METODO
delete unObjetoNuevo.propiedad1
delete unObjetoNuevo.unMetodo
delete unObjetoNuevo.otroMetodo
delete unObjetoNuevo.unArray
console.log(unObjetoNuevo)//nuevamente tenemos el objeto vacio


//objeto dentro de otro objeto
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
console.log(UN_OBJETO_CON_OTRO_OBJETO.otroObjeto.subObjeto3)//en consola debe aparecer "false". Asi para las demas keys o propiedades





//RECORDEMOS:
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



















//NOTACION CORCHETE
console.log('NOTACION CORCHETE')
//Hemos visto que para acceder a una propiedad o un metodo usamos la notacion punto, que consiste en referenciar el objeto luego le colocamos 
//un punto y seguido la propiedad o metodo deseado. Pues tambien podemos hacer esto pero con la notacion corchete, veamos:

let otroObjetoConAlgunasVariables = {
    variableNumero : 6,
    variableString : 'string',
    variableBoleano : true,
    variableVacia : null,
    variableArray : [7,8,9,2],
    variableFuncion : function(dato){console.log(dato)}
}

console.log(otroObjetoConAlgunasVariables.variableArray)//con notacion punto
console.log(otroObjetoConAlgunasVariables['variableArray'])//con notacion corchete

//La diferencia radica en dos cosas: 1) en vez del punto se usan corchetes [] y 2) la propiedad se escribe entre comillas dobles o sencillas
console.log(otroObjetoConAlgunasVariables['variableFuncion'])//en consola se mostrara la funcion 
console.log(objetoConAlgunasVariables['variableString'])// en consola se mostrara la variable

//La notacion corchete resuelve el siguiente problema, veamos:
let cuarderno = {
    'numero de hojas' : 100,    //el identificador o nombre de la propiedad esta en comillas sencillas
    "numero de paginas" : 200   //el identificador o nombre de la propiedad esta en comillas dobles
}
console.log(cuarderno)

//En los objetos anteriores hemos escrito las propiedades con notacion camel case, es decir, el identificador de la propiedad inicia con 
//minuscula y cada nueva palabra inicia con MAYUSCULA: variableNumero, variableArray, etc... pero en el objeto 'cuaderno' los identificadores
//de las propiedades estan dentro de comillas sencillas o dobles. Esto se debe a que si se escriben sin estas, la consola arrojara un error de 
//sintaxis pues cada palabra seria una propiedad: 'numero', 'de', 'hojas', pero como este identificador tiene varias palabras lo 
//encerramos entre comillas dobles o sencillas para que la consola sepa que es un solo identificador.

console.log(cuarderno['numero de hojas'])
console.log(cuarderno['numero de paginas'])


//Hemos visto que tambien se puede usar con notacion camel case siempre y cuando el identifiador de la propiedad se encierre en comillas.
//Veamos otro ejemplo con arrays:

let carros = {
    'modelos' : [2010, 2022, 1995], //el identificador de la propiedad puede tener comillas o no
    "marcas" : ['chevrolet', 'mazda', 'toyota']
}

console.log(carros['modelos'][0])   //mostrara en consola el modelo que esta en el indice 0 del objeto 'carros'
console.log(carros.modelos[0])  //mostrara en consola el modelo que esta en el indice 0 del objeto 'carros'
//En ambos casos se mostrara la misma info en la consola.


//La notacion corchete tambien se usa cuando el identificador de la propiedad o el metodo es numerico, veamos:
let nickname = {
    1: "gino587",
    2: "stef478",
    3: "george423",
    4: "kiara669",
    5: function(item){console.log(item)},
    6: {1:'string', 2:2000, 3:true},// un objeto dentro de otro objeto con identificadores numericos
    7: [85, 86, 87]
}
  
//hacer esto NO se puede: nickname.1, por tanto se debe hacer asi:
console.log(nickname[1])//parece un array, y no esta lejos, pues un array tambien es considerado un objeto 
console.log(nickname[2])//se lee: muestre lo que tiene la propiedad '2' del objeto principal
console.log(nickname[3])
console.log(nickname[4])

//¿y que tal si le ponemos un contador a las propiedades?
console.log('CON UN CONTADOR FOR')
for(i=1; i<5; i++){
    console.log(nickname[i])//veremos el mismo resultado de arriba, pues cada vez que 'i' incremente sera la propiedad que mostrara
}


nickname[5]('con notacion corchete tambien funciona el metodo')//cuando llamemos la funcion, le enviamos el string
console.log(nickname[6][1])//se lee: muestre lo que tiene la propiedad '1' del objeto secundario que esta en la propiedad '6' del objeto principal
console.log(nickname[6][2])
console.log(nickname[6][3])
console.log(nickname[7][0])//pilas!! no confundir con lo de encima
console.log(nickname[7][1])//se lee: muestre el dato que esta en el indice 1 del array que esta en la propiedad '7' del objeto principal
console.log(nickname[7][2])//se lee: muestre el dato que esta en el indice 2 del array que esta en la propiedad '7' del objeto principal




// Ahora, pensemos en el siguiente ejercicio:
const carroDeProductos = {};//Tenemos un objeto vacio

// Tenemos dos objetos con propiedades:
const producto = {
    titulo: 'escoba',
    id: 5458,
    cantidad: 1
}


const producto2 = {
    titulo: "trapero",
    id: 5412,
    cantidad: 5
}

//Para añadir un objeto dentro de otro objeto, hacemos lo siguiente:
//Invocamos el objeto vacio y dentro de llaves colocamos el nombre que queremos que tenga la propiedad y dentro de esta se asigna el objeto ya 
//creado:
carroDeProductos["producto1"] = producto
carroDeProductos['producto2'] = producto2
console.log(carroDeProductos);

//Obvio, tambien se puede hacer con notacion punto...  :)












//RECORRER UN OBJETO
console.log('RECORRER UN OBJETO')

//Asi como se vio en el archivo de 'Arrays', tambien podemos recorrer un objeto, es decir, trabajar con cada uno de sus propiedades.
//Para recorrer objetos veamos 4 formas: 
//1) El ciclo for-in
//2) El metodo Object.values()
//3) El metodo Object.keys()
//4) El metodo Object.entries()


//RECORRERLO USANDO EL CICLO FOR-IN
console.log('RECORRERLO USANDO EL CICLO FOR-IN')
//Veamos como se recorre un objeto usando la sentencia for-in:

let unObjetoParaRecorrer = {
    'propiedad 1' : 'propiedad 1',
    'propiedad 2' : 5412,
    'propiedad 3' : true,
    'propiedad 4' : function(data){console.log(data)},
    'propiedad 5' : [null, false, 0], 
    'propiedad 6' : {1:'string', 2:2148, 3:'3'}
}

for (const cadaPropiedad in unObjetoParaRecorrer) {//se lee: en la variable 'cadaPropiedad' coloque una a una las propiedades del objeto principal
    console.log(cadaPropiedad)//en consola se mostraran las propiedades, pero esto puede que no sea util
}

//Para "sacar" cada uno de los valores que hay en cada propiedad del objeto principal hacemos lo siguiente:
for (const cadaPropiedad in unObjetoParaRecorrer) {//se lee: en la variable 'cadaPropiedad' coloque cada una de las propiedades del objeto 
    //'unObjetoParaRecorrer'.
    //Recordemos que para ver el valor de una propiedad de un objeto con notacion corchete hacemos: objeto['propiedad'], pues bien, eso mismo
    //hacemos para ver el contenido de cada propiedad del objeto: 
    //unObjetoParaRecorrer['propiedad 1']
    //unObjetoParaRecorrer['propiedad 2']
    //unObjetoParaRecorrer['propiedad 3']
    console.log(unObjetoParaRecorrer[cadaPropiedad])//en el primer ciclo la variable 'cadaPropiedad' tendra 'propiedad 1' y se mostrara lo que 
    //hay alli, en el segundo ciclo la variable 'cadaPropiedad' tendra 'propiedad 2' y se mostrara lo que hay alli, y asi para cada una.
    //En este caso no se puede usar la notacion punto: unObjetoParaRecorrer.cadaPropiedad pues la propiedad no existe y saldra 'undefined'
}















//RECORRERLO USANDO EL METODO Object.values()
console.log('RECORRERLO USANDO EL METODO Object.values()')

unObjetoParaRecorrer = {
    'propiedad 1' : 'propiedad 1',
    'propiedad 2' : 5412,
    'propiedad 3' : true,
    'propiedad 4' : function(data){console.log(data)},
    'propiedad 5' : [null, false, 0], 
    'propiedad 6' : {1:'string', 2:2148, 3:'3'}
}

//Este metodo recorre cada propiedad del objeto, pero los valores los coloca en un array
cadaPropiedad = Object.values(unObjetoParaRecorrer)
console.log(cadaPropiedad)//veremos un array con los valores. 
// cadaPropiedad = ['propiedad 1', 5412, true, ƒ, Array(3), {1:'string', 2:2148, 3:'3'}]

//Si los queremos dejar uno a uno, basta con recorrer el array:

for (const propiedades of cadaPropiedad) {
    console.log(propiedades)
}















//RECORRERLO USANDO EL METODO Object.keys()
console.log('RECORRERLO USANDO EL METODO Object.keys()')

unObjetoParaRecorrer = {
    'propiedad 1' : 'propiedad 1',
    'propiedad 2' : 5412,
    'propiedad 3' : true,
    'propiedad 4' : function(data){console.log(data)},
    'propiedad 5' : [null, false, 0], 
    'propiedad 6' : {1:'string', 2:2148, 3:'3'}
}

//Este metodo hace un array pero solo con las propiedades del objeto:

cadaPropiedad = Object.keys(unObjetoParaRecorrer)
console.log(cadaPropiedad)//se veran solo las propiedades:
//cadaPropiedad = ['propiedad 1', 'propiedad 2', 'propiedad 3', 'propiedad 4', 'propiedad 5', 'propiedad 6']

//Usando un ciclo for-of podemos ver el valor de cada propiedad del objeto:
for (const propiedad of cadaPropiedad) {
    console.log(unObjetoParaRecorrer[propiedad])
}

//si nos damos cuenta, el ciclo for-in y el metodo Object.keys() se comportan casi igual (el ultimo organiza todo en un array), pues los dos 
//solo sacan las propiedades del objeto, luego toca usar otro ciclo para sacar los valores





















//RECORRERLO USANDO EL METODO Object.entries()
console.log('RECORRERLO USANDO EL METODO Object.entries()')

unObjetoParaRecorrer = {
    'propiedad 1' : 'propiedad 1',
    'propiedad 2' : 5412,
    'propiedad 3' : true,
    'propiedad 4' : function(data){console.log(data)},
    'propiedad 5' : [null, false, 0], 
    'propiedad 6' : {1:'string', 2:2148, 3:'3'}
}

cadaPropiedad = Object.entries(unObjetoParaRecorrer)
console.log(cadaPropiedad)//este caso mostrara un array y cada indice tendra otro array con la propiedad y el valor, ejemplo:

/*
cadaPropiedad = [Array(0), Array(1), Array(2), Array(3), Array(4), Array(5)]

0: ['propiedad 1', 'propiedad 1']
1: ['propiedad 2', 5412]
2: ['propiedad 3', true]
3: ['propiedad 4', ƒ]
4: ['propiedad 5', Array(3)]
5: ['propiedad 6', {1: 'string', 2: 2148, 3: '3'}]
*/

//Ahora, solo basta con recorrer el array con el ciclo for-of
for (const propiedades of cadaPropiedad) {
    console.log(propiedades)//en 'propiedades' se guardara cada indice del array, que es otro array con propiedad-valor, y si nos fijamos bien, 
    //nos damos cuenta que los valores que necesitamos sacar estan en el indice 1, entonces queda con mostrar dicho indice:
    console.log(propiedades[1])//de esta forma volvemos a tener solo los valores de cada propiedad del objeto.
    
}



















console.log('EJERCICIO')
//Hacer un script que cuando el usuario ingrese un numero id le entregue el correo del objeto en cuestion, use hoisting
//El 'post' es tomado de la pagina: https://jsonplaceholder.typicode.com/comments


let post = [

    {
        "postId": 1,
        "id": 1,
        "name": "id labore ex et quam laborum",
        "email": "Eliseo@gardner.biz",
        "body": "laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis" 
      },
      {
        "postId": 1,
        "id": 2,
        "name": "quo vero reiciendis velit similique earum",
        "email": "Jayne_Kuhic@sydney.com",
        "body": "est natus enim nihil est dolore omnis voluptatem numquam\net omnis occaecati quod ullam at\nvoluptatem error expedita pariat"
    },
      {
        "postId": 1,
        "id": 3,
        "name": "odio adipisci rerum aut animi",
        "email": "Nikita@garfield.biz",
        "body": "quia molestiae reprehenderit quasi aspernatur\naut expedita occaecati aliquam eveniet laudantium\nomnis quibusdam delectus"
      },
      {
        "postId": 1,
        "id": 4,
        "name": "alias odio sit",
        "email": "Lew@alysha.tv",
        "body": "non et atque\noccaecati deserunt quas accusantium unde odit nobis qui voluptatem\nquia voluptas consequuntur itaque dolor"
      }
]


let datoUsuario = +prompt('ingrese un numero de id')

alert(traerCorreoIndice(datoUsuario));

function traerCorreoIndice(data){
    if(data==0 || data>4){
        return 'ingrese un dato valido'
    }else{
        let cadaValor = Object.entries(post[data-1])
        return cadaValor[3][1]
    }
}

console.log('fin del ejercicio')















//CREAR OBJETOS A PARTIR DE UNA "PLANTILLA" (Instanciar o generar un ejemplar)
console.log('CREAR OBJETOS A PARTIR DE UNA "PLANTILLA" (Instanciar o generar un ejemplar)')
//Observemos los siguientes objetos:

let perro = {
    'nombre mascota' : 'firulais',
    'edad en años' : 2,
    'raza': 'labrador', 
    'genero' : 'macho'
}

let perro2 = {
    'nombre mascota' : 'Nala',
    'edad en años' : 3,
    'raza': 'Golden',
    'genero' : 'hembra'
}

let gato = {
    'nombre mascota' : 'mucifu',
    'edad en años' : 3,
    'raza' : 'ragdoll',
    'genero' : 'macho'
}

let gato2 = {
    'nombre mascota' : 'Kiki',
    'edad en años' : 1,
    'raza': 'angora',
    'genero' : 'hembra'
}

//Notamos que los objetos tienen las mismas propiedades: nombre mascota, edad en años, raza y genero, pero hacer uno a uno es una tarea 
//repetitiva. Hagamos una funcion que, pasandole argumentos, se hagan los objetos. Veamos:



class Mascota{
    constructor(nombre, edad, raza, genero ='macho'){
        this['nombre mascota'] = nombre,
        this['edad en años'] = edad,
        this['raza'] = raza,
        this['genero'] = genero
    }
    // la palabra 'this' hace referencia al objeto 'Mascota', es como si dijeramos: 
    //Mascota['raza'] = raza 
    //Mascota['nombre mascota'] = nombre
    //Mascota['genero'] = genero
}
/*
La clase o "class" es un objeto que representa la plantilla para hacer otros objetos, plantilla que tiene un nombre (class nombre { } ). 
//Como buena practica, el nombre de la clase inicia con mayuscula.


Dentro de este objeto "class" se coloca una funcion llamada "constructor"

La funcion "constructor" es la que se encarga de tener los parametros que seran usados para hacer las propiedades o metodos de los objetos que 
construiremos. En el bloque de esta funcion esta la relacion de una propiedad y/o metodo que queramos del nuevo objeto (mano izquierda) con los 
parametros que nos trajimos al invocar la funcion constructora (mano derecha):  
constructor(parametros deseados){this.propiedad = algun parametro, this.metodo = funcion que ejecutara algo cuando sea invocada}
*/


//Para hacer las instancias  o los nuevos objetos a partir de la "plantilla" class, en una variable con el nombre del nuevo objeto se referencia 
//el nombre de la class anteponiendole la palabra "new" y en parentesis se indican las propiedades o metodos que tendra ese nuevo objeto:


let perro3 = new Mascota('Coco', 5, 'Pastor australiano', 'macho')
let perro4  = new Mascota('Kira', 3, 'Pastor belga', 'hembra')
let gato3 = new Mascota('Bella', 1, 'Siames', 'hembra')
let gato4 = new Mascota('Felix', 2, 'persa')

//Y mostremoslos en consola:
console.log(gato)
console.log(gato2)
console.log(gato3)
console.log(gato4)

console.log(perro)
console.log(perro2)
console.log(perro3)
console.log(perro4)






console.log('EJERCICIO')
//ejercicio: 

//A partir de un array de datos, llamado DATA, instanciar 1 objeto por cada indice, es decir
//esto:

const DATA = [
    ['jorge', '@jorge'],
    ['stepha', '@tepha'],
    ['enrique', '@quique'],
    ['fulano', '@fulanito']
]
console.log(DATA)

//pasarlo a esto:

let personas = [
    {
        nombre: 'Jorge',
        instagram: '@jorge'
    },
    {
        nombre: 'stepha',
        instagram: '@tepha'
    }
//etc....
]




//se hace la plantilla para hacer los objetos de cada persona
class persona{
    constructor(nombre, instagram){
        this.nombre = nombre,
        this.instagram = instagram
    }
}



//FORMA MANUAL:
console.log('MANUAL')
personas[0] = new persona(DATA[0][0], DATA[0][1]);
personas[1] = new persona(DATA[1][0], DATA[1][1]);
personas[2] = new persona(DATA[2][0], DATA[2][1]);
personas[3] = new persona(DATA[3][0], DATA[3][1]);
console.log(personas)



//FORMA AUTOMATICA:
console.log('AUTOMATICO')
//un ciclo for ayudara a que por cada indice del array "data" se genere un objeto
for(let i = 0; i<=DATA.length-1; i++){
personas[i] = new persona(DATA[i][0], DATA[i][1])
}


console.log(personas);
console.log(`en el indice 0 del array "personas" el instagram de esta persona es "${personas[0].instagram}"`);
console.log(`en el indice 3 del array "personas" el nombre de esta persona es "${personas[3].nombre}"`);























//DESESTRUCTURACION DE OBJETOS
console.log('DESESTRUCTURACION DE OBJETOS')

let usuario = {
    nombre: 'Marcos',
    apellido : 'Smith',
    edad:34
}

console.log(usuario.nombre);//muestra el valor de esta variable
console.log(usuario.edad);
//pero vemos que en ambos casos se repite una palabra: usuario. Lo podemos arreglar para que no suceda:
let {nombre, edad} = usuario;
console.log(nombre, edad)//esto es igual a decir que los datos seran guardados en una variable con el mismo nombre que la propiedad. 
//Para cambiar esto podemos colocarle un alias despues de dos puntos verticales:

let {nombre: otroNombre, edad: otraEdad} = usuario;// esto se lee: el valor de la propiedad "nombre" y "edad"  se guardaran en otras variables: 
//"otroNombre" y "otraEdad"

console.log(otroNombre, otraEdad);
//De esta forma ya no tenemos que usar una "ruta" con notacion de punto para acceder al valor de una propiedad
//dentro de un objeto, pues una vez "destruido" el objeto invocamos a la variable que contiene el valor



//desestructurando usando el operador REST
let {nombre: Nombre, ...args} = usuario //en este caso la desestructuracion usa el operador REST, que son 3 puntos seguidos y luego una variable.
let {apellido: Apellido, ...otroArgs} = usuario
let {edad: Edad, ...masArgs} = usuario

//En este caso las variables que estan despues de los 3 puntos tendran las demas propiedades del objeto:
console.log(Nombre, args)//en 'args' hay un objeto con las demas propiedades del objeto 'usuario'
console.log(Apellido, otroArgs)//en 'otroArgs' hay un objeto con las demas propiedades del objeto 'usuario'
console.log(Edad, masArgs)//en 'masArgs' hay un objeto con las demas propiedades del objeto 'usuario'









    

//Ahora con objetos anidados:
usuario = {
    nombre: 'Juan',
    edad: 25,
    pasatiempos:{
        sabados:'leer',
        domingos: 'deportes',
        entreSemana: 'ver TV'
    }
}

//para saber el pasatiempos de entre semana seria algo como:
console.log(usuario.pasatiempos.entreSemana);

//destructurando el objeto y asignandola a otra variable:
let {pasatiempos: {entreSemana: deLunesAViernes}} = usuario
console.log(deLunesAViernes);//se cambio el nombre para que la variable no tenga el mismo nombre que la propiedad 'entreSemana'


//Otro ejemplo:
let pronostico_tiempo = {
    ayer:{
        minima: 15,
        maxima:17
    },
    hoy:{
        minima:16,
        maxima: 18.5
    },
    mañana:{
        minima:15.3,
        maxima: 20.5
    }
}

//de forma tradicional:
let minimaActual = pronostico_tiempo.hoy.minima;
let maximaActual = pronostico_tiempo.hoy.maxima;
console.log(maximaActual, minimaActual);

//destructurado:
let {hoy: {minima:minimaHoy, maxima: maximaHoy}} = pronostico_tiempo
console.log(maximaHoy, minimaHoy);
























//CREAR OBJETOS INMUTABLES
console.log('CREAR OBJETOS INMUTABLES')
//Para que los datos de un objeto no cambien, podemos "congelarlos", por ejemplo:
let colores = { //ver la siguiente pagina: https://www.google.com/search?q=colorpicker&rlz=1C1SQJL_esCO823CO824&oq=color&aqs=chrome.1.69i60j69i59j69i57j69i60l5.2893j0j7&sourceid=chrome&ie=UTF-8
    azul: "#123874", 
    verde: "#10E04b",
    rojo: "#e31e10"
}
console.log(colores);

//Ahora, reasignemos valores:
colores.verde = "#8bf57f";//el color verde se reasignó
colores.morado = "#ed07bb"; // y el color "morado" se agregó
delete colores.azul;// el color azul se borró
console.log(colores);

//Para que no suceda esto, usamos el metodo freeze:
window.Object.freeze(colores);
colores.rojo = "#ed5045";
colores.amarillo = "#f5f50a";
delete colores.verde;
console.log(colores);//vemos que la propiedad "rojo" no cambió ni se agregó el "amarillo" ni se borró el "azul";
    
    
























//PASAR OBJETO COMO PARAMETRO 
console.log('PASAR OBJETO COMO PARAMETRO')

//Pensemos en el siguiente objeto:

let datosCliente = {
    nombre: "jorge", 
    edad: 24,
    nacionalidad: "colombiano",
    ubicacion: "america latina"
}

//Ahora, si lo pasamos como parametro de una funcion, lo podriamos usar de la siguiente manera:
filtrarDatosCliente(datosCliente)//llamamos la funcion usando como argumento el objeto

function filtrarDatosCliente(objeto){// se lee: la funcion recibe como parámetro el objeto "datosCliente" en el parametro "objeto"
    console.log(objeto.nombre)
    console.log(objeto.edad)
    console.log(objeto.nacionalidad)
    console.log(objeto.ubicacion)
}





//Pero lo podemos optimizar usando la desestructuracion de la siguiente manera:
filtrarDatosCliente2(datosCliente)//llamamos la funcion usando como argumento el objeto

function filtrarDatosCliente2({edad, nombre}){// de esta forma no tomamos el objeto completo, sino aquellas propiedades que necesitamos:
    console.log(nombre)
    console.log(edad)
}

   





let e = {
    propiedad1 :'este es el contenido de propiedad1',
    propiedad2 : 'este es el contenido de propiedad2',
    funcionZ : function(param = 'texto por defecto'){
        return alert(`llamaste a la funcion que muestra: ${param}`)},
        objetoInterno: {
            funcionObjetoInterno: function(parametro){
            return alert(`este es mi mensaje: ${parametro}` )
            },
            propiedadObjetoInterno: 'propiedad 1 del objeto interno'
        }
    }
//2) este objeto sirve para pasarlo como parametro de una funcion, seguir numero 1) y luego el 2):
    function mostrar(even){
        console.log(even.propiedad1),
        console.log(even.propiedad2),
        console.log (even.funcionZ()),
        console.log(even.objetoInterno.propiedadObjetoInterno),
        console.log(even.objetoInterno.funcionObjetoInterno('hola'))
    }

//1) se llama a la funcion, con el objeto "e" como parametro
mostrar(e);








    

















//EJERCICIO CON UN OBJETO, donde se pueden ejecutar algunos metodos para cambiar algunas propiedades, por ejemplo
console.log('EJERCICIO CON UN OBJETO')
let elemento = {
    clasesDeElementos: {
        clases:[],//Array vacio para llenarlo de clases de elementos 

        //funcion que se usa para llenar el array de elementos
        agregarTresClases:(clase1, clase2, clase3)=>{
            if(clase1 == undefined){
                console.log('ingrese algun parametro en la funcion');
                return
            }
            else if(clase2 == undefined){
                console.log('ingrese el parametro 2 en la funcion');
                return
            }
            else if(clase3 == undefined){
                console.log('ingrese el parametro 3 en la funcion');
                return
            }
            elemento.clasesDeElementos.clases.push(clase1, clase2, clase3)
            console.log(`ahora hay los siguientes elementos dentro del array clases: [${elemento.clasesDeElementos.clases}]`);
        },

        //funcion que se usa para cambiar la clase de elemento dependiendo de los parametros diligenciados
        cambiarClases:(propiedad1, propiedad2, propiedad3)=>{
            if(propiedad1!= undefined){
                elemento.clasesDeElementos.clases[0] = propiedad1;
                console.log(`el nuevo array es: ${elemento.clasesDeElementos.clases}`);
                return
            }
            if(propiedad2!= undefined){
                elemento.clasesDeElementos.clases[1] = propiedad2;
                console.log(`el nuevo array es: ${elemento.clasesDeElementos.clases}`);
                return
            }
            if(propiedad3!= undefined){
                elemento.clasesDeElementos.clases[2] = propiedad3;
                console.log(`el nuevo array es: ${elemento.clasesDeElementos.clases}`);
                return
            }
        },


        //funcion que se usa para cambiar cualquier clase de elemento
        cambiarXClase:(index, nuevoValorClase)=>{
            //evalue la cantidad de elementos que tiene el array "clases"
            let cantidadElementos = elemento.clasesDeElementos.clases.length
            //la cantidad de indices es uno menos de elementos
            cantidadElementos -= 1;
            //si el indice es valido, cambia su contenido, sino muestra un mensaje en consola
            if(index<=cantidadElementos){
                elemento.clasesDeElementos.clases[index] = nuevoValorClase;
                console.log(`el nuevo array es: ${elemento.clasesDeElementos.clases}`)
            }
            else {console.log(`excedio el numero de indices con elementos, tiene hasta el indice ${cantidadElementos}`)}
        }
},





elementosCompuestos:[
            {
                materialesBlandos:['marterial A', 'material B', 'material C'],
                IdMaterialesBlandos:[2578, 58, true, false]
            },
            {
                materialesDuros:['marterial A', 'material B', 'material C'],
                IdMaterialesDuros:[true, false, 21, 85]
            },
            ['elemento compuesto 1', 'elemento compuesto 2', 'elemento compuesto 3'],
            {
                cambiarXIDMaterialBlando: (index, valor)=>{
                    let cantidadElementos = elemento.elementosCompuestos[0].IdMaterialesBlandos.length
                    //la cantidad de indices es uno menos de elementos
                    cantidadElementos -= 1;
                    //si el indice es valido, cambia su contenido, sino muestra un mensaje en consola
                    if(index<=cantidadElementos){
                        if(typeof(valor)=='number'){
                            elemento.elementosCompuestos[0].IdMaterialesBlandos[index] = valor;
                            console.log(`el nuevo array es: ${elemento.elementosCompuestos[0].IdMaterialesBlandos}`)
                            return
                        }
                        else {
                            console.log(`ingrese un valor numérico en el 2do parametro`);
                            return
                        }
                    }
                    else {console.log(`excedio el numero de indices con elementos, tiene hasta el indice ${cantidadElementos}`)}
                    return
                }
            }
            ],









estilo:{
            color:['rojo', 'verde', 'azul'],
            colorSubelementos:'terciarios', 
            forma:{
                forma1:21,
                forma2:965,
                forma3:4
            },
            formaSubelementos:'varios',
            cambiarXColor:(index, nuevoValorColor)=>{
            //evalua la cantidad de elementos que tiene el array "color"
            let cantidadColores = elemento.estilo.color.length
            //la cantidad de indices es uno menos de elementos
            cantidadColores -= 1;
            //si el indice es valido, cambia su contenido, sino muestra un mensaje en consola
            if(index<=cantidadColores){
                elemento.estilo.color[index] = nuevoValorColor
           }
            else {console.log(`excedio el numero de indices con elementos, tiene hasta el indice ${cantidadColores}`)}
        },
    }


}



//Este super objeto tiene varios metodos que nos ayudaran a familiarizarnos con ellos, sobre todo ahora que vamos a ver que JS tiene 
//muchos objetos con metodos que podemos usar.

//Miremos que clases de objetos tiene el objeto:
console.log(elemento.clasesDeElementos.clases)



//Este metodo ingresara clases de elementos al array vacio
elemento.clasesDeElementos.agregarTresClases('plastico', 'lamina', 'acero')


//Este metodo cambia una o mas clases pero en el orden que le digamos, es decir, si tiene un solo parametro cambiara el indice 0, si tiene 
//dos parametros cambiara los indices 0 y 1, con los tres parametros cambiaran los tres indices
elemento.clasesDeElementos.cambiarClases('madeflex')


//Este metodo, a diferencia del anterior, cambiara el indice que le indiquemos por el string que le indiquemos:
elemento.clasesDeElementos.cambiarXClase(2, 'hierro colado')



//En la array de elementosCompuestos tenemos 4 indices, veamos del indice 0 los id de los materiales blandos:
console.log(elemento.elementosCompuestos[0].IdMaterialesBlandos)

//Con el metodo  cambiarXIDMaterialBlando podemos cambiar cualquier ID de los materiales blandos, pero exige el indice y el nuevo ID:
elemento.elementosCompuestos[3].cambiarXIDMaterialBlando(1, 545488)


//Finalmente, tenemos un objeto con unos estilos. Veamos los colores:
console.log(elemento.estilo.color)

//Pero podemos cambiar el color del indice que queramos con el siguiente metodo:
elemento.estilo.cambiarXColor(1, 'verde pollo')
console.log(elemento.estilo.color)

//Como se dijo anteriormente, JS tiene muchos objetos y metodos y, como se hizo en este ejercicio, tendremos que saber que parametros reciben 
//y que hacen.... ya veremos   :)



























//OPERADORES REST Y SPREAD EN OBJETOS
console.log('OPERADORES REST Y SPREAD EN OBJETOS')

let paciente = {
    nombre: 'Jorge Enrique',
    edad: 41,
    datos_de_contacto:{
        esposa: 'stephy',
        tel: 21316513,
        mama: 'maria',
        tel: 23131313
    }
}

let sintomas = {
    temperatura_grados: '39',
    presion: '120/80',
    dificultad_respiratoria: false,

}

//Con el operador spread hacemos un nuevo objeto, uniendo los objetos anteriores. Ademas añadimos dos propiedades mas, una de ellas un operador 
//rest:
let paciente_sintomas = {
    ...paciente, 
    ...sintomas,
    observaciones: 'alergico a...',
    ...medicamentos = ['ibuprofeno', 'paracetamol']//en la variable 'medicamentos', que es un operador rest, guardamos un array de elementos
}

console.log(paciente_sintomas)




//NOTA: los operadores spread hacen una copia de los objetos 'paciente' y 'sintomas', pero del objeto 'datos_de_contacto', que esta 
//dentro del objeto 'paciente', hace la copia de la referencia. Veamos:

paciente.edad = 39
console.log(paciente)// en 'paciente' se hace el cambio pero...
console.log(paciente_sintomas)//...en 'paciente_sintomas' no se hace el cambio, pues es una copia



paciente.datos_de_contacto.mama = 'elena'//si cambiamos el valor de una propiedad en el objeto contenido, como es por referencia, se cambia 
//en ambos objetos: 
console.log(paciente)//tanto en el objeto principal como en...
console.log(paciente_sintomas)//...la 'copia' con el spread

















//COPIAR UN OBJETO
console.log('COPIAR UN OBJETO')

let objeto = {
    propiedad1: 'propiedad 1', 
    propiedad2: 'propiedad 2', 
    propiedad3: 'propiedad 3',
    propiedad4:{subpropiedad1: 1, subpropiedad2: 52},
    propiedad5: [646, 26, 8765]
}


//Copiemos el objeto con el operador spread:
let copiaConSpread = {
    ...objeto
}


//Ahora copiemos el mismo objeto pero usando la funcion structuredClone():
let copiaConLaFuncion = structuredClone(objeto)



//veamos el objeto con sus copias:
console.log(objeto)
console.log(copiaConSpread)
console.log(copiaConLaFuncion)

 
//Dichos objetos son una copia exacta tanto en sus propiedades como en el subobjeto y el array. 
//PERO si cambiamos algunos valores, la cosa cambia dependiendo de las copias. Veamos:


console.log('cambiando valores')
//Cambiemos los siguientes valores:
objeto.propiedad4.subpropiedad1 = 646646 // ahora es un numero diferente
objeto.propiedad5[0] = 'unString' //cambiamos el indice 0 que tiene un numero por un string
objeto.propiedad1 = 'otra propiedad 1' //cambiamos el valor de la primera propiedad


//Ahora veamos el objeto y sus copias:
console.log(objeto)// realiza los cambios antes hechos
console.log(copiaConSpread)// mantiene los valores originales a excepcion del objeto y el array
console.log(copiaConLaFuncion)// una copia exacta del objeto original, a pesar de los cambios hechos despues

 
/*
CONCLUSION:
Se debe tener cuidado con los valores que se estan copiando y el metodo de copia 
*/




























//EL OBJETO "WINDOW"
console.log('EL OBJETO "WINDOW"')

//Es el objeto que se usa para manejar la ventana del navegador. En otras palabras, es un objeto con muchisimas propiedades y metodos para 
//que JS pueda manejar recursos de los navegadores. Veamos el objeto 'window':
console.log(window)

//Dentro de este objeto podemos encontrar metodos como: 
//alert() usado para mostrar al usuario un mensaje en la ventana del navegador
//confirm() usado para que salga una ventana y solicite confirmacion al usuario
//prompt() usado para pedir informacion al usuario
//Object.freeze(objeto) para evitar cambiar propiedades y valores
window.alert('muestra un mensaje en la ventana del navegador')
window.confirm('¿desea salir?')
window.prompt('ingrese un nombre')

//Es verdad que no hemos usado el objeto 'window' porque no es necesario, pero queda claro que estos metodos son de dicho objeto





















//OBJETO DOCUMENT
console.log('OBJETO DOCUMENT')
//Un metodo usado en el desarrollo web es el document.write, veamos:
window.document.write('esto saldra en la ventana del navegador')
window.console.log('esto saldra en la ventana de la consola')





















//OBJETO MATH
console.log('OBJETO MATH')
//El objeto matematico 'Math' nos proprociona algunos metodos utiles como random, usado para generar valores aleatorios entre 0 y 1 sin 
//incluir el 1, es decir, desde 0 hasta 0.99999... Veamos:
console.log(window.Math.random())//genera un numero entre 0 y 0.99999999999999999 cada vez que refrescamos el navegador

//Para convertir numeros decimales a enteros se hace lo siguiente. Si el valor aleatorio es un numero entre 0.0 y 0.999... el resultado se 
//debe multiplicar por 10 para que la coma se corra un digito a la derecha, si se multiplica por 100 se correra dos digitos y asi sucesivamente
//De esta forma ahora tenemos numeros aleatorios entre 0 y 9 o 0 y 99, etc...:
console.log(Math.random()*10)


//El inconveniente es que sigue conservando los numeros decimales despues de la coma. Para borrarlos podemos usar los metodos floor() o round()
//por ejemplo:
console.log(`con el metodo round y multiplicando por 10 queda: ${Math.round(Math.random()*10)}`);
//lo primero es generar un numero aleatorio (random) y lo multiplicamos por 10. Ahora, este resultado lo envolvemos en el metodo round para que le 
//quite los decimales. 'Round' redondea el numero hacia el entero mas cercano, veamos:
5.477353221913274
5 //lo bajo a 5

4.877394534276145
5 //lo subio a 5

3.8556098061428923
4 //lo subio a 4

0.47445182283403
0 //lo dejo en 0

4.650495249678263
5 //lo subio a 5

2.5371606513375333
3 //lo subio a 3

//Una vez pasa el umbral de 0.5 lo redondea al entero que le sigue, sino lo mantiene


console.log(`con el metodo floor y multiplicando por 10 queda: ${Math.floor(Math.random()*10)}`);
//Igual que el ejercicio anterior quita los decimales pero, a diferencia de 'round', mantiene el entero, veamos:

8.9284393924051
8

9.204012781693256
9

1.4200005078956157
1

6.01657670909062
6



//Si lo que queremos es generar numeros aleatorios entre un rango de numeros, incluyendo los numeros de cada extremo, debemos hacer esto:
function rangoAleatorio(limiteInferior, limiteSuperior){
        return Math.floor(Math.random() * (limiteSuperior - limiteInferior + 1)) + limiteInferior
}
    

console.log(rangoAleatorio(0, 52));//llamamos una funcion y le pasamos como argumentos dos numeros que seran el rango para buscar un numero
//aleatorio. En este caso el numero aleatorio estara entre los numeros 0 y 52 incluyendo estos tambien.




















//EL METODO PARSEINT()
console.log('EL METODO PARSEINT()')

// Se usa para convertir un numero en forma de string a numero, por ejemplo:
// las variables tienen un string, no un numero:
var a = "4", b = "56";
console.log(typeof(a), typeof(b));// al evaluar el tipo de dato, este es reconocido como un string, de tal forma que si los sumamos, realmente
//lo que hara JS es una concatenacion de los valores:
console.log( a + b);

//Para convertirlos a tipo de dato numerico, se usa la funcion parseInt();
var a = "4", b = "56";
var a  = window.parseInt(a);
var b = window.parseInt(b)
console.log(typeof(a), typeof(b));
console.log( a + b);// de esta forma ya se pueden operar dichos valores.


//PARSEINT CON BASE NUMERICA
//Podemos usar esta funcion para convertir un string apropiado en base binaria o hexadecimal, por ejemplo:
console.log(window.parseInt("10010", 2));// esto se lee: convertir el string en base 2
console.log(window.parseInt("3E0A", 16));// esto se lee: convertir el string en base 16 o hexa























//EL METODO SETTIMEOUT
console.log('EL METODO SETTIMEOUT')

//El objeto window tiene un metodo que se usa para hacer que se ejecute una funcion anonima un tiempo despues, veamos:

//la sintaxis es la siguiente: window.setTimeout(funcion, tiempo en milisegundos). 

//El metodo setTimeout recibe dos argumentos: una funcion anonima y un numero entero positivo que sirve para indicar el tiempo que se retarda 
//en ejecutar la funcion. Los enteros negativos no tienen efecto en el retardo. Este tiempo se mide en milisegundos, es decir, para que la
//funcion se ejecute un segundo despues debemos colocar 1000, si queremos que se ejecute 2 segundos despues debemos colocar 2000 y asi
//sucesivamente. Podemos usar esta pagina para convertir los segundos a milisegundos: https://convertlive.com/es/u/convertir/segundos/a/milisegundos#5

//Estando en la pagina, en el input de arriba se anotan los segundos que queremos que se tarde la funcion, luego verificamos que la conversion
//sea de segundos a milisegundos y luego damos clic en 'convertir'. Ahora el programa nos muestra ese mismo tiempo en milisegundos. 
//Es este valor que debemos colocar como segundo argumento del metodo setTimeout(). Veamos un par de ejemplos:


window.setTimeout(()=>{
    console.log('ya pasaron 2 segundos')

}, 2000)//luego de 2 segundos se muestra el console.log





window.setTimeout((nombre = 'jorge')=>{
    console.log(`hola ${nombre}, 5 segundos despues`)
    
}, 5000)//luego de 5 segundos mostrara un mensaje con el parametro que le indicamos





//Ahora usemos un tiempo aleatorio para ejecutar una funcion:

let tiempoAleatorio = Math.round( Math.random()*10000) //con el metodo random() generamos un numero aleatorio con valores entre 0 y 10000, es 
//decir que entre 0 y 10 segundos

console.log(tiempoAleatorio)

console.log('en cualquier momento sale un mensaje...')

window.setTimeout(()=>{
    console.log('...ya sali')

}, tiempoAleatorio)


























//LA CLASE DATE
console.log('LA CLASE DATE')

//Antes de ver la clase DATE recordemos como se instancia un objeto:
class fecha {
    constructor(dia ='cualquiera', numero ='cualquiera'){
        this.dia = dia,
        this['numero de dia'] = numero
    }
}


let fechaActual = new fecha('domingo', 14)
let fechaPasada = new fecha('viernes', 28)
let sinFecha = new fecha()
console.log(fechaActual)
console.log(fechaPasada)
console.log(sinFecha)


//Entonces, las variables 'fechaActual', 'fechaPasada' y 'sinFecha' contienen los objetos que se crearon con los datos que se pasaron como 
//argumento, es decir el dia y 'numero de dia'

//En JS podemos instanciar un objeto para ser usado con las fechas

fechaActual = new Date()//si lo instanciamos sin argumentos tendremos la fecha actual 

console.log(fechaActual)

//Si queremos construir un objeto con propiedades como el año, mes y dia, debemos seguir el siguiente formato: 
//fechaDeseada = new Date(año,mes,dia,hora,minutos,segundos), ademas de colocar siempre argumentos numericos, los string no sirven.
//Tambien debemos considerar que los meses se representan del 0 al 11, siendo 0 = enero y 11 = diciembre
//Y los dias de la semana tambien van del 0 al 6 siendo 0 = domingo y 6 = sabado, veamos:


let fechaNacimiento = new Date(1980, 11, 21, 21, 21, 21)
console.log(fechaNacimiento)//en console veremos el año, el mes, el dia del mes, la hora (formato 24h), los minutos y los segundos


//Tambien hay algunos metodos de interes: 
console.log(fechaNacimiento.getFullYear())//devuelve el año
console.log(fechaNacimiento.getMonth())//devuelve el mes, siendo 0 = enero y 11 = diciembre
console.log(fechaNacimiento.getDate())//devuelve el dia del mes 
console.log(fechaNacimiento.getDay())//devuelve el dia de la semana, siendo 0 = domingo y 6 = sabado

//Tambien podemos actualizar datos de la fecha, veamos:
fechaNacimiento.setMonth(8)//actualicemos el mes al 8, siendo 0 = enero y 11 = diciembre
fechaNacimiento.setDate(5)//actualicemos el dia del mes al 5
fechaNacimiento.setFullYear(1981)// y el año a 1981

console.log(fechaNacimiento)//por supuesto la fecha cambio



//Ejercicio1: calcular la edad actual:
//En una variable guardamos la fecha actual
fechaActual = new Date()
//A esta fecha le sacamos solo el año:
let annioActual = fechaActual.getFullYear()
//A la fecha de nacimiento tambien sacamos solo el año:
let annioNacimiento = fechaNacimiento.getFullYear()
//Luego queda restar años:
let anniosActuales = annioActual - annioNacimiento
//y Pintar en consola!
console.log(`tengo ${anniosActuales} años de edad`)




//Ejercicio2: visualizar la fecha 7 dias despues:
const data = new Date()
console.log(data)//pintamos el dia actual

data.setDate(data.getDate() + 7)//usando el metodo para actualizar el dia del mes, le pasamos como argumento el metodo que extrae el dia del
//mes y le sumamos 7, dicho de otra forma, el argumento es obtener el dia del mes actual y le sumamos 7, asi...

console.log(data)//...mostrara la fecha dentro de 8 dias 
























/*
CONCLUSION


La notacion punto es la forma habitual de ver los valores que tienen las propiedades de un objeto o ejecutar un metodo,
por ejemplo: objeto.propiedad o objeto.metodo()


Se pueden crear un objeto vacio y luego añadirle propiedades como se hace cuando se inicializa una variable:
objeto.propiedad = valor
objeto.metodo = function()
objeto.array = []


De la misma forma se pueden actualizar las propiedades o funciones


Para borrar una propiedad de un objeto se usa la palabra 'delete' seguido del objeto y la propiedad a borrar:
delete objeto.propiedad


La notacion corchete tambien se usa como la notacion punto pero la propiedad que se va a evaluar se coloca dentro de los 
corchetes con comillas dobles o sencillas: objeto['propiedad']

Tambien se pueden crear propiedades usando esta notacion: objeto['nueva propiedad'] = valor

Esta notacion se usa especialmente cuando (1)el identificador de la propiedad o propiedades tienen mas de una palabra, (2)cuando se usan 
numeros como identificadores y (3)cuando la propiedad es aleatoria debido a recorrer un objeto: 

(1)objeto['identificador con varias palabras'] 
(2)objeto[1]
(3)objeto[propiedadAleatoria] debido a un for-in, por ejemplo




El siguiente ciclo y metodos sirven para recorrer objetos:
1) el ciclo for-in
2) EL METODO Object.values()
3) EL METODO Object.keys()
4) EL METODO Object.entries()



Para hacer objetos a partir de una 'plantilla' se usa una clase y un metodo constructor: class Nombre{constructor(){bloque de codigo}}
Luego se instancia dicho objeto usando la palabra 'new' y llamando la clase: let nuevoObjeto = new class(argumentos para el nuevo objeto)




Los objetos se desestructuran para guardar los valores de las propiedades en otras variables pero evitando la notacion punto, de esta forma 
podemos trabajar solo con 
aquellas propiedades que queramos.
Para que las variables no tengan el mismo nombre que la propiedad, se usan los 'alias' despues de dos puntos verticales 


Para evitar cambiar o añadir propiedades o metodos a un objeto, usamos el metodo 'freeze' del objeto window


Podemos usar objetos como argumentos de una funcion y los podemos desestructurar para tomar las propiedades que se requierar


El objeto 'window' tiene lo necesario para utizar recursos de los navegadores como chrome, edge, safari, etc.
El metodo document.write() se usa para que aparezca un mensaje en la ventana del navegador 
El metodo Math.random() se usa para generar numeros aleatorios
El metodo Math.round() se usa para quitar valores decimales y llevar el numero al entero positivo mas cercano
El metodo Math.floor() se usa para quitar valores decimales pero dejando el entero 
Con una formula podemos usar numeros aleatorios entre ciertos valores
El metodo parseInt() convierte un string a numero entero
El metodo setTimeout() se usa para ejecutar una funcion pasado cierto tiempo
Hay muchisimos mas metodo que se iran aprendiendo en el dia a dia :)

Con la clase DATA podemos trabajar con fechas en JS



NOTA: No es necesario usar el objeto 'window' cada vez que se requiera un metodo o propiedad de el, simplemente se escribe el metodo 
o propiedad necesaria, ejemplo: setTimeout(), console.log(), pareseInt(), etc.



*/
