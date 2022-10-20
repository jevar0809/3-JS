//METODOS PARA EL USO DE ARRAYS
console.log('METODOS PARA EL USO DE ARRAYS')

//Una vez familiarizados con los arrays y lo que son los metodos, podemos entender algunos metodos muy usados propios de los arrays y que 
//facilitaran trabajar con ellos.





//EL METODO FOREACH
console.log('EL METODO FOREACH')

//Este metodo sirve para recorrer los arrays y trabajar con los valores de sus indices, veamos:

let unArray = [1, 2, 3, 4, 5]// tenemos un array

//Para que funcione el metodo forEach con el array, JS 'hace de cuenta' que este array es un objeto (aunque asi es) y que el metodo le 
//pertenece. Por eso llamamos el array y luego, con la notacion punto, llamamos el metodo. 

//El metodo forEach recibe como argumento una funcion callback, y en el parametro de esta funcion estara el valor de cada indice, veamos: 
unArray.forEach(data=>console.log(data))

//Lo que hace el metodo forEach es que por cada elemento del array realizara el bloque de codigo de la funcion. En el primer ciclo se carga en 
//'data' el valor del indice 0, es decir 1, y con este valor se realiza el codigo de la funcion, en este caso es mostrar en consola. 
//Una vez termine, sigue con el indice 1, cargando su valor en el parametro 'data' y haciendo el codigo de la funcion y asi con cada indice.








//Tambien podemos hacer algo como esto:
unArray.forEach(data=>{let resultado = data + 3; console.log(resultado)})//se lee: a cada indice sume 3 unidades y luego muestre en consola.
//Otra vez, en el primer ciclo se carga en 'data' el valor del indice 0, o sea 1, luego se ejecuta el bloque de codigo de la funcion, que es 
//sumar a lo que hay en 'data' 3 unidades y luego se muestra en consola el resultado. una vez acabe, se carga el indice 1 en 'data' y se vuelve 
//a ejecutar el codigo de la funcion, es decir sumar 3 y luego se pinta en consola, y asi sucesivamente hasta terminar con todos los indices 
//del array.









//Ahora con un array de objetos:
const mascotas = [
    {nombre:'puchini', edad: 12, tipo:'perro'},
    {nombre: 'chanchito', edad: 3, tipo:'perro'},
    {nombre:'pulga', edad: 10, tipo:'perro'},
    {nombre: 'pelusa', edad: 16, tipo:'gato'}
]


mascotas.forEach(mascota=>{
    console.log(mascota.nombre); 
    let {edad, tipo} = mascota
    console.log(`tiene ${edad} años y es de tipo ${tipo}`)

});

//En este caso, en el primer ciclo se carga en el parametro 'mascota' el objeto del indice 0 y luego se muestra la propiedad 'nombre' con
//la notacion punto. Despues desestructuramos el objeto para ver las otras dos propiedades: tipo y edad
//Una vez termine este bloque, sigue el siguiente ciclo cargando en el parametro 'mascota' el indice 1 y volviendo a ejecutar el bloque




// tambien podemos usar otros dos parametros en el callback para que nos muestre el indice y el array completo, pero esto es opcional:
mascotas.forEach((mascota, index, elArray)=>{
    console.log(`En el indice ${index} esta:`);
    console.log(mascota.nombre);
    console.log(elArray);
})
    























//EL METODO MAP
console.log('EL METODO MAP')

//Este metodo es muy parecido a un forEach, tambien recorre un array, pero podemos usarlo para que el resultado que deseemos nos lo muestre en 
//otro array, veamos:

unArray = [1, 2, 3, 4, 5]

unArray.map(dato=>console.log(dato))//hasta este momento no es nada diferente a un forEach(), pues en el parametro de la funcion callback por 
//cada ciclo muestra el valor de cada indice, pero podemos hacer lo siguiente para usar de manera adecuada este metodo, veamos:


