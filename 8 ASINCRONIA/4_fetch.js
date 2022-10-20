//FETCH
console.log('FETCH')
//Antes de ver FETCH, entendamos que son las expresiones regulares y las APIs


//EXPRESIONES REGULARES
console.log('EXPRESIONES REGULARES')
/*
Es una forma de validar formatos o patrones en los input que necesitemos, por ejemplo: pensemos en los numeros de telefono, los emails, 
nombres compuestos, etc. Pensemos en el siguiente ejemplo:

let datoUsuario = prompt('ingrese un nombre de empleado')

El lio es que el usuario que ingresa dicho nombre lo puede hacer como mejor le parezca: Jorge, jorge, jorje, 2324, etc.
Para evaluar que el dato ingresado es el que queremos que digite, usamos las expresiones regulares para validar que los 
datos sean los apropiados.

Una expresion regular para validar que el dato ingresado contenga SOLO LETRAS MAYUSCULAS podria ser el siguiente:
/[A-Z]+/g

Si el usuario digita algo diferente a letras mayusculas de la 'A' a la 'Z' le podemos mostrar un alert() mencionando dicho 
error.


Para iniciar, vayamos a la siguiente pagina:
https://regexr.com/

Estando alli, podemos cerrar el menu a mano derecha, cerrar la ventana "tools" que esta abajo y seleccionar el texto que esta en el centro de 
la ventana y borrarlo. Tambien borremos la expresion regular que esta debajo de "Expression".

Ahora copiemos el siguiente parrafo y peguemoslo en el centro de la ventana (podemos personalizar el parrafo con nuestros datos):

Jorge Valbuena	
225 6523256 656
jorge_@gmail.com.com
www.jorge.com




Coincidencias Basicas, es decir, busque y seleccione...
.       - ...Cualquier Caracter, excepto nueva linea (usando el caracter de escape alt + 92 si queremos que seleccione y busque los puntos)
\d      - ...Cualquier Digito del 0 al 9 (la barra inclinada es alt + 92)
\D      - ...lo que No es un Digito (0-9)
\w      - ...cualquier Caracter de Palabra, digito o underline (a-z, A-Z, 0-9, _)
\W      - ...lo que No es un Caracter de Palabra, digito o underline
\s      - ...los Espacios de cualquier tipo. (espacio, tab, nueva linea)
\S      - ...lo que No es un Espacio, Tab o nueva linea.

ejemplo: para seleccionar o buscar el telefono del parrafo, usamos la siguiente expresion:

/\d+\s/g  donde g significa que hara una busqueda global y el signo + significa la cantidad de digitos
la expresion se lee: busque y seleccione cualquier digito (\d) del 0 al 9 con una cantidad superior a 1 (+) y espacios de cualquier tipo (\s)
Si no colocamos el cuantificador +, solo seleccionaria un digito seguido de un espacio (\d\s) que es lo que significa la expresion




Cuantificadores, es decir, especificamos la cantidad:
*       - 0 o Más
+       - 1 o Más
?       - 0, Uno u opcional
{3}     - Numero Exacto
{3,4}   - Rango de Numeros (Minimo, Maximo)


ejemplo: seleccione grupos de 3 de palabras, numeros con palabras o lineas bajas:
\w{3} 






Limites
\b      - Limite de Palabra
\B      - No es un Limite de Palabra
^       - Inicio de una cadena de texto, alt + 94
$       - Final de una cadena de texto



ejemplo: seleccione las 3 ultimas palabras o digitos que esten juntos:
\w{3}$

seleccione las 3 primeras palabras o numeros que esten al inicio:
^\w{3}








Conjuntos de Caracteres
[]      - Caracteres dentro de los brackets
[^ ]    - Caracteres que NO ESTAN dentro de los brackets

Grupos
( )     - Grupo
|       - Uno u otro





ejemplo: seleccione solo el correo electronico
^[a-zA-Z]+\w\@[a-zA-Z]+\.\w{3}
esta expresion se lee: seleccione un conjunto de caracteres que contengan mas de una letra mayuscula o minuscula al inicio, que tambien
tenga un guion bajo, una arroba, luego otro conjunto que contenga mas de una letra mayuscula o minuscula, seguido de un punto y finalmente
3 letras





Para hacer facil la labor de buscar una expresion, podemos:
1) usar la pagina https://regexr.com/ para escribir la frase que queremos evaluar, por ejemplo estos dos correos:
jorge_@gmail.com
jorge.valbuena@yahoo.es


2) buscamos varias expresiones regulares en google para validar correos y las pegamos en la pagina, seccion "Expression", para ver cual
nos funciona y listo!!

Para validar cualquiera de los dos correos propuestos, se encontro en google esta expresion regular:
^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$ 


*/




