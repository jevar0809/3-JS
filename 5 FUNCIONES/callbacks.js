//LOS CALLBACKS
console.log('LOS CALLBACKS')
//Un callback es una funcion que se pasa por parámetro. Seguir orden 1) y 2):


//2) funcion que recibe los argumentos de la llamada "miNombre":
let miNombre = (nombre, callback)=>{//una vez se ejecute la llamada de la funcion, el parámetro "nombre" se cargará con el string de la llamada,
//es decir "jorge", y el parámetro "callback" se cargará con la funcion de la llamada quedando así como una funcion flecha: 
//callback = (data)=>{console.log(`mi nombre es ${data}`)}
//Para asignarle un argumento al parámetro de la funcion "callback", solo basta con llamarla con dicho argumento: 
    callback(nombre)//se lee: cargue el argumento "nombre", que en este caso es el que contiene el string "jorge", en el parametro de la funcion
    // "callback" es decir en 'data'.
//De esta forma, cuando se ejecute la función que está como argumento en la llamada "miNombre", mostrará el string "jorge" que fue el que se 
//cargo en el parámetro "data"
}

//1) llamada a la funcion "miNombre":
miNombre('jorge', (data)=>{console.log(`mi nombre es ${data}`)})//la llamada a la función "miNombre" tiene como argumentos un string, jorge, y 
//una funcion, (data)=>{console.log(`mi nombre es ${data}`)}. Esta funcion tiene un console que mostrará el contenido del parámetro "data". 
//Pasar al 2)








//ejercicio 2, seguir el orden 1) y 2): 
//2)funcion "miApellido", que en este caso es una funcion declarativa pero se puede convertir a flecha:
function miApellido(string, funcionCallback){
    //Para cargar el parámetro "string", o lo que hay contenido en él, en la funcion callback, llamamos a esta última y se lo pasamos como 
    //argumento:
    funcionCallback(string)
    //De esta forma el console.log de la funcion anonima que esta como argumento en la llamada mostrará el valor del string

}

//1) llamada a la funcion "miApellido" con dos argumentos: 1 string y una funcion autoinvocada o anonima, que se puede convertir en una funcion 
//flecha: (data)=>{console.log(data)}. Seguir al paso 2
miApellido('valbuena', function(data){console.log(`mi apellido es ${data}`)})












//ejercicio 3, seguir el orden 1) y 2):
//2) funcion flecha "sumarNumeroFuncion":
let sumarNumeroFuncion = (numeroRecibido, callback) => callback(numeroRecibido)

//1) llamamos a la funcion "sumarNumeroFuncion" con dos argumentos: un número y una función flecha que mostrará por consola un resultado:
sumarNumeroFuncion(5, data=>console.log(`el resultado de la suma es:`, data + 5))

//Hasta este punto hemos usado funciones callback para cargar datos que luego serán procesados en la llamada, obviamente no tiene sentido hacer 
//esto pues hay formas mas fáciles de llegar al mismo resultado, pero de esta forma se entiende mejor el proceso con las funciones callback.












//ejercicio 4 
let numeroAleatorioEntreElCeroYElDos = Math.floor(Math.random() * (2 - 0 + 1)) + 0//se lee: el objeto 'math' tiene un dos metodos, uno para 
//generar un numero aleatorio entre el 0 y 2 llamado 'random' y otro metodo para redondear o quitar decimales llamado 'floor'. 
//Una vez el 'random' genere un numero aleatorio, 'floor' le quita los decimales que tenga y este numero se guarda en un variable para luego 
//utilizarlo.



let traerUnIndice = (funcion) =>{
    let arrayDeCarros = [
        {modelo:2006, marca: 'chevrolet'},
        {modelo: 2012, marca: 'Mazda'},
        {modelo: 2005, marca: 'Renault'}
    ]
    
    funcion(arrayDeCarros)//se lee: a la funcion de callback se le carga el array de carros 
}