let numerosImpares = unArray.map(data=>{//en 'data' se carga el valor del indice 0 en el primer ciclo, luego...
    let modulo = data % 2;//...para saber si el numero es impar hallamos su modulo diviendo por 2
    if(modulo!=0){//si el modulo es diferente a 0 es porque dicho numero es impar, en tal caso...
        return data//...retornamos el numero que esta en 'data' 
    }//Una vez termine este bloque de codigo, continua con otro indice del array hasta terminarlo
})

console.log(numerosImpares)//notamos que el resultado fue arreglado en un array. En este caso veremos que tambien retorna valores 'undefined'
//esto se arregla con otro metodo que veremos mas adelante. 

//NOTA: para entender como y porque el retorno llega a una varible, en este caso 'numerosImpares', se debio entender el ultimo tema del 
//archivo 'callbacks.js' 









//Veamos otro ejercicio:
//A partir de un array de 4 objetos, sacar en otro array solo los nombres las mascotas:
const lasMismasMascotas = [
    {nombre:'puchini', edad: 12, raza:'perro'},
    {nombre: 'chanchito', edad: 3, raza:'perro'},
    {nombre:'pulga', edad: 10, raza:'perro'},
    {nombre: 'pelusa', edad: 16, raza:'gato'}
]

let nombresDeLasMascotas = lasMismasMascotas.map(data=>data.nombre)
//En el primer ciclo se carga en 'data' el objeto del indice 0, ahora retornamos solo el nombre de la mascota.
//Cuando se acaba el bloque de codigo, se toma el otro objeto del siguiente indice, asi hasta que se acaben los indices
console.log(nombresDeLasMascotas)//vemos que se hizo un array con los nombres de las mascotas









//A partir de un array de 4 objetos (cada uno de ellos con platoPrincipal y postre) sacar solo el plato principal:
let almuerzos = [
    {principal: 'arepa', postre: 'helado'},//objeto en el index 0
    {principal: 'tacos', postre: 'torta de queso'},// objeto en el index 1
    {principal:'pizza', postre: 'galletas'},//objeto en el index 2
    {principal: 'sushi', postre: 'quesillo'}//objeto en el index 3
]
//para dejar el array original intacto, se crea otro array para filtrar la propiedad deseada
    
let platoPrincipal = almuerzos.map(function(dato){return dato.principal})
console.table({platoPrincipal})//en forma de tabla se muestran los platos principales de cada objeto
    
    





//Ahora, hagamos un array con los dobles de los numeros del array:
const numeros = [2 ,63 ,8 ,45];
const DOBLES = numeros.map(numero=>numero*2)// Recordemos que las funciones flecha retornan por defecto el valor cuando es una linea de codigo
console.log(DOBLES);





















    



//EL METODO FILTER
console.log('EL METODO FILTER')
//Es muy parecido a los metodos vistos, la diferencia radica en que podemos usar operadores para filtrar un array. Veamos un ejercicio conocido:


unArray = [1, 2, 3, 4, 5]
numerosImpares = unArray.filter(data=>{//en 'data' se carga el valor del indice 0 en el primer ciclo, luego...
    let modulo = data % 2;//...para saber si el numero es impar hallamos su modulo diviendo por 2
    if(modulo!=0){//si el modulo es diferente a 0 es porque dicho numero es impar, en tal caso...
        return data//...retornamos el numero que esta en 'data' 
    }//Una vez termine este bloque de codigo, continua con otro indice del array hasta terminarlo
})

console.log(numerosImpares)//notamos que el resultado fue arreglado en un array, pero ya no vemos los 'undefined' que aparecen con el map()








//tenemos un array "palabras" que contiene 5 strings:
let palabras = ['dedo', 'cosa', 'corazon', 'esternocleidomastoideo', 'lampara']

//Ahora filtremos las palabras que tengan cierto numero de letras
let palabrasFiltradas = palabras.filter(function(palabra){//en el parametro 'palabra' se cargara el indie 0 en el primer ciclo
    return palabra.length>5//luego retornamos aquellas que tengan mas de 5 letras usando la propiedad length, propiedad que se carga
//con el numero de letras de la palabra. Ahora si esta tiene mas de 5 sera retornada
})
console.log(palabrasFiltradas)// el resultado es otro array con la condicion

