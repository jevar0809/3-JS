//ASINCRONIA CON LAS FUNCIONES ASYNC Y AWAIT
console.log('ASINCRONIA CON LAS FUNCIONES ASYNC Y AWAIT')

//Antes de hablar de las funciones ASYNC y AWAIT, veamos el manejo de excepciones.


//MANEJO DE EXCEPCIONES
console.log('MANEJO DE EXCEPCIONES')
/*Cuando JS indentifica un error de algun tipo, en la consola se mostrara dicho error y para la ejecucion del codigo, veamos:

console.log('inicia el codigo')
let prueba = 'string'  
console.log(prueba())// aqui el codigo para y saca el siguiente error: Uncaught TypeError: prueba is not a function, porque 'prueba' no es una 
//funcion
console.log('termina el codigo')// esta linea no se mostrara, pues el codigo fue detenido


Para que JS continue ejecuando el codigo, debemos hacer una excepcion de dicho error con las sentencias try, catch. Veamos:
*/

console.log('inicia el codigo')// pinta en consola este string

try {//con el bloque 'try' le dicemos a JS 'intente' hacer esto:
    let prueba = 'string'   //se declara una variable con un string
    console.log(prueba())// aqui el codigo saca el siguiente error: Uncaught TypeError: prueba is not a function, porque 'prueba' no es una 
    //funcion, pero este error es capturado por el bloque 'catch' 
} catch (error) {
    console.log(error)//en consola saldra el error pero no detendra el codigo, pues se ejecuta la linea que sigue fuera del bloque 'catch'
}

console.log('termina el codigo')// este codigo se ejecuta porque JS hizo una excepcion del error.



/*
Veamos otro ejemplo:
La sentencia 'throw' lanza un error en consola con el mensaje que le indiquemos:

throw new Error('ups!!')    mostrara: Uncaught Error: ups!!
throw 'error'               mostrara: Uncaught error

Si usamos alguna de estas sentencias, detendriamos el codigo que se esta ejecutando. Veamos como evitarlo:
*/

try {
    throw new Error('ups!!')//lanzamos un error instanciando el objeto Error()
} catch (error) {
    console.log(error)//hacemos la excepcion 
}



try {
    throw 'error'//lanzamos un error con el string 'error'
} catch (error) {
    console.log(error)//hacemos la excepcion
}






//Entendiendo las sentencias try, catch, consideremos el array del tema anterior:

const POST = [
    {
        id:1,
        nombre: 'Jorge',
        profesion: 'diseñador'
    },
    {
        id:2,
        nombre:'stephanny',
        profesion: 'backend developer'
    },
    {
        id:3,
        nombre: 'Enrique',
        profesion: 'frontend developer'
    }
]

/*
Vimos que si solicitamos datos de forma asíncrona los podemos "organizar" usando promesas. 
funcion().then().then().then().catch()
*/



//Otra forma de hacerlo es usando las funciones "async" "await". 
//Iniciemos con un codigo sencillo, seguiendo el orden 1, 2 y 3:

let valor = Math.round(Math.random())// generamos un numero aleatorio entre 0 y 1
//3)
function resultadoPromesa(data){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            if(data){
                resolve('promesa resuelta')
            }else{
                reject('promesa rechazada')
            }

        }, 2000)

    })
}
//2) 
async function hacerPromesa(data){
    let resultadoDeLaPromesa = await resultadoPromesa(data)//en este punto llamamos la funcion, que tiene la promesa, con la palabra reservada 
    //"await" y esperamos el valor retornado de la misma que será guardado en la variable "resultadoDeLaPromesa"
    console.log(resultadoDeLaPromesa)//si el resultado fue la promesa resuelta, se pintará en consola.
    
 
}
//1) invocamos la funcion async con un argumento que en este caso es un número aleatorio generado con Math:
hacerPromesa(valor)



//El problema surge cuando la promesa es rechazada (es decir, devuelve el valor del "reject") y en la consola aparece un error del tipo 
//"Uncaught (in promise) promesa rechazada". Lo que sucede es que el "await" solo recibe la promesa resulta, pero la rechazada toca darle otro 
//manejo, el manejo con excepciones, es decir con try y catch. Seguir el orden 1, 2 y 3:


