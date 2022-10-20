//CONTROL DE FLUJO
console.log('CONTROL DE FLUJO')
console.log('if-else')
//El siguiente ejercicio nos permite elegir que hacer dependiendo de ciertas condiciones.
//Para que un usuario pueda ingresar a cierto establecimiemto debe ser mayor de 14 años pero menor de 20 años. Pidamosle su nombre y su edad

const NOMBRE_DEL_USUARIO = prompt('ingrese su nombre por favor')
const EDAD = prompt('ingrese su edad')
console.log(NOMBRE_DEL_USUARIO, EDAD)//verificamos los datos

/*
Este ejercicio pide que se cumplan ciertas condiciones para poder ingresar al establecimiento, sino se cumplen no tendra ingreso.
En este caso podemos usar un control de flujo de que se llama "if-else" y consiste en dos bloques de codigo que seran ejecutados si la
condicion es verdadera o falsa. 
Los bloques de control "if-else" tiene el siguiente formato:

if(){}else{}

Despues de la sentencia 'if' siguen dos parentesis donde se evaluara o evaluaran las expresiones y estas DEBEN ser verdaderas para que se 
ejecute el codigo que esta dentro de las llaves que siguen a los parentesis. Si la expresion que esta dentro de los parentesis no es verdadera, 
la ejecucion del codigo salta hasta la sentencia 'else' y se ejecutan las instrucciones que estan en las llaves de esta sentencia.
Por ejemplo:

*/
let expresion = true && false

if(expresion){//si 'expresion' es true, se ejecuta el codigo que esta dentro de las llaves, sino...
    console.log('si es true, se ejecuta el codigo dentro de las llaves')
}
else{console.log('pero si es false, se ejecuta este codigo')}//...el programa salta hasta aqui y ejecuta el codigo que esta dentro de estas
//llaves


//Otro ejemplo evaluando un numero menor que otro:

if(5<3){//la expresion dentro de los parentesis DEBE ser VERDADERA, de lo contrario....
    console.log('5 es mayor que 3')
}
else{console.log('5 no es menor que 3')}//....salta hasta aqui


//otro ejemplo evaluando dos condiciones que, ademas, tienen el operador logico Y lo que significa que AMBAS expresiones deben ser true
//para que toda la expresion del parentesis sea 'true':
if(5>3 && 8<6){//se lee: ¿5 es mayor que 3? = true, ¿8 es menor que 6? = false, por tanto true && false = false, por eso ....
    console.log('toda la expresion es verdadera')
}
else{console.log('parte de la expresion es falsa')}//... la respuesta es el 'else'

//El otro caso es avaluar la misma expresion pero con el operador logico OR, validando que por lo menos alguna sea true, veamos:
if(5>3 || 8<6){//se lee: ¿5 es mayor que 3? = true, ¿8 es menor que 6? = false, por tanto true OR false = true, por eso ....
    console.log('parte de la expresion es verdadera')//... la respuesta es esta
}
else{console.log('parte de la expresion es falsa')}


//Veamos otro caso donde podemos omitir la sentencia 'else', pues podemos negar la expresion para que se cumpla su condicion verdadera:
if(!8<6){//se lee: ¿8 es menor que 6? la respuesta es 'false' pero como esta negada la expresion, ahora es verdadera ejecutandose lo que
    console.log('8 no es menor que 6')//esta en las llaves
}

//En el tema anterior usamos el metodo 'Boolean()' para evaluar la condicion logica de un tipo de dato mostrando si es 'true' o 'false', 
//por ejemplo: 
console.log(`el tipo de dato 'undefined' es evaluado como ${Boolean(undefined)}`)
console.log(`el tipo de dato 'string' es evaluado como ${Boolean('string')}`)
console.log(`el tipo de dato 'null' es evaluado como ${Boolean(null)}`)

//Tambien podemos usar la condicion 'if' para evaluar la expresion booleana de un tipo de dato, por ejemplo:
if('string'){//se lee: si el 'string' es verdadero....
    console.log(`los string son evaluados como 'true'`)//... se ejecuta lo que esta dentro de bloques
}

if(!""){//se lee: el string vacio es 'false' pero al negarlo....
    console.log(`mientras que los string vacios son considerados como 'false'`)//....se ejecuta lo que esta dentro de los parentesis
}

