/********GLOBAL SCOPE*********/
var hello = 'Hello world'; //global var, disponible para todo el código

function sayHello(){
    console.log(hello); //Puede acceder a cualquier global var
    for (let i = 0; i < 10; i++) {
        console.log(hello); //Puede acceder a cualquier global var
    }
}

/************FUNCTION SCOPE**************/
function printNumbers(){
    for (var i = 0; i < 10; i++) {
        setTimeout(() => {
            console.log(i);
        }, 100);
    }
}

printNumbers(); //10 10 ... 10 (10 veces)

/*Cuando se declara la variable con var, JS la declara
con un alcance de función, así:

function printNumbers(){
    var i; //>>Alcance de función
    for (i = 0; i < 10; i++) {
        setTimeout(() => {
            console.log(i);
        }, 100);
    }
}

var i; tiene alcance de función y no respeta el bloque del loop
por eso cada iteración puede acceder al nuevo valor de i
cuando se cumple el tiempo i = 10.
*/

//>>SE PUEDE SOLUCIONAR USANDO FUNCTION SCOPE
function printer (){
    for(var i = 0; i < 10; i++){
        function printEach(n){
            setTimeout(() => {
                console.log(n);
            }, 100)
        }
        printEach(i);
    }
}

printer();//0 1 2 ... 9

/*
Al pasar el parametro n a la función printEach, se crea un nuevo ambito, por mas que el valor de n tome el valor de i, el código
que corre dentro de la función ya no tiene alcance directo al
valor de i. n tiene un scope de función.
*/

/***********BLOCK SCOPE********/
function showNumbers (){
    for (let i = 0; i < 10; i++) {
        setTimeout(() => {
            console.log(i);
        }, 100);
    }
}

showNumbers(); //0 1 2 ... 9
/*
Al declarar la variable i con LET, en cada iteración se genera un
bloque, por lo que i al tener alcance de bloque, el código dentro del bloque no puede acceder a las nuevas asignaciones de i.
Por lo que el setTimeout de imprimir el valor de i de cada iteración, 
hasta que se deje de cumplir la condición.
*/

/*MODULE SCOPE*/