//USEMOS LAS EXPRESIONES REGULARES CON JS
console.log('USEMOS LAS EXPRESIONES REGULARES CON JS')
//Para validar el dato ingresado por el usuario, usemos una expresion regular, pero antes pensemos que datos vamos a evaluar.
//Pidamos que escoja un nombre para saber un dato, por ejemplo, su email, veamos:

let nombreUsuario2 = prompt('para buscar el correo electronico, escriba uno de los siguientes nombres: TITA, JORGE o MARIA')

/*
Es posible que el usuario no escriba el nombre de manera apropiada, puede escribir tita, Tita, Jorge, jorge, jorje, Maria, maria o algun 
numero u otro caracter.
Usemos una expresion regular para que solo permita nombres que esten escritos con letras en mayusculas

usando la pagina https://regexr.com/ obtenemos:
/[A-Z]+/g
esta se lee: valide cualquier expresion que tenga letras mayusculas

Una vez tengamos la expresion, la guardamos en una variable y le pasamos un metodo, siendo el argumento la variable que tiene el nombre 
que digito el usuario. Veamos:

*/



let expresionRegular = /[A-Z]+/g // Esta expresion sirve para que lo ingresado sea solo letras mayusculas sin importar la cantidad

let valor = expresionRegular.test(nombreUsuario2)
console.log(valor)//el resultado es un valor booleano: true si cumple, false si no. Ya con esto podemos hacer el resto del codigo:

if(valor){
    switch(nombreUsuario2){
        case 'JORGE': alert('jorge@yahoo.es')
        break
        case 'TITA' : alert('tita@yahoo.es')
        break
        case 'MARIA' : alert('maria@yahoo.es')
        break
        default:alert('ingrese un nombre valido')//como la expresion regular permite letras mayusculas sin importar la cantidad, debemos
        //validar que el dato ingresado sea el esperamos
    }
}else{alert('ingrese un dato valido')}









//la siguiente expresion permite validar numeros telefonicos con el formato xxx-xxx-xxxx, si no tiene este formato sera false
let nombreUsuario3 = prompt('ingrese un numero de telefono')

expresionRegular = /^[0-9]{3}\W[0-9]{3}\W[0-9]{4}$/g
//se lee: al inicio evalue que tenga un grupo de 3 digitos, luego evalue que tenga un guion medio, luego otro grupo de 3 digitos , luego otro 
//guion medio y finalmente un grupo de 4 digitos.


let validacionTelefono = expresionRegular.test(nombreUsuario2)
console.log(validacionTelefono)






//La siguiente ExpReg evalua que el correo tenga el formato: letras + numeros + @ + dominio, veamos:

let ExpReg = /^[a-zA-Z]+[0-9]+\@[a-zA-Z]+\.\w{3}/

let correoUsuario = prompt('ingrese un correo electronico')

let validacion = ExpReg.test(correoUsuario);

(validacion)? alert('correo valido, gracias') : alert('ingrese un correo con el formato correcto');





























//QUE ES JSON
console.log('QUE ES JSON')
/*
Son las siglas de 'JavaScript Object Notation' es decir, Notacion de objeto de JS. Este formato nos permte intercamiar info de forma rapida y 
eficiente. Veamos un formato JSON:

{
    "key 1" : "value 1",
    "key 2" : "value 2",
    "key 3" : "value 3"
}


Basicamente es un objeto con el par clave : valor. Tanto las claves o keys y el valor estan dentro de comillas dobles.
Veamos el siguiente objeto:
*/



let formatoJson = {
    "nombre":"jorge",
    "profesion":"developer",
    "edad": 41,
    "hobbies" : ["bici", "codigo", "electronica"],
    "direccion" : {"ciudad" : "bogota", "numero de calle" : 22 },
    "casado" : true
}

console.log(formatoJson)// a pesar de tener el formato JSON, es un objeto, JS no lo reconoce como tal

//Para convertirlo en JSON, podemos usar JSON.stringify(), veamos:
let formatoJsonReconocido = JSON.stringify(formatoJson)
console.log(formatoJsonReconocido)// ahora es un JSON