if(58){
    console.log(`los numeros mayores que cero tambien son evaluados como 'true'`)
}

if(-3){
    console.log(`los numeros menores que cero tambien son evaluados como 'true'`)
}

if(!null){//se lee: el tipo de dato 'null' es false, pero al negarlo....
    console.log(`pero los null son evaluados como 'false'`)//... se ejecuta lo que esta dentro de las llaves
}

//Podemos usar el 'else' pero si sabemos que el valor sera 'false' podemos negar la expresion y asi evitar una linea de codigo que 
//puede ser innecesaria 

//Ya que nos familiarizamos con la sentencia if-else, continuemos con el ejercicio planteado: Para que un usuario pueda ingresar a cierto 
//establecimiemto debe ser mayor de 14 años pero menor de 20 años.

if(EDAD>14 && EDAD<20){//se lee: ¿EDAD es mayor que 14? Y ¿EDAD es menor que 20? Recordemos que para que toda la expresion sea verdadera
    //ambas preguntas DEBEN ser 'true' sino toda la expresion sera evaluada como 'false'. Caso diferente si usaramos el operador 
    //logico OR (||) donde alguna de las dos puede ser 'true' para que cumpla.
    alert(`hola ${NOMBRE_DEL_USUARIO}, puedes ingresar`)//si cumple la edad, mostrara un mensaje donde se involucra el nombre del usuario
}
else{// si no cumple la edad, mostrara el siguiente mensaje:
    alert('no cumple la edad de ingreso, lo sentimos')
}






//Veamos otro ejercicio. 
//Segun esta pagina: https://www.learningaboutelectronics.com/Articulos/Calculadora-de-peso-en-la-luna.php#:~:text=As%C3%AD%20que%20un%20objeto%20o,tierra%20que%20en%20la%20luna.
//el peso en la luna se calcula con una formula. Hagamos un script que le solicite al usuarios su peso, en kilos, y le mostramos cuanto pesaria
//si estuviera en la luna.

let respuesta = confirm('¿quiere saber su peso en la luna?')// le pedimos al usuario si quiere saber su peso. Si acepta, la variable 'respuesta'
//sera 'true', si cancela sera 'false'


if(respuesta){//si es 'true' se ejecuta el codigo que esta dentro de las llaves:
    //segun la formula, se requiere el peso del usuario en kilos, la fuerza de gravedad de la tierra y la fuerza de gravedad en la luna
    let pesoDelUsuarioEnKilos = prompt('ingrese su peso, en kilos por favor')//pedimos el peso al usuario, en kilos
    const FUERZA_DE_GRAVEDAD_EN_LA_TIERRA = 9.81//m/S cuadrado, como es un valor fijo usamos una constante
    const FUERZA_DE_GRAVEDAD_EN_LA_LUNA = 1.622//m/S cuadrado, como es un valor fijo usamos una constante
    
    //La formula es:
    let pesoEnLaLuna = (pesoDelUsuarioEnKilos/FUERZA_DE_GRAVEDAD_EN_LA_TIERRA)*FUERZA_DE_GRAVEDAD_EN_LA_LUNA
    let diferenciaDePeso = pesoDelUsuarioEnKilos - pesoEnLaLuna

    alert(`su peso en la luna seria de ${pesoEnLaLuna} kilos, es decir ${diferenciaDePeso} kilos menos`)

    // si queremos que el resultado no tenga tantos numeros decimales, podemos usar un objeto que tiene JS llamado Math y su metodo round()
    //Este metodo, como su nombre lo indica, redondea el numero es decir lo acerca a un numero entero, se pierde precision pero se gana 
    //facilidad de lectura para el usuario:
    pesoEnLaLuna = Math.round(pesoEnLaLuna)//se lee: en la variable 'pesoEnLaLuna' se guarda el valor redondeado de la misma variable
    diferenciaDePeso = Math.round(diferenciaDePeso)//se lee: en la variable 'diferenciaDePeso' se guarda el valor redondeado de la misma variable
    console.log(`peso en la luna: ${pesoEnLaLuna}, diferencia de peso: ${diferenciaDePeso}`)//mostramos en consola o lo mostramos en la 
    //pantalla del usuario con otro alert()
    
}
else{//si cancelo, saldra este mensaje y se acabara el script:
    alert('bueno, esta bien')
}