//tambien podemos ver las que tengan menos de 5 letras, usando una funcion flecha:
let palabrasFiltradas2 = palabras.filter(palabra=>palabra.length<5);
//y luego pintamos en consola las variables que contienen las palabras filtradas:
console.log(`las palabras que tienen mas de 5 letras son: ${palabrasFiltradas} `);
console.log(`las palabras que tienen menos de 5 letras son: ${palabrasFiltradas2} `);










//un array de objetos:
const OTRAS_MASCOTAS = [
    {nombre:'puchini', edad_en_años: 6, tipo:'perro'},
    {nombre:'chanchito', edad_en_años: 3, tipo:'perro'},
    {nombre:'pulga', edad_en_años: 0.5, tipo:'pez de acuario'},
    {nombre:'pelusa', edad_en_años: 7, tipo:'gato'}
]
//si queremos filtrar las mascotas por las de tipo:'perro' entonces:
//creamos una variable que identifique el filtro, luego al array le pasamos el metodo filter y este a su vez tiene como parametro una funcion.
//Dicha funcion tiene un parametro que recibe todos los objetos del array, quedando como:
//perro = {nombre:'puchini', edad_en_años: 6, tipo:'perro'},
//perro = {nombre: 'chanchito', edad_en_años: 3, tipo:'perro'},
//perro = {nombre:'pulga', edad_en_años: 0.5, tipo:'pez de acuario'},
//perro = {nombre: 'pelusa', edad_en_años: 7, raza:'gato'}
//el retorno seran los objetos que la propiedad "tipo" sea igual a "perro"
let perros = OTRAS_MASCOTAS.filter(function(perro){return perro.tipo=='perro'})
console.log(perros);
//para filtrar el gato, con una funcion flecha:
let gatos = OTRAS_MASCOTAS.filter(gato=>gato.tipo=='gato');
console.log(gatos);
    







//base de datos de profesionales con un ID de la profesion: 
const PROFESIONALES = [
    {id: 1, nombre: 'Ricardo', id_profesion: 1},
    {id: 2, nombre: 'Jose', id_profesion: 1},
    {id: 3, nombre: 'Danilo', id_profesion: 2},
    {id: 4, nombre: 'Maria', id_profesion: 2},
    {id: 5, nombre: 'Tita', id_profesion: 3}
]

//Base de datos con las profesiones:
const PROFESION = {
    1: 'programador',
    2: 'diseñador(a)',
    3: 'Marketer'
}

//obtengo el dato del usuario
let empleado = prompt('ingrese el nombre del empleado para saber que profesion tiene: Ricardo, Jose, Danilo, Maria o Tita')

//luego filtro por el nombre que el usuario ingresó
let profesionalBuscado = PROFESIONALES.filter((profesional)=>profesional.nombre==empleado)//se lee: del array PROFESIONALES filtre aquellos
//que la propiedad 'nombre' sea igual al nombre que escribio el usuario.
console.log(profesionalBuscado)//veremos un array con un objeto cuya propiedad 'nombre' es igual al que digito el usuario

//Ahora,para saber su profesion debemos comparar la propiedad 'id_profesion' con alguno de las propiedades del objeto 'PROFESION', 
//Para ello podemos desestructurar el objeto: 
let {id_profesion} = profesionalBuscado[0] //debemos indicar que en el indice 0 esta el objeto, pues filter nos da un array 
console.log(id_profesion)//nos dara el numero de la propiedad 'id_profesion', con este numero podemos buscar en el objeto PROFESION usando
//la notacion corchete:
console.log(PROFESION[id_profesion]);








//Un array con dos objetos:
let usuarios = [
    {id: 2, nombre : 'edgar'},
    {id: 1, nombre : 'pablo'}
]

//solicitud del dato al usuario:
let datoABuscar = parseInt(prompt('ingrese el id: 1 o 2'))

//llamar a la funcion para buscar el id del usuario:
buscar(datoABuscar)//recordar que el hoisting es valido con funciones declarativas



function buscar(datoABuscar){
    usuarios.filter((objeto)=>{
        //es interesante que por cada objeto realiza la condicion: si el dato es verdadero rompe y sigue con el siguiente 
        //objeto, si es falso rompe y sigue con el otro objeto:
    if(objeto.id==datoABuscar){
        console.log(objeto.nombre)
    }
})
}