//En la consola podemos ver la diferencia. 

//Dato curioso, si el objeto tiene metodos el json los elimina, veamos:

let formatoJson2 = {
    "nombre":"jorge",
    "profesion":"developer",
    "saludar" : function(){console.log('hola')},
    "edad": 41,
    "hobbies" : ["bici", "codigo", "electronica"],
    "direccion" : {"ciudad" : "bogota", "numero de calle" : 22 },
    "casado" : true
}

formatoJson2.saludar()//en consola mostrara 'hola'
console.log(formatoJson2)//en consola se mostrara el objeto anterior que tiene un metodo

let formatoJsonReconocido2 = JSON.stringify(formatoJson2)//ahora convertimos el objeto en un JSON y lo mostramos:
console.log(formatoJsonReconocido2)//vemos que no se pinto en consola el metodo


//En la siguiente pagina web veremos datos en formato JSON: https://jsonplaceholder.typicode.com/photos
//Alli hay 1 array con 5000 objetos en JSON. Mas adelante trabajemos con estos datos.


//En conclusion, un JSON es un formato para compartir informacion. Parece un objeto de JS pero tiene algunas caracteristicas.
























//QUE SON LAS APIS?
console.log('QUE SON LAS APIS?')

/* Una API es una interfaz entre dos aplicaciones, en otras palabras es la forma en que se pueden consumir datos o recursos de otras 
aplicaciones o servidores. En la red se consiguen APIs gratuitas para consumir y experimentar con ellas, una puede ser 
https://jsonplaceholder.typicode.com/. Alli no solo hay informacion que podemos traer hacia nuestra pagina web, sino que tambien nos indican 
como podemos consumir los datos. Quienes hicieron esta API nos mencionan que "JSONPlaceholder es una API REST en línea gratuita que puede usar 
siempre que necesite datos falsos...para probar cosas localmente"

Estando en esta página y en titulo "Resources" (recursos) encontramos lo que ellos mencionan como 6 recursos comunes: post, comments, albums, 
photos, todos y user

Al explorar en cada uno de estos recursos encontramos un formato con un array de objetos. Este formato recibe el nombre de JSON que traducido 
seria algo como notacion de objetos en javaScript, o un formato ligero y sencillo.

Lo que hace falta es traernos esos datos y, si es posible, pintarlos en consola y trabaja con ellos de alguna forma, pero para hacerlo 
debemos hacer una solicitud HTTP con un estandar actual y basado en promesas: la API fetch. */

//Veamos un ejemplo:

fetch('https://jsonplaceholder.typicode.com/posts')//solicitamos la informacion de la API, pero esta retorna en forma de promesa, por tanto 
//debemos recuperar su promesa resuelta con el método then()
    .then(respuesta=>console.log(respuesta))

/* Si vemos en la consola el resultado de la solicitud, apreciamos un objeto que se llama "Response" (respuesta). Dentro de este objeto 
encontramos propiedades como el status, si es 200 quiere decir "Respuesta estándar para peticiones correctas." o es posible que encontremos 
un 404 si cambiamos la direccion de la página: https://jsonplaceholder.typicode.com/postss (con otra s al final) que significa "Recurso no 
encontrado. Se utiliza cuando el servidor web no encuentra la página o recurso solicitado."  */

//Lo que no encontramos tan fácil es el JSON, es decir la información que nos muestra esta misma direccion pero pegándola en la barra de 
//direcciones del navegador. Para ello debemos convertir la respuesta del then() en un formato JSON usando el método .json(). veamos como:


fetch('https://jsonplaceholder.typicode.com/posts')//solicitamos la informacion de la API, pero esta retorna en forma de promesa, por tanto 
//debemos recuperar su promesa resuelta con el método then()
    .then(respuesta=>respuesta.json())//la respuesta que trae el fetch la pasamos por el método Json() y este retorna una promesa que debemos 
    //recuperar con otro then(). Recordemos que las funciones flecha hacen un retorno automatico si solo hay una linea de codigo despues de la
    // "flecha", como este caso. Si hubiesen mas lineas se tendria que escribir la sentencia "return" sobre la linea que se desea retornar y se 
    //encierra esta linea de codigo con las demas lineas que hayan entre llaves {}
    .then(respuestaConvertida=>console.log(respuestaConvertida))//Ahora sí podemos ver los 100 indices del array que son objetos con 
    //propiedades como body, id, title y userID. Ahora queda usar métodos como el forEach() para recorrer dicho array, por ejemplo.