//Otro ejercicio: ingresar 3 claves, no importa el numero de digitos, y pintar en consola las claves confirmadas y las que no, 
//y si se permite  o no el acceso

//se obtienen las claves
let numero1 = (prompt('ingrese su 1er clave')),
    numero2 = (prompt('ingrese su 2da clave')),
    numero3 = (prompt('ingrese su 3er clave'));
    console.log(numero1, numero2, numero3)


//se confirman las claves
let numero4 = (prompt('confirme 1er clave')),
    numero5 = (prompt('confirme 2da clave')),
    numero6 = (prompt('confirme 3er clave'));
    console.log(numero4, numero5, numero6)




//se evaluan las claves:
if(numero1==numero4){
    alert('1er clave confirmada');
    numero1=true;
}
else{
    alert("1er clave no confirmada");
    numero4=false;
}


if(numero2==numero5){
    alert('2da clave confirmada');
    numero2=true;
}
else{
    alert("2da clave no confirmada");
    numero5=false
}
if(numero3==numero6){
    alert('3ra clave confirmada');
    numero3=true
}
else{
    alert("3ra clave no confirmada");
    numero6=false;
}
//aviso de permitido o denegado
if(numero1==true && numero2==true && numero3==true){
    alert('acceso permitido');
}
else{
    alert('acceso denegado')
}
//fin del programa
console.log('fin de programa')



//TEN PRESENTE!!
//En la programacion se debe trabajar no solo para obtener el algoritmo que resuelva el problema planteado sino tambien hacer un 
//algoritmo de forma reducida y facil de leer. En el futuro quizas debamos volver a revisar el codigo que tiempo atras hicimos o tambien es 
//posible que otro programador tenga que leerlo y hacerle cambios y es habitual que, si no escribimos buen codigo, no entendamos lo que nosotros 
//mismos hicimos. 


//Un ultimo ejercicio: dependiendo de la opcion que escoja el usuario le mostramos un alert de dicha opcion:

let opcionUsuario = prompt('ingrese el número de la opcion que desea: 1)clima, 2)fecha y hora, 3)estado del trafico, 4) consultar con un asesor')

if(opcionUsuario==1){//se lee: si opcionUsuario es igual a 1 haga lo del bloque
    alert('dia soleado hasta las 3pm')

}else if(opcionUsuario==2){//se lee: sino, si opcionUsuario es igual a 2 haga lo del bloque
    alert("jueves, 14 de abril de 2021. Es la 1pm")

}else if(opcionUsuario==3){//se lee: sino, si opcionUsuario es igual a 3 haga lo del bloque
    alert('muchos flujo vehicular hacia el noroccidente')

}else if(opcionUsuario==4){//se lee: sino, si opcionUsuario es igual a 4 haga lo del bloque
    alert('Se comunicara con un asesor...')

}else{
    alert('ingrese un dato valido, por favor')
}




//OPERADOR TERNARIO
console.log('OPERADOR TERNARIO')
//Una forma de hacer un if-else reducido y facil de leer es usando el operador ternario. Su estructura es la siguiente:
//variable = (expresion)? "opcion1" : "opcion2", si la expresion es verdadera, la variable toma el valor de la opcion 1,
//de lo contrario la opcion 2
//tambien se usa asi: (expresion) ? "opcion1" : (expresion)? "opcion2" : (expresion)? "opcionX" : "opcionY"  evaluando o haciendo otros 
//if-else hasta llegar a dos posibles resultados.
		
//Veamos una forma:
var a = 5, b = 7;
a > b ? console.log("a es mayor que b") : console.log("b es mayor que a");
//Otra forma:
a == b ? console.log("a es igual a b") 
: a < b ? console.log("a es menor que b") 
: console.log("a es mayor que b");

//RETO: hacer alguno de los ejercicios usando operadores ternarios


























//CICLO SWITCH-CASE
console.log('CICLO SWITCH-CASE')
//Podemos hacer el ultimo ejercicio con otro tipo de ciclo llamado: switch-case. La estructura es la siguiente:
/* switch(expresion){
    case valor1 : "codigo que ejecutará"; 
    break; 
    case valor2 : "codigo que ejecutará"; 
    break;
    default : "codigo que ejecutará"
} */
				
//donde expresion sera una variable, una operacion, una comparacion, etc.
//Valor1 o valor2 sera el resultado de la expresion o el contenido de una variable. 
//Apliquemoslo al ultimo ejercicio del if-else

