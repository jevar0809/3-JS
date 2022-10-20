//QUE ES LA ASINCRONIA
console.log('QUE ES LA ASINCRONIA')

//Un sistema es sincrono cuando sus elementos actuan uno despues del otro formando una secuencia ordenada en el proceso, mientras que en 
//un sistema asincrono sus elementos actuan cada uno por su cuenta sin depender de otro.
//En JS pueden existir porciones de codigo que no se ejecuten en una secuencia. Por ejemplo:


//Los siguientes console.log se van a ejecutar de manera sincrona, es decir, uno acaba y sigue el otro haciendo que haya un orden en la 
//respuesta:

console.log('SIN RETARDOS')
console.log('hola, mi ')
console.log('nombre es ')
console.log('Jorge Valbuena')

//Ahora pensemos en que cada console se va a ejecutar en diferente orden gracias a un tiempo de retardo:

setTimeout(()=>{
    console.log('CON RETARDO')
    console.log('nombre es ')
}, 1000)//estos console se ejecutaran un segundo despues



setTimeout(()=>{
    console.log('Jorge Valbuena')

}, 3000)//este console se ejecutara 3 segundos despues 


setTimeout(()=>{
    console.log('hola, mi ')
}, 2000)// y este ultimo 2 segundos despues 


//La pregunta es ¿que console se pintara primero, luego segundo y por ultimo el tercero?
//Sin lugar a dudas se pintara primero el console.log('nombre es '),luego console.log('hola, mi ') y por ultimo console.log('Jorge Valbuena')
//Dejando asi un mensaje poco ordenado, no existe sincronia entre ellos.

//Pues bien, para que cada mensaje se pinte en consola de manera que formen una frase coherente, vamos a usar nuestras ya conocidas
//funciones callbacks. Veamos: 


setTimeout(()=>{//este rertado es para que este ejercicio no se choque con el de arriba
    console.log('CON CALLBACKS')

//Tenemos los mismos consoles con su respectivos retardos, pero estan dentro de funciones que reciben un callback y retornamos por ellos
//las frases correspondientes

    function asincrono_1(callback){
        setTimeout(()=>{
            return callback('hola, mi ')}, 2000)
    }
    
    function asincrono_2(callback){
        setTimeout(()=>{
            return callback('nombre es ')}, 1000)
    }
    
    function asincrono_3(callback){
        setTimeout(()=>{
            return callback('Jorge Valbuena')}, 3000)
    }



//Ahora, llamaremos a cada funcion y es aqui donde esta el "truco" para que, independiente del tiempo, se pinte en consola el mensaje
//correspondiente: 
//Primero llamamos a la funcion que contiene la frase inicial pasandole como argumento una funcion con el objetivo de recuperar el string
//que se pintara primero en la consola. Acto seguido llamamos la siguiente funcion que tiene el mensaje que continua pasandole una 
//funcion para recuperar el string que sigue. Y una vez pinte en consola dicho string, finalmente llamamos la ultima funcion que contiene la 
//ultima frase de la oracion para pintarla en consola:



    asincrono_1(data=>{
        console.log(data)//esta frase aparecera 2 segundos despues
        asincrono_2(data=>{
            console.log(data)//esta frase aparecera 1 segundo despues
            asincrono_3(data=>{
                console.log(data)//esta frase aparecera 3 segundos despues
            })
        })
    })
        
//En otras palabras, lo que se hizo fue controlar el orden de aparicion de cada frase ejecutandola en el momento adecuado, pero respetando
//el tiempo que cada frase se demora haciendo que la asincronia se vuelva una sincronia.    :)  
    
    

}, 5000)






//Veamos otro ejemplo usando 3 bases de datos. El objetivo es pedirle a un usuario un id para mostrarle en consola el nombre, la 
//profesion y los años de antiguedad


const BASE_DATOS_NOMBRE = [
    {
        ID: 1, 
        NOMBRE: 'Jorge', 
        
    }, 
    {
        ID:2, 
        NOMBRE: 'Enrique',
        
    }, 
    {
        ID: 3, 
        NOMBRE: 'Sara',
        
    }

]

const BASE_DATOS_PROFESION = [
    {
        ID: 1,
        PROFESION: 'Developer'
        
    }, 
    {
        ID: 2,
        PROFESION: 'Diseñador'

    }, 

    {
        ID:3,
        PROFESION: 'Maquetadora'

    }

]


const BASE_DATOS_ANTIGUEDAD = [
    {
        ID: 1,
        'ANTIGUEDAD EN AÑOS': 4
    },
    {
        ID: 2,
        'ANTIGUEDAD EN AÑOS': 2
    },
    {
        ID: 3,
        'ANTIGUEDAD EN AÑOS': 1
    }
]

//solicitamos un id al usuario:
let usuario = parseInt(prompt('ingrese un numero ID para buscar un colaborador'))