//Ejercicio 2:
//Mostremos los datos del objeto de un indice que solicite el usuario. En esta ocasion se usará el try y catch
//Seguir el orden 1) y 2):

let url = 'https://jsonplaceholder.typicode.com/posts'
let datoUsuario = parseInt(prompt('ingrese un numero de objeto del 1 al 100'))





//2)
let objetoBuscado = async (datoUsuario)=>{//como no vamos a retornar ningun valor de la funcion async, usamos una excepcion para el manejo del 
    //error, si lo hay:
    //Evaluemos si el dato del usuario el valido, es decir, que cumple la condicion de un numero entre 1 y 100
    if(datoUsuario>0 && datoUsuario<101){//si el dato del usuario es mayor que 0 y menor que 101, entonces...
        try {//la sentencia "try" (tratar, intenta) realiza el codigo que tiene dentro, y su catch (atrapar)...
            let resultadoApi = await fetch(url);//solicitamos la API 
            console.log(resultadoApi)//En este punto podemos evaluar la respuesta del servidor. Podemos usar alguna de estas propiedades para 
            //evaluar la respuesta del servidor, por ejemplo:
            if(resultadoApi.status===200){//si la respuesta tiene el status 200...
                let conversion = await resultadoApi.json()//convertimos el resultado de la API a formato json
                console.log(conversion)//evaluamos el resultado
                //como el formato json es un array de 100 objetos, debemos buscar el objeto que el usuario eligio con el prompt:
                let objetoBuscado = conversion.find(item=>item.id===datoUsuario)
                console.table(objetoBuscado)
            }else{
                console.log('el servidor no funciona')
            }
        
        } catch (error) {//recoge o atrapa un error
            console.log(error)//este catch se activará, por ejemplo, si se comenta la conversion del json o el resultado del fecth
        }
        

    }else{
        console.log('ingrese un valor valido')
        
    }
}


//1) llamamos a una funcion async:
objetoBuscado(datoUsuario)















//Otra API que se puede consumir de forma gratuita es https://rickandmortyapi.com/ Si clicamos sobre alguna de las lineas de informacion que 
//estan junto a las imagenes encontramos datos en forma de formato JSON. En la seccion "Docs" encontramos documentación que nos ayudará a 
//familiarizarnos con los recursos de la API de Rick and Morty y nos mostrará cómo realizar diferentes consultas, para que podamos aprovecharla 
//al máximo.



//EJERCICIO 3 EXPLICACION:
let respuestaDelFetch = fetch('https://rickandmortyapi.com/api/character')
console.log(`la respuesta del fetch es una promesa:`, respuestaDelFetch )//en consola aparece como "Promise {<pending>}"
//para recuperar la promesa del fetch, le pasamos el metodo then():
respuestaDelFetch
    .then((respuestaDelaPromesaDelFetch)=>{
        console.log(`el "resolve" de la promesa del fetch es una respuesta que se debe pasar por el metodo JSON:`, respuestaDelaPromesaDelFetch);
        //para trabajar con el "resolve" del fetch, debemos rescatar los datos con el metodo JSON():
        let conversionAlJson = respuestaDelaPromesaDelFetch.json()
        console.log(`La conversion del JSON es otra promesa:`, conversionAlJson)//en este punto en la consola se mostrara: "Promise {<pending>}" pues el metodo JSON() es otra promesa la cual se debe manejar con un then():
        return conversionAlJson})//retornamos la promesa del JSON para recuperarla con el then()
    .then(promesaDelJson=>console.log(`el "resolve" del JSON es un objeto al que accedemos a la propiedad 'results':`,     promesaDelJson.results))
    .catch((error)=>console.log(error))
    .finally(()=>console.log('fin del programa'));









//Una API interesante es https://nationalize.io/ que indica, en porcentaje, la procedencia de un nombre. Use la API para análisis, segmentación 
//de anuncios, estadísticas demográficas, etc, según los dueños de la API.

// Si se escribe lo siguiente en la barra del navegador https://api.nationalize.io?name=michael nos direcciona a un json donde se muestra un 
//objeto con el nombre, michael en este caso, y en un array de objetos con el id del pais y la probabilidad de que el nombre provenga de dicho 
//pais.