opcionUsuario = prompt('ingrese el número de la opcion que desea: 1)clima, 2)fecha y hora, 3)estado del trafico, 4) consultar con un asesor')

switch(opcionUsuario){//Como la variable puede tener un dato entre el 1 y 4, este sera el valor que se evaluara:
    case '1' : alert('dia soleado hasta las 3pm');//se lee: si el caso es igual a 1, se presentara el siguiente alert()
    break;//la instruccion break le indica al programa que la instruccion ya se ejecuto y que salga del ciclo 'switch'
    case '2' : alert("jueves, 14 de abril de 2021. Es la 1pm"); 
    break;
    case '3' : alert('muchos flujo vehicular hacia el noroccidente'); 
    break;
    case '4' : alert('Se comunicara con un asesor...'); 
    break;
    default : alert('ingrese un dato valido, por favor')//se lee: si no hubo un caso parecido al que contiene la variable 'opcionUsuario'
    //entonces se ejecuara una linea de codigo por defecto o 'default'
}

//Este formato es util cuando detectamos, por ejemplo, que la misma variable puede tener diferentes valores 




























//CICLO 'WHILE'
console.log('CICLO "WHILE"')
//Este ciclo a diferencia del 'if-else' va a ejectar un bloque de codigo MIENTRAS (while) la expresion sea verdadera.
//La sintaxis de esta sentencia de control es: while(expresion verdadera){bloque de codigo que se ejecuta mientras la expresion sea true}
//Hagamos un contador de 1 a 10 

let contador = 0

while(contador < 10){//se lee: mientras contador sea menor que 10 (pilas!! esta expresion DEBE evaluarse como verdadera)...
    contador = contador + 1//...la variable contador se incrementara en una unidad y luego...
    console.log(contador)//... lo muestra. Como la expresion sigue siendo menor que 10, vuelve a ingresar al bloque hasta que la 
    //expresion sea false es decir cuando pregunte: contador es menor que 10 y contador sea 11, por ejemplo
    //NOTA: El codigo se puede optimizar con: ++contador, indicando que 'contador' se incrementa en una unidad 
}

//Ahora hagamoslo a la inversa, que inicie en 10 y termine en 1:
while(contador>0){// se lee: mientras contador sea mayor que cero....
    console.log(contador)//como contador ya tiene un valor del ejercicio anterior, primero lo pintamos y luego...
    contador--//.... descontamos en una unidad hasta que sea mayor que cero
}




//Pasemos los valores de una variable a otra:

let contador1 = 0,
    contador2 = 10;
console.log(`contador 1 es ${contador1} y contador 2 es ${contador2}`);


while(contador1 < 10 && contador2 > 0 ){//se lee: mientras contador1 sea menor a 10 Y contador2 sea mayor a 0 haga...
    contador1 = ++contador1;//incremente contador1
    contador2 = --contador2;//decremente contador2
}
console.log(`contador 1 es ${contador1} y contador 2 es ${contador2}`);

//OJO!!! si la expresion del while siempre se evalua como 'true' este ejecutara el codigo llenando la memoria del PC y bloqueandolo 
//Por tanto, debemos hacer que la expresion se evalue en 'true' un numero de veces finita.




























//CICLO "FOR"
console.log('CICLO "FOR"')
//Un ciclo de control muy usado para indicar cuantas veces queremos que se ejecute un codigo. La estructura es:
//for(expresion inicial; condicion; expresion actualizacion){instrucciones que se ejecutan mientras la condicion sea verdadera}
//expresion inicial, es un valor con el que queremos que inicie el conteo de las veces que se ejecutara el codigo
//condicion, es la expresion que se evalua para que se ejecute el bloque de codigo y, como hemos visto, esta sera verdadera
//expresion actualizacion, es el valor que se incrementa o decrementa para cumplir la condicion
//Veamos su implementacion haciendo que se ejecute un bloque de codigo mientras se cumpla una condicion:

