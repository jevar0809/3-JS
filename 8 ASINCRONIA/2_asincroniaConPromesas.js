//ASINCRONIA CON PROMESAS
console.log('ASINCRONIA CON PROMESAS')


//Consideremos el siguiente array de objetos:
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
    },
    {
        id:null,
        nombre: null,
        profesion: null
    }

]



//Pintemos en consola las siguientes lineas:
console.log(`el nombre del colaborador es: ${POST[0].nombre} y su id es:`)
console.log(POST[0].id, `y su profesion es:`)
console.log(POST[0].profesion)


//Ahora imaginemos que al solicitar los mismos datos va haber un tiempo en aparecer cada una de las respuestas, algo como:

setTimeout(()=>{
    console.log(`el nombre del colaborador es: ${POST[0].nombre} y su id es:`)
}, 2000)// despues de 2 segundos aparecerá en consola el nombre


setTimeout(()=>{
    console.log(POST[0].id, `y su profesion es:`)
},500)//despues de 0.5 segundo aparecerá el id...

setTimeout(()=>{
    console.log(POST[0].profesion)
},100)// y despues de una decima parte de segundo aparecerá la profesion 

//¿como podemos manejar la informacion para que aparezca en el orden deseado usando promesas?
//Una promesa es, como en la vida diaria, una accion que tendra 3 posibles resultados: promesa pendiente, promesa resuelta o promesa rechazada.

//En JS una promesa se crea usando un objeto constructor que tiene como nombre "Promise" y pasándole una función que recibe dos parámetros que 
//normalmente se llaman "resolve" y "reject" y sirven para manejar el resultado de la promesa resuelta o rechazada respectivamente:
new Promise((resolve, reject) => {resolve('la respuesta de la promesa'), reject('el rechazo de la promesa')})

//Si la promesa es resuelta entonces devolvemos en "resolve" dicha promesa, si es rechazada entonces devolvemos en "reject" el valor de la 
//promesa rechazada, por ejemplo:

let valor = Math.round(Math.random())// generamos un numero aleatorio entre 0 y 1

//en una variable guardamos el resultado de la promesa:
let promesa = new Promise((resolve, reject)=>{
    if(valor){//dependiendo del numero aleatorio la promesa se cumple o se rechaza
        resolve('promesa resuelta')
    }else{
        reject('promesa rechazada')

    }
})

//La promesa pendiente seria:
console.log(promesa)

//Para recuperar el estado resuelto de la promesa debemos usar el metodo then() y para el estado rechazado el metodo catch():
promesa
    .then((resultadoDeLaPromesaResuelta)=>console.log(resultadoDeLaPromesaResuelta))
    .catch((resultadoDeLaPromesaRechazada)=>console.log(resultadoDeLaPromesaRechazada))




//Volvamos al problema de presentar la informacion en orden, independiente del tiempo de ejecucion de cada console:

setTimeout(()=>{
    console.log(`el nombre del colaborador es: ${POST[0].nombre} y su id es:`)
}, 2000)// despues de 2 segundos aparecerá en consola el nombre


setTimeout(()=>{
    console.log(POST[0].id, `y su profesion es:`)
},500)//despues de 0.5 segundo aparecerá el id...

setTimeout(()=>{
    console.log(POST[0].profesion)
},100)// y despues de una decima parte de segundo aparecerá la profesion 



let usuario = +prompt('ingrese un numero que este entre el 0 y el 3')
//En primer lugar declaramos todas las promesas implicadas, y cada una retornará el "resolve" cuando se cumpla el tiempo:

let nombre = ()=>{//esta funcion flecha retornara una promesa...
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            
            if(POST[usuario].nombre){//si el nombre del usuario no es 'null'...
               
                resolve(`el nombre del colaborador es: ${POST[usuario].nombre} y su id es:`);//...resolvera la promesa

            } else{//si el nombre del usuario es 'null'...

                reject('id no existe')//... regresara el rechazo de la promesa
            }

        }, 2000)// despues de 2 segundos se retorna la promesa
    })
}


let id = ()=>{//esta funcion retornara una promesa...
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve(`${POST[usuario].id} y su profesion es:`)
        },500)//despues de 0.5 segundo se retorna la promesa

    })
}

let profesion = ()=>{
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve(POST[usuario].profesion)
        },100)// y despues de una decima parte de segundo se retornará la promesa
        
    })

}


