var CRList = [];
var enemyCount = 0;
var battleCount = 0;
var totalCR = 0;
var i = 0;

//This block assigns a creature (or a few?) to a spot
function randomAssign(AvPlayerLevel) {
    "use strict";
    var encounterCR = Math.random();
    if (encounterCR < 0.125 * AvPlayerLevel) {
        encounterCR = 0.125 * AvPlayerLevel;
    } else if (encounterCR < 0.25 * AvPlayerLevel) {
        encounterCR = 0.25 * AvPlayerLevel;
    } else if (encounterCR < 0.33 * AvPlayerLevel) {
        encounterCR = 0.33 * AvPlayerLevel;
    } else if (encounterCR < 0.5 * AvPlayerLevel) {
        encounterCR = 0.5 * AvPlayerLevel;
    } else if (encounterCR < 0.666 * AvPlayerLevel) {
        encounterCR = 0.666 * AvPlayerLevel;
    } else if (encounterCR < 0.75 * AvPlayerLevel) {
        encounterCR = 0.75 * AvPlayerLevel;
    } else if (encounterCR < 0.875 * AvPlayerLevel) {
        encounterCR = 0.875 * AvPlayerLevel;
    } else {
        encounterCR = AvPlayerLevel;
    }
    return encounterCR;
}


function encounterGen(goal, minimum, maximum) {
    "use strict";
    var encounterCR = 0,
        tempadd = 0,
        enemyList = [];
    while (totalCR < goal) {
        encounterCR = randomAssign(maximum);
        enemyList.push(encounterCR);
        //this block loops if the encounterCR doesn't reach the minimum
        while (encounterCR < minimum) {
            tempadd = randomAssign(maximum);
            encounterCR += tempadd;
            enemyList.push(tempadd);
        }
        CRList.push(enemyList);
        for (i = 0; i < enemyList.length; i = i + 1) {
            totalCR += enemyList[i];
        }
        //console.log("current count: " + totalCR);
        //console.log("hello" + encounterCR);
        //console.log(CRList);
        enemyList = [];
    }
    return CRList;
}
    
function printEncounters(array) {
    "use strict";
    var k = 0,
        l = 0,
        helloWorld = array;
    document.writeln("List of encounters: ");
    for (k = 0; k < helloWorld.length; k = k + 1) {
        for (l = 0; l < helloWorld[k].length; l = l + 1) {
            document.writeln(helloWorld[k][l] + ", ");
        }
    }
}

function sumarray(arr) {
    "use strict";
    var sum = 0,
        i = 0,
        j = 0;
    for (i = 0; i < arr.length; i = i + 1) {
        for (j = 0; j < arr[i].length; j = j + 1) {
            sum += arr[i][j];
        }
    }
    return sum;
}

function printSys(goal, minimum, maximum) {
    "use strict";
    printEncounters(encounterGen(goal, minimum, maximum));
    //document.createElement("br");
    //document.createElement("br");
    //document.createElement("br");
    document.writeln("Total!: " + sumarray(encounterGen(goal, minimum, maximum)));
    document.writeln("battles: " + encounterGen(goal, minimum, maximum).length);
}
 
$("input").on("click", function () {
    "use strict";
    printSys(20, 0.5, 1);
});