for(i=0; i<10; ++i){//se lee: la variable 'i' es inicializa con 0, luego se pregunta: ¿i es menor a 10? como es verdad se ejecuta el codigo 
    //que esta dentro del bloque una vez
    console.log('hola')//en consola veremos que se pinta 'hola'
    console.log(i)// en consola veremos el valor que tiene la variable i, y observamos que muestra el valor 0, lo que significa que el incremento 
    //de i se hace despues de ejecutar el codigo del bloque.
    
    //En otras palabras, se inicializa la variable 'i', luego se compara, y si el resultado de esta comparacion es true se ejecuta 
    //el codigo del bloque una vez y finalmente se incrementa la variable 'i'. Para la segunda vez que se ejecuta la expresion que esta en 
    //parentesis, no se inicializa la variable pues esto se hace solo al inicio, solo se evalua la comparacion y si el resultado de esta es 
    //verdadero se ejecuta nuevamente el codigo del bloque una vez. Al terminar este bloque se incrementa en 1 la variable 'i'. Para la 3ra 
    //vuelta, vuelve a evaluar la comparacion y si nuevamente es verdadera se ejecuta lo que esta en el bloque una vez y luego se incrementa 
    //en 1 la variable 'i' hasta que la expresion se evalue en 'false', es decir, cuando 'i' valga 10, pues 10 no es menor que 10
}





//CONTINUE y BREAK
console.log('CONTINUE y BREAK')
//La instruccion "break" le indica al programa que termina la ejecucion y sale del bucle


for(let numero = 0; numero<=24; numero +=2){//se lee: la variable 'numero' se inicializa con 0; luego se pregunta: ¿'numero' es menor o 
    //igual a 24? como es true, se ejecuta el codigo que esa dentro del bloque una vez y luego se incrementa 'numero' en 2
    if(numero==12){//se lee: si la variable 'numero' es igual a 12, entonces...
        break//....rompa la ejecucion del bloque y del ciclo for y salga del codigo
    }
    console.log(`la variable 'numero' tiene el valor: ${numero}`);//si 'numero' no es igual a 12, en consola se mostrara lo que hay en 'numero'
    //Una vez se acabe este bloque de codigo se incrementa en 2 'numero' y se vuelve a ejecutar la expresion del parentesis preguntando:
    //¿numero es menor o igual a 24? como es true, se vuelve a ejecutar el codigo del bloque. 
}

//Cuando 'numero' sea igual a 12 y se ejecute la sentencia 'break', la ejecucion del ciclo for se rompe y se acaba el script, mostrando:
console.log('fin de programa')




//La instruccion "continue" le indica al programa que se salte esa instruccion para seguir ejecutando el bucle o ciclo for

for(let otroNumero = 20; otroNumero>=0; otroNumero -=2){//se lee: la variable 'otroNumero' se inicializa con 20, luego se evalua si esta
    //es mayor o igual que 0, si la respuesta es true, se ejecuta el bloque de codigo
    if(otroNumero==6 || otroNumero==16){//se lee: si 'otroNumero' es igual a 6 o es igual a 16...
    continue;//....continue la ejecucion pero no tome en cuenta estos valores, en otras palabras, saltelos, vuelva al ciclo for
    }
    console.log(`la variable 'otroNumero' tiene el valor: ${otroNumero}`);//si el bloque if es false, se muestra el valor de 'otroNumero'.
    //Luego se decrementa en 2 la variable 'otroNumero' y se vuelve a evaluar si esta variable es mayor o igual a 0, si es verdadero 
    //vuelve y se ejecuta el codigo del bloque hasta que se evalue en false
}


console.log('fin de programa');




























//SCOPE
console.log('SCOPE')
//Para entender que es el scope, analicemos el siguiente codigo:

let estado = true;

if(estado){//se lee: si 'estado' es true ejecute...
    console.log('entró al if');//....el console
    let estado = false //declaramos una variable llamada 'estado' y le asignamos un false
    console.log(`el estado en el if es ${estado}`)//imprimimos la variable 'estado'
}

console.log(`el estado fuera del if es ${estado}`)//imprimimos la variable 'estado'

//¿porque el valor de 'estado' en el if es 'false' y el que esta fuera del if es 'true'?
//Es por el scope o el ambito de las variables, una esta fuera del bloque if y la otra esta dentro del bloque if y no son las mismas.
//Recordemos que la declaracion de variables con 'let' y el mismo identificador sacaria error pues ya estaria declarada, no habria que
//declararla de nuevo. En otras palabras, una variable esta dentro del bloque del if y es alli donde 'vive' sin tener nada que ver con la que 
//esta fuera del bloque if. Veamos otro ejemplo:


let unString = "numero: "// declaramos una variable con el string "numero: "

for(i=1; i!=11; ++i){//se lee: la variable 'i' se declara con 1, luego preguntamos: ¿i es diferente a 11?, debemos recordar que esta expresion
    //debe ser verdadera para que se ejecute el bloque de codigo, como 'i' es diferente a 1 se ejecuta el codigo.
    console.log(unString + i)//se lee: imprima en consola la concatenacion de la variable 'unString' con 'i', dando como resultado:
    //"numero: 1" o el valor que tenga 'i'
    //En este caso la variable 'unString' esta fuera del bloque de codigo lo que obliga a JS buscar primero dentro del bloque y sino 
    //encuentra la variable entonces busca fuera de este, pues esta variable esta en el scope o ambito global, si estuviera dentro del bloque
    //se diria que esta en el scope o ambito local
}

//Veamos otro ejemplo:

let resultado = 15

for(a=20; a>1; --a){
    
    let meta = 15
    
    if(meta==a){
        console.log(`meta es igual a ${resultado}`)
    }
}

//En este ejercicio vemos que 'meta' esta dentro del bloque del for, 'a' esta en la expresion del for y 'resultado' esta fuera del bloque for
//lo que obliga a JS a buscar dichas variables en diferentes scopes. JS siempre empieza la busqueda de variables desde dentro del bloque hacia 
//fuera, es decir, hacia el ambito global, pero nunca de forma inversa, veamos:


if(true){
    let numeroPar = 22
    console.log(numeroPar)
}

//console.log(numeroPar)// en consola mostrara un error de referencia pues dicha variable no se encuentra a pesar que existe en el bloque
//del ciclo 'if', pero como se dijo antes, JS no busca hacia dentro de los bloques sino hacia fuera de ellos.
//Veamos un ultimo caso:


let otroNumeroPar = 14// Declaramos una variable global

for(i=0; i<1; ++i){
    let incrementoDelNumeroPar = otroNumeroPar + 5
    console.log(`desde el 'for' se imprime el numero par: ${otroNumeroPar}`)
    console.log(`incrementamos el numero par en 5 en el ciclo for: ${incrementoDelNumeroPar}`)

}

if(true){
    let incrementoDelNumeroPar = otroNumeroPar + 5
    console.log(`desde el 'if' se imprime el numero par: ${otroNumeroPar}`)
    console.log(`incrementamos el numero par en 5 en el ciclo if: ${incrementoDelNumeroPar}`)
}

let otroContador = 0
while(otroContador<1){//OJO, si el true se mantiene, se ejecutara este codigo hasta que la memoria del PC se llene bloqueandolo 
    ++otroContador
    let incrementoDelNumeroPar = otroNumeroPar + 5
    console.log(`desde el 'while' se imprime el numero par: ${otroNumeroPar}`)
    console.log(`incrementamos el numero par en 5 en el ciclo while: ${incrementoDelNumeroPar}`)
}

/* 
Es interesante que todos los ciclos anteriores pueden utilizar la variable global 'otroNumeroPar', pero esto hace que debamos tener cuidado
pues si algun ciclo cambia el valor de la variable global es posible que a los demas no les sirva dicho dato.
De igual manera vemos que a pesar que todos los ciclos tienen la variable 'incrementoDelNumeroPar' no se generan problemas de inicializacion,
pues estan dentro de los bloques y no se parecen entre si pues cada variable apunta a una posicion de memoria diferente porque cada una esta
en un ambito o scope diferente. JS empieza buscando la variable en un bloque de codigo, sino esta seguira hacia un nivel superior hasta el 
ambito global.
*/














/* 
CONCLUSION
El ciclo 'if-else' es usado para ejecutar una pieza de codigo cuando la expresion sea o no una condicion verdadera. Se puede usar el operador 
ternario.
El ciclo switch-case ejecutara una pieza de codigo cuando la expresion evaluada tome alguno de los casos planteados.
El ciclo 'while' ejecutara una pieza de codigo 'mientras' la expresion sea verdadera.
El ciclo 'for' es usado para proponer hasta cuando se ejecutara el codigo.
El scope o ambito es el 'espacio' donde esta declarada una varible, esta puede estar a nivel local, dentro de un bloque de codigo, o 
a nivel global, fuera de un bloque 
*/