//Ahora llamamos la funcion que queremos que sea la primera que se pinte en consola.
//Llamamos la funcion 'nombre'. A esta se retorna la promesa y para recuperarla usamos su metodo 'then()'. Pintamos en consola el 
//resultado y luego llamamos la siguiente funcion que necesitamos para pintar el mensaje correspondiente, id(). Como retorna una promesa,le 
//pasamos nuevamente el metodo then(),pintamos el resultado y finalmente llamamos la ultima funcion retornando una promesa mas y recuperando 
//el resultado con el metodo then(). 
//Si en la primera funcion se retorna el 'reject' se usara el metodo 'catch()' para pintar en consola el error
nombre()
    .then(resultadoDeLaPromesa=>{
        console.log(resultadoDeLaPromesa)
        id().then(resultadoDeLaPromesa=>{
            console.log(resultadoDeLaPromesa)
            profesion().then(resultadoDeLaPromesa=>{
                console.log(resultadoDeLaPromesa)
            })
        })
    })
  
    .catch(error=>console.log(error))

//De esta forma cada promesa se cumplirá y manejamos en qué momento se presentará cada console


















//otro ejercicio:
//Tenemos dos bases de datos, una con un nombre y un identificador y otra con la profesion dependiendo del identificador:


const BASE_DATOS_NOMBRE = [
    {
        'ID profesion': 1, 
        'Nombre colaborador': 'Jorge', 
        
    }, 
    {
        'ID profesion':2, 
        'Nombre colaborador': 'Enrique',
        
    }, 
    {
        'ID profesion': 1, 
        'Nombre colaborador': 'Sara',
        
    }

]


const BASE_DATOS_PROFESION = 
{
    1: 'Developer',
    2: 'Diseñador'
        
}


//Pedimos un nombre:
let nombreColaborador = prompt('Por favor escriba el nombre del colaborador para saber su profesion: Jorge, Enrique o Sara')


//esta funcion retornara una promesa con el objeto que tiene el nombre que digito el usuario:
let Id = (colaborador)=>{
    return new Promise((resuelto, rechazado)=>{
        setTimeout(()=>{
            let id_base_dato = BASE_DATOS_NOMBRE.filter(item=>item["Nombre colaborador"] === colaborador)
            if(id_base_dato.length){//si el array tiene algun elemento es porque filtro algo, sino....
                resuelto(id_base_dato)
            }else{//... enviara un error
                rechazado('digite un nombre sugerido o digitelo respetando las mayusculas')
            }
         
        }, 2000)
    })
}



let Profesion = (id)=>{
    return new Promise((resuelto, rechazado)=>{
        setTimeout(()=>{
            resuelto(BASE_DATOS_PROFESION[id])
        }, 1000)
    })
}



Id(nombreColaborador)
    .then(data =>Profesion(data[0]['ID profesion']))
    .then(item=>alert(`${nombreColaborador} es ${item}`))
    .catch(error=>alert(error))

//¿Porque los then() pertenecen a la llamada id()? 
//El primer then() recupera la promesa, es decir, el objeto filtrado (en 'data'), y llama a la funcion 'profesion()' retornando el 
//resultado a la llamada Id(). Recordemos que en una funcion flecha el retorno es automatico con una linea de codigo.
//Para recuperar la promesa que trajo la funcion 'Profesion()', y que se retorno a la llamada Id(), debemos pasar un then(). El 'item' de 
//este then() trae la profesion que buscamos.
//El catch tambien pertenece a la llamada Id(), por el retorno del 'rechazado'
























//USO DEL PROMISE.ALL Y PROMISE.ALLSETTLED
console.log('USO DEL PROMISE.ALL Y PROMISE.ALLSETTLED')
//Otra situacion en la que podemos usar las promesas es la siguiente. En el ejercicio anterior necesitabamos ordenar los datos para pintarlos 
//en consola con el orden deseado, pues cada console se pintaba en distintos tiempos dando incongruencia en la informacion. Pero no siempre una 
//respuesta va a depender de otra, por ejemplo: pintemos en consola sólo las profesiones de la base de datos:

//Esta promesa retornará en su "resolve" la profesion del objeto que tenga el id:1
let profesion1 = (data)=>{
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            let id = POST.filter(objeto=> objeto.id===data)
            console.log(Boolean(id[0]))//evaluemos que boleano el id[0]
            id[0]? resolve(id[0].profesion):reject('no existe el id')
        }, 2000)
    })
}

