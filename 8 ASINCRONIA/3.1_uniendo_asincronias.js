const BASE_DATOS_NOMBRE = [
    {
        'ID' : 1,
        'ID profesion': 1, 
        'Nombre colaborador': 'Jorge', 
        
    }, 
    {
        'ID' : 2,
        'ID profesion':2, 
        'Nombre colaborador': 'Enrique',
        
    }, 
    {
        'ID' : 3,
        'ID profesion': 3, 
        'Nombre colaborador': 'Sara',
        
    }, 
    {
        'ID' : 4,
        'ID profesion': 3, 
        'Nombre colaborador': 'Maria',

    }

]


const BASE_DATOS_PROFESION = 
{
    1: 'Developer',
    2: 'Diseñador',
    3: 'backend'
        
}

//Pedimos un dato al usuario:
let datoDelUsuario = +prompt('ingrese el ID del empleado, un numero del 1 al 4, para saber su profesion')


//Llamamos cada forma de asincronismo:
usandoCallbacks()
usandoPromesas()
usandoAsync()



















//'USANDO CALLBACKS'
function usandoCallbacks(){
    console.log('USANDO CALLBACKS')
    

//evaluamos que el dato cumpla con lo indicado:
if(datoDelUsuario>4 || datoDelUsuario<1){
    alert('ingrese un numero indicado')
}


function id(id, callback){
    setTimeout(()=>{
        let empleadoBuscado = BASE_DATOS_NOMBRE.find(item=>item.ID===id)
        callback(empleadoBuscado)
    }, 2000)



}


function profesion(data, callback){
    setTimeout(()=>{
        callback(BASE_DATOS_PROFESION[data])
    }, 1000)
}




id(datoDelUsuario, item =>{
    
    let idProfesion = item['ID profesion']
    let nombreEmpleado = item['Nombre colaborador']
    profesion(idProfesion, data=>{
        console.log(`${nombreEmpleado} es ${data}`)
    })
})


}





















//USANDO PROMESAS
function usandoPromesas(){
    console.log('USANDO PROMESAS')
    

let nombreEmpleado

function id(usuarioBuscado){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{

            if(datoDelUsuario>4 || datoDelUsuario<1){
                reject('ingrese un numero indicado')
            }
            
            let empleadoBuscado = BASE_DATOS_NOMBRE.find(item=>item.ID===usuarioBuscado)
            resolve(empleadoBuscado)


        }, 2000)
        
    })
}




function profesion(data){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            resolve(BASE_DATOS_PROFESION[data])
        }, 1000)
        
    })
}




id(datoDelUsuario)
    .then(item =>{ 
        
        let idProfesion = item['ID profesion'];
        nombreEmpleado = item['Nombre colaborador']
        return profesion(idProfesion)
    })
    .then(empleo=>console.log(`${nombreEmpleado} es ${empleo}`))
    .catch(error=>console.log(error))


}
























//USANDO ASYNC-AWAIT
function usandoAsync(){
    console.log('USANDO ASYNC-AWAIT')

    
let buscarColaborador = (datoDelUsuario)=>{
    return new Promise((resolve, reject) => {
        setTimeout(()=>{

            if(datoDelUsuario>4 || datoDelUsuario<1){
                reject('ingrese un numero indicado')
            }
            let colaborador = BASE_DATOS_NOMBRE.find(item=>item.ID===datoDelUsuario)

            resolve(colaborador)

        }, 1000)
        
    })

}






let buscarProfesion = (data)=>{
    return new Promise((resolve, reject) => {
        resolve(BASE_DATOS_PROFESION[data])
    })

}


async function id(datoDelUsuario){
    try {
        let empleadoBuscado = await buscarColaborador(datoDelUsuario);
        let empleo = await buscarProfesion(empleadoBuscado['ID profesion'])
        console.log(`${empleadoBuscado['Nombre colaborador']} es ${empleo}`)
        
    } catch (error) {
        console.log(error)
        
    }


    
}





id(datoDelUsuario)

}




console.log('fin del programa')
