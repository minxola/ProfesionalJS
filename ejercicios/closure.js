/********   CLOSURES  */

/*
IIFE: Inmediatelly Invoke Function Expressión
Expresión de función que se invoca inmediatamente
*/
(function(){
    let color = 'green';

    function printColor(){
        console.log(color);
    }

    printColor(); //green
})();

printColor(); //printColor is not defined

/*
FUNCIONES QUE REGRESAN FUNCIONES
*/
function makeColorPrinter(color){
    let colorMessage = `The color is ${color}`;
    return function(){
        console.log(colorMessage);
    }
}

let greenColorPrinter = makeColorPrinter('green');
greenColorPrinter(); //The color is green
greenColorPrinter(); //The color is green

/*
VARIABLES PRIVADAS
*/
function makeCounter (n) {
    let count = n;
    return {
        increse: function(){
            count = count + 1;
        },
        decrease: function(){
            count = count - 1;
        },
        getCount: function(){
            return count;
        },
    };
}

let counter = makeCounter(10);
console.log(`Count is : ${counter.getCount()}`); //10
counter.increse();
console.log(`Count is : ${counter.getCount()}`); //11
counter.decrease();
console.log(`Count is : ${counter.getCount()}`); // 10
counter.decrease();
counter.decrease();
console.log(`Count is : ${counter.getCount()}`); //8