//1) hacemos una llamada a la funcion 'traerUnIndice' y le enviamos una funcion como argumento para que nos devuelva el array de carros 
//que se cargara en el parametro 'data'. Este parametro, que es el array, junto con un numero aleatorio entre 0 y 2, entre corchetes, apuntara 
//a un indice del array y luego se mostrara la propiedad 'marca' de ese indice en un console:
traerUnIndice(data=>console.log(data[numeroAleatorioEntreElCeroYElDos].marca))














//ejercicio 5
//Tenemos un objeto llamado 'carro' con dos propiedades y un metodo que recibe una funcion como parametro. El codigo dentro de la funcion 
//tiene un array con algunas caracteriscticas de carros y tiene, tambien, una variable que genera un numero aleatorio con los metodos random
//y floor del objeto math. A la funcion de callback se cargara el array de caracteristicas y la variable con el numero aleatorio:

let carro = {
    modelo: 2020,
    marca: 'Chevrolet',
    otrasCaracteristicas: function(callback){
        let características = ['cojineria en Cuero', 'frenos ABS', 'colores oscuros' ]
        let numeroAleatorio = Math.floor(Math.random() * (2 - 0 + 1)) + 0
        callback(características, numeroAleatorio )
    }
}


//llamamos el objeto 'carro' y el metodo 'otrasCaracteristicas'. Este metodo tiene como argumento una funcion que tiene cargados en sus 
//parametros el array de caracteristicas y el numero aleatorio, que se usaran para mostrar, de forma aleatoria, las caracteristicas de
//los carros:
carro.otrasCaracteristicas((data, item)=>console.log(`caracteristicas del carro:`, data[item]))















//ejercicio 6: tenemos un array con 3 objetos que tienen datos de un grupo de colaboradores de una empresa. Cada colaborador tiene un ID 
//asociado. Hagamos un script donde un usuario ingrese dicho id y le aparezca el nombre y la profesion de ese ID.


//Lo primero es hacer la "base de datos" de los colaboradores, un array con 3 objetos y cada objeto tendra el id, el nombre y la profesion 
//del colaborador:
let colaboradores = [
    {
        id:1,
        nombre: 'Jorge', 
        profesion: 'desarrollador'
    },
    {
        id: 2, 
        nombre: 'Enrique',
        profesion: 'diseñador interactivo'
    },
    {
        id: 3,
        nombre: 'Sara',
        profesion: 'diseñadora web',
        //Este metodo puede estar en cualquier otro objeto, lo importante es llamarlo adecuadamente: colaboradores[indice].traigaEl...
        traigaElNombreYlaProfesion: function(id, callbackNombre, callbackProfesion){//cuando se llame este metodo, en el parametro 'id' se 
            //cargara el 'datoDelUsuario', en el 'callbackNombre' se cargara la funcion 'nombre=>alert(nombre)' y en el 'callbackProfesion'
            //se cargara la funcion 'profesion=>alert(profesion)'
            switch(id){//como el parametro 'id' puede tener diferentes valores podemos usar un ciclo "switch" y para cada valor hacer un case.
                //Cuando 'id' sea igual a '1' (ojo!! prompt ingresa datos de tipo string, pero se puede hacer la conversion a numero) ejecutara
                //el case '1' Este caso llama a 'callbackNombre' y le envia el nombre del primer indice del array, que es el indice 0, y como 
                //es un objeto usamos la notacion punto para ubicar la propiedad 'nombre'.
                //De igual forma, llamamos a 'callbackProfesion' y le enviamos la propiedad 'profesion' del indice 0  
                case '1': callbackNombre(colaboradores[0].nombre); callbackProfesion(colaboradores[0].profesion) 
                break;//una vez se ejecute el case '1' se rompe el ciclo switch.

                //Si case es '2' se hace exactameante lo mismo que case '1'
                case '2': callbackNombre(colaboradores[1].nombre); callbackProfesion(colaboradores[1].profesion)
                break;

                //Y si es case '3' se hace lo mismo que en los casos anteriores
                case '3': callbackNombre(colaboradores[2].nombre); callbackProfesion(colaboradores[2].profesion)
                break; 

                //cuando el dato ingresado por el usuario no sea ningun case se ejecutara el 'default' usando el id que ingreso el usuario
                default: alert(`el ID ${id} no existe`)
            }
        }
    }
]