//Ejercicio: retornar un dato vacio a un array, eliminando el indice:
//Tenemos el siguiente arreglo:
let carrito = [
    {producto: 'Banano', cantidad: 10},
    {producto: 'Manzana', cantidad: 10},
    {producto: 'Fresa', cantidad:5}
]
console.log(carrito)



carrito = carrito.filter(item=>{//se lee: por cada indice del array se filtrará...
    if(item.cantidad===10){//si en el objeto la propiedad "cantidad" es igual a 10...
        return item.producto==='Manzana'// retorne el objeto que ademas la propiedad "producto" sea 'manzana'. el objeto que cumpla la 
        //propiedad "cantidad=10" pero que no tenga la propiedad 'manzana' sera descartado en el array 
    }
    else{return item}// si hay un objeto cuya cantidad no es igual a 10, entonces retornará al array
})

console.log(carrito)





//Otra forma de hacerlo es la siguiente:
let otroCarrito = [
    {producto: 'Banano', cantidad: 10},
    {producto: 'Manzana', cantidad: 10},
    {producto: 'Fresa', cantidad:5}
]
console.log(otroCarrito)


//Otra forma de hacer que se borre el indice de un array es filtrando los elementos diferentes a cierto dato, por ejemplo:
let arrayConUnElementoMenos = otroCarrito.filter(item=>item.producto!='Manzana')//se lee: retorne los elementos que tengan la propiedad 
//"producto" diferente a 'Manzana'
console.log(arrayConUnElementoMenos);//en este caso veremos que el nuevo array no contiene el indice con la propiedad "manzana", se ha 
//"eliminado"









//Ahora, unamos los dos metodos para hacer algo interesante:
//ejercicio: saber el postre que tienen los platos principales que tengan 'arepa':
almuerzos = [
    {platoPrincipal: 'arepa', postre: 'helado'},//objeto en el index 0
    {platoPrincipal: 'tacos', postre: 'torta de queso'},// objeto en el index 1
    {platoPrincipal:'pizza', postre: 'galletas'},//objeto en el index 2
    {platoPrincipal: 'sushi', postre: 'quesillo'},//objeto en el index 3
    {platoPrincipal: 'arepa', postre: 'gofle'},//objeto en el index 4
    {platoPrincipal: 'arepa', postre: 'churro'}//objeto en el index 5
]


let platoConArepa = almuerzos.filter(dato=>dato.platoPrincipal==='arepa')//se lee: filtre los objetos que tengan como valor 'arepa' en la 
//propiedad 'platoPrincipal' 

console.log(platoConArepa)
//Vemos que en la variable 'platoPrincipal' hay un array de 3 elementos, todos con el plato principal 'arepa'. Ahora necesitamos sacar en 
//otro array los postres de estos platos usando el metodo map(), veamos:

let postres = platoConArepa.map(plato=>plato.postre)//cada objeto del array 'platoConArepa' se carga en el parametro 'plato' luego mapeamos
//en un array la propiedad 'postre' de cada objeto y despues mostramos el array con los postres:
console.log(postres)

//Como vimos, usamos las dos funciones por separado para resolver el reto, pero podemos usar solo una linea de codigo para hacer los mismo, 
//veamos:

postres = almuerzos.filter(data=>data.platoPrincipal==='arepa').map(plato=>plato.postre)
console.log(postres)//tenemos el mismo resultado que haciendolo por separado

//Lo podemos entender de la siguiente manera: el resultado de la funcion callback del filter retorna a la variable 'postres' y a esta variable
//aplicamos el metodo map() que de la misma forma retorna el resultado de su callback a la varible 'postres', veamoslo de otra manera:

postres = almuerzos.filter(data=>data.platoPrincipal==='arepa')
        .map(plato=>plato.postre)

console.log(postres)


























//EL METODO SORT
console.log('EL METODO SORT')
//Este metodo ordena los elementos de un array, veamos:

let animalitos = ['abeja', 'oso', 'caballo', 'burro', 'foca' ]
let animalitosOrdenados = animalitos.sort()
console.log(animalitosOrdenados)//los ordena alfabeticamente

animalitos = ['abeja', 'Oso', 'caballo', 'burro', 'foca' ]
animalitosOrdenados = animalitos.sort()
console.log(animalitosOrdenados)//no los ordena de forma alfabetica...¿por que? por que sort ordena desde la ubicacion superior de la tabla 
//unicode (ver tabla en: https://unicode-table.com/en/), es decir, por encima de las minusculas estan las mayusculas y encima de estas estan los 
//numeros. Veamos otro ejemplo:

let caracteres = ['s','S','#','C','c', 3]
let ordenarCaracteres = caracteres.sort()
console.log(ordenarCaracteres)//estan ordenados segun el orden de la tabla unicode, segun la columna que inicia arriba con el #



//En el caso de los numeros veamos que pasa: 

let Numeros = [6, 3, 1, 4, 2, 5]
let ordenNumeros = Numeros.sort()
console.log(ordenNumeros)//los ordena de menor a mayor



Numeros = [1, 100, 2, 10]
ordenNumeros = Numeros.sort()
console.log(ordenNumeros)//no los ordeno de menor a mayor... ¿porque? los numeros 0 y 1 estan primero que el numero 2 en la tabla unicode



//EL METODO SORT CON CALLBACK
console.log('EL METODO SORT CON CALLBACK')

animalitos = ['abeja', 'Oso', 'caballo', 'burro', 'foca', 'foca' ]
console.log(animalitos)

let resultado = animalitos.sort((itemA, itemB)=>{
    /*
    REGLAS: 
    si itemA < itemB = -1 o cualquier numero negativo
    si itemA == itemB = 0
    si itemA > itemB = 1 o cualquier numero positivo

    como interpretar el -1, 0 y 1: 
    Pensemos en una abscisa (linea horizontal, con numeros negativos y positivos) y ubiquemos alli el itemA y el itemB. 
    Si el resultado es -1, itemA se "corre" hacia la izquierda de la abscisa e itemB hacia la derecha. 
    Si el resultado es 1, itemA se "corre" hacia la derecha e itemB hacia la izquierda.
    Si el resultado es 0, nada se mueve.
    De esta forma se van organizando las palabras en el orden adecuado:
    Oso
    abeja
    1, Oso "corre" hacia la derecha y abeja hacia la izquierda: abeja, Oso
    caballo
    Oso
    -1, caballo "corre" hacia la izquierda y Oso hacia la derecha: caballo, Oso
    */
   console.log(itemA)
   console.log(itemB)
   console.log(itemA.localeCompare(itemB))//muestra el resultado de la operacion comparando el itemA con el itemB
   return itemA.localeCompare(itemB)
})

console.log(resultado)




//Ahora con numeros: 
Numeros = [1, 100, 2, 10]

resultado = Numeros.sort((itemA, itemB)=>{
    /*
    recordemos las reglas:
    si itemA < itemB = -1 o cualquier numero negativo
    si itemA == itemB = 0
    si itemA > itemB = 1 o cualquier numero positivo


    Si el resultado es cualquier numero negativo, itemA se "corre" hacia la izquierda de la abscisa e itemB hacia la derecha. 
    Si el resultado es cualquier numero positivo, itemA se "corre" hacia la derecha e itemB hacia la izquierda.
    Si el resultado es 0, nada se mueve, veamos:
    100
    1
    resultado: 99, resultado positivo, entonces 100 se "corre" hacia la derecha y 1 hacia la izquierda
    2
    100
    resultado: -98, resultado negativo, entonces 2 se "corre" hacia la izquierda y 100 hacia la derecha 

    De esta forma se van organizando los numeros
    */

    console.log(itemA)
    console.log(itemB)
    console.log(`resultado: ${itemA - itemB}`)//la resta permite generar numeros negativos
    return itemA - itemB

})

console.log(resultado)






//Veamos como usarlo con objetos:
let clientes = [
    {id: 36, nombre: 'pepe'},
    {id: 2569, nombre: 'marcos'},
    {id: 245, nombre: 'lucia'},
    {id:5, nombre: 'Sasha'},
    {id:49, nombre: 'tulio'}
]