if(usuario>0 && usuario<4){//evaluamos si el dato del usuario es valido

    function traerNombre(id, callback){
        setTimeout(()=>{
            console.log('EJERCICIO CON BASES DE DATOS')
            let idBuscado = BASE_DATOS_NOMBRE.filter(data=>data.ID==id)
            return callback(idBuscado)
        }, 10000)//esta funcion se demorara 10 segundos
    }

    
    function traerProfesion(id, callback){
        setTimeout(()=>{
            let idBuscado = BASE_DATOS_PROFESION.filter(data=>data.ID==id)
            return callback(idBuscado)
        }, 8000)//esta funcion se demorar 8 segundos
    }


    function traerAntiguedad(id, callback){
        setTimeout(()=>{
            let idBuscado = BASE_DATOS_ANTIGUEDAD.filter(data=>data.ID==id)
            return callback(idBuscado)
        }, 7000)//esta funcion se demorara 7 segundos
    }


//Teniendo en cuenta el tiempo que se demora cada funcion, podemos concluir que se terminara en menor tiempo aquella que menciona la
//antiguedad, seguido aparecera la que menciona la profesion y por ultimo aparecera el nombre del empleado. Pero no tiene sentido este orden,
//es mejor que indique primero el nombre, luego su profesion y por ultimo su tiempo de antiguedad. 
//Por tal motivo vamos llamar a las funciones en un orden para que se logre la oracion deseada: primero llamamos la funcion que presentara 
//el nombre, luego llamamos la funcion que traiga su profesion y finalmente la antiguedad. Claro esta que cada funcion se seguira ejecutado
//en un tiempo de retardo, solo manejaremos su momento de aparicion:



    traerNombre(usuario,data=>{
        console.log(`el nombre es ${data[0].NOMBRE}`)
        traerProfesion(usuario, data=>{
            console.log( `su profesion es ${ data[0].PROFESION}`)
            traerAntiguedad(usuario, data=>
            console.log(`y su antiguedad es de ${data[0]['ANTIGUEDAD EN AÑOS']} años`))
        })
            
    })





} else{
    alert('ingrese un dato valido')
}






















//MANEJO DE ERRORES
console.log('MANEJO DE ERRORES')
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
    
//Hacer una funcion que cuando se pase un id cualquiera devuelva una funcion callback con la profesion del usuario, pero si el id no existe 
//devuelva el mensaje de error, seguir el 1) y el 2):

//2) funcion:
function ocupacion(id, callback){//se lee: la funcion recibe el id del usuario y una funcion para recuperar un error o la profesion buscada
    let postBuscado = POST.filter((item)=>item.id===id)//se filtra si el id del objeto es igual al id del usuario
    console.log(postBuscado)//veremos que se muestra un array que puede tener elementos o puede estar vacio
    //luego evaluamos si el dato buscado es valido:
    if(postBuscado.length){//se lee: si la longitud del postBuscado no es 0, es decir no es falso...
    //....enviamos por el callback la propiedad de interes del objeto filtrado y un null para el parametro de error:
       callback(null, postBuscado[0].profesion)
    }
    else(//pero si la longitud del array se evalua como 0, es decir, como falso, 'llenamos' el 1er parametro del callback con el string, el 
    //otro parametro será lleno de....nada
       callback('no se encontro el numero de id')
)}



//1)
let datoUsuario = parseInt(prompt('ingrese un numero'))

//hacer la llamada a una funcion pasandole como parametros el id del usuario y una funcion callback usada para devolver el dato solicitado o 
//el error:
//El callback tiene dos parametros: error y profesion. El orden es asi, ya que si no hay error este parametro sera llenado con un 'null' y el 
//otro parametro sera llenado con el dato que estamos buscando, pero si hay un error se llenará el parametro error con el texto que le enviemos 
//y como no hay mas datos, el otro parametro quedara libre:
ocupacion(datoUsuario, (error, profesion)=>{//se lee: enviemos el dato del usuario, a su vez recibimos un error o una profesion con el callback
    if(error){//recordemos que un 'null' es leido como falso, lo que hara que se ejecute el 'else', pero si es un string sera leido como 'true'
        //lo que hara que se ejecute el console
        console.log(error)
    }
    else(console.log(profesion))
    // en ambos casos podemos imprimir los dos parametros, pero no es necesario
})
 



















//QUE ES CALLBACK HELL (EL INFIERNO DE LOS CALLBACK)?
console.log('QUE ES CALLBACK HELL (EL INFIERNO DE LOS CALLBACK)?')

//Analicemos el siguiente codigo:

let otraOcupacion = (datoUsuario, callback) =>{
    let busqueda = POST.filter(item => item.id === datoUsuario);
    (busqueda.length)? callback(null, busqueda[0].profesion):callback('este id no existe')
}

//se le llama el infierno de los callback el hecho de hacer llamadas anidadas:
//se hace la primer llamada:
    otraOcupacion(1, (error, profesion)=>{//primera llamada
        (error)? console.log(error): console.log(profesion);
        otraOcupacion(2, (error, profesion)=>{//una vez tengamos el resultado de la primera llamada, hacemos otra llamada
            (error)? console.log(error): console.log(profesion);
            otraOcupacion(3, (error, profesion)=>{//luego anidamos otra llamada
                (error)? console.log(error): console.log(profesion);
                otraOcupacion(4, (error, profesion)=>{//luego anidamos otra llamada y asi con un sin numero de llamadas
                    (error)? console.log(error): console.log(profesion);
                }) 
            })
        })
    })
// lo interesante es la forma que se va generando con todas las llamadas anidadas, un especie de piramide acostada hacia la derecha.
//Podemos ver mas ejemplos en google, viendo imagenes de callbacks hell   








/*
CONCLUSION 
console.log('CONCLUSION')

Podemos usar callbacks para manejar porciones de codigo que se ejecutan en diferentes tiempos, de esta forma manejamos la secuencia de 
ejecucion.


El truco esta en recuperar los datos necesarios con funciones callbacks. 
Llamamos una funcion pasandole un callback y dentro de este callback llamamos otra funcion callback y dentro de este callback llamamos otra 
funcion callback y asi sucecivamente... de esta forma traemos el codigo que necesitamos en una secuncia.

El callback hell es el efecto que tiene la anidacion de funciones callback formando una piramide hacia la derecha, haciendo que en codigos mas 
complejos sea poco util su lectura.



Veamos otra forma de manejar la asincronia....


*/