//ejercicio: hacer que el usuario ingrese un nombre para mostrale el pais que tenga la posibilidad mas alta de su origen. 


let nombreUsuario = prompt('ingrese su nombre')
//para evitar datos incorrectos, usamos expresiones regulares:
const expresionRegularParaElNombre = /^[a-zA-Z]+$/


//Para saber si hubo un error en la información del usuario, usamos el condicional if, pero para no usar su complemento else podemos negar la 
//expresion para que el flujo del codigo ingrese al bloque:

if(!expresionRegularParaElNombre.test(nombreUsuario)){//se lee: si la expresion es false, es decir no cumple, se niega para que se convierta en 
    //true e ingrese al bloque.
    //Si se genera un error en la expresion regular, podemos usar la sentencia "throw" (lanzar) que es una excepcion igual que try y catch pero 
    //a diferencia de estas "throw" lanza un error del tipo Uncaught (no atrapado) en la consola, por ejemplo throw "mensaje de error" mostrará 
    //en consola "Uncaught mensaje de error". Ademas, podemos usar el objeto global "Error" que tiene como único argumento un string, veamos:
    throw new Error('escriba un dato valido')//se lee: lance un mensaje de Error instanciando el objeto "Error" con el string "escriba un dato 
    //valido"
    //Recordemos que new Error significa que se instancia un objeto llamado Error con un string 

}

    //Si no hay errores en los datos suministrados por el usuario, se continua con la funcion async:
    let nombre = async (name)=>{
        try {
            
            let APINationalizacion = await fetch(`https://api.nationalize.io?name=${name}`)
            //console.log(APINationalizacion)//en la consola vemos el objeto "response" y dentro de él identificamos la propiedad "ok" con el valor "true". Esta propiedad se puede usar como se usó en un ejercicio anterior la propiedad "status", pero en vez de evaluar un valor como 200, evaluamos el estado de la peticion en true o false.
    
                
            if(!APINationalizacion.ok){//para evitar el uso del else evaluamos el valor de la propiedad ok y lo negamos, de esta forma si es false lo convierte en true y ejecutará lo que esta dentro del bloque:
                throw new Error('hubo un error al cargar la página')//se lee: lance un error instanciando el objeto Error con el string 'hubo un error al cargar la pagina'. Este mensaje se lanzará, por ejemplo, si escribimos en el fetch algo como  https://api.nationalize.io?FALLAname=${name}
            }
            //Si no hubo errores...
            let APIenJson = await APINationalizacion.json()//convertimos el fetch en un json
            //console.log(APIenJson)//mostramos todo el json y evaluamos cual de los indices tiene la posibilidad mas alta
            console.log(APIenJson.country[0])// y ese indice lo mostramos
            
        } catch (error) {
            console.log(error)// este error saldra si se escribe en el fetch https://api.nationalize.ioXXX?name=${name
            // si no se usara el catch, el error en consola seria un "Uncaught (in promise) TypeError: Failed to fetch", indicando que el error de la promesa no se "atrapo" o si hubo un error "al cargar la pagina" tambien será atrapado con este catch. El error que se lanza cuando la expresion regular no se cumple, no aparece como excepcion pues esta fuera del try, catch
        }



       
    }
    
    nombre(nombreUsuario)


    // para tener presente: 
    // El throw, junto con el objeto Error, lanza un mensaje de error en la consola
    // El try se usa para "intentar" ejecutar el codigo y el catch para "atrapar" el error de la promesa del fetch o si hay un throw dentro de 
    //try, catch



























/*
CONCLUSIONES

Las expresiones regulares son patrones o combinacion de caracteres usados para validar informacion. 

Para ello se usan patrones de coincidencia basica, cuantificadores para indicar la cantidad, limites para señalar, por ejemplo, el inicio o 
el final. Tambien tenemos conjuntos de caracteres o grupos.

Para usarlas en JS, guardamos la ExpReg en una variable a la cual le pasamos el metodo test() usando como argumento la variable donde se guardo 
el dato a evaluar devolviendo un true o false.

Un JSON es un formato parecido a un objeto de JS usado para enviar o recibir informacion.

Una API se usa para conectar dos aplicaciones. En el caso de JS las hemos usado para consumir los datos desde un servidor y utilizarlos para 
pintar los datos de interes.

Para ello hemos usado la API FETCH que esta basada en promesas, de tal forma que una vez tengamos los datos los recuperamos con el metodo then 
o usando try-catch


*/