//Esta promesa retornará en su "resolve" la profesion del objeto que tenga el id:2
let profesion2 = (data)=>{
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            let id = POST.filter(objeto=> objeto.id===data)
            id[0]? resolve(id[0].profesion):reject('no existe el id')
        }, 500)
    })
}

//Esta promesa retornará en su "resolve" la profesion del objeto que tenga el id:3
let profesion3 = (data)=>{
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            let id = POST.filter(objeto=> objeto.id===data)
            id[0]? resolve(id[0].profesion):reject('no existe el id')
        }, 1000)
    })
}

//Como la respuesta de cada promesa es independiente, pues solicita solo la profesion, podemos llamarlas al tiempo con el método all(), método 
//que pasa como argumento un array de las promesas a ejecutar:
Promise.all([profesion1(1), profesion2(2), profesion3(3)])
    .then(respuesta=>console.log(respuesta))//de igual forma la respuesta será otro array con las promesas resueltas
    .catch(error=>console.log(error))

//Pero si cada promesa tiene distintos tiempos de ejecucion...¿cuanto tiempo tardará el array de la respuesta?
//Se tardará la promesa que tenga mas tiempo, es decir 2 segundos

//Hay que tener en cuenta que si le pasamos al array del promise.all un argumento que retorne el reject de la promesa, las demas promesas no se 
//ejecutaran, por ejemplo: Promise.all([profesion1(1), profesion2(2), profesion3(3), profesion3(4)]), como el id:4 no existe se retornará el 
//reject y se capturará con el catch, pero no se pintaran las demas promesas.
//Para superar esta situacion usaremos el metodo allSettled(), veamos:


Promise.allSettled([profesion1(1), profesion2(2), profesion3(3), profesion3(4)])
    .then(respuesta=>{console.log('Esta es la respuesta del .allSettled: '); console.log(respuesta)})


//En console veremos un array de 4 objetos (las 4 promesas) y las propiedades de estos objetos son: 'status' y 'value'
//Cuando una promesa se resuelve, el 'status' es 'fulfilled', cuando no se resuelve sera 'rejected'.
//En 'value' veremos el contenido de las promesas cumplidas, pero cuando no se cumple alguna, en vez de la propiedad 'value' esta la 
//propiedad 'reason' que tendra la razon indicada en el rechazo.
//Ya queda hacer un filtro para quedarnos solo con los objetos 'fulfilled'
























//HACER DOS TAREAS "SIMULTANEAS"
console.log('HACER DOS TAREAS "SIMULTANEAS"')
//Mientras JS espera un promesa podemos ejecutar una funcion, por ejemplo:


//funcion con la promesa:
function otraPromesa(numero){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            if(numero){
                resolve('promesa ejecutada')
            }else{
                reject('promesa rechazada')
            }

        }, 5000)

    })

}

//funcion que se ejecutara mientras la promesa se cumple:
let ciclo = (data) =>{
    for(data;data>0;data--){
       console.log(data)
    }

}

//llamamos una promesa
otraPromesa(1).then(resultado=>console.log(resultado)).catch(error=>console.log(error))

//mientras se ejecuta la promesa, llamamos otra funcion:
ciclo(25000)

//De esta forma hacemos una tarea mientras se ejecuta otra.
//¿Que pasa si el tiempo de la promesa se sube de 5 a 8 segundos o se baja de 5 a 3 segundos?
















//OTRA FORMA DE USAR LAS PROMESAS
console.log('OTRA FORMA DE USAR LAS PROMESAS')

const OtraFormaDePromesa = Promise.resolve(1)//con un argumento "1" o "2" se activa el catch, con un argumento mayor a 2 se elimina


OtraFormaDePromesa
    .then(data1=>data1*4)
    .then(data=>{
        console.log(data)
        if(data<9){
            return Promise.reject('hubo un error')
        }
       })
    .catch(error=>console.log(error))




















/*
CONCLUSION

Una promesa tambien se usa para manejar las asincronias en JS, de esta forma podemos formar la secuencia que requerimos.

Una promesa es una funcion constructora que tiene un callback con dos parametros, uno para la solucion y otro para el rechazo de una accion.

La solucion de la promesa sera recuperada con el metodo then() que tiene un callback. De igual forma se usa el metodo catch() para recuperar el 
rechazo de la misma.


Podemos usar el metodo promise.all() para recuperar todas las promesas que necesitemos y que no dependan entre ellas


Ahora veamos otra forma de manejar la asincronia en JS     :)

*/