//3)
function resultadoPromesa(data){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            if(data){
                resolve('promesa resuelta')
            }else{
                reject('promesa rechazada')
            }

        }, 2000)

    })
}
//2) 
async function hacerPromesa(data){
    try {//para manejar el error que genera la promesa rechazada, usamos la excepcion con try y catch
        let resultadoDeLaPromesa = await resultadoPromesa(data)//en este punto llamamos la funcion, que tiene la promesa, con la palabra 
        //reservada "await" y esperamos el valor retornado de la misma que será guardado en la variable "resultadoDeLaPromesa"
        console.log(resultadoDeLaPromesa)//si el resultado fue la promesa resuelta, se pintará en consola.
        
    } catch (error) {//si la promesa es rechazada, es decir retorna el valor del "reject" este se captura con una excepcion 
        console.log(error)
    }
}
//1) invocamos la funcion async con un argumento que en este caso es un número aleatorio generado con Math:
hacerPromesa(valor)















//Ahora, si queremos retornar un valor de la funcion "async", debemos tener presente que este será otra promesa y por tanto se debe manejar 
//con el conocido "then()" y catch(). Veamos, seguir el orden 1), 2) y 3):

//3)
function resultadoPromesa(data){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            if(data){
                resolve('promesa resuelta')
            }else{
                reject('promesa rechazada')
            }

        }, 2000)

    })
}
//2) 
async function hacerPromesa(data){
    return resultadoDeLaPromesa = await resultadoPromesa(data)//en este punto llamamos la funcion, que tiene la promesa, con la palabra 
    //reservada "await" y esperamos el valor retornado de la misma que será guardado en la variable "resultadoDeLaPromesa", pero la retornamos 
    //a la funcion "hacerPormesa(valor)"
}
//1) invocamos la funcion async con un argumento que en este caso es un número aleatorio generado con Math:
hacerPromesa(valor)
    .then(retornoConLaPromesa=>console.log(retornoConLaPromesa))//como el retorno de la funcion async es otra promesa, usamos el método then() 
    //para recuperar la promesa resulta.
    .catch(error=>console.log(error))// y el método catch() para la promesa rechazada





//Hagamos un ejercicio mas complejo. Consiste en traer la profesion del id que marquemos en el prompt:
//Declaremos dos variables:
var datoUsuario = parseInt(prompt('ingrese el dato del usuario')), 
ocupacionBuscada;

//seguir el orden 1), 2) y 3):
//3) esta funcion sera la que devuelva el resultado de la promesa:
function yaBusco(id){//se lee: la funcion "yaBusco" recibe como parámetro el dato del usuario
    return new Promise((promesaResuelta, promesaRechazada)=>{//se lee: retorne una promesa
//en este punto colocaremos un setTimeout para simular una espera de 2 segundos con el "servidor"
    setTimeout(()=>{
    let profesionBuscada = POST.find(item=>item.id===id)//se lee: en la variable "profesionBuscada" guarde el resultado de buscar en el array 
    //POST, usando el metodo find(), el id que sea estrictamente igual al parametro "id" de la funcion "yaBusco".
        if(profesionBuscada){//se lee: evalue si la variable "profesionBuscada" es verdadera o falsa, en otras palabras, que no sea null ni 
            //undefined.
            promesaResuelta(profesionBuscada.profesion)//si es verdadera, retorne la promesa con el valor de "profesionBuscada.profesion"
        }
        else(promesaRechazada('id no existe'))//si es falsa, retorne la promesa con 'id no existe'
    }, 2000)//una vez pasados los 2 segundos se ejecuta la funcion flecha
})}