let objetoOrdenado = clientes.sort((a, b)=>{
    console.log(a)//vemos que en cada parametro hay un objeto
    console.log(b)
    console.log(a.id)//ahora vemos los id que tienen los objetos que hay en los parametros 'a' y 'b'
    console.log(b.id)
    console.log(a.id - b.id)//aqui veremos el valor de la resta entre id's para seguir la regla:
    /*
    Recordemos: en una linea recta horizontal (abscisa) los numeros grandes van dirigidos hacia la derecha mientras que los pequeños hacia la 
    izquierda: 1,2,3,4,5,6,7,8,25, 652, 8563, etc
    El resultado positivo corren al objeto 'b' hacia la izquierda y al objeto 'a' hacia la derecha
    El resultado negativo corren al objeto 'b' hacia la derecha y al objeto 'a' hacia la izquierda
    
    a = {id: 2569, nombre: 'marcos'}
    b = {id: 36, nombre: 'pepe'}
    resultado = 2533


    a = {id: 245, nombre: 'lucia'}
    b = {id: 2569, nombre: 'marcos'}
    resultado = -2324
    */

    return a.id - b.id
    //si lo queremos de forma descendente: return b.id - a.id
})


console.log(objetoOrdenado)//De esta forma se organizan los objetos con los id's de arriba hacia abajo:





























//EL METODO FIND
console.log('EL METODO FIND')

//Veamos la diferencia entre el metodo 'filter' y el metodo 'find'

//Filtrar LOS OBJETOS cuyos platos principales sean 'arepa':
let platoPrincipalArepa = almuerzos.filter(data=>data.platoPrincipal==='arepa')
console.log(platoPrincipalArepa)

//Encuentre EL OBJETO que tenga como plato principal 'arepa':
platoPrincipalArepa = almuerzos.find(data=>data.platoPrincipal==='arepa')
console.log(platoPrincipalArepa)

//El metodo 'find' encontrara la primer coincidencia de la condicion, en este caso el primer plato principal que tenga la propiedad 'arepa', 
//mientras que 'filter' nos dara todas las coincidencias de la condicion. Esto hace que el resultado de filter sea un arreglo de lo filtrado
//pero 'find' solo muestre el objeto en cuestion, no un arreglo.





























//EL METODO FINDINDEX
console.log('EL METODO FINDINDEX')
//Este metodo, como el nombre lo indica, busca y devuelve el indice del primer elemento que cumpla la condicion.
//Si el elemento no existe, el resultado el -1, veamos:

let MasMascotas = [
    {nombre:'puchini', edad: 12, tipo:'perro'},
    {nombre: 'puchini', edad: 2, tipo: 'gato'},
    {nombre: 'chanchito', edad: 3, tipo:'perro'},
    {nombre:'pulga', edad: 10, tipo:'perro'},
    {nombre: 'pelusa', edad: 16, tipo:'gato'}
]


let indiceDondeEstaPuchini= mascotas.findIndex(item=>item.nombre==='puchini')//esta en los indices 0 y 1...cual devuelve??
let indiceDondeEstaPelusa = mascotas.findIndex(item=>item.nombre==='pelusa')//esta en el indice 4
console.table(indiceDondeEstaPuchini, indiceDondeEstaPelusa)


let indiceDondeEstaPulgarcita = mascotas.findIndex(item=>item.nombre==='pulgarcita')//no existe en ningun indice
console.log(indiceDondeEstaPulgarcita)





























//EL METODO REDUCE
console.log('EL METODO REDUCE')
//De forma simplificada: Array.reduce(callback, numero de inicio)
//El metodo reduce() tiene un callback que recibe dos parametros: 1) un numero que inicia la operacion (opcional) y tambien 
//el acumulado o la respuesta de la operacion de dos numeros, y 2) cada uno de los item del array.
//En el primer ciclo se operan el numero de inicio con el primer numero del array y la respuesta se guarda en el 1er
//parametro del callback.
//En el siguiente ciclo operan el resultado de la 1ra operacion con el siguiente numero del array, y nuevamente el resultado
//se guarda en el primer parametro del callback y este vuelve y opera con el siguiente numero del array asi sucesivamente
//hasta terminar con los datos del array, veamos:

const OTROS_NUMEROS = [30, 10, 20, 50]//la suma de estos numeros es: 110, pero como el metodo inicia con el numero 10 el resultado el 120


let total = OTROS_NUMEROS.reduce((numeroInicialYRespuesta, numeroDelArray)=>{
    console.log(numeroInicialYRespuesta);
    console.log(numeroDelArray);
    return numeroInicialYRespuesta + numeroDelArray
}, 10);

console.log(total);
// este es el resultado:
//10 numero de inicio guardado en el 1er parametro del callback
//30 primer numero del array
//40 es la respuesta de la operacion guardado en el primer parametro del callback
//10 segundo numero del array
//50 es la respuesta de la operacion guardado en el primer parametro del callback
//20 tercer numero del array
//70 es la respuesta de la operacion guardado en el primer parametro del callback
//50 cuarto numero del array
//120 es la respuesta de la operacion guardado en el primer parametro del callback
//La operacion puede ser suma, resta, etc...
//Si el numero inicial no existiera, pues es opcional, la operacion inicia con el primer numero del array








//ejercicio 2:
const ARRAY_NUMEROS = [
    [0, 1],
    [2, 3],
    [4, 5]
]

const ARRAYS_CONCATENADOS = ARRAY_NUMEROS.reduce((acumulador, valorActual) =>
//En el primer ciclo, el acumulador tiene el primer array o el indice 0, a este se le concatena el valor actual que es el segundo array de 
//numeros o el indice 1, el resultado de esta concatenacion se guarda en el acumulador y el valor actual sera el siguiente array, es decir el 
//indice 2, luego se vuelven a concatenar y el resultado se guarda en el acumulador. Al final todos los arrays estan concatenados:
acumulador.concat(valorActual)
)

console.log(ARRAYS_CONCATENADOS);
    








//ejercicio 3: encontrar el valor total de las frutas:
const OTRO_CARRITO = [
    {titulo: 'Manzana', precio: 300, cantidad: 2},// precio por la cantidad = 600
    {titulo: 'Pera', precio: 250, cantidad: 5},// precio por la cantidad = 1250
    {titulo: 'naranja', precio: 100, cantidad: 4}//precio por la cantidad = 400, precio total:2250
]

console.log(carrito);

const COMPRA_TOTAL = OTRO_CARRITO.reduce((acumulador, valorActual) => valorActual.cantidad * valorActual.precio + acumulador, 0)
// Esta cosa se lee: en la primera vuelta del reduce, cada vuelta es un indice del array, el "acumulador" tomará el valor inicial que en este 
//caso es 0. Luego la cantidad del primer objeto (2) se multiplicará por el precio (300) y se sumara con el 0 del acumulador, dando como 
//resultado 600 y guardandose en el acumulador, reemplazando el 0.
// Para la otra vuelta, la cantidad del segundo objeto (5) se multiplicará con el precio (250) y se sumará con el acumulador (600), dando como 
//resultado 1850 y nuevamente guardandose en el acumulador.
// Finalmente, la cantidad del tercer objeto (4) se multiplicará con el precio (100) y se sumara con el acumulador (1850) dando como resultado 
//2250. Como ya no hay mas elementos para iterar, el resultado "reducido" se guarda en la constante "compraTotal"

console.log(COMPRA_TOTAL)










    




/**
 
CONCLUSIONES


Los arrays tienen metodos que facilitan trabajar con los datos

El metodo forEach() recorre el array y "saca" los elementos uno a uno para trabajar con ellos 

El metodo Map() hace lo que hace el forEach, pero forma un nuevo array como resultado

El metodo Filter() recorre el array, arma un array nuevo pero dependiendo de una condicion

El metodo Reduce() podriamos decir que "comprime", concatena, suma... los elementos o propiedades deseados


Estos son los mas usados, pero a medida que ahondemos en el lenguaje veremos que hay muchos mas...


*/