//Una vez tengamos la base de datos, hacemos un prompt para guardar el dato que digite el usuario:
let datoDelUsuario = prompt('ingrese el ID para que aparezca el nombre y la profesion del colaborador')

//Ya tenemos la base de datos de los colaboradores y el id que digito el usuario en el prompt. 
//Ahora ejecutemos el metodo que esta en la base de datos en el indice 2. Este metodo se puede colocar en cualquier objeto lo importante es
//ubicarlo en el indice correspondiente:

colaboradores[2].traigaElNombreYlaProfesion(datoDelUsuario, nombre=>alert(nombre), profesion=>alert(profesion))//esto se lee:
//llamemos el metodo 'traigaElNombreYlaProfesion()', que esta en 'colaboradores' el indice 2, y enviemosle el 'datoDelUsuario' y dos callbacks.
//El primer callback traera el nombre del colaborador y el segundo la profesion y seran mostrados por un alert() 

console.log('fin del programa')


//Estas funciones son ampliamente usadas en JS, por ejemplo en métodos usados para los arrays como foreach(), map(), reduce(), filter() y en 
//asincronía como el método then(), catch(), finally() y muchos mas usos. Por lo tanto es de vital importancia entenderlas.

















//COMO RETORNAR EL RESULTADO DE UNA FUNCION CALLBACK AL METODO QUE LA CONTIENE:

//Tenemos un objeto con un metodo:
let unObjeto = {
    unMetodo : function(callback){//este metodo recibira una funcion callback y...
        return callback('los callbacks')//.... a dicha funcion le enviamos un string, a su vez retornamos la concatenacion que se hizo en la 
        //funcion callback al metodo que la contiene.
    }
}



resultado = unObjeto.unMetodo(function(data){return data + ' no son complejos!'})//llamamos el metodo 'unMetodo' y le enviamos una funcion 
//callback. Al parametro de esta funcion, es decir 'data', le cargamos el string 'los callbacks' quedando: data = 'los callbacks'
//Ahora, lo concatenamos con el string ' no son complejos!' quedando:  ('los callbacks' + ' no son complejos!')
//PILAS!!! El return que esta antes de 'data' retorna la concatenacion a quien llamo la funcion, es decir callback('los callbacks')
//Ahora, la concatenacion esta en la llamada 'callback('los callbacks')'
//El return que esta antes de dicha llamada, retorna la concatencacion a la propiedad 'unMetodo'. 
//Es de esta forma que resultado = unObjeto.Unmetodo = 'los callbacks no son complejos! 
console.log(resultado)







//veamos otro ejercicio con funciones flechas: 
let otroObjeto = {
    otroMetodo : funcionCallback=>funcionCallback('me gusta')
}

otroResultado = otroObjeto.otroMetodo(item=>item + ' el curso de JS')
console.log(otroResultado)

//Invocamos el metodo del objeto y le pasamos como argumento una funcion callback para recuperar el string 'me gusta'
//Una vez recuperado el string, se concatena con el otro string ' el curso de JS' pero como esta en una linea de una funcion flecha esta
//concatenacion se retorna a la llamada que esta en el metodo (funcionCallback('me gusta')) que a su vez, como es una sola linea de una funcion 
//flecha, la retorna al metodo que la contiene (otroMetodo).
//Por tal motivo podemos guardar la invocacion del metodo con notacion punto en una variable   :)















/*
CONCLUSION

*Un callback es una funcion que se usa como argumento de otra funcion. 
*Para entender un callback, pensemos en una funcion que tiene como mision recuperar un dato que sera guardado en su parametro 
para usarlo luego en el bloque de codigo. Dicho de otra forma, el parametro de la funcion callback sera cargado con el argumento de una 
llamada que estara en algun objeto.    :)



Aunque hemos trabajado con objetos, este tema es mas amplio y lo abarcaremos en el siguiente capitulo...

*/