//2)esta funcion asincrona puede ser flecha: let ocupacion = async (id)=> ocupacionBuscada = await yaBusco(id) 
async function ocupacion(id){//se lee: la funcion "ocupacion" es asincrona
 return ocupacionBuscada = await yaBusco(id)//se lee: retorno la variable "ocupacionBuscada" con el valor de la promesa que se esperó (await) 
 //al ejecutar la funcion "yaBusco"
 
 //No es necesario retornar la "ocupacionBuscada", tambien la podemos pintar en la consola directamente:
 //ocupacionBuscada = await yaBusco(id);//como la funcion 'yaBusco' retorna una promesa...¿que se guardará en la variable 'ocupacionBuscada'... 
 //el valor de promesaResuelta o el valor de promesaRechazada?
//console.log(`esto es lo que trajo el await: ${ocupacionBuscada}`);
 /*
 Retorna el valor de la promesa resuelta.
Pero como no se retorna ningun valor a la llamada de "ocupacion(datoUsuario)", el then() daran 'undefined', mientras que el catch() se 
//ejecutará. Esto muestra que el await solo trae el valor de la "promesa resuelta", el valor de la promesa rechazada se tiene que manejar como 
//una exepcion con el catch, para que no aparezca como error en la consola.
*/
}




//1) invocamos una funcion que será la funcion asincrona o async con el dato del prompt:
ocupacion(datoUsuario)
//con el then y el catch se visualizan las respuestas de la promesa, con el finally se muestra un resultado independiente de la promesa:
    .then(resultado=>console.log(`la profesion buscada es ${resultado}`))
    .catch(error=>console.log(`la profesion no se encontro porque ${error}`))
    .finally(()=>{console.log('fin')})
/*
En conclusion:
el async y el await son dos funciones que se deben llamar, primero se llama a la funcion async y esta a su vez llama la funcion await que será 
un función que retorna una promesa.
El await trae el valor de la promesa resuelta, mientras que el valor de la promesa rechazada se debe manejar con el catch
*/








//Tambien podemos manejar la asincronia de los datos de una mejor manera. Pintemos en consola las siguientes lineas:


setTimeout(()=>{
    console.log(`el nombre del colaborador es: ${POST[0].nombre} y su id es:`)
}, 2000)// despues de 2 segundos aparecerá en consola el nombre

setTimeout(()=>{
    console.log(POST[0].id, `y su profesion es:`)
},500)//despues de 0.5 segundo aparecerá el id...

setTimeout(()=>{
    console.log(POST[0].profesion)
},100)// y despues de una decima parte de segundo aparecerá la profesion 


//Al hacerlo notamos que los datos no se pintan de manera congruente. Para hacerlo usemos las funciones async y await:

let traerNombre = ()=>{
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            if(POST[0].nombre){
                resolve(`el nombre del colaborador es: ${POST[0].nombre} y su id es:`)
            }
        }, 2000)// despues de 2 segundos aparecerá en consola el nombre
        

    })

}



let traerId = ()=>{
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            if(POST[0].id){
                resolve(`${POST[0].id}, y su profesion es:`)

            }

        }, 500)
    })

}

let traerProfesion = ()=>{
    return new Promise((resolve, reject)=>{
    setTimeout(()=>{
        if(POST[0].profesion)
            resolve(POST[0].profesion)
        },100)// y despues de una decima parte de segundo aparecerá la profesion 
        
    })
}



let pintarEnConsola = async ()=>{
    let id = await traerId()
    let nombre = await traerNombre()
    let profesion = await traerProfesion()
    //Es interante que cada variable contiene el dato que devolvio cada promesa y el orden para que aparezca en la consola ya no depende que se 
    //deba llamar de forma anidada, como se hizo solo con el uso de promesas en el tema anterior, sino que depende de como lo organicemos en el
    // console:
    console.log(nombre, id, profesion)
    console.log(id, nombre, profesion)
    console.log(profesion, nombre, id)
}

pintarEnConsola()













/*
CONCLUSION

Para que un error no pare el proceso de ejecucion del codigo y hagamos una excepcion, usamos los bloques try, catch

Con el bloque try 'intentamos' que se ejecute el codigo, pero si este genera un error lo capturamos en el bloque catch
De esta forma lo que sigue despues de este 'error' se ejecutara. 



ASYNC es una funcion que espera que se ejecute la funcion que lleva la palabra AWAIT esperando una promesa.
NOTA: la funcion ASYNC debe tener una funcion AWAIT y esta debe esperar una promesa.

la funcion AWAIT trae la promesa resuelta, pero si dicha promesa falla debemos usar excepciones para capturar el error


El retorno que hagamos de la funcion ASYNC sera una promesa, por tal motivo la llamada debe recuperarla con los metodos then() y catch() para sus respectivos casos.

*/



